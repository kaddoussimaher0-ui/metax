/* =====================================================================
   MetaX Academy — Curriculum Data
   Source: TopTech Curriculum v2026.08.4 (Curated by Maher)
   ===================================================================== */

const FLAGSHIPS = [
  {
    id: "F1",
    code: "F1",
    title: "SEO Mastery — Rebuilt",
    tagline: "Search, Retrieval & Owned-Audience Publishing",
    territory: "Search, retrieval, owned-audience publishing",
    quote: "The old SEO taught you to rank ten blue links. The new SEO teaches you to be the thing a machine quotes when the ten links no longer appear.",
    thesis: "SEO in 2026 is a three-layer discipline: human-reader ranking on classical SERPs, machine retrieval & citation on AI-mediated surfaces, and owned-audience conversion — because search traffic is now a probabilistic input to a business, not the business itself.",
    courses: "13 courses (12 + Course 0 gate)",
    hours: "70–90 hrs",
    icon: "🔍",
    accent: "aurora",
    img: "img/flagship-01.jpg",
    imgIndex: "FG-01"
  },
  {
    id: "F2",
    code: "F2",
    title: "Social Media Marketing Mastery — Rebuilt",
    tagline: "Attention, Trust & Influence Systems",
    territory: "Attention systems, algorithm-mediated distribution",
    quote: "Social marketing was the brand layer. This rebuild is the curriculum underneath it. Attention is rented — trust is what compounds.",
    thesis: "A rebuilt curriculum underneath the brand layer — the craft of attention across the modern social stack, with a decay model, verifiable trust, and honest algorithm physics rather than durability claims against 'every algorithm change.'",
    courses: "12 courses × 6 lessons",
    hours: "70–90 hrs",
    icon: "◎",
    accent: "solar",
    img: "img/flagship-02.jpg",
    imgIndex: "FG-02"
  }
];

const SERIES = [
  { n:"01", title:"Answer-Engine Mastery", sub:"GEO / AEO", territory:"AI search, retrieval, citation economy", pairs:"F1", tier:"Discovery", icon:"✦", img:"img/series-01.jpg", imgIndex:"S-01" },
  { n:"02", title:"Owned Audience & Newsletter Economics", sub:"Direct Relationships", territory:"Email, lists, direct relationships", pairs:"F1, F2", tier:"Audience", icon:"✉", img:"img/series-02.jpg", imgIndex:"S-02" },
  { n:"03", title:"Creator Economy & Personal Media Empire", sub:"Portable Media Company", territory:"Solo brand, portfolio careers", pairs:"F2", tier:"Audience", icon:"◈", img:"img/series-03.jpg", imgIndex:"S-03" },
  { n:"04", title:"Community Systems & Tribes Architecture", sub:"Audience → Tribe → Institution", territory:"Discord, forums, private membership", pairs:"F2, 03", tier:"Audience", icon:"⬡", img:"img/series-04.jpg", imgIndex:"S-04" },
  { n:"05", title:"Product-Led Growth & Distribution Engineering", sub:"The Product Is the Marketing", territory:"SaaS, freemium, self-serve", pairs:"02", tier:"Growth", icon:"▤", img:"img/series-05.jpg", imgIndex:"S-05" },
  { n:"06", title:"Monetization Architecture & Offer Design", sub:"Attention → Revenue → Cash", territory:"Pricing, packaging, revenue models", pairs:"All commercial", tier:"Growth", icon:"◆", img:"img/series-06.jpg", imgIndex:"S-06" },
  { n:"07", title:"Agentic Commerce & Machine-Readable Business", sub:"When the Buyer Is an Agent", territory:"AI shopping agents, MCP, agent-native UX", pairs:"01, 05", tier:"Machine", icon:"⟐", img:"img/series-07.jpg", imgIndex:"S-07" },
  { n:"08", title:"Data, Analytics & Causal Measurement", sub:"The Attribution Honesty Curriculum", territory:"MMM, incrementality, decision science", pairs:"All measurement", tier:"Systems", icon:"◷", img:"img/series-08.jpg", imgIndex:"S-08" },
  { n:"09", title:"First-Party Data & Consent Engineering", sub:"The Post-Cookie Stack", territory:"CDPs, clean rooms, privacy stack", pairs:"08, 12", tier:"Systems", icon:"⛁", img:"img/series-09.jpg", imgIndex:"S-09" },
  { n:"10", title:"AI Operations & Human-in-the-Loop Systems", sub:"Ship AI That Won't Embarrass You", territory:"Agents, workflows, evals, governance", pairs:"All operator", tier:"Machine", icon:"⚙", img:"img/series-10.jpg", imgIndex:"S-10" },
  { n:"11", title:"Prompt & Context Engineering Mastery", sub:"Making Machines Cooperate", territory:"Prompts, context, RAG, tool use", pairs:"10", tier:"Machine", icon:"❖", img:"img/series-11.jpg", imgIndex:"S-11" },
  { n:"12", title:"Trust, Ethics & Regulatory Architecture", sub:"Compliance as Competitive Advantage", territory:"FTC, EU AI Act, DSA, COPPA, state AV", pairs:"All shipping", tier:"Systems", icon:"⚖", img:"img/series-12.jpg", imgIndex:"S-12" },
  { n:"13", title:"Brand Systems & Category Design", sub:"Design the Market You Win", territory:"Positioning, narrative, category creation", pairs:"F2, 03", tier:"Growth", icon:"◭", img:"img/series-13.jpg", imgIndex:"S-13" },
  { n:"14", title:"Video-First Storytelling & Cinematic Craft", sub:"Short-Form to Cinema-of-Ideas", territory:"YouTube, short-form, long-form, live", pairs:"F2, 03", tier:"Media", icon:"▷", img:"img/series-14.jpg", imgIndex:"S-14" },
  { n:"15", title:"Podcasting & Long-Form Audio Systems", sub:"The Intimate Medium", territory:"Podcast, ambient audio, voice search", pairs:"02", tier:"Media", icon:"◉", img:"img/series-15.jpg", imgIndex:"S-15" },
  { n:"16", title:"B2B Demand & Account-Based Systems", sub:"The Enterprise Buying Committee", territory:"ABM, sales-marketing loop, enterprise", pairs:"05, 06", tier:"Growth", icon:"⬢", img:"img/series-16.jpg", imgIndex:"S-16" },
  { n:"17", title:"Marketplaces, Aggregators & Platform Strategy", sub:"Building On, With & Around Giants", territory:"Amazon, Shopify, App Store, Etsy", pairs:"07", tier:"Systems", icon:"⬔", img:"img/series-17.jpg", imgIndex:"S-17" },
  { n:"18", title:"Operator Career, Portfolio & Exit Craft", sub:"The Capstone Series", territory:"Solopreneur, agency, acquisitions, exits", pairs:"Capstone", tier:"Meta", icon:"♛", img:"img/series-18.jpg", imgIndex:"S-18" },
  { n:"19", title:"Paid Media & Retail Media Systems", sub:"Buying Attention Without Being Bought", territory:"Meta, Google, TikTok, Amazon Ads", pairs:"F1, F2, 08", tier:"Growth", icon:"◐", isNew:true, img:"img/series-19.jpg", imgIndex:"S-19" },
  { n:"20", title:"CRO & Experimentation Craft", sub:"Improving What Already Works", territory:"Trustworthy online experiments", pairs:"05, 06, 08", tier:"Systems", icon:"⇄", isNew:true, img:"img/series-20.jpg", imgIndex:"S-20" },
  { n:"21", title:"Localization & Internationalization", sub:"Ship Into Every Market", territory:"i18n, l10n, cross-border compliance", pairs:"09, 12, 17", tier:"Meta", icon:"⊕", isNew:true, img:"img/series-21.jpg", imgIndex:"S-21" }
];

