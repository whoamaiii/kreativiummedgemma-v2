import { useCallback } from 'react';
import { Student, Goal, TrackingEntry, Emotion, SensoryInput } from '@/types/student';
import { exportSystem } from '@/lib/exportSystem';
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
          blob = await exportSystem.generatePDFReport(student, exportOptions, {
            format: 'pdf',
            includeFields: ['all'],
            includeCharts: true,
          });
          // Note: generatePDFReport currently returns an HTML document for printing
          filename = `${baseFilename}_report.html`;
          break;
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
