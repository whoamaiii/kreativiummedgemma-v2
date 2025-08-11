import React from 'react';
import { InteractiveDataVisualization } from '@/components/InteractiveDataVisualization';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const now = new Date();
const emotions = [
  { id: '1', emotion: 'happy', intensity: 4, timestamp: now, triggers: [], notes: '' },
  { id: '2', emotion: 'calm', intensity: 3, timestamp: new Date(now.getTime() + 60*60*1000), triggers: [], notes: '' },
] as any[];

const sensoryInputs = [
  { id: '1', type: 'visual', response: 'seeking', intensity: 3, timestamp: new Date(now.getTime() + 30*60*1000), notes: '' },
] as any[];

const trackingEntries = [
  { id: '1', timestamp: now, emotions: ['happy'], sensoryInputs: ['visual'], environmentalData: {}, notes: '' },
] as any[];

export default function InteractiveVizTest() {
  return (
    <ErrorBoundary>
      <div className="p-6">
        <InteractiveDataVisualization
          emotions={emotions}
          sensoryInputs={sensoryInputs}
          trackingEntries={trackingEntries}
          studentName="Test Student"
        />
      </div>
    </ErrorBoundary>
  );
}