/* Expanded thesis lines per series for the full curriculum page */
const SERIES_DETAIL = {
  "01": "Discoverability has bifurcated. SEO optimizes for the ranking function; GEO/AEO optimizes for retrieval-and-citation. By mid-2026 AI Overviews and AI Mode intercept most informational queries — this series teaches you to be retrieved, cited, and trusted by machines.",
  "02": "Every rented surface is repricing. This treats owned audience not as a channel but as a capital asset with maintenance costs, depreciation and yield — the only durable answer to platform risk.",
  "03": "A personal media empire is a portfolio of durable audience assets, productized expertise, licensable IP and diversified income — architected so no single platform, algorithm, sponsor or client can end the business.",
  "04": "Community is not a marketing channel; it is a governed nation-state of shared belief with real constitutional problems: membership, voice, exit, norms, enforcement, succession. From audience to tribe to institution.",
  "05": "PLG is not a tactic — it is a product-architecture decision made at design time. Every screen produces distribution, activation, or nothing. Rebuilt for agent-mediated distribution and AI-native onboarding.",
  "06": "The offer, not the product, is the unit of commerce. Offer design is a first-class engineering discipline — van Westendorp, conjoint analysis, prospect theory — turning attention into revenue into compounding cash.",
  "07": "Agentic commerce is a structural shift in who reads your business — from humans in browsers to agents making delegated purchases. Be machine-readable, machine-transactable and machine-trusted, or be invisible.",
  "08": "Marketing measurement in 2026 is a triangulation problem, not an attribution problem — platform-reported attribution, MMM and incrementality combined. The attribution-honesty curriculum.",
  "09": "First-party data is not a marketing asset — it is a regulated, financial-grade asset collected under consent. The identity, consent and data stack for the post-cookie operator.",
  "10": "AI operations is the full software-engineering discipline of building, evaluating, deploying, monitoring and rolling back stochastic systems — so your system catches its confident wrongs before your customer does.",
  "11": "Prompt-and-context engineering is applied cognitive-systems design: shaping the input distribution of a model to reliably produce a desired output distribution. A discipline with theory, measurement and reproducibility.",
  "12": "Trust and compliance are the only remaining moat in a world of near-zero-cost content. Treat compliance as an architecture, not a chore — FTC Reviews Rule, EU AI Act, DSA, COPPA, state AV.",
  "13": "Brand is a compressed contract — what you stand for, whom you serve, what you refuse. Category design is the meta-craft: name and frame the problem space so your solution becomes the definitional answer.",
  "14": "Video is the native language of the internet. Treat it as a craft with a two-thousand-year lineage — narrative, cinematography, sound design, editing rhythm — not a growth hack of hook-retention-CTA.",
  "15": "Podcasting is the operator's most asymmetric attention asset: hardest to produce well, hardest to monetize per-download, yet it compounds trust like no other medium. Run it as flywheel, not campaign.",
  "16": "B2B is a long-cycle, multi-stakeholder, mostly-invisible information game — the winner is the vendor already trusted by the buyer's Slack, feed, inbox and analyst before the demo request.",
  "17": "Platforms are temporary equilibria in a repeated game. The winning move is a portfolio: earn presence, extract data and identity, and build defenses — building on, with, and around the giants.",
  "18": "An operator career is a portfolio of bets across time: solopreneur, agency, executive, acquirer, seller, investor, teacher. The capstone that teaches you to choose what to build, how to hold it, and how to leave.",
  "19": "Paid media is predictable growth denominated in margin. Treat it as an experimentation-and-measurement discipline, not an agency line item — across Meta, Google, TikTok, Amazon Ads and retail media.",
  "20": "CRO is the operator's institutional ability to learn faster than competitors through pre-registered, statistically valid, decision-grade experiments. The discipline of improving what already works.",
  "21": "A translated product is not a localized one; a localized one is not a market-fit one. Internationalization and localization craft for shipping into every market without breaking in all of them."
};

