import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HeuristicAnalysisEngine } from '@/lib/analysis/heuristicAnalysisEngine';
import { ZAiReport } from '@/lib/analysis/aiSchema';

vi.mock('@/lib/dataStorage', () => {
  return {
    dataStorage: {
      getEntriesForStudent: vi.fn(() => []),
      getGoalsForStudent: vi.fn(() => []),
    },
  };
});

vi.mock('@/lib/analyticsConfig', async (orig) => {
  const mod: any = await orig();
  // Ensure deterministic config for tests
  return {
    ...mod,
    analyticsConfig: {
      getConfig: () => ({
        ...mod.DEFAULT_ANALYTICS_CONFIG,
        cache: { ...mod.DEFAULT_ANALYTICS_CONFIG.cache, ttl: 1000 },
      }),
      subscribe: () => () => {},
    },
  };
});

describe('HeuristicAnalysisEngine', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns safe results on invalid student id', async () => {
    const engine = new HeuristicAnalysisEngine();
    // @ts-expect-error testing invalid input
    const res = await engine.analyzeStudent(undefined);
    expect(res).toBeDefined();
    expect(res.patterns).toEqual([]);
    expect(res.correlations).toEqual([]);
    expect(res.predictiveInsights).toEqual([]);
    expect(res.anomalies).toEqual([]);
  });

  it('wraps unified analytics and returns AnalyticsResultsAI', async () => {
    const engine = new HeuristicAnalysisEngine();
    const { dataStorage } = await import('@/lib/dataStorage');

    const now = new Date();
    (dataStorage.getEntriesForStudent as any).mockReturnValue([
      {
        id: 'e1',
        studentId: 's1',
        timestamp: now,
        emotions: [
          { id: 'em1', studentId: 's1', emotion: 'happy', intensity: 3, timestamp: now },
        ],
        sensoryInputs: [
          { id: 'sens1', studentId: 's1', response: 'calm', timestamp: now },
        ],
      },
    ]);
    (dataStorage.getGoalsForStudent as any).mockReturnValue([]);

    const res = await engine.analyzeStudent('s1', undefined, { includeAiMetadata: true });
    expect(res).toBeDefined();
    expect(Array.isArray(res.patterns)).toBe(true);
    expect(Array.isArray(res.correlations)).toBe(true);
    expect(Array.isArray(res.predictiveInsights)).toBe(true);
    expect(Array.isArray(res.anomalies)).toBe(true);
    expect(res.ai?.provider).toBe('heuristic');
    expect(typeof res.ai?.confidence?.overall === 'number').toBe(true);
  });

  it('respects conservative preset via options', async () => {
    const engine = new HeuristicAnalysisEngine();
    const { dataStorage } = await import('@/lib/dataStorage');
    const now = new Date();
    (dataStorage.getEntriesForStudent as any).mockReturnValue([
      { id: 'e1', studentId: 's1', timestamp: now, emotions: [], sensoryInputs: [] },
      { id: 'e2', studentId: 's1', timestamp: now, emotions: [], sensoryInputs: [] },
      { id: 'e3', studentId: 's1', timestamp: now, emotions: [], sensoryInputs: [] },
    ]);
    (dataStorage.getGoalsForStudent as any).mockReturnValue([]);

    const res = await engine.analyzeStudent('s1', undefined, { profile: 'conservative', includeAiMetadata: true });
    expect(res).toBeDefined();
    expect(res.ai?.provider).toBe('heuristic');
  });

  it('produces heuristic interventions compatible with extended schema (empty evidence fields)', async () => {
    const parsed = ZAiReport.safeParse({
      summary: 's', keyFindings: [], patterns: [], correlations: [], hypothesizedCauses: [], suggestedInterventions: [
        { title: 't', description: 'd', actions: [], expectedImpact: 'low', metrics: [], sources: [] }
      ], anomalies: [], predictiveInsights: [], dataLineage: [], confidence: { overall: 0.5 }
    });
    expect(parsed.success).toBe(true);
  });
});

