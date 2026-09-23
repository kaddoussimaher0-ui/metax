---
series_id: "DOC12"
branch: "META"
title_en: "BCIA Observed Taxonomy — Evidence Report"
title_ar: "تصنيف BCIA المرصود — تقرير الأدلة"
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
# BCIA Observed Taxonomy — Evidence Report (v2026.08.14)

## Method
Full-text scan of the uploaded corpus: Books 1–6 complete (cover, TOC, introduction, 12 chapters each), Book 7 (cover, TOC, introduction, chapters 1–2 ingested this pass; chapters 3–12 exist in the upload set), Books 8–10 (covers, TOCs, introductions ingested; Book 8 & 10 full chapter sets exist in the upload set; **Book 9 is incomplete in the upload itself — only Ch1, Ch10, Ch11, Ch12 were provided**). Total corpus vocabulary checked for: layer names, book codes, tier tags, depth tags, D1–D10 tags, AMN, LPN.

## What the corpus actually uses (evidence)
| 1 | Meta-X (Mastery Path, MX-MP-01) | 15 files | codes: MX-MP-01 | tier: Tier 1, Tier 2, Tier 3, Tier 4 | depth: Depth Level 1, Depth Level 2, Depth Level 3, Depth Level 4, Depth Level 5 | D-tags: none | AMN: 6 | LPN: 2 |
| 2 | Meta-X | 15 files | codes: — | tier: — | depth: Depth Level 1, Depth Level 2, Depth Level 3, Depth Level 4, Depth Level 5 | D-tags: none | AMN: 13 | LPN: 13 |
| 3 | Meta-X | 15 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 4 | Transition | 15 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 5 | Transition | 15 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 6 | Transition | 15 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 7 | Transition | 5 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 8 | Transition | 0 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 9 | Transition | 0 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |
| 10 | Higher-Order | 0 files | codes: — | tier: — | depth: — | D-tags: none | AMN: 0 | LPN: 0 |

## Findings

### Finding A — The books run on THREE layers, not seven, and not D1–D10
- **Books 1–3 → Meta-X layer** (Book 1 cover: السلسلة الفرعية «مسار الإتقان»، الرقم **MX-MP-01**، الشريحة Tier 1→3، العمق 1→5).
- **Books 4–9 → Transition Layer** (الطبقة الانتقالية / طبقة التحول).
- **Book 10 → Higher-Order Layer** (طبقة المنظومات الأعلى).
- **D1–D10 appears nowhere in the corpus.** Every D-tag occurrence in earlier TopTech front matter was our own provisional invention, not BCIA vocabulary.

### Finding B — AMN and LPN: REFERENCED, NOT DEFINED (correction after context inspection)
Initial regex counts suggested near-absence; context extraction reversed that reading. **Books 1–2 explicitly name a three-language triad for BCIA's future description layer: BSN, LPN, AMN** — e.g. Book 1 Ch.: «من الأوامر الإنسانية (بـ AMN) إلى إشارات حيوية (بـ BSN)» and «لغاتها الثلاث: BSN, LPN, AMN، مع حفظ العهد: لا خلايا إنسانية». Reading of roles from context: **AMN ≈ the human-command/intent side, BSN ≈ biological-signal side, LPN ≈ the bridging language between them** — but no formal definition of any of the three exists anywhere in the ingested corpus, and neither term appears again after Book 2.
Disposition: **defined-in-intent, undefined-in-specification**. They may be mentioned in Branch D only as "declared future BCIA languages, specification pending" — never taught as working notation.
### Finding C — The working metadata vocabulary of the books is
`الطبقة (layer) · السلسلة الفرعية (sub-series) · الرقم (code, e.g. MX-MP-01) · الشريحة المستهدفة (Tier 1→3) · درجة العمق (Depth 1→5) · اللغة (Arabic fusḥa, voweled)`.

## Adjustment applied (Uncertainty 1 — CLOSED as evidence, OPEN as ratification)
1. **D1–D10 is deprecated for all Branch D documents** and removed from Branch D front matter. It survives only as a TopTech-internal tag where it predates BCIA, and even there it is marked `provisional`.
2. Branch D front matter gains: `bcia_layer` (meta-x | transition | higher-order), `bcia_book_code` (e.g. MX-MP-01 where the book declares one), `tier_range`, `depth_range` — all taken from the books' own covers.
3. **Remediation gate 2 (taxonomy reconciliation)** status changes from *Open* to: **Triangulated** — the corpus itself answers with a 3-layer structure; what remains is owner ratification that "seven layers" and "D1–D10" are formally retired.
4. **Remediation gate 3 (AMN/LPN definitions)** status changes from *Open* to: **Referenced but undefined (triad BSN/LPN/AMN, Books 1–2 only)**. Gate 3 narrows to: produce formal specifications for the three declared languages, or retire them at gate 7. The inferred role split (AMN = human command side; BSN = biological signal side; LPN = bridge) is context-inferred, not corpus-stated — marked unconfirmed.

## Standing caution
This report describes **what the drafts contain**. Under the non-doctrinal rule, the 3-layer structure is adopted as the working map *because the books themselves declare it on their covers*; it is still subject to the owner's ratification in the remediation program.
