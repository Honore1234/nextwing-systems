# NextWing Systems

Landing page for **NextWing Systems by Honoré Labs** — an experimental UAV program from Mexico
building modular, accessible, repairable drones for emergency response, environmental monitoring,
infrastructure inspection and search & reconnaissance.

The site is a single static page (Spanish content) built with [Astro](https://astro.build).
It ships plain HTML + CSS — no client-side JavaScript framework.

## Requirements

- Node.js **22.22 or newer** (see `.nvmrc`)
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
├── astro.config.mjs        # Astro config (set `site` before deploying)
├── public/
│   └── favicon.svg         # placeholder "NX" favicon
└── src/
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
    │   └── index.astro         # assembles the sections
    └── styles/
        └── global.css          # design tokens (:root variables) and all styles
```

## Editing content

Each section lives in its own file under `src/components/`. Edit the text there; styles are
global and shared via `src/styles/global.css` (colors and spacing are defined as CSS variables
in `:root`).

## Before publishing

- Set `site` in `astro.config.mjs` to the real domain.
- Replace the placeholder contact email in `src/components/Contact.astro`.
- Replace `public/favicon.svg` with the final logo and add an Open Graph share image.

## Deploy

`npm run build` outputs a fully static site in `dist/`, deployable to any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, …).
