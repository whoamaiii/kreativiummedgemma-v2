import type { TabKey } from '@/types/analytics';

export const ANALYTICS_TABS: { key: TabKey; labelKey: string; testId: string; ariaLabelKey?: string }[] = [
  { key: 'charts', labelKey: 'tabs.charts', testId: 'dashboard-charts-tab', ariaLabelKey: 'aria.tabs.charts' },
  { key: 'patterns', labelKey: 'tabs.patterns', testId: 'dashboard-patterns-tab', ariaLabelKey: 'aria.tabs.patterns' },
  { key: 'correlations', labelKey: 'tabs.correlations', testId: 'dashboard-correlations-tab', ariaLabelKey: 'aria.tabs.correlations' },
  { key: 'alerts', labelKey: 'tabs.alerts', testId: 'dashboard-alerts-tab', ariaLabelKey: 'aria.tabs.alerts' },
];