const AXIOMS = [
  { glyph:"⊢", title:"Distribution is a portfolio, not a channel.", body:"Any operator dependent on a single surface — Google, Meta, Apple, a marketplace — is renting." },
  { glyph:"⊢", title:"Trust is the only compounding asset.", body:"Attention is rented, tactics decay, systems have half-lives. Trust — human and machine-verifiable — is the only thing that appreciates." },
  { glyph:"⊢", title:"The next internet is agent-mediated.", body:"Humans still decide, but agents increasingly search, shortlist, and transact. Operator craft must be machine-legible as well as human-legible." }
];

const ARC = [
  { step:"FOUNDATIONS", verb:"see", desc:"Learn to read the terrain — intent, physics, and the systems beneath every surface." },
  { step:"EXECUTION", verb:"play", desc:"Ship real work — content, offers, campaigns, products — against a pre-registered hypothesis." },
  { step:"SCALE", verb:"systematize", desc:"Turn one-off wins into durable, measurable, compounding operator machinery." },
  { step:"MASTERY & META", verb:"change", desc:"Change the game — design categories, judge under scrutiny, build companies that outlive platforms." }
];

const RAILS = [
  { glyph:"⚖", name:"Compliance & Ethics Rail", note:"Dated 2026 regulatory hooks — FTC, EU AI Act Art. 50, DSA, COPPA." },
  { glyph:"♿", name:"Accessibility & Inclusion Rail", note:"WCAG 2.2 + European Accessibility Act (in force 28 Jun 2025)." },
  { glyph:"🧭", name:"Decay Ledger", note:"Every claim classed Durable / Semi-durable / Perishable." },
  { glyph:"🔬", name:"Falsifiability", note:"Explicit null hypothesis + disconfirming evidence + decision rule." },
  { glyph:"🛑", name:"Kill Criteria", note:"The honest signal for exactly when to stop investing." },
  { glyph:"💰", name:"Unit Economics", note:"A real cost model and breakeven for every series." }
];

const STATS = [
  { value:23, label:"Curriculum Series", suffix:"" },
  { value:276, label:"Meta-Courses", suffix:"~" },
  { value:1656, label:"Lessons", suffix:"~" },
  { value:2, label:"Rebuilt Flagships", suffix:"" }
];

const ARCHETYPES = [
  { name:"Publisher", path:"F1 · 01 · 02 · 15 · 19 · 20" },
  { name:"Creator", path:"F2 · 03 · 04 · 14 · 15 · 19" },
  { name:"Builder (SaaS)", path:"05 · 07 · 10 · 11 · 19 · 20 · 09" },
  { name:"Commercial (DTC / e-com)", path:"06 · 07 · 17 · 19 · 20 · 21" },
  { name:"Strategist / Consultant", path:"08 · 09 · 12 · 13 · 16 · 18" }
];

/* =====================================================================
   MetaX.Academy ROOT — Three Entry Points (animated landing pillars)
   ===================================================================== */
const ENTRY_POINTS = [
  {
    id: "toptech",
    code: "PILLAR 01",
    glyph: "✦",
    accent: "aurora",
    title: "TopTech Academy",
    tagline: "The Operator Curriculum",
    desc: "Two rebuilt flagships and twenty-one next-level series — ~276 courses, ~1,656 lessons — for operators who intend to be found, cited, bought from, and trusted on the machine-mediated internet.",
    stats: [ {v:"23", l:"Series"}, {v:"276+", l:"Courses"}, {v:"1,656+", l:"Lessons"} ],
    href: "toptech.html",
    cta: "Enter TopTech",
    img: "img/entry-toptech.jpg",
    imgIndex: "EP-01"
  },
  {
    id: "community",
    code: "PILLAR 02",
    glyph: "⬡",
    accent: "nebula",
    title: "Academies Community",
    tagline: "Create & Onboard an Academy",
    desc: "A living system for founders to add or create an academy inside the MetaX community — governed by the Terms of Top Levels, connected to future academies, and built on shared standards of mastery.",
    stats: [ {v:"∞", l:"Academies"}, {v:"5", l:"Top Levels"}, {v:"1", l:"Standard"} ],
    href: "community.html",
    cta: "Join the Community",
    img: "img/entry-community.jpg",
    imgIndex: "EP-02"
  },
  {
    id: "macrolifetach",
    code: "PILLAR 03",
    glyph: "◉",
    accent: "solar",
    title: "MacroLifeTach",
    tagline: "Beyond the Field · Meta-X",
    desc: "A civilizational research umbrella replacing dead, silent matter with living, self-healing computational substrate — beginning with BCIA and expanding into nine programs that answer eight interlocking crises of our age.",
    stats: [ {v:"1", l:"Flagship (BCIA)"}, {v:"9", l:"Programs"}, {v:"8", l:"Crises"} ],
    href: "macrolifetach.html",
    cta: "Explore Meta-X",
    img: "img/entry-macrolifetach.jpg",
    imgIndex: "EP-03"
  }
];

