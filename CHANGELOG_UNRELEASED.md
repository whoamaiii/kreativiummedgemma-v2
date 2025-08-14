# Unreleased

## feat: runtime-tunable analytics via analyticsConfig
- Behavior is now tunable at runtime via analyticsConfig settings.
- All thresholds and insights logic read from analyticsConfig with safe fallbacks when configuration is absent.
- No hardcoded thresholds; behavior can be changed without redeploying.
- On analytics failure, minimal safe results are returned and a single toast notification is shown.

Note: This entry will be moved to CHANGELOG.md upon merge when Task 2 and Task 5 are confirmed complete.

