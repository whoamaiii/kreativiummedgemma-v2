import { useEffect, useRef, useState } from 'react';

interface CapturedError {
  message: string;
  details?: string;
  timestamp: number;
}

export const DevErrorBanner = () => {
  const [lastError, setLastError] = useState<CapturedError | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const originalConsoleError = useRef<typeof console.error | null>(null);

  useEffect(() => {
    // Intercept console.error
    originalConsoleError.current = console.error;
    console.error = (...args: unknown[]) => {
      try {
        const msg = args.map(a => {
          if (a instanceof Error) return `${a.name}: ${a.message}`;
          if (typeof a === 'object') return JSON.stringify(a);
          return String(a);
        }).join(' ');
        setLastError({ message: msg, timestamp: Date.now() });
        setErrorCount(c => c + 1);
      } catch {}
      // Always forward to the original console
      originalConsoleError.current?.apply(console, args as []);
    };

    const onWindowError = (e: ErrorEvent) => {
      setLastError({ message: e.message || 'Unhandled error', details: e.error?.stack, timestamp: Date.now() });
      setErrorCount(c => c + 1);
    };
    const onUnhandledRejection = (e: PromiseRejectionEvent) => {
      const reason = (e as any).reason;
      const msg = reason?.message || String(reason) || 'Unhandled promise rejection';
      const stack = reason?.stack ? String(reason.stack) : undefined;
      setLastError({ message: msg, details: stack, timestamp: Date.now() });
      setErrorCount(c => c + 1);
    };

    window.addEventListener('error', onWindowError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    return () => {
      // Restore console.error
      if (originalConsoleError.current) {
        console.error = originalConsoleError.current;
      }
      window.removeEventListener('error', onWindowError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, []);

  if (isHidden || !lastError) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000]">
      <div className="mx-auto max-w-6xl m-2 rounded-md border border-destructive/40 bg-destructive/10 backdrop-blur px-3 py-2 text-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-medium text-destructive">Dev error captured ({errorCount})</div>
            <div className="mt-1 truncate text-foreground/90" title={lastError.message}>{lastError.message}</div>
            {!isCollapsed && lastError.details && (
              <pre className="mt-2 max-h-40 overflow-auto whitespace-pre-wrap rounded bg-background/60 p-2 text-xs text-muted-foreground">{lastError.details}</pre>
            )}
          </div>
          <div className="shrink-0 space-x-2">
            <button
              type="button"
              className="rounded border border-border/60 bg-background px-2 py-1 text-xs hover:bg-accent"
              onClick={() => setIsCollapsed(c => !c)}
            >
              {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
            <button
              type="button"
              className="rounded border border-border/60 bg-background px-2 py-1 text-xs hover:bg-accent"
              onClick={() => setIsHidden(true)}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



