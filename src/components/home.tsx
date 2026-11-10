"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Braces,
  GitFork as Github,
  Globe2,
  Layers3,
  Terminal,
  Download,
  MapPin,
  ArrowRight,
  Check,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  Cpu,
  Workflow,
} from "lucide-react";
import {
  profile,
  projects,
  settings,
  skillGroups,
  timeline,
  testimonials,
} from "@/data/portfolio";
import { usePortfolio } from "./provider";
import { ProjectArt } from "./project-art";
import { Reveal } from "./motion";
import { Contact } from "./contact";

export function SectionHeading({
  index,
  label,
  title,
  accent,
  description,
}: {
  index: string;
  label: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {index} / {label}
        </p>
        <h2>
          {title}
          {accent && (
            <>
              <br />
              <span className="muted-heading">{accent}</span>
            </>
          )}
        </h2>
      </div>
      {description && (
        <p className="muted section-description">{description}</p>
      )}
    </div>
  );
}
function HeroVisual() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(y, { stiffness: 100, damping: 25 });
  const ry = useSpring(x, { stiffness: 100, damping: 25 });
  return (
    <motion.div
      className="hero-visual"
      style={{ rotateX: rx, rotateY: ry }}
      onPointerMove={(e) => {
        if (reduced || e.pointerType === "touch") return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 10);
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * -10);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      aria-hidden="true"
    >
      <div className="visual-grid" />
      <div className="visual-corner tl" />
      <div className="visual-corner tr" />
      <div className="visual-corner bl" />
      <div className="visual-corner br" />
      <div className="visual-top">
        <span>CREATIVE ENGINEERING</span>
        <span>HS—01</span>
      </div>
      <div className="orbit-system">
        <div className="orbit-ring one" />
        <div className="orbit-ring two" />
        <div className="orbit-ring three" />
        <span className="orbital-node" />
        <div className="sculpture">
          h<span>s</span>
          <b>.</b>
        </div>
      </div>
      <div className="floating-tag tag-top">
        <Braces size={15} />
        <span>ideas.into(reality)</span>
        <span className="status-dot" />
      </div>
      <div className="floating-tag tag-bottom">
        <Code2 size={18} />
        <div>
          <b>Built with intention</b>
          <span>Interface → Logic → Data</span>
        </div>
        <ArrowUpRight size={15} />
      </div>
      <div className="visual-bottom">
        <span>KABUL · AFGHANISTAN</span>
        <span>34.55° N / 69.20° E</span>
      </div>
    </motion.div>
  );
}
function Hero() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const [role, setRole] = useState(0);
  const reduced = useReducedMotion();
  const roles = fa
    ? ["توسعه‌دهنده فول‌استک", "سازنده تجربه‌های وب", "حل‌کننده مسئله"]
    : [
        "Full-stack developer",
        "Web experience builder",
        "Practical problem solver",
      ];
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setRole((i) => (i + 1) % 3), 3500);
    return () => clearInterval(timer);
  }, [reduced]);
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="hero-intro-label">
          <span className="status-dot" />
          {fa ? "سلام، من حنظله سیرت هستم" : "HELLO, I’M HANZALA SIRAT"}
          <span className="intro-line" />
        </div>
        <h1>
          {fa ? "ایده‌های جسورانه." : "Bold ideas."}
          <br />
          {fa ? "تجربه‌های" : "Thoughtful"}
          <br />
          <span className="hero-outline">
            {fa ? "ماندگار." : "experiences."}
            <span className="hero-asterisk">✳</span>
          </span>
        </h1>
        <div className="role-line">
          <span className="role-slash">/</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={`${role}-${lang}`}
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {roles[role]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="hero-description">
          {fa
            ? "رابط‌های دقیق، سیستم‌های کاربردی و تجربه‌های وب که ایده شما را به چیزی قابل استفاده تبدیل می‌کنند."
            : "I connect thoughtful interfaces with practical systems. Turning complex ideas into clear, useful web experiences."}
        </p>
        <div className="hero-buttons">
          <Link className="button primary" href="#work">
            {fa ? "دیدن پروژه‌ها" : "View my work"}
            <ArrowUpRight size={18} />
          </Link>
          <Link className="button secondary" href="#contact">
            {fa ? "تماس با من" : "Contact me"}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="hero-signature">
          <span className="signature-mark">HS</span>
          <div>
            <span>
              {fa ? "ساختن با دقت، از کابل" : "BUILDING WITH CARE, FROM KABUL"}
            </span>
            <b>{fa ? "کدنویسی با هدف." : "Code with purpose."}</b>
          </div>
          <a
            href={profile.github}
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={19} />
          </a>
        </div>
      </div>
      <HeroVisual />
      <div className="hero-bottom-line">
        <a href="#about">
          {fa ? "برای دیدن بیشتر اسکرول کنید" : "SCROLL TO EXPLORE"}
          <ArrowDown size={14} />
        </a>
        <span>DESIGN ↔ DEVELOPMENT</span>
        <span>PORTFOLIO / {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
function About() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  return (
    <section className="section about-section" id="about">
      <Reveal>
        <SectionHeading
          index="01"
          label={fa ? "درباره من" : "A LITTLE ABOUT ME"}
          title={fa ? "کنجکاوی، با کد" : "Curiosity, translated"}
          accent={fa ? "به تجربه تبدیل می‌شود." : "into code."}
        />
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-visual">
          <div className="about-monogram">
            {settings.portraitUrl ? (
              <Image
                src={settings.portraitUrl}
                alt={profile.name}
                fill
                sizes="(max-width: 700px) 90vw, 35vw"
                className="portrait"
              />
            ) : (
              <>
                <span className="coordinate">PERSONAL / PROFILE</span>
                <div className="initial-outline">HS</div>
                <span className="about-cross">+</span>
                <div className="about-visual-footer">
                  <span>{profile.name}</span>
                  <ArrowUpRight size={24} />
                </div>
              </>
            )}
          </div>
          <p className="tiny muted">
            {fa
              ? "توسعه وب · حل مسئله · یادگیری پیوسته"
              : "WEB DEVELOPMENT · PROBLEM SOLVING · CONTINUOUS LEARNING"}
          </p>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <p className="about-lead">
            {fa
              ? "من حنظله سیرت هستم؛ توسعه‌دهنده فول‌استک در کابل، افغانستان."
              : "I’m Hanzala Sirat, a full-stack developer based in Kabul, Afghanistan."}
          </p>
          <p className="muted">
            {fa
              ? "کار من در نقطه اتصال رابط کاربری، منطق برنامه و دیتابیس قرار دارد. به ساخت تجربه‌هایی علاقه دارم که روندهای پیچیده را ساده و قابل فهم می‌کنند."
              : "My work lives where interfaces, application logic and data meet. I’m drawn to building experiences that make complex workflows feel simple and understandable."}
          </p>
          <p className="muted">
            {fa
              ? "پورتفولیوی من شامل سیستم‌های مدیریت خیاطی، مکتب و شفاخانه است. هدف من رشد در ساخت سیستم‌های کاربردی و همکاری روی مسئله‌های واقعی است."
              : "My portfolio explores management systems for tailoring, education and healthcare. My goal is to keep growing as a builder and collaborate on practical problems with meaningful outcomes."}
          </p>
          <div className="about-facts">
            <div>
              <MapPin size={17} />
              <span>
                {fa ? "محل زندگی" : "BASED IN"}
                <b>{profile.location[lang]}</b>
              </span>
            </div>
            <div>
              <Globe2 size={17} />
              <span>
                {fa ? "تمرکز" : "FOCUS"}
                <b>
                  {fa
                    ? "برنامه‌های وب و سیستم‌ها"
                    : "Web applications & systems"}
                </b>
              </span>
            </div>
          </div>
          <div className="cv-row">
            {settings.cvUrl ? (
              <a href={settings.cvUrl} download className="button secondary">
                <Download size={17} />
                {fa ? "دانلود CV" : "Download CV"}
              </a>
            ) : (
              <>
                <a href="#contact" className="button secondary">
                  <Download size={17} />
                  {fa ? "درخواست CV" : "Request my CV"}
                  <ArrowUpRight size={16} />
                </a>
                <span className="tiny muted">
                  {fa
                    ? "فایل CV هنوز ارائه نشده است."
                    : "CV file not provided yet."}
                </span>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
const skillDescriptions = [
  {
    en: "Interfaces that feel clear, responsive and intentional.",
    fa: "رابط‌های واضح، واکنش‌گرا و هدفمند.",
  },
  {
    en: "Application logic and services behind the interface.",
    fa: "منطق برنامه و سرویس‌های پشت رابط کاربری.",
  },
  {
    en: "Structured data for practical application workflows.",
    fa: "داده‌های ساختاریافته برای روندهای کاربردی.",
  },
  {
    en: "Tools that support organized, collaborative development.",
    fa: "ابزارهای توسعه منظم و همکاری.",
  },
];
function Skills() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const [selected, setSelected] = useState(0);
  const icons = [Code2, Terminal, Database, Workflow];
  return (
    <section className="section skills-section" id="skills">
      <Reveal>
        <SectionHeading
          index="02"
          label={fa ? "مهارت‌ها و تکنالوژی‌ها" : "TOOLS OF THE TRADE"}
          title={fa ? "ابزارهای متفاوت." : "Different tools."}
          accent={fa ? "یک دیدگاه یکپارچه." : "One connected approach."}
          description={
            fa
              ? "یک دسته را انتخاب کنید تا ابزارهای مربوط به آن را ببینید."
              : "A toolkit spanning the interface, the logic and the data. Select a discipline to explore."
          }
        />
      </Reveal>
      <div className="skills-layout">
        <div
          className="skill-tabs"
          role="tablist"
          aria-label={fa ? "دسته مهارت‌ها" : "Skill categories"}
        >
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <button
                role="tab"
                id={`skill-tab-${i}`}
                aria-selected={selected === i}
                aria-controls="skill-panel"
                key={group.name.en}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    e.preventDefault();
                    setSelected((i + 1) % 4);
                    document
                      .getElementById(`skill-tab-${(i + 1) % 4}`)
                      ?.focus();
                  }
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    setSelected((i + 3) % 4);
                    document
                      .getElementById(`skill-tab-${(i + 3) % 4}`)
                      ?.focus();
                  }
                }}
                tabIndex={selected === i ? 0 : -1}
              >
                <span>
                  <Icon size={21} />
                  {group.name[lang]}
                </span>
                <ArrowUpRight size={19} />
              </button>
            );
          })}
        </div>
        <div
          className="skill-panel"
          id="skill-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${selected}`}
          tabIndex={0}
        >
          <div className="skill-panel-top">
            <span className="tiny muted">0{selected + 1} / DISCIPLINE</span>
            <Sparkles size={24} />
          </div>
          <h3>{skillGroups[selected].name[lang]}</h3>
          <p className="muted">{skillDescriptions[selected][lang]}</p>
          <div className="technology-grid" dir="ltr">
            {skillGroups[selected].items.map((item, i) => {
              const Icon = icons[selected];
              return (
                <motion.div
                  whileHover={{ y: -4 }}
                  className="technology-card"
                  key={item}
                >
                  <span className="tech-icon">
                    <Icon size={21} />
                  </span>
                  <span>{item}</span>
                  <span className="tech-index">0{i + 1}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Work() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const [category, setCategory] = useState("all");
  const labels = fa
    ? ["همه پروژه‌ها", "تجارت", "آموزش", "صحت"]
    : ["All projects", "Business", "Education", "Healthcare"];
  const filtered = projects.filter(
    (p) => category === "all" || p.category === category,
  );
  return (
    <section className="section work-section" id="work">
      <Reveal>
        <SectionHeading
          index="03"
          label={fa ? "پروژه‌های منتخب" : "SELECTED WORK"}
          title={fa ? "از ایده،" : "From concept,"}
          accent={fa ? "تا کاربرد." : "to something useful."}
          description={
            fa
              ? "مجموعه‌ای از پروژه‌های پورتفولیوی من. هدف، ساختار و تکنالوژی هر پروژه را بررسی کنید."
              : "A selection from my portfolio. Explore the purpose, approach and technologies behind each project."
          }
        />
      </Reveal>
      <div className="work-toolbar">
        <div
          className="filters"
          role="group"
          aria-label={fa ? "فیلتر پروژه‌ها" : "Project filters"}
        >
          {["all", "business", "education", "health"].map((cat, i) => (
            <button
              key={cat}
              aria-pressed={cat === category}
              onClick={() => setCategory(cat)}
            >
              {labels[i]}
              {cat === "all" && (
                <span>{projects.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <span className="tiny muted desktop-only">
          SELECTED / {filtered.length.toString().padStart(2, "0")}
        </span>
      </div>
      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              layout
              initial={{ y: 15 }}
              animate={{ y: 0 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="project-card"
            >
              <Link
                href={`/projects/${project.id}/`}
                className="project-image-link"
                aria-label={`${fa ? "جزئیات" : "Explore"} ${project.title[lang]}`}
              >
                <ProjectArt project={project} />
                <span className="project-open">
                  <ArrowUpRight size={24} />
                </span>
              </Link>
              <div className="project-meta">
                <span>
                  /{project.number} —{" "}
                  {
                    labels[
                      ["business", "education", "health"].indexOf(
                        project.category,
                      ) + 1
                    ]
                  }
                </span>
                <span className="project-state">
                  <span className="status-dot" />
                  {project.status === "completed"
                    ? fa
                      ? "تکمیل‌شده"
                      : "Completed"
                    : fa
                      ? "در حال توسعه"
                      : "In development"}
                </span>
              </div>
              <h3>
                <Link href={`/projects/${project.id}/`}>
                  {project.title[lang]}
                  <ArrowUpRight size={23} />
                </Link>
              </h3>
              <p className="muted">{project.description[lang]}</p>
              <div className="project-stack" dir="ltr">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-link-row">
                <Link href={`/projects/${project.id}/`}>
                  {fa ? "مطالعه پروژه" : "View case study"}
                  <ArrowRight size={15} />
                </Link>
                {project.source && (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live demo
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="tiny muted work-note">
        {fa
          ? "توضیحات و وضعیت‌ها از پورتفولیوی قبلی حفظ شده‌اند. لینک دمو و کد هنوز ارائه نشده است."
          : "Descriptions and statuses are retained from the original portfolio. Source and live-demo URLs have not yet been supplied."}
      </p>
    </section>
  );
}
function Experience() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const [kind, setKind] = useState<"work" | "education" | "certificate">(
    "work",
  );
  const items = timeline.filter((i) => i.kind === kind);
  const labels = fa
    ? ["تجربه کاری", "تحصیلات", "سرتیفیکیت‌ها"]
    : ["Experience", "Education", "Certifications"];
  const icons = [BriefcaseBusiness, GraduationCap, Award];
  return (
    <section className="section" id="experience">
      <Reveal>
        <SectionHeading
          index="04"
          label={fa ? "مسیر حرفه‌ای" : "THE JOURNEY"}
          title={fa ? "هر تجربه،" : "Every chapter,"}
          accent={fa ? "یک قدم به پیش." : "a step forward."}
        />
      </Reveal>
      <div className="timeline-layout">
        <div
          className="timeline-tabs"
          role="group"
          aria-label={fa ? "نوع سابقه" : "Background category"}
        >
          {(["work", "education", "certificate"] as const).map((item, i) => {
            const Icon = icons[i];
            return (
              <button
                key={item}
                aria-pressed={kind === item}
                onClick={() => setKind(item)}
              >
                <Icon size={20} />
                {labels[i]}
                <ArrowUpRight size={17} />
              </button>
            );
          })}
        </div>
        <div className="timeline-list">
          {items.length ? (
            items.map((item) => (
              <details key={item.id} className="timeline-item">
                <summary>
                  <span>{item.period}</span>
                  <h3>{item.title[lang]}</h3>
                  <b>{item.organization[lang]}</b>
                </summary>
                <p>{item.description[lang]}</p>
              </details>
            ))
          ) : (
            <div className="pending-card">
              <span className="pending-label">
                {fa ? "معلومات در انتظار تکمیل" : "INFORMATION PENDING"}
              </span>
              <h3>
                {labels[["work", "education", "certificate"].indexOf(kind)]}
              </h3>
              <p className="muted">
                {fa
                  ? "جزئیات تأییدشده این بخش هنوز ارائه نشده است. پس از دریافت عنوان‌ها، تاریخ‌ها و اسناد، این مسیر تکمیل می‌شود."
                  : "Verified details for this part of my background have not been provided yet. Titles, dates and supporting information will be added when available."}
              </p>
              <a href="#contact" className="text-link">
                {fa ? "دریافت معلومات بیشتر" : "Ask about my background"}
                <ArrowUpRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
const services = [
  {
    icon: Code2,
    title: { en: "Web interfaces", fa: "رابط‌های وب" },
    description: {
      en: "Responsive interfaces with considered layouts, clear navigation and purposeful interactions.",
      fa: "رابط‌های واکنش‌گرا با چیدمان دقیق، مسیر واضح و تعامل‌های هدفمند.",
    },
    tags: ["React", "HTML & CSS", "Responsive UI"],
  },
  {
    icon: Layers3,
    title: { en: "Full-stack applications", fa: "برنامه‌های فول‌استک" },
    description: {
      en: "Connecting frontend experiences with application logic and structured databases.",
      fa: "اتصال تجربه کاربری به منطق برنامه و دیتابیس‌های ساختاریافته.",
    },
    tags: ["Laravel", "Python", "SQL"],
  },
  {
    icon: Cpu,
    title: { en: "Management systems", fa: "سیستم‌های مدیریت" },
    description: {
      en: "Practical workflows for orders, records and the everyday operations of an organization.",
      fa: "روندهای کاربردی برای سفارش‌ها، اسناد و کارهای روزمره یک اداره.",
    },
    tags: ["Business workflows", "Data", "Dashboards"],
  },
];
function Services() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  return (
    <section className="section services-section" id="services">
      <Reveal>
        <SectionHeading
          index="05"
          label={fa ? "خدمات" : "HOW I CAN HELP"}
          title={fa ? "فکر روشن." : "Clear thinking."}
          accent={fa ? "ساخت دقیق." : "Considered execution."}
          description={
            fa
              ? "زمینه‌های همکاری بر اساس ابزارها و پروژه‌های پورتفولیوی من."
              : "Areas of collaboration grounded in the tools and projects in my portfolio."
          }
        />
      </Reveal>
      <div className="service-grid">
        {services.map((service, i) => (
          <Reveal key={service.title.en} delay={i * 0.07}>
            <article className="service-card">
              <div className="service-top">
                <service.icon size={26} />
                <span>0{i + 1}</span>
              </div>
              <h3>{service.title[lang]}</h3>
              <p className="muted">{service.description[lang]}</p>
              <ul>
                {service.tags.map((tag) => (
                  <li key={tag}>
                    <Check size={13} />
                    {tag}
                  </li>
                ))}
              </ul>
              <a href={`#contact`} className="text-link">
                {fa ? "درباره پروژه صحبت کنیم" : "Let’s discuss your project"}
                <ArrowUpRight size={17} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Process() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const steps = fa
    ? [
        ["کشف", "هدف و مسئله را روشن می‌کنیم."],
        ["طراحی", "ساختار و تجربه را شکل می‌دهیم."],
        ["ساخت", "رابط، منطق و داده را وصل می‌کنیم."],
        ["بهبود", "بررسی، اصلاح و آماده‌سازی برای انتشار."],
      ]
    : [
        ["Discover", "Understand the problem and define the goal."],
        ["Design", "Shape the structure and the experience."],
        ["Build", "Connect the interface, logic and data."],
        ["Refine", "Test, iterate and prepare for release."],
      ];
  return (
    <section className="section process-section">
      <p className="eyebrow">
        06 / {fa ? "روش کار" : "FROM FIRST CONVERSATION TO FINAL DETAIL"}
      </p>
      <div className="process-grid">
        {steps.map(([title, text], i) => (
          <Reveal key={title} delay={i * 0.07}>
            <div className="process-step">
              <div>
                <span>0{i + 1}</span>
                <ArrowUpRight size={20} />
              </div>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Testimonials() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  return (
    <section className="section testimonial-section" id="testimonials">
      <Reveal>
        <SectionHeading
          index="07"
          label={fa ? "دیدگاه‌ها" : "WORDS THAT MATTER"}
          title={fa ? "اعتماد،" : "Trust, earned"}
          accent={fa ? "با همکاری شکل می‌گیرد." : "through collaboration."}
        />
      </Reveal>
      <div className="testimonial-card">
        <Quote className="quote-icon" size={40} />
        {item ? (
          <>
            <blockquote>{item.quote[lang]}</blockquote>
            <div className="testimonial-person">
              <div>
                <b>{item.name}</b>
                <p>{item.role[lang]}</p>
              </div>
              {item.rating && (
                <span className="rating" aria-label={`${item.rating} out of 5`}>
                  {Array.from({ length: item.rating }, (_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </span>
              )}
            </div>
            {testimonials.length > 1 && (
              <div className="carousel-controls">
                <button
                  className="icon-button"
                  aria-label={fa ? "دیدگاه قبلی" : "Previous testimonial"}
                  onClick={() =>
                    setIndex(
                      (i) =>
                        (i - 1 + testimonials.length) % testimonials.length,
                    )
                  }
                >
                  <ChevronLeft size={20} />
                </button>
                <span aria-live="polite">
                  {index + 1} / {testimonials.length}
                </span>
                <button
                  className="icon-button"
                  aria-label={fa ? "دیدگاه بعدی" : "Next testimonial"}
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <span className="pending-label">
              {fa ? "در انتظار دیدگاه تأییدشده" : "VERIFIED FEEDBACK PENDING"}
            </span>
            <h3>
              {fa ? "صدای واقعی، ارزش واقعی." : "Real voices. Real value."}
            </h3>
            <p className="muted">
              {fa
                ? "هنوز دیدگاه تأییدشده‌ای ارائه نشده است. پس از دریافت بازخورد و اجازه مشتری، این بخش تکمیل می‌شود."
                : "No verified client feedback has been provided yet. This space is reserved for authentic reviews shared with permission."}
            </p>
            <a className="text-link" href="#contact">
              {fa ? "بیایید گفتگو را آغاز کنیم" : "Let’s start a conversation"}
              <ArrowUpRight size={17} />
            </a>
          </>
        )}
      </div>
    </section>
  );
}
export function Home() {
  return (
    <>
      <Hero />
      <div className="tech-ribbon" dir="ltr">
        <span>IDEAS INTO INTERFACES</span>
        <span>✳</span>
        <span>REACT</span>
        <span>LARAVEL</span>
        <span>PYTHON</span>
        <span>DATABASES</span>
        <span>✳</span>
        <span>BUILT WITH PURPOSE</span>
      </div>
      <About />
      <Skills />
      <Work />
      <Experience />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
