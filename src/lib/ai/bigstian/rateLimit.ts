type RateKey = string;

interface RateState {
  lastCallAtMs: number;
  inFlight: number;
}

const stateByKey = new Map<RateKey, RateState>();

export interface RateLimitOptions {
  minIntervalMs?: number;
  maxConcurrent?: number;
}

/**
 * Simple per-key rate limiter for AI actions. Rejects if called faster than
 * minIntervalMs or above maxConcurrent in-flight requests.
 */
export async function enforceRateLimit(key: RateKey, options?: RateLimitOptions): Promise<void> {
  const minIntervalMs = options?.minIntervalMs ?? 800; // default: 0.8s between calls
  const maxConcurrent = options?.maxConcurrent ?? 1;   // default: 1 in-flight per key

  const now = Date.now();
  const state = stateByKey.get(key) ?? { lastCallAtMs: 0, inFlight: 0 };

  if (state.inFlight >= maxConcurrent) {
    throw new Error('Rate limited: too many concurrent requests');
  }

  if (now - state.lastCallAtMs < minIntervalMs) {
    throw new Error('Rate limited: please wait a moment before trying again');
  }

  // Mark in-flight; caller must decrement via completeRateLimit
  state.inFlight += 1;
  state.lastCallAtMs = now;
  stateByKey.set(key, state);
}

/** Call when the protected request completes (finally). */
export function completeRateLimit(key: RateKey): void {
  const state = stateByKey.get(key);
  if (!state) return;
  state.inFlight = Math.max(0, state.inFlight - 1);
  stateByKey.set(key, state);
}


