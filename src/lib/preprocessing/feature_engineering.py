from __future__ import annotations

from typing import Dict, Iterable, List, Optional, Sequence, cast

import numpy as np

from .core import ArrayLike, BasePreprocessor, get_columns, is_dataframe

try:
    import pandas as pd  # type: ignore
except Exception:  # pragma: no cover - pandas optional
    pd = None  # type: ignore


class ColumnSelector(BasePreprocessor):
    """Select a subset of columns by name (DataFrame) or index (ndarray)."""

    def __init__(self, columns: Sequence[str] | Sequence[int]) -> None:
        super().__init__()
        self.columns = list(columns)

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "ColumnSelector":  # noqa: ARG002
        self.feature_names_in_ = get_columns(X)
        if is_dataframe(X):
            # Validate presence
            assert pd is not None
            missing = [c for c in self.columns if c not in cast(List[str], self.feature_names_in_)]
            if missing:
                raise KeyError(f"Columns not found for selection: {missing}")
            self.feature_names_out_ = self.columns  # type: ignore[assignment]
        else:
            self.feature_names_out_ = None
        self.is_fitted = True
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("ColumnSelector must be fitted before transform().")
        if is_dataframe(X):
            assert pd is not None
            return X.loc[:, self.columns]  # type: ignore[index]
        arr = np.asarray(X)
        return arr[:, self.columns]  # type: ignore[index]


class OneHotEncoder(BasePreprocessor):
    """Minimal one-hot encoder for categorical columns (DataFrame only)."""

    def __init__(self, columns: Sequence[str], drop_first: bool = False) -> None:
        super().__init__()
        self.columns = list(columns)
        self.drop_first = drop_first
        self.categories_: Dict[str, List[str]] = {}

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "OneHotEncoder":  # noqa: ARG002
        if not is_dataframe(X):
            raise TypeError("OneHotEncoder requires a pandas DataFrame input.")
        assert pd is not None
        self.feature_names_in_ = list(X.columns)  # type: ignore[attr-defined]
        for col in self.columns:
            cats = pd.Index(X[col].astype("category").cat.categories).tolist()
            if self.drop_first and cats:
                cats = cats[1:]
            self.categories_[col] = cats
        # Compute feature names out
        other_cols = [c for c in self.feature_names_in_ if c not in self.columns]  # type: ignore[operator]
        ohe_cols: List[str] = []
        for col, cats in self.categories_.items():
            ohe_cols.extend([f"{col}__{cat}" for cat in cats])
        self.feature_names_out_ = [*other_cols, *ohe_cols]
        self.is_fitted = True
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("OneHotEncoder must be fitted before transform().")
        assert pd is not None
        if not is_dataframe(X):
            raise TypeError("OneHotEncoder requires a pandas DataFrame input.")
        df: pd.DataFrame = X  # type: ignore[assignment]
        df_other = df.drop(columns=self.columns, errors="ignore")
        ohe_frames: List[pd.DataFrame] = [df_other]
        for col, cats in self.categories_.items():
            present = pd.Categorical(df[col], categories=[*([None] if False else []), *cats])
            frame = pd.DataFrame({f"{col}__{cat}": (present == cat).astype(int) for cat in cats}, index=df.index)
            ohe_frames.append(frame)
        result = pd.concat(ohe_frames, axis=1)
        # Reorder columns if feature_names_out_ is known
        if self.feature_names_out_:
            result = result.reindex(columns=self.feature_names_out_)
        return result


class DateTimeFeatures(BasePreprocessor):
    """Extract common datetime-derived features from datetime columns."""

    def __init__(self, columns: Sequence[str], features: Sequence[str] = ("year", "month", "day", "dow", "hour")) -> None:
        super().__init__()
        self.columns = list(columns)
        self.features = list(features)

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "DateTimeFeatures":  # noqa: ARG002
        if not is_dataframe(X):
            raise TypeError("DateTimeFeatures requires a pandas DataFrame input.")
        self.feature_names_in_ = get_columns(X)
        # feature names out are input cols + derived cols
        derived: List[str] = []
        for col in self.columns:
            for f in self.features:
                derived.append(f"{col}_{f}")
        others = [c for c in (self.feature_names_in_ or []) if c not in self.columns]
        self.feature_names_out_ = [*others, *derived]
        self.is_fitted = True
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("DateTimeFeatures must be fitted before transform().")
        if not is_dataframe(X):
            raise TypeError("DateTimeFeatures requires a pandas DataFrame input.")
        assert pd is not None
        df: pd.DataFrame = X  # type: ignore[assignment]
        out = df.drop(columns=self.columns, errors="ignore").copy()
        for col in self.columns:
            s = pd.to_datetime(df[col], errors="coerce")
            if "year" in self.features:
                out[f"{col}_year"] = s.dt.year
            if "month" in self.features:
                out[f"{col}_month"] = s.dt.month
            if "day" in self.features:
                out[f"{col}_day"] = s.dt.day
            if "dow" in self.features:
                out[f"{col}_dow"] = s.dt.dayofweek
            if "hour" in self.features:
                out[f"{col}_hour"] = s.dt.hour
        if self.feature_names_out_:
            out = out.reindex(columns=self.feature_names_out_)
        return out

