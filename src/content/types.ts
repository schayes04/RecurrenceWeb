import type { CompetitorId, UseCaseId } from '../i18n/routes';
import type { Area, GuideId, Unit } from './guide';

/** Title tag and meta description; both are written per locale, not translated word for word. */
export interface Meta {
  title: string;
  description: string;
  /** Draft pages build for preview but are noindex and left out of sitemaps and hreflang. */
  draft?: boolean;
}

export interface Faq { q: string; a: string }
/** A short excerpt from a 5-star App Store review, quoted as written, with the reviewer's nickname. */
export interface Review { quote: string; author: string }
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
  /** App Store reviews from this locale's storefront. Empty hides the section. */
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

export interface LegalDoc { id: string; title: string; updated: string; sections: { title: string; body: string[] }[] }
/** Privacy policy and terms of use on one page, like shayesapps.com/policies. */
export interface PoliciesContent { meta: Meta; h1: string; docs: LegalDoc[] }

/** The "How often should I…?" guide. */
export interface HowOftenContent {
  meta: Meta;
  /** Short name for the footer and breadcrumbs. */
  name: string;
  h1: string;
  intro: string;
  searchLabel: string;
  searchPlaceholder: string;
  noResults: string;
  jumpTo: string;
  areas: Record<Area, string>;
  /** Each entry: what to do, the typical interval, and one line of context. */
  items: Record<GuideId, { name: string; often: string; note: string }>;
  /** Link from each entry to the calculator. */
  nextDate: string;
  disclaimer: string;
  ctaTitle: string;
  ctaBody: string;
}

/** Unit names by plural category (Intl.PluralRules); "other" is required. */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

/** The next due date calculator. */
export interface NextDueContent {
  meta: Meta;
  name: string;
  h1: string;
  intro: string;
  lastDone: string;
  today: string;
  every: string;
  units: Record<Unit, PluralForms>;
  quickTitle: string;
  quick: { every: number; unit: Unit; label: string }[];
  /** Shown when the calculator is opened from a guide entry. {task} is the entry's name. */
  preset: string;
  nextDue: string;
  /** {rel} is a relative time such as "in 98 days". */
  upcoming: string;
  /** {rel} is a relative time such as "12 days ago". */
  overdue: string;
  /** {date} is the next date if the task is done today. */
  doneToday: string;
  afterThat: string;
  invalid: string;
  noscript: string;
  /** Line beside the App Store badge under the result. */
  remind: string;
  popularTitle: string;
  popularBody: string;
  guideLink: string;
  ctaTitle: string;
  ctaBody: string;
  howTitle: string;
  howSteps: string[];
  howNote: string;
  faqTitle: string;
  faq: Faq[];
}

export interface ToolsContent { howOften: HowOftenContent; nextDue: NextDueContent }

export interface SiteContent {
  home: HomeContent;
  features: FeaturesContent;
  useCasesHub: HubContent;
  useCases: Record<UseCaseId, UseCaseContent>;
  compareHub: HubContent;
  compare: Record<CompetitorId, CompareContent>;
  support: SupportContent;
  press: PressContent;
  /** Free tools. Locales without their own copy show the English tools, noindex. */
  tools?: ToolsContent;
  /** Alt text for each screenshot. */
  screenAlt: Record<ScreenKey, string>;
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
    fiveStars: string;
  };
}
