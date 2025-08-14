# Environment Variables

This project uses Vite. Environment flags are read via import.meta.env and helpers in src/lib/env.ts
and src/lib/analyticsConfigOverride.ts.

Core variables

- import.meta.env.DEV: boolean provided by Vite for development mode
- import.meta.env.PROD: boolean provided by Vite for production mode
- MODE: when set to 'poc', POC_MODE becomes true (see src/lib/env.ts)
- VITE_POC_MODE: 'true' enables POC_MODE regardless of MODE (src/lib/env.ts)
- VITE_ANALYTICS_DEV_OVERRIDE: '1' auto-applies a more sensitive analytics configuration in
  development (src/lib/analyticsConfigOverride.ts)
- VITE_USE_MOCK or NEXT_PUBLIC_USE_MOCK: '1' | 'true' | 'yes' to enable mock data via
  src/data/source.ts (per project rule)

Behavior

- POC_MODE is true if MODE === 'poc' or VITE_POC_MODE === 'true'. Use POC_MODE for feature flags or
  simplified flows for proof-of-concept demos.
- When import.meta.env.DEV and VITE_ANALYTICS_DEV_OVERRIDE === '1', the app will invoke
  applyDevelopmentAnalyticsConfig() at startup, clearing relevant analytics caches and lowering
  thresholds to surface patterns with less data.
- In production (PROD === true), dev overrides do not auto-apply; use configuration presets or
  updateConfig at runtime if needed.

Security and secrets

- Never print secrets or tokens with console or logs. Use the central logger where necessary and
  ensure sensitive values are masked.
- Do not commit .env files with secrets. Prefer .env.local for local-only values.

Examples (.env.local)

```
# Run app in normal development mode
VITE_ANALYTICS_DEV_OVERRIDE=1
VITE_POC_MODE=false
VITE_USE_MOCK=true
```

Related docs

- docs/CONFIGURATION_SCHEMA.md
- docs/CONFIG_EXAMPLES.md
- docs/CONFIG_TROUBLESHOOTING.md
