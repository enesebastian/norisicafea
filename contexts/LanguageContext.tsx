'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { getTranslation, t as translate, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: string | null;
  saveLanguage: (lang: string) => void;
  isLoading: boolean;
  t: (key: TranslationKey) => string;
  translations: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { language, saveLanguage, isLoading } = useLanguage();
  const currentLang = language || 'en';

  const t = (key: TranslationKey) => translate(currentLang, key);
  const translations = getTranslation(currentLang);

  return (
    <LanguageContext.Provider
      value={{
        language,
        saveLanguage,
        isLoading,
        t,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
