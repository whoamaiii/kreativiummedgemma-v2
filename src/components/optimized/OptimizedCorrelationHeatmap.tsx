/**
 * @fileoverview OptimizedCorrelationHeatmap - Performance-optimized correlation visualization
 * 
 * Key optimizations:
 * - Component wrapped with React.memo
 * - Expensive data transformations memoized with useMemo
 * - O(n²) complexity optimized with Map-based lookups
 * - Chart configuration memoized
 * 
 * @module components/optimized/OptimizedCorrelationHeatmap
 */

import React, { memo, useMemo } from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { CorrelationResult } from '@/lib/patternAnalysis';

interface OptimizedCorrelationHeatmapProps {
  data: CorrelationResult[];
}

/**
 * OptimizedCorrelationHeatmap Component
 * 
 * Performance improvements:
 * - Memoized factor extraction
 * - Optimized correlation lookup using Map
 * - Memoized chart configuration
 * - Component memoization with custom comparison
 */
export const OptimizedCorrelationHeatmap = memo<OptimizedCorrelationHeatmapProps>(({ data }) => {
  // Memoize factor extraction
  const factors = useMemo(() => {
    const factorSet = new Set<string>();
    data.forEach(d => {
      factorSet.add(d.factor1);
      factorSet.add(d.factor2);
    });
    return Array.from(factorSet);
  }, [data]);

  // Create optimized correlation lookup map to avoid O(n²) searching
  const correlationMap = useMemo(() => {
    const map = new Map<string, number>();
    
    // Build lookup map with both directions
    data.forEach(d => {
      const key1 = `${d.factor1}:${d.factor2}`;
      const key2 = `${d.factor2}:${d.factor1}`;
      map.set(key1, d.correlation);
      map.set(key2, d.correlation);
    });
    
    return map;
  }, [data]);

  // Memoize chart data transformation
  const chartData = useMemo(() => {
    return factors.map(factor1 => ({
      id: factor1,
      data: factors.map(factor2 => {
        // Use Map lookup instead of array.find for O(1) access
        const key = `${factor1}:${factor2}`;
        const correlation = correlationMap.get(key) ?? 0;
        
        return {
          x: factor2,
          y: correlation,
        };
      }),
    }));
  }, [factors, correlationMap]);

  // Memoize chart configuration
  const chartConfig = useMemo(() => ({
    margin: { top: 100, right: 60, bottom: 60, left: 60 },
    axisTop: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: '',
      legendOffset: -70,
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: -40,
    },
    cellBorderColor: { from: 'color', modifiers: [['darker', 0.4]] },
    labelTextColor: { from: 'color', modifiers: [['brighter', 1.8]] },
    defs: [
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(0, 0, 0, 0.1)',
        rotation: -45,
        lineWidth: 4,
        spacing: 7,
      },
    ],
    fill: [{ id: 'lines' }],
  }), []);

  // Early return if no data
  if (!data || data.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">No correlation data available</p>
      </div>
    );
  }

  return (
    <div className="h-[400px]">
      <ResponsiveHeatMap
        data={chartData}
        keys={factors}
        indexBy="id"
        margin={chartConfig.margin}
        axisTop={chartConfig.axisTop}
        axisLeft={chartConfig.axisLeft}
        colors="bwr"
        cellOpacity={1}
        cellBorderWidth={1}
        cellBorderColor={chartConfig.cellBorderColor}
        labelTextColor={chartConfig.labelTextColor}
        defs={chartConfig.defs}
        fill={chartConfig.fill}
        animate={true}
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for deep equality check
  // Only re-render if data actually changes
  if (prevProps.data.length !== nextProps.data.length) {
    return false;
  }
  
  // Check if correlation values have changed
  for (let i = 0; i < prevProps.data.length; i++) {
    const prev = prevProps.data[i];
    const next = nextProps.data[i];
    if (
      prev.factor1 !== next.factor1 ||
      prev.factor2 !== next.factor2 ||
      prev.correlation !== next.correlation
    ) {
      return false;
    }
  }
  
  return true; // Props are equal, skip re-render
});

OptimizedCorrelationHeatmap.displayName = 'OptimizedCorrelationHeatmap';

export default OptimizedCorrelationHeatmap;
