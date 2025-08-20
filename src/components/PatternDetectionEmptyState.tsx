import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingUp, Calendar, Target } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface PatternDetectionEmptyStateProps {
  dataPoints: number;
  daysWithData: number;
  onCollectData?: () => void;
  className?: string;
}

export const PatternDetectionEmptyState = ({
  dataPoints,
  daysWithData,
  onCollectData,
  className
}: PatternDetectionEmptyStateProps) => {
  const { tAnalytics } = useTranslation();

  const getGuidanceMessage = () => {
    if (dataPoints === 0) {
      return {
        title: String(tAnalytics('patternDetection.guidance.noData.title')),
        description: String(tAnalytics('patternDetection.guidance.noData.description')),
        actionText: String(tAnalytics('patternDetection.guidance.noData.actionText')),
        icon: AlertTriangle,
        color: 'text-warning'
      };
    }

    if (dataPoints < 3) {
      const needed = 3 - dataPoints;
      return {
        title: String(tAnalytics('patternDetection.guidance.needMoreData.title')),
        description: String(tAnalytics('patternDetection.guidance.needMoreData.description', { current: dataPoints, needed })),
        actionText: String(tAnalytics('patternDetection.guidance.needMoreData.actionText')),
        icon: Target,
        color: 'text-info'
      };
    }

    if (daysWithData < 7) {
      return {
        title: String(tAnalytics('patternDetection.guidance.needMoreTime.title')),
        description: String(tAnalytics('patternDetection.guidance.needMoreTime.description', { days: daysWithData })),
        actionText: String(tAnalytics('patternDetection.guidance.needMoreTime.actionText')),
        icon: Calendar,
        color: 'text-primary'
      };
    }

    return {
      title: String(tAnalytics('patternDetection.guidance.noPatterns.title')),
      description: String(tAnalytics('patternDetection.guidance.noPatterns.description')),
      actionText: String(tAnalytics('patternDetection.guidance.noPatterns.actionText')),
      icon: TrendingUp,
      color: 'text-success'
    };
  };

  const guidance = getGuidanceMessage();
  const Icon = guidance.icon;

  const requirements = [
    { 
      id: 'minimum-data-points',
      label: String(tAnalytics('patternDetection.requirements.minimumDataPoints')), 
      current: dataPoints, 
      target: 3, 
      met: dataPoints >= 3 
    },
    { 
      id: 'days-with-data',
      label: String(tAnalytics('patternDetection.requirements.daysWithData')), 
      current: daysWithData, 
      target: 7, 
      met: daysWithData >= 7 
    },
    { 
      id: 'regularity',
      label: String(tAnalytics('patternDetection.requirements.regularity')), 
      current: String(tAnalytics('patternDetection.requirements.variable')), 
      target: String(tAnalytics('patternDetection.requirements.daily')), 
      met: false 
    }
  ];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${guidance.color}`} />
          {guidance.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          {guidance.description}
        </p>

        {/* Requirements Progress */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">{String(tAnalytics('patternDetection.requirements.title'))}</h4>
          {requirements.map((req) => (
            <div key={req.id} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50">
              <span className="text-sm">{req.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {req.current} / {req.target}
                </span>
                <div className={`w-3 h-3 rounded-full ${req.met ? 'bg-success' : 'bg-muted-foreground/30'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="p-4 bg-info/10 rounded-lg">
          <h4 className="text-sm font-medium text-info-foreground mb-2">
            {String(tAnalytics('patternDetection.tips.title'))}
          </h4>
          <ul className="text-sm text-info-foreground/80 space-y-1">
            <li>• {String(tAnalytics('patternDetection.tips.sameTime'))}</li>
            <li>• {String(tAnalytics('patternDetection.tips.includeAll'))}</li>
            <li>• {String(tAnalytics('patternDetection.tips.noteEnvironment'))}</li>
            <li>• {String(tAnalytics('patternDetection.tips.beConsistent'))}</li>
          </ul>
        </div>

        {/* Action Button */}
        {onCollectData && (
          <Button 
            onClick={onCollectData}
            className="w-full bg-gradient-primary hover:opacity-90"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            {guidance.actionText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};