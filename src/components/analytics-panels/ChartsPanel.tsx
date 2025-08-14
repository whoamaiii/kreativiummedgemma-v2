import React, { Suspense, memo } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { TrackingEntry, EmotionEntry, SensoryEntry } from '@/types/student';
import { useTranslation } from '@/hooks/useTranslation';

const LazyInteractiveDataVisualization = React.lazy(() =>
  import('@/components/lazy/LazyInteractiveDataVisualization').then(m => ({ default: m.LazyInteractiveDataVisualization }))
);

export interface ChartsPanelProps {
  studentName: string;
  filteredData: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
}
export const ChartsPanel = memo(function ChartsPanel({ studentName, filteredData }: ChartsPanelProps): React.ReactElement {
  const { tAnalytics } = useTranslation();
  return (
    
    <ErrorBoundary>
      <Suspense fallback={<div className="h-[360px] rounded-xl border bg-card motion-safe:animate-pulse" aria-label={String(tAnalytics('charts.loadingLabel'))} />}>
        <LazyInteractiveDataVisualization
          emotions={filteredData.emotions}
          sensoryInputs={filteredData.sensoryInputs}
          trackingEntries={filteredData.entries}
          studentName={studentName}
        />
      </Suspense>
    </ErrorBoundary>
  );
});
