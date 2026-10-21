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

/** Root path for a locale ("/" for the default locale, "/en/" otherwise). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
