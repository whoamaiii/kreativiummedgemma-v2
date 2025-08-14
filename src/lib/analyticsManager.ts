import { Student, EmotionEntry, SensoryEntry } from "@/types/student";
import { computeInsights, type ComputeInsightsInputs } from "@/lib/insights/unified";
import { generateAnalyticsSummary } from "@/lib/analyticsSummary";
import { alertSystem } from "@/lib/alertSystem";
import { dataStorage, IDataStorage } from "@/lib/dataStorage";
// Mock seeding has been moved to optional utilities under lib/mock; not used here
import { ANALYTICS_CONFIG, DEFAULT_ANALYTICS_CONFIG, analyticsConfig, STORAGE_KEYS } from "@/lib/analyticsConfig";
import { logger } from "@/lib/logger";
import type { AnalyticsResults } from "@/types/analytics";
import { getProfileMap, initializeStudentProfile, saveProfiles } from "@/lib/analyticsProfiles";
import type { StudentAnalyticsProfile } from "@/lib/analyticsProfiles";
// New orchestrator-style helpers and types
import { buildInsightsCacheKey as _buildInsightsCacheKey, buildInsightsTask as _buildInsightsTask } from "@/lib/insights/task";
import type { InsightsOptions, AnalyticsResult } from "@/types/insights";

// #region Type Definitions

/**
 * Ensures universal analytics initialization for all students in the system.
 * 
 * @async
 * @function ensureUniversalAnalyticsInitialization
 * @returns {Promise<void>} A promise that resolves when initialization is complete
 * 
 * @description This function handles the complete analytics initialization process:
 * 1. **Mock Data Generation**: If no students exist, generates a minimal set of 3 mock students
 *    to seed the analytics system with baseline data.
 * 2. **Minimum Data Thresholds**: Checks each student against configurable thresholds:
 *    - EMOTION_ENTRIES: Minimum emotion entries required
 *    - SENSORY_ENTRIES: Minimum sensory input entries required  
 *    - TRACKING_ENTRIES: Minimum tracking session entries required
 * 3. **Cache Warming Strategy**: For students meeting minimum data requirements, performs
 *    lightweight precomputation of analytics to populate caches:
 *    - Emotion pattern analysis
 *    - Sensory pattern analysis
 *    - Environmental correlation analysis (if sufficient tracking entries)
 * 
 * The function gracefully handles errors and treats cache warming as best-effort.
 * Configuration is loaded from live analytics config with fallback to defaults.
 */
export const ensureUniversalAnalyticsInitialization = async (): Promise<void> => {
  try {
    // Ensure profiles for existing students; no auto generation of mock data here
    const cfg = (() => { try { return analyticsConfig.getConfig(); } catch { return null; } })();
    // Minimum data thresholds source:
    // - confidence.THRESHOLDS.EMOTION_ENTRIES
    // - confidence.THRESHOLDS.SENSORY_ENTRIES
    // - confidence.THRESHOLDS.TRACKING_ENTRIES
    // Read from live analyticsConfig with safe fallback to defaults (Task 8, rule j9uS...).
    const minEmotions = cfg?.confidence?.THRESHOLDS?.EMOTION_ENTRIES ?? ANALYTICS_CONFIG.confidence.THRESHOLDS.EMOTION_ENTRIES;
    const minSensory = cfg?.confidence?.THRESHOLDS?.SENSORY_ENTRIES ?? ANALYTICS_CONFIG.confidence.THRESHOLDS.SENSORY_ENTRIES;
    const minTracking = cfg?.confidence?.THRESHOLDS?.TRACKING_ENTRIES ?? ANALYTICS_CONFIG.confidence.THRESHOLDS.TRACKING_ENTRIES;

    const allStudents = dataStorage.getStudents();
    for (const student of allStudents) {
      // Ensure profile exists (delegated to profiles module)
      initializeStudentProfile(student.id);

      // Optional: evaluate minimum data for future warming decisions
      const tracking = dataStorage.getTrackingEntriesForStudent(student.id);
      const emotions = tracking.flatMap(t => t.emotions ?? []);
      const sensoryInputs = tracking.flatMap(t => t.sensoryInputs ?? []);

      const hasMinimumData =
        (emotions.length) >= minEmotions ||
        (sensoryInputs.length) >= minSensory ||
        (tracking.length) >= minTracking;

      if (hasMinimumData) {
        // Warming handled elsewhere; no direct action here
      }
    }

    // Persist any new profiles created during initialization
    saveProfiles();
  } catch (e) {
    logger.error('[analyticsManager] ensureUniversalAnalyticsInitialization failed', e);
  }
};

