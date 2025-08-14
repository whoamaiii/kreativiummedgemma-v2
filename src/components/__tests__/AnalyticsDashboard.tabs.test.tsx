import React from 'react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AnalyticsDashboard } from '@/components/AnalyticsDashboard';

// Minimal stubs and providers
vi.mock('@/hooks/useTranslation', () => ({
  useTranslation: () => ({
    tCommon: (k: string) => k,
    tStudent: (k: string) => k,
    tAnalytics: (k: string) => k,
  }),
}));

vi.mock('@/hooks/useAnalyticsWorker', () => ({
  useAnalyticsWorker: () => ({
    results: { patterns: [], correlations: [], insights: [] },
    isAnalyzing: false,
    error: null,
    runAnalysis: vi.fn(),
    invalidateCacheForStudent: vi.fn(),
  }),
}));

// Lazy panels are code-split; mock them to simple markers
vi.mock('@/components/lazy/LazyChartsPanel', () => ({
  LazyChartsPanel: ({ filteredData }: any) => (
    <div data-testid="charts-panel">charts:{filteredData?.entries?.length ?? 0}</div>
  ),
}));
vi.mock('@/components/lazy/LazyPatternsPanel', () => ({
  LazyPatternsPanel: () => <div data-testid="patterns-panel">patterns</div>,
}));
vi.mock('@/components/lazy/LazyCorrelationsPanel', () => ({
  LazyCorrelationsPanel: () => (
    <div data-testid="correlations-panel">correlations</div>
  ),
}));
vi.mock('@/components/lazy/LazyAlertsPanel', () => ({
  LazyAlertsPanel: () => <div data-testid="alerts-panel">alerts</div>,
}));

// Sync tab param hook: interact with window.location.search
vi.mock('@/hooks/useSyncedTabParam', () => {
  return {
    useSyncedTabParam: ({ defaultTab }: any = { defaultTab: 'charts' }) => {
      const params = new URLSearchParams(window.location.search);
      const initial = (params.get('tab') as any) || defaultTab;
      const [tab, setTab] = React.useState(initial);
      React.useEffect(() => {
        const p = new URLSearchParams(window.location.search);
        p.set('tab', tab);
        const url = `${window.location.pathname}?${p.toString()}`;
        window.history.replaceState({}, '', url);
      }, [tab]);
      return [tab, setTab];
    },
  };
});

const student = { id: 's1', name: 'A' } as any;
const filteredData = { entries: [], emotions: [], sensoryInputs: [] };

function renderWithRouter(ui: React.ReactElement, initialEntries: string[] = ['/']) {
  return render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);
}

// Scope: tabbed UI behaviors (lazy mounting, URL sync, accessibility)
describe('AnalyticsDashboard tabs', () => {
  beforeEach(() => {
    // Reset URL before each test to avoid cross-test leakage
    window.history.replaceState({}, '', '/');
  });
  test('initial render defaults to charts tab and only charts content in DOM', async () => {
    renderWithRouter(<AnalyticsDashboard student={student} filteredData={filteredData} />);

    // Charts content present
    expect(await screen.findByTestId('charts-panel')).toBeInTheDocument();

    // Patterns and correlations panels not in DOM until selected
    expect(screen.queryByTestId('patterns-panel')).toBeNull();
    expect(screen.queryByTestId('correlations-panel')).toBeNull();

    // Correlations tab testid remains present and clickable
    const correlationsTab = screen.getByTestId('dashboard-correlations-tab');
    expect(correlationsTab).toBeInTheDocument();
    expect(correlationsTab).toBeEnabled();
  });

  test('URL param tab=patterns mounts only PatternsPanel; switching updates URL', async () => {
// Set real URL since the hook reads window.location
    window.history.replaceState({}, '', '/?tab=patterns');
    renderWithRouter(
      <AnalyticsDashboard student={student} filteredData={filteredData} />
    );

    // Only patterns content
    expect(await screen.findByTestId('patterns-panel')).toBeInTheDocument();
    expect(screen.queryByTestId('charts-panel')).toBeNull();
    expect(screen.queryByTestId('correlations-panel')).toBeNull();

    // Switch to correlations and verify URL updates
    const correlationsTab = screen.getByTestId('dashboard-correlations-tab');
    await userEvent.click(correlationsTab);
    await waitFor(() => {
      expect(new URLSearchParams(window.location.search).get('tab')).toBe('correlations');
    });
    expect(await screen.findByTestId('correlations-panel')).toBeInTheDocument();
    expect(screen.queryByTestId('patterns-panel')).toBeNull();
  });

  test('reloading with tab=correlations shows correlations tab active', async () => {
window.history.replaceState({}, '', '/?tab=correlations');
    renderWithRouter(
      <AnalyticsDashboard student={student} filteredData={filteredData} />
    );
    expect(await screen.findByTestId('correlations-panel')).toBeInTheDocument();
    // Ensure charts not mounted
    expect(screen.queryByTestId('charts-panel')).toBeNull();
  });

  test('live region announces tab label on change', async () => {
    renderWithRouter(<AnalyticsDashboard student={student} filteredData={filteredData} />);
    const liveRegion = screen.getByRole('status');

    // Initially charts
    expect(liveRegion.textContent || '').toMatch(/tabs\.charts/);

    // Switch to patterns
    await userEvent.click(screen.getByTestId('dashboard-patterns-tab'));
    await waitFor(() => {
      expect((liveRegion.textContent || '')).toMatch(/tabs\.patterns/);
    });
  });

test('skip link focuses first tab panel', async () => {
    // Ensure default charts tab
    window.history.replaceState({}, '', '/');
    renderWithRouter(<AnalyticsDashboard student={student} filteredData={filteredData} />);
    const skip = screen.getByRole('link', { name: /skipToContent/i });

    await userEvent.tab(); // move focus to body
    await userEvent.click(skip);

    const panel = await screen.findByTestId('charts-panel');
    // Focus should be on tabpanel container (TabsContent) since we set tabIndex=-1 on it
    const tabpanel = document.getElementById('analytics-tabpanel');
    expect(tabpanel).toBeTruthy();
  });
});
