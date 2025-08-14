## POC Demo Checklist

1. Environment

- Run: `npm run dev:poc` (or `npm run build:poc && npm run preview:poc`)
- Verify POC badge visible on Dashboard header

2. Flow (happy path)

- Dashboard loads quickly, no console noise
- Add Student → create one demo student
- Tracking → open first student and add a quick entry
- Interactive Visualization → show trends and correlations (3D hidden in POC)
- Export CSV → confirm download

3. Data

- If empty state, use Mock Data Loader (consistent results in POC mode)

4. Resilience

- Turn off network (simulated) or trigger an error; friendly alert appears
- No hard crashes; ErrorBoundary handles unexpected issues

5. Close

- Return to Dashboard; emphasize insights/polish
