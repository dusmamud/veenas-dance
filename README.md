# Veena's School of Indian Dances — Website

**Live site:** https://veenas-dance.pages.dev
**Repository:** https://github.com/dusmamud/veenas-dance

Astro 7 + Tailwind CSS 4 website for Veena's School of Indian Dances (Melbourne, Australia), built from the client's original homepage screenshot and elevated to a modern, accessible, world-class standard. All content is **mock/demo data in one file** — `src/data/site.ts` — ready to swap when the client approves real details.

## Stack (same as the Creatix reference project)
- Astro 7.4.12 (static output, `trailingSlash: 'always'`)
- Tailwind CSS 4.3.5 via `@tailwindcss/vite`
- GSAP 3.15.1 + Lenis 1.3.27 (`src/scripts/motion.ts` — transform/opacity only, `prefers-reduced-motion` respected, content visible without JS)
- @astrojs/sitemap, sharp image optimisation
- Self-hosted woff2 fonts in `public/fonts` (Playfair Display, Great Vibes, Inter — `font-display: swap`)
- TypeScript (project-local 6.0.3 so `@astrojs/check` peer range resolves; global TS 7 also present on the dev machine)

## Brand
Warm deep red `#7A1E1E` / saffron `#E8830C` / gold `#C9A227` on ivory `#FDF8F0`. Script accents (Great Vibes) echo the original site's cursive headings; Playfair Display carries display type. WCAG 2.2 AA: darkened red/flame/gold-deep variants are used for text.

## Pages (26 built: 25 routes + 404)
Home (hero, stats, welcome, courses, learning path, timetable preview, testimonial slider, events, gallery preview, FAQ preview, CTA) · `/school/` (Guru Veena bio + credentials, teachers, timeline, parent info) · `/courses/` + 4 course pages (levels, curriculum, dress code, per-course timetable, fees) · `/timetable/` (full text timetable by day) · `/pricing/` (AUD fee table, discounts, policies) · `/gallery/` (category filter, consent-friendly captions) · `/events/` + 3 events (incl. Taal — The Rhythm of Dance, 19 June 2027, tiers $32/$27/$25/$20) · `/testimonials/` · `/faq/` · `/blog/` + 3 posts · `/book-trial/` (validated mock trial form with success state) · `/contact/` · `/privacy/` · `/terms/` · `/search/` (noindex, excluded from sitemap) · 404.

SEO: one Layout with canonical/OG/Twitter per page, JSON-LD (DanceSchool, Breadcrumb, Course, Event with AUD offers, FAQ, BlogPosting, aggregate rating), sitemap + robots.txt, one H1 per page, skip link.

## Images
16 original AI-generated images in `public/images` (hero, welcome, 4 courses, guru, studio, gallery, events, blog) + `og-home.jpg` derived with sharp. No hotlinking; the client's screenshot was used as reference only, never as an asset. Optimise after replacing: `node scripts/optimize-images.mjs`.

## Develop
```bash
npm install
npm run dev       # local dev
npx astro check   # 0 errors expected
npm run build     # outputs dist/ (26 pages)
npm run preview   # verify the production build
node scripts/screenshot.mjs  # with preview running — writes screenshots/
```

## Deploy (when approved — not yet done)
No GitHub repo / hosting has been created for this project. On approval, follow the Creatix pattern: GitHub repo via SSH git flow + Cloudflare Pages deploy workflow (`wrangler pages deploy dist`). Real client details to confirm before launch: studio address, term dates, final fees, social links, and photo consents.
