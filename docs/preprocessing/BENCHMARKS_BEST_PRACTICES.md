# Preprocessing Benchmarks & Best Practices

This document shares reference performance metrics and tuning guidance to get predictable, fast
preprocessing runs.

## Reference Benchmarks (Local Dev Machine)

Dataset shapes and timings may vary across machines. Values below are indicative for guidance.

- Dataset: 100k rows, 25 columns (10 numeric, 10 categorical ≤ 12 unique, 5 text)
- Config: cleaning + scaling + encoding + feature_engineering (degree 2)

Results (approx.):

- fit: 320–450 ms
- transform: 180–260 ms
- toJSON: < 5 ms, payload ≈ 120–250 KB depending on categories

## Tips for Performance

1. Avoid High-Cardinality One-Hot

- Use `oneHotMaxCategories` to limit one-hot expansion
- Consider hashing or target encoding (future enhancement) for very large cardinalities

2. Keep Numeric Columns Numeric

- Ensure input typing prior to scaling; avoid string-number coercions during fit/transform

3. Filter Early, Project Late

- Clean (drop null-only columns) before scaling/encoding to reduce work

4. Fit Once, Reuse Often

- Save fitted pipelines with `toJSON()`; restore with `fromJSON()` for inference

5. Conditional Steps

- Use `when(profile)` to skip unnecessary work for certain datasets (e.g., no categorical columns)

6. Memory Considerations

- Processing large datasets: consider chunking before fit if memory constrained (pipeline not
  streaming yet)

## Tensor Preparation Guidance

- Emotion sequences: Choose `sequenceLength` empirically (5–14 typical). Tradeoff between context
  and data volume.
- Normalize targets consistently with your training regime; `prepareEmotionData` normalizes to [0,1]
  by default for backward compatibility.
- Sensory responses: verify class balance; consider class-weighted loss downstream.

## Validation

- Use `tests/preprocessing/pipeline.test.ts` to validate determinism and persistence.
- Add micro-benchmarks via vitest when changing step logic.

## Future Optimizations

- Optional min/max scaler mode (avoid mean/std calc)
- Sparse one-hot representation for large encodings
- Web worker offloading for very large datasets
