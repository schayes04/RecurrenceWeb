// The 16 site locales, one per app localization (Localizable.xcstrings).
// `prefix` is the URL prefix ('' = site root). `hreflang` lists every code the
// locale's pages are announced under; the first is the primary one.

export type Locale =
  | 'en-US' | 'en-GB' | 'en-AU' | 'en-CA'
  | 'de' | 'es' | 'es-ES' | 'fr' | 'fr-CA'
  | 'ja' | 'ko' | 'pt-BR' | 'pt-PT' | 'ru'
  | 'zh-Hans' | 'zh-Hant';

export interface LocaleInfo {
  code: Locale;
  /** URL prefix without slashes; '' for the root locale. */
  prefix: string;
  /** Value for <html lang>. */
  htmlLang: string;
  /** hreflang codes; the first is primary. */
  hreflang: string[];
  /** Name of the language in itself, for the language menu. */
  name: string;
  /** App Store storefront (two-letter country code). */
  storefront: string;
  /** Apple's official badge file in src/assets/app-store-badges/{black,white}/. */
  badge: string;
  /** Optional App Store `l` parameter, for storefronts with several languages. */
  storeLang?: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Script family, for font selection. */
  script: 'latin' | 'cyrillic' | 'cjk';
}

export const DEFAULT_LOCALE: Locale = 'en-US';

export const LOCALES: LocaleInfo[] = [
  { code: 'en-US', prefix: '', htmlLang: 'en-US', hreflang: ['en-US', 'en'], name: 'English (US)', storefront: 'us', badge: 'en-us', ogLocale: 'en_US', script: 'latin' },
  { code: 'en-GB', prefix: 'en-gb', htmlLang: 'en-GB', hreflang: ['en-GB'], name: 'English (UK)', storefront: 'gb', badge: 'en-us', ogLocale: 'en_GB', script: 'latin' },
  { code: 'en-AU', prefix: 'en-au', htmlLang: 'en-AU', hreflang: ['en-AU'], name: 'English (Australia)', storefront: 'au', badge: 'en-us', ogLocale: 'en_AU', script: 'latin' },
  { code: 'en-CA', prefix: 'en-ca', htmlLang: 'en-CA', hreflang: ['en-CA'], name: 'English (Canada)', storefront: 'ca', badge: 'en-us', ogLocale: 'en_CA', script: 'latin' },
  { code: 'de', prefix: 'de', htmlLang: 'de', hreflang: ['de'], name: 'Deutsch', storefront: 'de', badge: 'de-de', ogLocale: 'de_DE', script: 'latin' },
  { code: 'es', prefix: 'es', htmlLang: 'es', hreflang: ['es', 'es-MX'], name: 'Español (Latinoamérica)', storefront: 'mx', badge: 'es-mx', ogLocale: 'es_MX', script: 'latin' },
  { code: 'es-ES', prefix: 'es-es', htmlLang: 'es-ES', hreflang: ['es-ES'], name: 'Español (España)', storefront: 'es', badge: 'es-es', ogLocale: 'es_ES', script: 'latin' },
  { code: 'fr', prefix: 'fr', htmlLang: 'fr', hreflang: ['fr', 'fr-FR'], name: 'Français', storefront: 'fr', badge: 'fr-fr', ogLocale: 'fr_FR', script: 'latin' },
  { code: 'fr-CA', prefix: 'fr-ca', htmlLang: 'fr-CA', hreflang: ['fr-CA'], name: 'Français (Canada)', storefront: 'ca', storeLang: 'fr-CA', badge: 'fr-fr', ogLocale: 'fr_CA', script: 'latin' },
  { code: 'ja', prefix: 'ja', htmlLang: 'ja', hreflang: ['ja'], name: '日本語', storefront: 'jp', badge: 'ja-jp', ogLocale: 'ja_JP', script: 'cjk' },
  { code: 'ko', prefix: 'ko', htmlLang: 'ko', hreflang: ['ko'], name: '한국어', storefront: 'kr', badge: 'ko-kr', ogLocale: 'ko_KR', script: 'cjk' },
  { code: 'pt-BR', prefix: 'pt-br', htmlLang: 'pt-BR', hreflang: ['pt', 'pt-BR'], name: 'Português (Brasil)', storefront: 'br', badge: 'pt-br', ogLocale: 'pt_BR', script: 'latin' },
  { code: 'pt-PT', prefix: 'pt-pt', htmlLang: 'pt-PT', hreflang: ['pt-PT'], name: 'Português (Portugal)', storefront: 'pt', badge: 'pt-pt', ogLocale: 'pt_PT', script: 'latin' },
  { code: 'ru', prefix: 'ru', htmlLang: 'ru', hreflang: ['ru'], name: 'Русский', storefront: 'ru', badge: 'ru-ru', ogLocale: 'ru_RU', script: 'cyrillic' },
  { code: 'zh-Hans', prefix: 'zh-hans', htmlLang: 'zh-Hans', hreflang: ['zh-Hans'], name: '简体中文', storefront: 'cn', badge: 'zh-cn', ogLocale: 'zh_CN', script: 'cjk' },
  { code: 'zh-Hant', prefix: 'zh-hant', htmlLang: 'zh-Hant', hreflang: ['zh-Hant'], name: '繁體中文', storefront: 'tw', badge: 'zh-tw', ogLocale: 'zh_TW', script: 'cjk' },
];

export const localeInfo = (code: Locale): LocaleInfo => {
  const info = LOCALES.find((l) => l.code === code);
  if (!info) throw new Error(`Unknown locale ${code}`);
  return info;
};

const APP_ID = '1494977084';

/** App Store product page for a locale's storefront. */
export const appStoreUrl = (code: Locale): string => {
  const { storefront, storeLang } = localeInfo(code);
  const url = `https://apps.apple.com/${storefront}/app/recurrence-recurring-tasks/id${APP_ID}`;
  return storeLang ? `${url}?l=${storeLang}` : url;
};

export const APP_STORE_ID = APP_ID;
