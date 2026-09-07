# Fairway Gear Guide

Lightweight static golf publication, served by GitHub Pages at www.fairwaygearguide.com.

## Edit and validate

Requires Node.js 22 or newer. There are no third-party dependencies to install.

```sh
npm run build
npm test
```

- `content/`: original article bodies. Edit these, not generated `posts/` pages.
- `scripts/build.mjs`: article metadata, shared navigation/footer and page templates.
- `css/style.css`: shared responsive editorial design.
- `js/site.js`: progressive-enhancement mobile menu. Navigation remains usable without JavaScript.
- `scripts/validate.mjs`: page, link, anchor, metadata and menu checks.
- Root HTML, category HTML, `posts/` and `sitemap.xml` are generated and committed so existing GitHub Pages hosting needs no new deployment setup.

Preserve `CNAME`, existing article URLs, Amazon tag `fairwaygeargu-20`, and analytics ID `G-YPG4PGB0D3`. All internal links assume the existing custom domain root, not a GitHub project subdirectory. Rebuild and commit generated output after template/content edits.

## Editorial safeguards

Do not relabel 2025 research as a current-year review. Publish measured testing claims only with real test notes. Old course prices and restaurant suggestions need fresh verification before removing archive notices. Amazon links currently lead to search results, not verified individual product listings.

## Review / deployment

The redesign is prepared on `redesign/editorial-revamp-2026`. Do not merge to `main` or alter hosting until the owner approves production deployment. Original assets are retained; unused large images are not requested by the redesigned pages.
