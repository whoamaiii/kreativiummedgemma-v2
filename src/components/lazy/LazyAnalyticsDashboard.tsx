import React, { Suspense, lazy } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Brain, Eye, BarChart3 } from 'lucide-react';
import { Student, TrackingEntry, EmotionEntry, SensoryEntry } from '@/types/student';

// Lazy load the heavy analytics dashboard component
const AnalyticsDashboard = lazy(() => import('@/components/AnalyticsDashboard').then(m => ({ default: m.AnalyticsDashboard })));

interface LazyAnalyticsDashboardProps {
  student: Student;
  filteredData: {
    entries: TrackingEntry[];
    emotions: EmotionEntry[];
    sensoryInputs: SensoryEntry[];
  };
}

const AnalyticsDashboardFallback: React.FC = () => (
  <div className="space-y-6">
    {/* Header skeleton */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Analytics Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Tabs skeleton */}
    <Tabs defaultValue="overview">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview" className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="patterns" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Patterns
        </TabsTrigger>
        <TabsTrigger value="correlations" className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          Correlations
        </TabsTrigger>
        <TabsTrigger value="3d-viz" className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          3D Visualization
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-[300px] w-full" />
                <div className="grid grid-cols-3 gap-4">
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="patterns" className="mt-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Analyzing patterns...</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="correlations" className="mt-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-36" />
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Computing correlations...</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="3d-viz" className="mt-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Loading 3D visualization...</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export const LazyAnalyticsDashboard: React.FC<LazyAnalyticsDashboardProps> = (props) => {
  return (
    <Suspense fallback={<AnalyticsDashboardFallback />}>
      <AnalyticsDashboard {...props} />
    </Suspense>
  );
};
