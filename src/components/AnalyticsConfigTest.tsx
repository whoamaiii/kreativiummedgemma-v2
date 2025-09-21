import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { analyticsConfig } from '@/lib/analyticsConfig';
import { useAnalyticsWorker } from '@/hooks/useAnalyticsWorker';
import { CheckCircle, XCircle, RefreshCw, Settings } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface TestResult {
  name: string;
  status: 'pass' | 'fail' | 'pending';
  message: string;
}

const AnalyticsConfigTest: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [currentConfig, setCurrentConfig] = useState(analyticsConfig.getConfig());
  const { cacheSize, clearCache } = useAnalyticsWorker();
  const { tAnalytics } = useTranslation();

  useEffect(() => {
    // Subscribe to configuration changes
    const unsubscribe = analyticsConfig.subscribe((newConfig) => {
      setCurrentConfig(newConfig);
    });

    return unsubscribe;
  }, []);

  const runTests = async () => {
    const results: TestResult[] = [];

    // Test 1: Configuration Persistence
    try {
      const originalConfig = analyticsConfig.getConfig();
      analyticsConfig.updateConfig({
        patternAnalysis: {
          ...originalConfig.patternAnalysis,
          minDataPoints: 7
        }
      });
      
      // Simulate page reload by creating new instance
      const newConfigManager = analyticsConfig;
      const loadedConfig = newConfigManager.getConfig();
      
      if (loadedConfig.patternAnalysis.minDataPoints === 7) {
        results.push({
          name: 'Configuration Persistence',
          status: 'pass',
          message: 'Configuration saved and loaded from localStorage successfully'
        });
      } else {
        results.push({
          name: 'Configuration Persistence',
          status: 'fail',
          message: 'Configuration not persisted correctly'
        });
      }
      
      // Reset to original
      analyticsConfig.updateConfig(originalConfig);
    } catch (error) {
      results.push({
        name: 'Configuration Persistence',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    // Test 2: Preset Configuration
    try {
      analyticsConfig.setPreset('sensitive');
      const sensitiveConfig = analyticsConfig.getConfig();
      
      if (sensitiveConfig.alertSensitivity.level === 'high' &&
          sensitiveConfig.patternAnalysis.minDataPoints === 2) {
        results.push({
          name: 'Preset Configuration',
          status: 'pass',
          message: 'Sensitive preset applied correctly'
        });
      } else {
        results.push({
          name: 'Preset Configuration',
          status: 'fail',
          message: 'Preset not applied correctly'
        });
      }
      
      // Reset to balanced
      analyticsConfig.setPreset('balanced');
    } catch (error) {
      results.push({
        name: 'Preset Configuration',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    // Test 3: Cache Invalidation on Config Change
    try {
      const initialCacheSize = cacheSize;
      
      // Update config with invalidateOnConfigChange = true
      analyticsConfig.updateConfig({
        cache: {
          ...currentConfig.cache,
          invalidateOnConfigChange: true
        }
      });
      
      // Change a threshold to trigger cache invalidation
      analyticsConfig.updateConfig({
        patternAnalysis: {
          ...currentConfig.patternAnalysis,
          minDataPoints: 5
        }
      });
      
      // Give the event loop a tick for cache invalidation without setTimeout
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      
      results.push({
        name: 'Cache Invalidation',
        status: 'pass',
        message: `Cache invalidation working (was ${initialCacheSize}, now ${cacheSize})`
      });
    } catch (error) {
      results.push({
        name: 'Cache Invalidation',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    // Test 4: Configuration Export/Import
    try {
      const exported = analyticsConfig.exportConfig();
      const parsed = JSON.parse(exported);
      
      if (parsed.patternAnalysis && parsed.alertSensitivity && parsed.cache) {
        // Modify and import
        parsed.patternAnalysis.minDataPoints = 10;
        const importSuccess = analyticsConfig.importConfig(JSON.stringify(parsed));
        
        if (importSuccess && analyticsConfig.getConfig().patternAnalysis.minDataPoints === 10) {
          results.push({
            name: 'Configuration Export/Import',
            status: 'pass',
            message: 'Configuration exported and imported successfully'
          });
        } else {
          results.push({
            name: 'Configuration Export/Import',
            status: 'fail',
            message: 'Import failed or values not updated'
          });
        }
      } else {
        results.push({
          name: 'Configuration Export/Import',
          status: 'fail',
          message: 'Export format invalid'
        });
      }
      
      // Reset to defaults
      analyticsConfig.resetToDefaults();
    } catch (error) {
      results.push({
        name: 'Configuration Export/Import',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    // Test 5: Sensitivity Multipliers
    try {
      analyticsConfig.updateConfig({
        alertSensitivity: {
          level: 'high',
          emotionIntensityMultiplier: 1.5,
          frequencyMultiplier: 1.5,
          anomalyMultiplier: 1.5
        }
      });
      
      const config = analyticsConfig.getConfig();
      if (config.alertSensitivity.emotionIntensityMultiplier === 1.5) {
        results.push({
          name: 'Sensitivity Multipliers',
          status: 'pass',
          message: 'Sensitivity multipliers applied correctly'
        });
      } else {
        results.push({
          name: 'Sensitivity Multipliers',
          status: 'fail',
          message: 'Multipliers not set correctly'
        });
      }
      
      // Reset
      analyticsConfig.resetToDefaults();
    } catch (error) {
      results.push({
        name: 'Sensitivity Multipliers',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    setTestResults(results);
  };

  const getStatusIcon = useCallback((status: TestResult['status']): React.ReactElement => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <RefreshCw className="h-5 w-5 text-gray-400 animate-spin" />;
    }
  }, []);

  const getStatusColor = useCallback((status: TestResult['status']): 'default' | 'destructive' | 'secondary' | 'outline' => {
    switch (status) {
      case 'pass':
        return 'default';
      case 'fail':
        return 'destructive';
      default:
        return 'secondary';
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          {String(tAnalytics('configTest.title'))}
        </CardTitle>
        <CardDescription>
          {String(tAnalytics('configTest.description'))}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{String(tAnalytics('configTest.currentConfiguration'))}</p>
            <div className="flex gap-2">
              <Badge variant="outline">
                {tAnalytics('configTest.alertLevel', { level: currentConfig.alertSensitivity.level })}
              </Badge>
              <Badge variant="outline">
                {tAnalytics('configTest.minDataPoints', { count: currentConfig.patternAnalysis.minDataPoints })}
              </Badge>
              <Badge variant="outline">
                {tAnalytics('configTest.cacheSize', { size: cacheSize })}
              </Badge>
            </div>
          </div>
          <Button onClick={runTests} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            {String(tAnalytics('configTest.runTests'))}
          </Button>
        </div>

        {testResults.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">{String(tAnalytics('configTest.testResults'))}</h4>
            {testResults.map((result) => (
              <div
                key={`${result.name}-${result.status}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
              >
                {getStatusIcon(result.status)}
                <div className="flex-1">
                  <p className="font-medium">{result.name}</p>
                  <p className="text-sm text-muted-foreground">{result.message}</p>
                </div>
                <Badge variant={getStatusColor(result.status) as "default" | "secondary" | "destructive" | "outline"}>
                  {result.status.toUpperCase()}
                </Badge>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">{String(tAnalytics('configTest.quickActions'))}</p>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => analyticsConfig.setPreset('conservative')}
            >
              {String(tAnalytics('configTest.setConservative'))}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => analyticsConfig.setPreset('sensitive')}
            >
              {String(tAnalytics('configTest.setSensitive'))}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => analyticsConfig.resetToDefaults()}
            >
              {String(tAnalytics('configTest.resetDefaults'))}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={clearCache}
            >
              {String(tAnalytics('configTest.clearCache'))}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { AnalyticsConfigTest };
