import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Download, Upload, Save, RotateCcw, Info } from 'lucide-react';
import { toast } from 'sonner';
import { analyticsConfig, AnalyticsConfiguration } from '@/lib/analyticsConfig';
import { useTranslation } from '@/hooks/useTranslation';
import { logger } from '@/lib/logger';

interface AnalyticsConfigProps {
  className?: string;
  onChange?: (config: AnalyticsConfiguration) => void;
}

interface FieldError {
  fieldId: string;
  message: string;
}

function useConfigState(): [AnalyticsConfiguration, React.Dispatch<React.SetStateAction<AnalyticsConfiguration>>] {
  const [cfg, setCfg] = useState<AnalyticsConfiguration>(() => analyticsConfig.getConfig());
  useEffect(() => {
    const unsub = analyticsConfig.subscribe((next) => setCfg(next));
    return unsub;
  }, []);
  return [cfg, setCfg];
}

export const AnalyticsConfig: React.FC<AnalyticsConfigProps> = ({ className, onChange }) => {
  const { tSettings, tCommon } = useTranslation();
  const [config, setConfig] = useConfigState();
  const [errors, setErrors] = useState<FieldError[]>([]);
  const notifiedRef = useRef(false);
  const firstInvalidRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onChange?.(config);
  }, [config, onChange]);

  const onNumberChange = useCallback((path: string[], value: number) => {
    setConfig((prev) => {
      const next: AnalyticsConfiguration = JSON.parse(JSON.stringify(prev));
      let current: any = next;
      for (let i = 0; i < path.length - 1; i++) current = current[path[i]];
      current[path[path.length - 1]] = value;
      return next;
    });
  }, [setConfig]);

  const onRadioChange = useCallback((value: 'low' | 'medium' | 'high') => {
    setConfig((prev) => ({
      ...prev,
      alertSensitivity: { ...prev.alertSensitivity, level: value },
    }));
  }, [setConfig]);

  const validate = useCallback((cfg: AnalyticsConfiguration): FieldError[] => {
    const errs: FieldError[] = [];
    const push = (fieldId: string, message: string) => errs.push({ fieldId, message });

    if (!Number.isFinite(cfg.patternAnalysis.minDataPoints) || cfg.patternAnalysis.minDataPoints < 1) {
      push('pattern-minDataPoints', tSettings('validation.minDataPoints', { defaultValue: 'Minimum data points must be >= 1' }));
    }
    if (cfg.patternAnalysis.correlationThreshold < 0 || cfg.patternAnalysis.correlationThreshold > 1) {
      push('pattern-correlationThreshold', tSettings('validation.correlationThreshold', { defaultValue: 'Correlation threshold must be between 0 and 1' }));
    }
    if (cfg.enhancedAnalysis.anomalyThreshold < 0.1 || cfg.enhancedAnalysis.anomalyThreshold > 5) {
      push('enhanced-anomalyThreshold', tSettings('validation.anomalyThreshold', { defaultValue: 'Anomaly threshold should be between 0.1 and 5' }));
    }
    if (cfg.timeWindows.defaultAnalysisDays < 1 || cfg.timeWindows.defaultAnalysisDays > 365) {
      push('time-defaultAnalysisDays', tSettings('validation.defaultAnalysisDays', { defaultValue: 'Default analysis window must be between 1 and 365 days' }));
    }
    if (cfg.cache.ttl < 0) {
      push('cache-ttl', tSettings('validation.cacheTtl', { defaultValue: 'Cache TTL must be >= 0 ms' }));
    }
    return errs;
  }, [tSettings]);

  const handleSave = useCallback(() => {
    const errs = validate(config);
    setErrors(errs);

    if (errs.length) {
      if (!notifiedRef.current) {
        toast.error(tSettings('validation.title', { defaultValue: 'Please fix the highlighted fields' }));
        notifiedRef.current = true;
      }
      // Focus first invalid
      setTimeout(() => firstInvalidRef.current?.focus(), 0);
      // Announce in live region
      if (liveRegionRef.current) {
        liveRegionRef.current.textContent = errs[0]?.message ?? '';
      }
      return;
    }

    analyticsConfig.updateConfig(config);
    notifiedRef.current = false;
    toast.success(tSettings('save.success', { defaultValue: 'Analytics configuration saved' }));
  }, [config, tSettings, validate]);

  const handleReset = useCallback(() => {
    analyticsConfig.resetToDefaults();
    setErrors([]);
    notifiedRef.current = false;
    toast.success(tSettings('reset.success', { defaultValue: 'Settings reset to defaults' }));
  }, [tSettings]);

  const exportConfig = useCallback(() => {
    try {
      const configString = analyticsConfig.exportConfig();
      const blob = new Blob([configString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'analytics-config.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(tSettings('export.success', { defaultValue: 'Configuration exported' }));
    } catch (error) {
      logger.error('Failed to export analytics config', error as any);
      toast.error(tSettings('export.error', { defaultValue: 'Failed to export configuration' }));
    }
  }, [tSettings]);

  const importConfig = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const content = ev.target?.result as string;
        if (analyticsConfig.importConfig(content)) {
          setErrors([]);
          notifiedRef.current = false;
          toast.success(tSettings('import.success', { defaultValue: 'Configuration imported' }));
        } else {
          toast.error(tSettings('import.invalid', { defaultValue: 'Invalid configuration file' }));
        }
      } catch (err) {
        logger.error('Failed reading imported config', err as any);
        toast.error(tSettings('import.error', { defaultValue: 'Failed to read configuration file' }));
      } finally {
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  }, [tSettings]);

  const errorFor = useCallback((id: string) => errors.find((e) => e.fieldId === id)?.message, [errors]);

  const Preview = useMemo(() => {
    const level = config.alertSensitivity.level;
    const days = config.timeWindows.defaultAnalysisDays;
    const corr = config.patternAnalysis.correlationThreshold;
    const anomaly = config.enhancedAnalysis.anomalyThreshold;
    return (
      <Card aria-live="polite" className="bg-card border shadow-soft">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{tSettings('preview.title', { defaultValue: 'Configuration preview' })}</CardTitle>
          <CardDescription>{tSettings('preview.subtitle', { defaultValue: 'A quick summary of key analytics behaviors' })}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2"><span className="font-medium">{tSettings('preview.sensitivity', { defaultValue: 'Alert sensitivity' })}:</span> <span className="capitalize">{level}</span></li>
            <li className="flex items-center gap-2"><span className="font-medium">{tSettings('preview.window', { defaultValue: 'Default analysis window' })}:</span> {days} {tCommon('units.days', { defaultValue: 'days' })}</li>
            <li className="flex items-center gap-2"><span className="font-medium">{tSettings('preview.correlation', { defaultValue: 'Correlation threshold' })}:</span> {corr}</li>
            <li className="flex items-center gap-2"><span className="font-medium">{tSettings('preview.anomaly', { defaultValue: 'Anomaly threshold' })}:</span> {anomaly}σ</li>
          </ul>
        </CardContent>
      </Card>
    );
  }, [config, tSettings, tCommon]);

  return (
    <section className={className} aria-labelledby="analytics-config-heading" role="region">
      <a href="#analytics-config-main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-primary text-primary-foreground px-3 py-1 rounded">{tCommon('a11y.skip_to_content', { defaultValue: 'Skip to content' })}</a>

      <h2 id="analytics-config-heading" className="text-xl font-semibold text-foreground">{tSettings('analytics.title', { defaultValue: 'Analytics configuration' })}</h2>

      <div aria-live="polite" aria-atomic="true" className="sr-only" ref={liveRegionRef} />

      <div id="analytics-config-main" className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tSettings('sections.thresholds', { defaultValue: 'Thresholds & windows' })}</CardTitle>
              <CardDescription>{tSettings('sections.thresholds_desc', { defaultValue: 'Tune analysis requirements and windows' })}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pattern-minDataPoints" className="block mb-1">{tSettings('fields.minDataPoints', { defaultValue: 'Minimum data points' })}</Label>
                  <Input
                    id="pattern-minDataPoints"
                    type="number"
                    inputMode="numeric"
                    aria-describedby="help-minDataPoints"
                    aria-invalid={Boolean(errorFor('pattern-minDataPoints'))}
                    ref={(el) => { if (errorFor('pattern-minDataPoints')) firstInvalidRef.current = el; }}
                    className="w-full"
                    value={config.patternAnalysis.minDataPoints}
                    onChange={(e) => onNumberChange(['patternAnalysis', 'minDataPoints'], Number(e.target.value))}
                  />
                  <p id="help-minDataPoints" className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    {errorFor('pattern-minDataPoints') || tSettings('help.minDataPoints', { defaultValue: 'Minimum entries required to run analysis' })}
                  </p>
                </div>

                <div>
                  <Label htmlFor="pattern-correlationThreshold" className="block mb-1">{tSettings('fields.correlationThreshold', { defaultValue: 'Correlation threshold' })}</Label>
                  <Input
                    id="pattern-correlationThreshold"
                    type="number"
                    step="0.05"
                    min="0"
                    max="1"
                    inputMode="decimal"
                    aria-describedby="help-correlationThreshold"
                    aria-invalid={Boolean(errorFor('pattern-correlationThreshold'))}
                    ref={(el) => { if (errorFor('pattern-correlationThreshold')) firstInvalidRef.current = el; }}
                    className="w-full"
                    value={config.patternAnalysis.correlationThreshold}
                    onChange={(e) => onNumberChange(['patternAnalysis', 'correlationThreshold'], Number(e.target.value))}
                  />
                  <p id="help-correlationThreshold" className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    {errorFor('pattern-correlationThreshold') || tSettings('help.correlationThreshold', { defaultValue: '0..1, higher means stricter correlations' })}
                  </p>
                </div>

                <div>
                  <Label htmlFor="enhanced-anomalyThreshold" className="block mb-1">{tSettings('fields.anomalyThreshold', { defaultValue: 'Anomaly threshold (σ)' })}</Label>
                  <Input
                    id="enhanced-anomalyThreshold"
                    type="number"
                    step="0.1"
                    inputMode="decimal"
                    aria-describedby="help-anomalyThreshold"
                    aria-invalid={Boolean(errorFor('enhanced-anomalyThreshold'))}
                    ref={(el) => { if (errorFor('enhanced-anomalyThreshold')) firstInvalidRef.current = el; }}
                    className="w-full"
                    value={config.enhancedAnalysis.anomalyThreshold}
                    onChange={(e) => onNumberChange(['enhancedAnalysis', 'anomalyThreshold'], Number(e.target.value))}
                  />
                  <p id="help-anomalyThreshold" className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    {errorFor('enhanced-anomalyThreshold') || tSettings('help.anomalyThreshold', { defaultValue: 'Standard deviations from mean to flag anomalies' })}
                  </p>
                </div>

                <div>
                  <Label htmlFor="time-defaultAnalysisDays" className="block mb-1">{tSettings('fields.defaultAnalysisDays', { defaultValue: 'Default analysis window (days)' })}</Label>
                  <Input
                    id="time-defaultAnalysisDays"
                    type="number"
                    inputMode="numeric"
                    aria-describedby="help-defaultAnalysisDays"
                    aria-invalid={Boolean(errorFor('time-defaultAnalysisDays'))}
                    ref={(el) => { if (errorFor('time-defaultAnalysisDays')) firstInvalidRef.current = el; }}
                    className="w-full"
                    value={config.timeWindows.defaultAnalysisDays}
                    onChange={(e) => onNumberChange(['timeWindows', 'defaultAnalysisDays'], Number(e.target.value))}
                  />
                  <p id="help-defaultAnalysisDays" className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    {errorFor('time-defaultAnalysisDays') || tSettings('help.defaultAnalysisDays', { defaultValue: 'Window for most computations' })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tSettings('sections.alerts', { defaultValue: 'Alert sensitivity' })}</CardTitle>
              <CardDescription>{tSettings('sections.alerts_desc', { defaultValue: 'Choose how sensitive alerts should be' })}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <RadioGroup value={config.alertSensitivity.level} onValueChange={(v) => onRadioChange(v as 'low' | 'medium' | 'high')} aria-label={tSettings('fields.alertSensitivity', { defaultValue: 'Alert sensitivity' })}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="level-low" value="low" />
                  <Label htmlFor="level-low" className="cursor-pointer">{tSettings('labels.low', { defaultValue: 'Low' })}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="level-medium" value="medium" />
                  <Label htmlFor="level-medium" className="cursor-pointer">{tSettings('labels.medium', { defaultValue: 'Medium' })}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="level-high" value="high" />
                  <Label htmlFor="level-high" className="cursor-pointer">{tSettings('labels.high', { defaultValue: 'High' })}</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tSettings('sections.cache', { defaultValue: 'Cache' })}</CardTitle>
              <CardDescription>{tSettings('sections.cache_desc', { defaultValue: 'Tune cache behavior' })}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cache-ttl" className="block mb-1">{tSettings('fields.cacheTtl', { defaultValue: 'Cache TTL (ms)' })}</Label>
                  <Input
                    id="cache-ttl"
                    type="number"
                    inputMode="numeric"
                    aria-describedby="help-cache-ttl"
                    aria-invalid={Boolean(errorFor('cache-ttl'))}
                    ref={(el) => { if (errorFor('cache-ttl')) firstInvalidRef.current = el; }}
                    className="w-full"
                    value={config.cache.ttl}
                    onChange={(e) => onNumberChange(['cache', 'ttl'], Number(e.target.value))}
                  />
                  <p id="help-cache-ttl" className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    {errorFor('cache-ttl') || tSettings('help.cacheTtl', { defaultValue: 'Time to live for cached analytics results' })}
                  </p>
                </div>
                <div>
                  <Label htmlFor="cache-maxSize" className="block mb-1">{tSettings('fields.cacheMax', { defaultValue: 'Max cache size' })}</Label>
                  <Input
                    id="cache-maxSize"
                    type="number"
                    inputMode="numeric"
                    aria-describedby="help-cache-maxSize"
                    className="w-full"
                    value={config.cache.maxSize}
                    onChange={(e) => onNumberChange(['cache', 'maxSize'], Number(e.target.value))}
                  />
                  <p id="help-cache-maxSize" className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    {tSettings('help.cacheMax', { defaultValue: 'Max number of cached entries' })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Button type="button" onClick={handleSave} aria-label={tSettings('actions.save', { defaultValue: 'Save configuration' })}>
              <Save className="h-4 w-4 mr-2" /> {tCommon('buttons.save', { defaultValue: 'Save' })}
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} aria-label={tSettings('actions.reset', { defaultValue: 'Reset to defaults' })}>
              <RotateCcw className="h-4 w-4 mr-2" /> {tSettings('actions.reset', { defaultValue: 'Reset' })}
            </Button>
            <Separator className="hidden sm:block mx-2" orientation="vertical" />
            <Button type="button" variant="outline" onClick={exportConfig} aria-label={tSettings('actions.export', { defaultValue: 'Export configuration' })}>
              <Download className="h-4 w-4 mr-2" /> {tSettings('actions.export', { defaultValue: 'Export' })}
            </Button>
            <div className="relative inline-flex items-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                onChange={importConfig}
                aria-label={tSettings('actions.import', { defaultValue: 'Import configuration file' })}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Button type="button" variant="outline" aria-hidden="true">
                <Upload className="h-4 w-4 mr-2" /> {tSettings('actions.import', { defaultValue: 'Import' })}
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4">
          {Preview}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{tSettings('help.title', { defaultValue: 'Help' })}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>{tSettings('help.reduced_motion', { defaultValue: 'Animations respect reduced motion preferences.' })}</li>
                <li>{tSettings('help.accessibility', { defaultValue: 'All fields have labels and validation will be announced.' })}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

