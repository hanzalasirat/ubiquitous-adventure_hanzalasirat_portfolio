"use client";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { usePortfolio } from "./provider";
export function Footer() {
  const { lang } = usePortfolio();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="wordmark" href="/" aria-label="Hanzala Sirat home">
          hs<span>®</span>
        </Link>
        <p>
          {lang === "en"
            ? "Thoughtful code. Lasting impressions."
            : "کدنویسی با دقت؛ تجربه‌ای به‌یادماندنی."}
        </p>
        <button
          className="icon-button"
          aria-label={lang === "en" ? "Back to top" : "برگشت به بالا"}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
        >
          <ArrowUp size={19} />
        </button>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div>
          <Link href="/#work">
            {lang === "en" ? "Selected work" : "پروژه‌ها"}
          </Link>
          <Link href="/#contact">{lang === "en" ? "Contact" : "تماس"}</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={12} />
          </a>
        </div>
        <span>
          {lang === "en" ? "Designed with intention." : "طراحی‌شده با هدف."}
        </span>
      </div>
    </footer>
  );
}
