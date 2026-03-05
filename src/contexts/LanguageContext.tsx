import React, { createContext, useContext, useState, useCallback } from "react";
import { Language, translations } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("himaa-lang");
    if (stored && ["en", "ru", "am"].includes(stored)) return stored as Language;
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "ru") return "ru";
    if (browserLang === "hy") return "am";
    return "en";
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("himaa-lang", lang);
  }, []);

  const t = useCallback((key: string) => {
    return translations[language]?.[key] || translations.en[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
