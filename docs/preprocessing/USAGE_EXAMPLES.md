# Preprocessing Usage Examples

Runnable examples for common scenarios. Use these as references when building or testing pipelines.

## 1) Basic Fit/Transform

```ts
import { PreprocessingPipeline } from '@/lib/PreprocessingPipeline';
import type { AnyStepConfig } from '@/types/preprocessing';

const data = [
  { age: 10, mood: 'happy', note: ' hi ' },
  { age: 12, mood: 'sad', note: 'there' },
  { age: 11, mood: 'happy', note: ' ok ' },
];

const cfg: AnyStepConfig[] = [
  { name: 'clean', kind: 'cleaning', dropAllNullColumns: true, trimStrings: true },
  { name: 'scale', kind: 'scaling' },
  { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
];

const pipe = new PreprocessingPipeline(cfg);
const train = pipe.fit(data);
const test = pipe.transform(data);
console.log(train, test);
```

## 2) Conditional Encoding Only When Needed

```ts
const cfg: AnyStepConfig[] = [
  { name: 'clean', kind: 'cleaning' },
  {
    name: 'encodeSmallCats',
    kind: 'encoding',
    oneHotMaxCategories: 12,
    when: (profile) => profile.categoricalColumns.length > 0,
  },
];
```

## 3) Persist and Restore Pipeline

```ts
const payload = pipe.toJSON();
localStorage.setItem('preprocess_pipe', JSON.stringify(payload));

const restored = PreprocessingPipeline.fromJSON(
  JSON.parse(localStorage.getItem('preprocess_pipe')!),
);
const out = restored.transform(data);
```

## 4) Prepare Emotion Tensors

```ts
import { convertTrackingEntriesToSessions, prepareEmotionData } from '@/lib/preprocessing/facade';

const sessions = convertTrackingEntriesToSessions(trackingEntries);
const { inputs, outputs, normalizers } = prepareEmotionData(sessions, { sequenceLength: 7 });
```

## 5) Prepare Sensory Tensors

```ts
import { convertTrackingEntriesToSessions, prepareSensoryData } from '@/lib/preprocessing/facade';

const sessions = convertTrackingEntriesToSessions(trackingEntries);
const { inputs, outputs } = prepareSensoryData(sessions);
```
