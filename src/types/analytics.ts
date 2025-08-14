// Shared analytics-related types
// No default exports per project rules

export type TabKey = 'charts' | 'patterns' | 'correlations' | 'alerts';

/**
 * Type definitions for analytics and pattern analysis
 */
import { PatternResult, CorrelationResult } from '@/lib/patternAnalysis';
import { PredictiveInsight, AnomalyDetection } from '@/lib/enhancedPatternAnalysis';
import { EmotionEntry, SensoryEntry, TrackingEntry } from './student';
import type { AnalyticsInputs, AnalyticsRuntimeConfig } from '@/types/insights';
import type { AnalyticsConfiguration as SourceAnalyticsConfiguration } from '@/lib/analyticsConfig';
import type { PRESET_CONFIGS as SOURCE_PRESETS } from '@/lib/analyticsConfig';
import { DEFAULT_ANALYTICS_CONFIG } from '@/lib/analyticsConfig';

/**
 * Analytics data input structure
 */
export interface AnalyticsData {
  entries: TrackingEntry[];
  emotions: EmotionEntry[];
  sensoryInputs: SensoryEntry[];
  cacheKey?: string;
  /** Optional runtime analytics configuration to use for this run. */
  config?: AnalyticsConfiguration;
}

/**
 * Keys representing dashboard charts that can be updated by worker messages
 */
export type AnalyticsChartKey =
  | 'emotionDistribution'
  | 'sensoryResponses'
  | 'emotionTrends'
  | 'patternHighlights'
  | 'correlationMatrix'
  | 'predictiveTimeline'
  | 'anomalyTimeline'
  | 'insightList';

/**
 * Analytics results structure
 */
export interface AnalyticsResults {
  patterns: PatternResult[];
  correlations: CorrelationResult[];
  environmentalCorrelations?: CorrelationResult[];
  predictiveInsights: PredictiveInsight[];
  anomalies: AnomalyDetection[];
  insights: string[];
  cacheKey?: string;
  error?: string;
  /** Optional metadata for downstream consumers describing which charts should update */
  updatedCharts?: AnalyticsChartKey[];
}

/**
 * Partial analytics results for incremental updates from the worker
 */
export type AnalyticsResultsPartial = Partial<AnalyticsResults> & { cacheKey?: string };

/**
 * Worker message envelope for incremental communication
 */
export type WorkerMessageType = 'progress' | 'partial' | 'complete' | 'error';

export interface AnalyticsWorkerMessage {
  type: WorkerMessageType;
  cacheKey?: string;
  payload?: AnalyticsResultsPartial;
  error?: string;
  /** Which charts should update in response to this message */
  chartsUpdated?: AnalyticsChartKey[];
  /** Optional progress metadata for UI feedback and watchdog heartbeats */
  progress?: { stage: string; percent: number };
}

// -----------------------------------------------------------------------------
// Configuration Types (exported explicitly)
// -----------------------------------------------------------------------------

/**
 * Full analytics configuration shape. Source of truth lives in lib/analyticsConfig.
 * Consumers should read values via analyticsConfig.getConfig() at runtime.
 */
export type AnalyticsConfiguration = SourceAnalyticsConfiguration;

/** Pattern analysis thresholds and limits. */
export type PatternAnalysisConfig = AnalyticsConfiguration['patternAnalysis'];

/** Enhanced pattern analysis (trends, anomalies, predictions) settings. */
export type EnhancedAnalysisConfig = AnalyticsConfiguration['enhancedAnalysis'];

/** Time windows used for segmenting and aggregating data. */
export type TimeWindowsConfig = AnalyticsConfiguration['timeWindows'];

/** Alert sensitivity multipliers and level. */
export type AlertSensitivityConfig = AnalyticsConfiguration['alertSensitivity'];

/** Cache behavior configuration. */
export type CacheConfig = AnalyticsConfiguration['cache'];

/** Insight-related numeric thresholds and limits. */
export type InsightsConfig = AnalyticsConfiguration['insights'];

/** Confidence scoring thresholds and weights. */
export type ConfidenceConfig = AnalyticsConfiguration['confidence'];

/** Health score weighting configuration. */
export type HealthScoreConfig = AnalyticsConfiguration['healthScore'];

/** General analytics minimums and analysis period. */
export type CoreAnalyticsConfig = AnalyticsConfiguration['analytics'];

/** Emotion taxonomy and related lists. */
export type TaxonomyConfig = AnalyticsConfiguration['taxonomy'];

/** Available preset configuration keys. */
export type AnalyticsPresetKey = keyof typeof SOURCE_PRESETS;

// -----------------------------------------------------------------------------
// JSDoc for configuration options (field-level)
// -----------------------------------------------------------------------------

/**
 * Field-level documentation for PatternAnalysisConfig
 *
 * - minDataPoints: Minimum number of observations required before running correlation/pattern rules.
 * - correlationThreshold: Minimum absolute correlation (0..1) considered noteworthy.
 * - highIntensityThreshold: Value (e.g., 1..5) at/above which an emotion is considered high intensity.
 * - concernFrequencyThreshold: Proportion (0..1) of events considered frequent enough to flag concerns.
 * - emotionConsistencyThreshold: Proportion (0..1) indicating how consistent an emotion must be to form a pattern.
 * - moderateNegativeThreshold: Proportion (0..1) indicating moderate negative signals for early warnings.
 */
