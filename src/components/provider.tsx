"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import type { Language } from "@/data/types";
const Context = createContext<{
  lang: Language;
  theme: "dark" | "light";
  toggleLanguage: () => void;
  toggleTheme: () => void;
}>({
  lang: "en",
  theme: "dark",
  toggleLanguage: () => {},
  toggleTheme: () => {},
});
export function usePortfolio() {
  return useContext(Context);
}
export function Provider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const l = localStorage.getItem("portfolio-language");
      const t = localStorage.getItem("portfolio-theme");
      if (l === "en" || l === "fa") setLang(l);
      if (t === "dark" || t === "light") setTheme(t);
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "fa" ? "fa-AF" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    if (loaded)
      try {
        localStorage.setItem("portfolio-language", lang);
        localStorage.setItem("portfolio-theme", theme);
      } catch {}
  }, [lang, theme, loaded]);
  return (
    <Context.Provider
      value={{
        lang,
        theme,
        toggleLanguage: () => setLang((l) => (l === "en" ? "fa" : "en")),
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Context.Provider>
  );
}