/* =====================================================================
   ACADEMIES COMMUNITY — landing page data
   ===================================================================== */
const COMMUNITY_PILLARS = [
  { glyph:"⬡", title:"Propose an Academy", body:"Submit a discipline, a curator, and a thesis. Every academy is a governed nation-state of shared belief — not a course dump.", img:"img/community-01.jpg", imgIndex:"C-01" },
  { glyph:"⊢", title:"Terms of Top Levels", body:"Admission is earned against the same five-level mastery ladder that governs TopTech — portfolio, verified outcomes, and peer review.", img:"img/community-02.jpg", imgIndex:"C-02" },
  { glyph:"⟡", title:"Shared Standard", body:"Every MetaX academy inherits the six companion rails: compliance, accessibility, decay-awareness, falsifiability, kill criteria, unit economics.", img:"img/community-03.jpg", imgIndex:"C-03" },
  { glyph:"→", title:"Interlinked Future Academies", body:"Academies cross-reference one another. A learner's mastery in one becomes a prerequisite key into the next.", img:"img/community-04.jpg", imgIndex:"C-04" }
];

const COMMUNITY_LEVELS = [
  { lvl:"L1", name:"Applicant", desc:"A curator with a thesis, a syllabus skeleton, and a public rationale for why this academy must exist." },
  { lvl:"L2", name:"Provisional", desc:"Curriculum drafted against the six rails. Reviewed for coherence, non-duplication, and internal governance." },
  { lvl:"L3", name:"Chartered", desc:"Admitted to the community. Cross-links established. First cohort artifacts published for peer review." },
  { lvl:"L4", name:"Standard-Bearer", desc:"Proven outcomes at scale. Sets reference standards other academies inherit and cite." },
  { lvl:"L5", name:"Institution", desc:"Self-governing, version-controlled, decay-aware. A permanent pillar of the MetaX community." }
];

const COMMUNITY_STEPS = [
  { step:"APPLY", desc:"Register your academy's thesis, curator identity, and the crisis or skill-gap it closes." },
  { step:"CHARTER", desc:"Draft the curriculum against the six companion rails and the five-level mastery ladder." },
  { step:"CONNECT", desc:"Cross-reference your academy to existing pillars; define prerequisite keys and shared credentials." },
  { step:"COMPOUND", desc:"Ship cohorts, publish verified outcomes, and climb the Terms of Top Levels toward Institution." }
];

/* =====================================================================
   MACROLIFETACH / META-X — landing page data (English)
   ===================================================================== */
const MLT_CRISES = [
  { glyph:"⛓", title:"The Silent Substrate Ceiling", body:"Moore's Law is buckling: transistors can no longer shrink past a few nanometres without quantum tunnelling, and a single fab now costs tens of billions — concentrating civilization's compute in a handful of firms and geographies." },
  { glyph:"🤖", title:"Intelligence That Computes but Cannot Understand", body:"Generative AI mimics human language with astonishing fluency yet holds no internal model of meaning — the 'semantic silence' gap between calculation and true understanding." },
  { glyph:"🌍", title:"An Earth Exhausting Itself", body:"Data centres drink water and rare minerals while ecosystems near irreversible tipping points. A living cell computes at pico-watts; its silicon equivalent burns orders of magnitude more." },
  { glyph:"🧩", title:"Fractured Knowledge", body:"A century of hyper-specialisation severed physics from biology, engineering from philosophy — killing the cross-field leaps that produced every great breakthrough." },
  { glyph:"🗣", title:"One Tongue, One Cost", body:"English is not just science's lingua franca; it is the structural grammar in which new concepts are first shaped — narrowing the conceptual space of discovery itself." },
  { glyph:"⚔", title:"Civilizations Racing for Tomorrow", body:"A new technological arms race spans compute, AI, biotech and semiconductors — turning technology from shared development into strategic conflict and dependency." },
  { glyph:"⚖", title:"Absent Governance", body:"Acceleration outpaces every parliament and treaty. The most consequential decisions about life and intelligence are made in boardrooms, not on behalf of humanity." },
  { glyph:"🧭", title:"The Human Suspended Between Speed and Meaning", body:"An existential anxiety of the age — a species that promised itself progress-as-happiness now drowning in velocity, searching for reconciliation between its technical and spiritual worlds." }
];

