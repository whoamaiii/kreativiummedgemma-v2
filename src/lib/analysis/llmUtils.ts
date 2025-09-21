import { analyticsConfig, ANALYTICS_CONFIG, type AnalyticsConfiguration } from '@/lib/analyticsConfig';
import { canonicalSerialize } from '@/lib/canonicalSerialize';
import { logger } from '@/lib/logger';
import { ZAiReport, type AiReport, type AiDataLineageItem } from './aiSchema';
import type { EmotionEntry, SensoryEntry, TrackingEntry, Goal } from '@/types/student';
import type { TimeRange } from './analysisEngine';

export interface DataContextMetrics {
  entries: TrackingEntry[];
  emotions: EmotionEntry[];
  sensoryInputs: SensoryEntry[];
  goals: Goal[];
}

export function toDate(input?: Date | string): Date | undefined {
  if (!input) return undefined;
  const d = input instanceof Date ? input : new Date(input);
  return Number.isFinite(d.getTime()) ? d : undefined;
}

export function withinRange(ts: Date, start?: Date, end?: Date): boolean {
  const t = ts.getTime();
  const s = start ? start.getTime() : -Infinity;
  const e = end ? end.getTime() : Infinity;
  return t >= s && t <= e;
}

export function limitForPrompt<T extends { timestamp: Date }>(arr: T[], limit = 120): T[] {
  return arr.slice(0, Math.max(0, limit));
}

export function buildDataLineage(metrics: DataContextMetrics, timeframe?: TimeRange): AiDataLineageItem[] {
  const range = (() => {
    const s = toDate(timeframe?.start)?.toISOString();
    const e = toDate(timeframe?.end)?.toISOString();
    const tz = timeframe?.timezone;
    if (!s || !e) return undefined;
    return { start: s, end: e, timezone: tz };
  })();
  const lineage: AiDataLineageItem[] = [];
  if (metrics.entries?.length) lineage.push({ source: 'local-storage', type: 'tracking', timeRange: range, fields: ['entries'] });
  if (metrics.emotions?.length) lineage.push({ source: 'local-storage', type: 'emotion', timeRange: range, fields: ['emotions'] });
  if (metrics.sensoryInputs?.length) lineage.push({ source: 'local-storage', type: 'sensor', timeRange: range, fields: ['sensoryInputs'] });
  if (metrics.goals?.length) lineage.push({ source: 'local-storage', type: 'goal', timeRange: range, fields: ['goals'] });
  return lineage;
}

export function createCacheKey(studentId: string, timeframe?: TimeRange, extra?: Record<string, unknown>): string {
  const s = toDate(timeframe?.start)?.toISOString();
  const e = toDate(timeframe?.end)?.toISOString();
  const tz = timeframe?.timezone;
  const keyObj = { studentId, start: s, end: e, tz, extra: extra || {} };
  return canonicalSerialize(keyObj);
}

export function computeAiConfidence(metrics: DataContextMetrics, repaired: boolean, usedFallback: boolean, cfg?: AnalyticsConfiguration): { overall: number; calibration: string } {
  const config = cfg ?? (() => {
    try { return analyticsConfig.getConfig(); } catch { return ANALYTICS_CONFIG as unknown as AnalyticsConfiguration; }
  })();
  const TH = config.confidence.THRESHOLDS;
  const W = config.confidence.WEIGHTS;

  const now = new Date();
  const last = metrics.entries[0]?.timestamp
    || metrics.emotions[0]?.timestamp
    || metrics.sensoryInputs[0]?.timestamp
    || new Date(0);
  const daysSince = Math.max(0, Math.round((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)));

  const ePart = Math.min(1, (metrics.emotions.length || 0) / Math.max(1, TH.EMOTION_ENTRIES)) * W.EMOTION;
  const sPart = Math.min(1, (metrics.sensoryInputs.length || 0) / Math.max(1, TH.SENSORY_ENTRIES)) * W.SENSORY;
  const tPart = Math.min(1, (metrics.entries.length || 0) / Math.max(1, TH.TRACKING_ENTRIES)) * W.TRACKING;
  const recBoost = daysSince <= TH.DAYS_SINCE_LAST_ENTRY ? (1 - (daysSince / Math.max(1, TH.DAYS_SINCE_LAST_ENTRY))) * W.RECENCY_BOOST : 0;

  let score = ePart + sPart + tPart + recBoost;
  if (repaired) score = Math.max(0, score - 0.1);
  if (usedFallback) score = Math.max(0, score - 0.2);
  score = Math.max(0, Math.min(1, score));

  const calibration = [
    `data:e=${metrics.emotions.length},s=${metrics.sensoryInputs.length},t=${metrics.entries.length}`,
    `daysSinceLast=${daysSince}`,
    repaired ? 'validation=repaired' : 'validation=ok',
    usedFallback ? 'fallback=heuristic' : 'fallback=none',
  ].join('; ');

  return { overall: score, calibration };
}

