import { buildNarrativePrompt, NarrativeTemplateInput, TonePack, buildExplainabilityPrompt, buildGoalNextStepPrompt, GoalNextStepInput } from './prompts';
import { NarrativeJson, NarrativeJsonSchema, ExplainabilityJson, ExplainabilityJsonSchema, GoalNextStep, GoalNextStepSchema, CoachingJson, CoachingJsonSchema } from './schemas';
import { generateWithGemma, GemmaGenerateOptions } from '@/lib/ai/gemmaClient';
import { enforceRateLimit, completeRateLimit } from './rateLimit';

export interface GenerateNarrativeParams {
  input: NarrativeTemplateInput;
  tone?: TonePack;
  maxTokens?: number;
  temperature?: number;
  baseUrl?: string;
}

export async function generateNarrative({
  input,
  tone = 'professional_iep',
  maxTokens = 384,
  temperature = 0.3,
  baseUrl,
}: GenerateNarrativeParams): Promise<NarrativeJson> {
  const prompt = buildNarrativePrompt(input, tone);
  
  // Log the actual prompt in development to debug formatting issues
  if (import.meta && (import.meta as any).env?.DEV) {
    console.debug('[AI][narrative] Full prompt being sent:', prompt);
  }
  
  const key = 'ai:narrative';
  await enforceRateLimit(key, { minIntervalMs: 1000, maxConcurrent: 1 });
  try {
    const text = await generateWithGemma(prompt, { maxTokens, temperature }, baseUrl);
    // Expect strict JSON; if the model returns formatting, try to trim fences.
    const primary = extractJsonTagged(text) || trimToJson(text);
    try {
      const parsedPrimary = JSON.parse(primary);
      return coerceAndValidateNarrative(parsedPrimary);
    } catch (_e1) {
      if (import.meta && (import.meta as any).env?.DEV) {
        // Log raw text once in development to help diagnose format issues
        try { console.debug('[AI][narrative] Raw model output (first 500 chars):', String(text).slice(0, 500)); } catch {}
      }
      // Try a light sanitation pass: strip common code fences and retry
      const defenced = stripCodeFences(primary);
      const inner = trimToJson(defenced);
      try {
        const parsedSecondary = JSON.parse(inner);
        return coerceAndValidateNarrative(parsedSecondary);
      } catch (_e2) {
        // Attempt structured repair of common JSON issues (quotes, trailing commas, comments)
        const repaired = attemptJsonRepair(inner);
        try {
          const parsedRepaired = JSON.parse(repaired);
          return coerceAndValidateNarrative(parsedRepaired);
        } catch (_e3) {
          // Final attempt: ask the model to convert its own output to strict JSON matching the schema
          try {
            const fixer = buildFixToJsonPrompt(text);
            const fixed = await generateWithGemma(fixer, { maxTokens: Math.max(512, maxTokens), temperature: 0.1 });
            const fixedInner = extractJsonTagged(fixed) || trimToJson(fixed);
            const parsedFixed = JSON.parse(fixedInner);
            return coerceAndValidateNarrative(parsedFixed);
          } catch (_e4) {
            // Fail-safe: synthesize a safe minimal narrative from input to avoid UI errors
            return buildFallbackNarrativeFromInput(input);
          }
        }
      }
    }
  } finally {
    completeRateLimit(key);
  }
}

