# Hanzala Sirat / Creative Engineering

Premium bilingual portfolio built with **Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide**.

```sh
npm ci
npm run dev
npm test
npm run typecheck
npm run build
```

`next build` exports HTML into `out/`; static hosting needs no Node server. Project case studies are pre-rendered under `/projects/<slug>/`. `npm start` is intended only if static export is removed for a server deployment; serve `out/` for the current static build.

## Personalize

Edit `src/data/portfolio.ts`: profile, skills, projects, optional CV/portrait, verified timeline, approved testimonials. Add a supplied CV to `public/` and set `settings.cvUrl` to its public path. Add actual source/demo URLs to projects; missing links are not fabricated. Use real image paths in `settings.portraitUrl` to enable the responsive lazy-loaded portrait.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CONTACT_ENDPOINT` to your HTTPS form backend. Rebuild afterward. Public configuration must never contain private API keys. No endpoint means the UI explains that direct form delivery is unavailable and offers direct email. See `docs/DESIGN.md` for the payload contract and security requirements.

## Verification

`npm test` covers validation and actual submission success/failure behavior using controlled fetch responses. `npm run typecheck` checks all TS components. Browser tests cover real routes, theme/language, filters, skill tabs, mobile navigation, form states and WCAG checks; `npm run test:e2e` requires Playwright Chromium and a built `out/` directory. CI publishes reports/screenshots as artifacts.

The Site remains private and noindex until the owner selects public production hosting.
