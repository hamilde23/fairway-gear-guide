# Fairway Gear Guide: organic growth plan

Prepared September 28, 2026. Goal: attract relevant golfers and build a credible publication for product-review and brand-partnership inquiries. No affiliate monetization or paid advertising is part of this deployment.

## Positioning and priorities

Lead with useful Pacific Northwest golf planning and specific equipment decisions. Local knowledge is a defensible direction for this site; broad “best golf drivers” searches are a longer-term ambition. These are editorial priorities, not claims based on paid keyword-volume or keyword-difficulty data. Search queries surfaced the homepage, About and a regional article; this is evidence of some search visibility, not a complete index or ranking audit.

| Priority | Search intent | Landing page | Purpose |
|---|---|---|---|
| 1 | Golf courses near Pullman / Colfax | /posts/golf-courses-near-pullman-colfax.html | Help readers compare local options and reach booking sources |
| 1 | Driver fitting checklist / what to bring | /posts/golf-driver-fitting-checklist.html | Give readers an actionable preparation checklist |
| 1 | Golf rangefinder vs GPS / GPS watch vs laser | /posts/golf-rangefinder-vs-gps.html | Explain a concrete equipment decision |
| 2 | Spokane golf courses | /posts/spokane-county-golf-courses.html | Refresh the existing guide with verified current course information |
| 2 | Essential golf accessories | /posts/essential-golf-accessories.html | Connect everyday equipment needs to detailed guides |
| 3 | Golf training aids / driver comparisons | Existing gear guides | Expand with original observations as documented testing becomes available |

Assign each topic one main URL. Update that page as it earns impressions instead of creating multiple near-duplicate articles targeting variants of the same question.

## Deployed now

- Three focused new guides, with descriptive headings and direct answers.
- Links from established articles and category pages to the new guides.
- Search-focused category titles and descriptions; clearer homepage heading.
- Article, author, organization and breadcrumb structured data, with known dates only. No invented ratings or product-test claims.
- Open Graph and social-card metadata.
- WebP versions of the four actively used photographs; original files preserved.
- Canonical/noindex redirects for old publicly accessible article fragments. Editable sources moved into `_content/`, which default GitHub Pages/Jekyll excludes.
- Sitemap expanded to include new canonical pages. Last-modified dates reflect this release; do not advance them automatically on every rebuild.
- Tracking code for partnership inquiry clicks and contextual article-to-article navigation using the existing GA4 tag. An email-link click is not proof that a message was sent or that a partnership resulted.

## Measurement setup still required

Search Console and GA4 reports were not accessible in this session. No historical traffic, ranking, conversion or indexing totals have been invented. No Search Console verification or sitemap submission has been completed.

1. Verify `fairwaygearguide.com` in Google Search Console using owner-controlled DNS or an issued verification token. A URL-prefix property for https://www.fairwaygearguide.com/ is another option.
2. Submit https://www.fairwaygearguide.com/sitemap.xml and inspect the three new article URLs. Inspect the homepage and one older article as well. Sitemap availability is not the same as submission or indexing.
3. Confirm GA4 property G-YPG4PGB0D3 receives visits and the new events in Realtime/DebugView. Mark partnership_inquiry_click as a key event if useful. Do not count internal navigation as a lead.
4. Save an initial 28-day baseline: organic landing-page sessions, Search Console clicks/impressions/CTR/average position, indexed canonical pages and genuine inquiry emails. Split branded searches from nonbranded discovery.

## First 90 days: proposed operating cadence

This is a plan, not a scheduled automation or a promise of unattended future publishing.

**Weeks 1–2:** Establish measurement. Inspect indexing and crawl issues. Verify the existing Spokane course facts against official course sources, replacing old price claims and subjective numeric ratings where they are unsupported. Keep archive notices until verification is complete.

**Weeks 3–6:** Develop two substantial pieces per month, guided by emerging search impressions and reader questions. Candidates: a current Spokane public-course comparison and a Northwest wet-weather golf checklist. Avoid templated town-by-town duplicates. For course visits, capture original photos and notes on tees, walking, access and conditions. For gear, record the exact model, settings, conditions and limitations.

**Weeks 7–10:** Turn genuine use of Derek’s existing clubs into an original long-term ownership article if his notes and photos support it. Add a Mavrik-versus-P790 comparison only with verified model years/specifications and a clear distinction between desk research and actual side-by-side testing. Do not claim that either set lowers handicap without evidence.

**Weeks 11–13:** Review the first two comparable 28-day periods. Expand pages earning relevant impressions, improve titles where intent matches but clicks lag, and consolidate overlapping pages. Fix technical problems before adding more content. Seasonality makes a fall-to-winter comparison imperfect for Northwest golf.

## Distribution and relationships

For each substantive article, prepare a useful summary for the existing X profile and relevant golf communities where promotion is permitted. Seek inclusion in local golf/travel resource pages only where the guide adds value. Potential relationships include local course staff, fitters and tourism publications. No messages, emails, social posts, backlink purchases or directory submissions were sent during this work. Person-directed outreach needs explicit sending authorization.

Use verified audience and engagement figures in a future media kit. Offer review loans and honest coverage; never promise a positive conclusion or a followed link in exchange for a product. Identify paid and gifted relationships in the relevant coverage and qualify sponsored links appropriately if they are later added.

## Success criteria and decisions

- Technical: important pages return 200, are crawlable, use the intended canonical and appear in the sitemap; old source fragments are not independent index targets.
- Discovery: growth in relevant nonbranded impressions and clicks across more than one article.
- Engagement: readers continue to a related guide and return to the site.
- Business: qualified review/partnership inquiries, tracked separately from contact-link clicks.

Set numeric traffic goals after the baseline is available. Indexing and rankings are not guaranteed; use the first 90 days as a measurement and improvement period, not an earnings forecast. No advertising budget is required for this implementation.

## Reference guidance

- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