const MLT_PROGRAMS = [
  { code:"P1", ar:"BCIA", en:"Biological Conscious Information Architecture", desc:"The flagship. Replace dead silicon with living, grown, self-healing computational substrate — cells that compute at a fraction of the energy and reproduce in a small lab, not a $10B fab.", flagship:true, img:"img/mlt-p1.jpg", imgIndex:"M-01" },
  { code:"P2", ar:"أغورا · Agora", en:"Architecture of Aware Governance", desc:"Unites politics, economics, law and social anthropology to redesign institutions on living principles — social immunity that detects institutional drift early, and renewing institutional memory.", img:"img/mlt-p2.jpg", imgIndex:"M-02" },
  { code:"P3", ar:"معنى · Ma'na", en:"Architecture of Living Meaning", desc:"Unites linguistics, cognitive neuroscience and philosophy of language to treat a word as a living root-node in a semantic web — a system that can honestly declare the limits of its own understanding.", img:"img/mlt-p3.jpg", imgIndex:"M-03" },
  { code:"P4", ar:"استقلاب · Metabolism", en:"Architecture of Living Energy", desc:"Distributed generation and self-adapting grids modelled on cellular metabolism — replacing the rigid, centralized power model that has hit its ceiling.", img:"img/mlt-p4.jpg", imgIndex:"M-04" },
  { code:"P5", ar:"سوما · Soma", en:"Architecture of the Living Body & Health", desc:"The one program devoted entirely to the human — the body as the end, never a means. Regenerative medicine under the strictest governance of any field.", img:"img/mlt-p5.jpg", imgIndex:"M-05" },
  { code:"P6", ar:"بايديا · Paideia", en:"Architecture of Aware Learning", desc:"Adaptive learning ladders modelled on organic growth — each learner on a unique path tuned to their pace and cognitive style, replacing the rigid 19th-century curriculum.", img:"img/mlt-p6.jpg", imgIndex:"M-06" },
  { code:"P7", ar:"أثر · Athar", en:"Architecture of Civilizational Memory", desc:"DNA-density archival systems that hold humanity's record for millennia without power or maintenance — freeing collective memory from fragile institutions.", img:"img/mlt-p7.jpg", imgIndex:"M-07" },
  { code:"P8", ar:"آفاق · Afaq", en:"Architecture of Living Exploration", desc:"Self-healing, self-replicating systems for space — biological resilience for the harshest environments, reducing dependence on continuous supply from Earth.", img:"img/mlt-p8.jpg", imgIndex:"M-08" },
  { code:"P9", ar:"ميزان · Mizan", en:"Architecture of Balanced Economy", desc:"Economic models designed from the ground up on metabolic balance — growth self-governed by internal feedback that prevents runaway accumulation and systemic collapse.", img:"img/mlt-p9.jpg", imgIndex:"M-09" }
];

const MLT_GOVERNANCE = [
  { glyph:"🧬", title:"Built-in Decay Clause", body:"Every engineered organism carries a decay clause inside its genome — no runaway life outside the lab." },
  { glyph:"📜", title:"Mandatory Provenance", body:"An immutable origin record for every cell. Nothing anonymous, nothing untraceable." },
  { glyph:"🛡", title:"The Care Compiler", body:"A compiler that refuses to assemble any design violating the agreed ethical boundaries." },
  { glyph:"🚫", title:"The Human-Cell Exclusion", body:"The human cell is permanently excluded from every substrate of the flagship. Progress is never bought with human dignity." }
];

/* =====================================================================
   TOPTECH FIVE-BRANCH ARCHITECTURE (A–E)
   ===================================================================== */
const BRANCHES = [
  { code:"A", glyph:"🛠", title:"Operator Craft", range:"F1, F2 · S01–S21", status:"live", desc:"23 shipped units — the two rebuilt flagships and the twenty-one next-level series. Results on the machine-mediated internet, now.", href:"curriculum.html" },
  { code:"B", glyph:"⚙", title:"Engineering & IT", range:"S22–S34", status:"planned", desc:"Design, software engineering, data/AI engineering, infrastructure, security, networks and more. 3 shipped, 10 planned.", href:"toptech.html#branches-sec" },
  { code:"C", glyph:"🏛", title:"Institution Building", range:"S35–S37", status:"planned", desc:"Academy builder, curriculum & assessment design, and governance & stewardship — the craft of building a teaching institution.", href:"academies.html" },
  { code:"D", glyph:"▲", title:"The Meta-X Ascent", range:"S38–S47", status:"research-preview", desc:"The ten-rung ladder from computing substrate to the limits of silicon and the bridge to life. Maps to ten Arabic layer books.", href:"ascent.html" },
  { code:"E", glyph:"🧬", title:"BCIA Gateway", range:"S48–S50", status:"gated", desc:"The responsible on-ramp into the living-substrate research pillar. Gated behind the honesty layer.", href:"bcia.html" }
];

/* Branch B planned units (shown as a compact list) */
const BRANCH_B_UNITS = [
  { n:"S22", title:"Product & Interaction Design", status:"planned" },
  { n:"S23", title:"Software Engineering Craft", status:"planned" },
  { n:"S24", title:"Data & AI Engineering", status:"planned" },
  { n:"S25", title:"Cloud & Infrastructure", status:"planned" },
  { n:"S26", title:"Security & Privacy Engineering", status:"planned" },
  { n:"S27", title:"Networks & Distributed Systems", status:"planned" },
  { n:"S28", title:"Reliability & Observability", status:"planned" },
  { n:"S29", title:"Web Platform & Performance", status:"live" },
  { n:"S30", title:"Databases & Storage", status:"live" },
  { n:"S31", title:"APIs & Integration", status:"live" },
  { n:"S32", title:"Testing & Quality", status:"planned" },
  { n:"S33", title:"Developer Tooling & DX", status:"planned" },
  { n:"S34", title:"Systems Architecture", status:"planned" }
];

