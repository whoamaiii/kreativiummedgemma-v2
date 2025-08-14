# Preprocessing Schema Versioning Strategy

This document explains how preprocessing schemas evolve and how compatibility is maintained across
versions.

## Goals

- Preserve reproducibility of preprocessing transformations over time
- Allow safe evolution of step configs and defaults
- Provide clear upgrade paths with migration notes

## Version Sources

- Pipeline Version: Embedded constant inside `PreprocessingPipeline` and serialized payloads
  (`payload.version`).
- Config Hash: Stable hash of the pipeline configuration (minus runtime `when` functions) recorded
  in metadata.
- Data Schema Snapshot: Columns and inferred types of the training dataset recorded in metadata.

## SemVer Policy

- MAJOR: Breaking changes to step semantics, serialized shape, or metadata layout.
- MINOR: Backward-compatible feature additions (new step kinds, optional params, metadata fields).
- PATCH: Bug fixes or non-behavioral improvements.

## Backward Compatibility

- `PreprocessingPipeline.fromJSON(payload)` remains able to load payloads from the same MAJOR
  version.
- Metadata may include additional fields; consumers must not rely on exact key sets.
- Step parameters are versioned implicitly via the pipeline version; avoid removing fields within
  the same MAJOR.

## Data Schema Changes

- Metadata includes a snapshot of the training-time data schema (columns and inferred types).
- Downstream systems may compare current data schema to the metadata snapshot to detect drift or
  mismatches.

## Upgrading

1. Review the CHANGELOG for preprocessing-related entries.
2. If MAJOR changed, consult Migration Guide for required code updates.
3. For MINOR/PATCH changes, serialized pipelines remain compatible; consider re-fitting to benefit
   from new features.

## Example Payload

```json
{
  "version": "1.0.0",
  "config": [
    { "name": "clean", "kind": "cleaning", "dropAllNullColumns": true },
    { "name": "scale", "kind": "scaling" }
  ],
  "fitted": [
    { "name": "clean", "kind": "cleaning", "params": { "dropCols": ["tmp"], "trimStrings": true } },
    {
      "name": "scale",
      "kind": "scaling",
      "params": { "means": { "a": 0 }, "stds": { "a": 1 }, "method": "standard" }
    }
  ],
  "metadata": {
    "createdAt": "2025-02-25T10:45:23.123Z",
    "pipelineVersion": "1.0.0",
    "configHash": "abc123...",
    "dataSchema": {
      "columns": ["a", "b", "note"],
      "inferredTypes": { "a": "number", "b": "string", "note": "string" }
    },
    "notes": "fitted on dataset v3"
  }
}
```

## Validation and CI

- Tests in `tests/integration/pipeline_persistence_integration.test.ts` assert that serialized
  pipelines can be recovered and produce identical transforms.
- Add tests when evolving serialization to ensure compatibility.
