import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { languages } from './translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultLanguage = 'pt';

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Get saved language from localStorage or use default
  const [language, setLanguage] = useState<string>(() => {
    try {
      const savedLang = localStorage.getItem('language');
      return savedLang || defaultLanguage;
    } catch {
      return defaultLanguage;
    }
  });

  // Save language preference to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.error('Error saving language to localStorage:', error);
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const currentLanguage = languages[language] || languages[defaultLanguage];
    return currentLanguage.translations[key as keyof typeof currentLanguage.translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);