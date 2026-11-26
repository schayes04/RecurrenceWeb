// Screenshots by key. Phase 1 uses the press-kit captures; phase 2 replaces them
// with the 11.0 captures exported per locale from AppMarketing.
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/locales';
import type { ScreenKey } from '../content/types';
import home from '../assets/screens/home.png';
import history from '../assets/screens/history.png';
import widgets from '../assets/screens/widgets.png';
import add from '../assets/screens/add.png';

const EN: Record<ScreenKey, ImageMetadata> = { home, history, widgets, add };

export const ALT: Record<ScreenKey, string> = {
  home: 'Recurrence task list on iPhone with overdue, today and upcoming tasks',
  history: 'A task’s completion history with dates and notes',
  widgets: 'Recurrence widgets on the iPhone Home Screen',
  add: 'Creating a recurring task and choosing its schedule',
};

export const screenFor = (key: ScreenKey, _locale: Locale): ImageMetadata => EN[key];