/* =====================================================================
   THE META-X ASCENT — ten rungs (S38–S47), all research-preview
   ===================================================================== */
const ASCENT_RUNGS = [
  { n:"38", title:"Computing Substrate Literacy", sub:"Transistors → Gates → ISAs", territory:"The physical machine under every abstraction", tier:"Substrate", icon:"🧱", imgIndex:"AS-38", status:"research-preview" },
  { n:"39", title:"Programming Paradigms & Their Limits", sub:"What code can and cannot say", territory:"Imperative, functional, logic, and their ceilings", tier:"Substrate", icon:"⌨", imgIndex:"AS-39", status:"research-preview" },
  { n:"40", title:"Mathematical Foundations", sub:"Computability & complexity", territory:"Turing, Church, P vs NP, information theory", tier:"Substrate", icon:"📐", imgIndex:"AS-40", status:"research-preview" },
  { n:"41", title:"The End of Binary", sub:"Where 0/1 runs out", territory:"Energy, scaling and precision walls", tier:"Limits", icon:"⚡", imgIndex:"AS-41", status:"research-preview" },
  { n:"42", title:"Multi-Valued & Fuzzy Computation", sub:"Beyond two states", territory:"Ternary, analog, probabilistic, fuzzy logic", tier:"Limits", icon:"◐", imgIndex:"AS-42", status:"research-preview" },
  { n:"43", title:"From Electron to Cell", sub:"The bridge begins", territory:"Why living matter computes at all", tier:"Bridge", icon:"🌉", imgIndex:"AS-43", status:"research-preview" },
  { n:"44", title:"Biological Computation", sub:"Substrate of life", territory:"Gene circuits, molecular logic, honest bounds", tier:"Bridge", icon:"🧬", imgIndex:"AS-44", status:"research-preview" },
  { n:"45", title:"Embodied Computation", sub:"Body as computer", territory:"Morphological computation, control, feedback", tier:"Bridge", icon:"🦾", imgIndex:"AS-45", status:"research-preview" },
  { n:"46", title:"Network Science", sub:"Structure of systems", territory:"Graphs, dynamics, emergence, robustness", tier:"Systems", icon:"🕸", imgIndex:"AS-46", status:"research-preview" },
  { n:"47", title:"Higher Systems & Collective Dynamics", sub:"Wholes from parts", territory:"Complexity, self-organisation, scaling laws", tier:"Systems", icon:"✳", imgIndex:"AS-47", status:"research-preview" }
];

const ASCENT_PATHS = [
  { lvl:"Blue", name:"The Foundations Path", desc:"S38 → S40. For operators who want to understand the machine and its mathematics without the biology. The essential literacy path." },
  { lvl:"Green", name:"The Limits Path", desc:"S41 → S43. For those who want to see exactly where silicon runs out and why a bridge to other substrates is even worth discussing." },
  { lvl:"Gold", name:"The Bridge Path", desc:"S43 → S47. The full climb to the edge of BCIA — biological, embodied and network computation, read as research preview." }
];

/* =====================================================================
   BCIA — gateway series, roadmap, audit, protocol
   ===================================================================== */
const BCIA_SERIES = [
  { n:"48", title:"BCIA Orientation", sub:"What it is & is not", territory:"Scope, exclusions, and the honesty layer", tier:"Gateway", icon:"🧭", imgIndex:"BC-48", status:"gated" },
  { n:"49", title:"Substrate Foundations", sub:"From Ascent to living matter", territory:"The bridge lessons, made rigorous", tier:"Gateway", icon:"🌉", imgIndex:"BC-49", status:"gated" },
  { n:"50", title:"Governance & Provenance", sub:"Cloister / Atrium in practice", territory:"Care compiler, decay clause, exclusions", tier:"Gateway", icon:"⚖", imgIndex:"BC-50", status:"gated" }
];

const BCIA_ROADMAP = [
  { step:"DOC ZERO", desc:"Establish the seven bases the whole pillar stands on. In open review in the Atrium." },
  { step:"AUDIT", desc:"Run the critical audit against every early claim; retract or correct in public." },
  { step:"PROTOCOL", desc:"Pass each volume through the five-step publication-readiness protocol." },
  { step:"PUBLISH", desc:"Ship rung-by-rung — never a whole pillar at once, never before audit." }
];

const BCIA_AUDIT = [
  { lvl:"01", name:"The 28,800× claim — RETRACTED", desc:"The DishBrain-vs-DeepMind like-for-like efficiency comparison was a category error. Banned from all material; replaced with a substrate-fairness discussion." },
  { lvl:"02", name:"“Biology already beats silicon” — CORRECTED", desc:"Softened to a bounded research question. No living system today out-computes a datacentre on general tasks." },
  { lvl:"03", name:"Consciousness language — CORRECTED", desc:"“Conscious” substrate language removed from headline claims; reserved for clearly-labelled philosophical sections." },
  { lvl:"04", name:"Single-lab results — FLAGGED", desc:"All single-source results now carry a reproducibility flag and cannot graduate to durable until independently replicated." }
];

