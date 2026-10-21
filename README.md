# NextWing Systems

Landing page for **NextWing Systems by Honoré Labs** — an experimental UAV program from Mexico
building modular, accessible, repairable drones for emergency response, environmental monitoring,
infrastructure inspection and search & reconnaissance.

The site is a static, bilingual one-page site built with [Astro](https://astro.build).
It ships plain HTML + CSS — no client-side JavaScript framework.
The page is available in Spanish (default, `/`) and English (`/en/`).

## Requirements

- Node.js **22.22 or newer** (see `.nvmrc`)

The Inter font is self-hosted via `@fontsource-variable/inter` (no Google Fonts request).
- npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site into ./dist
npm run preview  # serve the production build locally
```

## Project structure

```text
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── astro.config.mjs        # Astro config (site, base, i18n)
├── public/
│   └── favicon.svg         # placeholder "NX" favicon
└── src/
    ├── i18n/
    │   ├── es.ts               # Spanish copy (default locale)
    │   ├── en.ts               # English copy
    │   └── index.ts            # locale helpers
    ├── layouts/
    │   └── BaseLayout.astro    # <head>: title, description, Open Graph, favicon
    ├── components/             # one component per page section
    │   ├── Nav.astro
    │   ├── Hero.astro
    │   ├── Manifesto.astro
    │   ├── Origin.astro        # NF-X1 / Night Fury X1
    │   ├── System.astro        # NextWing Operating System + Testbed-1
    │   ├── Missions.astro
    │   ├── Proof.astro
    │   ├── Roadmap.astro
    │   ├── Ethics.astro
    │   ├── Contact.astro
    │   └── Footer.astro
    ├── pages/
    │   ├── index.astro         # Spanish page (/)
    │   └── en/index.astro      # English page (/en/)
    └── styles/
        └── global.css          # design tokens (:root variables) and all styles
```

## Editing content

All visible text lives in `src/i18n/es.ts` and `src/i18n/en.ts` (same shape, typed against
the Spanish file). Each section's markup lives in its own file under `src/components/`. Styles are
global and shared via `src/styles/global.css` (colors and spacing are defined as CSS variables
in `:root`).

## Before publishing

- Confirm the contact email in `src/i18n/es.ts` / `en.ts`.
- Replace `public/favicon.svg` with the final logo and add an Open Graph share image.

## Deploy

The site is published to **GitHub Pages** at <https://honore1234.github.io/nextwing-systems/>
(English: <https://honore1234.github.io/nextwing-systems/en/>).

`.github/workflows/deploy.yml` builds and deploys automatically on every push to `main` or
`astro-migration` (or manually via *Actions → Deploy to GitHub Pages → Run workflow*).

Because it is a GitHub *project* site, the build is served from a sub-path. This is set in
`astro.config.mjs`:

```js
site: 'https://honore1234.github.io',
base: '/nextwing-systems',
```

All internal links, the language switch, canonical / Open Graph / hreflang URLs, the favicon
and CSS/font assets are derived from these two values (via `astro:i18n` helpers and
`import.meta.env.BASE_URL`), so never hard-code root paths like `/favicon.svg`.

### Moving to a custom domain later

1. In `astro.config.mjs`, set `site` to the domain (e.g. `'https://nextwing.mx'`) and remove `base`.
2. Add `public/CNAME` containing just the domain.
3. Set the custom domain in *Settings → Pages* and point DNS at GitHub Pages.

`npm run build` outputs a fully static site in `dist/`, so any other static host
(Vercel, Netlify, Cloudflare Pages, …) works too.
