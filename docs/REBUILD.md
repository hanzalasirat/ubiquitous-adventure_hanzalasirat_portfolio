# Premium portfolio migration

The active application is now Next.js App Router + TypeScript, Tailwind, Framer Motion and Lucide. The Vite entry point and unused legacy components were removed; earlier versions remain in Git history. Original profile facts, skills and project descriptions are retained in `src/data/portfolio.ts`.

Features include bilingual/RTL layouts, theme persistence, purposeful motion with reduced-motion support, mobile navigation, interactive skills, project filters, pre-rendered case studies, experience/education categories, service cards, a real-data testimonial carousel, configurable HTTPS contact submission and custom 404.

CV, portrait, verified work/education/certification dates, client feedback, actual project screenshots/source/demo URLs and a contact backend URL are still required. Empty states are explicit and no claims are fabricated. Contact form success requires a successful backend response; when unconfigured it explains the missing delivery service and offers direct email.

The static Next.js output is `out`. Existing private Site identity is preserved. GitHub Pages builds set `NEXT_PUBLIC_BASE_PATH` to this repository's subdirectory. CI builds use a controlled test endpoint; production builds do not inherit it. Metadata remains noindex for this private review.

See DESIGN.md for architecture, design direction and the backend payload contract.
