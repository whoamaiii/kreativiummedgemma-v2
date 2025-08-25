import React, { memo, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
import { Brain, Eye, BarChart3, Clock, Info, TrendingUp } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useAnalyticsWorker } from '@/hooks/useAnalyticsWorker';
import { TrackingEntry, EmotionEntry, SensoryEntry } from '@/types/student';
import { PatternResult } from '@/lib/patternAnalysis';
import { generateInsightsStructured } from '@/lib/insights';
import { stableKeyFromPattern } from '@/lib/key';
import { useTranslation } from '@/hooks/useTranslation';
import { hashOfString } from '@/lib/key';
import { enhancedPatternAnalysis } from '@/lib/enhancedPatternAnalysis';
import { ConfidenceIndicator } from '@/components/ConfidenceIndicator';
import { ENABLE_BIGSTIAN_AI } from '@/lib/env';
import { parseDaysFromTimeframe } from '@/lib/ai/bigstian/utils';

export interface PatternsPanelProps {
  filteredData: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
}

const getPatternIcon = (type: string): React.ReactElement => {
  switch (type) {
    case 'emotion':
      return <Brain className="h-4 w-4" />;
    case 'sensory':
      return <Eye className="h-4 w-4" />;
    case 'environmental':
      return <BarChart3 className="h-4 w-4" />;
    default:
      return <TrendingUp className="h-4 w-4" />;
  }
};

// Replaced Badge confidence with reusable ConfidenceIndicator component

