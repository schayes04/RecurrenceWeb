// @ts-check
import { defineConfig } from 'astro/config';

// Routing is handled by src/pages/[...path].astro from the route table in
// src/i18n/routes.ts, because every locale gets translated URL slugs.
export default defineConfig({
  site: 'https://recurrence-app.com',
  trailingSlash: 'always',
  compressHTML: true,
  // The whole stylesheet is ~5 KB compressed, so inlining it saves a
  // render-blocking round trip on every first visit.
  build: { format: 'directory', inlineStylesheets: 'always' },
});
