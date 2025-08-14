from __future__ import annotations

from dataclasses import dataclass, field
from functools import total_ordering
from typing import Any, Callable, Dict, Iterable, List, Literal, Optional, Pattern, Sequence, Tuple, Union, cast
import json
import re

try:
    import pandas as pd  # type: ignore
except Exception:  # pragma: no cover - pandas optional
    pd = None  # type: ignore

DType = Literal[
    "float", "int", "string", "bool", "datetime",
]


@total_ordering
@dataclass(frozen=True)
class SchemaVersion:
    """Semantic version for dataset schemas.

    - Comparable and hashable
    - Parse from string via from_string
    - Backward-compatibility check helpers
    """

    major: int = 1
    minor: int = 0
    patch: int = 0

    def __str__(self) -> str:  # pragma: no cover - trivial
        return f"{self.major}.{self.minor}.{self.patch}"

    def to_tuple(self) -> Tuple[int, int, int]:  # pragma: no cover - trivial
        return (self.major, self.minor, self.patch)

    @classmethod
    def from_string(cls, s: str) -> "SchemaVersion":
        parts = s.strip().split(".")
        if len(parts) != 3 or not all(p.isdigit() for p in parts):
            raise ValueError(f"Invalid schema version: {s}")
        major, minor, patch = (int(parts[0]), int(parts[1]), int(parts[2]))
        return cls(major, minor, patch)

    def __lt__(self, other: object) -> bool:
        if not isinstance(other, SchemaVersion):
            return NotImplemented
        return self.to_tuple() < other.to_tuple()

    def __eq__(self, other: object) -> bool:  # pragma: no cover - trivial
        if not isinstance(other, SchemaVersion):
            return False
        return self.to_tuple() == other.to_tuple()

    def bump(self, part: Literal["major", "minor", "patch"]) -> "SchemaVersion":
        """Return a new version bumped by the specified part."""
        if part == "major":
            return SchemaVersion(self.major + 1, 0, 0)
        if part == "minor":
            return SchemaVersion(self.major, self.minor + 1, 0)
        return SchemaVersion(self.major, self.minor, self.patch + 1)

    def is_backward_compatible_with(self, previous: "SchemaVersion") -> bool:
        """By semver, backward compatible if same major and not lower than previous."""
        return self.major == previous.major and self >= previous


