// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // TODO: set the production URL once the domain is decided, e.g.
  // site: 'https://nextwing.example.com',
  // (enables canonical, og:url and absolute hreflang URLs in BaseLayout.astro)
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
