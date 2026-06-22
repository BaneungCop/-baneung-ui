'use client';

import * as React from 'react';

import { dictionaries, type Locale } from '@/lib/i18n/dictionaries';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** 키로 번역 문자열을 가져옴. 없으면 키 자체 반환. */
  t: (key: string) => string;
}

const STORAGE_KEY = 'baneung-docs-locale';
const I18nContext = React.createContext<I18nContextValue | null>(null);

/**
 * 다국어 Provider — 한/영 토글 + localStorage 영속.
 *
 * SSR 시 항상 'ko'로 초기 렌더 → mount 후 localStorage에서 복원 (hydration mismatch 방지용).
 */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>('ko');

  // 마운트 시 localStorage에서 저장된 locale 복원
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'ko' || saved === 'en') setLocaleState(saved);
    } catch {
      // localStorage 사용 불가 환경 무시
    }
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocale(locale === 'ko' ? 'en' : 'ko');
  }, [locale, setLocale]);

  const t = React.useCallback(
    (key: string) => dictionaries[locale][key] ?? dictionaries.ko[key] ?? key,
    [locale],
  );

  const value = React.useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** 다국어 컨텍스트 사용 hook. Provider 밖에서 호출 시 에러. */
export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside <I18nProvider>');
  }
  return ctx;
}
