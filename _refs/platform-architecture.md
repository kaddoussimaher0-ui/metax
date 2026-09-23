# MetaX.Academy — Platform, Data & Persistence Architecture
**Corpus ref MX‑ARCH‑001 · Release v2026.09.3 · Curated by Maher**
*Amends MX‑DESIGN‑001 (v2026.09.2) and the two‑plane model. Supersedes §Part 4 (auth methods) and §Part 6 (island contract) of that document.*

---

## Part 0 — Decision log: what your constraints change

Eight things in my previous answer are now wrong or need narrowing. Recording them as amendments rather than silently rewriting, per the corpus rule.

**A1 — Passkey‑first is withdrawn, social‑only is adopted, with a stated cost.** I previously argued against social login on provenance grounds. Your decision overrides that and is defensible for a zero‑backend launch, but the cost is real and must be written down: MetaX now has a third‑party dependency on the identity path, which means an account can become unreachable through no fault of MetaX or the user. The mitigation is architectural, not rhetorical (see Part 3): the social account becomes a *login factor*, never the identity itself.

**A2 — The "no client‑side fetch" exception is re‑specified as cookie‑gated hydration.** This matters more than it sounds, because it is what keeps anonymous traffic free. Details in Part 1.4.

**A3 — Avatars are removed from the design entirely,** not deferred. No upload path, no R2 bucket, no moderation queue for images. Replaced by a deterministic generated mark (Part 4).

**A4 — The Artefact Vault (academic feature 5) is downgraded for Phase 1** from "content‑hashed storage" to "content‑hashed *reference*." MetaX stores the URL, the SHA‑256 the learner attests to, and the timestamp — not the bytes. The credential guarantee weakens from "the evidence is preserved" to "the evidence was this, at this time, and here is the hash to check it against." That weakening must be printed on the credential document, not hidden.

**A5 — Durable Objects are admitted to the stack** in a strictly limited role (Part 8). They were not in the previous design.