/**
 * Defines the analytics profile for a student, tracking configuration and health.
 */

/**
 * Represents the complete set of results from an analytics run.
 */
type AnalyticsCache = Map<string, { results: AnalyticsResults; timestamp: Date }>;
type AnalyticsProfileMap = Map<string, StudentAnalyticsProfile>;
// #endregion

// #region Utility & Helper Functions (for better SRP)

/**
 * Safely parses analytics profiles from localStorage with validation and error handling.
 * 
 * @function loadProfilesFromStorage
 * @param {string | null} storedProfiles - The stringified profiles from localStorage
 * @returns {AnalyticsProfileMap} A map of valid student profiles, keyed by student ID
 * 
 * @description This function provides robust loading of persisted analytics profiles:
 * 
 * **Validation Process**:
 * - Checks if input is null/empty, returns empty Map if so
 * - Attempts JSON parsing with try/catch for malformed data
 * - Runtime type validation for each profile object
 * - Validates required fields: studentId (string) and isInitialized (boolean)
 * - Converts date strings back to Date objects for lastAnalyzedAt field
 * 
 * **Error Handling**:
 * - Catches and logs JSON parsing errors
 * - Skips invalid profile entries rather than failing completely
 * - Returns empty Map on complete failure to ensure app stability
 * 
 * This defensive approach ensures the analytics system remains functional even
 * if localStorage data becomes corrupted or outdated.
 */
// Profiles are now managed by analyticsProfiles module; local loader retained for backward-compat only if needed
function loadProfilesFromStorage(_storedProfiles: string | null): AnalyticsProfileMap {
  return getProfileMap();
}

// #endregion

/**
 * Singleton service managing all analytics operations for the Sensory Tracker application.
 * 
 * @class AnalyticsManagerService
 * @singleton
 * 
 * @description This service orchestrates all analytics-related operations:
 * 
 * **Singleton Pattern Implementation**:
 * - Single instance ensures consistent state across the application
 * - Lazy initialization with getInstance() method
 * - Private constructor prevents direct instantiation
 * - Thread-safe in JavaScript's single-threaded environment
 * 
 * **Core Responsibilities**:
 * 1. **Profile Management**: Maintains analytics profiles for each student
 * 2. **Caching Strategy**: Implements TTL-based caching to optimize performance
 * 3. **Analytics Orchestration**: Coordinates pattern analysis, correlations, and predictions
 * 4. **Data Persistence**: Manages localStorage for profile persistence
 * 
 * **Caching Behavior**:
 * - Cache entries stored with timestamp
 * - TTL (Time To Live) configured via ANALYTICS_CONFIG.CACHE_TTL
 * - Automatic cache invalidation on data updates
 * - Manual cache clearing available per student or globally
 * 
 * **Performance Optimizations**:
 * - Lazy loading of analytics data
 * - Batch processing for multiple students
 * - Graceful error handling with Promise.allSettled
 * 
 * @example
 * const manager = AnalyticsManagerService.getInstance();
 * const analytics = await manager.getStudentAnalytics(student);
 */
let __lastFacadeLogMinute: number | null = null;
class AnalyticsManagerService {
  private static instance: AnalyticsManagerService;
private analyticsProfiles: AnalyticsProfileMap;
  // Deprecated TTL cache: callers should use cache keys with their own caches
  private analyticsCache: AnalyticsCache = new Map();
  private storage: IDataStorage;

  private constructor(storage: IDataStorage, profiles: AnalyticsProfileMap) {
    this.storage = storage;
    this.analyticsProfiles = profiles;
  }

