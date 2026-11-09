import { useEffect, useRef, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { profile, projects, skillGroups } from "./content/portfolio";
import { copy } from "./content/copy";
import {
  contactMailto,
  filterProjects,
  readPreference,
  savePreference,
} from "./lib/helpers";
import { geocodeCity, getWeatherByCoords } from "./services/weatherService";

const Arrow = () => <span aria-hidden="true">↗</span>;
function SectionHead({ label, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="muted">{intro}</p>}
    </div>
  );
}
function ProjectArt({ project, t }) {
  return (
    <div
      className={`project-art ${project.color}`}
      aria-label={t.illustrative}
      role="img"
    >
      <div className="mini-window" aria-hidden="true">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>{project.id.split("-")[0]}.workspace</span>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <b>≋</b>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="mock-main">
            <span className="mock-heading" />
            <div className="mock-stats">
              <i />
              <i />
              <i />
            </div>
            <div className="mock-chart">
              {[40, 70, 53, 84, 62, 92, 74, 100].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mock-rows">
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <span className="art-caption">{t.illustrative}</span>
    </div>
  );
}
function Work({ lang, t }) {
  const [filter, setFilter] = useState("all");
  const shown = filterProjects(projects, filter);
  return (
    <section id="work" className="section">
      <SectionHead
        label={t.workLabel}
        title={t.workTitle}
        intro={t.workIntro}
      />
      <div className="filters" role="group" aria-label={t.work}>
        {["all", "business", "education", "health"].map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {t[item]}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {shown.map((project) => (
          <article key={project.id} className="project-card">
            <Link
              to={`/projects/${project.id}`}
              className="art-link"
              aria-label={`${t.details}: ${project.title[lang]}`}
            >
              <ProjectArt project={project} t={t} />
            </Link>
            <div className="project-copy">
              <div className="project-meta">
                <span>
                  {project.number} / {t[project.category]}
                </span>
                <span className="status">{t[project.status]}</span>
              </div>
              <h3>
                <Link to={`/projects/${project.id}`}>
                  {project.title[lang]}
                </Link>
              </h3>
              <p className="muted">{project.description[lang]}</p>
              <div className="tags" dir="ltr">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <Link className="text-link" to={`/projects/${project.id}`}>
                {t.details} <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {!shown.length && <p role="status">{t.noProjects}</p>}
    </section>
  );
}
function Skills({ lang, t }) {
  return (
    <section id="skills" className="section">
      <SectionHead
        label={t.skillsLabel}
        title={t.skillsTitle}
        intro={t.skillsIntro}
      />
      <div className="skill-grid">
        {skillGroups.map((group, i) => (
          <article className="skill-group" key={group.name.en}>
            <span className="skill-number">0{i + 1}</span>
            <h3>{group.name[lang]}</h3>
            <div className="tags" dir="ltr">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function Contact({ t }) {
  const [notice, setNotice] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setNotice(t.copied);
    } catch {
      setNotice(t.copyFailed);
    }
  }
  function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    window.location.href = contactMailto(
      profile.email,
      Object.fromEntries(form),
    );
    setNotice(t.mailOpened);
  }
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="eyebrow">{t.contactLabel}</p>
        <h2>{t.contactTitle}</h2>
        <p className="muted">{t.contactText}</p>
        <a className="email-link" href={`mailto:${profile.email}`} dir="ltr">
          {profile.email} <Arrow />
        </a>
        <div className="contact-actions">
          <button className="text-link" onClick={copyEmail}>
            {t.copyEmail}
          </button>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
          <a href={`tel:${profile.phone}`} dir="ltr">
            {profile.phone}
          </a>
        </div>
        <p className="notice" role="status">
          {notice}
        </p>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-row">
          <label>
            {t.name}
            <input name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            {t.email}
            <input
              name="sender"
              type="email"
              dir="ltr"
              autoComplete="email"
              required
              maxLength={200}
            />
          </label>
        </div>
        <label>
          {t.subject}
          <input name="subject" required maxLength={160} />
        </label>
        <label>
          {t.message}
          <textarea name="message" rows={5} required maxLength={2000} />
        </label>
        <p className="form-note">{t.mailNote}</p>
        <button className="button primary" type="submit">
          {t.send} <Arrow />
        </button>
      </form>
    </section>
  );
}
function Home({ lang, t }) {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" />
            {t.eyebrow}
          </p>
          <h1>
            {t.hero}
            <br />
            <em>{t.heroAccent}</em>
          </h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <Link to="/projects" className="button primary">
              {t.viewWork}
              <Arrow />
            </Link>
            <Link to="/contact" className="button secondary">
              {t.getInTouch}
              <Arrow />
            </Link>
          </div>
          <div className="hero-stack" dir="ltr">
            <span>React</span>
            <span>Laravel</span>
            <span>Python</span>
            <span>SQL</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="visual-coordinate">HS / DEVELOPER</span>
          <div className="monogram">
            h<span>s</span>
            <b>.</b>
          </div>
          <div className="code-label">&lt;ideas /&gt; → experiences</div>
          <div className="visual-bottom">
            <span>
              FRONTEND
              <br />
              BACKEND
              <br />
              DATABASES
            </span>
            <span>
              34.55° N<br />
              69.20° E
            </span>
          </div>
        </div>
      </section>
      <div className="hero-bottom">
        <span>{profile.name}</span>
        <Link to="/about">{t.scroll} ↓</Link>
        <span>PORTFOLIO / 2026</span>
      </div>
      <About lang={lang} t={t} />
      <Work lang={lang} t={t} />
      <Skills lang={lang} t={t} />
      <section className="resume-band">
        <div>
          <p className="eyebrow">{t.resumeLabel}</p>
          <h2>{t.resumeTitle}</h2>
          <p className="muted">{t.resumeIntro}</p>
        </div>
        <Link to="/resume" className="button secondary">
          {t.resumeView} <Arrow />
        </Link>
      </section>
      <Contact t={t} />
    </>
  );
}
function About({ lang, t }) {
  return (
    <section id="about" className="section about-section">
      <SectionHead label={t.aboutLabel} title={t.aboutTitle} />
      <div className="about-body">
        <p>{t.aboutText}</p>
        <p className="muted">{t.aboutText2}</p>
        <dl>
          <div>
            <dt>{t.location}</dt>
            <dd>{profile.location[lang]}</dd>
          </div>
          <div>
            <dt>{t.focus}</dt>
            <dd>{t.focusText}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
function ProjectDetail({ lang, t }) {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  if (!project) return <NotFound t={t} />;
  return (
    <article className="section detail-page">
      <Link className="text-link" to="/projects">
        ← {t.back}
      </Link>
      <p className="eyebrow detail-eyebrow">
        {project.number} / {t[project.category]} · {t[project.status]}
      </p>
      <h1>{project.title[lang]}</h1>
      <p className="detail-intro muted">{project.description[lang]}</p>
      <ProjectArt project={project} t={t} />
      <div className="detail-grid">
        <div>
          <h2>{t.overview}</h2>
          <p>{project.problem[lang]}</p>
          <h2>{t.approach}</h2>
          <p>{project.approach[lang]}</p>
        </div>
        <aside>
          <h2>{t.features}</h2>
          <ul>
            {project.features[lang].map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h2>{t.stack}</h2>
          <div className="tags" dir="ltr">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </div>
      <p className="form-note">{t.projectNote}</p>
      <div className="project-links">
        {project.source && (
          <a href={project.source}>
            GitHub <Arrow />
          </a>
        )}
        {project.demo && (
          <a href={project.demo}>
            Live demo <Arrow />
          </a>
        )}
        {!project.source && !project.demo && (
          <p className="muted">{t.linksPending}</p>
        )}
        <a
          className="button primary"
          href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title.en)}`}
        >
          {t.requestDetails}
          <Arrow />
        </a>
      </div>
    </article>
  );
}
function Resume({ lang, t }) {
  return (
    <section className="section resume-page">
      <div className="print-actions">
        <button className="button primary" onClick={() => window.print()}>
          {t.print}
        </button>
        {profile.resumeUrl && (
          <a className="button secondary" href={profile.resumeUrl} download>
            {t.cvDownload}
          </a>
        )}
      </div>
      <p className="eyebrow">{t.profileTitle}</p>
      <h1>{lang === "fa" ? profile.nameFa : profile.name}</h1>
      <p className="detail-intro">{t.resumeIntro}</p>
      <p>
        {profile.location[lang]} ·{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <a href={profile.github}>{profile.github}</a>
      <h2>{t.about}</h2>
      <p>{t.aboutText}</p>
      <h2>{t.skills}</h2>
      {skillGroups.map((group) => (
        <p key={group.name.en}>
          <strong>{group.name[lang]}: </strong>
          <span dir="ltr">{group.items.join(" · ")}</span>
        </p>
      ))}
      <h2>{t.work}</h2>
      {projects.map((project) => (
        <div key={project.id} className="resume-project">
          <h3>{project.title[lang]}</h3>
          <p>{project.description[lang]}</p>
          <p dir="ltr">{project.stack.join(" · ")}</p>
        </div>
      ))}
      <h2>{t.background}</h2>
      <p>{t.backgroundNote}</p>
      <p className="muted">{t.cvPending}</p>
    </section>
  );
}
function Lab({ lang, t }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [state, setState] = useState("");
  const [topic, setTopic] = useState("about");
  const request = useRef(0);
  useEffect(
    () => () => {
      request.current++;
    },
    [],
  );
  async function lookup(event) {
    event.preventDefault();
    const current = ++request.current;
    setState("loading");
    setWeather(null);
    try {
      const place = await geocodeCity(city.trim());
      const result = await getWeatherByCoords(place.latitude, place.longitude);
      if (current !== request.current) return;
      setWeather({ ...result, name: place.name });
      setState("");
    } catch {
      if (current === request.current) setState("error");
    }
  }
  return (
    <section className="section">
      <SectionHead label={t.tools} title={t.labTitle} intro={t.labIntro} />
      <div className="lab-grid">
        <article className="lab-card">
          <h2>{t.weather}</h2>
          <form onSubmit={lookup}>
            <label>
              {t.city}
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                maxLength={100}
              />
            </label>
            <button className="button primary" disabled={state === "loading"}>
              {state === "loading" ? t.loading : t.weather}
            </button>
          </form>
          <div aria-live="polite">
            {state === "error" && <p>{t.weatherError}</p>}
            {weather && (
              <div className="weather-result">
                <h3>{weather.name}</h3>
                <p>{weather.temperature ?? "—"} °C</p>
                <small>
                  {weather.windspeed ?? "—"} km/h · {weather.timezone}
                </small>
              </div>
            )}
          </div>
          <small className="muted">Open-Meteo</small>
        </article>
        <article className="lab-card">
          <h2>{t.assistant}</h2>
          <p className="muted">{t.guideText}</p>
          <div className="filters">
            {["about", "skills", "work", "contact"].map((item) => (
              <button
                key={item}
                aria-pressed={topic === item}
                onClick={() => setTopic(item)}
              >
                {t[item]}
              </button>
            ))}
          </div>
          <p aria-live="polite">
            {topic === "about"
              ? t.aboutText
              : topic === "skills"
                ? skillGroups.flatMap((group) => group.items).join(" · ")
                : topic === "work"
                  ? projects.map((project) => project.title[lang]).join(" / ")
                  : profile.email}
          </p>
          <Link
            className="text-link"
            to={`/${topic === "work" ? "projects" : topic}`}
          >
            {t[topic]} <Arrow />
          </Link>
        </article>
      </div>
      <a
        className="text-link map-link"
        href="https://www.openstreetmap.org/#map=12/34.5553/69.2075"
        target="_blank"
        rel="noreferrer"
      >
        {t.map} <Arrow />
      </a>
    </section>
  );
}
function NotFound({ t }) {
  return (
    <section className="section">
      <h1>404</h1>
      <p>{t.notFound}</p>
      <Link className="button primary" to="/">
        {t.goHome}
      </Link>
    </section>
  );
}
export default function App() {
  const [lang, setLang] = useState(() =>
    readPreference("portfolio-language", "fa", ["fa", "en"]),
  );
  const [theme, setTheme] = useState(() =>
    readPreference("portfolio-theme", "dark", ["light", "dark"]),
  );
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang === "fa" ? "fa-AF" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    savePreference("portfolio-language", lang);
    savePreference("portfolio-theme", theme);
  }, [lang, theme]);
  useEffect(() => {
    const project = projects.find(
      (item) => pathname === `/projects/${item.id}`,
    );
    const key = pathname === "/projects" ? "work" : pathname.slice(1);
    const title = project ? project.title[lang] : t[key] || t.home;
    document.title = `${title} | ${profile.name}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", project ? project.description[lang] : t.intro);
    window.scrollTo({ top: 0, behavior: "instant" });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, lang, t]);
  const nav = [
    ["/", "home"],
    ["/about", "about"],
    ["/projects", "work"],
    ["/skills", "skills"],
    ["/contact", "contact"],
  ];
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label={profile.name}
        >
          hs<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={t.menu}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav
          id="main-navigation"
          className={open ? "open" : ""}
          aria-label={t.menu}
        >
          {nav.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              aria-current={pathname === to ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {t[label]}
            </Link>
          ))}
        </nav>
        <div className="header-controls">
          <button
            onClick={() => {
              setLang(lang === "en" ? "fa" : "en");
              setOpen(false);
            }}
            lang={lang === "fa" ? "en" : "fa"}
          >
            {lang === "fa" ? "EN" : "دری"}
          </button>
          <button
            aria-label={t.theme}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>
        </div>
      </header>
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home lang={lang} t={t} />} />
          <Route path="/about" element={<About lang={lang} t={t} />} />
          <Route path="/projects" element={<Work lang={lang} t={t} />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetail lang={lang} t={t} />}
          />
          <Route path="/skills" element={<Skills lang={lang} t={t} />} />
          <Route path="/contact" element={<Contact key={lang} t={t} />} />
          <Route path="/resume" element={<Resume lang={lang} t={t} />} />
          <Route path="/lab" element={<Lab lang={lang} t={t} />} />
          {["ai", "weather", "map"].map((path) => (
            <Route
              key={path}
              path={`/${path}`}
              element={<Navigate to="/lab" replace />}
            />
          ))}
          {[
            "python",
            "javascript",
            "php",
            "react",
            "html",
            "css",
            "oracle",
            "mysql",
            "postgre",
            "postgresql",
            "laravel",
            "nodejs",
            "git",
            "networking",
            "icdl",
          ].map((path) => (
            <Route
              key={path}
              path={`/${path}`}
              element={<Navigate to="/skills" replace />}
            />
          ))}
          <Route path="*" element={<NotFound t={t} />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div>
          <Link className="brand" to="/">
            hs<span>.</span>
          </Link>
          <p>{t.footer}</p>
        </div>
        <div className="footer-links">
          <Link to="/resume">{t.resume}</Link>
          <Link to="/lab">{t.tools}</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t.top} ↑
          </button>
        </div>
        <small>
          © {new Date().getFullYear()} {profile.name}
        </small>
      </footer>
    </>
  );
}
