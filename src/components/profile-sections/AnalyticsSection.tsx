import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LazyAnalyticsDashboard } from '@/components/lazy/LazyAnalyticsDashboard';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Student, TrackingEntry, EmotionEntry, SensoryEntry, Insights } from '@/types/student';
import { useTranslation } from '@/hooks/useTranslation';
import { AlertCircle } from 'lucide-react';
import { logger } from '@/lib/logger';

/**
 * @interface AnalyticsSectionProps
 * Props for the AnalyticsSection component.
 * 
 * @property {Student} student - The student object.
 * @property {TrackingEntry[]} trackingEntries - All tracking entries for the student.
 * @property {object} filteredData - Data filtered by the selected date range.
 * @property {Insights | null} insights - The AI-generated insights for the student.
 * @property {boolean} isLoadingInsights - Flag indicating if insights are currently being loaded.
 */
interface AnalyticsSectionProps {
  student: Student;
  trackingEntries: TrackingEntry[];
  filteredData: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
  insights: Insights | null;
  isLoadingInsights: boolean;
}

export function AnalyticsSection({ 
  student, 
  trackingEntries, 
  filteredData, 
  insights,
  isLoadingInsights,
}: AnalyticsSectionProps) {
const { tAnalytics } = useTranslation();

  useEffect(() => {
    logger.debug('[AnalyticsSection] Props received', {
      studentId: student?.id,
      trackingEntriesCount: trackingEntries?.length,
      filteredDataEntriesCount: filteredData?.entries?.length,
      hasInsights: !!insights,
      isLoadingInsights,
    });
  }, [student, trackingEntries, filteredData, insights, isLoadingInsights]);

  if (!student || !filteredData || !trackingEntries) {
    return (
      <div className="space-y-6">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="text-center text-muted-foreground">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              <p>{tAnalytics('missingDataTitle')}</p>
              <p className="text-sm mt-2">
                {tAnalytics('missingDataMessage')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const safeFilteredData = {
    entries: filteredData.entries || [],
    emotions: filteredData.emotions || [],
    sensoryInputs: filteredData.sensoryInputs || [],
  };


  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">{tAnalytics('section.title')}</h2>
        <p className="text-muted-foreground">
          {tAnalytics('section.subtitle', { name: student.name })}
        </p>
      </div>

      {/* Main Analytics Dashboard */}
      <ErrorBoundary showToast={false}>
        <LazyAnalyticsDashboard
          student={student}
          filteredData={safeFilteredData}
        />
      </ErrorBoundary>
    </div>
  );
}