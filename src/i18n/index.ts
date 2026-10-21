import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import es from './es';
import en from './en';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

const dictionaries = { es, en };

export function getLocale(current: string | undefined): Locale {
  return (locales as readonly string[]).includes(current ?? '') ? (current as Locale) : defaultLocale;
}

/** Dictionary for the current page, based on Astro.currentLocale. */
export function useTranslations(current: string | undefined) {
  return dictionaries[getLocale(current)];
}

/**
 * Base-aware root path for a locale, e.g. "/nextwing-systems/" (es) or
 * "/nextwing-systems/en/" (en). Follows `base` in astro.config.mjs.
 */
export function localePath(locale: Locale): string {
  return getRelativeLocaleUrl(locale, '');
}

/** Absolute URL for a locale root, using `site` + `base` from astro.config.mjs. */
export function localeUrl(locale: Locale): string {
  return getAbsoluteLocaleUrl(locale, '');
}

/** Prefix a path inside /public with the configured base, e.g. withBase('favicon.svg'). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
