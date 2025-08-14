# Migration Guide: DataPreprocessor -> PreprocessingPipeline

This guide helps you migrate from the legacy `DataPreprocessor` to the new, versioned
`PreprocessingPipeline` and the preprocessing facade helpers.

## Why Migrate?

- Deterministic step ordering
- Fit/transform separation for reproducibility
- Full JSON serialization for portability
- Conditional steps via data profiling
- Clear typing and public API docs

## Common Mappings

| Legacy Concept                      | New Equivalent                                                             |
| ----------------------------------- | -------------------------------------------------------------------------- |
| DataPreprocessor.clean()            | cleaning step `{ kind: 'cleaning', dropAllNullColumns, trimStrings }`      |
| DataPreprocessor.scale()            | scaling step `{ kind: 'scaling', method: 'standard' }`                     |
| DataPreprocessor.encode()           | encoding step `{ kind: 'encoding', oneHotMaxCategories }`                  |
| DataPreprocessor.features.degree2() | feature_engineering `{ kind: 'feature_engineering', polynomialDegree: 2 }` |
| process(train)                      | `pipeline.fit(train)`                                                      |
| process(test)                       | `pipeline.transform(test)`                                                 |
| saveState()/loadState()             | `toJSON()` / `fromJSON()`                                                  |

## Example Migration

### Before

```ts
// Legacy
const pre = new DataPreprocessor()
  .clean({ dropNulls: true, trim: true })
  .scale('standard')
  .encode({ maxCategories: 10 })
  .degree2();

const trainProcessed = pre.process(train);
const testProcessed = pre.process(test);
```

### After

```ts
import { PreprocessingPipeline } from '@/lib/PreprocessingPipeline';
import type { AnyStepConfig } from '@/types/preprocessing';

const config: AnyStepConfig[] = [
  { name: 'clean', kind: 'cleaning', dropAllNullColumns: true, trimStrings: true },
  { name: 'scale', kind: 'scaling', method: 'standard' },
  { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
  { name: 'poly', kind: 'feature_engineering', polynomialDegree: 2 },
];

const pipeline = new PreprocessingPipeline(config);
const trainProcessed = pipeline.fit(train);
const testProcessed = pipeline.transform(test);
```

## Saving and Restoring

```ts
const payload = pipeline.toJSON();
// persist payload (e.g., IndexedDB)
const restored = PreprocessingPipeline.fromJSON(payload);
```

## Handling Conditional Steps

```ts
{ name: 'encodeSmallCats', kind: 'encoding', oneHotMaxCategories: 12, when: (profile) => profile.rowCount > 100 }
```

## Emotion/Sensory Preparation

If you previously used DataPreprocessor for model inputs, switch to:

```ts
import {
  convertTrackingEntriesToSessions,
  prepareEmotionData,
  prepareSensoryData,
} from '@/lib/preprocessing/facade';
```

## Gotchas

- Ensure numeric columns are typed as numbers prior to scaling
- Avoid one-hot encoding for columns with very high cardinality (tune `oneHotMaxCategories`)
- Always call `fit` before `transform`; otherwise `transform` returns input data unchanged

## Testing

- Use `tests/preprocessing/pipeline.test.ts` as a reference
- Add snapshots for serialized pipelines if you evolve configs
