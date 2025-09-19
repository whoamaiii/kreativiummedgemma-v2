import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useTranslation } from '@/hooks/useTranslation';
import { Progress } from '@/components/ui/progress';
import { Info } from 'lucide-react';

export type ExportTemplate = 'summary' | 'detailed' | 'presentation';
export type ChartQuality = 'standard' | 'high' | 'print';
export type ColorScheme = 'default' | 'high-contrast' | 'colorblind-friendly';

export interface ExportOptions {
  format: 'pdf' | 'csv' | 'json';
  template: ExportTemplate;
  chartQuality: ChartQuality;
  colorScheme: ColorScheme;
  includeRawData: boolean;
}

export interface ExportDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  defaultFormat?: 'pdf' | 'csv' | 'json';
  onConfirm: (opts: ExportOptions) => void;
  inProgress?: boolean;
  progressPercent?: number;
  onCancel?: () => void;
  /** If true, dialog closes immediately after confirm. Otherwise parent controls closing. */
  closeOnConfirm?: boolean;
}

export function ExportDialog({ open, onOpenChange, defaultFormat = 'pdf', onConfirm, inProgress = false, progressPercent = 0, onCancel, closeOnConfirm = true }: ExportDialogProps): React.ReactElement {
  const { t } = useTranslation('analytics');
  const [format, setFormat] = React.useState<'pdf' | 'csv' | 'json'>(defaultFormat);
  const [template, setTemplate] = React.useState<ExportTemplate>('detailed');
  const [quality, setQuality] = React.useState<ChartQuality>('high');
  const [scheme, setScheme] = React.useState<ColorScheme>('default');
  const [includeRaw, setIncludeRaw] = React.useState<boolean>(false);

  React.useEffect(() => { setFormat(defaultFormat); }, [defaultFormat]);

  const confirm = () => {
    onConfirm({ format, template, chartQuality: quality, colorScheme: scheme, includeRawData: includeRaw });
    if (closeOnConfirm) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('export.dialog.title')}</DialogTitle>
          <DialogDescription>{t('export.dialog.description')}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-2 items-center gap-3">
            <Label htmlFor="export-format" className="flex items-center gap-1">
              {t('export.options.format')}
              <span className="sr-only">{t('export.options.formatHelp')}</span>
            </Label>
            <Select value={format} onValueChange={(v) => setFormat(v as 'pdf' | 'csv' | 'json')} disabled={inProgress}>
              <SelectTrigger id="export-format" aria-describedby="format-help">
                <SelectValue placeholder={t('export.options.selectFormat')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 items-center gap-3">
            <Label htmlFor="export-template">{t('export.options.template')}</Label>
            <Select value={template} onValueChange={(v) => setTemplate(v as ExportTemplate)} disabled={format !== 'pdf' || inProgress}>
              <SelectTrigger id="export-template" aria-describedby="template-help">
                <SelectValue placeholder={t('export.options.selectTemplate')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summary">{t('export.templates.summary')}</SelectItem>
                <SelectItem value="detailed">{t('export.templates.detailed')}</SelectItem>
                <SelectItem value="presentation">{t('export.templates.presentation')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 items-center gap-3">
            <Label htmlFor="export-quality">{t('export.options.quality')}</Label>
            <Select value={quality} onValueChange={(v) => setQuality(v as ChartQuality)} disabled={format !== 'pdf' || inProgress}>
              <SelectTrigger id="export-quality" aria-describedby="quality-help">
                <SelectValue placeholder={t('export.options.selectQuality')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">{t('export.quality.standard')}</SelectItem>
                <SelectItem value="high">{t('export.quality.high')}</SelectItem>
                <SelectItem value="print">{t('export.quality.print')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 items-center gap-3">
            <Label htmlFor="export-scheme" className="flex items-center gap-1">
              {t('export.options.colorScheme')}
              <Info className="h-3 w-3 text-muted-foreground" aria-label={t('export.options.colorSchemeHelp')} />
            </Label>
            <Select value={scheme} onValueChange={(v) => setScheme(v as ColorScheme)} disabled={format !== 'pdf' || inProgress}>
              <SelectTrigger id="export-scheme" aria-describedby="scheme-help">
                <SelectValue placeholder={t('export.options.selectScheme')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">{t('export.schemes.default')}</SelectItem>
                <SelectItem value="high-contrast">{t('export.schemes.highContrast')}</SelectItem>
                <SelectItem value="colorblind-friendly">{t('export.schemes.colorblindFriendly')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="export-raw" className="cursor-pointer">
              {t('export.options.includeRawData')}
            </Label>
            <Switch 
              id="export-raw" 
              checked={includeRaw} 
              onCheckedChange={setIncludeRaw}
              disabled={inProgress}
              aria-describedby="raw-help"
            />
          </div>

          {inProgress && (
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{t('export.progress.label')}</div>
              <Progress value={progressPercent} className="h-2" />
              <div className="text-xs text-muted-foreground">{Math.max(0, Math.min(100, Math.round(progressPercent)))}%</div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => (inProgress ? onCancel?.() : onOpenChange(false))}>
            {inProgress ? t('common.cancel') : t('common.close')}
          </Button>
          {!inProgress && (
            <Button onClick={confirm} aria-label={t('export.confirmLabel', { format })}>
              {t('export.button')}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


