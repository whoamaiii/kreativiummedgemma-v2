import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';

const namespace = 'translation';

// Define the complete return type interface
interface TranslationHookReturn {
  t: (key: string, options?: Record<string, unknown>) => string;
  tCommon: (key: string, options?: Record<string, unknown>) => string;
  tDashboard: (key: string, options?: Record<string, unknown>) => string;
  tStudent: (key: string, options?: Record<string, unknown>) => string;
  tTracking: (key: string, options?: Record<string, unknown>) => string;
  tAnalytics: (key: string, options?: Record<string, unknown>) => string;
  tSettings: (key: string, options?: Record<string, unknown>) => string;
  changeLanguage: (lng: 'nb' | 'en') => void;
  currentLanguage: 'nb' | 'en';
  formatDate: (date: Date) => string;
  formatDateTime: (date: Date) => string;
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
  formatCurrency: (value: number, currency?: 'NOK' | 'USD') => string;
  i18n: any;
}

// Type-safe translation hook with Norwegian context
export const useTranslation = (): TranslationHookReturn => {
  const { t, i18n } = useI18nTranslation(namespace);

  const changeLanguage = useCallback((lng: 'nb' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('sensoryTracker_language', lng);
  }, [i18n]);

  const currentLanguage = (i18n.language as 'nb' | 'en') || 'nb';
  const locale = currentLanguage === 'nb' ? 'nb-NO' : 'en-US';

  // Helper functions for common translations
  const tCommon = useCallback((key: string, options?: Record<string, unknown>) => t(key, { ns: 'common', ...options }), [t]);
  const tDashboard = useCallback((key: string, options?: Record<string, unknown>) => t(key, { ns: 'dashboard', ...options }), [t]);
  const tStudent = useCallback((key: string, options?: Record<string, unknown>) => t(key, { ns: 'student', ...options }), [t]);
  const tTracking = useCallback((key: string, options?: Record<string, unknown>) => t(key, { ns: 'tracking', ...options }), [t]);
  const tAnalytics = useCallback((key: string, options?: Record<string, unknown>) => t(key, { ns: 'analytics', ...options }), [t]);
  const tSettings = useCallback((key: string, options?: Record<string, unknown>) => t(key, { ns: 'settings', ...options }), [t]);

  // Locale-aware date/time formatting
  const formatDate = useCallback((date: Date): string => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }, [locale]);

  const formatDateTime = useCallback((date: Date): string => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }, [locale]);

  const formatNumber = useCallback((value: number, options?: Intl.NumberFormatOptions): string => {
    return new Intl.NumberFormat(locale, options).format(value);
  }, [locale]);

  const formatCurrency = useCallback((value: number, currency: 'NOK' | 'USD' = currentLanguage === 'nb' ? 'NOK' : 'USD'): string => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
  }, [locale, currentLanguage]);

  // Include i18n in deps to ensure fresh reference
  return useMemo(() => ({
    t,
    tCommon,
    tDashboard,
    tStudent,
    tTracking,
    tAnalytics,
    tSettings,
    changeLanguage,
    currentLanguage,
    formatDate,
    formatDateTime,
    formatNumber,
    formatCurrency,
    i18n,
  }), [t, tCommon, tDashboard, tStudent, tTracking, tAnalytics, tSettings, changeLanguage, currentLanguage, formatDate, formatDateTime, formatNumber, formatCurrency, i18n]);
};
