import { useCallback } from 'react';
import { Student, Goal, TrackingEntry, Emotion, SensoryInput } from '@/types/student';
import { exportSystem } from '@/lib/exportSystem';
import { analyticsExport, type AnalyticsExportData } from '@/lib/analyticsExport';
import { downloadBlob } from '@/lib/utils';
import { logger } from '@/lib/logger';
import { toast } from 'sonner';

interface ExportOptions {
  trackingEntries: TrackingEntry[];
  emotions: Emotion[];
  sensoryInputs: SensoryInput[];
  goals: Goal[];
}

/**
 * @hook useStudentExport
 * @description Provides data export functionality for student profiles
 * 
 * Features:
 * - Export to multiple formats (PDF, CSV, JSON)
 * - Full backup creation
 * - Error handling with user feedback
 * - Automatic file naming with timestamps
 * 
 * @param student - The student whose data to export
 * @param options - Export options including data to include
 * @returns Export handlers for different formats and backup
 */
export function useStudentExport(
  student: Student | null,
  options: ExportOptions
) {
  /**
   * Handles export of student data in various formats
   */
  const handleExportData = useCallback(async (format: 'pdf' | 'csv' | 'json') => {
    if (!student) {
      toast.error('No student data available to export');
      return;
    }

    try {
      const baseFilename = `${student.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}`;
      let blob: Blob;
      let filename: string;

      const exportOptions = {
        trackingEntries: options.trackingEntries,
        emotions: options.emotions,
        sensoryInputs: options.sensoryInputs,
        goals: options.goals,
      };

      switch (format) {
        case 'pdf': {
          // Consolidated PDF path: delegate to analyticsExport
          const allDates: Date[] = [
            ...options.trackingEntries.map(t => t.timestamp as unknown as Date),
            ...options.emotions.map(e => (e as unknown as { timestamp: Date }).timestamp),
            ...options.sensoryInputs.map(s => (s as unknown as { timestamp: Date }).timestamp),
          ];
          const start = allDates.length ? new Date(Math.min(...allDates.map(d => d.getTime()))) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          const end = allDates.length ? new Date(Math.max(...allDates.map(d => d.getTime()))) : new Date();

          const exportData: AnalyticsExportData = {
            student,
            dateRange: { start, end },
            data: {
              entries: options.trackingEntries as unknown as any[],
              emotions: options.emotions as unknown as any[],
              sensoryInputs: options.sensoryInputs as unknown as any[],
            },
            analytics: {
              patterns: [],
              correlations: [],
              insights: [],
              predictiveInsights: [],
              anomalies: [],
            },
          } as unknown as AnalyticsExportData;

          await analyticsExport.exportTo('pdf' as any, exportData);
          toast.success('Report exported as PDF');
          logger.info('Data exported', { format, studentId: student.id });
          return;
        }
        case 'csv': {
          const csvContent = exportSystem.generateCSVExport([student], exportOptions, {
            format: 'csv',
            includeFields: ['all'],
          });
          blob = new Blob([csvContent], { type: 'text/csv' });
          filename = `${baseFilename}_data.csv`;
          break;
        }
        case 'json': {
          const jsonContent = exportSystem.generateJSONExport([student], exportOptions, {
            format: 'json',
            includeFields: ['students', 'trackingEntries', 'emotions', 'sensoryInputs', 'goals'],
          });
          blob = new Blob([jsonContent], { type: 'application/json' });
          filename = `${baseFilename}_data.json`;
          break;
        }
      }
      
      downloadBlob(blob, filename);
      toast.success(`Data exported successfully as ${format.toUpperCase()}`);
      
      logger.info('Data exported', { format, studentId: student.id });
    } catch (error: unknown) {
      logger.error('Export error', { error, format });
      const errorMessage = error instanceof Error ? error.message : 'Export failed';
      toast.error(`Export failed: ${errorMessage}`);
    }
  }, [student, options]);

  /**
   * Creates and downloads a full backup of the student's data
   */
  const handleBackupData = useCallback(async () => {
    if (!student) {
      toast.error('No student data available to backup');
      return;
    }

    try {
      const backup = exportSystem.createFullBackup([student], {
        trackingEntries: options.trackingEntries,
        emotions: options.emotions,
        sensoryInputs: options.sensoryInputs,
        goals: options.goals,
      });
      
      const backupBlob = new Blob([JSON.stringify(backup, null, 2)], { 
        type: 'application/json' 
      });
      
      const filename = `sensory_tracker_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      downloadBlob(backupBlob, filename);
      
      toast.success('Backup created successfully');
      logger.info('Backup created', { studentId: student.id });
    } catch (error) {
      logger.error('Backup error', { error });
      toast.error('Backup failed. Please try again.');
    }
  }, [student, options]);

  return {
    handleExportData,
    handleBackupData,
  };
}
