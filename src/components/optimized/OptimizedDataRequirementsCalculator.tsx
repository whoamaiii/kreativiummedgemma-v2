/**
 * @fileoverview OptimizedDataRequirementsCalculator - Performance-optimized data requirements tracking
 * 
 * Key optimizations:
 * - Component wrapped with React.memo
 * - All expensive calculations memoized
 * - Optimized timestamp processing
 * - Reduced nested map operations
 * 
 * @module components/optimized/OptimizedDataRequirementsCalculator
 */

import { useMemo, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Calendar, Target, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { EmotionEntry, SensoryEntry, TrackingEntry } from '@/types/student';
import { differenceInDays, addDays } from 'date-fns';

interface OptimizedDataRequirementsCalculatorProps {
  emotions: EmotionEntry[];
  sensoryInputs: SensoryEntry[];
  entries: TrackingEntry[];
  className?: string;
}

interface ConfidenceRequirement {
  level: 'low' | 'medium' | 'high';
  percentage: number;
  minDataPoints: number;
  minDays: number;
  minRSquared: number;
  color: string;
  description: string;
}

interface DataStatus {
  dataPoints: number;
  daysSpan: number;
  entriesCount: number;
  startDate: Date;
  hasData: boolean;
}

interface ProgressCalculation {
  requirement: ConfidenceRequirement;
  progress: number;
  dataPoints: {
    current: number;
    needed: number;
    progress: number;
  };
  days: {
    current: number;
    needed: number;
    progress: number;
  };
  daysToTarget: number;
  targetDate: Date;
  isAchieved: boolean;
}

/**
 * OptimizedDataRequirementsCalculator Component
 * 
 * Performance improvements:
 * - Memoized requirements configuration
 * - Optimized timestamp processing with single pass
 * - Memoized progress calculations
 * - Component memoization with custom comparison
 */
export const OptimizedDataRequirementsCalculator = memo<OptimizedDataRequirementsCalculatorProps>(({ 
  emotions, 
  sensoryInputs, 
  entries, 
  className 
}) => {
  const { tAnalytics, formatDate } = useTranslation();

  // Define confidence level requirements - memoized based on translations
  const requirements: ConfidenceRequirement[] = useMemo(() => [
    {
      level: 'low',
      percentage: 25,
      minDataPoints: 5,
      minDays: 7,
      minRSquared: 0.3,
      color: 'bg-orange-500',
      description: String(tAnalytics('confidence.low'))
    },
    {
      level: 'medium',
      percentage: 50,
      minDataPoints: 15,
      minDays: 21,
      minRSquared: 0.5,
      color: 'bg-yellow-500',
      description: String(tAnalytics('confidence.medium'))
    },
    {
      level: 'high',
      percentage: 75,
      minDataPoints: 30,
      minDays: 42,
      minRSquared: 0.7,
      color: 'bg-green-500',
      description: String(tAnalytics('confidence.high'))
    }
  ], [tAnalytics]);

  // Calculate current data status with optimized timestamp processing
  const currentStatus: DataStatus = useMemo(() => {
    const totalDataPoints = emotions.length + sensoryInputs.length;
    
    // Optimize timestamp processing - single pass with early exit
    if (totalDataPoints === 0 && entries.length === 0) {
      return {
        dataPoints: 0,
        daysSpan: 0,
        entriesCount: 0,
        startDate: new Date(),
        hasData: false
      };
    }

    // Process timestamps more efficiently
    let minTimestamp = Infinity;
    let maxTimestamp = -Infinity;
    
    // Process all timestamps in single pass
    const processTimestamp = (timestamp: Date) => {
      const time = timestamp.getTime();
      if (time < minTimestamp) minTimestamp = time;
      if (time > maxTimestamp) maxTimestamp = time;
    };

    emotions.forEach(e => processTimestamp(e.timestamp));
    sensoryInputs.forEach(s => processTimestamp(s.timestamp));
    entries.forEach(e => processTimestamp(e.timestamp));

    const startDate = minTimestamp === Infinity ? new Date() : new Date(minTimestamp);
    const endDate = maxTimestamp === -Infinity ? new Date() : new Date(maxTimestamp);
    const daysSpan = minTimestamp === Infinity ? 0 : differenceInDays(endDate, startDate) + 1;

    return {
      dataPoints: totalDataPoints,
      daysSpan,
      entriesCount: entries.length,
      startDate,
      hasData: totalDataPoints > 0
    };
  }, [emotions.length, sensoryInputs.length, entries.length]);

  // Calculate progress toward each confidence level
  const progressCalculations: ProgressCalculation[] = useMemo(() => {
    return requirements.map(req => {
      const dataPointsProgress = Math.min(100, (currentStatus.dataPoints / req.minDataPoints) * 100);
      const daysProgress = Math.min(100, (currentStatus.daysSpan / req.minDays) * 100);
      const overallProgress = Math.min(dataPointsProgress, daysProgress);

      const dataPointsNeeded = Math.max(0, req.minDataPoints - currentStatus.dataPoints);
      const daysNeeded = Math.max(0, req.minDays - currentStatus.daysSpan);

      // Estimate days to target (assuming 1 data point per day)
      const daysToTarget = Math.max(dataPointsNeeded, daysNeeded);
      const targetDate = addDays(new Date(), daysToTarget);

      return {
        requirement: req,
        progress: overallProgress,
        dataPoints: {
          current: currentStatus.dataPoints,
          needed: dataPointsNeeded,
          progress: dataPointsProgress
        },
        days: {
          current: currentStatus.daysSpan,
          needed: daysNeeded,
          progress: daysProgress
        },
        daysToTarget,
        targetDate,
        isAchieved: overallProgress >= 100
      };
    });
  }, [requirements, currentStatus]);

  // Get next target confidence level - memoized
  const { nextTarget, currentLevel } = useMemo(() => {
    const next = progressCalculations.find(p => !p.isAchieved);
    const level = progressCalculations.filter(p => p.isAchieved).length;
    return { nextTarget: next, currentLevel: level };
  }, [progressCalculations]);

  // Calculate recommended daily collection rate - memoized
  const recommendedRate = useMemo(() => {
    if (!nextTarget) return null;
    const dailyRate = Math.ceil(nextTarget.dataPoints.needed / Math.max(nextTarget.daysToTarget, 1));
    return Math.max(1, dailyRate);
  }, [nextTarget]);

  // Memoized level status text
  const levelStatusText = useMemo(() => {
    switch (currentLevel) {
      case 0: return 'Under lavt nivå';
      case 1: return 'Lavt nivå oppnådd';
      case 2: return 'Middels nivå oppnådd';
      default: return 'Høyt nivå oppnådd';
    }
  }, [currentLevel]);

  // Memoized badge variant
  const badgeVariant = useMemo(() => {
    if (currentLevel >= 3) return 'default';
    if (currentLevel >= 1) return 'secondary';
    return 'outline';
  }, [currentLevel]);

  // Memoized badge text
  const badgeText = useMemo(() => {
    if (currentLevel >= 3) return 'Høy';
    if (currentLevel >= 1) return 'Middels';
    return 'Lav';
  }, [currentLevel]);

  if (!currentStatus.hasData) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Datakrav for sikkerhetsnivå
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground mb-4">
            Ingen data registrert ennå. Start med å samle data for å se fremgang mot sikkerhetsnivåer.
          </p>
          <Button variant="outline">
            Start datainnsamling
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Datakrav for sikkerhetsnivå
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{currentStatus.dataPoints} datapunkter samlet</span>
          <span>{currentStatus.daysSpan} dager med data</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Status */}
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div>
            <p className="font-medium">Nåværende sikkerhetsnivå</p>
            <p className="text-sm text-muted-foreground">
              {levelStatusText}
            </p>
          </div>
          <Badge variant={badgeVariant as any}>
            {badgeText} sikkerhet
          </Badge>
        </div>

        {/* Progress toward next level */}
        {nextTarget && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Fremgang mot {nextTarget.requirement.description}</h4>
              <span className="text-sm text-muted-foreground">
                {Math.round(nextTarget.progress)}% fullført
              </span>
            </div>
            
            <Progress value={nextTarget.progress} className="h-2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DataProgressItem
                label="Datapunkter"
                current={nextTarget.dataPoints.current}
                required={nextTarget.requirement.minDataPoints}
                progress={nextTarget.dataPoints.progress}
              />
              <DataProgressItem
                label="Dager"
                current={nextTarget.days.current}
                required={nextTarget.requirement.minDays}
                progress={nextTarget.days.progress}
              />
            </div>

            {recommendedRate && recommendedRate > 0 && (
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium">
                  Anbefalt: Samle {recommendedRate} datapunkt{recommendedRate > 1 ? 'er' : ''} per dag
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Måloppnåelse: {formatDate(nextTarget.targetDate)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Achievement indicators */}
        <div className="space-y-2">
          {progressCalculations.map((calc) => (
            <AchievementIndicator
              key={calc.requirement.level}
              requirement={calc.requirement}
              isAchieved={calc.isAchieved}
              progress={calc.progress}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for optimal re-rendering
  return (
    prevProps.emotions.length === nextProps.emotions.length &&
    prevProps.sensoryInputs.length === nextProps.sensoryInputs.length &&
    prevProps.entries.length === nextProps.entries.length &&
    prevProps.className === nextProps.className
  );
});

OptimizedDataRequirementsCalculator.displayName = 'OptimizedDataRequirementsCalculator';

// Memoized sub-components
const DataProgressItem = memo<{
  label: string;
  current: number;
  required: number;
  progress: number;
}>(({ label, current, required, progress }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span>{label}</span>
      <span className="text-muted-foreground">
        {current} / {required}
      </span>
    </div>
    <Progress value={progress} className="h-1" />
  </div>
));

DataProgressItem.displayName = 'DataProgressItem';

const AchievementIndicator = memo<{
  requirement: ConfidenceRequirement;
  isAchieved: boolean;
  progress: number;
}>(({ requirement, isAchieved, progress }) => (
  <div className="flex items-center gap-3">
    <div className={`h-2 w-2 rounded-full ${isAchieved ? requirement.color : 'bg-muted'}`} />
    <span className={`text-sm ${isAchieved ? '' : 'text-muted-foreground'}`}>
      {requirement.description}
    </span>
    {isAchieved ? (
      <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
    ) : (
      <span className="text-xs text-muted-foreground ml-auto">
        {Math.round(progress)}%
      </span>
    )}
  </div>
));

AchievementIndicator.displayName = 'AchievementIndicator';

export default OptimizedDataRequirementsCalculator;
