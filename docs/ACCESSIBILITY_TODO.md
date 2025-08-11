Accessibility follow-ups for axe rules (tracked from e2e smoke)

Status: open

Rules currently disabled in e2e (to keep smoke stable):

- color-contrast: We need a design pass to ensure sufficient contrast across badges and muted text in dark theme. Scope candidates: `Badge` variants in `VisualizationControls.tsx`, labels in tabs/cards.
- button-name: Some icon-only controls may be missing accessible names in certain contexts. Audit buttons rendered via Radix `DropdownMenuTrigger` and icon-only actions.

Proposed tasks:

1) Audit icon-only buttons and ensure each has either aria-label, title, or visible text. Files to inspect: `VisualizationControls.tsx`, `AnalyticsDashboard.tsx`, `Dashboard.tsx`, `StudentProfile.tsx`.
2) Contrast: run axe and manual checks in both light/dark themes; adjust Tailwind classes for text and backgrounds where needed.
3) Re-enable the disabled rules in `tests/e2e/interactive-viz.spec.ts` incrementally once issues are fixed.

Acceptance criteria:

- Axe scan of `/e2e/interactive-viz` passes with `color-contrast` and `button-name` enabled.
- No loss of visual design intent; UI remains consistent in both themes.


