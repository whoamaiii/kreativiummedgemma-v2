from __future__ import annotations

from typing import Optional, Sequence, Union

import math
import numpy as np

from .core import ArrayLike, BasePreprocessor, get_columns, is_dataframe

try:
    import pandas as pd  # type: ignore
except Exception:  # pragma: no cover - pandas optional
    pd = None  # type: ignore


Number = Union[int, float]


def _to_numpy_2d(X: ArrayLike) -> np.ndarray:
    if is_dataframe(X):
        assert pd is not None
        if isinstance(X, pd.Series):
            return X.to_numpy().reshape(-1, 1)
        return X.to_numpy()
    arr = np.asarray(X)
    if arr.ndim == 1:
        arr = arr.reshape(-1, 1)
    return arr


def _from_numpy_like(template: ArrayLike, X_np: np.ndarray) -> ArrayLike:
    if is_dataframe(template):
        assert pd is not None
        if isinstance(template, pd.Series):
            s = pd.Series(X_np.ravel(), index=template.index, name=template.name)
            return s
        return pd.DataFrame(X_np, index=template.index, columns=template.columns)
    return X_np


class RobustScaler(BasePreprocessor):
    """Scale features using statistics robust to outliers.

    Centers by median and scales by IQR (Q3 - Q1). If IQR is 0, falls back to 1
    to avoid division by zero, leaving that feature unscaled (after centering).
    """

    def __init__(self, with_centering: bool = True, with_scaling: bool = True, quantile_range: Sequence[Number] = (25.0, 75.0)) -> None:
        super().__init__()
        if len(quantile_range) != 2:
            raise ValueError("quantile_range must be a sequence of length 2")
        self.with_centering = with_centering
        self.with_scaling = with_scaling
        self.quantile_range = (float(quantile_range[0]), float(quantile_range[1]))
        self.center_: Optional[np.ndarray] = None
        self.scale_: Optional[np.ndarray] = None

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "RobustScaler":  # noqa: ARG002
        cols = get_columns(X)
        self.feature_names_in_ = cols
        X_np = _to_numpy_2d(X)
        q_min, q_max = np.percentile(X_np, self.quantile_range, axis=0)
        iqr = q_max - q_min
        iqr[iqr == 0] = 1.0
        self.center_ = np.median(X_np, axis=0) if self.with_centering else np.zeros(X_np.shape[1])
        self.scale_ = iqr if self.with_scaling else np.ones(X_np.shape[1])
        self.is_fitted = True
        self.feature_names_out_ = cols
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("RobustScaler must be fitted before calling transform().")
        assert self.center_ is not None and self.scale_ is not None
        X_np = _to_numpy_2d(X)
        X_scaled = (X_np - self.center_) / self.scale_
        return _from_numpy_like(X, X_scaled)

    def inverse_transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("RobustScaler must be fitted before calling inverse_transform().")
        assert self.center_ is not None and self.scale_ is not None
        X_np = _to_numpy_2d(X)
        X_inv = X_np * self.scale_ + self.center_
        return _from_numpy_like(X, X_inv)


class MedianMADScaler(BasePreprocessor):
    """Scale by Median and Median Absolute Deviation (MAD).

    Robust alternative to standard scaling.
    """

    def __init__(self, with_centering: bool = True, constant: float = 1.4826) -> None:
        super().__init__()
        self.with_centering = with_centering
        self.constant = float(constant)
        self.center_: Optional[np.ndarray] = None
        self.scale_: Optional[np.ndarray] = None

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "MedianMADScaler":  # noqa: ARG002
        cols = get_columns(X)
        self.feature_names_in_ = cols
        X_np = _to_numpy_2d(X)
        med = np.median(X_np, axis=0)
        mad = np.median(np.abs(X_np - med), axis=0)
        mad[mad == 0] = 1.0
        self.center_ = med if self.with_centering else np.zeros(X_np.shape[1])
        self.scale_ = mad * self.constant
        self.is_fitted = True
        self.feature_names_out_ = cols
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("MedianMADScaler must be fitted before calling transform().")
        assert self.center_ is not None and self.scale_ is not None
        X_np = _to_numpy_2d(X)
        X_scaled = (X_np - self.center_) / self.scale_
        return _from_numpy_like(X, X_scaled)

    def inverse_transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("MedianMADScaler must be fitted before calling inverse_transform().")
        assert self.center_ is not None and self.scale_ is not None
        X_np = _to_numpy_2d(X)
        X_inv = X_np * self.scale_ + self.center_
        return _from_numpy_like(X, X_inv)