export function validateOrRepairAiReport(input: unknown): { ok: true; report: AiReport; repaired: boolean; caveats: string[] } | { ok: false; error: Error; caveats: string[] } {
  const parsed = ZAiReport.safeParse(input);
  if (parsed.success) {
    return { ok: true, report: parsed.data, repaired: false, caveats: [] };
  }

  const caveats: string[] = ['AI output failed schema validation; applied repair pass'];
  try {
    const repaired = coerceToAiReportShape(input);
    const parsed2 = ZAiReport.parse(repaired);
    return { ok: true, report: parsed2, repaired: true, caveats };
  } catch (err) {
    logger.error('[LLM] validateOrRepairAiReport failed', { error: err instanceof Error ? { message: err.message, name: err.name } : String(err) });
    return { ok: false, error: err as Error, caveats };
  }
}

function arr<T>(v: unknown): T[] {
  return Array.isArray(v) ? (v as T[]).filter(Boolean) : [];
}

type UnknownRecord = Record<string, unknown>;

const SEVERITY_VALUES = ['low', 'medium', 'high'] as const;
const TIME_HORIZON_VALUES = ['short', 'medium', 'long'] as const;
const SOURCE_TYPE_VALUES = ['emotion', 'behavior', 'sensor', 'environment', 'goal', 'tracking', 'system', 'external', 'other'] as const;

function asObject(value: unknown): UnknownRecord | undefined {
  return value && typeof value === 'object' ? (value as UnknownRecord) : undefined;
}

function asRecordArray(value: unknown): UnknownRecord[] {
  return arr<UnknownRecord>(value);
}

function getStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0) : [];
}

function asEnumValue<T extends string>(value: unknown, allowed: readonly T[]): T | undefined {
  const candidate = typeof value === 'string' ? value : undefined;
  return candidate && (allowed as readonly string[]).includes(candidate) ? (candidate as T) : undefined;
}

function asEnumArray<T extends string>(value: unknown, allowed: readonly T[]): T[] {
  return getStringArray(value).filter((item): item is T => (allowed as readonly string[]).includes(item));
}

