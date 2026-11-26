// Shared data for the free tools: the "How often should I…?" guide entries and
// the intervals they link to in the next due date calculator. The words for
// each entry live in each locale's tools copy (src/content/tools/).

export const AREAS = ['home', 'cleaning', 'self-care', 'pets', 'car', 'money', 'plants'] as const;
export type Area = (typeof AREAS)[number];

export const UNITS = ['day', 'week', 'month', 'year'] as const;
export type Unit = (typeof UNITS)[number];

export interface GuideEntry {
  id: string;
  area: Area;
  /** The interval the calculator starts with when opened from this entry. */
  every: number;
  unit: Unit;
}

export const GUIDE = [
  { id: 'air-filter', area: 'home', every: 3, unit: 'month' },
  { id: 'smoke-alarms', area: 'home', every: 6, unit: 'month' },
  { id: 'co-alarms', area: 'home', every: 6, unit: 'month' },
  { id: 'fridge-water-filter', area: 'home', every: 6, unit: 'month' },
  { id: 'pitcher-filter', area: 'home', every: 2, unit: 'month' },
  { id: 'dryer-vent', area: 'home', every: 1, unit: 'year' },
  { id: 'gutters', area: 'home', every: 6, unit: 'month' },
  { id: 'hvac-service', area: 'home', every: 1, unit: 'year' },
  { id: 'fridge-coils', area: 'home', every: 6, unit: 'month' },
  { id: 'mattress', area: 'home', every: 3, unit: 'month' },

  { id: 'sheets', area: 'cleaning', every: 1, unit: 'week' },
  { id: 'towels', area: 'cleaning', every: 1, unit: 'week' },
  { id: 'bathroom', area: 'cleaning', every: 1, unit: 'week' },
  { id: 'vacuum', area: 'cleaning', every: 1, unit: 'week' },
  { id: 'sponge', area: 'cleaning', every: 1, unit: 'week' },
  { id: 'dishwasher-filter', area: 'cleaning', every: 1, unit: 'month' },
  { id: 'washing-machine', area: 'cleaning', every: 1, unit: 'month' },
  { id: 'coffee-maker', area: 'cleaning', every: 3, unit: 'month' },
  { id: 'fridge', area: 'cleaning', every: 3, unit: 'month' },

  { id: 'toothbrush', area: 'self-care', every: 3, unit: 'month' },
  { id: 'dentist', area: 'self-care', every: 6, unit: 'month' },
  { id: 'eye-exam', area: 'self-care', every: 1, unit: 'year' },
  { id: 'haircut', area: 'self-care', every: 6, unit: 'week' },
  { id: 'lens-case', area: 'self-care', every: 3, unit: 'month' },
  { id: 'razor', area: 'self-care', every: 1, unit: 'week' },
  { id: 'makeup-brushes', area: 'self-care', every: 2, unit: 'week' },

  { id: 'flea-tick', area: 'pets', every: 1, unit: 'month' },
  { id: 'heartworm', area: 'pets', every: 1, unit: 'month' },
  { id: 'vet', area: 'pets', every: 1, unit: 'year' },
  { id: 'grooming', area: 'pets', every: 6, unit: 'week' },
  { id: 'nails', area: 'pets', every: 4, unit: 'week' },
  { id: 'litter', area: 'pets', every: 2, unit: 'week' },
  { id: 'aquarium', area: 'pets', every: 2, unit: 'week' },

  { id: 'oil', area: 'car', every: 6, unit: 'month' },
  { id: 'tire-pressure', area: 'car', every: 1, unit: 'month' },
  { id: 'tire-rotation', area: 'car', every: 6, unit: 'month' },
  { id: 'wipers', area: 'car', every: 1, unit: 'year' },
  { id: 'cabin-filter', area: 'car', every: 1, unit: 'year' },
  { id: 'wash-car', area: 'car', every: 2, unit: 'week' },

  { id: 'subscriptions', area: 'money', every: 3, unit: 'month' },
  { id: 'credit-report', area: 'money', every: 1, unit: 'year' },
  { id: 'backup', area: 'money', every: 1, unit: 'week' },

  { id: 'water-plants', area: 'plants', every: 1, unit: 'week' },
  { id: 'rotate-plants', area: 'plants', every: 2, unit: 'week' },
  { id: 'fertilize', area: 'plants', every: 1, unit: 'month' },
  { id: 'repot', area: 'plants', every: 1, unit: 'year' },
  { id: 'mow', area: 'plants', every: 1, unit: 'week' },
] as const satisfies readonly GuideEntry[];

export type GuideId = (typeof GUIDE)[number]['id'];

/** Entries offered as one-tap presets on the calculator. */
export const POPULAR: GuideId[] = ['air-filter', 'toothbrush', 'sheets', 'dentist', 'oil', 'flea-tick', 'smoke-alarms', 'haircut'];