export async function generateExplainability(payload: {
  pattern: string;
  confidence: number;
  timeframe: string;
  contributingFactors: string[];
  baseUrl?: string;
  options?: GemmaGenerateOptions;
}): Promise<ExplainabilityJson> {
  const prompt = buildExplainabilityPrompt(payload);
  const key = 'ai:explainability';
  await enforceRateLimit(key, { minIntervalMs: 800, maxConcurrent: 1 });
  try {
    const text = await generateWithGemma(prompt, payload.options, payload.baseUrl);
    const trimmed = trimToJson(text);
    const parsed = JSON.parse(trimmed);
    return ExplainabilityJsonSchema.parse(parsed);
  } catch (_err) {
    // Graceful fallback to avoid surfacing errors in UI
    const level: 'low' | 'medium' | 'high' = payload.confidence < 0.35 ? 'low' : payload.confidence < 0.7 ? 'medium' : 'high';
    // Generate pattern-specific fallback with student data context
    const factorStr = payload.contributingFactors?.join(', ') || 'kontekstuelle faktorer';
    const patternType = payload.pattern.includes('emotion') ? 'emosjonelt' : 
                      payload.pattern.includes('sensory') ? 'sensorisk' : 'atferdsmessig';
    const isHighIntensity = payload.pattern.includes('high-intensity');
    const isNegative = payload.pattern.includes('negative');
    const levelNb = level === 'high' ? 'høy' : level === 'medium' ? 'moderat' : 'lav';
    
    const safeText = `Mønsteret "${payload.pattern}" er observert i ${payload.timeframe} med ${levelNb} sikkerhet. Dette ${patternType} mønsteret fremkommer i dataene med bidrag fra: ${factorStr}. ${
      isHighIntensity && isNegative 
        ? 'Høyintense negative mønstre henger ofte sammen med overganger, miljømessig stress eller udekkede sensoriske behov. Vanlige utløsere kan være endringer i timeplan, trange/folkerike rom, uventede lyder eller oppgaver som overstiger nåværende kapasitet.'
        : patternType === 'sensorisk'
        ? 'Sensoriske mønstre gjenspeiler ofte reguleringsbehov og respons på omgivelsene. Vurder timing (før/etter aktivitet), miljø (belysning, støy, teksturer) og om mønsteret ser ut til å ha en regulerende funksjon.'
        : 'Atferdsmessige mønstre oppstår ofte i møtet mellom indre tilstand og ytre krav. Se etter koblinger til bestemte tidspunkt, aktiviteter, samspill med jevnaldrende eller miljøforhold.'
    } Overvåk hyppighet på tvers av ulike kontekster for å bekrefte denne foreløpige observasjonen.`;
    const uncertainty = level === 'high'
      ? undefined
      : level === 'medium'
      ? 'Forsiktighet: Bevisene er moderate; behandle dette som en veiledende tolkning snarere enn en konklusjon.'
      : 'Forsiktighet: Begrenset data; behandle dette som en foreløpig observasjon og søk mer bevis.';
    const prelim = level === 'high'
      ? undefined
      : `Foreløpige tanker: Dette kan være relatert til samspillet mellom ${payload.contributingFactors?.join(', ') || 'kontekstuelle faktorer'}.`;
    const watchFor = level === 'high' ? undefined : [
      'Om mønsteret gjentar seg på tvers av forskjellige dager/kontekster',
      'Endringer etter mindre miljøjusteringer',
      'Frekvens under spesifikke rutiner eller overganger'
    ];
    return ExplainabilityJsonSchema.parse({
      text: safeText,
      confidenceLevel: level,
      factors: payload.contributingFactors || [],
      preliminaryThoughts: prelim,
      uncertaintyNote: uncertainty,
      watchFor
    });
  } finally {
    completeRateLimit(key);
  }
}

export async function generateGoalNextStep(payload: GoalNextStepInput, options?: GemmaGenerateOptions, baseUrl?: string): Promise<GoalNextStep> {
  const prompt = buildGoalNextStepPrompt(payload);
  const key = 'ai:goal-next-step';
  await enforceRateLimit(key, { minIntervalMs: 1200, maxConcurrent: 1 });
  try {
    const text = await generateWithGemma(prompt, options ?? { maxTokens: 200, temperature: 0.3 }, baseUrl);
    const trimmed = trimToJson(text);
    const parsed = JSON.parse(trimmed);
    return GoalNextStepSchema.parse(parsed);
  } finally {
    completeRateLimit(key);
  }
}

export async function generateCoachingPlan(payload: {
  stateSummary: string;
  environment?: string;
  recentWindow?: string;
}, options?: GemmaGenerateOptions, baseUrl?: string): Promise<CoachingJson> {
  const prompt = [
    'SYSTEM: You are a coaching assistant for classroom interventions. Use safe, concrete steps.',
    'TASK: Propose a tiered intervention plan. Return STRICT JSON: { "suggestions": [{"tier":"universal|targeted|intensive","title":string,"steps":string[],"safetyNotes"?:string[]}], "rationale": string }',
    'RULES: Only JSON. Keep steps low-risk and implementable in class. 3-6 steps per suggestion.',
    `State: ${payload.stateSummary}`,
    `Environment: ${payload.environment ?? 'n/a'}`,
    `Recent: ${payload.recentWindow ?? 'last 10 minutes'}`,
  ].join('\n');
  const key = 'ai:coaching-plan';
  await enforceRateLimit(key, { minIntervalMs: 1000, maxConcurrent: 1 });
  try {
    const text = await generateWithGemma(prompt, options ?? { maxTokens: 240, temperature: 0.3 }, baseUrl);
    const trimmed = trimToJson(text);
    const parsed = JSON.parse(trimmed);
    return CoachingJsonSchema.parse(parsed);
  } finally {
    completeRateLimit(key);
  }
}

function trimToJson(s: string): string {
  const start = s.indexOf('{');
  const end = s.lastIndexOf('}');
  if (start >= 0 && end > start) return s.slice(start, end + 1);
  return s.trim();
}

