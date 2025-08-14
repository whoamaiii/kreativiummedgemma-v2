# Migration Guide: From Hardcoded Values to Runtime Configuration

Goal

- Replace hardcoded thresholds and constants with centrally managed runtime configuration to improve
  flexibility, a/b testing, and safety.

Before

```
// Bad: hardcoded thresholds
if (correlation > 0.3 && sessions >= 5) {
  // ...
}
```

After

```
import { analyticsConfig } from '@/lib/analyticsConfig';

const cfg = analyticsConfig.getConfig();
if (
  correlation > cfg.patternAnalysis.correlationThreshold &&
  sessions >= cfg.insights.MIN_SESSIONS_FOR_FULL_ANALYTICS
) {
  // ...
}
```

Safer consumption in core logic

```
import { getValidatedConfig } from '@/lib/analyticsConfigValidation';

function analyze(...) {
  const cfg = getValidatedConfig();
  // Use cfg throughout to avoid partial shape issues
}
```

Guidelines

- Never hardcode analytics thresholds, counts, or days. Read from cfg.
- Prefer getValidatedConfig() in critical paths. Else, analyticsConfig.getConfig() is fine for UI or
  non-critical rendering.
- Use presets for quick, user-facing modes (conservative, balanced, sensitive).
- For demos/dev, prefer VITE_ANALYTICS_DEV_OVERRIDE=1 to surface insights without changing code.
- Keep business logic pure and avoid mutating cfg; treat it as immutable.

Refactoring checklist

- Identify magic numbers related to analytics in src/lib and src/components.
- Replace with reads from cfg (patternAnalysis, enhancedAnalysis, timeWindows, insights, confidence,
  healthScore, analytics).
- Remove dead constants and update tests to stub configuration via analyticsConfig.updateConfig in
  setup.
- Add unit tests for feature behavior under different config presets.

Examples

- Enforcing minimum data points:

```
const cfg = getValidatedConfig();
if (data.length < cfg.patternAnalysis.minDataPoints) {
  return { type: 'insufficient-data' };
}
```

- Tuning cache behavior:

```
analyticsConfig.updateConfig({ cache: { ttl: 300000, maxSize: 100 } });
```

Cross-cutting concerns

- i18n and UI strings must remain in react-i18next namespaces as per project rules; configuration
  controls behavior only.
- Use the central logger (src/lib/logger.ts). Do not log secrets or add console statements.
- Respect performance rules: do not recompute large values on every render. Retrieve cfg once per
  operation.

Related docs

- docs/CONFIGURATION_SCHEMA.md
- docs/ENVIRONMENT_VARIABLES.md
- docs/CONFIG_EXAMPLES.md
- docs/CONFIG_TROUBLESHOOTING.md
