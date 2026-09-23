---
title: Roles (§H.1-bis)
eyebrow: LICENSE · MACHINERY · ROLES
deck: The four parties Part H addresses — Author, Integrator, Operator, Commissioner — and why a duty binding no named role is unenforceable in the ordinary case.
status: live
evidence: E3
version: ML-2.3 · §H.1-bis
reviewed: 2026-09-01
jsonld: Article
group: Operative Machinery
up: [["Operative Machinery","/license/machinery/"],["License","/license/"]]
beside: [["The Seven Absolutes","/license/machinery/absolutes/"],["The Scale Gate","/license/machinery/scale-gate/"],["Conditions vs Covenants","/license/machinery/breach/"],["Riba","/license/machinery/riba/"]]
depends: [["Part H — the harms","/license/ml-2-3/part-h-harms/"],["Stratum V · Reflexive","/license/harms/stratum-v-reflexive/"]]
governs: [["Interpretive Transparency (Steward)","/license/harms/stratum-v-reflexive/"],["Every Part H duty","/license/statement/form/"]]
deeper: ["Read the scale gate","/license/machinery/scale-gate/"]
sideways: ["Read the absolutes","/license/machinery/absolutes/"]
---

# Why Part H had to name its parties

Before §H.1-bis, Part H addressed at least four distinct parties and named none of them, and that omission made most of its duties unenforceable in the ordinary case where the author of software and its operator are different people. A licensee who writes a library and ships it cannot publish a worst-future-holder assessment for a dataset they never assemble; a minimisation duty, a deactivation-appeal duty, and a metric-honesty duty all attach to whoever runs the system in production, not to whoever wrote the code. A duty that binds "a builder" is a duty that binds no one when the builder is not the runner. §H.1-bis fixes this by defining four roles and requiring every duty to state which it binds.

# The four roles, defined operatively

**Author** creates or modifies the Work — the party who writes or changes the code, model, or content. **Integrator** embeds the Work in a product — the party who takes someone else's Work and ships it inside their own. **Operator** runs a deployment against real persons — the party whose system actually touches users, and the party most Part H duties bind, because most structural harm happens in production. **Commissioner** procures a deployment and sets its objective — the party who pays for the system and decides what it is for, and who therefore carries the duties that turn on purpose rather than execution. A single person may occupy several roles at once; a large organisation may split them across departments. The roles are functions, not job titles.

# How duties attach to roles

Every duty in Part H states its role. The optimisation-disclosure duty binds Operator and Commissioner jointly, because the objective and its execution are both implicated. The provenance duty binds Author and Operator. The material-accounting duty binds Operator. And several duties bind a fifth party the register names specially: the **Steward** of the license itself — the interpretive-transparency duty, the remedy-preservation duty, and the interpretive-concentration provisions all bind the party who interprets ML-2.3, which for this estate is the curator. That reflexive binding is deliberate: an instrument that imposed duties on everyone except its own steward would be committing the interpretive-concentration harm it names in HX-19.

# The worked instance — the split author and operator

Consider a developer who publishes an open-source recommendation library (Author) that a media company embeds in its app (Integrator and Commissioner) and runs against ten million readers (Operator). Under the old undifferentiated Part H, every duty nominally bound "the builder," and each party could point at another. Under §H.1-bis, the picture resolves: the Author owes the provenance and language-parity duties on the Work itself; the Operator owes the attention, minimisation, and material-accounting duties on the deployment; the Commissioner owes the optimisation-disclosure and reversibility duties on the objective it set. No duty is orphaned, and no party can disclaim one that names it.

# Limits of the role model

The roles are functional, so a party must classify itself honestly, and the instrument cannot audit the classification. A party occupying multiple roles owes the union of their duties, which can be heavy — the scale gate, not the role model, is what makes that proportionate. And the Steward binding rests on the estate having exactly one identifiable steward; where stewardship is distributed, the duties attach to whoever in fact interprets the instrument, which the register acknowledges is harder to pin down.

# The falsifier for this page

The role model's governing claim is that duties attached to named roles are enforceable where undifferentiated duties are not. The refutation: if disputes under Part H turn out no more resolvable with the four roles than without them — if parties still successfully disclaim duties that name their role — the model adds vocabulary without enforceability and should be simplified.

# What the roles oblige

Identify every role you occupy before you read any duty; you owe the union of the duties that name those roles. If you are a Steward — if you interpret the license for others — read the duties that bind the Steward, because the instrument binds its own interpreter on purpose. And when you write your Part H Statement, declare your role first: it is the field that decides which of the twenty-seven duties are even yours to consider.
