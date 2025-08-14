// Cache key computation is centralized via buildInsightsCacheKey

/**
 * @file src/hooks/useAnalyticsWorker.ts
 * 
 * This hook encapsulates the logic for interacting with the analytics web worker.
 * It simplifies the process of creating, communicating with, and terminating the worker,
 * providing a clean, React-friendly interface for components to offload heavy computations.
 * Now enhanced with performance caching to avoid redundant calculations.
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnalyticsData, AnalyticsResults, AnalyticsWorkerMessage } from '@/types/analytics';
import { usePerformanceCache } from './usePerformanceCache';
import { analyticsConfig } from '@/lib/analyticsConfig';
import { getValidatedConfig, validateAnalyticsRuntimeConfig } from '@/lib/analyticsConfigValidation';
import { buildInsightsCacheKey, buildInsightsTask } from '@/lib/analyticsManager';
import { logger } from '@/lib/logger';
import { diagnostics } from '@/lib/diagnostics';
import { analyticsWorkerFallback } from '@/lib/analyticsWorkerFallback';
import { POC_MODE } from '@/lib/env';

// Define CacheStats type if not imported from usePerformanceCache
interface CacheStats {
  hits: number;
  misses: number;
  sets: number;
  evictions: number;
  invalidations: number;
  hitRate: number;
  size: number;
  memoryUsage?: number;
}

interface CachedAnalyticsWorkerOptions {
  cacheTTL?: number;
  enableCacheStats?: boolean;
  precomputeOnIdle?: boolean;
  // Optional injection for tests or advanced cache control
  extractTagsFromData?: (data: AnalyticsData | AnalyticsResults) => string[];
}

interface UseAnalyticsWorkerReturn {
  results: AnalyticsResults | null;
  isAnalyzing: boolean;
  error: string | null;
  runAnalysis: (data: AnalyticsData) => Promise<void>;
  precomputeCommonAnalytics: (dataProvider: () => AnalyticsData[]) => void;
  invalidateCacheForStudent: (studentId: string) => void;
  clearCache: () => void;
  cacheStats: CacheStats | null;
  cacheSize: number;
}

/**
 * @hook useAnalyticsWorker
 * 
 * A custom hook to manage the analytics web worker with integrated caching.
 * 
 * @param options Configuration options for caching and precomputation
 * @returns {object} An object containing:
 *  - `results`: The latest analysis results received from the worker or cache.
 *  - `isAnalyzing`: A boolean flag indicating if an analysis is currently in progress.
 *  - `error`: Any error message returned from the worker.
 *  - `runAnalysis`: A function to trigger a new analysis by posting data to the worker.
 *  - `cacheStats`: Performance statistics about cache usage (if enabled).
 *  - `clearCache`: Function to clear the analytics cache.
 *  - `invalidateCache`: Function to invalidate cache entries by tag or pattern.
 */
