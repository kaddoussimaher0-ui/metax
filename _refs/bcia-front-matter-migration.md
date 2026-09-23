---
series_id: "DOC13"
branch: "META"
title_en: "Branch D Front-Matter Migration"
title_ar: "ترحيل الواجهة الأمامية للفرع D"
version: "v2026.08.14"
status: "live"
audience_tier: 5
depth: 4
domain_tags: []
bcia_layer: "n/a"
limits_module: false
bridge_target: "n/a"
capstone: false
evidence_class: "durable"
charter_compliance: "required"
human_cell_exclusion: "n/a"
ai_disclosure_url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act"
sources_verified: true
last_reviewed: "2026-08-26"
hreflang: "ar, en"
---
# Branch D Front-Matter Migration — v2026.08.14

## Diff summary
- `domain_tags: [D1–D10]` **removed** from Branch D (S38–S47). Evidence: D-tags appear zero times in the BCIA corpus.
- New keys added: `bcia_layer`, `bcia_book_code`, `tier_range`, `depth_range`.
- `sources_verified` upgraded: chapter-level content now backed by ingested full texts (Books 1–6 full; Book 7 partial; Books 8–10 cover/TOC/intro level).

## New Branch D front-matter schema (full replacement)
```yaml
series_id: "S38..S47"
branch: "D"
title_en: "..."
title_ar: "..."            # canonical, from the book cover
version: "vYYYY.MM.N"
status: "live"
audience_tier: 4
depth: 5
bcia_layer: "meta-x | transition | higher-order"
bcia_book_code: "MX-MP-01 | n/a"
tier_range: "1-3"
depth_range: "1-5"
limits_module: true
bridge_target: "S3x"
capstone: true
evidence_class: "durable"
charter_compliance: "required"
human_cell_exclusion: "affirmed"
ai_disclosure_url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act"
sources_verified: true
last_reviewed: "2026-08-26"
hreflang: "ar, en"
```

## Migration table
| Series | Book | bcia_layer | bcia_book_code | depth_range |
|---|---|---|---|---|
| S38 | Book 1 | meta-x | MX-MP-01 | 1-5 |
| S39 | Book 2 | meta-x | n/a | 1-5 |
| S40 | Book 3 | meta-x | n/a | per-TOC |
| S41 | Book 4 | transition | n/a | per-TOC |
| S42 | Book 5 | transition | n/a | per-TOC |
| S43 | Book 6 | transition | n/a | per-TOC |
| S44 | Book 7 | transition | n/a | per-TOC |
| S45 | Book 8 | transition | n/a | per-TOC |
| S46 | Book 9 | transition | n/a | per-TOC |
| S47 | Book 10 | higher-order | n/a | per-TOC |

## Rules
1. Any Branch D document still carrying `domain_tags: [D...]` after this release is out of project.
2. `bcia_layer` values are constrained to the three observed layers; a fourth value may not be introduced without a remediation-gate-2 amendment.
3. Books 8–10 keep `sources_verified: partial` until their full chapter sets are ingested in a later pass.