export type _Doc_PatternAnalysisConfig = PatternAnalysisConfig;

/**
 * Field-level documentation for EnhancedAnalysisConfig
 *
 * - trendThreshold: Minimum slope magnitude considered a meaningful trend.
 * - anomalyThreshold: Number of standard deviations from mean to be treated as an anomaly.
 * - minSampleSize: Minimum sample size for enhanced analyses to engage.
 * - predictionConfidenceThreshold: Probability threshold (0..1) to include predictions.
 * - riskAssessmentThreshold: Composite score threshold for highlighting risks.
 */
export type _Doc_EnhancedAnalysisConfig = EnhancedAnalysisConfig;

/**
 * Field-level documentation for TimeWindowsConfig
 *
 * - defaultAnalysisDays: Default lookback window for general analytics.
 * - recentDataDays: Recent window used for short-term insights.
 * - shortTermDays: Alternate short-term window (e.g., 2 weeks).
 * - longTermDays: Extended window for stability checks and baselines.
 */
export type _Doc_TimeWindowsConfig = TimeWindowsConfig;

/**
 * Field-level documentation for AlertSensitivityConfig
 *
 * - level: Coarse-grained sensitivity level (low|medium|high).
 * - emotionIntensityMultiplier: Scales intensity-related triggers.
 * - frequencyMultiplier: Scales frequency-related triggers.
 * - anomalyMultiplier: Scales anomaly-related triggers.
 */
export type _Doc_AlertSensitivityConfig = AlertSensitivityConfig;

/**
 * Field-level documentation for CacheConfig
 *
 * - ttl: Time-to-live in milliseconds for cached results.
 * - maxSize: Maximum number of cached entries.
 * - invalidateOnConfigChange: If true, clears caches when config changes.
 */
export type _Doc_CacheConfig = CacheConfig;

/**
 * Field-level documentation for InsightsConfig
 *
 * - MIN_SESSIONS_FOR_FULL_ANALYTICS: Minimum sessions before enabling full analytics.
 * - HIGH_CONFIDENCE_PATTERN_THRESHOLD: Threshold (0..1) for labeling high-confidence patterns.
 * - MAX_PATTERNS_TO_SHOW: Limit for patterns in UI.
 * - MAX_CORRELATIONS_TO_SHOW: Limit for correlations in UI.
 * - MAX_PREDICTIONS_TO_SHOW: Limit for predictive insights in UI.
 * - RECENT_EMOTION_COUNT: Number of latest emotion entries to consider "recent".
 * - POSITIVE_EMOTION_TREND_THRESHOLD: Threshold (0..1) for positive trend highlighting.
 * - NEGATIVE_EMOTION_TREND_THRESHOLD: Threshold (0..1) for negative trend highlighting.
 */
export type _Doc_InsightsConfig = InsightsConfig;

/**
 * Field-level documentation for ConfidenceConfig
 *
 * - THRESHOLDS: Minimum data presence and recency limits.
 *   - EMOTION_ENTRIES, SENSORY_ENTRIES, TRACKING_ENTRIES, DAYS_SINCE_LAST_ENTRY
 * - WEIGHTS: Relative contributions to the overall confidence score.
 *   - EMOTION, SENSORY, TRACKING, RECENCY_BOOST
 */
export type _Doc_ConfidenceConfig = ConfidenceConfig;

/**
 * Field-level documentation for HealthScoreConfig
 *
 * - WEIGHTS: Weight distribution across analytics dimensions.
 *   - PATTERNS, CORRELATIONS, PREDICTIONS, ANOMALIES, MINIMUM_DATA
 */
export type _Doc_HealthScoreConfig = HealthScoreConfig;

/**
 * Field-level documentation for CoreAnalyticsConfig
 *
 * - MIN_TRACKING_FOR_CORRELATION: Minimum tracking entries required before computing correlations.
 * - MIN_TRACKING_FOR_ENHANCED: Minimum tracking entries required before running enhanced analyses.
 * - ANALYSIS_PERIOD_DAYS: Default analysis period for background jobs.
 */
export type _Doc_CoreAnalyticsConfig = CoreAnalyticsConfig;

/**
 * Field-level documentation for TaxonomyConfig
 *
 * - positiveEmotions: List of emotion labels considered positive, used by insights and summaries.
 */
export type _Doc_TaxonomyConfig = TaxonomyConfig;

// -----------------------------------------------------------------------------
// Examples (for documentation and tests)
// -----------------------------------------------------------------------------

/** Example: Balanced/default configuration clone. */
export const EXAMPLE_CONFIG_BALANCED: AnalyticsConfiguration = {
  ...DEFAULT_ANALYTICS_CONFIG,
};