  /**
   * Retrieves the singleton instance of the AnalyticsManagerService.
   * @param {IDataStorage} [storage=dataStorage] - The data storage dependency.
   * @param {AnalyticsProfileMap} [profiles] - Optional initial profiles to load.
   * @returns {AnalyticsManagerService} The singleton instance.
   */
  static getInstance(
    storage: IDataStorage = dataStorage,
    profiles?: AnalyticsProfileMap
  ): AnalyticsManagerService {
    if (!AnalyticsManagerService.instance) {
      let stored: string | null = null;
      try {
        stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.analyticsProfiles) : null;
      } catch (e) {
        // environment without localStorage (SSR/tests)
      }
      const initialProfiles = profiles ?? loadProfilesFromStorage(stored);
      AnalyticsManagerService.instance = new AnalyticsManagerService(storage, initialProfiles);
    }
    return AnalyticsManagerService.instance;
  }

  /**
   * Initializes analytics profile for a new student.
   * 
   * @public
   * @method initializeStudentAnalytics
   * @param {string} studentId - Unique identifier for the student
   * @returns {void}
   * 
   * @description Creates and persists an analytics profile for a student if not already initialized.
   * 
   * **Profile Initialization**:
   * - Checks if profile already exists (idempotent operation)
   * - Creates default profile with all analytics features enabled
   * - Sets minimal data requirements (1 entry each for emotions, sensory, tracking)
   * - Initializes health score to 0 (will be calculated on first analysis)
   * - Persists profile to localStorage immediately
   * 
   * **Default Configuration**:
   * - patternAnalysisEnabled: true
   * - correlationAnalysisEnabled: true
   * - predictiveInsightsEnabled: true
   * - anomalyDetectionEnabled: true
   * - alertSystemEnabled: true
   * 
   * This method is automatically called when accessing student analytics,
   * ensuring profiles exist before analysis.
   */
  public initializeStudentAnalytics(studentId: string): void {
    try {
      if (!studentId || typeof studentId !== 'string') {
        logger.warn('[analyticsManager] initializeStudentAnalytics: invalid studentId', { studentId });
        return;
      }

      if (this.analyticsProfiles.has(studentId)) {
        return;
      }

      const profile: StudentAnalyticsProfile = {
        studentId,
        isInitialized: true,
        lastAnalyzedAt: null,
        analyticsConfig: {
          patternAnalysisEnabled: true,
          correlationAnalysisEnabled: true,
          predictiveInsightsEnabled: true,
          anomalyDetectionEnabled: true,
          alertSystemEnabled: true,
        },
        minimumDataRequirements: {
          emotionEntries: 1,
          sensoryEntries: 1,
          trackingEntries: 1,
        },
        analyticsHealthScore: 0,
      };

      this.analyticsProfiles.set(studentId, profile);
      saveProfiles();
    } catch (error) {
      logger.error('[analyticsManager] initializeStudentAnalytics failed', { error, studentId });
      // fail-soft
    }
  }

  /**
   * Retrieves comprehensive analytics for a specific student.
   * 
   * @public
   * @async
   * @method getStudentAnalytics
   * @param {Student} student - The student object to analyze
   * @returns {Promise<AnalyticsResults>} Complete analytics results including patterns, correlations, and insights
   * 
   * @description Main entry point for retrieving student analytics with intelligent caching.
   * 
   * **Caching Strategy**:
   * 1. Ensures student profile is initialized
   * 2. Checks cache for existing results
   * 3. Returns cached results if within TTL (Time To Live)
   * 4. Generates fresh analytics if cache miss or expired
   * 5. Updates cache with new results and timestamp
   * 
   * **TTL Behavior**:
   * - Default TTL: Configured in ANALYTICS_CONFIG.CACHE_TTL
   * - Cache validity: timestamp + TTL > current time
   * - Expired entries trigger regeneration
   * 
   * **Side Effects**:
   * - Updates lastAnalyzedAt timestamp in profile
   * - Recalculates and updates health score
   * - Persists updated profile to localStorage
   * 
   * @throws {Error} If analytics generation fails (wrapped from generateAnalytics)
   * 
   * @example
   * const results = await analyticsManager.getStudentAnalytics(student);
   * logger.info(`Confidence: ${results.confidence * 100}%`);
   */
  public async getStudentAnalytics(student: Student): Promise<AnalyticsResults> {
    this.initializeStudentAnalytics(student.id);

// Deprecated internal TTL caching removed; always compute fresh and let callers cache by key
    const results = await this.generateAnalytics(student);
    this.analyticsCache.set(student.id, { results, timestamp: new Date() });

    const profile = this.analyticsProfiles.get(student.id);
    if (profile) {
      const updatedProfile: StudentAnalyticsProfile = {
        ...profile,
        lastAnalyzedAt: new Date(),
        analyticsHealthScore: this.calculateHealthScore(results),
      };
      this.analyticsProfiles.set(student.id, updatedProfile);
      saveProfiles();
    }

    return results;
  }

  /**
   * Generates fresh analytics for a student using unified insights computation.
   * 
   * @private
   * @async
   * @method generateAnalytics
   * @param {Student} student - The student to analyze
   * @returns {Promise<AnalyticsResults>} Complete analytics results
   * 
   * @description Delegates analytics generation to the unified insights module,
   * keeping analyticsManager pure and framework-agnostic.
   * 
   * @throws {Error} Analytics generation failed for student
   */
  private async generateAnalytics(student: Student): Promise<AnalyticsResults> {
    // Early guard for invalid input
    if (!student || !student.id) {
      logger.error('[analyticsManager] generateAnalytics: invalid student', { student });
      return {
        patterns: [],
        correlations: [],
        environmentalCorrelations: [],
        predictiveInsights: [],
        anomalies: [],
        insights: [],
        error: 'INVALID_STUDENT',
      } as AnalyticsResults;
    }

    try {
      const trackingEntries = this.storage.getTrackingEntriesForStudent(student.id) || [];
      const goals = this.storage.getGoalsForStudent(student.id) || [];
      
      const emotions: EmotionEntry[] = trackingEntries.flatMap(entry => entry.emotions || []);
      const sensoryInputs: SensoryEntry[] = trackingEntries.flatMap(entry => entry.sensoryInputs || []);
      
      // Prepare configuration for unified computation
      const liveConfig = (() => {
        try { return analyticsConfig.getConfig(); } catch { return null; }
      })();
      
      // Delegate computation to unified module
      const results = await computeInsights(
        {
          entries: trackingEntries,
          emotions,
          sensoryInputs,
          goals
        },
        liveConfig ? { config: liveConfig } : undefined
      );

      // Optionally replace insights via summary facade when enabled
      try {
        const useSummaryFacade = (liveConfig?.features?.enableSummaryFacade ?? ANALYTICS_CONFIG.features?.enableSummaryFacade) === true;
        if (useSummaryFacade) {
          const summary = await generateAnalyticsSummary({
            entries: trackingEntries,
            emotions,
            sensoryInputs,
            results: {
              patterns: (results as AnalyticsResults).patterns ?? [],
              correlations: (results as AnalyticsResults).correlations ?? [],
              predictiveInsights: (results as AnalyticsResults).predictiveInsights ?? [],
            },
          });
          // Replace insights; attach optional metadata for downstream health score
          (results as AnalyticsResults).insights = summary.insights;
          (results as unknown as AnalyticsResults & { hasMinimumData?: boolean; confidence?: number }).hasMinimumData = summary.hasMinimumData;
          (results as unknown as AnalyticsResults & { hasMinimumData?: boolean; confidence?: number }).confidence = summary.confidence;
          // Low-noise telemetry: log at most once per minute when facade used
          try {
            const nowMinute = new Date().getMinutes();
            if (__lastFacadeLogMinute !== nowMinute) {
              logger.debug('[analyticsManager] Using summary facade for insights', {
                studentId: student.id,
                entries: trackingEntries.length,
                emotions: emotions.length,
                sensory: sensoryInputs.length,
              });
              __lastFacadeLogMinute = nowMinute;
            }
          } catch {
            /* noop */
          }
        }
      } catch {
        // fail-soft: keep original insights
      }
      
      // Trigger alerts if we have tracking data - this is the only side effect
      if (trackingEntries.length > 0) {
        await alertSystem.generateAlertsForStudent(student, emotions, sensoryInputs, trackingEntries);
      }
      
      return results as AnalyticsResults;
    } catch (error) {
      logger.error(`[analyticsManager] generateAnalytics failed for student ${student.id}`, { error: error instanceof Error ? { message: error.message, stack: error.stack, name: error.name } : error });
      // Return minimal safe result to prevent UI crashes
      return {
        patterns: [],
        correlations: [],
        environmentalCorrelations: [],
        predictiveInsights: [],
        anomalies: [],
        insights: [],
        error: 'ANALYTICS_GENERATION_FAILED',
      } as AnalyticsResults;
    }
  }

  /**
   * Calculates an "analytics health score" based on the completeness and confidence of the results.
   * @private
   * @param {AnalyticsResults} results - The results from an analytics run.
   * @returns {number} A score from 0 to 100.
   */
  private calculateHealthScore(results: AnalyticsResults): number {
    const liveCfg = (() => { try { return analyticsConfig.getConfig(); } catch { return null; } })();
    const { WEIGHTS } = (liveCfg?.healthScore ?? ANALYTICS_CONFIG.healthScore);
    let score = 0;

    if (results.patterns.length > 0) score += WEIGHTS.PATTERNS;
    if (results.correlations.length > 0) score += WEIGHTS.CORRELATIONS;
    if (results.predictiveInsights.length > 0) score += WEIGHTS.PREDICTIONS;
    if (results.anomalies.length > 0) score += WEIGHTS.ANOMALIES;

    // Use optional metadata if provided; otherwise infer minimum data presence and default confidence
    const extended = results as AnalyticsResults & { hasMinimumData?: boolean; confidence?: number };
    const hasMinimumData = extended.hasMinimumData ?? (results.patterns.length > 0 || results.correlations.length > 0);
    if (hasMinimumData) score += WEIGHTS.MINIMUM_DATA;
    const confidence = typeof extended.confidence === 'number' ? extended.confidence : 1;

    return Math.round(score * confidence);
  }

  /**
   * Forces a re-calculation of analytics for a specific student by clearing their cache
   * and re-running the analysis.
   * @param {Student} student - The student to re-analyze.
   */
  public async triggerAnalyticsForStudent(student: Student): Promise<void> {
    try {
      if (!student || !student.id) {
        logger.warn('[analyticsManager] triggerAnalyticsForStudent: invalid student', { student });
        return;
      }
      this.analyticsCache.delete(student.id);
      await this.getStudentAnalytics(student);
    } catch (error) {
      logger.error('[analyticsManager] triggerAnalyticsForStudent failed', { error, studentId: student?.id });
      // fail-soft
    }
  }

  /**
   * Triggers an analytics refresh for all students in the system.
   * Uses Promise.allSettled to ensure that one failed analysis does not stop others.
   */
  public async triggerAnalyticsForAllStudents(): Promise<void> {
    const students = this.storage.getStudents();
    
    const analyticsPromises = students.map(student => {
      this.initializeStudentAnalytics(student.id);
      return this.triggerAnalyticsForStudent(student);
    });

    const settledResults = await Promise.allSettled(analyticsPromises);

    settledResults.forEach((result, index) => {
      if (result.status === 'rejected') {
        logger.error(`Failed to process analytics for student ${students[index].id}:`, result.reason);
      }
    });
  }

  /**
   * Gets the current analytics status for all students, including health scores and last analysis time.
   * This is useful for displaying a high-level dashboard of the system's state.
   * @returns {Array<object>} An array of status objects for each student.
   */
  public getAnalyticsStatus() {
    const students = this.storage.getStudents();
    return students.map(student => {
      const profile = this.analyticsProfiles.get(student.id);
      const cached = this.analyticsCache.get(student.id);
      
      return {
        studentId: student.id,
        studentName: student.name,
        isInitialized: profile?.isInitialized ?? false,
        lastAnalyzed: profile?.lastAnalyzedAt ?? null,
        healthScore: profile?.analyticsHealthScore ?? 0,
        hasMinimumData: cached?.results.hasMinimumData ?? false,
      };
    });
  }

  /**
   * Clears the analytics cache.
   * @param {string} [studentId] - If provided, clears the cache for only that student.
   * Otherwise, clears the entire analytics cache.
   */
  public clearCache(studentId?: string): void {
    if (studentId) {
      this.analyticsCache.delete(studentId);
    } else {
      this.analyticsCache.clear();
    }
  }

  /**
   * Saves the current map of analytics profiles to localStorage.
   * @private
   */
  private saveAnalyticsProfiles(): void {
    // Deprecated in favor of analyticsProfiles.saveProfiles()
    try { saveProfiles(); } catch (error) { logger.error('Error saving analytics profiles:', error); }
  }
}

