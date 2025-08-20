import { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { LazyReportBuilder } from '@/components/lazy/LazyReportBuilder';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Student, Goal, TrackingEntry, Emotion, SensoryInput } from '@/types/student';
import { FileText, Calendar, Download, Save } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ReportsSectionProps {
  student: Student;
  goals: Goal[];
  trackingEntries: TrackingEntry[];
  emotions: Emotion[];
  sensoryInputs: SensoryInput[];
  onExportData: (format: 'pdf' | 'csv' | 'json') => Promise<void>;
  onBackupData: () => Promise<void>;
}

/**
 * @component ReportsSection
 * @description Renders the reports and export section for a student profile
 * 
 * This component provides:
 * - Section header with title and description
 * - Export buttons for various formats (PDF, CSV, JSON)
 * - Backup functionality
 * - Report builder interface
 * - Proper error boundaries
 */
const ReportsSection = memo(({ 
  student, 
  goals, 
  trackingEntries, 
  emotions, 
  sensoryInputs,
  onExportData,
  onBackupData 
}: ReportsSectionProps) => {
  const { t } = useTranslation();

  const handleExport = useCallback(async (format: 'pdf' | 'csv' | 'json') => {
    await onExportData(format);
  }, [onExportData]);

  const handleBackup = useCallback(async () => {
    await onBackupData();
  }, [onBackupData]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t('reports_title')}</h2>
        <p className="text-muted-foreground">
          {t('reports_description', { name: student.name })}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3 p-4 bg-gradient-card rounded-lg border-0 shadow-soft">
        <Button 
          variant="outline" 
          onClick={() => handleExport('pdf')}
          aria-label={t('aria.export_pdf')}
        >
          <FileText className="h-4 w-4 mr-2" />
          {t('export_pdf')}
        </Button>
        <Button 
          variant="outline" 
          onClick={() => handleExport('csv')}
          aria-label={t('aria.export_csv')}
        >
          <Calendar className="h-4 w-4 mr-2" />
          {t('export_csv')}
        </Button>
        <Button 
          variant="outline" 
          onClick={() => handleExport('json')}
          aria-label={t('aria.export_json')}
        >
          <Download className="h-4 w-4 mr-2" />
          {t('export_json')}
        </Button>
        <Button 
          variant="outline" 
          onClick={handleBackup}
          aria-label={t('aria.create_backup')}
        >
          <Save className="h-4 w-4 mr-2" />
          {t('create_backup')}
        </Button>
      </div>
      
      <ErrorBoundary>
        <LazyReportBuilder
          student={student}
          goals={goals}
          trackingEntries={trackingEntries}
          emotions={emotions}
          sensoryInputs={sensoryInputs}
        />
      </ErrorBoundary>
    </div>
  );
});

ReportsSection.displayName = 'ReportsSection';

export { ReportsSection };
