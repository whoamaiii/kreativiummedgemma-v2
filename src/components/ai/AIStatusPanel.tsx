import React, { memo } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface AIStatusPanelProps {
  value: boolean;
  onChange: (enabled: boolean) => void;
  featureFlagEnabled: boolean;
  className?: string;
}

export const AIStatusPanel = memo(function AIStatusPanel({
  value,
  onChange,
  featureFlagEnabled,
  className,
}: AIStatusPanelProps) {

  return (
    <div className={`rounded-lg border border-primary/20 bg-primary/5 p-3 ${className ?? ''}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${featureFlagEnabled ? 'bg-primary' : 'bg-destructive'}`}></div>
          <span className="text-sm font-medium">BigstianAI Status</span>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="ai-sections-toggle" className="text-xs">Enable AI sections</Label>
          <Switch id="ai-sections-toggle" checked={value} onCheckedChange={onChange} disabled={!featureFlagEnabled} />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Feature Flag: {featureFlagEnabled ? '✅ Enabled' : '❌ Disabled'} • Local Toggle: {value ? '✅ On' : '❌ Off'}
      </p>
    </div>
  );
});

AIStatusPanel.displayName = 'AIStatusPanel';

export default AIStatusPanel;


