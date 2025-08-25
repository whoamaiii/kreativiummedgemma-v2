/**
 * Shared environment helpers
 */
export const POC_MODE: boolean = (
  (import.meta as any)?.env?.MODE === 'poc' ||
  (import.meta as any)?.env?.VITE_POC_MODE === 'true'
);

export const IS_PROD: boolean = (import.meta as any)?.env?.PROD === true;

/**
 * Feature flag to expose Gemma demo UI.
 * Enable by setting VITE_ENABLE_GEMMA_DEMO to '1' | 'true' | 'yes'.
 */
export const ENABLE_GEMMA_DEMO: boolean = (() => {
  try {
    const v = ((import.meta as any)?.env?.VITE_ENABLE_GEMMA_DEMO ?? '').toString().toLowerCase();
    return v === '1' || v === 'true' || v === 'yes';
  } catch {
    return false;
  }
})();

/**
 * Debug flag to force-disable the analytics worker and use the fallback path.
 * Set VITE_DISABLE_ANALYTICS_WORKER to '1' | 'true' | 'yes'.
 */
export const DISABLE_ANALYTICS_WORKER: boolean = (() => {
  try {
    const v = ((import.meta as any)?.env?.VITE_DISABLE_ANALYTICS_WORKER ?? '').toString().toLowerCase();
    return v === '1' || v === 'true' || v === 'yes';
  } catch {
    return false;
  }
})();

/**
 * BigstianAI feature flag for enabling AI sections in reports and explainability.
 * Set VITE_ENABLE_BIGSTIAN_AI to '1' | 'true' | 'yes'.
 */
export const ENABLE_BIGSTIAN_AI: boolean = (() => {
  try {
    const v = ((import.meta as any)?.env?.VITE_ENABLE_BIGSTIAN_AI ?? '').toString().toLowerCase();
    // Enable by default in development for testing
    return v === '1' || v === 'true' || v === 'yes' || (!IS_PROD && v !== 'false' && v !== '0');
  } catch {
    return !IS_PROD; // Default to enabled in dev
  }
})();

