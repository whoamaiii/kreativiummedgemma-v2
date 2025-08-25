// Prompt registry for BigstianAI (Gemma 3)
// Centralized system prompts, templates, and tone packs.

export type TonePack = 'professional_iep' | 'parent_friendly' | 'action_coaching' | 'research_summary';

export const SYSTEM_PROMPT =
  'You are a Special Education assistant grounded in evidence-based practice and FERPA-respecting language. Prioritize clarity, professional tone, and implementable suggestions. Flag uncertainty. Use concise, structured sections. Never include PII. ALWAYS respond in Norwegian (norsk bokmål) - all explanations, recommendations, and text must be written in Norwegian.';

export const TONE_TAGLINES: Record<TonePack, string> = {
  professional_iep:
    'Skriv profesjonelt og objektivt for IEP-dokumentasjon. Bruk fagtermer og struktur.',
  parent_friendly:
    'Skriv varmt og oppmuntrende med enkelt språk. Fokuser på styrker og praktiske hjemmeråd.',
  action_coaching:
    'Skriv konkrete, trinnvise anbefalinger for direkte coaching. Prioriter sikre, effektive tiltak.',
  research_summary:
    'Skriv kortfattet forskningssammendrag for interne pedagoger. Noter antakelser og databegrensninger.',
};

export interface NarrativeTemplateInput {
  studentProfile: {
    grade?: string;
  };
  timeframe: string; // e.g., "2025-01-01 to 2025-02-01" or "last 30 days"
  highlights: Array<{ title: string; summary: string; metricRefs?: string[] }>;
  statsSummary: string; // correlations, z-scores, trend slopes summary
  goals: Array<{ title: string; status: string; progress?: number; notes?: string }>;
}

export function buildNarrativePrompt(
  input: NarrativeTemplateInput,
  tone: TonePack
): string {
  const toneInstruction = TONE_TAGLINES[tone];
  const highlights = input.highlights
    .map((h, i) => `- ${i + 1}. ${h.title}: ${h.summary}${
      h.metricRefs?.length ? ` (metrics: ${h.metricRefs.join(', ')})` : ''
    }`)
    .join('\n');
  const goals = input.goals
    .map(
      (g, i) => `- ${i + 1}. ${g.title} — status: ${g.status}${
        g.progress != null ? ` (${g.progress}%)` : ''
      }${g.notes ? `; notes: ${g.notes}` : ''}`
    )
    .join('\n');

  // Get tone-specific section title and formatting
  const sectionConfig = getToneConfig(tone);

  // Simplified prompt for smaller models with tone-specific instructions
  return [
    `Du er spesialpedagog. ${toneInstruction}`,
    `Format: {"sections":[{"title":"${sectionConfig.sectionTitle}","paragraphs":["${sectionConfig.paragraphExample}"],"bullets":["${sectionConfig.bulletExample}"]}],"meta":{"confidence":0.8,"timeframe":"periode"}}`,
    '',
    `Data: ${input.timeframe}, klasse ${input.studentProfile.grade ?? 'ukjent'}, stats: ${input.statsSummary}`,
    highlights ? `Høydepunkter: ${highlights}` : '',
    goals ? `Mål: ${goals}` : '',
    '',
    `${sectionConfig.instruction}:`
  ].filter(Boolean).join('\n');
}

function getToneConfig(tone: TonePack) {
  switch (tone) {
    case 'professional_iep':
      return {
        sectionTitle: 'Faglig vurdering',
        paragraphExample: 'Objektiv analyse av elevens utvikling og behov',
        bulletExample: 'Dokumenterte observasjoner',
        instruction: 'Skriv profesjonell IEP-sammendrag som JSON'
      };
    case 'parent_friendly':
      return {
        sectionTitle: 'Hvordan barnet ditt har det',
        paragraphExample: 'Oppmuntrende beskrivelse av barnets styrker og fremgang',
        bulletExample: 'Positive observasjoner og hjemmeråd',
        instruction: 'Skriv foreldrevennlig sammendrag som JSON'
      };
    case 'action_coaching':
      return {
        sectionTitle: 'Konkrete tiltak',
        paragraphExample: 'Spesifikke handlingsanbefalinger for umiddelbar bruk',
        bulletExample: 'Trinn-for-trinn instruksjoner',
        instruction: 'Skriv handlingsrettet coaching-sammendrag som JSON'
      };
    case 'research_summary':
      return {
        sectionTitle: 'Forskningssammendrag',
        paragraphExample: 'Evidensbasert analyse med referanser til data',
        bulletExample: 'Statistiske funn og begrensninger',
        instruction: 'Skriv forskningsbasert sammendrag som JSON'
      };
    default:
      return {
        sectionTitle: 'Sammendrag',
        paragraphExample: 'Generell beskrivelse',
        bulletExample: 'Viktige punkter',
        instruction: 'Skriv sammendrag som JSON'
      };
  }
}

