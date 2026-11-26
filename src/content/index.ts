// Content registry. A locale appears here once its copy is written and reviewed.
// Until then its pages build with the English copy, marked noindex, and are left
// out of sitemaps and hreflang so search engines never see untranslated pages.

import type { Locale } from '../i18n/locales';
import type { PageKey, UseCaseId, CompetitorId } from '../i18n/routes';
import type { Meta, SiteContent, ToolsContent } from './types';
import enTools from './tools/en-US';
import enUS from './en-US';
import { enGB, enAU, enCA } from './en-variants';
import de from './de';
import fr from './fr';
import frCA from './fr-CA';
import es from './es';
import esES from './es-ES';
import ja from './ja';
import ko from './ko';
import ptBR from './pt-BR';
import ptPT from './pt-PT';
import ru from './ru';
import zhHans from './zh-Hans';
import zhHant from './zh-Hant';

const CONTENT: Partial<Record<Locale, SiteContent>> = {
  'en-US': enUS,
  'en-GB': enGB,
  'en-AU': enAU,
  'en-CA': enCA,
  de,
  fr,
  'fr-CA': frCA,
  es,
  'es-ES': esES,
  ja,
  ko,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  ru,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
};

export const hasContent = (locale: Locale): boolean => Boolean(CONTENT[locale]);

/** Copy for a locale, falling back to en-US while a translation is pending. */
export const contentFor = (locale: Locale): SiteContent => CONTENT[locale] ?? enUS;

/** Free tools copy for a locale, falling back to English until it's translated. */
export const toolsFor = (content: SiteContent): ToolsContent => content.tools ?? enTools;

/** The meta block for a page. */
export const metaFor = (content: SiteContent, key: PageKey): Meta => {
  if (key === 'tool/how-often') return toolsFor(content).howOften.meta;
  if (key === 'tool/next-due') return toolsFor(content).nextDue.meta;
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
  if (!content) return false;
  if (key.startsWith('tool/') && !content.tools) return false;
  return !metaFor(content, key).draft;
};
