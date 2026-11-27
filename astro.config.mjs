// @ts-check
import { defineConfig } from 'astro/config';

// Routing is handled by src/pages/[...path].astro from the route table in
// src/i18n/routes.ts, because every locale gets translated URL slugs.
export default defineConfig({
  site: 'https://recurrence-app.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
