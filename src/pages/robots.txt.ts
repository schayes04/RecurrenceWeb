import type { APIRoute } from 'astro';
export const GET: APIRoute = () =>
  new Response('User-agent: *\nAllow: /\n\nSitemap: https://recurrence-app.com/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
