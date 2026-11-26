// Screenshots by key: 11.0 raw captures from AppMarketing
// (apps/recurrence/raw/<lang>/iphone-6.3/), halved to 603x1311 and framed at
// render time with the same iPhone bezel the App Store images use.
// Only English is in the repo so far; each locale adds its own folder when its
// copy is published, and falls back to English until then.
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/locales';
import type { ScreenKey } from '../content/types';
import home from '../assets/screens/en/home.png';
import history from '../assets/screens/en/history.png';
import widgets from '../assets/screens/en/widgets.png';
import add from '../assets/screens/en/add.png';

const EN: Record<ScreenKey, ImageMetadata> = { home, history, widgets, add };

export const ALT: Record<ScreenKey, string> = {
  home: 'Recurrence task list on iPhone with overdue, today and upcoming tasks',
  history: 'A task’s completion history with dates and notes',
  widgets: 'Recurrence widgets on the iPhone Home Screen',
  add: 'Editing a task set to repeat 4 weeks after the last completion',
};

export const screenFor = (key: ScreenKey, _locale: Locale): ImageMetadata => EN[key];
