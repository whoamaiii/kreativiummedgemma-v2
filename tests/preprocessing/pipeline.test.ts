import { PreprocessingPipeline } from '@/lib/PreprocessingPipeline';
import { AnyStepConfig, SerializedPipeline } from '@/types/preprocessing';

function sampleData() {
  return [
    { a: 1, b: 'x', keep: 1 },
    { a: 3, b: 'y', keep: 2 },
    { a: 5, b: 'x', keep: 3 },
  ];
}

describe('PreprocessingPipeline', () => {
  test('fit/transform determinism and schema metadata', () => {
    const cfg: AnyStepConfig[] = [
      { name: 'clean', kind: 'cleaning', dropAllNullColumns: true },
      { name: 'scale', kind: 'scaling', method: 'standard' },
      { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
      { name: 'poly', kind: 'feature_engineering', polynomialDegree: 2 },
    ];
    const pipe = new PreprocessingPipeline(cfg);
    const fitted = pipe.fit(sampleData());
    const meta = pipe.getMetadata();
    expect(meta?.pipelineVersion).toBeDefined();
    expect(Array.isArray(meta?.dataSchema.columns)).toBe(true);
    const again = pipe.transform(sampleData());
    // transform after fit should be consistent
    expect(again).toEqual(fitted);
  });

  test('serialization and deserialization', () => {
    const cfg: AnyStepConfig[] = [
      { name: 'clean', kind: 'cleaning', dropAllNullColumns: true },
      { name: 'scale', kind: 'scaling' },
      { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
    ];
    const pipe = new PreprocessingPipeline(cfg);
    pipe.fit(sampleData());
    const payload = pipe.toJSON();

    const restored = PreprocessingPipeline.fromJSON(payload as SerializedPipeline);
    const transformedOriginal = pipe.transform(sampleData());
    const transformedRestored = restored.transform(sampleData());

    expect(transformedRestored).toEqual(transformedOriginal);
  });

  test('edge cases: empty data, single sample, extreme values', () => {
    const cfg: AnyStepConfig[] = [
      { name: 'scale', kind: 'scaling' },
      { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
      { name: 'poly', kind: 'feature_engineering', polynomialDegree: 2 },
    ];
    const pipe = new PreprocessingPipeline(cfg);

    // Empty
    const empty: any[] = [];
    const emptyOut = pipe.fit(empty);
    expect(emptyOut).toEqual([]);

    // Single sample
    const single = [{ a: 1, b: 'x' }];
    pipe.fit(single);
    const singleOut = pipe.transform(single);
    expect(Array.isArray(singleOut)).toBe(true);

    // Extreme values
    const extreme = [
      { a: 1e12, b: 'big' },
      { a: -1e12, b: 'small' },
    ];
    pipe.fit(extreme);
    const out = pipe.transform(extreme);
    expect(out.length).toBe(2);
  });

  test('consistency between training (fit) and inference (transform) sequences', () => {
    const cfg: AnyStepConfig[] = [
      { name: 'clean', kind: 'cleaning', dropAllNullColumns: true },
      { name: 'scale', kind: 'scaling' },
      { name: 'encode', kind: 'encoding', oneHotMaxCategories: 10 },
    ];
    const pipe = new PreprocessingPipeline(cfg);
    const trainTransformed = pipe.fit(sampleData());
    const inferTransformed = pipe.transform(sampleData());
    expect(inferTransformed).toEqual(trainTransformed);
  });
});
