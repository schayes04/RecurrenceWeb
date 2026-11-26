// Builds a regional variant (en-GB, es-ES, fr-CA, pt-PT...) from its base copy
// by applying word and phrase swaps to every string, so the variant only lists
// what actually differs and stays in sync when the base changes.

type Swap = [from: string | RegExp, to: string];

const mapStrings = <T>(value: T, fn: (s: string) => string): T => {
  if (typeof value === 'string') return fn(value) as T;
  if (Array.isArray(value)) return value.map((v) => mapStrings(v, fn)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, fn)])) as T;
  }
  return value;
};

/** Applies the swaps in order to every string. Plain-string swaps replace every occurrence. */
export const derive = <T>(base: T, swaps: Swap[], patch?: (copy: T) => void): T => {
  const copy = mapStrings(base, (s) => swaps.reduce((acc, [from, to]) => (typeof from === 'string' ? acc.split(from).join(to) : acc.replace(from, to)), s));
  patch?.(copy);
  return copy;
};