const BCIA_PROTOCOL = [
  { step:"CLAIM", desc:"State the claim with a date and a decay class (durable / semi-durable / perishable)." },
  { step:"NULL", desc:"Write the null hypothesis and the disconfirming evidence that would kill it." },
  { step:"REPLICATE", desc:"Require independent replication for any empirical claim before it graduates." },
  { step:"AUDIT", desc:"Pass an adversarial critical audit in the Atrium — reviewers try to break it." },
  { step:"LOG", desc:"Record the outcome in the verification log; only then does the claim leave research-preview." }
];

/* =====================================================================
   ACADEMIES — five levels, path, eleven requirement groups
   ===================================================================== */
const ACADEMY_LEVELS = [
  { lvl:"L1", name:"Applicant", desc:"A curator with a falsifiable thesis, a scope, and a public rationale for why this academy must exist." },
  { lvl:"L2", name:"Sandbox", desc:"A private workspace to draft curriculum against the standards. Nothing public yet; feedback from a mentor reviewer." },
  { lvl:"L3", name:"Provisional", desc:"Admitted for a probation cohort. First artifacts published for peer review; a public audit report is required." },
  { lvl:"L4", name:"Chartered", desc:"Full member of the community. Cross-linked, credential-issuing, bound by the succession clause." },
  { lvl:"L5", name:"Institution", desc:"Self-governing, version-controlled, decay-aware. A permanent pillar other academies inherit and cite." }
];

const ACADEMY_PATH_STEPS = [
  { step:"APPLY", desc:"Register your thesis, scope, curator identity and the skill-gap or crisis your academy closes." },
  { step:"SANDBOX", desc:"Draft curriculum against the eleven requirement groups with a mentor reviewer, in private." },
  { step:"CHARTER", desc:"Run a probation cohort, publish first artifacts and an audit report, and cross-link to the universe." },
  { step:"COMPOUND", desc:"Issue credentials, publish verified outcomes, and climb toward Institution." }
];

const ACADEMY_REQUIREMENTS = [
  { n:"01", title:"Curator Eligibility", sub:"Skin in the game", territory:"Demonstrated mastery, public track record, accountable identity.", tier:"Group", icon:"🧑‍🏫", imgIndex:"RQ-01" },
  { n:"02", title:"Thesis & Scope", sub:"One falsifiable claim", territory:"A crisp thesis, explicit scope, and clear non-goals.", tier:"Group", icon:"🎯", imgIndex:"RQ-02" },
  { n:"03", title:"Curriculum Minimum", sub:"+ Limits module & Bridge lesson", territory:"A minimum viable curriculum with a mandatory Limits module and Bridge lesson.", tier:"Group", icon:"📚", imgIndex:"RQ-03" },
  { n:"04", title:"Assessment & Credentialing", sub:"Portfolio, not attendance", territory:"Rubrics, peer review, and mapping to the mastery ladder.", tier:"Group", icon:"🎖", imgIndex:"RQ-04" },
  { n:"05", title:"Governance & Succession", sub:"The succession clause", territory:"Roles, decision rights, and a mandatory succession plan.", tier:"Group", icon:"⚖", imgIndex:"RQ-05" },
  { n:"06", title:"Publication Discipline", sub:"No silent edits", territory:"Version control, dated claims, public changelog and corrections log.", tier:"Group", icon:"✍", imgIndex:"RQ-06" },
  { n:"07", title:"Technical", sub:"academy.json", territory:"A machine-readable descriptor: metadata, cross-links, credential schema.", tier:"Group", icon:"🧩", imgIndex:"RQ-07" },
  { n:"08", title:"Language & Bilingual Term Sheet", sub:"EN / عربي", territory:"A bilingual term sheet submitted to the shared lexicon.", tier:"Group", icon:"🔤", imgIndex:"RQ-08" },
  { n:"09", title:"Legal & Commercial", sub:"Clean licensing", territory:"Content licensing, disclosures, and a conflict-of-interest policy.", tier:"Group", icon:"📄", imgIndex:"RQ-09" },
  { n:"10", title:"Red Lines", sub:"Non-negotiable", territory:"Human-cell exclusion, no undisclosed AI, no unfalsifiable hype.", tier:"Group", icon:"🚫", imgIndex:"RQ-10" },
  { n:"11", title:"Review & Enforcement", sub:"Audit & appeals", territory:"Periodic audit, public reports, appeals, and revocation criteria.", tier:"Group", icon:"🛡", imgIndex:"RQ-11" }
];

/* =====================================================================
   CREDENTIALS — ladder + learner submission pack
   ===================================================================== */
const CRED_LADDER = [
  { lvl:"P1", name:"Series Practitioner", desc:"Demonstrated competence in one series — a reviewed portfolio artifact against a public rubric. Two independent reviewers." },
  { lvl:"P2", name:"Professional Operator", desc:"Cross-series judgment on a real, shipped problem — with a pre-registered hypothesis and an honest post-mortem." },
  { lvl:"P3", name:"Master-Fellow", desc:"Original, defensible contribution that other operators cite — reviewed by a panel and published with its scrutiny." }
];