export interface ExplainabilityTemplateInput {
  pattern: string;
  confidence: number; // 0-1
  timeframe: string;
  contributingFactors: string[]; // e.g., ["noiseLevel", "lighting"]
}

export function buildExplainabilityPrompt(input: ExplainabilityTemplateInput): string {
  return [
    `SYSTEM: ${SYSTEM_PROMPT}`,
    'TASK: Explain this detected pattern in clear, teacher-friendly language. Return STRICT JSON: { "text": string, "confidenceLevel": "low"|"medium"|"high", "factors": string[], "preliminaryThoughts"?: string, "uncertaintyNote"?: string, "watchFor"?: string[] }',
    'CONFIDENCE ADAPTATION:',
    '- If confidence is HIGH (>0.7): provide clear, evidence-based explanation and practical implications.',
    '- If MEDIUM (0.35–0.7): offer cautious interpretation and explicitly note limitations (words like "appears", "suggests").',
    '- If LOW (<0.35): give preliminary observations and one or two plausible hypotheses while emphasizing uncertainty and the need for more data.',
    'ALWAYS INCLUDE:',
    '- A substantial explanation in plain language (text). Minimum length: 150–300+ characters. Include concrete examples (e.g., times of day, transitions, specific settings). Mention plausible drivers (environment, schedule changes, peer dynamics) anchored to the factors.',
    '- Key contributing factors (factors).',
    '- If confidence is not HIGH: add preliminaryThoughts (best guess) and uncertaintyNote (why to be cautious).',
    '- Optionally, add watchFor: concrete signals to monitor to confirm or refute the hypothesis.',
    'RULES: Only return JSON. No markdown. Keep it concise and professional.',
    '',
    `Pattern: ${input.pattern}`,
    `Confidence: ${input.confidence}`,
    `Timeframe: ${input.timeframe}`,
    `Contributing factors: ${input.contributingFactors.join(', ')}`,
  ].join('\n');
}

export interface GoalNextStepInput {
  goal: {
    title: string;
    description: string;
    category?: string;
    measurableObjective?: string;
    currentProgress?: number; // 0-100
    baselineValue?: number;
    targetValue?: number;
    targetDateISO?: string;
    milestonesCount?: number;
  };
  timeframe: string; // e.g., "last 30 days"
}

export function buildGoalNextStepPrompt(input: GoalNextStepInput): string {
  const title = input.goal.title || 'Untitled Goal';
  const desc = input.goal.description || '';
  const mo = input.goal.measurableObjective || '';
  const prog = typeof input.goal.currentProgress === 'number' ? `${Math.round(input.goal.currentProgress)}%` : 'n/a';
  const baseline = input.goal.baselineValue ?? 'n/a';
  const target = input.goal.targetValue ?? 'n/a';
  const due = input.goal.targetDateISO ?? 'n/a';
  const milestones = input.goal.milestonesCount ?? 0;

  return [
    `SYSTEM: ${SYSTEM_PROMPT}`,
    'TASK: Draft the next measurable step for this IEP goal. Return STRICT JSON: { "objective": string, "timeframe": string, "measurement": string, "steps": string[] }',
    'RULES: Only return JSON. Use objective, neutral language. Be specific and measurable. Limit to 2-4 concrete steps.',
    '',
    `Timeframe: ${input.timeframe}`,
    `Goal Title: ${title}`,
    `Category: ${input.goal.category ?? 'n/a'}`,
    `Description: ${desc}`,
    `Current Measurable Objective: ${mo}`,
    `Progress: ${prog}; Baseline: ${baseline}; Target: ${target}; Target Date: ${due}; Milestones: ${milestones}`,
  ].join('\n');
}


