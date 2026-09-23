We ran a field study on what AI answer engines actually cite in 2026 — and, per the MetaX method, we **pre-registered the hypothesis with a null and published the result regardless of whether it flattered us.** What follows is the honest version, mixed findings and all, not the clean marketing story.

## Why this study exists

For two decades, "being found" meant ranking a blue link for a human to click. That game has not disappeared, but it now sits underneath a second, different game: being **cited** by an AI answer engine that reads your page, extracts a claim, and quotes you inside a synthesised answer the user may never click through from. These are not the same discipline. A page can rank well and never be cited, or be cited constantly while ranking modestly. We wanted to know, with evidence rather than folklore, what actually drives the second outcome.

## The hypothesis

We predicted that pages with explicit, well-structured, verifiable claims would earn a disproportionate share of citations on AI answer surfaces, controlling for classical ranking.

- **Null:** structure and verifiability have no measurable effect on citation share once ranking is controlled for.
- **Decision rule:** reject the null only if the effect cleared a pre-set threshold across a majority of the surfaces sampled — decided *before* we looked at the data.

Pre-registering the decision rule matters more than it sounds. It is the difference between science and storytelling: once you have seen the data, it is almost impossible not to find a threshold that makes your favourite conclusion true. We locked ours first.

## What we measured

Citation share across multiple AI answer surfaces for a fixed query set. For every source page an answer engine cited, we tagged three properties:

1. **Structure** — whether the relevant claim sat in a clearly delimited, extractable unit (a defined heading, a list, a direct statement) rather than buried in prose.
2. **Claim verifiability** — whether the claim was specific and checkable (a number, a date, a named mechanism) versus vague and unfalsifiable.
3. **Freshness** — how recently the page had been meaningfully updated.

We deliberately held classical ranking as a control so we were measuring the citation game, not re-measuring the ranking game.

## What we found

Retrieval-and-citation rewards being **quotable.** Clear claims, tight structure, and freshness signals mattered more than raw backlink authority on the surfaces we sampled. Pages that stated a specific, verifiable claim in an extractable unit were cited noticeably more often than pages that made the same point in undifferentiated prose, even when the prose page ranked higher.

But — and this is the part a marketing post would bury — the effect was **noisier than we expected**, and on one surface we could not reject the null at our pre-set threshold. On that surface, citation behaviour looked closer to a re-ranking of already-authoritative domains than a reward for quotability. We do not fully understand why that surface behaved differently, and we are not going to pretend we do.

> Being cited by a machine is a different discipline from ranking for a human. This is the core of Series 01, Answer-Engine Mastery.

## What it means for operators

Cautiously, and with the decay class attached (this is **Semi-durable** — answer engines change their retrieval logic often):

- Make your key claims **extractable.** One idea per unit, stated plainly, where a machine can lift it cleanly.
- Make them **verifiable.** Specific numbers, dates, and named mechanisms are more citable than adjectives.
- Keep them **fresh.** Update dates and revisit perishable claims; staleness appears to suppress citation on most surfaces.
- Do not assume it generalises. One surface in our sample did not play by these rules, so treat this as a strong default, not a law.

## Honesty note

We are publishing the mixed result rather than the clean story, because a curriculum that hides its disconfirming evidence is a curriculum you cannot trust. The one surface where we failed to reject the null is not an embarrassment to be minimised — it is data, and it is the most interesting thing in the study. The full method, the per-surface breakdown, and the decay classification of each claim ship with the [Answer-Engine Mastery](curriculum.html) series. This is the same standard we ask of every operator in a 90-day capstone: pre-register, measure honestly, and publish the null.
