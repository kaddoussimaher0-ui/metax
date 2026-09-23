---
title: The Stack
eyebrow: LIBRARY · THE STACK
deck: The architecture — the layer model of the estate, the two-plane model, the data tiers T1–T4, and the hosting topology.
status: live
evidence: E2
version: v2026.10.1
reviewed: 2026-09-01
jsonld: WebPage
up: [["Library","/library/"],["All routes","/search/"]]
beside: [["Standards","/library/standards/"],["The Record","/library/record/"],["Sources & Data","/library/sources/"]]
depends: [["The Static Principle","/about/policy/static-principle/"],["The Two-Plane Model","/library/stack/two-plane/"]]
governs: [["Data Tiers","/library/stack/data-tiers/"],["Hosting & Topology","/library/stack/topology/"]]
deeper: ["Read the two-plane model","/library/stack/two-plane/"]
sideways: ["See the standards","/library/standards/"]
---

# The architecture the whole estate is built on

The Stack is the group that describes how the estate is built — its layers, its planes, its data tiers, and its hosting. It exists because an estate that claims to be static, portable, and auditable must be able to show its architecture, or the claim is unverifiable. This group lets a reader see how the pieces fit: the layer model of the whole estate, the two-plane model that separates the static content plane from the dynamic services plane, the data tiers T1–T4 that grade how data is stored and served, and the hosting topology. Its four pages are the layer model, the two-plane model, the data tiers, and the topology.

## Why the architecture is published

Most sites hide their architecture; the estate publishes it because its promises depend on it. The claim that a content page renders with JavaScript disabled is checkable only if a reader can see the two-plane model that keeps content static. The claim that the estate's reversal cost is bounded is checkable only against the topology and the data tiers. Publishing the stack is the static principle applied to the estate's own construction — the load-bearing architecture is documented, not assumed.

## The map — what lives in this group

**Layer Model of the Estate** shows the layers from the token design system up through the content and services. **The Two-Plane Model** separates the static content plane, which renders without JavaScript, from the dynamic services plane, which handles auth, payment, and dashboards. **Data Tiers (T1–T4)** grade data by how it is stored and served, from static files to live records. **Hosting & Topology** states where the estate runs and how it would migrate.

## The worked instance — the two-plane model

The two-plane model is the group's clearest instance of the estate's architecture serving its principles. The content plane is static, pre-rendered, crawlable, and archivable — every content page renders completely for an anonymous visitor with JavaScript disabled. The services plane is dynamic — auth, payment, dashboards — and is deliberately kept separate, so the failure of a dynamic service never takes down a content page. This partition is what lets the estate be both a durable, static archive and a functioning application: the two are different planes with different rules, and the separation is a design decision the model documents.

## Limits of this group

The stack documents the architecture; it does not itself enforce it — the enforcement is in the build and the hosting. Some architectural elements describe the intended production topology on a demo that runs a subset of it, and the pages say so. And the data tiers describe how data should be graded, which the estate applies to itself but cannot compel an academy to follow beyond the technical requirements.

## The falsifier for this group

The group's governing claim is that publishing the architecture makes the estate's static, portable, auditable promises checkable. The refutation: if the published architecture diverges from the estate's actual construction without the divergence appearing in the defect log, the documentation is decorative and the group has failed.

## What this group obliges

Read the two-plane model to understand why content pages survive with JavaScript off. Check a promise against the architecture rather than taking it on trust — that is what publishing the stack is for. And if you build an academy, follow the data tiers and topology the technical spec requires, because the estate's portability depends on every academy sharing the same bounded architecture.