export const PatternsPanel = memo(function PatternsPanel({ filteredData }: PatternsPanelProps): React.ReactElement {
  const { results, isAnalyzing, error, runAnalysis } = useAnalyticsWorker({ precomputeOnIdle: false });
  const { tAnalytics } = useTranslation();
  const [aiBusy, setAiBusy] = useState<Record<string, boolean>>({});
  const [aiText, setAiText] = useState<Record<string, string>>({});
  const [aiErr, setAiErr] = useState<Record<string, string>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    runAnalysis(filteredData);
    return () => {
      // ensure worker side effects are cleaned by the hook on unmount
    };
  }, [filteredData, runAnalysis]);

  const patterns: PatternResult[] = results?.patterns || [];
  const requestAIExplain = async (pattern: PatternResult) => {
    const key = stableKeyFromPattern(pattern);
    setAiBusy(prev => ({ ...prev, [key]: true }));
    setAiErr(prev => ({ ...prev, [key]: '' }));
    try {
      const timeframe = String(pattern.timeframe || 'recent period');
      const contributing = [
        `type:${pattern.type}`,
        `dataPoints:${pattern.dataPoints}`,
        `frequency:${pattern.frequency}`,
      ];
      const resp = await enhancedPatternAnalysis.explainTopPattern(
        pattern.pattern,
        Math.max(0, Math.min(1, pattern.confidence || 0)),
        timeframe,
        contributing
      );
      if (resp) {
        setAiText(prev => ({ ...prev, [key]: resp.text }));
      }
    } catch (e) {
      setAiErr(prev => ({ ...prev, [key]: 'AI explanation failed' }));
    } finally {
      setAiBusy(prev => ({ ...prev, [key]: false }));
    }
  };

  const parseDays = (tf?: string): number => {
    if (!tf) return 0;
    const m = tf.match(/(\d+)\s*day/);
    return m ? Number(m[1]) : 0;
  };
  const structured = generateInsightsStructured(
    {
      patterns: results?.patterns || [],
      correlations: (results as any)?.correlations || [],
      predictiveInsights: (results as any)?.predictiveInsights || [],
    },
    filteredData.emotions,
    filteredData.entries
  );

  return (
    <>
      <Card>
          <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{String(tAnalytics('insights.patterns'))}</CardTitle>
          <Button variant="outline" onClick={() => runAnalysis(filteredData)} disabled={isAnalyzing}>
            {isAnalyzing ? String(tAnalytics('states.analyzing')) : String(tAnalytics('actions.refreshAnalysis'))}
          </Button>
        </CardHeader>
        <CardContent>
          {isAnalyzing && (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-4 motion-safe:animate-spin opacity-50" />
              <p>{String(tAnalytics('states.analyzing'))}</p>
            </div>
          )}
          {!isAnalyzing && error && (
            <div className="text-center py-8 text-destructive">
              <p>{error}</p>
            </div>
          )}
          {!isAnalyzing && !error && patterns.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>{String(tAnalytics('empty.noPatterns'))}</p>
              <p className="text-sm">{String(tAnalytics('insights.noPatterns'))}</p>
            </div>
          )}
          {!isAnalyzing && !error && patterns.length > 0 && (
            <div className="space-y-4">
{patterns.map((pattern: PatternResult) => (
                <Card key={stableKeyFromPattern(pattern)} className="border-l-4 border-l-primary">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {getPatternIcon(pattern.type)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-foreground">
                              {String((pattern as PatternResult & { pattern?: string; name?: string }).pattern ?? (pattern as PatternResult & { pattern?: string; name?: string }).name ?? 'Pattern')
                                .replace('-', ' ')
                                .replace(/\b\w/g, (l: string) => l.toUpperCase())}
                            </h4>
                            {ENABLE_BIGSTIAN_AI && (
                              <>
                                <button
                                  aria-label={String(tAnalytics('insights.explainPattern'))}
                                  className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-2.5 py-1 text-xs leading-none text-primary hover:bg-primary/10"
                                  onClick={() => {
                                    const key = stableKeyFromPattern(pattern);
                                    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
                                    if (!aiText[key]) {
                                      void requestAIExplain(pattern);
                                    }
                                  }}
                                >
                                  <Info className="h-3 w-3" />
                                  {aiBusy[stableKeyFromPattern(pattern)] ? String(tAnalytics('states.analyzing')) : String(tAnalytics('insights.explainPattern'))}
                                </button>
                              </>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {String((pattern as PatternResult & { description?: string }).description ?? '')}
                          </p>
                          {ENABLE_BIGSTIAN_AI && expanded[stableKeyFromPattern(pattern)] && (
                            <div className="mt-3 rounded-md border border-primary/20 bg-muted/30 p-3 text-sm">
                              {aiBusy[stableKeyFromPattern(pattern)] && (
                                <p className="text-muted-foreground">{String(tAnalytics('states.analyzing'))}</p>
                              )}
                              {!aiBusy[stableKeyFromPattern(pattern)] && aiErr[stableKeyFromPattern(pattern)] && (
                                <p className="text-destructive">{aiErr[stableKeyFromPattern(pattern)]}</p>
                              )}
                              {!aiBusy[stableKeyFromPattern(pattern)] && !aiErr[stableKeyFromPattern(pattern)] && (
                                <>
                                  <p className="text-foreground/90 whitespace-pre-wrap">{aiText[stableKeyFromPattern(pattern)] || String(tAnalytics('insights.patternExplain.default'))}</p>
                                  {/* Optional richer fields if present */}
                                  {/* We display them if orchestrator/prompt returns them in future responses */}
                                  {/* Keep minimal so UI remains resilient */}
                                  {false && (
                                    <div className="mt-2 space-y-1">
                                      <p className="font-medium">Preliminary thoughts</p>
                                      <p className="text-muted-foreground">{/* placeholder for preliminaryThoughts */}</p>
                                      <p className="font-medium mt-2">Be cautious</p>
                                      <p className="text-amber-600/90">{/* placeholder for uncertaintyNote */}</p>
                                      <p className="font-medium mt-2">Watch for</p>
                                      <ul className="list-disc ml-5 text-muted-foreground">
                                        {/* placeholder for watchFor */}
                                      </ul>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          )}
                          {pattern.recommendations && (
                            <div className="mt-3">
                              <h5 className="text-sm font-medium mb-2">{String(tAnalytics('insights.recommendations'))}</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
{pattern.recommendations.map((rec) => (
                                  <li key={hashOfString(rec)} className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{rec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <ConfidenceIndicator
                          confidence={pattern.confidence}
                          dataPoints={pattern.dataPoints}
                          timeSpanDays={parseDaysFromTimeframe(pattern.timeframe)}
                          rSquared={0}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{String(tAnalytics('insights.title'))}</CardTitle>
        </CardHeader>
        <CardContent>
          {isAnalyzing && <p className="text-muted-foreground">{String(tAnalytics('states.analyzing'))}</p>}
          {!isAnalyzing && structured.length === 0 && (
            <p className="text-muted-foreground">{String(tAnalytics('insights.noPatterns'))}</p>
          )}
          {!isAnalyzing && structured.length > 0 && (
            <div className="space-y-3">
              {structured.map((msg, idx) => (
                <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground">{String(tAnalytics(msg.key.replace(/^analytics\./, ''), msg.params as any))}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
});
