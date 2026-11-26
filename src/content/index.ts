// Content registry. A locale appears here once its copy is written and reviewed.
// Until then its pages build with the English copy, marked noindex, and are left
// out of sitemaps and hreflang so search engines never see untranslated pages.

import type { Locale } from '../i18n/locales';
import type { PageKey, UseCaseId, CompetitorId } from '../i18n/routes';
import type { Meta, SiteContent } from './types';
import enUS from './en-US';
import { enGB, enAU, enCA } from './en-variants';

const CONTENT: Partial<Record<Locale, SiteContent>> = {
  'en-US': enUS,
  'en-GB': enGB,
  'en-AU': enAU,
  'en-CA': enCA,
};

export const hasContent = (locale: Locale): boolean => Boolean(CONTENT[locale]);

/** Copy for a locale, falling back to en-US while a translation is pending. */
export const contentFor = (locale: Locale): SiteContent => CONTENT[locale] ?? enUS;

/** The meta block for a page. */
export const metaFor = (content: SiteContent, key: PageKey): Meta => {
  if (key.startsWith('use-case/')) return content.useCases[key.slice(9) as UseCaseId].meta;
  if (key.startsWith('compare/')) return content.compare[key.slice(8) as CompetitorId].meta;
  switch (key) {
    case 'home': return content.home.meta;
    case 'features': return content.features.meta;
    case 'use-cases': return content.useCasesHub.meta;
    case 'compare': return content.compareHub.meta;
    case 'support': return content.support.meta;
    case 'press': return content.press.meta;
    case 'policies': return content.policies.meta;
  }
  throw new Error(`No meta for ${key}`);
};

/** A page is published in a locale when that locale has its own copy and the page isn't a draft. */
export const isPublished = (locale: Locale, key: PageKey): boolean => {
  const content = CONTENT[locale];
  return Boolean(content) && !metaFor(content!, key).draft;
};
