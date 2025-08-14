import React, { memo } from 'react';
import { TrackingEntry, EmotionEntry, SensoryEntry } from '@/types/student';
import { analyticsConfig } from '@/lib/analyticsConfig';
import { AlertManager } from '@/components/AlertManager';

export interface AlertsPanelProps {
  filteredData: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
  studentId?: string;
}

export const AlertsPanel = memo(function AlertsPanel({ filteredData, studentId }: AlertsPanelProps): React.ReactElement {
  // Pull thresholds if needed by future extensions to filter or highlight alerts
  const thresholds = analyticsConfig.getThresholds?.() ?? {};
  void thresholds; // avoid unused var for now

  return (
    <div className="space-y-4">
      <AlertManager studentId={studentId} />
    </div>
  );
});
