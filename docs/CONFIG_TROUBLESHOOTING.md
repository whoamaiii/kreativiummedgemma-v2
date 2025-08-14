# Troubleshooting Configuration Validation Errors

This guide helps diagnose and resolve configuration validation issues.

Validation flow

- The manager loads from localStorage and does a basic shape check (analyticsConfig.validateConfig
  internal).
- The public helper validateAnalyticsRuntimeConfig in src/lib/analyticsConfigValidation.ts does
  additional shape and numeric sanity checks and falls back to DEFAULT_ANALYTICS_CONFIG if invalid.
- getValidatedConfig() always returns a safe configuration.

Common errors and remedies

1. invalid-shape-or-values

- Cause: Missing required root keys or non-numeric values for numeric fields.
- Fix: Reset to defaults or re-import a correct JSON.
- Code:

```
import { analyticsConfig } from '@/lib/analyticsConfig';
analyticsConfig.resetToDefaults();
```

2. Local storage quota exceeded

- Symptom: Config changes do not persist; logger shows Failed to save analytics configuration.
- Cause: Browser localStorage quota reached.
- Fix: The manager already attempts to remove only its own keys. You can clear data from Application
  Storage for this app or reduce stored data size.

3. Drift between schemas after app upgrade

- Symptom: Newly required fields missing in an older saved configuration.
- Fix: Export your current config (for backup), then reset to defaults and selectively re-apply
  changes.

Diagnostics tips

- Use analyticsConfig.exportConfig() to inspect the effective JSON.
- Use getValidatedConfig() when consuming in logic to guarantee safety:

```
import { getValidatedConfig } from '@/lib/analyticsConfigValidation';
const cfg = getValidatedConfig();
```

Safe consumption pattern

- Always capture config at the start of a function and use that snapshot to avoid mid-execution
  changes.
- Avoid direct deep mutation; always use analyticsConfig.updateConfig with partials.

Related files

- src/lib/analyticsConfig.ts
- src/lib/analyticsConfigValidation.ts
- src/lib/analyticsConfigOverride.ts
