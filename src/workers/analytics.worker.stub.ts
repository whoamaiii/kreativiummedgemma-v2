// Minimal stub worker used in POC mode to avoid bundling heavy analytics code
// Posts a single complete message with empty-but-valid results

// eslint-disable-next-line no-restricted-globals
self.onmessage = (event: MessageEvent) => {
  const data: any = event.data || {};
  const cacheKey = data.cacheKey;
  // eslint-disable-next-line no-restricted-globals
  (self as unknown as Worker).postMessage({
    type: 'complete',
    payload: {
      patterns: [],
      correlations: [],
      environmentalCorrelations: [],
      predictiveInsights: [],
      anomalies: [],
      insights: ['POC mode: lightweight analytics stub'],
      cacheKey
    }
  });
};


