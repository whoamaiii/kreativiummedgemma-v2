## 0.1.1 - 2025-08-13

### Security
- **CRITICAL**: Resolved all 17 npm security vulnerabilities (13 high, 4 moderate)
- **Removed**: Unused `@tensorflow/tfjs-vis` package eliminating entire vega vulnerability chain
- **Added**: Security overrides for transitive dependencies:
  - `esbuild >= 0.24.3` (fixes development server vulnerability)
  - `d3-color >= 3.1.0` (fixes ReDoS vulnerability)
  - `node-fetch >= 2.6.7` (fixes security header forwarding)
- **Updated**: Core dependencies
  - `vite@7.1.2` (latest, includes security patches)
  - `@tensorflow/tfjs@4.22.0` (latest)

### Performance
- **Improved**: Bundle size reduction from removing unused visualization dependencies
- **Enhanced**: Build speed with updated esbuild

### Documentation
- **Added**: Comprehensive security remediation report (`artifacts/security-remediation.md`)

## 0.1.0 - 2025-08-08

- Chart hover behavior hardened in `src/components/charts/EChartContainer.tsx` and `src/components/charts/ChartKit.ts`.
  - Disabled series dimming on hover (`emphasis.disabled`, `focus: 'none'`, opaque `blur` state).
  - Tooltip stability improvements (`appendToBody`, zero transition duration) and container overflow visibility.
  - Rationale: prevent perception that the chart "disappears" when hovering; keep all lines fully visible.