function num(v: unknown, def = 0): number {
  const n = typeof v === 'number' ? v : Number(v);
  if (!Number.isFinite(n)) return def;
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

function str(v: unknown, def = ''): string { return typeof v === 'string' ? v : def; }

function coerceToAiReportShape(input: unknown): AiReport {
  const source = asObject(input) ?? {};

  const evidence = (value: unknown): AiReport['patterns'][number]['evidence'] =>
    asRecordArray(value).map((item) => ({
      description: str(item.description, 'Observed evidence'),
      weight: num(item.weight, 0.5),
      sources: asEnumArray(item.sources, SOURCE_TYPE_VALUES),
      refs: getStringArray(item.refs),
    }));

  const patterns = asRecordArray(source.patterns).map((item) => ({
    name: str(item.name, 'Pattern'),
    description: str(item.description) || undefined,
    strength: typeof item.strength === 'number' ? Math.max(0, Math.min(1, item.strength)) : undefined,
    impact: asEnumValue(item.impact, SEVERITY_VALUES),
    evidence: evidence(item.evidence),
  }));

  const correlations = asRecordArray(source.correlations).map((item) => {
    const variables = Array.isArray(item.variables) && item.variables.length >= 2
      ? [String(item.variables[0]), String(item.variables[1])] as [string, string]
      : ['factorA', 'factorB'] as [string, string];
    return {
      variables,
      coefficient: typeof item.coefficient === 'number' ? Math.max(-1, Math.min(1, item.coefficient)) : 0,
      direction: asEnumValue(item.direction, ['positive', 'negative'] as const),
      pValue: typeof item.pValue === 'number' ? Math.max(0, Math.min(1, item.pValue)) : undefined,
      confounders: getStringArray(item.confounders),
      evidence: evidence(item.evidence),
    };
  });

  const anomalies = asRecordArray(source.anomalies).map((item) => {
    const range = asObject(item.range);
    return {
      description: str(item.description, 'Anomaly'),
      severity: asEnumValue(item.severity, SEVERITY_VALUES) ?? 'medium',
      at: str(item.at) || undefined,
      range: range
        ? {
            start: str(range.start),
            end: str(range.end),
            timezone: str(range.timezone) || undefined,
          }
        : undefined,
      evidence: evidence(item.evidence),
    };
  });

  const predictiveInsights = asRecordArray(source.predictiveInsights).map((item) => {
    const confidenceSource = asObject(item.confidence);
    return {
      outcome: str(item.outcome, 'Outcome'),
      probability: num(item.probability, 0.5),
      horizon: asEnumValue(item.horizon, TIME_HORIZON_VALUES),
      drivers: getStringArray(item.drivers),
      confidence: confidenceSource
        ? {
            overall: num(confidenceSource.overall, 0.5),
            calibration: str(confidenceSource.calibration) || undefined,
            caveats: getStringArray(confidenceSource.caveats),
          }
        : undefined,
    };
  });

  const suggestedInterventions = asRecordArray(source.suggestedInterventions).map((item) => {
    const confidenceSource = asObject(item.confidence);
    return {
      title: str(item.title, 'Intervention'),
      description: str(item.description, 'Suggested action'),
      actions: getStringArray(item.actions),
      expectedImpact: asEnumValue(item.expectedImpact, SEVERITY_VALUES),
      timeHorizon: asEnumValue(item.timeHorizon, TIME_HORIZON_VALUES),
      metrics: getStringArray(item.metrics),
      confidence: confidenceSource
        ? {
            overall: num(confidenceSource.overall, 0.6),
            calibration: str(confidenceSource.calibration) || undefined,
            caveats: getStringArray(confidenceSource.caveats),
          }
        : undefined,
      sources: getStringArray(item.sources),
      udlCheckpoints: getStringArray(item.udlCheckpoints),
      hlps: getStringArray(item.hlps),
      tier: asEnumValue(item.tier, ['Tier1', 'Tier2', 'Tier3'] as const),
      scope: asEnumValue(item.scope, ['classroom', 'school'] as const),
    };
  });

  const dataLineage = asRecordArray(source.dataLineage).map((item) => {
    const timeRange = asObject(item.timeRange);
    return {
      source: str(item.source, 'local-storage'),
      type: asEnumValue(item.type, SOURCE_TYPE_VALUES),
      timeRange: timeRange
        ? {
            start: str(timeRange.start),
            end: str(timeRange.end),
            timezone: str(timeRange.timezone) || undefined,
          }
        : undefined,
      fields: getStringArray(item.fields),
      notes: str(item.notes) || undefined,
    };
  });

  const summary = str(source.summary) || undefined;
  const keyFindings = getStringArray(source.keyFindings);
  const confidenceSource = asObject(source.confidence);
  const confidence = confidenceSource
    ? {
        overall: num(confidenceSource.overall, 0.7),
        calibration: str(confidenceSource.calibration) || undefined,
        caveats: getStringArray(confidenceSource.caveats),
      }
    : undefined;

  const hypothesizedCauses = asRecordArray(source.hypothesizedCauses).map((item) => ({
    cause: str(item.cause, 'Hypothesis'),
    likelihood: num(item.likelihood, 0.5),
    rationale: str(item.rationale) || undefined,
    supportingEvidence: evidence(item.supportingEvidence),
  }));

  const report: AiReport = {
    summary,
    keyFindings,
    patterns,
    correlations,
    hypothesizedCauses,
    suggestedInterventions,
    anomalies,
    predictiveInsights,
    dataLineage,
    confidence,
    insights: getStringArray(source.insights),
  };

  return report;
}
