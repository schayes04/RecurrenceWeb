import { LOCALES, DEFAULT_LOCALE, localeInfo, appStoreUrl, type Locale } from '../i18n/locales';
import { pathFor, type PageKey } from '../i18n/routes';
import { isPublished } from '../content';
import { UI } from '../i18n/ui';

export const SITE = 'https://recurrence-app.com';

export const absolute = (path: string): string => new URL(path, SITE).href;

export interface Alternate { hreflang: string; href: string }

/**
 * hreflang alternates for a page: every locale where the page is published,
 * under each of that locale's codes, plus x-default (en-US).
 * Returns [] when the page itself isn't published, so drafts and pending
 * translations never join a cluster.
 */
export const alternatesFor = (key: PageKey, locale: Locale): Alternate[] => {
  if (!isPublished(locale, key)) return [];
  const list: Alternate[] = [];
  for (const l of LOCALES) {
    if (!isPublished(l.code, key)) continue;
    const href = absolute(pathFor(key, l.code));
    for (const code of l.hreflang) list.push({ hreflang: code, href });
  }
  if (isPublished(DEFAULT_LOCALE, key)) list.push({ hreflang: 'x-default', href: absolute(pathFor(key, DEFAULT_LOCALE)) });
  return list;
};

/** JSON-LD for the app itself. No aggregateRating, by decision. */
export const appJsonLd = (locale: Locale, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: UI[locale].appName,
  ...(UI[locale].appName !== 'Recurrence' && { alternateName: 'Recurrence' }),
  operatingSystem: 'iOS, iPadOS, macOS',
  applicationCategory: 'ProductivityApplication',
  description,
  inLanguage: localeInfo(locale).htmlLang,
  url: absolute(pathFor('home', locale)),
  installUrl: appStoreUrl(locale),
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Shayes Apps', url: 'https://shayesapps.com/' },
});

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shayes Apps',
  legalName: 'Shayes Apps LLC',
  url: 'https://shayesapps.com/',
  logo: absolute('/icon-512.png'),
  email: 'support@shayesapps.com',
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absolute(item.path) })),
});

/** JSON-LD for a free web tool (the next due date calculator). */
export const toolJsonLd = (locale: Locale, key: PageKey, name: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name,
  description,
  url: absolute(pathFor(key, locale)),
  inLanguage: localeInfo(locale).htmlLang,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Shayes Apps', url: 'https://shayesapps.com/' },
});
