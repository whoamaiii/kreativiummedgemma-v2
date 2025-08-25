import { z } from 'zod';

// Sections returned by the AI narrative generator
export const NarrativeSectionSchema = z.object({
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).default([]),
  bullets: z.array(z.string().min(1)).optional(),
});

export const NarrativeMetaSchema = z.object({
  confidence: z.number().min(0).max(1).default(0.5),
  tokens: z.number().int().positive().optional(),
  timeframe: z.string().min(1),
});

export const NarrativeJsonSchema = z.object({
  sections: z.array(NarrativeSectionSchema).min(1),
  meta: NarrativeMetaSchema,
});

export type NarrativeJson = z.infer<typeof NarrativeJsonSchema>;

export const ExplainabilityJsonSchema = z.object({
  text: z.string().min(1),
  confidenceLevel: z.enum(['low', 'medium', 'high']),
  factors: z.array(z.string()).default([]),
  preliminaryThoughts: z.string().optional(),
  uncertaintyNote: z.string().optional(),
  watchFor: z.array(z.string()).optional(),
});

export type ExplainabilityJson = z.infer<typeof ExplainabilityJsonSchema>;

export const CoachingSuggestionSchema = z.object({
  tier: z.enum(['universal', 'targeted', 'intensive']).default('universal'),
  title: z.string().min(1),
  steps: z.array(z.string().min(1)).min(1),
  safetyNotes: z.array(z.string().min(1)).optional(),
});

export const CoachingJsonSchema = z.object({
  suggestions: z.array(CoachingSuggestionSchema).min(1),
  rationale: z.string().min(1),
});

export type CoachingJson = z.infer<typeof CoachingJsonSchema>;

export const GoalNextStepSchema = z.object({
  objective: z.string().min(1),
  timeframe: z.string().min(1),
  measurement: z.string().min(1),
  steps: z.array(z.string().min(1)).min(1),
});

export type GoalNextStep = z.infer<typeof GoalNextStepSchema>;


