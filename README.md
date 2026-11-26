# recurrence-app.com

Marketing site for [Recurrence](https://apps.apple.com/app/id1494977084), built with [Astro](https://astro.build) as a static site and deployed on Cloudflare Pages. It's in all 16 of the app's localizations.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to dist/ and runs the SEO check
```

`npm run build` fails if any page is missing a title, description, single `<h1>`, `lang`, image `alt`, canonical or a complete, reciprocal hreflang set, or if the sitemap and the indexable pages disagree (`scripts/check-seo.mjs`).

## How it's organized

| Path | What it holds |
| --- | --- |
| `src/i18n/locales.ts` | The 16 locales: URL prefix, hreflang codes, App Store storefront |
| `src/i18n/routes.ts` | Every page key and its translated URL in each locale |
| `src/i18n/ui.ts` | Interface strings (navigation, buttons, footer) per locale |
| `src/content/<locale>.ts` | Page copy. `en-US.ts` is the source; register other locales in `src/content/index.ts` |
| `src/views/` | One template per page type |
| `src/pages/[...path].astro` | Builds every (locale, page) pair from the route table |
| `src/pages/sitemap.xml.ts` | Sitemap with hreflang alternates |
| `public/_redirects`, `public/_headers` | Cloudflare Pages redirects and headers |

A page is **published** in a locale when that locale has its own copy file and the page's `meta.draft` isn't set. Unpublished pages still build for preview, using the English copy, but they're `noindex` and left out of the sitemap and hreflang.

## Deploy (Cloudflare Pages)

- Framework preset: Astro. Build command `npm run build`, output directory `dist`, Node 22.
- Every branch gets a preview URL. Production is `main`, on recurrence-app.com.
