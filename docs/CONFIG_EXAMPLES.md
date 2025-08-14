# Configuration Examples

These examples demonstrate common configuration scenarios using analyticsConfig. All updates are
partial and deeply merged into the current configuration.

- Source: src/lib/analyticsConfig.ts

Set a preset

```
import { analyticsConfig } from '@/lib/analyticsConfig';

analyticsConfig.setPreset('balanced');
// or
analyticsConfig.setPreset('conservative');
// or
analyticsConfig.setPreset('sensitive');
```

Increase minimum data and lower false positives

```
analyticsConfig.updateConfig({
  patternAnalysis: {
    minDataPoints: 6,
    correlationThreshold: 0.35,
  },
  enhancedAnalysis: {
    anomalyThreshold: 2.0,
    minSampleSize: 8,
  },
  alertSensitivity: {
    level: 'low',
    emotionIntensityMultiplier: 0.9,
    frequencyMultiplier: 0.9,
    anomalyMultiplier: 0.9,
  },
});
```

Shorten analysis windows for faster iteration in demos

```
analyticsConfig.updateConfig({
  timeWindows: {
    defaultAnalysisDays: 14,
    recentDataDays: 3,
    shortTermDays: 7,
    longTermDays: 45,
  },
});
```

Export/import configuration

```
const json = analyticsConfig.exportConfig();
// Save json somewhere (user settings, file download)

// Later or elsewhere
analyticsConfig.importConfig(json);
```

Cache tuning

```
analyticsConfig.updateConfig({
  cache: {
    ttl: 5 * 60 * 1000, // 5 minutes
    maxSize: 100,
    invalidateOnConfigChange: true,
  },
});
```

POC/development overrides

```
// Auto-applied if DEV and VITE_ANALYTICS_DEV_OVERRIDE === '1'
// To apply manually at runtime:
import { applyDevelopmentAnalyticsConfig } from '@/lib/analyticsConfigOverride';
applyDevelopmentAnalyticsConfig();
```

Notes

- Avoid hardcoding thresholds in business logic. Always read from the current configuration (see
  migration guide).
- Use presets for quick changes and updateConfig for fine-grained control.
