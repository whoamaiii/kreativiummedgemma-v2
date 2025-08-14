import json
import numpy as np
import pandas as pd

from src.lib.preprocessing.schema import (
    ColumnSpec,
    DatasetSchema,
    MigrationRegistry,
    MigrationStep,
    SchemaVersion,
)


def test_schema_version_order_and_compat():
    v1 = SchemaVersion.from_string("1.0.0")
    v1_1 = SchemaVersion.from_string("1.1.0")
    v2 = SchemaVersion.from_string("2.0.0")
    assert v1 < v1_1 < v2
    assert v1_1.is_backward_compatible_with(v1)
    assert not v2.is_backward_compatible_with(v1)


def test_schema_validate_and_backward_report():
    schema_v1 = DatasetSchema(
        columns=[
            ColumnSpec("a", "float"),
            ColumnSpec("b", "int", required=False),
            ColumnSpec("c", "string", pattern=r"^[a-z]+$")
        ],
        target="b",
        version=SchemaVersion.from_string("1.0.0"),
    )

    df = pd.DataFrame({
        'a': [0.1, 0.2, 0.3],
        'b': [1, 2, 3],
        'c': ['abc', 'def', 'ghi']
    })

    schema_v1.validate(df)  # should not raise

    schema_v2 = DatasetSchema(
        columns=[
            ColumnSpec("a", "float"),
            ColumnSpec("b", "int", required=True, min=0, max=10),
            ColumnSpec("d", "string", required=False)
        ],
        target="b",
        version=SchemaVersion.from_string("1.1.0"),
    )

    report = schema_v2.backward_compatibility_report(schema_v1)
    assert isinstance(report["compatible"], bool)
    assert any("Added" in m for m in report["non_breaking"]) or any("Removed" in m for m in report["breaking"])  # sanity


def test_migration_registry_and_plan():
    reg = MigrationRegistry()
    v1 = SchemaVersion.from_string("1.0.0")
    v1_1 = SchemaVersion.from_string("1.1.0")
    v1_2 = SchemaVersion.from_string("1.2.0")

    def step_1(df):
        # add column d default
        df = df.copy()
        df['d'] = 'x'
        return df

    def step_2(df):
        df = df.copy()
        df['a'] = df['a'] * 2
        return df

    reg.register(MigrationStep(from_version=v1, to_version=v1_1, func=step_1))
    reg.register(MigrationStep(from_version=v1_1, to_version=v1_2, func=step_2))

    df0 = pd.DataFrame({'a': np.array([1.0, 2.0]), 'b': [1, 2], 'c': ['aa', 'bb']})
    df1 = reg.migrate(df0, v1, v1_2)

    assert 'd' in df1.columns
    assert np.allclose(df1['a'].to_numpy(), np.array([2.0, 4.0]))
