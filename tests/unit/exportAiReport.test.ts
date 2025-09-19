import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { AnalyticsResultsAI } from '@/lib/analysis/analysisEngine';

vi.mock('@/lib/evidence', async (orig) => {
  const mod: any = await orig();
  return {
    ...mod,
    resolveSources: vi.fn(async (ids: string[]) => ids.map((id) => ({ id, title: `Source ${id}`, url: 'https://example.com', shortExcerpt: 'Excerpt', tags: ['udl'], year: 2021 }))),
  };
});

describe('exportAiReport.formatAiReportText', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('includes inline sources and a Källor section', async () => {
    const { formatAiReportText } = await import('@/lib/ai/exportAiReport');
    const result: AnalyticsResultsAI = {
      patterns: [], correlations: [], environmentalCorrelations: [], predictiveInsights: [], anomalies: [], insights: [], suggestedInterventions: [
        { title: 'Intervention A', description: 'Desc', actions: [], metrics: ['M1'], sources: ['s1','s2'], udlCheckpoints: [], hlps: [], tier: 'Tier1', scope: 'classroom' }
      ]
    } as any;
    const text = await formatAiReportText(result, { includeMetadata: false, locale: 'sv' });
    expect(text).toMatch(/\[Källor: Source s1, Source s2\]/);
    expect(text).toMatch(/# Källor/);
    expect(text).toMatch(/• Source s1/);
  });

  it('omits sources section gracefully when resolve fails', async () => {
    const evidence = await import('@/lib/evidence');
    (evidence as any).resolveSources.mockImplementationOnce(async () => { throw new Error('fail'); });
    const { formatAiReportText } = await import('@/lib/ai/exportAiReport');
    const result: AnalyticsResultsAI = {
      patterns: [], correlations: [], environmentalCorrelations: [], predictiveInsights: [], anomalies: [], insights: [], suggestedInterventions: [
        { title: 'Intervention A', description: 'Desc', actions: [], metrics: ['M1'], sources: ['s1'], udlCheckpoints: [], hlps: [] }
      ]
    } as any;
    const text = await formatAiReportText(result, { includeMetadata: false, locale: 'sv' });
    expect(text).not.toMatch(/# Källor/);
  });

  it('handles interventions without sources and omits inline [Källor: ...] labels', async () => {
    const { formatAiReportText } = await import('@/lib/ai/exportAiReport');
    const result: AnalyticsResultsAI = {
      patterns: [], correlations: [], environmentalCorrelations: [], predictiveInsights: [], anomalies: [], insights: [], suggestedInterventions: [
        { title: 'Intervention A', description: 'Desc', actions: [], metrics: ['M1'], sources: [], udlCheckpoints: [], hlps: [] }
      ]
    } as any;
    const text = await formatAiReportText(result, { includeMetadata: false, locale: 'sv' });
    expect(text).not.toMatch(/\[Källor:/);
    expect(text).not.toMatch(/# Källor/);
  });
});