**A6 — A hard scaling defect is now on the record.** Cloudflare Pages allows 20,000 files per site on the free plan ([Pages limits](https://developers.cloudflare.com/pages/platform/limits/), read 2026‑08‑31). The v2026.09.1 sitemap projected ~13,300 routes including Arabic mirrors, and each new series adds ~91 English routes, ~182 bilingual. That means the free static estate exhausts at roughly **36 additional series** — not thousands. The "scales to thousands of series" claim in v2026.09.1 is false as built and is logged as **DEF‑2026‑041**. Remediation in Part 2.3.

**A7 — The binding constraint is not what the plan assumed.** The 80% tripwire was framed around bandwidth and storage. The actual ceilings, in order of who breaks first, are Workers requests, then KV writes, then Pages file count. Storage is nowhere near the top. Part 2.

**A8 — "IndexedDB + Cloudflare database" cannot mean a symmetric two‑way store.** IndexedDB is origin‑partitioned and evictable; browsers may clear it under storage pressure and Safari's seven‑day cap on script‑writable storage can remove it from an inactive user outright. IndexedDB is therefore specified in this document as a **cache and outbox only**. No user work may exist solely in the browser. This is a correctness constraint, not a preference.

---

## Part 1 — Cloudflare topology

### 1.1 Zone and hostname plan

One zone, `metax.academy`. Universal SSL covers `*.metax.academy` at one label of depth, which is exactly what the design needs — every academy is `{slug}.metax.academy`, never `{x}.{slug}.metax.academy`. Two‑label depth would require Advanced Certificate Manager and is therefore prohibited by design rule, not left to discretion.

| Hostname | Cloudflare product | Plane | Worker invoked? |
|---|---|---|---|
| `metax.academy` | Pages (static) | Content | No, except hydration route |
| `toptech.` `bcia.` `academies.` `library.` `lexicon.` | Pages, same project, path‑routed | Content | No |
| `verify.` | Pages + one Worker on `/lookup` | Content | Lookup only |
| `{slug}.` (academies) | Worker with static assets, wildcard route | Content | Manifest routing only |
| `auth.` | Worker | Identity | Always |
| `me.` | Worker + static shell | Identity | Always |
| `pay.` | Worker | Commerce | Always |
| `hooks.` *(new)* | Worker, no UI, no index | Commerce | Always |
| `data.` *(new)* | Worker, JSON only | Shared API | Always |

Two hostnames are added to the v2026.09.1 tree. `hooks.metax.academy` exists so that the Binance Pay webhook has a surface with its own rate limits, its own WAF posture and its own logging, isolated from anything a human touches. `data.metax.academy` is the single JSON API origin, so that CORS policy is written once in one place instead of drifting across seven subdomains.

### 1.2 Academy subdomain routing without per‑academy projects

Pages projects have their own custom‑domain ceilings and one project per academy does not scale. Instead, a single Worker holds a wildcard route `*.metax.academy/*`, reads the subdomain label, looks up the academy in a KV manifest index, and serves that academy's pre‑rendered assets from a shared static‑asset binding under a path prefix. One deployment, one wildcard certificate, N academies. Academies at Chartered level who bring a custom apex domain go through Cloudflare for SaaS, where the first 100 custom hostnames are included ([Cloudflare for SaaS plans](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/plans/)) — which is the real ceiling on custom‑domain academies, and it should be published in the Academies requirements as a stated limit of 100 rather than discovered at charter 101.

### 1.3 Where Workers are permitted

Workers are allowed for exactly six jobs: OAuth exchange and session issuance on `auth`; entitlement checks and dashboard rendering on `me`; payment intent lifecycle on `pay` and `hooks`; the credential lookup on `verify`; academy subdomain routing; and the identity hydration fragment. Everything else is static. A Worker introduced for any other purpose requires a written justification in the changelog, because every Worker route is a draw against a hard 100,000‑requests‑per‑day account budget.

### 1.4 Cookie‑gated hydration — the rule that keeps anonymous traffic free

Requests served purely from static assets are free and unlimited; a request that invokes a Worker is billed and counts against the daily cap ([Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), read 2026‑08‑31). So the identity bar must never cause a Worker invocation for an anonymous visitor.

The mechanism: on sign‑in, `auth` sets a second, deliberately non‑secret cookie `mx_hint=1` on `.metax.academy`, readable by JavaScript, containing no identity and no token. Every content page ships a 1.1 KB inline script whose entire body is a conditional: if `mx_hint` is absent, do nothing and exit. If present, fetch one fragment from `data.metax.academy/v1/bar` and inject the identity bar into a reserved slot that already occupies its final height, so CLS stays at zero either way.

Consequence: an anonymous visitor generates zero Worker requests and zero cost, no matter how many pages they read. The 100,000/day budget is consumed only by signed‑in page views and by auth, pay and verify traffic. This single decision roughly triples the traffic the free tier can absorb, and it preserves the doctrinal claim that the content plane renders completely without the identity plane.

---

## Part 2 — The free tier, the 80% tripwire, and the file‑count defect

### 2.1 The budget board

All figures below are Cloudflare's published free‑plan limits as read on 2026‑08‑31 and carry decay class **Perishable, 90‑day review** — Cloudflare changes these, and a stale number here becomes a false claim on a governance page.

| Resource | Free limit | 80% tripwire | What consumes it | Rank |
|---|---|---|---|---|
| Workers requests | 100,000 / day | **80,000 / day** | Signed‑in page views, auth, pay, verify | **1** |
| Workers KV writes | 1,000 / day | **800 / day** | Any per‑user write to KV | **2** |
| Pages files per site | 20,000 | **16,000** | Every pre‑rendered route | **3** |
| D1 rows written | 100,000 / day | **80,000 / day** | All mutations plus index writes | 4 |
| Workers KV reads | 100,000 / day | 80,000 / day | Manifest and config lookups | 5 |
| D1 rows read (scanned) | 5,000,000 / day | 4,000,000 / day | All queries | 6 |
| D1 storage, account | 5 GB total | 4 GB | All six databases combined | 7 |
| D1 size per database | 500 MB | 400 MB | Largest single database | 8 |
| D1 databases | 10 | 8 | Six allocated, two reserved | 9 |
| D1 queries per invocation | 50 | 40 | Dashboard page assembly | 10 |
| Durable Objects requests | 100,000 / day | 80,000 / day | Rate limiter, intent locks | 11 |
| Workers CPU per invocation | 10 ms | 8 ms | Every Worker, per request | 12 |
| Workers Logs events | 200,000 / day, 3‑day retention | 160,000 / day | Observability | 13 |
| Cloudflare for SaaS hostnames | 100 included | 80 | Custom‑domain academies | 14 |

Two entries deserve emphasis. **KV writes at 1,000 per day** are so tight that KV is effectively a read‑only configuration store in this architecture — sessions, counters and anything per‑user must never touch it. And **10 ms of CPU per invocation** means the dashboard cannot assemble twelve queries and render server‑side templates in one Worker; it must serve a static shell and hydrate from two or three narrow JSON calls.

Real capacity, derived rather than guessed: at an estimated 12 Worker‑invoking page views per signed‑in session and 1.4 sessions per active user per day, the 80,000 tripwire is reached at roughly **4,700 daily active signed‑in users**, with anonymous readership unlimited. On writes, at ~5 effective rows written per active learner‑day including index writes, the 80,000 tripwire sits near **16,000 daily active learners**. Requests bind first, by a factor of three. Optimisation effort therefore belongs on request count, not on query efficiency, and that ordering should be written into the engineering standards page.

### 2.2 The capacity meter and the tripwire, as a governed object

Capacity is not an ops detail here; it is a governance signal, because hitting a ceiling silently would produce exactly the kind of unannounced degradation the corpus forbids. So it gets a determination‑queue‑style public surface.

A scheduled Worker runs hourly on a Cron Trigger, pulls the previous interval's figures from the GraphQL Analytics API, writes one row per resource per hour into `ops_capacity` in D1, and computes a fourteen‑day trailing mean plus a linear projection of the date each resource crosses 80%. It publishes `capacity.json` and renders `metax.academy/about/capacity/` — a public page showing each resource as a bar with its current percentage, its projection date, and its status: **Green** below 60%, **Amber** 60–79%, **Red** at or above 80%, **Breached** at 100%.

The tripwire is defined precisely so it cannot be argued about later. It fires when any single resource records ≥80% of its free limit on **three consecutive days**, or when any resource records ≥95% on **one** day. Single‑day spikes below 95% do not fire it. On firing, four things happen automatically: the capacity page turns Red and the hub's honesty strip gains a migration notice; a determination is filed in the public queue with class `INFRA`; new academy provisioning pauses at Sandbox level; and the sixty‑day migration clock in Part 13 starts.

The degraded ladder, in the order it is applied if a ceiling is actually breached before migration completes, is: extend hydration fragment cache to 15 minutes, then 60; disable the Decay Watch personal view and fall back to the static estate‑wide page; queue non‑critical writes in IndexedDB with a visible "pending sync" state; make `me` read‑only; and finally, sign‑in disabled with the content plane fully intact. That last rung is the payoff for the two‑plane model — the worst outcome is that MetaX becomes what it already was, a complete static library, rather than going dark.

### 2.3 DEF‑2026‑041: the 20,000‑file ceiling

The remediation is to stop pre‑rendering the deepest tier. Series pages, course pages, Ascent rungs, governance documents, lexicon terms and credential records stay static — they are the citable, crawlable, archivable surface. **Lesson pages** — which are roughly 72 of the ~91 routes per series and thus about 80% of the file count — move to a hybrid: one pre‑rendered course page per course carrying all six lessons as progressively‑disclosed sections in a single document, with each lesson addressable by fragment identifier and by a canonical URL that server‑redirects to the fragment.

This costs something and the cost should be stated: an individual lesson loses its own `<title>`, its own JSON‑LD node and its own independent crawl entry. In exchange, the per‑series footprint drops from ~91 to ~19 routes, ~38 bilingual, and the estate scales to roughly **380 series** on the free tier instead of 36 — a tenfold improvement that buys years, though still not "thousands." Thousands genuinely requires the VPS. That should be said plainly on the roadmap rather than implied away.

Three supporting measures: the Arabic mirror ships as a separate Pages project so the two locales do not share one 20,000‑file budget, doubling headroom again; `library/record/` document pages and `_archive/` move to a third project; and the build fails hard at 16,000 files per project rather than warning, because a build that succeeds into a breach is worse than one that stops.

---

## Part 3 — Authentication, revised for social‑only

**The identity/factor separation.** MetaX mints its own subject identifier, `usr_{ULID}`, at first sign‑in. A social account is a row in `identity_link`, never the primary key. This single decision means that adding passkeys, email codes, or a second provider later is an insert into one table, not a migration; and it means a provider deprecating an account does not delete a MetaX user, it only removes one route in.

**Providers, Phase 1.** Google and GitHub, chosen because they cover the operator and engineering audience with the fewest additional third‑party relationships. Apple is required if an iOS wrapper ever ships. A fourth provider with strong Arabic‑market coverage is an open item and should be researched before launch rather than after, because the corpus treats Arabic as authoritative for Meta‑X and BCIA and an identity path that serves that audience worse than the English one is an equity defect, not a feature gap.

**Flow.** Authorization code with PKCE and a strict allowlist of exact redirect URIs, no wildcards. `auth` performs the provider exchange server‑side inside the Worker, verifies `state` and `nonce` against a Durable Object holding the flow record for 10 minutes, resolves or creates the MetaX subject, then issues MetaX's own tokens. The provider's access token is used once, for the profile read, and is **never stored**. Storing it would create a credential‑theft target with no corresponding benefit, since MetaX asks for no provider scopes beyond identity and verified email.

**Tokens.** A stateless signed session JWT, 30 minutes, HS256 with a rotating secret held in Secrets Store, containing subject, locale, entitlement version and session id — deliberately no roles, because roles change and a stale role in a 30‑minute token is an authorisation bug. A refresh token, 30 days, opaque, stored hashed in D1, rotating on every use with reuse detection that revokes the whole family. Plus the non‑secret `mx_hint` cookie from Part 1.4.

**Why sessions are in D1 and not KV.** KV's 1,000 writes per day would cap the platform at 1,000 logins per day, and KV's eventual consistency makes revocation unreliable at exactly the moment revocation matters. D1 gives 100,000 row writes per day and immediate consistency on the primary. This is the clearest example of the free tier dictating a design that is also simply the better design.

**What survives from the previous spec.** The safety glyph and two‑word phrase shown before any provider redirect; the requesting client's display name and charter status printed from `clients.json`; the Vault gradient locked so no academy can restyle the auth screen; `/devices` with per‑session revoke; and recovery codes, which become *more* important under social‑only, since they are the only route back when a provider account is lost.

**The honest disclosure.** `auth.metax.academy/how-we-protect-you/` must state that MetaX currently relies on third‑party identity providers, name them, state what is shared in each direction, state that MetaX never receives a password, and state that passkeys are planned. A user who cannot or will not use a listed provider currently cannot hold a MetaX credential, and that exclusion should be visible on the page rather than discovered at the sign‑in wall.

---

## Part 4 — The no‑image regime

No uploads of any kind in Phase 1 — not avatars, not academy logos, not artefact attachments. This removes an R2 dependency, an image pipeline, a CSAM and abuse moderation obligation, an EXIF privacy surface, and a large share of the platform's storage risk, all at once. It is the highest‑leverage constraint in your message and I would keep it well past the migration.

**Generated identity marks.** Each user receives a deterministic mark derived from `SHA-256(usr_id + fixed_salt)`: the first bytes select one of the ten `mx-glyph` symbols, the next select two hues from the twelve‑swatch academy wheel, and the rest select one of sixteen geometric arrangements. Rendered as inline SVG under 400 bytes, generated at build or render time, never stored as a file, identical across every subdomain, and stable for the life of the account. Roughly 1.9 million distinct marks, which is ample and, more usefully, means two users are visually distinguishable in a review thread without either having uploaded anything.

**Academies** get a wordmark rendered from their name in the corpus display face plus their chosen accent ramp — typography instead of logos. This is visually stronger than a directory of amateur logos would be, and it is worth saying so in the Academies technical guide so it reads as a design position rather than a limitation.

**Everything else that would have been an image** is SVG generated at build time from data: the credential share card, the proof‑ladder indicator, the Ascent ladder, capacity bars, and the ladder in the Bridge Passport. The estate ships no raster images at all except the favicon set.

---

## Part 5 — Data architecture: four tiers and the placement rule

| Tier | Technology | Authority | Consistency | Survives migration as |
|---|---|---|---|---|
| T1 Build artefacts | JSON in the repo, served static | Canonical for all content | Immutable per release | Files, unchanged |
| T2 Edge config | Workers KV | Derived cache of T1 | Eventual, ~60 s | Redis or in‑process cache |
| T3 Record of authority | D1 (SQLite) | Canonical for all user state | Strong on primary | PostgreSQL |
| T4 Client working set | IndexedDB | Never canonical | Local only | Unchanged |

**The placement rule, stated as a test.** Ask: if this datum is lost, is anything unrecoverable? If yes, it lives in T3, always, and may be cached in T2 or T4. If no, it may live only in T2 or T4. Content is T1 because it is version‑controlled in the repository and the database must never become a second, divergent source of curriculum truth — that is the failure mode that would quietly end the version‑control doctrine.

**Six databases, because 500 MB is the per‑database free ceiling and blast radius matters more than convenience.**

| Database | Contents | Est. share of 5 GB |
|---|---|---|
| `mx_identity` | users, identity links, sessions, devices, consent | 8% |
| `mx_learn` | enrolments, artefacts, pre‑registrations, progress, scenarios | 46% |
| `mx_credentials` | credentials, evidence, reviews, revocations, viva | 14% |
| `mx_commerce` | orders, intents, entitlements, receipts, webhooks | 11% |
| `mx_academies` | academies, members, manifests, charters, audits | 6% |
| `mx_governance` | determinations, appeals, defects, corrections, capacity, audit log | 15% |

D1 does not support cross‑database joins. Every table therefore carries a denormalised `usr_id` and joins across domains happen in the Worker, not in SQL. This is a real cost in code complexity and it is the right trade: it is also precisely the shape that survives being split across services later, and it means `mx_commerce` can be moved to a different host on migration day without touching `mx_learn`.

---

## Part 6 — The D1 schema

Conventions throughout: identifiers are prefixed ULIDs stored as `TEXT` — lexicographically sortable, so `ORDER BY id` needs no index on time. Timestamps are `INTEGER` epoch milliseconds. Booleans are `INTEGER 0/1`. Soft deletion via `deleted_at` only where the retention policy requires recoverability; hard deletion everywhere else. Every table has `created_at`, and every mutable table has `updated_at` and `row_version INTEGER`. No table lacks an index on its foreign keys, because D1 bills rows *scanned* and an unindexed foreign‑key lookup on a 100,000‑row table costs 100,000 billed reads for one answer.

### 6.1 `mx_identity`

| Table | Key columns | Indexes | Notes |
|---|---|---|---|
| `user` | `usr_id PK`, `display_name`, `locale`, `glyph_seed`, `status`, `tier`, `created_at`, `last_seen_day` | `idx_user_status` | `last_seen_day` is a day integer, not a timestamp: updated at most once per user per day, which cuts write volume by ~90% versus a `last_seen_at` |
| `identity_link` | `lnk_id PK`, `usr_id`, `provider`, `provider_sub`, `email_verified`, `linked_at` | `uq_provider_sub (provider, provider_sub)` UNIQUE, `idx_link_user` | No provider tokens stored, ever |
| `email` | `eml_id PK`, `usr_id`, `address_hash`, `address_enc`, `is_primary`, `verified_at` | `uq_address_hash` UNIQUE | Hash for lookup, envelope‑encrypted value for sending |
| `session` | `ses_id PK`, `usr_id`, `refresh_hash`, `family_id`, `parent_id`, `issued_at`, `expires_at`, `revoked_at`, `revoke_reason`, `ua_class`, `country` | `idx_session_user`, `idx_session_family`, `idx_session_expiry` | `ua_class` is a coarse bucket, not a UA string |
| `recovery_code` | `rec_id PK`, `usr_id`, `code_hash`, `used_at` | `idx_recovery_user` | Ten per user, single use |
| `consent_event` | `cns_id PK`, `usr_id`, `document`, `version`, `granted_at`, `method` | `idx_consent_user_doc` | Append‑only; proves which Terms version was accepted |
| `safety_mark` | `usr_id PK`, `glyph`, `phrase_a`, `phrase_b`, `set_at` | — | Anti‑phishing display |

### 6.2 `mx_learn`

| Table | Key columns | Indexes | Notes |
|---|---|---|---|
| `enrolment` | `enr_id PK`, `usr_id`, `series_id`, `path_archetype`, `state`, `started_at`, `completed_at` | `uq_user_series` UNIQUE, `idx_enr_user` | `series_id` references T1, not a table |
| `progress_snapshot` | `usr_id + series_id PK`, `payload_json`, `artefact_count`, `reviewed_count`, `updated_at`, `row_version` | `idx_prog_user` | **One row per user per series.** The lesson‑level detail is a JSON blob written by the client's batched flush. This is the single most important write‑budget decision in the schema: event‑per‑lesson logging would consume the entire 100,000/day allowance at ~1,100 active learners |
| `artefact` | `art_id PK`, `usr_id`, `series_id`, `kind`, `title`, `current_version`, `visibility`, `created_at` | `idx_art_user`, `idx_art_series` | |
| `artefact_version` | `avr_id PK`, `art_id`, `version_no`, `ref_url`, `content_sha256`, `byte_size_declared`, `attested_at`, `note` | `uq_art_version` UNIQUE, `idx_avr_art` | Reference plus hash only, per amendment A4 |
| `prereg` | `pre_id PK`, `usr_id`, `series_id`, `hypothesis`, `null_hypothesis`, `decision_rule`, `stopping_condition`, `sealed_hash`, `sealed_at`, `published_at`, `outcome` | `idx_prereg_user`, `idx_prereg_published` | `sealed_hash` covers the four text fields; immutable after seal |
| `prereg_amendment` | `pra_id PK`, `pre_id`, `diff_text`, `reason`, `created_at` | `idx_pra_pre` | Amendment with public diff replaces editing |
| `capstone` | `cap_id PK`, `usr_id`, `series_id`, `pre_id`, `state`, `opened_at`, `closed_at`, `postmortem_ref` | `idx_cap_user` | |
| `scenario_attempt` | `sca_id PK`, `usr_id`, `scenario_id`, `seed`, `path_json`, `score`, `completed_at` | `idx_sca_user_scenario` | Deterministic scoring; no model involved |
| `cohort` / `cohort_member` | `coh_id PK`, `series_id`, `opens_at`, `closes_at`, `state` / `coh_id + usr_id PK`, `joined_at`, `state` | `idx_cohort_state`, `idx_cm_user` | Read‑only archive after close |
| `passport_entry` | `usr_id + item_id PK`, `item_type` (`limits`\|`bridge`), `series_id`, `completed_at`, `evidence_ref` | `idx_pass_user` | Gates Ascent and Branch E |
| `decay_subscription` | `usr_id + series_id PK`, `subscribed_at` | `idx_decay_user` | |

### 6.3 `mx_credentials`

| Table | Key columns | Notes |
|---|---|---|
| `credential` | `crd_id PK`, `usr_id`, `type`, `proof_rung` (0–3), `series_id`, `issuer_id`, `issued_at`, `expires_at`, `status`, `record_hash`, `short_code` | `short_code` unique, human‑dictatable, checksummed |
| `credential_evidence` | `cev_id PK`, `crd_id`, `evidence_kind`, `ref_url`, `content_sha256`, `recorded_at` | Frozen at issuance |
| `revocation` | `rev_id PK`, `crd_id`, `ground`, `class` (`administrative`\|`substantive`), `revoked_at`, `determination_id`, `public_note` | Never deleted; drives the StatusList |
| `review_assignment` | `rva_id PK`, `art_id`, `reviewer_usr_id`, `assigned_at`, `due_at`, `state`, `conflict_checked` | Reciprocity engine |
| `review` | `rvw_id PK`, `rva_id`, `d1_score`…`d5_score`, `weakness_text`, `strength_text`, `word_count`, `submitted_at`, `anonymised` | Rubric frozen at D1–D5; `word_count ≥ 120` enforced |
| `reviewer_calibration` | `cal_id PK`, `reviewer_usr_id`, `gold_artefact_id`, `deviation`, `quarter` | Feeds the published agreement statistic |
| `viva` | `viv_id PK`, `usr_id`, `scheduled_at`, `examiner_a`, `examiner_b`, `outcome`, `transcript_ref`, `transcript_consent` | Outcome published regardless of consent |
| `issuer` | `iss_id PK`, `kind`, `academy_id`, `key_fingerprint`, `scope_json`, `active_from`, `active_to` | MetaX plus chartered academies |

### 6.4 `mx_commerce`

| Table | Key columns | Notes |
|---|---|---|
| `sku` | `sku_id PK`, `kind`, `target_ref`, `display_currency`, `amount_minor`, `split_allowed`, `active` | Split total must equal single‑payment total; enforced by CHECK and by test |
| `order` | `ord_id PK`, `usr_id`, `sku_id`, `amount_minor`, `display_currency`, `state`, `created_at` | |
| `payment_intent` | `pin_id PK`, `ord_id`, `provider`, `provider_ref`, `quote_asset`, `quote_amount`, `quote_expires_at`, `state`, `state_changed_at` | Provider‑agnostic from day one |
| `webhook_event` | `whk_id PK`, `provider`, `provider_event_id`, `signature_valid`, `payload_json`, `received_at`, `processed_at`, `result` | `uq_provider_event` UNIQUE gives idempotency |
| `entitlement` | `ent_id PK`, `usr_id`, `scope_kind`, `scope_ref`, `source` (`purchase`\|`grant`\|`waiver`\|`sponsor`), `source_ref`, `granted_at`, `expires_at`, `revoked_at` | Read on every gated page; the hottest table |
| `receipt` | `rcp_id PK`, `ord_id`, `fiat_amount_minor`, `fiat_currency`, `settled_amount`, `settled_asset`, `issued_at`, `pdf_ref` | Records both figures; a crypto‑only receipt is useless for accounting |
| `refund` | `rfd_id PK`, `ord_id`, `amount_minor`, `reason`, `state`, `requested_at`, `settled_at` | |
| `payout` | `pay_id PK`, `academy_id`, `period`, `gross_minor`, `platform_fee_minor`, `net_minor`, `state` | No interest, no late fees, per MX‑000 |

The Riba constraint is enforced in the schema, not only in policy: there is no `interest_rate`, no `late_fee`, and no `financing_partner` column anywhere, and `sku.split_allowed` implies a schedule whose sum equals `amount_minor` exactly. A schema that cannot express the prohibited thing is stronger than a policy that forbids it. I'll repeat the caveat from the previous document: I'm not a lawyer or a scholar of Islamic finance, and the structure should be reviewed by someone qualified before money moves.

### 6.5 `mx_academies`

`academy` (`aca_id PK`, `slug` UNIQUE, `name_en`, `name_ar`, `curator_usr_id`, `level` 1–5, `accent_index` 0–11, `chartered_at`, `state`, `custom_hostname`), `academy_member` (`aca_id + usr_id PK`, `role`, `added_at`), `academy_manifest` (`man_id PK`, `aca_id`, `version`, `manifest_json`, `published_at`, `build_hash`), `charter_event`, `audit_report` (`aud_id PK`, `aca_id`, `period`, `outcome`, `findings_json`, `published_at`), `exchange_mapping` (`xmp_id PK`, `from_aca_id`, `from_ref`, `to_aca_id`, `to_ref`, `basis_text`, `signed_by_a`, `signed_by_b`, `published_at`), and `suspension`.

### 6.6 `mx_governance`

`determination` (`det_id PK`, `class`, `filed_at`, `sla_hours`, `state`, `decided_at`, `decider`, `public_summary`, `degraded_mode`) driving the public Determination Queue; `appeal`; `defect` (`def_id PK`, `severity`, `surface`, `claim_text`, `defect_text`, `impact`, `remediation`, `opened_at`, `closed_at`) — this is the table behind the published defect list and the hub's honesty strip; `correction` with its accept/reject reasoning and credit; `verify_tag` tracking every `[VERIFY]` in the estate with its age; `source_health` for the Citation Ledger; `ops_capacity` from Part 2.2; and `audit_log`, append‑only, hash‑chained (`prev_hash`, `entry_hash`) so that tampering is detectable, covering every privileged action including anything an AI agent performs under AG‑000.

---

## Part 7 — Workers KV

Given 1,000 writes per day, KV holds only build‑time‑written configuration, and every namespace is written by the deploy pipeline rather than by user action.

`MX_MANIFEST` maps academy slug to build path and state, one write per academy publish. `MX_CLIENTS` holds the OAuth client registry. `MX_FLAGS` holds feature flags and the current degraded‑mode rung. `MX_REVLIST` holds the compiled StatusList2021 bitstring, rewritten once per revocation batch — batched deliberately, because per‑revocation writes would compete for a 1,000/day budget. `MX_ROUTES` holds the redirect map for retired URLs. Total steady‑state writes: well under 50 per day.

Nothing user‑specific ever enters KV. If a future feature wants to, that is the signal that the free tier is exhausted, not that the rule should bend.

---

## Part 8 — Durable Objects, narrowly

Three uses only, each chosen because it needs strong single‑point consistency that D1 cannot give cheaply. `AuthFlow` holds one PKCE flow for ten minutes, keyed by state, preventing replay. `PaymentIntentLock` serialises the race between the browser return and the webhook, which is the classic double‑credit bug in every payment integration. `RateGate` implements per‑IP and per‑user token buckets for `auth`, `pay` and `verify`.

Free‑plan Durable Objects are SQLite‑backed and share the same 100,000 requests/day and 5 million rows read / 100,000 rows written budget ([Durable Objects pricing](https://developers.cloudflare.com/durable-objects/platform/pricing/)). Because they draw on the same pool as everything else, `RateGate` uses in‑memory state with periodic persistence rather than writing per request, and the capacity meter tracks DO requests as its own line so this stays visible.

---

## Part 9 — IndexedDB

**Database:** `mx_local`, version 3, one instance **per origin** — and that origin partitioning is not a bug to work around. Cross‑origin sharing via a hidden `data.metax.academy` iframe and `postMessage` is unreliable under Safari and Firefox storage partitioning, and it also creates a broker with ambient access to every subdomain's local data. The design rejects it: each origin caches what it needs, and the server is the only join point.

| Object store | keyPath | Indexes | Purpose | Max age |
|---|---|---|---|---|
| `kv` | `k` | — | Locale, theme, last route, hint flags | Session |
| `identity` | `k` | — | Cached bar fragment and display fields, never tokens | 15 min |
| `catalog` | `id` | `by_branch`, `by_status` | Slice of `catalog.json` for offline browsing | Until build hash changes |
| `progress` | `[series_id]` | `by_dirty` | Working progress for the current session | Until flushed |
| `artefact_draft` | `draft_id` | `by_art`, `by_updated` | Local drafts before submission | 30 days |
| `prereg_draft` | `draft_id` | `by_updated` | Pre‑registration drafts before seal | 30 days |
| `review_draft` | `rva_id` | `by_due` | Review text in progress | Until submitted |
| `outbox` | `op_id` | `by_state`, `by_created` | Queued mutations awaiting sync | Until acked |
| `sync_meta` | `k` | — | Cursors, clock skew, last sync, conflict count | Persistent |
| `capacity` | `k` | — | Cached capacity banner state | 1 hour |

**What must never enter IndexedDB:** refresh tokens, session JWTs, email addresses, payment data of any kind, other users' review content, and anything from `mx_governance`. The rule is enforced by a lint on the write helper — every store has a declared allowlist of field names and a write outside it throws in development and drops in production.

**Durability, stated honestly in the UI.** The app requests `navigator.storage.persist()` and reads `estimate()`. Any store with unsynced content shows a "Not yet saved to MetaX" marker until the outbox drains, and the drafts surface warns after 24 hours of unsynced work. Because IndexedDB is evictable, `me.metax.academy/data/` explains in plain words that local drafts are a convenience and the server is the record — the corpus cannot claim version control and then lose a learner's capstone to a browser cache eviction.

**Eviction and quota policy:** soft cap of 40 MB per origin, hard cap 60 MB. On breach, the client evicts `catalog`, then `capacity`, then `identity`, then read‑only `progress` — never `outbox`, never any draft. If the outbox alone exceeds 20 MB, writes are blocked with an explicit message rather than silently discarded.

---

## Part 10 — The sync protocol

**Outbox with server authority.** Every mutation is written first to the `outbox` store as an operation record: `op_id` (client ULID, and the idempotency key), `op_type`, `target`, `payload`, `base_version`, `created_at`, `attempts`, `state`. The client then POSTs a batch of up to 25 operations to `data.metax.academy/v1/sync`. The Worker validates, applies each in a D1 transaction, and returns per‑operation results.

**Idempotency** comes from `op_id` being stored in an `applied_op` table with a 30‑day TTL, so a retry after a lost response is a no‑op that returns the original result rather than a duplicate.

**Conflict resolution is per‑table and never generic.** `progress_snapshot` merges field‑wise with maximum‑wins on monotonic counters, because progress only ever moves forward. Drafts use last‑write‑wins by client timestamp with server clock‑skew correction, since a single user's own drafts rarely conflict. Anything in `mx_credentials`, `mx_commerce` or `mx_governance` is **server‑authoritative and rejects** conflicting client state outright — a client may not resolve a conflict about whether it holds a credential. Sealed objects, meaning `prereg` after seal and `credential` after issue, reject all mutation with a permanent error that clears the outbox entry rather than retrying forever.

**Batching cadence** is chosen against the request budget: flush on visibility change, on sign‑out, after 90 seconds of idle, or when the outbox exceeds 20 operations — never per keystroke and never on a timer. A typical one‑hour study session produces two or three sync requests rather than two or three hundred.

**Backoff** is exponential with jitter at 2, 8, 30, 120, 600 seconds, capped at eight attempts, after which the operation moves to `state: parked` and surfaces in the UI as an actionable item rather than dying silently. `429` and `503` responses carry the degraded‑mode rung so the client can adjust its cadence rather than hammering a resource that is already at 95%.

---

## Part 11 — Identifier grammar

Content identifiers stay exactly as fixed in v2026.09.1: a single monotonic counter `S001…S999…`, branch held in front‑matter and never in the URL, numbers immortal. Data identifiers are prefixed ULIDs — `usr_`, `ses_`, `enr_`, `art_`, `pre_`, `crd_`, `ord_`, `ent_`, `aca_`, `det_`, `def_`. The prefix means a leaked or logged identifier is self‑describing, which matters during incident response, and ULID's time‑ordered prefix means primary keys cluster naturally in SQLite and port to PostgreSQL without a re‑key. The one exception is `credential.short_code`, an eight‑character Crockford base‑32 string with a check character, designed to be read aloud over a phone and typed into the verifier without ambiguity between 0/O and 1/I/L.

---

## Part 12 — Privacy and retention mapping

MX‑003's classification canon gains the Class 4 promised in the previous release, and every table above maps to exactly one class.

| Class | Contents | Storage | Retention |
|---|---|---|---|
| 0 | Anonymous content requests | Edge logs only | 3 days (Workers Logs free retention) |
| 1 | Aggregate analytics | Analytics API | Cloudflare default |
| 2 | Voluntary submissions: applications, drafts | D1, IndexedDB | 24 months, or 90 days after withdrawal |
| 3 | Public by design: credentials, academy records, published pre‑registrations | D1, static | Permanent; revoked, never deleted |
| **4** | **Identity and commerce: sessions, links, orders, receipts** | **D1, encrypted at field level for email** | **Sessions 90 days after expiry; financial records per statutory minimum, provisionally 7 years** |

Deletion semantics have to be stated precisely because they will be tested. Deleting an account hard‑deletes `identity_link`, `session`, `recovery_code`, `email` and all drafts; anonymises `usr_id` to a tombstone in `review` and `artefact` so that peer reviews others depend on do not vanish; and leaves `credential` and `receipt` intact, because a public credential record is a representation made to third parties and a financial record is a statutory obligation. A user requesting erasure of a credential receives a revocation with ground `holder_request`, not a deletion. This must be disclosed *before* the credential is issued, on the same screen, not in a linked policy — otherwise the consent is not informed.

---

## Part 13 — Migration to VPS or dedicated server

The tripwire starts a sixty‑day clock. Migration is not an emergency because it has been designed for from the first line of code.

**The portability contract, enforced from day one.** All D1 access goes through one repository module with no Cloudflare‑specific SQL — no `D1PreparedStatement` types leaking into business logic, and a lint rule that fails the build if `env.DB` appears outside the repository layer. Schema migrations are plain SQL files, numbered, forward‑only, in the repo. Business logic runs in Workers but is written against Web‑standard `Request`/`Response`, which Node 22 and Bun both serve natively. KV access goes through a two‑method interface backed by Redis after migration. Durable Object use is confined to three classes with narrow interfaces, each replaceable by a Postgres advisory lock or a Redis token bucket. **The build output is plain files** — the static estate is genuinely portable to any web server, which is the whole point of the Static Principle and the reason the migration risk is concentrated entirely in the small identity plane.

**Target shape** at the 80% point: a single VPS with 4 vCPU, 8 GB RAM and 160 GB NVMe, running Caddy for TLS and static serving, Node 22 or Bun for the three plane services, PostgreSQL 17 as the single database with the six D1 databases becoming six schemas, and Redis for what KV did. Cloudflare stays in front as CDN, WAF and DNS — migration moves the origin, it does not leave Cloudflare. Nightly `pg_dump` plus WAL archiving to R2, restore tested monthly with the restore time published on the security page.

**Type mapping:** `TEXT` ULID becomes `TEXT` with a `char_length` check or `citext`; epoch‑millisecond integers become `bigint` and stay integers rather than becoming `timestamptz`, since converting them is a needless correctness risk; `INTEGER` booleans become `boolean`; `payload_json` and `findings_json` become `jsonb`, which is a genuine upgrade because the progress blob becomes queryable; the hash chain in `audit_log` is unchanged; and every UNIQUE constraint carries over identically. The six schemas can then finally be joined in SQL, which removes a substantial amount of Worker code.

**Cutover, seven steps.** Stand up the VPS and replay all migration files. Backfill with `d1 export` per database, verify row counts and a sampled hash comparison per table. Run dual‑write for seven days, D1 primary, Postgres shadow, with a nightly diff report published to the determination queue. When the diff is clean for three consecutive days, flip reads to Postgres while keeping D1 writes for 24 hours as a rollback path. Flip writes. Keep D1 read‑only for thirty days. Decommission, and publish the migration post‑mortem including anything that went wrong, because the corpus publishes its failures.

**Announced degradation window:** ninety minutes maximum, scheduled, announced fourteen days ahead on the capacity page and by digest. During the window the content plane stays fully live — it is static files — and only `auth`, `me` and `pay` are unavailable. That is the two‑plane model paying for itself a second time.

---

## Part 14 — Documents this release obliges you to change

`metax.academy/about/static/` gains the two‑plane model, the cookie‑gated hydration exception with its date, and an honest statement that the platform now runs code at the edge. A new page `metax.academy/about/capacity/` publishes the meter and the tripwire rule. MX‑003 adds Class 4 and the deletion semantics table. MX‑011 adds token design, key rotation, webhook verification and the IndexedDB allowlist. MX‑018 adds the retention grid from Part 12. Two new instruments are required as previously flagged, MX‑020 Payments & Commerce and MX‑021 Identity & Sessions, and MX‑021 must name the social providers and the passkey roadmap. A third is now added: **MX‑022 Infrastructure & Migration**, holding the budget board, the tripwire definition and the portability contract, so that the migration decision is a governed determination rather than an engineering whim. AG‑000's absolute‑refusal set expands to include payment mutation, session revocation, entitlement change, credential issuance and any write to `mx_governance` — an agent may draft a determination, never file one. And `DEF‑2026‑041` goes on the public defect list today, with its remediation and its honest residual: the estate scales to hundreds of series on this infrastructure, not thousands, and the roadmap should say so.

**One thing I would push back on before you build.** The 80% tripwire is the right instrument, but three of the top four constraints — Workers requests, KV writes and Pages files — can be breached by a single successful day: one well‑shared BCIA audit page, one Arabic‑language post that lands, and you cross 100,000 Worker invocations in an afternoon. The cookie‑gated hydration rule is what makes that survivable, so I would treat it as a launch blocker and test it adversarially — deploy with the hydration script deliberately broken and confirm that every content page still renders, still passes AA, and still costs nothing. If that test passes, a traffic spike is a good day. If it doesn't, a traffic spike takes the whole universe down, and it will happen before you are ready for it.