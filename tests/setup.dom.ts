/**
 * JSDOM and browser API shims to reduce animation/portal noise in tests
 */
import { vi } from 'vitest';

// Prefer reduced motion in tests to minimize animations/transitions
if (!('matchMedia' in window)) {
  // @ts-expect-error jsdom shim
  window.matchMedia = (query: string) => {
    const listeners = new Set<(e: MediaQueryListEvent) => void>();
    const mql: MediaQueryList = {
      media: query,
      matches: /prefers-reduced-motion:\s*reduce/i.test(query),
      onchange: null,
      addListener: (cb: (e: MediaQueryListEvent) => void) => listeners.add(cb), // deprecated
      removeListener: (cb: (e: MediaQueryListEvent) => void) => listeners.delete(cb), // deprecated
      addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => listeners.add(cb),
      removeEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => listeners.delete(cb),
      dispatchEvent: (ev: Event) => {
        listeners.forEach((cb) => cb(ev as MediaQueryListEvent));
        return true;
      },
    } as any;
    return mql;
  };
}

// requestAnimationFrame polyfill to run timers immediately
if (!('requestAnimationFrame' in window)) {
  // @ts-expect-error jsdom shim
  window.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(Date.now()), 0) as unknown as number;
  // @ts-expect-error jsdom shim
  window.cancelAnimationFrame = (id: number) => clearTimeout(id as unknown as any);
}

// ResizeObserver mock
if (!(globalThis as any).ResizeObserver) {
  (globalThis as any).ResizeObserver = class {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  };
}

// IntersectionObserver mock
if (!(globalThis as any).IntersectionObserver) {
  (globalThis as any).IntersectionObserver = class {
    constructor(_cb: any, _opts?: any) {}
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    takeRecords = vi.fn(() => []);
    root = null;
    rootMargin = '0px';
    thresholds = [0];
  };
}
