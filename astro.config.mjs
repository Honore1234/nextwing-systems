// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
//
// Hosting: GitHub Pages project site at https://honore1234.github.io/nextwing-systems/
// To move to a custom domain later (e.g. https://nextwing.mx):
//   1. set `site` to the domain and remove `base` (or set it to '/'),
//   2. add public/CNAME containing the domain and configure it in the repo's Pages settings.
// All internal links, canonical/og:url/hreflang and assets follow these two values.
export default defineConfig({
  site: 'https://honore1234.github.io',
  base: '/nextwing-systems',
  trailingSlash: 'ignore',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
