'use client';

import {createContext, useContext, ReactNode} from 'react';

type Messages = Record<string, any>;

interface LangContextValue {
  locale: string;
  messages: Messages;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function useLang(): LangContextValue {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within LangProvider');
  }
  return context;
}

interface LangProviderProps {
  locale: string;
  messages: Messages;
  children: ReactNode;
}

export default function LangProvider({ locale, messages, children }: LangProviderProps) {
  const t = (key: string): string => {
    const value = key
      .split('.')
      .reduce((obj, segment) => (obj && obj[segment] !== undefined ? obj[segment] : undefined), messages);

    return typeof value === 'string' ? value : key;
  };

  return (
    <LangContext.Provider value={{ locale, messages, t }}>
      {children}
    </LangContext.Provider>
  );
}
