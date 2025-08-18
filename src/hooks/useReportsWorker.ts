import { useEffect, useMemo, useRef } from 'react';
import type { ReportsWorkerRequest, ReportsWorkerResponse } from '@/workers/reports.worker';

interface RunOptions {
  kind: 'csv' | 'json';
  students: unknown[];
  allData: {
    trackingEntries: unknown[];
    emotions: unknown[];
    sensoryInputs: unknown[];
    goals: unknown[];
  };
  options: {
    includeFields: string[];
    dateRange?: { start: Date; end: Date } | undefined;
    anonymize?: boolean;
  };
  onProgress?: (p: { progress: number; message?: string }) => void;
}

export function useReportsWorker() {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const w = new Worker(new URL('@/workers/reports.worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = w;
    return () => {
      w.terminate();
      workerRef.current = null;
    };
  }, []);

  const run = useMemo(() => {
    return async (opts: RunOptions): Promise<string> => {
      if (!workerRef.current) throw new Error('Reports worker not initialized');
      const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
      return new Promise<string>((resolve, reject) => {
        const onMessage = (evt: MessageEvent<ReportsWorkerResponse>) => {
          const msg = evt.data;
          if (!msg || (msg as any).id !== id) return;
          if (msg.type === 'progress') {
            opts.onProgress?.({ progress: msg.progress, message: msg.message });
          } else if (msg.type === 'success') {
            workerRef.current?.removeEventListener('message', onMessage as any);
            resolve(msg.content);
          } else if (msg.type === 'error') {
            workerRef.current?.removeEventListener('message', onMessage as any);
            reject(new Error(msg.error));
          }
        };
        workerRef.current!.addEventListener('message', onMessage as any);

        const payload: ReportsWorkerRequest = {
          id,
          kind: opts.kind,
          payload: {
            students: opts.students,
            allData: opts.allData,
            options: {
              format: opts.kind,
              includeFields: opts.options.includeFields,
              anonymize: opts.options.anonymize,
              dateRange: opts.options.dateRange
                ? {
                    start: opts.options.dateRange.start.toISOString(),
                    end: opts.options.dateRange.end.toISOString(),
                  }
                : null,
            },
          },
        };
        workerRef.current!.postMessage(payload);
      });
    };
  }, []);

  return { run };
}
