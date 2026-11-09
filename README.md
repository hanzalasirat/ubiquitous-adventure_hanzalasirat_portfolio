# Hanzala Sirat — Portfolio

A responsive React + Vite portfolio in Dari and English, designed for GitHub Pages.

## Develop

```sh
npm ci
npm run dev
```

## Verify

```sh
node --test tests/helpers.test.js
npm run build
```

## Edit content

- `src/content/portfolio.js`: identity, contacts, skills, projects, optional CV and project URLs.
- `src/content/copy.js`: Dari and English interface text.
- `src/index.css`: responsive layout, theme and print styling.
- `src/App.jsx`: pages and interactions.

The contact form prepares a draft in the visitor's email application; it does not claim to send messages. The printable profile can be saved as PDF using the browser. A real CV download is shown only when `resumeUrl` is configured. The local portfolio guide needs no API key. Weather uses the existing Open-Meteo service.

The existing workflow deploys `dist` to GitHub Pages after changes merge into `main`. The configured Vite base path matches this repository. Hash-based navigation supports refresh and direct project links on static hosting.

See `docs/REBUILD.md` for the implemented scope and owner information still required. Old components are retained for reference and are not loaded by the new app.

## Browser verification

`npm test`, `npm run check:app` and `npm run build` check the rebuilt application. `npm run test:e2e` runs the desktop/mobile browser suite after building (requires Chromium installed through Playwright). The **Verify portfolio** GitHub workflow installs the browser and runs these checks automatically, saving screenshots and an HTML report as the `portfolio-browser-verification` artifact for 14 days.
