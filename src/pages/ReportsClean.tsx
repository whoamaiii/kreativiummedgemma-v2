import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { dataStorage } from '@/lib/dataStorage';
import { downloadBlob } from '@/lib/utils';
import { logger } from '@/lib/logger';
import { Download, FileText, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { useReportsWorker } from '@/hooks/useReportsWorker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ENABLE_BIGSTIAN_AI } from '@/lib/env';
import { generateNarrative } from '@/lib/ai/bigstian/orchestrator';
import { buildReportAnalyticsSummary } from '@/lib/ai/bigstian/context';
import { NarrativeJson } from '@/lib/ai/bigstian/schemas';
import AIStatusPanel from '@/components/ai/AIStatusPanel';
import { useAIState } from '@/hooks/useAIState';

const EXPORT_PREFS_KEY = 'sensory-tracker_export_prefs_v1';

type DatePreset = '7d' | '30d' | '90d' | 'qtd' | 'all' | 'custom';

const Reports = () => {
  const { tSettings, tCommon } = useTranslation();
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const { run } = useReportsWorker();
  const navigate = useNavigate();

  const [preset, setPreset] = useState<DatePreset>('all');
  const [customStart, setCustomStart] = useState<string>('');
  const [customEnd, setCustomEnd] = useState<string>('');
  const [anonymize, setAnonymize] = useState<boolean>(false);
  const [backupUseFilters, setBackupUseFilters] = useState<boolean>(false);
  const { aiEnabled, setAiEnabled, featureFlagEnabled } = useAIState();
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiNarrative, setAiNarrative] = useState<NarrativeJson | null>(null);
  const [progressMessage, setProgressMessage] = useState<string>('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(EXPORT_PREFS_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { preset: DatePreset; customStart?: string; customEnd?: string; anonymize?: boolean; backupUseFilters?: boolean };
        setPreset(saved.preset ?? 'all');
        setCustomStart(saved.customStart ?? '');
        setCustomEnd(saved.customEnd ?? '');
        setAnonymize(!!saved.anonymize);
        setBackupUseFilters(!!saved.backupUseFilters);
      }
    } catch {}
  }, []);

  // Removed duplicate localStorage persistence - now handled by useAIState hook

  useEffect(() => {
    try {
      localStorage.setItem(EXPORT_PREFS_KEY, JSON.stringify({ preset, customStart, customEnd, anonymize, backupUseFilters }));
    } catch {}
  }, [preset, customStart, customEnd, anonymize, backupUseFilters]);

  const computedDateRange = useMemo(() => {
    if (preset === 'all') return undefined;
    const now = new Date();
    if (preset === '7d' || preset === '30d' || preset === '90d') {
      const days = preset === '7d' ? 7 : preset === '30d' ? 30 : 90;
      const start = new Date(now);
      start.setDate(now.getDate() - days);
      return { start, end: now } as const;
    }
    if (preset === 'qtd') {
      const month = now.getMonth();
      const qStartMonth = month - (month % 3);
      const start = new Date(now.getFullYear(), qStartMonth, 1);
      return { start, end: now } as const;
    }
    if (preset === 'custom' && customStart && customEnd) {
      const start = new Date(customStart);
      const end = new Date(customEnd);
      if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && start <= end) {
        return { start, end } as const;
      }
    }
    return undefined;
  }, [preset, customStart, customEnd]);

  const customRangeInvalid = useMemo(() => {
    if (preset !== 'custom') return false;
    if (!customStart || !customEnd) return true;
    const start = new Date(customStart);
    const end = new Date(customEnd);
    return isNaN(start.getTime()) || isNaN(end.getTime()) || start > end;
  }, [preset, customStart, customEnd]);

  const [pdfStudentId, setPdfStudentId] = useState<string>("");

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

  const generateAINarrative = useCallback(async () => {
    setAiError(null);
    setAiLoading(true);
    
    // Run diagnostics first if in development
    if (import.meta.env.DEV) {
      const { runAIDiagnostics } = await import('@/lib/ai/diagnostics');
      await runAIDiagnostics();
    }
    
    try {
      const { students, trackingEntries, goals } = loadAllData();
      if (students.length === 0) throw new Error('No students available');
      const student = pdfStudentId ? students.find(s => s.id === pdfStudentId) : students[0];
      if (!student) throw new Error('Selected student not found');

      const entries = trackingEntries.filter(t => t.studentId === student.id);
      const emotions = entries.flatMap(e => e.emotions);
      const sensory = entries.flatMap(e => e.sensoryInputs);
      const studentGoals = goals.filter(g => g.studentId === student.id);

      const summaryCtx = buildReportAnalyticsSummary(
        student,
        entries,
        emotions,
        sensory,
        studentGoals,
        computedDateRange
      );

      const input = {
        studentProfile: { grade: summaryCtx.studentSanitized.grade },
        timeframe: summaryCtx.summary.timeframe,
        highlights: summaryCtx.summary.highlights,
        statsSummary: summaryCtx.summary.statsSummary,
        goals: summaryCtx.summary.goals,
      };

      const result = await generateNarrative({ input, temperature: 0.3, maxTokens: 384 });
      setAiNarrative(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'AI narrative failed';
      setAiError(msg);
      logger.error('AI narrative failed', { error: e });
    } finally {
      setAiLoading(false);
    }
  }, [loadAllData, pdfStudentId, computedDateRange]);

  const strictRepairAINarrative = useCallback(async () => {
    setAiError(null);
    setAiLoading(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      if (students.length === 0) throw new Error('No students available');
      const student = pdfStudentId ? students.find(s => s.id === pdfStudentId) : students[0];
      if (!student) throw new Error('Selected student not found');

      const entries = trackingEntries.filter(t => t.studentId === student.id);
      const emotions = entries.flatMap(e => e.emotions);
      const sensory = entries.flatMap(e => e.sensoryInputs);
      const studentGoals = goals.filter(g => g.studentId === student.id);

      const summaryCtx = buildReportAnalyticsSummary(
        student,
        entries,
        emotions,
        sensory,
        studentGoals,
        computedDateRange
      );

      const input = {
        studentProfile: { grade: summaryCtx.studentSanitized.grade },
        timeframe: summaryCtx.summary.timeframe,
        highlights: summaryCtx.summary.highlights,
        statsSummary: summaryCtx.summary.statsSummary,
        goals: summaryCtx.summary.goals,
      };

      const result = await generateNarrative({ input, temperature: 0.2, maxTokens: 768 });
      setAiNarrative(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'AI narrative strict repair failed';
      setAiError(msg);
      logger.error('AI narrative strict repair failed', { error: e });
    } finally {
      setAiLoading(false);
    }
  }, [loadAllData, pdfStudentId, computedDateRange]);

  const handleExportCSV = useCallback(async () => {
    setIsExporting(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      setProgress(0);
      const content = await run({
        kind: 'csv',
        students,
        allData: {
          trackingEntries,
          emotions: trackingEntries.flatMap(e => e.emotions),
          sensoryInputs: trackingEntries.flatMap(e => e.sensoryInputs),
          goals,
        },
        options: {
          includeFields: ['emotions','sensoryInputs','goals','trackingEntries'],
          dateRange: computedDateRange,
          anonymize,
        },
        onProgress: ({ progress, message }) => {
          setProgress(Math.round(progress * 100));
          if (message) {
            setProgressMessage(message);
          }
        },
      });
      const blob = new Blob([content], { type: 'text/csv' });
      const filename = `sensory_tracker_full_export_${new Date().toISOString().split('T')[0]}.csv`;
      downloadBlob(blob, filename);
      toast.success(String(tSettings('dataExport.success_csv')));
    } catch (error) {
      logger.error('System CSV export failed', { error });
      toast.error(tSettings('dataExport.error_generic'));
    } finally {
      setIsExporting(false);
      setProgressMessage('');
    }
  }, [loadAllData, run, computedDateRange, anonymize, tSettings]);

  const handleExportJSON = useCallback(async () => {
    setIsExporting(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      setProgress(0);
      const content = await run({
        kind: 'json',
        students,
        allData: {
          trackingEntries,
          emotions: trackingEntries.flatMap(e => e.emotions),
          sensoryInputs: trackingEntries.flatMap(e => e.sensoryInputs),
          goals,
        },
        options: {
          includeFields: ['students','trackingEntries','emotions','sensoryInputs','goals'],
          dateRange: computedDateRange,
          anonymize,
        },
        onProgress: ({ progress, message }) => {
          setProgress(Math.round(progress * 100));
          if (message) {
            setProgressMessage(message);
          }
        },
      });
      const blob = new Blob([content], { type: 'application/json' });
      const filename = `sensory_tracker_full_export_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      downloadBlob(blob, filename);
      toast.success(String(tSettings('dataExport.success_json')));
    } catch (error) {
      logger.error('System JSON export failed', { error });
      toast.error(tSettings('dataExport.error_generic'));
    } finally {
      setIsExporting(false);
      setProgressMessage('');
    }
  }, [loadAllData, run, computedDateRange, anonymize, tSettings]);

  const handleCreateBackup = useCallback(async () => {
    setIsExporting(true);
    try {
      const { students, trackingEntries, goals } = loadAllData();
      const { exportSystem } = await import('@/lib/exportSystem');
      let entries = trackingEntries;
      let emotions = trackingEntries.flatMap(e => e.emotions);
      let sensoryInputs = trackingEntries.flatMap(e => e.sensoryInputs);
      if (backupUseFilters && computedDateRange) {
        const { start, end } = computedDateRange;
        entries = entries.filter(e => e.timestamp >= start && e.timestamp <= end);
        emotions = emotions.filter(e => e.timestamp >= start && e.timestamp <= end);
        sensoryInputs = sensoryInputs.filter(s => s.timestamp >= start && s.timestamp <= end);
      }
      const backup = exportSystem.createFullBackup(students, {
        trackingEntries: entries,
        emotions,
        sensoryInputs,
        goals,
      });
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const filename = `sensory_tracker_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      downloadBlob(blob, filename);
      toast.success(String(tSettings('dataExport.success_backup')));
    } catch (error) {
      logger.error('System backup failed', { error });
      toast.error(tSettings('dataExport.error_generic'));
    } finally {
      setIsExporting(false);
      setProgressMessage('');
    }
  }, [loadAllData, backupUseFilters, computedDateRange, tSettings]);

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
            {/* BigstianAI Status */}
            <AIStatusPanel value={aiEnabled} onChange={setAiEnabled} featureFlagEnabled={featureFlagEnabled} />
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label className="mb-2 block">{tCommon('reports.exportFilters.dateRange')}</Label>
                <Select value={preset} onValueChange={(v) => setPreset(v as DatePreset)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{tCommon('reports.exportFilters.presets.all')}</SelectItem>
                    <SelectItem value="7d">{tCommon('reports.exportFilters.presets.last7')}</SelectItem>
                    <SelectItem value="30d">{tCommon('reports.exportFilters.presets.last30')}</SelectItem>
                    <SelectItem value="90d">{tCommon('reports.exportFilters.presets.last90')}</SelectItem>
                    <SelectItem value="qtd">{tCommon('reports.exportFilters.presets.qtd')}</SelectItem>
                    <SelectItem value="custom">{tCommon('reports.exportFilters.presets.custom')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {preset === 'custom' && (
                <div className="grid grid-cols-2 gap-2 md:col-span-2">
                  <div>
                    <Label className="text-sm">{tCommon('reports.exportFilters.start')}</Label>
                    <input
                      className={`w-full h-9 rounded-md border bg-background px-3 text-sm ${customRangeInvalid ? 'border-destructive' : ''}`}
                      type="date"
                      aria-invalid={customRangeInvalid}
                      value={customStart}
                      onChange={(e) => setCustomStart(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm">{tCommon('reports.exportFilters.end')}</Label>
                    <input
                      className={`w-full h-9 rounded-md border bg-background px-3 text-sm ${customRangeInvalid ? 'border-destructive' : ''}`}
                      type="date"
                      aria-invalid={customRangeInvalid}
                      value={customEnd}
                      onChange={(e) => setCustomEnd(e.target.value)}
                    />
                  </div>
                  {customRangeInvalid && (
                    <p className="col-span-2 text-xs text-destructive" role="alert">
                      {tCommon('reports.exportFilters.errors.invalidRange')}
                    </p>
                  )}
                </div>
              )}
              <div className="flex items-center gap-2 md:col-start-3">
                <Checkbox id="anonymize" checked={anonymize} onCheckedChange={(c) => setAnonymize(!!c)} />
                <Label htmlFor="anonymize">{tCommon('reports.exportFilters.anonymize')}</Label>
              </div>
              {/* AI toggle handled by AIStatusPanel above */}
              <div className="flex items-center gap-2 md:col-start-3">
                <Checkbox id="backupFilters" checked={backupUseFilters} onCheckedChange={(c) => setBackupUseFilters(!!c)} />
                <Label htmlFor="backupFilters">{tCommon('reports.exportFilters.backupUseFilters')}</Label>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs text-muted-foreground" aria-live="polite" role="status">
              {(() => {
                const fmt = (d: Date) => d.toISOString().slice(0, 10);
                if (computedDateRange) {
                  return anonymize
                    ? tCommon('reports.exportFilters.summary.withRangeAnon', { start: fmt(computedDateRange.start), end: fmt(computedDateRange.end) })
                    : tCommon('reports.exportFilters.summary.withRange', { start: fmt(computedDateRange.start), end: fmt(computedDateRange.end) });
                }
                return anonymize
                  ? tCommon('reports.exportFilters.summary.allAnon')
                  : tCommon('reports.exportFilters.summary.all');
              })()}
              {isExporting ? ` • ${progressMessage || tCommon('reports.exportFilters.summary.progress', { percent: progress })}` : ''}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={handleExportCSV} disabled={isExporting || customRangeInvalid} aria-busy={isExporting} data-testid="export-csv">
                <Download className="h-4 w-4 mr-2" />{tSettings('dataExport.actions.exportAllCsv')}
              </Button>
              <Button variant="outline" onClick={handleExportJSON} disabled={isExporting || customRangeInvalid} aria-busy={isExporting} data-testid="export-json">
                <FileText className="h-4 w-4 mr-2" />{tSettings('dataExport.actions.exportAllJson')}
              </Button>
              <Button variant="outline" onClick={handleCreateBackup} disabled={isExporting} aria-busy={isExporting} data-testid="create-backup">
                <Save className="h-4 w-4 mr-2" />{tSettings('dataExport.actions.createBackup')}
              </Button>
              {ENABLE_BIGSTIAN_AI && aiEnabled && (
                <Button
                  variant="default"
                  onClick={generateAINarrative}
                  disabled={aiLoading || customRangeInvalid}
                  aria-busy={aiLoading}
                  data-testid="ai-generate-narrative"
                >
                  {aiLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="animate-spin inline-block w-3 h-3 rounded-full border-2 border-current border-t-transparent" aria-hidden="true"></span>
                      Generating…
                    </span>
                  ) : 'Generate AI Narrative'}
                </Button>
              )}
              {ENABLE_BIGSTIAN_AI && aiEnabled && (
                <Button
                  variant="outline"
                  onClick={strictRepairAINarrative}
                  disabled={aiLoading || customRangeInvalid}
                  aria-busy={aiLoading}
                >
                  Strict Repair
                </Button>
              )}
            </div>

            {/* Analytics PDF quick access */}
            <div className="mt-6 grid gap-3 md:grid-cols-3 items-end">
              <div className="md:col-span-2">
                <Label htmlFor="pdfStudent">{tCommon('reports.analyticsPdf.student')}</Label>
                <Select value={pdfStudentId} onValueChange={setPdfStudentId}>
                  <SelectTrigger id="pdfStudent">
                    <SelectValue placeholder={tCommon('reports.analyticsPdf.selectStudent')} />
                  </SelectTrigger>
                  <SelectContent>
                    {loadAllData().students.map((s) => (
                      <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="default"
                  disabled={!pdfStudentId}
                  onClick={() => {
                    const range = computedDateRange;
                    const params = new URLSearchParams();
                    params.set('tab', 'charts');
                    if (range) {
                      params.set('start', range.start.toISOString().slice(0, 10));
                      params.set('end', range.end.toISOString().slice(0, 10));
                    }
                    navigate(`/student/${pdfStudentId}?${params.toString()}`);
                  }}
                  data-testid="analytics-pdf-link"
                >
                  {tCommon('reports.analyticsPdf.button')}
                </Button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              {tCommon('reports.analyticsPdf.helper')}
            </p>

            <p className="text-xs text-muted-foreground">{tSettings('dataExport.note')}</p>

            {ENABLE_BIGSTIAN_AI && aiEnabled && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">AI Narrative (Preview)</h3>
                {aiError && (
                  <p className="text-sm text-destructive mb-2" role="alert">{aiError}</p>
                )}
                {aiNarrative ? (
                  <div className="space-y-4 rounded-xl border border-primary/10 p-4 bg-background/60">
                    {aiNarrative.sections.map((sec, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-base font-semibold">{sec.title}</h4>
                        {sec.paragraphs.map((p, j) => (
                          <p key={j} className="text-sm text-foreground/90">{p}</p>
                        ))}
                        {sec.bullets && sec.bullets.length > 0 && (
                          <ul className="list-disc pl-5 text-sm text-foreground/90">
                            {sec.bullets.map((b, k) => (
                              <li key={k}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    <div className="text-xs text-muted-foreground">
                      Confidence: {(aiNarrative.meta.confidence * 100).toFixed(0)}% • Timeframe: {aiNarrative.meta.timeframe}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Use "Generate AI Narrative" to create a draft you can edit before export.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;

