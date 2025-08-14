from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any, Dict, Iterable, Optional, Protocol, Tuple, Union

import numpy as np

try:
    import pandas as pd  # type: ignore
except Exception:  # pragma: no cover - pandas optional
    pd = None  # type: ignore

ArrayLike = Union[np.ndarray, "pd.DataFrame", "pd.Series"]


class Fittable(Protocol):
    """Protocol for fittable objects."""

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "Fittable":
        ...


class Transformer(Protocol):
    """Protocol for transformers supporting transform and optional inverse_transform."""

    def transform(self, X: ArrayLike) -> ArrayLike:  # noqa: D401
        ...

    def inverse_transform(self, X: ArrayLike) -> ArrayLike:
        ...


class BasePreprocessor(ABC):
    """Base class for preprocessing utilities following a fit/transform API.

    Implementations should be stateless prior to ``fit`` and store any fitted
    statistics in instance attributes. Use ``is_fitted`` to signal readiness.
    """

    is_fitted: bool
    feature_names_in_: Optional[Iterable[str]]
    feature_names_out_: Optional[Iterable[str]]

    def __init__(self) -> None:
        self.is_fitted = False
        self.feature_names_in_ = None
        self.feature_names_out_ = None

    @abstractmethod
    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "BasePreprocessor":
        """Fit the preprocessor on X (and optional y)."""
        raise NotImplementedError

    @abstractmethod
    def transform(self, X: ArrayLike) -> ArrayLike:
        """Transform X using the fitted state."""
        raise NotImplementedError

    def fit_transform(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> ArrayLike:
        """Fit the preprocessor on X (and optional y) then transform X."""
        self.fit(X, y)
        return self.transform(X)

    def get_state(self) -> Dict[str, Any]:
        """Return a JSON-serializable dict of the fitted state.

        Subclasses should extend this to include their parameters/statistics.
        """
        return {
            "is_fitted": self.is_fitted,
            "feature_names_in_": list(self.feature_names_in_) if self.feature_names_in_ else None,
            "feature_names_out_": list(self.feature_names_out_) if self.feature_names_out_ else None,
            "class": self.__class__.__name__,
        }

    def set_state(self, state: Dict[str, Any]) -> None:
        """Restore internal state from a dict created by ``get_state``."""
        self.is_fitted = bool(state.get("is_fitted", False))
        self.feature_names_in_ = state.get("feature_names_in_")
        self.feature_names_out_ = state.get("feature_names_out_")


@dataclass
class TrainTransformResult:
    """Container for train/validation transformed splits to avoid leakage."""

    X_train: ArrayLike
    X_valid: ArrayLike
    preprocessor: BasePreprocessor


def is_dataframe(X: ArrayLike) -> bool:
    return pd is not None and isinstance(X, (pd.DataFrame, pd.Series))


def get_columns(X: ArrayLike) -> Optional[Iterable[str]]:
    if is_dataframe(X):
        assert pd is not None
        if isinstance(X, pd.Series):
            return [X.name] if X.name is not None else None
        return list(X.columns)  # type: ignore[no-any-return]
    return None

