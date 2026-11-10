"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/components/provider";
export default function NotFound() {
  const { lang } = usePortfolio();
  return (
    <section className="error-page">
      <p className="eyebrow">A SMALL DETOUR</p>
      <span className="error-number">404</span>
      <h1>
        {lang === "en" ? "This page went off-script." : "این صفحه پیدا نشد."}
      </h1>
      <p className="muted">
        {lang === "en"
          ? "Let’s get you back to something useful."
          : "بیایید به صفحه اصلی برگردیم."}
      </p>
      <Link className="button primary" href="/">
        {lang === "en" ? "Back to the portfolio" : "برگشت به پورتفولیو"}
        <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
