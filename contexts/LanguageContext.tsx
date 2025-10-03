"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language, LanguageContextType, Translations } from "@/types/language";

const translations: Translations = {
  en: {
    // Navigation
    "nav.resume": "Resume",
    "nav.memoryGame": "Memory Game",

    // Header
    "header.resume": "Resume",
    "header.downloadUS": "US Letter",
    "header.downloadA4": "A4",

    // Sections
    "section.about": "ABOUT ME",
    "section.experience": "EXPERIENCE",
    "section.education": "EDUCATION",
    "section.technologies": "TECHNOLOGIES",
    "section.hobbies": "HOBBIES",

    // Tech categories
    "tech.frontend": "frontend",
    "tech.backend": "backend",
    "tech.database": "database",
    "tech.tools": "tools",
    "tech.other": "other",

    // Common
    "common.technologies": "Technologies:",
    "common.location": "Location",
    "common.period": "Period",
    "common.present": "Present",
  },
  fr: {
    // Navigation
    "nav.resume": "CV",
    "nav.memoryGame": "Jeu de Mémoire",

    // Header
    "header.resume": "CV",
    "header.downloadUS": "Format US",
    "header.downloadA4": "Format A4",

    // Sections
    "section.about": "À PROPOS",
    "section.experience": "EXPÉRIENCES",
    "section.education": "FORMATION",
    "section.technologies": "TECHNOLOGIES",
    "section.hobbies": "PASSIONS",

    // Tech categories
    "tech.frontend": "frontend",
    "tech.backend": "backend",
    "tech.database": "base de données",
    "tech.tools": "outils",
    "tech.other": "autres",

    // Common
    "common.technologies": "Technologies :",
    "common.location": "Lieu",
    "common.period": "Période",
    "common.present": "Présent",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({
  children,
}: LanguageProviderProps): React.JSX.Element => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
