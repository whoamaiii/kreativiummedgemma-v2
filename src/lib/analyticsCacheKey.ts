/**
 * DEPRECATED SHIM
 *
 * This file exists for backward compatibility only. Please migrate imports to:
 *   import { ... } from '@/lib/analytics/cache-key'
 *
 * The exports below are re-exported directly from the canonical module to avoid
 * breaking existing code while allowing a gradual migration. This file may be
 * removed in a future release once all usages are updated.
 *
 * TODO(kill-shim): Remove this file after migrating all imports.
 *   - grep -R "@/lib/analyticsCacheKey" src tests | wc -l should be 0
 *   - remove this file and corresponding ESLint allowlist entries
 */

export {
  createCacheKey,
  createCacheKey as generateAnalyticsCacheKey,
  stableSerialize,
  stableHash,
  summarizeCounts,
  type CacheKeyOptions,
  type InputStructureCounts,
} from './analytics/cache-key';


