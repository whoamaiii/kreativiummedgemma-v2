# Preprocessing Module

A standardized, versioned preprocessing system for transforming raw tabular data and preparing
ML-ready tensors for SensoryTracker analytics.

- Deterministic step ordering (cleaning → scaling → encoding → feature engineering)
- Separate fit (training) and transform (inference)
- Conditional steps based on data profiling
- Full JSON serialization and recovery
- Backward-compatible helpers for ML session preparation

## Installation and Import

The module is internal to the project. Import with the @ alias.

```ts
import { PreprocessingPipeline } from '@/lib/PreprocessingPipeline';
import {
  prepareEmotionData,
  prepareSensoryData,
  convertTrackingEntriesToSessions,
} from '@/lib/preprocessing/facade';
import type { AnyStepConfig } from '@/types/preprocessing';
```

## Quick Start: Configurable Pipeline

```ts
const config: AnyStepConfig[] = [
  { name: 'clean', kind: 'cleaning', dropAllNullColumns: true, trimStrings: true },
  { name: 'scale', kind: 'scaling', method: 'standard' },
  { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
  { name: 'poly', kind: 'feature_engineering', polynomialDegree: 2 },
];

const pipeline = new PreprocessingPipeline(config);
const trained = pipeline.fit(dataset); // Fits + transforms training data
const inference = pipeline.transform(dataset); // Transforms new data deterministically

// Persist pipeline
const payload = pipeline.toJSON();
// ...store payload...

// Restore later
const restored = PreprocessingPipeline.fromJSON(payload);
const result = restored.transform(dataset);
```

## Preparing ML Tensors

### Emotion Sequences (Sequence-to-One Regression)

```ts
const sessions = convertTrackingEntriesToSessions(trackingEntries);
const { inputs, outputs, normalizers } = prepareEmotionData(sessions, { sequenceLength: 7 });
// inputs: tf.Tensor3D [N, L, F], outputs: tf.Tensor2D [N, 7]
```

### Sensory Responses (Multi-label Classification)

```ts
const sessions = convertTrackingEntriesToSessions(trackingEntries);
const { inputs, outputs } = prepareSensoryData(sessions);
// inputs: tf.Tensor2D [N, F], outputs: tf.Tensor2D [N, 15] (5 senses × 3 one-hot labels)
```

## Public API

- PreprocessingPipeline
  - fit(data, options?): Dataset
  - transform(data): Dataset
  - toJSON(): SerializedPipeline
  - static fromJSON(payload): PreprocessingPipeline
  - getMetadata(): PipelineMetadata | undefined

- facade helpers
  - convertTrackingEntriesToSessions(entries): MLSession[]
  - prepareEmotionData(sessions, options?): { inputs, outputs, normalizers }
  - prepareSensoryData(sessions, options?): { inputs, outputs }

See source files for detailed JSDoc.

## Schema Versioning

- Pipeline semantic version: embedded in PreprocessingPipeline and serialized payloads
- Config hash captured for auditability
- Data schema (columns + inferred types) stored in metadata

For details, see docs/preprocessing/SCHEMA_VERSIONING.md

## Migration Guide

If you previously used DataPreprocessor, see docs/preprocessing/MIGRATION_GUIDE.md for a
step-by-step mapping and code examples.

## Performance & Best Practices

- Fit once per training cycle; reuse via toJSON/fromJSON
- Avoid one-hot on high-cardinality columns (tune oneHotMaxCategories)
- Use conditional `when(profile)` for data-dependent steps
- Keep numeric columns numeric; trim/clean text early

See docs/preprocessing/BENCHMARKS_BEST_PRACTICES.md for benchmarks and tuning tips.
