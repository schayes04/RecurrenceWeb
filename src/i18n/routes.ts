// Route table: every page key and its URL path in each locale.
// Latin-script locales get translated slugs; ja, ko, ru and zh use the English
// slugs so links stay readable when shared (Google indexes either form).

import { LOCALES, localeInfo, type Locale } from './locales';

export const USE_CASES = ['chores', 'bills', 'pets', 'home-maintenance', 'car-maintenance', 'plants', 'self-care', 'family'] as const;
export type UseCaseId = (typeof USE_CASES)[number];

export const COMPETITORS = ['apple-reminders', 'todoist', 'tody'] as const;
export type CompetitorId = (typeof COMPETITORS)[number];

export type PageKey =
  | 'home' | 'features' | 'support' | 'press' | 'policies'
  | 'use-cases' | `use-case/${UseCaseId}`
  | 'compare' | `compare/${CompetitorId}`;

export const PAGE_KEYS: PageKey[] = [
  'home', 'features',
  'use-cases', ...USE_CASES.map((id) => `use-case/${id}` as PageKey),
  'compare', ...COMPETITORS.map((id) => `compare/${id}` as PageKey),
  'support', 'press', 'policies',
];

type Section = 'features' | 'use-cases' | 'compare' | 'support' | 'press' | 'policies';

interface SlugSet {
  section: Record<Section, string>;
  useCase: Record<UseCaseId, string>;
}

const EN: SlugSet = {
  section: { features: 'features', 'use-cases': 'ideas', compare: 'compare', support: 'support', press: 'press', policies: 'policies' },
  useCase: { chores: 'chores', bills: 'bills', pets: 'pet-care', 'home-maintenance': 'home-maintenance', 'car-maintenance': 'car-maintenance', plants: 'plants', 'self-care': 'self-care', family: 'family' },
};

const DE: SlugSet = {
  section: { features: 'funktionen', 'use-cases': 'ideen', compare: 'vergleich', support: 'support', press: 'presse', policies: 'richtlinien' },
  useCase: { chores: 'haushalt', bills: 'rechnungen', pets: 'haustiere', 'home-maintenance': 'hauswartung', 'car-maintenance': 'autowartung', plants: 'pflanzen', 'self-care': 'selbstfuersorge', family: 'familie' },
};

const ES: SlugSet = {
  section: { features: 'funciones', 'use-cases': 'ideas', compare: 'comparar', support: 'soporte', press: 'prensa', policies: 'politicas' },
  useCase: { chores: 'tareas-del-hogar', bills: 'pagos', pets: 'mascotas', 'home-maintenance': 'mantenimiento-del-hogar', 'car-maintenance': 'mantenimiento-del-coche', plants: 'plantas', 'self-care': 'autocuidado', family: 'familia' },
};

const ES_MX: SlugSet = { ...ES, useCase: { ...ES.useCase, chores: 'quehaceres', 'car-maintenance': 'mantenimiento-del-auto' } };

const FR: SlugSet = {
  section: { features: 'fonctionnalites', 'use-cases': 'idees', compare: 'comparer', support: 'assistance', press: 'presse', policies: 'politiques' },
  useCase: { chores: 'taches-menageres', bills: 'factures', pets: 'animaux', 'home-maintenance': 'entretien-maison', 'car-maintenance': 'entretien-voiture', plants: 'plantes', 'self-care': 'bien-etre', family: 'famille' },
};

const PT_BR: SlugSet = {
  section: { features: 'recursos', 'use-cases': 'ideias', compare: 'comparar', support: 'suporte', press: 'imprensa', policies: 'politicas' },
  useCase: { chores: 'tarefas-domesticas', bills: 'contas', pets: 'pets', 'home-maintenance': 'manutencao-da-casa', 'car-maintenance': 'manutencao-do-carro', plants: 'plantas', 'self-care': 'autocuidado', family: 'familia' },
};

const PT_PT: SlugSet = {
  section: { ...PT_BR.section, features: 'funcionalidades', support: 'apoio' },
  useCase: { ...PT_BR.useCase, chores: 'lides-domesticas', pets: 'animais', 'home-maintenance': 'manutencao-de-casa', 'car-maintenance': 'manutencao-automovel' },
};

const SLUGS: Record<Locale, SlugSet> = {
  'en-US': EN, 'en-GB': EN, 'en-AU': EN, 'en-CA': EN,
  de: DE, es: ES_MX, 'es-ES': ES, fr: FR, 'fr-CA': FR,
  ja: EN, ko: EN, ru: EN, 'zh-Hans': EN, 'zh-Hant': EN,
  'pt-BR': PT_BR, 'pt-PT': PT_PT,
};

/** Path segments (no locale prefix) for a page in a locale. */
const segments = (key: PageKey, locale: Locale): string[] => {
  const s = SLUGS[locale];
  if (key === 'home') return [];
  if (key.startsWith('use-case/')) return [s.section['use-cases'], s.useCase[key.slice(9) as UseCaseId]];
  if (key.startsWith('compare/')) return [s.section.compare, key.slice(8)];
  return [s.section[key as Section]];
};

/** Site-relative URL with leading and trailing slash, e.g. /de/preise/. */
export const pathFor = (key: PageKey, locale: Locale): string => {
  const parts = [localeInfo(locale).prefix, ...segments(key, locale)].filter(Boolean);
  return parts.length ? `/${parts.join('/')}/` : '/';
};

/** Every (locale, key) pair the site builds. */
export const allRoutes = () =>
  LOCALES.flatMap(({ code }) => PAGE_KEYS.map((key) => ({ locale: code, key, path: pathFor(key, code) })));
