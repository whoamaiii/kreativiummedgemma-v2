/**
 * Development utility hook for profiling component render performance
 * Should only be used during development for identifying render hotspots
 */

import { useRef, useEffect } from 'react';
import { logger } from '@/lib/logger';

interface RenderMetrics {
  componentName: string;
  renderCount: number;
  totalRenderTime: number;
  averageRenderTime: number;
  lastRenderTime: number;
  maxRenderTime: number;
  minRenderTime: number;
}

const renderMetrics = new Map<string, RenderMetrics>();

/**
 * Hook to profile render performance of a component in development
 * @param componentName - Name of the component being profiled
 * @param enabled - Whether profiling is enabled (default: only in development)
 */
export function useRenderProfiler(
  componentName: string, 
  enabled: boolean = process.env.NODE_ENV === 'development'
) {
  const renderStartTime = useRef<number>(0);
  const mountTime = useRef<number>(Date.now());

  // Record start time at the beginning of render
  if (enabled) {
    renderStartTime.current = performance.now();
  }

  useEffect(() => {
    if (!enabled) return;

    const renderEndTime = performance.now();
    const renderTime = renderEndTime - renderStartTime.current;

    // Update metrics
    const existing = renderMetrics.get(componentName);
    if (existing) {
      existing.renderCount += 1;
      existing.totalRenderTime += renderTime;
      existing.averageRenderTime = existing.totalRenderTime / existing.renderCount;
      existing.lastRenderTime = renderTime;
      existing.maxRenderTime = Math.max(existing.maxRenderTime, renderTime);
      existing.minRenderTime = Math.min(existing.minRenderTime, renderTime);
    } else {
      renderMetrics.set(componentName, {
        componentName,
        renderCount: 1,
        totalRenderTime: renderTime,
        averageRenderTime: renderTime,
        lastRenderTime: renderTime,
        maxRenderTime: renderTime,
        minRenderTime: renderTime,
      });
    }

    // Log slow renders in development
    const SLOW_RENDER_THRESHOLD = 16; // One frame at 60fps
    if (renderTime > SLOW_RENDER_THRESHOLD) {
      logger.warn(`[RenderProfiler] Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }
  });

  // Development-only: Add debug utilities to window
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Add global functions for performance debugging
    if (!window.__renderProfiler) {
      window.__renderProfiler = {
        getMetrics: (componentName?: string) => {
          if (componentName) {
            return renderMetrics.get(componentName) || null;
          }
          return Array.from(renderMetrics.values());
        },
        
        getRankings: (sortBy: 'total' | 'average' | 'count' = 'average') => {
          const metrics = Array.from(renderMetrics.values());
          return metrics.sort((a, b) => {
            switch (sortBy) {
              case 'total':
                return b.totalRenderTime - a.totalRenderTime;
              case 'count':
                return b.renderCount - a.renderCount;
              case 'average':
              default:
                return b.averageRenderTime - a.averageRenderTime;
            }
          });
        },
        
        getHotspots: (threshold: number = 10) => {
          return Array.from(renderMetrics.values())
            .filter(m => m.averageRenderTime > threshold)
            .sort((a, b) => b.averageRenderTime - a.averageRenderTime);
        },
        
        reset: (componentName?: string) => {
          if (componentName) {
            renderMetrics.delete(componentName);
          } else {
            renderMetrics.clear();
          }
        },
        
        logReport: () => {
          const metrics = Array.from(renderMetrics.values())
            .sort((a, b) => b.averageRenderTime - a.averageRenderTime);
          
          console.group('🚀 Render Performance Report');
          console.table(metrics);
          
          const hotspots = metrics.filter(m => m.averageRenderTime > 10);
          if (hotspots.length > 0) {
            console.group('🔥 Render Hotspots (>10ms average)');
            hotspots.forEach(metric => {
              console.log(`${metric.componentName}: ${metric.averageRenderTime.toFixed(2)}ms avg (${metric.renderCount} renders)`);
            });
            console.groupEnd();
          }
          
          console.groupEnd();
        }
      };
    }

    return () => {
      // Cleanup on unmount - remove this component's data after a delay
      setTimeout(() => {
        renderMetrics.delete(componentName);
      }, 30000); // Clean up after 30 seconds
    };
  }, [componentName, enabled]);
}

// TypeScript declarations for global debugging utilities
declare global {
  interface Window {
    __renderProfiler?: {
      getMetrics: (componentName?: string) => RenderMetrics | RenderMetrics[] | null;
      getRankings: (sortBy?: 'total' | 'average' | 'count') => RenderMetrics[];
      getHotspots: (threshold?: number) => RenderMetrics[];
      reset: (componentName?: string) => void;
      logReport: () => void;
    };
  }
}
