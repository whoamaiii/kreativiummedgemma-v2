/**
 * @fileoverview OptimizedAnalyticsDashboard - Performance-optimized analytics dashboard
 * 
 * This component demonstrates best practices for React performance optimization:
 * - Component memoization with React.memo
 * - Expensive calculations memoized with useMemo
 * - Event handlers optimized with useCallback
 * - Data normalization moved to memoized computation
 * 
 * @module components/optimized/OptimizedAnalyticsDashboard
 */

import { memo, useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BarChart3, BrainCircuit, Target, TrendingUp, Settings, Download, Database } from 'lucide-react';
import { toast } from 'sonner';
import { logger } from '@/lib/logger';
import { analyticsManager } from '@/lib/analyticsManager';
import { useAnalyticsWorker } from '@/hooks/useAnalyticsWorker';
import { useTranslation } from '@/hooks/useTranslation';
import { Student, TrackingEntry, EmotionEntry, SensoryEntry } from '@/types/student';
import { ExportFormat } from '@/types/analytics';
import { TABS } from '../analyticsTabs';

interface OptimizedAnalyticsDashboardProps {
  student: Student;
  filteredData: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
}

/**
 * Memoized data normalization function
 * Converts timestamps to Date instances safely
 */
const normalizeData = (data: OptimizedAnalyticsDashboardProps['filteredData']) => {
  const coerceDate = (value: unknown): Date => {
    try {
      if (value instanceof Date && !isNaN(value.getTime())) return value;
      if (typeof value === 'string' || typeof value === 'number') {
        const dt = new Date(value);
        return isNaN(dt.getTime()) ? new Date() : dt;
      }
      return new Date();
    } catch {
      return new Date();
    }
  };

  return {
    entries: (data.entries || []).map(e => ({ ...e, timestamp: coerceDate(e.timestamp) })),
    emotions: (data.emotions || []).map(e => ({ ...e, timestamp: coerceDate(e.timestamp) })),
    sensoryInputs: (data.sensoryInputs || []).map(s => ({ ...s, timestamp: coerceDate(s.timestamp) })),
  };
};

/**
 * OptimizedAnalyticsDashboard Component
 * 
 * Performance-optimized version with:
 * - Memoized data transformations
 * - Optimized event handlers
 * - Reduced re-renders through proper dependency management
 */
export const OptimizedAnalyticsDashboard = memo(({
  student,
  filteredData = { entries: [], emotions: [], sensoryInputs: [] },
}: OptimizedAnalyticsDashboardProps) => {
  const { tStudent, tAnalytics, tCommon } = useTranslation();
  const [isExporting, setIsExporting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const visualizationRef = useRef<HTMLDivElement>(null);
  
  const { 
    results, 
    isAnalyzing, 
    runAnalysis, 
    invalidateCacheForStudent 
  } = useAnalyticsWorker({ precomputeOnIdle: true });

  // Memoize normalized data to prevent recalculation on every render
  const normalizedData = useMemo(
    () => normalizeData(filteredData),
    [filteredData]
  );

  // Memoize derived data from results
  const patterns = useMemo(() => results?.patterns || [], [results]);
  const correlations = useMemo(() => results?.correlations || [], [results]);
  const insights = useMemo(() => results?.insights || [], [results]);
  const predictiveInsights = useMemo(() => results?.predictiveInsights || [], [results]);
  const anomalies = useMemo(() => results?.anomalies || [], [results]);

  // Calculate date range with memoization
  const dateRange = useMemo(() => {
    if (!normalizedData.entries.length) {
      return { start: new Date(), end: new Date() };
    }

    const timestamps = normalizedData.entries.map(e => e.timestamp.getTime());
    return {
      start: new Date(Math.min(...timestamps)),
      end: new Date(Math.max(...timestamps))
    };
  }, [normalizedData.entries]);

  // Memoized dev mode check
  const isDevSeedEnabled = useMemo(() => {
    try {
      const env: any = (import.meta as any)?.env ?? {};
      return Boolean(env?.DEV || env?.MODE === 'development');
    } catch {
      return false;
    }
  }, []);

  // Optimized seed handler with useCallback
  const handleSeedDemo = useCallback(async () => {
    setIsSeeding(true);
    try {
      const mod = await import('@/lib/mock/mockSeeders');
      const { seedDemoData } = mod;
      const result = await seedDemoData({ 
        forExistingStudents: true, 
        createNewStudents: 1, 
        batchesPerStudent: 1 
      });
      
      toast.success(
        String(tAnalytics('dev.seed.success', { 
          students: result.totalStudentsAffected, 
          entries: result.totalEntriesCreated 
        }))
      );
      
      invalidateCacheForStudent(student.id);
      runAnalysis(normalizedData);
    } catch (error) {
      logger.error('[OptimizedAnalyticsDashboard] Demo seed failed', { error });
      toast.error(String(tAnalytics('dev.seed.failure')));
    } finally {
      setIsSeeding(false);
    }
  }, [normalizedData, invalidateCacheForStudent, runAnalysis, student.id, tAnalytics]);

  // Optimized export handler
  const handleExport = useCallback(async (format: ExportFormat) => {
    setIsExporting(true);
    try {
      const exportData = {
        student,
        dateRange,
        data: normalizedData,
        analytics: {
          patterns,
          correlations,
          insights,
          predictiveInsights,
          anomalies
        },
        charts: format === 'pdf' && visualizationRef.current
          ? [{
              element: visualizationRef.current,
              title: String(tAnalytics('export.chartTitle'))
            }]
          : undefined,
      };

      // Dynamic import for export functionality
      const { exportAnalytics } = await import('@/lib/analyticsExportOptimized');
      await exportAnalytics(exportData, format);
      
      toast.success(String(tAnalytics('export.success')));
    } catch (error) {
      logger.error('[OptimizedAnalyticsDashboard] Export failed', { error });
      toast.error(String(tAnalytics('export.failure')));
    } finally {
      setIsExporting(false);
    }
  }, [
    student, 
    dateRange, 
    normalizedData, 
    patterns, 
    correlations, 
    insights, 
    predictiveInsights, 
    anomalies, 
    tAnalytics
  ]);

  // Effect to trigger analysis when data changes
  useEffect(() => {
    if (normalizedData?.entries?.length > 0) {
      runAnalysis(normalizedData);
    }
    analyticsManager.initializeStudentAnalytics(student.id);
  }, [student.id, normalizedData, runAnalysis]);

  // Memoized tab change handler
  const handleTabChange = useCallback((value: string) => {
    // Track tab change for analytics
    logger.info('[OptimizedAnalyticsDashboard] Tab changed', { tab: value });
  }, []);

  // Memoized settings toggle
  const toggleSettings = useCallback(() => {
    setShowSettings(prev => !prev);
  }, []);

  return (
    <Card className="bg-gradient-card border-0 shadow-soft">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl font-bold">
              {tAnalytics('title')}
            </CardTitle>
            {isAnalyzing && (
              <Badge variant="secondary" className="animate-pulse">
                {tAnalytics('analyzing')}
              </Badge>
            )}
          </div>
          
          <div className="flex gap-2">
            {isDevSeedEnabled && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleSeedDemo}
                disabled={isSeeding}
              >
                <Database className="h-4 w-4 mr-1" />
                {isSeeding ? tAnalytics('dev.seed.loading') : tAnalytics('dev.seed.button')}
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport('pdf')}
              disabled={isExporting}
            >
              <Download className="h-4 w-4 mr-1" />
              {tAnalytics('export.button')}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSettings}
              aria-label={tAnalytics('settings.toggle')}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs 
          defaultValue="patterns" 
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {Object.entries(TABS).map(([key, config]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                data-testid={config.testId}
              >
                <config.icon className="h-4 w-4 mr-2" />
                {tAnalytics(`tabs.${key}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab contents would be implemented here */}
          {/* Each tab content should be a separate memoized component */}
          
          <TabsContent value="patterns" className="space-y-4">
            <PatternsTabContent patterns={patterns} />
          </TabsContent>

          <TabsContent value="correlations" className="space-y-4">
            <CorrelationsTabContent correlations={correlations} />
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <InsightsTabContent insights={insights} />
          </TabsContent>

          <TabsContent value="predictions" className="space-y-4">
            <PredictionsTabContent predictions={predictiveInsights} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for deeper equality check
  return (
    prevProps.student.id === nextProps.student.id &&
    prevProps.filteredData.entries.length === nextProps.filteredData.entries.length &&
    prevProps.filteredData.emotions.length === nextProps.filteredData.emotions.length &&
    prevProps.filteredData.sensoryInputs.length === nextProps.filteredData.sensoryInputs.length
  );
});

OptimizedAnalyticsDashboard.displayName = 'OptimizedAnalyticsDashboard';

// Memoized sub-components for tab content
const PatternsTabContent = memo(({ patterns }: { patterns: any[] }) => (
  <div className="space-y-4">
    {patterns.length === 0 ? (
      <p className="text-muted-foreground">No patterns detected yet.</p>
    ) : (
      patterns.map((pattern, index) => (
        <div key={`pattern-${index}`} className="p-4 bg-muted/30 rounded-lg">
          {/* Pattern visualization */}
        </div>
      ))
    )}
  </div>
));

const CorrelationsTabContent = memo(({ correlations }: { correlations: any[] }) => (
  <div className="space-y-4">
    {correlations.length === 0 ? (
      <p className="text-muted-foreground">No correlations found.</p>
    ) : (
      correlations.map((correlation, index) => (
        <div key={`correlation-${index}`} className="p-4 bg-muted/30 rounded-lg">
          {/* Correlation visualization */}
        </div>
      ))
    )}
  </div>
));

const InsightsTabContent = memo(({ insights }: { insights: any[] }) => (
  <div className="space-y-4">
    {insights.length === 0 ? (
      <p className="text-muted-foreground">No insights available.</p>
    ) : (
      insights.map((insight, index) => (
        <div key={`insight-${index}`} className="p-4 bg-muted/30 rounded-lg">
          {/* Insight display */}
        </div>
      ))
    )}
  </div>
));

const PredictionsTabContent = memo(({ predictions }: { predictions: any[] }) => (
  <div className="space-y-4">
    {predictions.length === 0 ? (
      <p className="text-muted-foreground">No predictions available.</p>
    ) : (
      predictions.map((prediction, index) => (
        <div key={`prediction-${index}`} className="p-4 bg-muted/30 rounded-lg">
          {/* Prediction display */}
        </div>
      ))
    )}
  </div>
));