/** Example: Conservative configuration (higher thresholds, fewer alerts). */
export const EXAMPLE_CONFIG_CONSERVATIVE: AnalyticsConfiguration = {
  ...DEFAULT_ANALYTICS_CONFIG,
  patternAnalysis: {
    ...DEFAULT_ANALYTICS_CONFIG.patternAnalysis,
    minDataPoints: 5,
    correlationThreshold: 0.4,
    concernFrequencyThreshold: 0.4,
  },
  enhancedAnalysis: {
    ...DEFAULT_ANALYTICS_CONFIG.enhancedAnalysis,
    anomalyThreshold: 2.0,
    minSampleSize: 8,
  },
  alertSensitivity: {
    level: 'low',
    emotionIntensityMultiplier: 0.8,
    frequencyMultiplier: 0.8,
    anomalyMultiplier: 0.8,
  },
};

/** Example: Sensitive configuration (lower thresholds, more alerts). */
export const EXAMPLE_CONFIG_SENSITIVE: AnalyticsConfiguration = {
  ...DEFAULT_ANALYTICS_CONFIG,
  patternAnalysis: {
    ...DEFAULT_ANALYTICS_CONFIG.patternAnalysis,
    minDataPoints: 2,
    correlationThreshold: 0.15,
    concernFrequencyThreshold: 0.2,
  },
  enhancedAnalysis: {
    ...DEFAULT_ANALYTICS_CONFIG.enhancedAnalysis,
    anomalyThreshold: 1.0,
    minSampleSize: 3,
  },
  alertSensitivity: {
    level: 'high',
    emotionIntensityMultiplier: 1.2,
    frequencyMultiplier: 1.2,
    anomalyMultiplier: 1.2,
  },
};

/** Example: Custom configuration tuned for short-term trend detection. */
export const EXAMPLE_CONFIG_SHORT_TERM: AnalyticsConfiguration = {
  ...DEFAULT_ANALYTICS_CONFIG,
  timeWindows: {
    ...DEFAULT_ANALYTICS_CONFIG.timeWindows,
    defaultAnalysisDays: 14,
    recentDataDays: 5,
    shortTermDays: 7,
    longTermDays: 60,
  },
  enhancedAnalysis: {
    ...DEFAULT_ANALYTICS_CONFIG.enhancedAnalysis,
    trendThreshold: 0.03,
    predictionConfidenceThreshold: 0.55,
  },
};

// -----------------------------------------------------------------------------
// Migration Notes (breaking changes guidance)
// -----------------------------------------------------------------------------

/**
 * Migration Notes:
 *
 * 1) Taxonomy location
 *    - Then: POSITIVE_EMOTIONS was often referenced via ANALYTICS_CONFIG.POSITIVE_EMOTIONS (Set)
 *    - Now:  Use analyticsConfig.getConfig().taxonomy.positiveEmotions (string[])
 *    - Why:  Consolidate emotion taxonomy under a dedicated section and prefer serializable arrays.
 *    - Action: Replace Set-based checks with array includes or convert to Set locally when needed.
 *
 * 2) Runtime access
 *    - Then: Some modules imported DEFAULT_ANALYTICS_CONFIG directly.
 *    - Now:  Read current config through analyticsConfig.getConfig() to respect user overrides.
 *    - Action: Only import types from this module; prefer runtime reads via analyticsConfig.
 *
 * 3) Presets
 *    - Preset keys are available via AnalyticsPresetKey. Use analyticsConfig.setPreset(key) at runtime.
 */
export const ANALYTICS_CONFIG_MIGRATION_NOTES = true as const;

// -----------------------------------------------------------------------------
// Cache & Manager types
// -----------------------------------------------------------------------------

/**
 * Cache interface for pattern analysis
 */
export interface AnalyticsCacheInterface {
  get(key: string): unknown | undefined;
  set(key: string, value: unknown, tags?: string[]): void;
  has(key: string): boolean;
  invalidateByTag(tag: string): number;
  getDataFingerprint(data: unknown): string;
  createKey(prefix: string, params: Record<string, unknown>): string;
}

/**
 * Worker cache entry
 */
export interface WorkerCacheEntry {
  data: unknown;
  expires: number;
  tags?: string[];
}

/**
 * Options for configuring the analytics manager, including cache behavior and
 * runtime config. This is used by hooks (e.g., useAnalyticsWorker) and
 * services coordinating analytics runs.
 */
export interface AnalyticsManagerOptions {
  /** Time-to-live for cached results in seconds. */
  ttlSeconds?: number;
  /** Tags for grouping and invalidating cached entries. */
  tags?: string[];
  /** Runtime configuration overrides for analytics processing. */
  config?: AnalyticsRuntimeConfig;
}

/**
 * Task sent to analytics workers/queues. Keeps payloads small and typed.
 */
export interface AnalyticsWorkerTask {
  /** Logical task type (e.g., 'insights', 'patterns', 'full'). */
  type: string;
  /** Typed payload describing the inputs for the computation. */
  payload: AnalyticsInputs;
  /** Stable cache key for deduplication and reuse. */
  cacheKey: string;
  /** TTL to apply to the produced result, in seconds. */
  ttlSeconds?: number;
  /** Cache tags for invalidation. */
  tags?: string[];
}