function stripCodeFences(s: string): string {
  // Remove leading/trailing triple backtick fences with optional language tag
  // Handle both ```json and ``` variants, and nested fences
  return s
    .replace(/^```[a-zA-Z]*\s*\n?/, '')
    .replace(/```\s*$/, '')
    .replace(/^```\s*\n?/, '') // Additional cleanup for nested fences
    .trim();
}

function attemptJsonRepair(s: string): string {
  let out = s;
  // Normalize quotes
  out = out.replace(/[\u201C\u201D]/g, '"'); // fancy double quotes
  out = out.replace(/[\u2018\u2019]/g, "'"); // fancy single quotes
  // Remove JS-style comments
  out = out.replace(/\/\*[\s\S]*?\*\//g, '');
  out = out.replace(/(^|\n)\s*\/\/.*(?=\n|$)/g, '$1');
  // Remove trailing commas before closing braces/brackets
  out = out.replace(/,\s*([}\]])/g, '$1');
  // Single-quoted keys -> double-quoted
  out = out.replace(/'([^'\\]*?)'\s*:/g, '"$1":');
  // Single-quoted string values -> double-quoted
  out = out.replace(/:\s*'([^'\\]*?)'/g, ': "$1"');
  // Unquoted keys (simple) -> quoted
  out = out.replace(/([,{\s])([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
  return out;
}

function extractJsonTagged(s: string): string | null {
  const startTag = '<JSON>';
  const endTag = '</JSON>';
  const start = s.indexOf(startTag);
  const end = s.indexOf(endTag);
  if (start >= 0 && end > start) {
    const inner = s.slice(start + startTag.length, end).trim();
    return trimToJson(inner);
  }
  return null;
}

function buildFixToJsonPrompt(modelOutput: string): string {
  return [
    'SYSTEM: You are a strict JSON formatter. You will receive a previous response that should have been JSON.',
    'TASK: Convert the provided content into STRICT JSON that conforms exactly to this schema:',
    '{ "sections": [ { "title": string, "paragraphs": string[], "bullets"?: string[] } ], "meta": { "confidence": number, "tokens"?: number, "timeframe": string } }',
    'RULES:',
    '- Output ONLY JSON between <JSON> and </JSON> tags.',
    '- All text strings MUST be in Norwegian (norsk bokmål).',
    '- Do NOT include any commentary, markdown, or code fences.',
    '- If any fields are missing, infer minimal safe values.',
    '',
    'PREVIOUS OUTPUT:',
    modelOutput,
    '',
    'RESPONSE:',
    '<JSON>',
    '{ "sections": [...], "meta": { ... } }',
    '</JSON>'
  ].join('\n');
}

function coerceAndValidateNarrative(obj: any): NarrativeJson {
  // Defensive normalization to reduce unnecessary fallbacks
  const sectionsRaw = Array.isArray(obj?.sections) ? obj.sections : [];
  const sections = sectionsRaw.map((s: any, i: number) => {
    const title = typeof s?.title === 'string' && s.title.trim().length > 0 ? s.title : (i === 0 ? 'Oversikt' : 'Seksjon');
    const paras = Array.isArray(s?.paragraphs) ? s.paragraphs.filter((p: any) => typeof p === 'string' && p.trim().length > 0) : [];
    const bullets = Array.isArray(s?.bullets) ? s.bullets.filter((b: any) => typeof b === 'string' && b.trim().length > 0) : undefined;
    return { title, paragraphs: paras, ...(bullets && bullets.length > 0 ? { bullets } : {}) };
  }).filter((s: any) => s.paragraphs.length > 0 || (s.bullets && s.bullets.length > 0));

  if (sections.length === 0) {
    sections.push({ title: 'Oversikt', paragraphs: ['Kort sammendrag ikke tilgjengelig.'] });
  }

  const meta = obj?.meta ?? {};
  const confidenceRaw = typeof meta?.confidence === 'number' ? meta.confidence : 0.5;
  const confidence = Math.max(0, Math.min(1, confidenceRaw));
  const timeframe = typeof meta?.timeframe === 'string' && meta.timeframe.trim().length > 0 ? meta.timeframe : 'n/a';
  const tokens = typeof meta?.tokens === 'number' && Number.isFinite(meta.tokens) ? meta.tokens : undefined;

  const normalized = { sections, meta: { confidence, timeframe, ...(tokens ? { tokens } : {}) } };
  return NarrativeJsonSchema.parse(normalized);
}

function buildFallbackNarrativeFromInput(input: NarrativeTemplateInput): NarrativeJson {
  const safeText = (t?: string) => (t && String(t)) || '';
  const highlights = (input.highlights || []).slice(0, 4);
  const goals = (input.goals || []).slice(0, 6);

  return NarrativeJsonSchema.parse({
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          `Timeframe: ${safeText(input.timeframe)}`,
          `Stats: ${safeText(input.statsSummary)}`,
        ],
      },
      highlights.length > 0
        ? {
            title: 'Key Highlights',
            paragraphs: highlights.map(h => `${safeText(h.title)}: ${safeText(h.summary)}`),
          }
        : undefined,
      goals.length > 0
        ? {
            title: 'Goals Status',
            paragraphs: goals.map(g => `${safeText(g.title)} — status: ${safeText(g.status)}${g.progress != null ? ` (${g.progress}%)` : ''}`),
          }
        : undefined,
      {
        title: 'Limitations',
        paragraphs: [
          'This narrative is a safe fallback due to formatting issues in the AI response. Interpret with caution and consider regenerating.',
        ],
      },
    ].filter(Boolean) as Array<{ title: string; paragraphs: string[] }>,
    meta: {
      confidence: 0.4,
      timeframe: safeText(input.timeframe),
    },
  });
}


