// Screenshots by key: 11.0 raw captures from AppMarketing
// (apps/recurrence/raw/<lang>/iphone-6.3/), halved to 603x1311 and framed at
// render time with the same iPhone bezel the App Store images use.
// Captures live in src/assets/screens/<site locale>/ (en for en-US).
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/locales';
import type { ScreenKey } from '../content/types';
const files = import.meta.glob<ImageMetadata>('../assets/screens/*/*.png', { eager: true, import: 'default' });
const KEYS: ScreenKey[] = ['home', 'history', 'widgets', 'add'];

const forFolder = (folder: string): Record<ScreenKey, ImageMetadata> | undefined => {
  const set = Object.fromEntries(KEYS.map((k) => [k, files[`../assets/screens/${folder}/${k}.png`]]));
  return KEYS.every((k) => set[k]) ? (set as Record<ScreenKey, ImageMetadata>) : undefined;
};

const EN = forFolder('en')!;


/** The locale's own capture, or English when the locale has none. */
export const screenFor = (key: ScreenKey, locale: Locale): ImageMetadata => (forFolder(locale) ?? EN)[key];
