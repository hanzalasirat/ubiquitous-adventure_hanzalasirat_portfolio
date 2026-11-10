# Creative direction: HS / Creative Engineering

A personal engineering studio rather than an anonymous agency template. Charcoal canvas, acid-lime accents, ice-blue typography sculpture, editorial spacing, fine grid lines and restrained glass surfaces. The native CSS/Framer visual avoids heavy video/WebGL payloads. The bilingual interface supports English and Dari with full RTL layouts.

## Architecture
- Next.js App Router + TypeScript; statically exported HTML with real project URLs.
- Tailwind CSS v4 with a custom token-driven visual system.
- Framer Motion: entrance reveals, role transitions, filter layout transitions, page transitions and pointer-responsive hero. Reduced-motion preference is respected.
- Lucide icons; reusable layout, navigation, projects, contact, motion and content components.
- `src/data/portfolio.ts`: verified original content plus explicit optional CV/portrait, timeline and testimonials.
- `src/lib/contact.ts`: validation and real JSON submission to a configurable HTTPS endpoint; no secret in the browser.
- Static export supports Sites hosting; it does not include a runtime Next.js API server.

## Missing information
No fabricated clients, reviews, ratings, achievements, employment, education, credentials or outcomes. Empty timeline/testimonial states are explicitly labeled. Existing project titles, stacks and listed statuses come from the original portfolio; artwork is an illustrative UI study, never a claimed screenshot. Hero visuals use initials because no approved portrait is supplied.

Configure CV/portrait URLs, project source/demo URLs, timeline entries and approved testimonials in the data file. Empty CV points to a clearly labeled request flow, and absent demo/source URLs are shown as unavailable rather than fake buttons.

## Real contact delivery
Set `NEXT_PUBLIC_CONTACT_ENDPOINT` before build to an owned HTTPS JSON endpoint, such as Formspree. The endpoint must permit the Site origin and accept `name`, `email`, `subject`, `message`. Success appears only after a successful response. Non-2xx, timeout, loading, validation and unconfigured states are supported. Direct email remains available when unconfigured. Spam protection and rate limits must also be configured on the chosen service; the browser honeypot is only a supplement.

The current private review stays `noindex`. Change robots metadata only when the owner chooses a public production deployment and primary domain.
