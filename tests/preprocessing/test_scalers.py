import math
import numpy as np
import pytest

from src.lib.preprocessing.scalers import (
    RobustScaler,
    MedianMADScaler,
    StandardScaler,
    MinMaxScaler,
    QuantileTransformer,
)

try:
    # property-based tests are optional; if hypothesis missing, skip gracefully
    import hypothesis as _hyp  # type: ignore
    from hypothesis import given, strategies as st  # type: ignore
    HYP_AVAILABLE = True
except Exception:  # pragma: no cover
    HYP_AVAILABLE = False


def test_minmax_scaler_basic_inverse_roundtrip():
    X = np.array([[0.0, 10.0], [5.0, 20.0], [10.0, 30.0]])
    scaler = MinMaxScaler()
    scaler.fit(X)
    Xt = scaler.transform(X)
    Xinv = scaler.inverse_transform(Xt)
    np.testing.assert_allclose(Xinv, X, rtol=1e-7, atol=1e-8)


def test_minmax_scaler_feature_range_clip():
    X = np.array([[0.0], [10.0]])
    scaler = MinMaxScaler(feature_range=(0, 1), clip=True).fit(X)
    Xt = scaler.transform(np.array([[-5.0], [0.0], [10.0], [15.0]]))
    assert Xt.min() >= 0 - 1e-12
    assert Xt.max() <= 1 + 1e-12


def test_standard_scaler_zscore_and_outlier_bounds():
    X = np.array([[1.0, 100.0], [2.0, 101.0], [3.0, 102.0], [1000.0, 103.0]])
    scaler = StandardScaler(outlier_detection="zscore", zscore_thresh=3.0, exclude_outliers_from_fit=True)
    scaler.fit(X)
    Xt = scaler.transform(np.array([[2.0, 101.0]]))
    # second feature has low variance; ensure not NaN and roughly centered
    assert np.isfinite(Xt).all()
    assert abs(Xt[0, 1]) < 5


def test_standard_scaler_clip_outliers_effect():
    X = np.array([[1.0], [2.0], [3.0], [1000.0]])
    s_noclip = StandardScaler(outlier_detection="iqr", clip_outliers=False, exclude_outliers_from_fit=False).fit(X)
    s_clip = StandardScaler(outlier_detection="iqr", clip_outliers=True, exclude_outliers_from_fit=False).fit(X)
    x_new = np.array([[10000.0]])
    xt_noclip = s_noclip.transform(x_new)
    xt_clip = s_clip.transform(x_new)
    assert abs(xt_clip).sum() < abs(xt_noclip).sum()


def test_robust_scaler_median_iqr():
    X = np.array([[1.0], [2.0], [100.0]])
    scaler = RobustScaler().fit(X)
    Xt = scaler.transform(np.array([[2.0]]))
    assert np.isfinite(Xt).all()


def test_median_mad_scaler_inverse_roundtrip():
    X = np.array([[0.0], [1.0], [2.0], [100.0]])
    scaler = MedianMADScaler().fit(X)
    Xt = scaler.transform(X)
    Xinv = scaler.inverse_transform(Xt)
    np.testing.assert_allclose(Xinv, X, rtol=1e-6, atol=1e-6)


def test_quantile_transformer_uniform_and_normal():
    rng = np.random.default_rng(42)
    X = rng.normal(size=(500, 1))
    qt_u = QuantileTransformer(output_distribution="uniform", n_quantiles=100).fit(X)
    U = qt_u.transform(X)
    assert 0 <= U.min() and U.max() <= 1

    qt_n = QuantileTransformer(output_distribution="normal", n_quantiles=100).fit(X)
    Z = qt_n.transform(X)
    # Check finite and roughly zero-mean
    assert np.isfinite(Z).all()
    assert abs(float(np.mean(Z))) < 0.1


@pytest.mark.skipif(not HYP_AVAILABLE, reason="hypothesis not installed")
@given(st.integers(min_value=1, max_value=5), st.integers(min_value=1, max_value=4))
def test_minmax_inverse_property_based(n_rows: int, n_cols: int):
    rng = np.random.default_rng(0)
    X = rng.normal(size=(n_rows, n_cols)) * 1000
    scaler = MinMaxScaler().fit(X)
    Xt = scaler.transform(X)
    Xinv = scaler.inverse_transform(Xt)
    np.testing.assert_allclose(Xinv, X, rtol=1e-6, atol=1e-6)


@pytest.mark.skipif(not HYP_AVAILABLE, reason="hypothesis not installed")
@given(st.integers(min_value=3, max_value=30))
def test_standard_scaler_numerical_stability(n: int):
    rng = np.random.default_rng(1)
    X = rng.normal(loc=1e9, scale=1e6, size=(n, 3))  # large magnitude values
    scaler = StandardScaler().fit(X)
    Xt = scaler.transform(X)
    # mean approx zero, std approx one per column
    means = Xt.mean(axis=0)
    stds = Xt.std(axis=0)
    assert np.all(np.isfinite(means)) and np.all(np.isfinite(stds))
    assert np.all(np.abs(means) < 1e-6)
    assert np.all(np.abs(stds - 1) < 1e-5)
