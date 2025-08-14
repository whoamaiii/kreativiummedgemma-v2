import React from 'react';

export const LazyCorrelationsPanel = React.lazy(() =>
  import('@/components/analytics-panels/CorrelationsPanel')
);
