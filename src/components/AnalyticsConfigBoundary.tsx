import React, { useEffect, useRef } from 'react';
import { getValidatedConfig, validateAnalyticsRuntimeConfig } from '@/lib/analyticsConfigValidation';
import { logger } from '@/lib/logger';
import { toast } from 'sonner';

interface AnalyticsConfigBoundaryProps {
  children: React.ReactNode;
}

// Not a traditional error boundary; this guards config usage and notifies once on invalid config
export function AnalyticsConfigBoundary({ children }: AnalyticsConfigBoundaryProps): JSX.Element {
  const notifiedRef = useRef(false);

  useEffect(() => {
    const { meta } = validateAnalyticsRuntimeConfig(getValidatedConfig());
    if (!meta.isValid && !notifiedRef.current) {
      notifiedRef.current = true;
      try {
        toast.error('Analytics configuration issue', {
          description: 'Using safe defaults for analytics to keep the UI responsive.',
        });
      } catch {
        // fallback noop
        void 0;
      }
      try {
        logger.warn('[AnalyticsConfigBoundary] Invalid analytics configuration detected; using defaults');
      } catch {
        // fallback noop
        void 0;
      }
    }
  }, []);

  return <>{children}</>;
}