export const useAnalyticsWorker = (options: CachedAnalyticsWorkerOptions = {}): UseAnalyticsWorkerReturn => {
  // Resolve defaults from runtime analyticsConfig with safe fallbacks
  const liveCfgRaw = (() => { try { return analyticsConfig.getConfig(); } catch { return null; } })();
  const { config: liveCfg } = validateAnalyticsRuntimeConfig(liveCfgRaw ?? undefined);
  const resolvedTtl = typeof options.cacheTTL === 'number'
    ? options.cacheTTL
    : (liveCfg?.cache?.ttl ?? 300_000); // default 300s in ms
  const {
    cacheTTL = resolvedTtl,
    enableCacheStats = false,
    precomputeOnIdle = false
  } = options;

  const workerRef = useRef<Worker | null>(null);
  const watchdogRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [results, setResults] = useState<AnalyticsResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const idleCallbackRef = useRef<number | null>(null);

  // Initialize performance cache with appropriate settings
  const cache = usePerformanceCache<AnalyticsResults>({
    maxSize: (liveCfg?.cache?.maxSize ?? 50), // Use runtime config; fallback to 50
    ttl: cacheTTL,
    enableStats: enableCacheStats,
    versioning: true // Enable versioning to invalidate on data structure changes
  });

  /**
   * Extracts tags from analytics data for cache invalidation
   * Allow override via options for testing
   */
  const defaultExtractTagsFromData = useCallback((data: AnalyticsData | AnalyticsResults): string[] => {
    const tags: string[] = ['analytics'];
    
    // Add student-specific tags if available
    if ('entries' in data && (data as any).entries?.length > 0) {
      const studentIds = Array.from(new Set((data as any).entries.map((e: any) => e.studentId)));
      tags.push(...studentIds.map(id => `student-${id}`));
    }

    // Add date-based tags for time-sensitive invalidation
    const now = new Date();
    tags.push(`analytics-${now.getFullYear()}-${now.getMonth() + 1}`);
    
    return tags;
  }, []);
  const extractTagsFn = options.extractTagsFromData ?? defaultExtractTagsFromData;

  useEffect(() => {
    let isMounted = true; // Race condition guard
    
    // Initialize the analytics web worker
    const initializeWorker = async () => {
      try {
        if (POC_MODE) {
          // In POC mode, skip worker to reduce overhead and use fallback path
          if (isMounted) {
            workerRef.current = null;
          }
          return;
        }
        
        // Dynamically import the worker only when not in POC mode
        const mod = await import('@/workers/analytics.worker?worker');
        if (!isMounted) return; // Check if component is still mounted
        
        const WorkerCtor = (mod as any).default as { new(): Worker };
        const worker = new WorkerCtor();
        
        if (!isMounted) {
          // If component unmounted during initialization, clean up
          worker.terminate();
          return;
        }
        
        // Set up message handler for receiving results from the worker
        worker.onmessage = (event: MessageEvent<AnalyticsWorkerMessage>) => {
          if (!isMounted) return; // Ignore messages if component unmounted
          
          const { data: msg } = event;

          // Any message resets watchdog (heartbeat)
          if (watchdogRef.current) {
            clearTimeout(watchdogRef.current);
            watchdogRef.current = null;
          }

          if (msg.type === 'progress') {
            // Re-arm watchdog on heartbeat, keep analyzing true
            setIsAnalyzing(true);
            const timeoutMs = Math.max(15000, 3000);
            watchdogRef.current = setTimeout(() => {
              if (!isMounted) return;
              diagnostics.logWorkerTimeout('analytics', timeoutMs);
              setError('Worker timeout during progress.');
              setIsAnalyzing(false);
            }, timeoutMs);
            return;
          }

          if (msg.type === 'error') {
            logger.error('[useAnalyticsWorker] Worker error', msg.error);
            setError(msg.error || 'Unknown worker error');
            setIsAnalyzing(false);
            return;
          }

          if (msg.type === 'partial' && msg.payload) {
            // Merge partials into current results to enable incremental UI updates
            setResults(prev => {
              const base: AnalyticsResults = prev || {
                patterns: [],
                correlations: [],
                environmentalCorrelations: [],
                predictiveInsights: [],
                anomalies: [],
                insights: [],
                cacheKey: msg.cacheKey,
              };
              const merged: AnalyticsResults = {
                ...base,
                ...msg.payload,
                environmentalCorrelations: msg.payload.environmentalCorrelations || base.environmentalCorrelations || [],
                cacheKey: msg.cacheKey || base.cacheKey,
              };
              return merged;
            });
            setError(null);
            // Re-arm watchdog for next step
            const timeoutMs = Math.max(15000, 3000);
            watchdogRef.current = setTimeout(() => {
              if (!isMounted) return;
              diagnostics.logWorkerTimeout('analytics', timeoutMs);
              setError('Worker timeout after partial update.');
              setIsAnalyzing(false);
            }, timeoutMs);
            return;
          }

          if (msg.type === 'complete' && msg.payload) {
            const resultsWithDefaults: AnalyticsResults = {
              ...msg.payload,
              environmentalCorrelations: msg.payload.environmentalCorrelations || [],
            } as AnalyticsResults;

            const tags = extractTagsFn(resultsWithDefaults);
            if (resultsWithDefaults.cacheKey) {
              cache.set(resultsWithDefaults.cacheKey, resultsWithDefaults, tags);
            }

            setResults(resultsWithDefaults);
            setError(null);
            setIsAnalyzing(false);
            logger.debug('[useAnalyticsWorker] Received complete results from worker', { 
              cacheKey: resultsWithDefaults.cacheKey,
              patternsCount: resultsWithDefaults.patterns?.length || 0,
              insightsCount: resultsWithDefaults.insights?.length || 0,
              chartsUpdated: msg.chartsUpdated,
            });
            return;
          }
        };

        // Set up error handler for worker failures
        worker.onerror = async (error: ErrorEvent) => {
          if (!isMounted) return;
          
          logger.error('[useAnalyticsWorker] Worker runtime error, switching to fallback', error);
          
          // Clear watchdog timer
          if (watchdogRef.current) {
            clearTimeout(watchdogRef.current);
            watchdogRef.current = null;
          }
          
          // Terminate the failed worker and set to null to trigger fallback
          if (workerRef.current) {
            workerRef.current.terminate();
            workerRef.current = null;
          }
          
          // If we have pending analysis, process with fallback
          // This ensures we don't lose the current analysis request
          setError('Analytics worker encountered an error. Switching to fallback mode.');
          
          // Note: The next call to runAnalysis will automatically use the fallback
          // since workerRef.current is now null
        };
        
        // Only assign if still mounted
        if (isMounted) {
          workerRef.current = worker;
          logger.info('[useAnalyticsWorker] Analytics worker initialized successfully');
        } else {
          // Clean up if component unmounted during initialization
          worker.terminate();
        }
      } catch (error) {
        // If worker initialization fails, log and use fallback mode
        if (isMounted) {
          logger.error('[useAnalyticsWorker] Failed to initialize worker', error);
          workerRef.current = null;
        }
      }
    };
    
    initializeWorker();

    // Cleanup function to properly terminate worker on unmount
    return () => {
      isMounted = false;
      
      if (workerRef.current) {
        logger.debug('[useAnalyticsWorker] Terminating analytics worker');
        workerRef.current.terminate();
        workerRef.current = null;
      }
      if (idleCallbackRef.current) {
        cancelIdleCallback(idleCallbackRef.current);
        idleCallbackRef.current = null;
      }
      if (watchdogRef.current) {
        clearTimeout(watchdogRef.current);
        watchdogRef.current = null;
      }
    };
  }, [cache, extractTagsFn]);

  /**
   * Creates a cache key based on the analytics data using centralized helper
   */
  const createCacheKey = useCallback((data: AnalyticsData): string => {
    // Map AnalyticsData to ComputeInsightsInputs structure expected by cache key builder
    const inputs = {
      entries: data.entries,
      emotions: data.emotions,
      sensoryInputs: data.sensoryInputs,
      // goals are not available at this layer; omit for key purposes
    } as unknown as { entries: unknown[]; emotions: unknown[]; sensoryInputs: unknown[] };

    // Use live runtime config to ensure keys align across app and worker
    const cfg = getValidatedConfig();

    return buildInsightsCacheKey(inputs as any, { config: cfg });
  }, []);

  /**
   * Sends data to the worker to start a new analysis, checking cache first.
   * @param {AnalyticsData} data - The data to be analyzed.
   */
  const runAnalysis = useCallback(async (data: AnalyticsData) => {
    const cacheKey = createCacheKey(data);
    
    // Check cache first
    const cachedResult = cache.get(cacheKey);
    if (cachedResult) {
      // Reduce logging verbosity - only log on first hit per key
      if (!cache.get(`_logged_${cacheKey}`)) {
        try {
          logger.debug('[useAnalyticsWorker] cache hit', { cacheKey });
          cache.set(`_logged_${cacheKey}`, true, ['logging'], 60000); // Log once per minute max
        } catch (err) {
          /* noop */
        }
      }
      setResults(cachedResult);
      setError(null);
      return;
    }

    // If no worker available, use fallback
    if (!workerRef.current) {
      // Only log fallback mode once per session
      if (!cache.get('_logged_fallback_mode')) {
        logger.debug('[useAnalyticsWorker] No worker available, using fallback');
        cache.set('_logged_fallback_mode', true, ['logging'], 3600000); // Log once per hour
      }
      setIsAnalyzing(true);
      setError(null);
      
      try {
        const results = await analyticsWorkerFallback.processAnalytics(data);
        setResults(results);
        // Cache the results
        const tags = extractTagsFn(data);
        cache.set(cacheKey, results, tags);
      } catch (error) {
        logger.error('[useAnalyticsWorker] Fallback failed', error);
        setError('Analytics processing failed. Please try again.');
        // Set minimal results to prevent UI crash
        setResults({
          patterns: [],
          correlations: [],
          environmentalCorrelations: [],
          predictiveInsights: [],
          anomalies: [],
          insights: ['Analytics temporarily unavailable.']
        });
      } finally {
        setIsAnalyzing(false);
      }
      return;
    }

    // If not in cache, proceed with worker analysis
    setIsAnalyzing(true);
    setError(null);
    setResults(null);

    // Start watchdog timeout to prevent indefinite spinner
    if (watchdogRef.current) {
      clearTimeout(watchdogRef.current);
      watchdogRef.current = null;
    }
    // Determine timeout from config if available; fallback to 15s minimum 3s
    const cfg = getValidatedConfig();
    // Clamp watchdog timeout to a sane upper bound to avoid indefinite spinners.
    // Use config ttl as a hint but never exceed 20s; keep a 5s lower bound.
    const hint = cfg?.cache?.ttl ?? 15000;
    const timeoutMs = Math.min(20000, Math.max(5000, hint));
    watchdogRef.current = setTimeout(async () => {
      try {
        logger.error('[useAnalyticsWorker] watchdog timeout: worker did not respond, attempting fallback');
      } catch {
        /* noop */
      }
      diagnostics.logWorkerTimeout('analytics', timeoutMs);
      
      // Terminate unresponsive worker
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
      
      // Attempt fallback processing
      try {
        const fallbackResults = await analyticsWorkerFallback.processAnalytics(data);
        setResults(fallbackResults);
        const tags = extractTagsFn(data);
        cache.set(cacheKey, fallbackResults, tags);
        setError('Worker timeout - results computed using fallback mode.');
      } catch (fallbackError) {
        logger.error('[useAnalyticsWorker] Fallback failed after watchdog timeout', fallbackError);
        setError('Analytics processing failed. Please try again.');
        // Set minimal results to prevent UI crash
        setResults({
          patterns: [],
          correlations: [],
          environmentalCorrelations: [],
          predictiveInsights: [],
          anomalies: [],
          insights: ['Analytics temporarily unavailable.']
        });
      } finally {
        setIsAnalyzing(false);
      }
    }, timeoutMs);
    
    // Get current configuration (validated)
    const config = getValidatedConfig();

    // Rate limit worker posting logs
    const logKey = `_logged_worker_post_${new Date().getMinutes()}`;
    if (!cache.get(logKey)) {
      try {
        logger.debug('[useAnalyticsWorker] posting to worker (runAnalysis)', { hasConfig: !!config, cacheKey });
        cache.set(logKey, true, ['logging'], 60000); // Log at most once per minute
      } catch {
        /* noop */
      }
    }
    
    // Send data to worker with cache key and configuration
    try {
      // Build typed Insights task with centralized key, ttl, and tags
      const inputs = {
        entries: data.entries,
        emotions: data.emotions,
        sensoryInputs: data.sensoryInputs,
      } as const;
      const task = buildInsightsTask(inputs, {
        config,
        // Propagate tags derived from inputs so worker-side caches can invalidate by tag
        tags: extractTagsFn(data),
      });

      // Rate limit WORKER_MESSAGE logs
      const workerLogKey = `_logged_worker_message_${cacheKey}_${new Date().getMinutes()}`;
      if (!cache.get(workerLogKey)) {
        logger.debug('[WORKER_MESSAGE] Sending Insights/Compute task to analytics worker', {
          cacheKey: task.cacheKey,
          ttlSeconds: task.ttlSeconds,
          tagCount: task.tags?.length ?? 0,
          emotionsCount: data.emotions?.length || 0,
          sensoryInputsCount: data.sensoryInputs?.length || 0,
          entriesCount: data.entries?.length || 0
        });
        cache.set(workerLogKey, true, ['logging'], 60000); // Log once per minute per cache key
      }
      workerRef.current.postMessage(task);
    } catch (postErr) {
      logger.error('[WORKER_MESSAGE] Failed to post message to worker, falling back to sync', { error: postErr });
      if (watchdogRef.current) {
        clearTimeout(watchdogRef.current);
        watchdogRef.current = null;
      }
      
      // Fallback to synchronous processing
      try {
        const fallbackResults = await analyticsWorkerFallback.processAnalytics(data);
        setResults(fallbackResults);
        const tags = extractTagsFn(data);
        cache.set(cacheKey, fallbackResults, tags);
        setError(null);
      } catch (fallbackError) {
        logger.error('[useAnalyticsWorker] Fallback processing failed after worker post error', fallbackError);
        setError('Analytics processing failed.');
      } finally {
        setIsAnalyzing(false);
      }
    }
  }, [cache, createCacheKey, extractTagsFn]);

  /**
   * Pre-compute analytics for common queries during idle time
   */
  const precomputeCommonAnalytics = useCallback((dataProvider: () => AnalyticsData[]) => {
    if (!precomputeOnIdle || !workerRef.current) return;

    const precompute = () => {
      const commonDataSets = dataProvider();
      const config = getValidatedConfig();
      
      commonDataSets.forEach((data, index) => {
        // Stagger the precomputation to avoid blocking
        setTimeout(() => {
          const cacheKey = createCacheKey(data);
          
          // Only compute if not already cached
          if (!cache.has(cacheKey)) {
            try {
        logger.debug('[useAnalyticsWorker] posting Insights/Compute task (precompute)', { hasConfig: !!config, cacheKey, idx: index });
            } catch {
              /* noop */
            }
            const task = buildInsightsTask({
              entries: data.entries,
              emotions: data.emotions,
              sensoryInputs: data.sensoryInputs,
            }, { config, tags: extractTagsFn(data) });
            workerRef.current?.postMessage(task);
          }
        }, index * 100); // 100ms between each precomputation
      });
    };

    // Use requestIdleCallback for precomputation
    if ('requestIdleCallback' in window) {
      idleCallbackRef.current = requestIdleCallback(precompute, { timeout: 5000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(precompute, 2000);
    }
  }, [precomputeOnIdle, cache, createCacheKey]);

  /**
   * Invalidate cache entries for a specific student
   */
  const invalidateCacheForStudent = useCallback((studentId: string) => {
    cache.invalidateByTag(`student-${studentId}`);
  }, [cache]);

  /**
   * Invalidate all analytics cache entries
   */
  const clearCache = useCallback(() => {
    cache.clear();
  }, [cache]);

  /**
   * Subscribe to configuration changes to invalidate cache
   */
  useEffect(() => {
    const unsubscribe = analyticsConfig.subscribe((newConfig) => {
      if (newConfig.cache.invalidateOnConfigChange) {
        clearCache();
      }
    });

    return unsubscribe;
  }, [clearCache]);

  /**
   * Get current cache statistics
   */
  const getCacheStats = useCallback(() => {
    return cache.stats;
  }, [cache]);

  return {
    results,
    isAnalyzing,
    error,
    runAnalysis,
    precomputeCommonAnalytics,
    invalidateCacheForStudent,
    clearCache,
    cacheStats: getCacheStats(),
    cacheSize: cache.size
  };
};