class StandardScaler(BasePreprocessor):
    """Standardize features by removing the mean and scaling to unit variance.

    Includes optional outlier detection and clipping.
    """

    def __init__(
        self,
        with_mean: bool = True,
        with_std: bool = True,
        outlier_detection: str = "none",  # 'none' | 'zscore' | 'iqr'
        zscore_thresh: float = 3.0,
        iqr_multiplier: float = 1.5,
        clip_outliers: bool = False,
        exclude_outliers_from_fit: bool = True,
    ) -> None:
        super().__init__()
        if outlier_detection not in ("none", "zscore", "iqr"):
            raise ValueError("outlier_detection must be 'none', 'zscore', or 'iqr'")
        self.with_mean = with_mean
        self.with_std = with_std
        self.outlier_detection = outlier_detection
        self.zscore_thresh = float(zscore_thresh)
        self.iqr_multiplier = float(iqr_multiplier)
        self.clip_outliers = clip_outliers
        self.exclude_outliers_from_fit = exclude_outliers_from_fit
        self.mean_: Optional[np.ndarray] = None
        self.scale_: Optional[np.ndarray] = None
        self.outlier_mask_: Optional[np.ndarray] = None  # shape (n_samples, n_features)
        self.bounds_: Optional[tuple[np.ndarray, np.ndarray]] = None  # (lower, upper)

    def _compute_outlier_bounds(self, X_np: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
        n_features = X_np.shape[1]
        lower = np.full(n_features, -np.inf)
        upper = np.full(n_features, np.inf)
        if self.outlier_detection == "none":
            mask = np.zeros_like(X_np, dtype=bool)
            return lower, upper, mask
        if self.outlier_detection == "zscore":
            mu = np.mean(X_np, axis=0)
            sigma = np.std(X_np, axis=0, ddof=0)
            sigma[sigma == 0] = np.inf  # avoid div by zero; no outliers if sigma==0
            lower = mu - self.zscore_thresh * sigma
            upper = mu + self.zscore_thresh * sigma
        else:  # iqr
            q1, q3 = np.percentile(X_np, [25, 75], axis=0)
            iqr = q3 - q1
            iqr[iqr == 0] = np.inf
            k = self.iqr_multiplier
            lower = q1 - k * iqr
            upper = q3 + k * iqr
        mask = (X_np < lower) | (X_np > upper)
        return lower, upper, mask

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "StandardScaler":  # noqa: ARG002
        cols = get_columns(X)
        self.feature_names_in_ = cols
        X_np = _to_numpy_2d(X)
        lower, upper, mask = self._compute_outlier_bounds(X_np)
        self.outlier_mask_ = mask
        self.bounds_ = (lower, upper)
        X_used = X_np
        if self.exclude_outliers_from_fit and self.outlier_detection != "none":
            # mask True indicates outlier at position; include only non-outlier rows per feature when computing stats
            # Compute mean/std feature-wise ignoring outliers
            means = np.empty(X_np.shape[1])
            stds = np.empty(X_np.shape[1])
            for j in range(X_np.shape[1]):
                col = X_np[:, j]
                m = mask[:, j]
                data = col[~m]
                if data.size == 0:
                    data = col  # fallback to all
                means[j] = np.mean(data) if self.with_mean else 0.0
                s = np.std(data, ddof=0)
                stds[j] = s if self.with_std else 1.0
            stds[stds == 0] = 1.0
            self.mean_ = means
            self.scale_ = stds
        else:
            self.mean_ = np.mean(X_used, axis=0) if self.with_mean else np.zeros(X_np.shape[1])
            std = np.std(X_used, axis=0, ddof=0)
            std[std == 0] = 1.0
            self.scale_ = std if self.with_std else np.ones(X_np.shape[1])
        self.is_fitted = True
        self.feature_names_out_ = cols
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("StandardScaler must be fitted before calling transform().")
        assert self.mean_ is not None and self.scale_ is not None
        X_np = _to_numpy_2d(X)
        if self.clip_outliers and self.bounds_ is not None:
            lower, upper = self.bounds_
            X_np = np.clip(X_np, lower, upper)
        X_scaled = (X_np - self.mean_) / self.scale_
        return _from_numpy_like(X, X_scaled)

    def inverse_transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("StandardScaler must be fitted before calling inverse_transform().")
        assert self.mean_ is not None and self.scale_ is not None
        X_np = _to_numpy_2d(X)
        X_inv = X_np * self.scale_ + self.mean_
        return _from_numpy_like(X, X_inv)


class MinMaxScaler(BasePreprocessor):
    """Transform features by scaling each feature to a given range (default [0, 1])."""

    def __init__(self, feature_range: Sequence[Number] = (0.0, 1.0), clip: bool = False) -> None:
        super().__init__()
        if len(feature_range) != 2:
            raise ValueError("feature_range must be a sequence of length 2")
        fr_min, fr_max = float(feature_range[0]), float(feature_range[1])
        if fr_min >= fr_max:
            raise ValueError("feature_range min must be < max")
        self.feature_range = (fr_min, fr_max)
        self.clip = clip
        self.data_min_: Optional[np.ndarray] = None
        self.data_max_: Optional[np.ndarray] = None
        self.data_range_: Optional[np.ndarray] = None
        self.scale_: Optional[np.ndarray] = None
        self.min_offset_: Optional[np.ndarray] = None

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "MinMaxScaler":  # noqa: ARG002
        cols = get_columns(X)
        self.feature_names_in_ = cols
        X_np = _to_numpy_2d(X)
        data_min = np.min(X_np, axis=0)
        data_max = np.max(X_np, axis=0)
        data_range = data_max - data_min
        data_range[data_range == 0] = 1.0
        fr_min, fr_max = self.feature_range
        scale = (fr_max - fr_min) / data_range
        min_offset = fr_min - data_min * scale
        self.data_min_ = data_min
        self.data_max_ = data_max
        self.data_range_ = data_range
        self.scale_ = scale
        self.min_offset_ = min_offset
        self.is_fitted = True
        self.feature_names_out_ = cols
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("MinMaxScaler must be fitted before calling transform().")
        assert self.scale_ is not None and self.min_offset_ is not None
        X_np = _to_numpy_2d(X)
        X_scaled = X_np * self.scale_ + self.min_offset_
        if self.clip:
            fr_min, fr_max = self.feature_range
            X_scaled = np.clip(X_scaled, fr_min, fr_max)
        return _from_numpy_like(X, X_scaled)

    def inverse_transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("MinMaxScaler must be fitted before calling inverse_transform().")
        assert self.scale_ is not None and self.min_offset_ is not None
        X_np = _to_numpy_2d(X)
        # Invert: X = (Y - min_offset) / scale
        inv = (X_np - self.min_offset_) / self.scale_
        return _from_numpy_like(X, inv)


class QuantileTransformer(BasePreprocessor):
    """Map data to a uniform or normal distribution via quantile transform.

    This performs a non-linear transformation based on the empirical CDF.
    """

    def __init__(
        self,
        n_quantiles: int = 1000,
        output_distribution: str = "uniform",  # 'uniform' | 'normal'
        subsample: Optional[int] = None,
        random_state: Optional[int] = None,
    ) -> None:
        super().__init__()
        if output_distribution not in ("uniform", "normal"):
            raise ValueError("output_distribution must be 'uniform' or 'normal'")
        self.n_quantiles = int(max(10, n_quantiles))
        self.output_distribution = output_distribution
        self.subsample = subsample
        self.random_state = random_state
        self.quantiles_: Optional[np.ndarray] = None  # shape (n_quantiles, n_features)
        self.q_grid_: Optional[np.ndarray] = None  # shape (n_quantiles,)
        self.constant_mask_: Optional[np.ndarray] = None  # shape (n_features,)

    def _probit(self, u: np.ndarray) -> np.ndarray:
        """Approximate inverse CDF of standard normal using Acklam's approximation."""
        # Clip for numerical stability
        u = np.clip(u, 1e-7, 1 - 1e-7)
        # Coefficients
        a = [-3.969683028665376e01, 2.209460984245205e02, -2.759285104469687e02,
             1.383577518672690e02, -3.066479806614716e01, 2.506628277459239e00]
        b = [-5.447609879822406e01, 1.615858368580409e02, -1.556989798598866e02,
             6.680131188771972e01, -1.328068155288572e01]
        c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e00,
             -2.549732539343734e00, 4.374664141464968e00, 2.938163982698783e00]
        d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e00,
             3.754408661907416e00]
        plow = 0.02425
        phigh = 1 - plow
        q = np.empty_like(u)
        # Region 1: lower
        mask = u < plow
        if np.any(mask):
            um = u[mask]
            t = np.sqrt(-2.0 * np.log(um))
            q[mask] = (((((c[0] * t + c[1]) * t + c[2]) * t + c[3]) * t + c[4]) * t + c[5]) / \
                      ((((d[0] * t + d[1]) * t + d[2]) * t + d[3]) * t + 1.0)
        # Region 2: central
        mask = (u >= plow) & (u <= phigh)
        if np.any(mask):
            um = u[mask]
            t = um - 0.5
            r = t * t
            q[mask] = (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * t / \
                      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1.0)
        # Region 3: upper
        mask = u > phigh
        if np.any(mask):
            um = 1 - u[mask]
            t = np.sqrt(-2.0 * np.log(um))
            q[mask] = -(((((c[0] * t + c[1]) * t + c[2]) * t + c[3]) * t + c[4]) * t + c[5]) / \
                       ((((d[0] * t + d[1]) * t + d[2]) * t + d[3]) * t + 1.0)
        return q

    def fit(self, X: ArrayLike, y: Optional[ArrayLike] = None) -> "QuantileTransformer":  # noqa: ARG002
        cols = get_columns(X)
        self.feature_names_in_ = cols
        X_np = _to_numpy_2d(X)
        n_samples, n_features = X_np.shape
        # Optional subsampling for large datasets
        if self.subsample is not None and n_samples > self.subsample:
            rng = np.random.default_rng(self.random_state)
            idx = rng.choice(n_samples, size=self.subsample, replace=False)
            X_fit = X_np[idx]
        else:
            X_fit = X_np
        nq = min(self.n_quantiles, X_fit.shape[0])
        q_grid = np.linspace(0, 1, nq)
        quantiles = np.empty((nq, n_features), dtype=float)
        constant_mask = np.zeros(n_features, dtype=bool)
        for j in range(n_features):
            col = X_fit[:, j]
            if np.all(col == col[0]):
                quantiles[:, j] = col[0]
                constant_mask[j] = True
            else:
                quantiles[:, j] = np.quantile(col, q_grid, method="linear")
        self.quantiles_ = quantiles
        self.q_grid_ = q_grid
        self.constant_mask_ = constant_mask
        self.is_fitted = True
        self.feature_names_out_ = cols
        return self

    def transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("QuantileTransformer must be fitted before calling transform().")
        assert self.quantiles_ is not None and self.q_grid_ is not None and self.constant_mask_ is not None
        X_np = _to_numpy_2d(X)
        n_samples, n_features = X_np.shape
        U = np.empty_like(X_np, dtype=float)
        for j in range(n_features):
            if self.constant_mask_[j]:
                U[:, j] = 0.5  # constant feature maps to center
                continue
            vals = self.quantiles_[:, j]
            U[:, j] = np.interp(X_np[:, j], vals, self.q_grid_, left=0.0, right=1.0)
        if self.output_distribution == "uniform":
            Y = U
        else:
            Y = self._probit(U)
        return _from_numpy_like(X, Y)

    def inverse_transform(self, X: ArrayLike) -> ArrayLike:
        if not self.is_fitted:
            raise RuntimeError("QuantileTransformer must be fitted before calling inverse_transform().")
        assert self.quantiles_ is not None and self.q_grid_ is not None and self.constant_mask_ is not None
        X_np = _to_numpy_2d(X)
        if self.output_distribution == "normal":
            # map from normal to uniform via CDF
            X_np = 0.5 * (1.0 + erf(X_np / math.sqrt(2.0)))
        # Now X_np is uniform in [0,1]
        inv = np.empty_like(X_np, dtype=float)
        for j in range(X_np.shape[1]):
            if self.constant_mask_[j]:
                inv[:, j] = self.quantiles_[0, j]
                continue
            vals = self.quantiles_[:, j]
            inv[:, j] = np.interp(X_np[:, j], self.q_grid_, vals, left=vals[0], right=vals[-1])
        return _from_numpy_like(X, inv)


def erf(x: np.ndarray) -> np.ndarray:
    """Vectorized error function using math.erf for inverse mapping."""
    return np.vectorize(math.erf)(x)

