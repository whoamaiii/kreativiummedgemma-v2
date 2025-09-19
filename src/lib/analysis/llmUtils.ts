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
    const repaired: any = coerceToAiReportShape(input);
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

function num(v: unknown, def = 0): number {
  const n = typeof v === 'number' ? v : Number(v);
  if (!Number.isFinite(n)) return def;
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

function str(v: unknown, def = ''): string { return typeof v === 'string' ? v : def; }

function coerceToAiReportShape(input: unknown): AiReport {
  const o = (typeof input === 'object' && input) ? (input as Record<string, unknown>) : {};
  const asStrArr = (v: unknown) => arr<string>(v).map(x => String(x)).filter(s => s.trim().length > 0);
  const evidence = (v: unknown) => arr<any>(v).map(e => ({
    description: str(e?.description, 'Observed evidence'),
    weight: num(e?.weight, 0.5),
    sources: asStrArr(e?.sources) as any,
    refs: asStrArr(e?.refs),
  }));
  const patterns = arr<any>(o.patterns).map(p => ({
    name: str(p?.name, 'Pattern'),
    description: str(p?.description),
    strength: typeof p?.strength === 'number' ? Math.max(0, Math.min(1, p.strength)) : undefined,
    impact: ['low','medium','high'].includes(str(p?.impact)) ? str(p?.impact) as any : undefined,
    evidence: evidence(p?.evidence),
  }));
  const correlations = arr<any>(o.correlations).map(c => ({
    variables: Array.isArray(c?.variables) && c.variables.length >= 2 ? [String(c.variables[0]), String(c.variables[1])] as [string,string] : ['factorA','factorB'] as [string,string],
    coefficient: typeof c?.coefficient === 'number' ? Math.max(-1, Math.min(1, c.coefficient)) : 0,
    direction: ['positive','negative'].includes(str(c?.direction)) ? str(c?.direction) as any : undefined,
    pValue: typeof c?.pValue === 'number' ? Math.max(0, Math.min(1, c.pValue)) : undefined,
    confounders: asStrArr(c?.confounders),
    evidence: evidence(c?.evidence),
  }));
  const anomalies = arr<any>(o.anomalies).map(a => ({
    description: str(a?.description, 'Anomaly'),
    severity: ['low','medium','high'].includes(str(a?.severity)) ? str(a?.severity) as any : 'medium',
    at: str(a?.at),
    range: (a?.range && typeof a.range === 'object') ? {
      start: str((a.range as any)?.start),
      end: str((a.range as any)?.end),
      timezone: str((a.range as any)?.timezone) || undefined,
    } : undefined,
    evidence: evidence(a?.evidence),
  }));
  const predictive = arr<any>(o.predictiveInsights).map(p => ({
    outcome: str(p?.outcome, 'Outcome'),
    probability: num(p?.probability, 0.5),
    horizon: ['short','medium','long'].includes(str(p?.horizon)) ? str(p?.horizon) as any : undefined,
    drivers: asStrArr(p?.drivers),
    confidence: (p?.confidence && typeof p.confidence === 'object') ? {
      overall: num((p.confidence as any)?.overall, 0.5),
      calibration: str((p.confidence as any)?.calibration) || undefined,
      caveats: asStrArr((p.confidence as any)?.caveats),
    } : undefined,
  }));
  const sugg = arr<any>(o.suggestedInterventions).map(i => ({
    title: str(i?.title, 'Intervention'),
    description: str(i?.description, 'Suggested action'),
    actions: asStrArr(i?.actions),
    expectedImpact: ['low','medium','high'].includes(str(i?.expectedImpact)) ? str(i?.expectedImpact) as any : undefined,
    timeHorizon: ['short','medium','long'].includes(str(i?.timeHorizon)) ? str(i?.timeHorizon) as any : undefined,
    metrics: asStrArr(i?.metrics),
    confidence: (i?.confidence && typeof i.confidence === 'object') ? {
      overall: num((i.confidence as any)?.overall, 0.6),
      calibration: str((i.confidence as any)?.calibration) || undefined,
      caveats: asStrArr((i.confidence as any)?.caveats),
    } : undefined,
    // Preserve evidence metadata fields
    sources: asStrArr(i?.sources),
    udlCheckpoints: asStrArr(i?.udlCheckpoints),
    hlps: asStrArr(i?.hlps),
    tier: ['Tier1','Tier2','Tier3'].includes(str(i?.tier)) ? str(i?.tier) as any : undefined,
    scope: ['classroom','school'].includes(str(i?.scope)) ? str(i?.scope) as any : undefined,
  }));

  const lineage = arr<any>(o.dataLineage).map(li => ({
    source: str(li?.source, 'local-storage'),
    type: ['emotion','behavior','sensor','environment','goal','tracking','system','external','other'].includes(str(li?.type)) ? str(li?.type) as any : undefined,
    timeRange: (li?.timeRange && typeof li.timeRange === 'object') ? {
      start: str((li.timeRange as any)?.start),
      end: str((li.timeRange as any)?.end),
      timezone: str((li.timeRange as any)?.timezone) || undefined,
    } : undefined,
    fields: asStrArr(li?.fields),
    notes: str(li?.notes) || undefined,
  }));

  const summary = str(o.summary) || undefined;
  const keyFindings = asStrArr(o.keyFindings);
  const confidence = (o?.confidence && typeof o.confidence === 'object') ? {
    overall: num((o.confidence as any)?.overall, 0.7),
    calibration: str((o.confidence as any)?.calibration) || undefined,
    caveats: asStrArr((o.confidence as any)?.caveats),
  } : undefined;

  const report = {
    summary,
    keyFindings,
    patterns,
    correlations,
    hypothesizedCauses: arr<any>(o.hypothesizedCauses).map(h => ({
      cause: str(h?.cause, 'Hypothesis'),
      likelihood: num(h?.likelihood, 0.5),
      rationale: str(h?.rationale) || undefined,
      supportingEvidence: evidence(h?.supportingEvidence),
    })),
    suggestedInterventions: sugg,
    anomalies,
    predictiveInsights: predictive,
    dataLineage: lineage,
    confidence,
    insights: asStrArr((o as any)?.insights),
  } as AiReport;

  return report;
}