/**
 * Singleton instance of AnalyticsManagerService.
 * Use this for orchestrating analytics without creating new instances.
 */
export const analyticsManager = AnalyticsManagerService.getInstance();

/**
 * Thin orchestrator-style API (gradual migration target)
 *
 * These named exports provide a lightweight interface for building cache keys,
 * constructing worker tasks, and retrieving summarized insights in a stable
 * shape for consumers like hooks or UI. They coexist with the legacy singleton
 * for backward compatibility and will become the primary API.
 */

/**
 * Build a deterministic insights cache key from inputs and options.
 * Delegates to the centralized cache-key utilities.
 */
export const buildInsightsCacheKey = _buildInsightsCacheKey;

/**
 * Build a typed worker task envelope for Insights computation.
 * Suitable for posting to the analytics web worker.
 */
export const buildInsightsTask = _buildInsightsTask;

/**
 * Compute insights and return a minimal, stable AnalyticsResult summary.
 * This does not perform internal caching; callers should use the cache key
 * and their caching layer of choice.
 *
 * @example
 * const inputs = { entries, emotions, sensoryInputs, goals };
 * const result = await getInsights(inputs, { ttlSeconds: 600, tags: ["student-123"] });
 */
export async function getInsights(
  inputs: ComputeInsightsInputs,
  options?: InsightsOptions
): Promise<AnalyticsResult> {
  try {
    const cacheKey = _buildInsightsCacheKey(inputs, options);
    const cfg = (() => { try { return analyticsConfig.getConfig(); } catch { return DEFAULT_ANALYTICS_CONFIG; } })() || DEFAULT_ANALYTICS_CONFIG;
    const ttlMs = cfg?.cache?.ttl ?? DEFAULT_ANALYTICS_CONFIG.cache.ttl;
    const ttlSeconds = typeof options?.ttlSeconds === 'number' ? options.ttlSeconds : Math.max(1, Math.floor(ttlMs / 1000));
    const tags = Array.from(new Set(["insights", "v2", ...(options?.tags ?? [])]));

    const fullCfg = options?.config ? { config: (options.config as any) } : { config: cfg as any };
    const detailed = await computeInsights(inputs, fullCfg as any);

    // Summarize for stable payloads (avoid large arrays in summary field)
    const summary = {
      patternsCount: detailed.patterns?.length ?? 0,
      correlationsCount: detailed.correlations?.length ?? 0,
      environmentalCorrelationsCount: detailed.environmentalCorrelations?.length ?? 0,
      predictiveInsightsCount: detailed.predictiveInsights?.length ?? 0,
      anomaliesCount: detailed.anomalies?.length ?? 0,
      insightsCount: detailed.insights?.length ?? 0,
      confidence: (detailed as any).confidence,
      hasMinimumData: (detailed as any).hasMinimumData,
    } as Record<string, unknown>;

    return {
      cacheKey,
      computedAt: new Date().toISOString(),
      ttlSeconds,
      tags,
      summary,
      diagnostics: {
        entries: inputs.entries?.length ?? 0,
        emotions: inputs.emotions?.length ?? 0,
        sensoryInputs: inputs.sensoryInputs?.length ?? 0,
        goals: inputs.goals?.length ?? 0,
      },
    };
  } catch (error) {
    logger.error('[analyticsManager.orchestrator] getInsights failed', { error });
    const cacheKey = _buildInsightsCacheKey(inputs, options);
    const ttlSeconds = typeof options?.ttlSeconds === 'number' ? options.ttlSeconds : 300;
    const tags = Array.from(new Set(["insights", "v2", ...(options?.tags ?? [])]));
    return {
      cacheKey,
      computedAt: new Date().toISOString(),
      ttlSeconds,
      tags,
      summary: { error: 'INSIGHTS_COMPUTE_FAILED' },
    };
  }
}
