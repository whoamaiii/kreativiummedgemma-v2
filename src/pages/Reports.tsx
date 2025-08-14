import { useCallback, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { dataStorage } from '@/lib/dataStorage';
import { downloadBlob } from '@/lib/utils';
import { logger } from '@/lib/logger';
import { FileText, Download, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const Reports = () => {
  const { tSettings, tCommon } = useTranslation();
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const loadAllData = useCallback(() => {
    try {
      const students = dataStorage.getStudents();
      const trackingEntries = dataStorage.getTrackingEntries();
      const goals = dataStorage.getGoals();
      return { students, trackingEntries, goals } as const;
    } catch (error) {
      logger.error('Reports: failed to load data for export', { error });
      return { students: [], trackingEntries: [], goals: [] } as const;
    }
  }, []);

  const handleExportCSV = useCallback(async () => {
    setIsExporting(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      const { exportSystem } = await import('@/lib/exportSystem'); // lazy-load heavy module
      const csvContent = exportSystem.generateCSVExport(students, {
        trackingEntries,
        emotions: trackingEntries.flatMap(e => e.emotions),
        sensoryInputs: trackingEntries.flatMap(e => e.sensoryInputs),
        goals,
      }, { format: 'csv', includeFields: ['all'] });
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const filename = `sensory_tracker_full_export_${new Date().toISOString().split('T')[0]}.csv`;
      downloadBlob(blob, filename);
      toast.custom(() => (
        <div data-testid="toast-export-success-csv">{tSettings('dataExport.success_csv')}</div>
      ));
    } catch (error) {
      logger.error('System CSV export failed', { error });
      toast.error(tSettings('dataExport.error_generic'));
      toast.custom(() => (
        <div data-testid="toast-export-error-csv">{tSettings('dataExport.error_generic')}</div>
      ));
    } finally {
      setIsExporting(false);
    }
  }, [loadAllData, tSettings]);

  const handleExportJSON = useCallback(async () => {
    setIsExporting(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      const { exportSystem } = await import('@/lib/exportSystem'); // lazy-load heavy module
      const jsonContent = exportSystem.generateJSONExport(students, {
        trackingEntries,
        emotions: trackingEntries.flatMap(e => e.emotions),
        sensoryInputs: trackingEntries.flatMap(e => e.sensoryInputs),
        goals,
      }, { format: 'json', includeFields: ['students', 'trackingEntries', 'emotions', 'sensoryInputs', 'goals'] });
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const filename = `sensory_tracker_full_export_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      downloadBlob(blob, filename);
      toast.custom(() => (
        <div data-testid="toast-export-success-json">{tSettings('dataExport.success_json')}</div>
      ));
    } catch (error) {
      logger.error('System JSON export failed', { error });
      toast.error(tSettings('dataExport.error_generic'));
      toast.custom(() => (
        <div data-testid="toast-export-error-json">{tSettings('dataExport.error_generic')}</div>
      ));
    } finally {
      setIsExporting(false);
    }
  }, [loadAllData, tSettings]);

  const handleCreateBackup = useCallback(async () => {
    setIsExporting(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      const { exportSystem } = await import('@/lib/exportSystem'); // lazy
      const emotions = trackingEntries.flatMap(e => e.emotions);
      const sensoryInputs = trackingEntries.flatMap(e => e.sensoryInputs);
      const backup = exportSystem.createFullBackup(students, {
        trackingEntries,
        emotions,
        sensoryInputs,
        goals,
      });
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const filename = `sensory_tracker_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      downloadBlob(blob, filename);
      toast.custom(() => (
        <div data-testid="toast-export-success-backup">{tSettings('dataExport.success_backup')}</div>
      ));
    } catch (error) {
      logger.error('System backup failed', { error });
      toast.error(tSettings('dataExport.error_generic'));
      toast.custom(() => (
        <div data-testid="toast-export-error-backup">{tSettings('dataExport.error_generic')}</div>
      ));
    } finally {
      setIsExporting(false);
    }
  }, [loadAllData, tSettings]);

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="space-y-2">
          <Breadcrumbs
            items={[
              { label: tCommon('buttons.home'), href: '/' },
              { label: tSettings('title'), href: '/settings' },
              { label: tSettings('dataExport.title'), current: true },
            ]}
          />
          <h1 className="text-3xl font-bold text-foreground">{tSettings('dataExport.title')}</h1>
          <p className="text-muted-foreground mt-2">{tSettings('dataExport.description')}</p>
        </header>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-wrap gap-3">
<Button variant="outline" onClick={handleExportCSV} disabled={isExporting} aria-busy={isExporting} data-testid="export-csv">
                <Download className="h-4 w-4 mr-2" />{tSettings('dataExport.actions.exportAllCsv')}
              </Button>
<Button variant="outline" onClick={handleExportJSON} disabled={isExporting} aria-busy={isExporting} data-testid="export-json">
                <FileText className="h-4 w-4 mr-2" />{tSettings('dataExport.actions.exportAllJson')}
              </Button>
<Button variant="outline" onClick={handleCreateBackup} disabled={isExporting} aria-busy={isExporting} data-testid="create-backup">
                <Save className="h-4 w-4 mr-2" />{tSettings('dataExport.actions.createBackup')}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{tSettings('dataExport.note')}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
