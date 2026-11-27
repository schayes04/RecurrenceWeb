// Build-time SEO check over dist/. Fails the build on errors; prints warnings.
// Errors: missing title/description/h1/lang, canonical or hreflang problems,
// non-reciprocal hreflang, sitemap entries that are missing or noindex, images without alt.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://recurrence-app.com';
const errors = [];
const warnings = [];

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});

const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
const urlOf = (file) => {
  const rel = relative(DIST, file).replace(/index\.html$/, '');
  return `${SITE}/${rel}`;
};

const pages = new Map();
for (const file of walk(DIST)) {
  if (file.endsWith('404.html')) continue;
  const html = readFileSync(file, 'utf8');
  const url = urlOf(file);
  const head = html.split('</head>')[0];
  const robots = attr(head.match(/<meta name="robots"[^>]*>/)?.[0] ?? '', 'content') ?? '';
  const page = {
    url,
    lang: html.match(/<html[^>]*lang="([^"]+)"/)?.[1],
    titles: [...head.matchAll(/<title>([^<]*)<\/title>/g)].map((m) => m[1]),
    description: attr(head.match(/<meta name="description"[^>]*>/)?.[0] ?? '', 'content'),
    canonical: attr(head.match(/<link rel="canonical"[^>]*>/)?.[0] ?? '', 'href'),
    alternates: [...head.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => ({ hreflang: m[1], href: m[2] })),
    h1s: (html.match(/<h1[\s>]/g) ?? []).length,
    imgsWithoutAlt: (html.match(/<img(?![^>]*\balt[\s=>])[^>]*>/g) ?? []).length,
    indexable: !robots.includes('noindex'),
  };
  pages.set(url, page);

  const where = relative(DIST, file);
  if (!page.lang) errors.push(`${where}: <html> has no lang`);
  if (page.titles.length !== 1 || !page.titles[0]?.trim()) errors.push(`${where}: needs exactly one non-empty <title>`);
  if (!page.description?.trim()) errors.push(`${where}: missing meta description`);
  if (page.h1s !== 1) errors.push(`${where}: has ${page.h1s} <h1> elements`);
  if (page.imgsWithoutAlt) errors.push(`${where}: ${page.imgsWithoutAlt} <img> without alt`);
  if (!page.indexable) continue;

  const title = page.titles[0] ?? '';
  if (title.length > 65) warnings.push(`${where}: title is ${title.length} characters`);
  const dl = page.description?.length ?? 0;
  if (dl < 70 || dl > 165) warnings.push(`${where}: description is ${dl} characters`);
  if (page.canonical !== url) errors.push(`${where}: canonical ${page.canonical} should be ${url}`);
  if (!page.alternates.some((a) => a.hreflang === 'x-default')) errors.push(`${where}: no x-default hreflang`);
  if (!page.alternates.some((a) => a.href === url)) errors.push(`${where}: hreflang set doesn't include the page itself`);
}

// Reciprocity: every alternate must exist, be indexable and list the same set.
for (const page of pages.values()) {
  if (!page.indexable) continue;
  const key = JSON.stringify(page.alternates.map((a) => `${a.hreflang} ${a.href}`).sort());
  for (const alt of page.alternates) {
    const other = pages.get(alt.href);
    if (!other) { errors.push(`${page.url}: hreflang ${alt.hreflang} points to a missing page ${alt.href}`); continue; }
    if (!other.indexable) errors.push(`${page.url}: hreflang ${alt.hreflang} points to a noindex page`);
    const otherKey = JSON.stringify(other.alternates.map((a) => `${a.hreflang} ${a.href}`).sort());
    if (otherKey !== key) errors.push(`${page.url}: hreflang set differs from ${alt.href}`);
  }
}

// Sitemap: every entry exists and is indexable; every indexable page is listed.
const sitemapPath = join(DIST, 'sitemap.xml');
if (!existsSync(sitemapPath)) errors.push('sitemap.xml missing');
else {
  const locs = [...readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    const page = pages.get(loc);
    if (!page) errors.push(`sitemap: ${loc} has no page`);
    else if (!page.indexable) errors.push(`sitemap: ${loc} is noindex`);
  }
  for (const page of pages.values()) if (page.indexable && !locs.includes(page.url)) errors.push(`sitemap: ${page.url} is indexable but not listed`);
}

const indexable = [...pages.values()].filter((p) => p.indexable).length;
console.log(`SEO check: ${pages.size} pages, ${indexable} indexable, ${pages.size - indexable} noindex (drafts or pending translations).`);
for (const w of warnings) console.warn(`  warning  ${w}`);
for (const e of errors) console.error(`  error    ${e}`);
if (errors.length) { console.error(`SEO check failed with ${errors.length} error(s).`); process.exit(1); }
console.log('SEO check passed.');
