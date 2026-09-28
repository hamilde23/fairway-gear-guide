# Fairway Gear Guide

Lightweight static golf publication, served by GitHub Pages at www.fairwaygearguide.com.

## Edit and validate

Requires Node.js 22 or newer. There are no third-party dependencies to install.

```sh
npm run build
npm test
```

- `_content/`: original article bodies (excluded from direct GitHub Pages publication). Edit these, not generated `posts/` pages.
- `scripts/build.mjs`: article metadata, shared navigation/footer and page templates.
- `css/style.css`: shared responsive editorial design.
- `js/site.js`: progressive-enhancement mobile menu. Navigation remains usable without JavaScript.
- `scripts/validate.mjs`: page, link, anchor, metadata and menu checks.
- Root HTML, category HTML, `posts/` and `sitemap.xml` are generated and committed so existing GitHub Pages hosting needs no new deployment setup.

Preserve `CNAME`, existing article URLs and analytics ID `G-YPG4PGB0D3`. All internal links assume the existing custom domain root, not a GitHub project subdirectory. Rebuild and commit generated output after template/content edits.

`content/` contains generated noindex redirects for historical source URLs. SEO priorities and measurement steps are in `SEO_STRATEGY.md`.

## Editorial safeguards

Do not relabel 2025 research as a current-year review. Publish measured testing claims only with real test notes. Old course prices and restaurant suggestions need fresh verification before removing archive notices. Do not add affiliate links. Identify product loans, gifts and paid partnerships in relevant future coverage; never invent hands-on testing results.

## Review / deployment

Production is served from `main`. The owner authorized publishing the September 28, 2026 editorial refresh. Original assets are retained; unused large images are not requested by the redesigned pages.

## Colfax Golf Arcade

The standalone browser game lives in `games/colfax-golf/`. Its HTML, CSS and JavaScript are served directly by GitHub Pages; the shared build adds navigation and a sitemap entry without overwriting the game. Course sources and approximation notes are accessible within the game. Round progress is saved in device-local browser storage.
