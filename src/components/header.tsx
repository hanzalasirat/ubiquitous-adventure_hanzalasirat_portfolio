"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon, Languages } from "lucide-react";
import { usePortfolio } from "./provider";
const nav = [
  ["about", "About", "درباره من"],
  ["work", "Selected work", "پروژه‌ها"],
  ["services", "Services", "خدمات"],
  ["contact", "Contact", "تماس"],
];
export function Header() {
  const { lang, theme, toggleLanguage, toggleTheme } = usePortfolio();
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        {lang === "en" ? "Skip to content" : "رفتن به محتوا"}
      </a>
      <header className="site-header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Hanzala Sirat home"
          onClick={() => setOpen(false)}
        >
          hs<span>®</span>
        </Link>
        <nav
          id="navigation"
          className={open ? "open" : ""}
          aria-label={lang === "en" ? "Main navigation" : "منوی اصلی"}
        >
          {nav.map(([id, en, fa]) => (
            <Link
              href={`${path === "/" ? "" : "/"}#${id}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              {lang === "en" ? en : fa}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button language"
            onClick={toggleLanguage}
            aria-label={lang === "en" ? "Switch to Dari" : "Switch to English"}
          >
            <Languages size={16} />
            <span>{lang === "en" ? "دری" : "EN"}</span>
          </button>
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={lang === "en" ? "Toggle color theme" : "تغییر حالت رنگ"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/#contact" className="nav-cta">
            {lang === "en" ? "Let’s talk" : "گفتگو کنیم"}
            <ArrowUpRight size={16} />
          </Link>
          <button
            ref={toggle}
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="navigation"
            aria-label={lang === "en" ? "Toggle menu" : "باز و بسته کردن منو"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
