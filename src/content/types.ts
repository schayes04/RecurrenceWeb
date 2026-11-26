import type { CompetitorId, UseCaseId } from '../i18n/routes';

/** Title tag and meta description; both are written per locale, not translated word for word. */
export interface Meta {
  title: string;
  description: string;
  /** Draft pages build for preview but are noindex and left out of sitemaps and hreflang. */
  draft?: boolean;
}

export interface Faq { q: string; a: string }
export interface Review { quote: string }
/** A task as it appears in the app's starter list. */
export interface SampleTask { name: string; schedule: string }
export type ScreenKey = 'home' | 'history' | 'widgets' | 'add';

export interface HomeContent {
  meta: Meta;
  heroAccentBefore: string;
  heroAccent: string;
  heroAccentAfter: string;
  intro: string;
  useCasesTitle: string;
  useCasesIntro: string;
  historyKicker: string;
  historyTitle: string;
  historyBody: string;
  bullets: string[];
  reviewsTitle: string;
  reviews: Review[];
  freeTitle: string;
  freeBody: string;
  faqTitle: string;
  faq: Faq[];
}

export interface FeaturesContent {
  meta: Meta;
  h1: string;
  intro: string;
  sections: { title: string; body: string; points: string[]; screen: ScreenKey }[];
}

export interface HubContent { meta: Meta; h1: string; intro: string }

export interface UseCaseContent {
  meta: Meta;
  /** Short name for cards and menus. */
  name: string;
  /** One line under the name on cards. */
  blurb: string;
  h1: string;
  intro: string;
  sampleTitle: string;
  sample: SampleTask[];
  points: { title: string; body: string }[];
  screen: ScreenKey;
  related: UseCaseId[];
}

export interface CompareContent {
  meta: Meta;
  name: string;
  h1: string;
  intro: string;
  /** ISO date the competitor's listing was last checked. */
  lastChecked: string;
  rows: { feature: string; recurrence: string; other: string }[];
  whenOther: string;
  verdict: string;
}

export interface SupportContent { meta: Meta; h1: string; intro: string; faqTitle: string; faq: Faq[]; /** Last question, answered with the support email. */ contact: Faq }

export interface PressContent {
  meta: Meta;
  h1: string;
  intro: string;
  facts: { label: string; value: string }[];
  kitTitle: string;
  kitBody: string;
  kitLink: string;
  contactTitle: string;
  contactBody: string;
}

export interface LegalContent { meta: Meta; h1: string; updated: string; sections: { title: string; body: string[] }[] }

export interface SiteContent {
  home: HomeContent;
  features: FeaturesContent;
  useCasesHub: HubContent;
  useCases: Record<UseCaseId, UseCaseContent>;
  compareHub: HubContent;
  compare: Record<CompetitorId, CompareContent>;
  support: SupportContent;
  press: PressContent;
  privacy: LegalContent;
  terms: LegalContent;
  /** Labels used on templates. */
  labels: {
    sampleList: string;
    whatYouGet: string;
    relatedUseCases: string;
    allUseCases: string;
    comparedOn: string;
    feature: string;
    whenOtherTitle: string;
    verdictTitle: string;
    lastChecked: string;
    lastUpdated: string;
    faqTitle: string;
    readMore: string;
  };
}
