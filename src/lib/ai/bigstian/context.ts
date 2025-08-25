import { Student, TrackingEntry, EmotionEntry, SensoryEntry, Goal } from '@/types/student';
import { bucketizeDateISO, sanitizeStudent, stripPIIFromNotes } from './sanitize';

export interface AnalyticsSummary {
  timeframe: string;
  statsSummary: string;
  highlights: Array<{ title: string; summary: string; metricRefs?: string[] }>;
  goals: Array<{ title: string; status: string; progress?: number; notes?: string }>;
}

export function buildReportAnalyticsSummary(
  student: Student,
  entries: TrackingEntry[],
  emotions: EmotionEntry[],
  sensory: SensoryEntry[],
  goals: Goal[],
  dateRange?: { start: Date; end: Date }
): { studentSanitized: { id: string; grade?: string }; summary: AnalyticsSummary } {
  const studentSanitized = sanitizeStudent({ id: student.id, name: student.name, grade: student.grade });

  // Timeframe string
  const timeframe = dateRange
    ? `${bucketizeDateISO(dateRange.start)} to ${bucketizeDateISO(dateRange.end)}`
    : 'all time';

  // Basic stats summary (compact)
  const totalSessions = entries.length;
  const avgEmotion = emotions.length > 0
    ? (emotions.reduce((s, e) => s + (e.intensity || 0), 0) / emotions.length).toFixed(2)
    : '0.00';
  const seekingRatio = sensory.length > 0
    ? (sensory.filter(s => (s.response || '').toLowerCase().includes('seeking')).length / sensory.length).toFixed(2)
    : '0.00';
  const statsSummary = `sessions=${totalSessions}; avgEmotion=${avgEmotion}; seekingRatio=${seekingRatio}`;

  // Highlights from simple heuristics (later can use enhancedPatternAnalysis summaries)
  const highlights: AnalyticsSummary['highlights'] = [];
  if (Number(avgEmotion) >= 7) {
    highlights.push({
      title: 'High emotional intensity observed',
      summary: `Average intensity ${avgEmotion} over timeframe`,
      metricRefs: ['avgEmotion']
    });
  }
  if (Number(seekingRatio) >= 0.6) {
    highlights.push({
      title: 'Frequent sensory seeking',
      summary: `Seeking ratio ${seekingRatio}`,
      metricRefs: ['seekingRatio']
    });
  }

  // Goals snapshot
  const goalSummaries = goals.map(g => ({
    title: g.title,
    status: g.status,
    progress: typeof g.progress === 'number' ? g.progress : undefined,
    notes: stripPIIFromNotes(g.notes)
  }));

  return {
    studentSanitized,
    summary: {
      timeframe,
      statsSummary,
      highlights,
      goals: goalSummaries,
    }
  };
}