@dataclass
class ColumnSpec:
    name: str
    dtype: DType
    required: bool = True
    # Validation constraints
    allow_nulls: bool = False
    min: Optional[float] = None  # for int/float
    max: Optional[float] = None  # for int/float
    enum: Optional[List[Union[str, int, float, bool]]] = None  # for string/number/bool
    pattern: Optional[Union[str, Pattern[str]]] = None  # for string regex
    min_length: Optional[int] = None  # for string
    max_length: Optional[int] = None  # for string

    def to_dict(self) -> Dict[str, Any]:  # pragma: no cover - trivial
        return {
            "name": self.name,
            "dtype": self.dtype,
            "required": self.required,
            "allow_nulls": self.allow_nulls,
            "min": self.min,
            "max": self.max,
            "enum": self.enum,
            "pattern": self.pattern.pattern if isinstance(self.pattern, re.Pattern) else self.pattern,
            "min_length": self.min_length,
            "max_length": self.max_length,
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "ColumnSpec":
        pat = data.get("pattern")
        compiled: Optional[Pattern[str]] = re.compile(pat) if isinstance(pat, str) else None
        return cls(
            name=data["name"],
            dtype=cast(DType, data["dtype"]),
            required=bool(data.get("required", True)),
            allow_nulls=bool(data.get("allow_nulls", False)),
            min=data.get("min"),
            max=data.get("max"),
            enum=data.get("enum"),
            pattern=compiled,
            min_length=data.get("min_length"),
            max_length=data.get("max_length"),
        )


@dataclass
class DatasetSchema:
    """Dataset schema with versioning and validation utilities."""

    columns: List[ColumnSpec]
    target: Optional[str] = None
    version: SchemaVersion = field(default_factory=SchemaVersion)

    # ----- Serialization -----
    def to_dict(self) -> Dict[str, object]:
        return {
            "version": str(self.version),
            "columns": [c.to_dict() for c in self.columns],
            "target": self.target,
        }

    def to_json(self) -> str:  # pragma: no cover - trivial
        return json.dumps(self.to_dict(), ensure_ascii=False, sort_keys=True)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "DatasetSchema":
        version = SchemaVersion.from_string(cast(str, data["version"]))
        cols = [ColumnSpec.from_dict(c) for c in cast(Iterable[Dict[str, Any]], data["columns"])]
        return cls(columns=list(cols), target=cast(Optional[str], data.get("target")), version=version)

    @classmethod
    def from_json(cls, s: str) -> "DatasetSchema":  # pragma: no cover - trivial
        return cls.from_dict(json.loads(s))

    # ----- Validation -----
    def _map_dtype(self, series) -> DType:
        # Lazy import guard
        import numpy as np  # local import to avoid hard dep at module load

        if pd is None:
            raise RuntimeError("pandas is required for schema validation")
        if series.dtype.kind in ("f",):
            return "float"
        if series.dtype.kind in ("i", "u"):
            return "int"
        if series.dtype.kind in ("b",):
            return "bool"
        if np.issubdtype(series.dtype, np.datetime64):
            return "datetime"
        return "string"

    def validate(self, df) -> None:
        """Validate a pandas DataFrame against the schema.

        Raises ValueError on first validation failure.
        """
        if pd is None:
            raise RuntimeError("pandas is required for schema validation")
        import pandas as _pd  # type: ignore
        import numpy as _np  # type: ignore

        if not isinstance(df, _pd.DataFrame):
            raise TypeError("validate expects a pandas DataFrame")
        # Required columns
        required = [c.name for c in self.columns if c.required]
        missing = [c for c in required if c not in df.columns]
        if missing:
            raise ValueError(f"Missing required columns: {missing}")
        # DType checks and constraints
        spec_by_name = {c.name: c for c in self.columns}
        for name, spec in spec_by_name.items():
            if name not in df.columns:
                continue
            series = df[name]
            observed = self._map_dtype(series)
            if observed != spec.dtype:
                raise ValueError(f"Column '{name}' dtype mismatch: expected {spec.dtype}, got {observed}")

            # Nullability
            if not spec.allow_nulls and series.isna().any():
                raise ValueError(f"Column '{name}' contains nulls but allow_nulls is False")

            # Numeric ranges
            if spec.dtype in ("int", "float"):
                if spec.min is not None:
                    if (_np.nanmin(series.to_numpy()) < spec.min):
                        raise ValueError(f"Column '{name}' below minimum {spec.min}")
                if spec.max is not None:
                    if (_np.nanmax(series.to_numpy()) > spec.max):
                        raise ValueError(f"Column '{name}' above maximum {spec.max}")
                if spec.enum is not None:
                    invalid = ~series.isin(spec.enum)
                    if invalid.any():
                        raise ValueError(f"Column '{name}' has values outside enum {spec.enum}")

            # String constraints
            if spec.dtype == "string":
                ser = series.astype(str)
                if spec.min_length is not None and (ser.str.len() < spec.min_length).any():
                    raise ValueError(f"Column '{name}' has strings shorter than min_length {spec.min_length}")
                if spec.max_length is not None and (ser.str.len() > spec.max_length).any():
                    raise ValueError(f"Column '{name}' has strings longer than max_length {spec.max_length}")
                if spec.pattern is not None:
                    pat = spec.pattern.pattern if isinstance(spec.pattern, re.Pattern) else spec.pattern
                    assert isinstance(pat, str)
                    if (~ser.str.match(pat, na=False)).any():
                        raise ValueError(f"Column '{name}' has strings not matching pattern {pat}")
                if spec.enum is not None:
                    invalid = ~ser.isin(spec.enum)
                    if invalid.any():
                        raise ValueError(f"Column '{name}' has values outside enum {spec.enum}")

            # Datetime ranges
            if spec.dtype == "datetime":
                # min/max interpreted as timestamps if provided
                if spec.min is not None:
                    if (series < _pd.to_datetime(spec.min, unit="s", errors="coerce")).any():
                        raise ValueError(f"Column '{name}' has datetimes before min {spec.min}")
                if spec.max is not None:
                    if (series > _pd.to_datetime(spec.max, unit="s", errors="coerce")).any():
                        raise ValueError(f"Column '{name}' has datetimes after max {spec.max}")

        # Target presence
        if self.target and self.target not in df.columns:
            raise ValueError(f"Target column '{self.target}' is not present in the dataset")

    # ----- Backward compatibility checks -----
    def backward_compatibility_report(self, previous: "DatasetSchema") -> Dict[str, Any]:
        """Compare this schema to a previous schema.

        Returns a dict with keys: compatible(bool), breaking(list), non_breaking(list)
        """
        breaking: List[str] = []
        non_breaking: List[str] = []

        prev_cols = {c.name: c for c in previous.columns}
        curr_cols = {c.name: c for c in self.columns}

        # Removed columns
        removed = set(prev_cols) - set(curr_cols)
        if removed:
            for n in sorted(removed):
                breaking.append(f"Removed column '{n}'")

        # Added columns (non-breaking if not required)
        added = set(curr_cols) - set(prev_cols)
        for n in sorted(added):
            if curr_cols[n].required:
                non_breaking.append(f"Added required column '{n}' (may break existing data)")
            else:
                non_breaking.append(f"Added optional column '{n}'")

        # Modified columns
        for name in sorted(set(prev_cols) & set(curr_cols)):
            prev = prev_cols[name]
            curr = curr_cols[name]
            if prev.dtype != curr.dtype:
                breaking.append(f"Column '{name}' dtype change {prev.dtype} -> {curr.dtype}")
            if prev.required and not curr.required:
                non_breaking.append(f"Column '{name}' became optional")
            if not prev.required and curr.required:
                breaking.append(f"Column '{name}' became required")
            # Constraint tightening can be breaking
            if (prev.min is not None and curr.min is not None) and curr.min > prev.min:
                breaking.append(f"Column '{name}' min increased {prev.min} -> {curr.min}")
            if (prev.max is not None and curr.max is not None) and curr.max < prev.max:
                breaking.append(f"Column '{name}' max decreased {prev.max} -> {curr.max}")
            if prev.enum and curr.enum:
                if set(curr.enum) - set(prev.enum):
                    breaking.append(f"Column '{name}' enum restricted to {curr.enum}")
            if isinstance(prev.pattern, re.Pattern):
                prev_pat = prev.pattern.pattern
            else:
                prev_pat = prev.pattern
            if isinstance(curr.pattern, re.Pattern):
                curr_pat = curr.pattern.pattern
            else:
                curr_pat = curr.pattern
            if prev_pat != curr_pat and curr_pat is not None:
                # new or changed pattern is usually breaking
                breaking.append(f"Column '{name}' pattern changed")

        compatible = len(breaking) == 0 and self.version.is_backward_compatible_with(previous.version)
        return {"compatible": compatible, "breaking": breaking, "non_breaking": non_breaking}


# ----- Migration utilities -----
@dataclass(frozen=True)
class MigrationStep:
    from_version: SchemaVersion
    to_version: SchemaVersion
    func: Callable[[Any], Any]  # expects and returns a DataFrame-like


class MigrationRegistry:
    def __init__(self) -> None:
        self._steps: Dict[Tuple[SchemaVersion, SchemaVersion], MigrationStep] = {}

    def register(self, step: MigrationStep) -> None:
        key = (step.from_version, step.to_version)
        if key in self._steps:
            raise ValueError(f"Migration {step.from_version} -> {step.to_version} already registered")
        self._steps[key] = step

    def get(self, from_v: SchemaVersion, to_v: SchemaVersion) -> Optional[MigrationStep]:  # pragma: no cover - trivial
        return self._steps.get((from_v, to_v))

    def plan(self, from_v: SchemaVersion, to_v: SchemaVersion) -> List[MigrationStep]:
        """Compute a linear plan of migrations.

        Assumes steps are registered for each consecutive patch/minor/major as needed.
        """
        if from_v == to_v:
            return []
        # Greedy forward progression by available next step
        current = from_v
        plan: List[MigrationStep] = []
        visited: set[SchemaVersion] = set()
        # Avoid infinite loops if misconfigured
        while current != to_v:
            visited.add(current)
            # find any step starting at current that moves us closer (by tuple comparison)
            candidates = [s for (f, _), s in self._steps.items() if f == current]
            if not candidates:
                raise ValueError(f"No migration step registered from {current} towards {to_v}")
            # choose the smallest to_version that is > current (to keep linear)
            candidates = [c for c in candidates if c.to_version > current]
            if not candidates:
                raise ValueError(f"No forward migration step from {current}")
            next_step = sorted(candidates, key=lambda s: s.to_version)[0]
            plan.append(next_step)
            current = next_step.to_version
            if current in visited:
                raise ValueError("Cyclic migration steps detected")
            if current > to_v:
                # Allow overshoot only if exact step to target exists later; otherwise error
                pass
        # Optionally compact plan if last step overshoots (shouldn't with above logic)
        return plan

    def migrate(self, df: Any, from_v: SchemaVersion, to_v: SchemaVersion) -> Any:
        for step in self.plan(from_v, to_v):
            df = step.func(df)
        return df


# ----- Schema evolution tracking -----
@dataclass
class EvolutionEntry:
    version: SchemaVersion
    schema_snapshot: Dict[str, Any]
    description: Optional[str] = None


class SchemaEvolutionTracker:
    def __init__(self) -> None:
        self.history: List[EvolutionEntry] = []

    def record(self, schema: DatasetSchema, description: Optional[str] = None) -> None:
        self.history.append(EvolutionEntry(schema.version, schema.to_dict(), description))

    def latest(self) -> Optional[EvolutionEntry]:  # pragma: no cover - trivial
        return self.history[-1] if self.history else None

    def as_json(self) -> str:  # pragma: no cover - trivial
        return json.dumps([{
            "version": str(e.version),
            "schema": e.schema_snapshot,
            "description": e.description,
        } for e in self.history], ensure_ascii=False, indent=2)
