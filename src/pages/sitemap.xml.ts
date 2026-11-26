// One sitemap with hreflang alternates for every published page.
// Drafts and pending translations are left out (see src/content/index.ts).
import type { APIRoute } from 'astro';
import { allRoutes } from '../i18n/routes';
import { isPublished } from '../content';
import { absolute, alternatesFor } from '../lib/seo';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET: APIRoute = () => {
  const urls = allRoutes()
    .filter(({ locale, key }) => isPublished(locale, key))
    .map(({ locale, key, path }) => {
      const alts = alternatesFor(key, locale)
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${esc(absolute(path))}</loc>\n${alts}\n  </url>`;
    });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
