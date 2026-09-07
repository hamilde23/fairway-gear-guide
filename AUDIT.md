# Fairway Gear Guide: redesign audit

Audit date: September 7, 2026. Baseline commit: 8a701a27295beb43c1e0748b0fa7a25ede5883d8.

## Verdict

The previous site looked unfinished rather than like a credible golf publication. Visible markup fragments, a driver image masquerading as a course photo, missing brand identity and broken navigation damaged trust before a reader could evaluate the content.

## Prioritized changes implemented

1. **Repair broken structure:** remove visible `<` and `/div>` fragments, unmatched header and misspelled About article tag; generate consistent semantic pages.
2. **Establish a visual identity:** editorial masthead, deep green/white palette, serif headlines, readable line lengths, consistent image proportions and spacing.
3. **Use relevant imagery:** promote the existing Meadowwood photo; remove the driver image from the Spokane course presentation; reuse existing equipment photos rather than oversized illustrations.
4. **Simplify navigation:** Home / Gear / Courses / About everywhere, with keyboard-accessible mobile toggle and no-JavaScript fallback.
5. **Create real category hubs:** implement the two category URLs previously advertised only in the sitemap; expose all five articles from the homepage.
6. **Make articles scannable:** breadcrumbs, summaries, reading time, collapsible section links, related guides, and scrollable course tables.
7. **Clarify affiliate intent:** retain all 19 Amazon destinations/tags, use descriptive accessible labels and sponsored/security attributes, and disclose that links lead to search results.
8. **Repair SEO basics:** one h1 per page, descriptions, canonical URLs, basic WebSite/Article schema, working sitemap and 404 recovery page. Preserve existing URLs and analytics.
9. **Improve maintainability:** dependency-free static generator and shared design/menu, separate content source, repeatable validation and contributor instructions.
10. **Avoid false freshness:** mark original course data as archive material and preserve 2025 driver status rather than inventing 2026 testing.

## Remaining editorial work (not disguised as completed)

- Verify all course rates, travel-time estimates, restaurant openings and course ownership descriptions against primary sources.
- Search extraction made the PNW guide appear to group Oregon courses under Sun Valley; repository inspection confirmed the Pronghorn heading is present. The actual source, not the extracted search snippet, was preserved.
- Replace unsupported equipment performance / injury-prevention claims with sourced or measured findings.
- Add genuine test methodology, conditions, results, original photos and comparisons when the owner has performed tests.
- Consider direct, verified product listings instead of generic Amazon search results once products/sellers are confirmed.

## Verification scope

Static validation covers every generated page, internal file references, anchors, duplicate IDs, structured JSON, affiliate attributes, sitemap targets and menu state behavior. This is not a Lighthouse score or an exhaustive browser/device audit. The original live homepage was visually inspected. No production branch or hosting settings are changed by this review branch.