const CRED_LEARNER = [
  { step:"ARTIFACT", desc:"Submit a real piece of work — not a quiz. Shipped, with evidence of outcome." },
  { step:"DOSSIER", desc:"Add a short dossier: the thesis, the method, the result, and what you would do differently." },
  { step:"DISCLOSE", desc:"Declare where and how AI was used. Undisclosed AI use is grounds for revocation." },
  { step:"DEFEND", desc:"Answer reviewer questions. The proof ladder rewards judgment under scrutiny, not polish." }
];

/* =====================================================================
   LIBRARY — standards + lexicon
   ===================================================================== */
const LIBRARY_STANDARDS = [
  { n:"01", title:"Symbol Standard", sub:"One glyph, one meaning", territory:"The controlled set of symbols used across every pillar and page.", tier:"Spec", icon:"✦", imgIndex:"LB-01" },
  { n:"02", title:"Decay Standard", sub:"Durable / Semi / Perishable", territory:"How every claim is dated and classed for expiry.", tier:"Spec", icon:"🧭", imgIndex:"LB-02" },
  { n:"03", title:"Falsifiability Standard", sub:"Null + evidence + rule", territory:"The required shape of any strong claim.", tier:"Spec", icon:"🔬", imgIndex:"LB-03" },
  { n:"04", title:"Publishing Style Guide", sub:"Voice & structure", territory:"Thesis → why now → how → when it stops being true.", tier:"Spec", icon:"✍", imgIndex:"LB-04" },
  { n:"05", title:"Master Course Generation Prompt", sub:"How a course is drafted", territory:"The governed prompt that seeds every course draft.", tier:"Spec", icon:"🤖", imgIndex:"LB-05" },
  { n:"06", title:"academy.json Schema", sub:"Machine-readable academy", territory:"The descriptor every academy submits.", tier:"Spec", icon:"🧩", imgIndex:"LB-06" }
];

const LEXICON = [
  { en:"Substrate", ar:"ركيزة", root:"ر ك ز", gloss:"The physical or living medium on which computation runs." },
  { en:"Decay-aware", ar:"واعٍ بالتلاشي", root:"ل ش ي", gloss:"A claim that carries its own expiry class." },
  { en:"Falsifiable", ar:"قابل للدحض", root:"د ح ض", gloss:"Stated so it can be proven wrong." },
  { en:"Governance", ar:"حَوْكَمة", root:"ح ك م", gloss:"The built-in rules of scope, ethics and succession." },
  { en:"Provenance", ar:"مَنشأ", root:"ن ش أ", gloss:"The traceable origin record of a substrate or claim." },
  { en:"Bridge lesson", ar:"درس الجسر", root:"ج س ر", gloss:"A lesson linking a claim to its substrate rung." },
  { en:"Limits module", ar:"وحدة الحدود", root:"ح د د", gloss:"The mandatory statement of what an approach cannot do." },
  { en:"Ascent", ar:"صعود", root:"ص ع د", gloss:"The ten-rung ladder from substrate to the bridge." },
  { en:"Cloister", ar:"الرِّواق", root:"ر و ق", gloss:"The scope-and-ethics governance body." },
  { en:"Atrium", ar:"الفناء", root:"ف ن ي", gloss:"The open peer-review forum." },
  { en:"Charter", ar:"ميثاق", root:"و ث ق", gloss:"The founding agreement admitting an academy." },
  { en:"Credential", ar:"اعتماد", root:"ع م د", gloss:"A defensible, verifiable claim of mastery." }
];

/* =====================================================================
   START-HERE diagnostic + VERIFY sample records
   ===================================================================== */
const DIAGNOSTIC = [
  { glyph:"💼", q:"I want results this quarter.", to:"toptech.html", badge:"live", label:"TopTech · Branch A", note:"Start with the shipped operator craft — flagships and the 21 series." },
  { glyph:"🧠", q:"I want to understand the machine itself.", to:"ascent.html", badge:"research-preview", label:"The Ascent · Branch D", note:"Climb from substrate to the limits of silicon." },
  { glyph:"🧬", q:"I'm here for the living-substrate frontier.", to:"bcia.html", badge:"gated", label:"BCIA", note:"Read the honesty layer first — it is under remediation." },
  { glyph:"🏛", q:"I want to teach and found an academy.", to:"academies.html", badge:"live", label:"Academies", note:"Climb the five levels; meet the eleven requirement groups." },
  { glyph:"🎖", q:"I want a credential I can defend.", to:"credentials.html", badge:"live", label:"Credentials", note:"Portfolio-based, peer-reviewed, publicly verifiable." },
  { glyph:"📚", q:"I just want to read and reference.", to:"library.html", badge:"live", label:"Library", note:"Standards, the bilingual lexicon, logs and news." }
];

const VERIFY_RECORDS = {
  "MX-OP-2026-0007": { name:"A. Rahman", rung:"Professional Operator (P2)", academy:"MetaX TopTech", date:"2026-05-14", reviewers:"2 + appeal panel", status:"valid" },
  "MX-PR-2026-0031": { name:"J. Okafor", rung:"Series Practitioner (P1) — Answer-Engine Mastery", academy:"MetaX TopTech", date:"2026-06-02", reviewers:"2 independent", status:"valid" },
  "MX-MF-2026-0002": { name:"L. Haddad", rung:"Master-Fellow (P3)", academy:"MetaX TopTech", date:"2026-07-21", reviewers:"Panel of 4", status:"valid" }
};
