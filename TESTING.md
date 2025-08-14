# Testing Guidelines

This project uses Playwright for end-to-end tests and a shared Axe helper for accessibility checks.

Key practices:

- Prefer role-based selectors (getByRole) and data-testid for stability. Avoid text-only selectors.
- Use shared accessibility helper from tests/utils/a11y:
  - runAxeWithAppChromeHidden(page, opts?) to run Axe while hiding app chrome (e.g. toasts)
  - writeAxeViolations(name, result) to write violations to test-results/ for CI artifacts
- Keep zero-violation threshold by default; log artifacts for debugging on failure.
- Hide transient UI chrome in Axe scans with hideSelectors if needed.
- Add data-testid attributes to interactive elements and toasts that tests must target.

Patterns:

- Navigation and smoke tests should include a minimal Axe scan per-page.
- Export/report tests should verify both success and error paths via toasts (data-testid prefixed
  with toast-export-...).
- Interactive visualization tests should prefer semantic roles and resilient toggles, and include a
  basic Axe scan.

Artifacts:

- On failures, Playwright uploads test-results/ and HTML reports via .github/workflows/e2e.yml.
- Axe violation logs are written to test-results/AXE*VIOLATIONS*<timestamp>\_<name>.log.

Commands:

- Run tests locally: npx playwright test
- Open report: npx playwright show-report
