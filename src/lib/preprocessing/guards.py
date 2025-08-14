from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Sequence, Tuple

import numpy as np

from .core import ArrayLike, BasePreprocessor, TrainTransformResult, get_columns, is_dataframe

try:
    import pandas as pd  # type: ignore
except Exception:  # pragma: no cover - pandas optional
    pd = None  # type: ignore


def check_no_target_in_features(X: ArrayLike, y: Optional[ArrayLike], target_name: Optional[str] = None) -> None:
    """Guard against target leakage by ensuring target is not among features.

    If ``target_name`` is provided and X is a DataFrame, verify that column is not present.
    If y is an array/Series equal to a column in X by identity, raise.
    """
    if target_name and is_dataframe(X):
        assert pd is not None
        if target_name in X.columns:  # type: ignore[attr-defined]
            raise ValueError(f"Target leakage: '{target_name}' found in feature columns")
    if y is not None and is_dataframe(X):
        assert pd is not None
        if isinstance(y, pd.Series):
            # If indexes and values match a column exactly, warn/raise
            for col in X.columns:  # type: ignore[attr-defined]
                s = X[col]
                if s.index.equals(y.index) and np.allclose(np.asarray(s), np.asarray(y), equal_nan=True):  # type: ignore[arg-type]
                    raise ValueError(f"Target leakage: y is identical to feature column '{col}'")


def fit_on_train_apply_to_splits(preprocessor: BasePreprocessor, X_train: ArrayLike, X_valid: ArrayLike, y_train: Optional[ArrayLike] = None) -> TrainTransformResult:
    """Fit preprocessor on training split only and apply to both splits.

    This enforces the no-leakage rule during cross-validation or holdout evaluation.
    """
    preprocessor.fit(X_train, y_train)
    Xtr = preprocessor.transform(X_train)
    Xva = preprocessor.transform(X_valid)
    return TrainTransformResult(X_train=Xtr, X_valid=Xva, preprocessor=preprocessor)


def assert_disjoint_indices(a: ArrayLike, b: ArrayLike) -> None:
    """Ensure two DataFrame indices (if present) are disjoint to prevent leakage across splits."""
    if is_dataframe(a) and is_dataframe(b):
        assert pd is not None
        ia = a.index if hasattr(a, "index") else None
        ib = b.index if hasattr(b, "index") else None
        if ia is not None and ib is not None:
            inter = ia.intersection(ib)
            if len(inter) > 0:
                raise ValueError("Data leakage: training and validation indices overlap")


@dataclass
class TemporalSplitGuard:
    """Guard enforcing train/validation temporal ordering for time series data."""

    time_column: str

    def validate(self, train_df, valid_df) -> None:
        if not is_dataframe(train_df) or not is_dataframe(valid_df):
            raise TypeError("TemporalSplitGuard requires pandas DataFrames")
        assert pd is not None
        if self.time_column not in train_df.columns or self.time_column not in valid_df.columns:
            raise ValueError(f"Time column '{self.time_column}' missing in one of the splits")
        t_max = pd.to_datetime(train_df[self.time_column]).max()
        v_min = pd.to_datetime(valid_df[self.time_column]).min()
        if t_max > v_min:
            raise ValueError("Temporal leakage: training data extends beyond the start of validation period")

