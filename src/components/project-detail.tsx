"use client";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  GitFork as Github,
  Check,
  ExternalLink,
} from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import { usePortfolio } from "./provider";
import { ProjectArt, type Project } from "./project-art";
import { Reveal } from "./motion";
export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const next =
    projects[
      (projects.findIndex((p) => p.id === project.id) + 1) % projects.length
    ];
  return (
    <article className="case-study">
      <Link href="/#work" className="text-link">
        <ArrowLeft size={16} />
        {fa ? "برگشت به پروژه‌ها" : "Back to selected work"}
      </Link>
      <Reveal>
        <div className="case-title">
          <p className="eyebrow">CASE STUDY / {project.number}</p>
          <h1>{project.title[lang]}</h1>
          <p className="muted">{project.description[lang]}</p>
        </div>
      </Reveal>
      <div className="case-facts">
        <div>
          <span>{fa ? "حوزه" : "CATEGORY"}</span>
          <b>
            {project.category === "business"
              ? fa
                ? "تجارت"
                : "Business"
              : project.category === "education"
                ? fa
                  ? "آموزش"
                  : "Education"
                : fa
                  ? "صحت"
                  : "Healthcare"}
          </b>
        </div>
        <div>
          <span>{fa ? "وضعیت درج‌شده" : "LISTED STATUS"}</span>
          <b>
            {project.status === "completed"
              ? fa
                ? "تکمیل‌شده"
                : "Completed"
              : fa
                ? "در حال توسعه"
                : "In development"}
          </b>
        </div>
        <div>
          <span>{fa ? "تکنالوژی‌ها" : "TECHNOLOGIES"}</span>
          <b dir="ltr">{project.stack.join(" / ")}</b>
        </div>
      </div>
      <ProjectArt project={project} large />
      <div className="case-body">
        <Reveal>
          <p className="eyebrow">01 / {fa ? "هدف" : "THE PURPOSE"}</p>
          <h2>
            {fa
              ? "مسئله‌ای که پروژه به آن می‌پردازد."
              : "The workflow behind the project."}
          </h2>
          <p className="muted">{project.problem[lang]}</p>
          <p className="eyebrow case-label">
            02 / {fa ? "روش کار" : "THE APPROACH"}
          </p>
          <h2>
            {fa ? "وصل‌کردن بخش‌های مختلف." : "Connecting the moving parts."}
          </h2>
          <p className="muted">{project.approach[lang]}</p>
          <p className="eyebrow case-label">03 / {fa ? "نتایج" : "OUTCOMES"}</p>
          <p className="muted">
            {fa
              ? "نتایج قابل اندازه‌گیری، تصاویر واقعی و جزئیات استقرار هنوز ارائه نشده‌اند. توضیحات و وضعیت این صفحه از پورتفولیوی قبلی حفظ شده‌اند."
              : "Measured outcomes, actual screenshots and deployment details have not yet been supplied. Descriptions and statuses on this page are retained from the original portfolio."}
          </p>
        </Reveal>
        <aside className="case-aside">
          <h3>{fa ? "امکانات اصلی" : "Key features"}</h3>
          <ul>
            {project.features[lang].map((feature) => (
              <li key={feature}>
                <Check size={16} />
                {feature}
              </li>
            ))}
          </ul>
          <div className="case-links">
            {project.source ? (
              <a
                className="button secondary"
                href={project.source}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <p className="tiny muted">
                {fa
                  ? "لینک GitHub ارائه نشده است."
                  : "GitHub URL not supplied."}
              </p>
            )}
            {project.demo ? (
              <a
                className="button primary"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />
                Live demo
              </a>
            ) : (
              <p className="tiny muted">
                {fa
                  ? "لینک دمو ارائه نشده است."
                  : "Live demo URL not supplied."}
              </p>
            )}
            <a
              className="button primary"
              href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title.en)}`}
            >
              {fa ? "درباره این پروژه بپرسید" : "Ask about this project"}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </aside>
      </div>
      <Link className="next-project" href={`/projects/${next.id}/`}>
        <div>
          <span className="eyebrow">{fa ? "پروژه بعدی" : "NEXT PROJECT"}</span>
          <h2>{next.title[lang]}</h2>
        </div>
        <ArrowUpRight size={42} />
      </Link>
    </article>
  );
}
