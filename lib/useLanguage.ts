'use client';

import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    setLanguage(savedLanguage);
    setIsLoading(false);
  }, []);

  const saveLanguage = (lang: string) => {
    localStorage.setItem('preferredLanguage', lang);
    setLanguage(lang);
  };

  return { language, saveLanguage, isLoading };
}