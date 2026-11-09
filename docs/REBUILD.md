# Portfolio rebuild

## Implemented
- New responsive visual system, home, introduction, categorized skills and contact.
- Dari (RTL) and English with persisted language and light/dark theme.
- Filterable projects and individual detail routes with explicitly illustrative interface art.
- Printable professional profile; optional real CV download configured in `src/content/portfolio.js`.
- Honest email draft contact flow, correct email and GitHub links; no simulated delivery.
- Local portfolio guide, city weather lookup, external OpenStreetMap link.
- GitHub Pages compatible hash routes, aliases for former skill/tool pages, 404 state.
- Metadata, favicon, structured data, robots and single canonical URL sitemap.
- Reduced motion, labeled controls, focus states, route focus management and print styles.

## Owner information still required
1. Approved portrait and any logo/branding preferences.
2. Full CV, employment dates, education and certificates.
3. Actual source and live-demo URLs, screenshots and verified outcomes for each project.
4. LinkedIn URL if wanted, and confirmation of current phone/email/location.
5. Whether Pashto is needed in addition to Dari and English.
6. For direct form delivery or generative AI, a server-side service and credentials. Never place private API secrets in VITE_* variables.

Project descriptions, technologies and statuses come from the original source, not an audit of those applications. Unsupported experience counts, skill percentages and response-time promises were removed. No blog content, certificates or employment entries are invented.

## Hosting and review
The existing GitHub Pages workflow is retained. This branch is prepared for review before merging into main. Hash routes avoid GitHub Pages refresh 404s. Search engines receive root metadata; separate indexable language/project pages require a later prerender/SSR migration. No claim of independent search indexing is made.

Legacy source files remain in the repository for reference, but the new entry point does not load them. Existing `/ai`, `/map`, `/weather` hash paths route to the lab. The guide is explicitly local, not generative AI. The lab provides weather and an external map, not the original interactive map UI.
