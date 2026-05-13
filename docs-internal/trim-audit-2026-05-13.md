# Docs trim audit, 2026 05 13

Read only audit of the published `docs/` tree. No edits to any docs file. Verdicts and rationale only. Krypt directs what trims execute.

## Summary

- Total pages walked: 29
- Total current word count: 8,796
- Recommended target word count: 7,830 (approximately 11% reduction)
- Pages to keep as is: 19
- Pages to compress: 10 (9 at COMPRESS_20, 1 at COMPRESS_40)
- Pages to merge: 0
- Pages to remove: 0
- Pages with em dashes: 0 (clean across the whole tree)
- Pages with en dashes: 0

### Notes on the constraints brief

Two pages were flagged in the brief that do not exist in the current tree on `main` or any other branch:

1. **Eight Reasons page.** No page found by name, sidebar slot, or content match. Closest in spirit is `projects/why.mdx` (the "two tiers, five surfaces" framing) and `intelligence/why-we-say-no.mdx` (the qualification rationale). If "Eight Reasons" is planned but unmerged, the constraint about marketing length is queued for when it lands.
2. **Stop loss & trailing page.** No page found. The brief calls it "just added." Nothing in `docs/` covers stop loss mechanics or trailing logic, and the bobby behavior in this repo is alerts and convergence, not trade execution. Possibly a Dale Docs page that was confused with Bobby Docs (separate repos per memory). Flag for Krypt to confirm.

## Page by page table

Sorted by current word count descending. Read time computed at 200 wpm. Em dashes counted as U+2014.

| # | Path | Words | Read (s) | Em dashes | Verdict | Notes |
|---|---|---:|---:|---:|---|---|
| 1 | docs/index.mdx | 703 | 211 | 0 | COMPRESS_40 | Section 04 "The surfaces" duplicates Section 02 "Three doors". The Pullquote also appears on three other pages. Tail "One thing to remember" is a tag on, not a section. |
| 2 | docs/projects/tier-2.mdx | 600 | 180 | 0 | COMPRESS_20 | "The trust principle" section duplicates the same principle in `projects/why.mdx`. Pricing tables earn the rest. |
| 3 | docs/community/board.mdx | 517 | 155 | 0 | COMPRESS_20 | "What a BOOST is" section is near identical to the same heading in `community/league.mdx`. Pick one canonical home. |
| 4 | docs/community/league.mdx | 440 | 132 | 0 | COMPRESS_20 | The BOOST tap explanation appears three times on this page alone (pullquote intro, "How The League works", "What a BOOST is"). |
| 5 | docs/projects/founders.mdx | 427 | 128 | 0 | KEEP | Five criteria + perks + fail breakdown + code sample. Length is doing work. |
| 6 | docs/surfaces/lobby.mdx | 409 | 123 | 0 | COMPRESS_20 | "Why this matters" re explains what "What it is" already said about funnels and community first framing. |
| 7 | docs/projects/tier-1.mdx | 380 | 114 | 0 | KEEP | Pricing reference. Justified. |
| 8 | docs/community/proof.mdx | 366 | 110 | 0 | KEEP | Tight. Epic events, Featured slot, info boxes all earn their lines. |
| 9 | docs/intelligence/why-we-say-no.mdx | 338 | 101 | 0 | COMPRESS_20 | Same billboard / intelligence Pullquote repeats from three other pages. The "Why no, when most products would say yes" paragraph rephrases the qualification rationale already covered. |
| 10 | docs/projects/why.mdx | 336 | 101 | 0 | COMPRESS_20 | Trust principle paragraph overlaps with `tier-2.mdx`. Could lean fully on cards plus a single link out to `why-we-say-no`. |
| 11 | docs/projects/apply.mdx | 319 | 96 | 0 | COMPRESS_20 | "What we already know" section softens what `tier-2.mdx` and `founders.mdx` state cleaner. The DM steps and timing already make the point. |
| 12 | docs/projects/bundles.mdx | 306 | 92 | 0 | KEEP | Four bundle entries, clean structural prose. |
| 13 | docs/brand/voice.mdx | 301 | 90 | 0 | KEEP | Voice reference. Pass / fail table is load bearing. |
| 14 | docs/intelligence/convergence.mdx | 268 | 80 | 0 | COMPRESS_20 | "What we deliberately exclude" (volume) repeats from `what-bobby-sees.mdx`. Single source problem paragraph is two adjacent paragraphs saying the same thing. |
| 15 | docs/brand/assets.mdx | 260 | 78 | 0 | KEEP | Pure reference, palette + typography. |
| 16 | docs/groups/what-bobby-does.mdx | 257 | 77 | 0 | KEEP | Mock + three short H2s + CTA card. Right size. |
| 17 | docs/groups/commands.mdx | 256 | 77 | 0 | KEEP | Reference table. Justified. |
| 18 | docs/projects/surfaces.mdx | 251 | 75 | 0 | KEEP | Five surface cards with mocks. Right size. |
| 19 | docs/groups/configure.mdx | 244 | 73 | 0 | KEEP | Two commands plus permissions table. Tight. |
| 20 | docs/groups/add.mdx | 238 | 71 | 0 | KEEP | Steps and next steps. Tight. |
| 21 | docs/intelligence/what-bobby-sees.mdx | 232 | 70 | 0 | KEEP | Principle page. Lean. |
| 22 | docs/groups/pro.mdx | 230 | 69 | 0 | KEEP | Bobby PRO pricing block. Tight. |
| 23 | docs/groups/alerts.mdx | 218 | 65 | 0 | COMPRESS_20 | "Sensible defaults" paragraph softens with hedging ("probably do not need to"). The "twelve herbs and spices" line appears in `what-bobby-sees.mdx` too. |
| 24 | docs/start.mdx | 197 | 59 | 0 | KEEP | Three door picker. Already tight. |
| 25 | docs/brand/press.mdx | 189 | 57 | 0 | KEEP | Press kit. Tight. |
| 26 | docs/intelligence/bobby-sees.mdx | 167 | 50 | 0 | KEEP | Surface description. Short. |
| 27 | docs/surfaces/x.mdx | 139 | 42 | 0 | KEEP | Phase 1 locked. Restrained on purpose. |
| 28 | docs/surfaces/support.mdx | 107 | 32 | 0 | KEEP | Minimal. Below the 40 second threshold. |
| 29 | docs/links.mdx | 101 | 30 | 0 | KEEP | All Bobby links in one card group. Below the 40 second threshold. |

## Compression candidates (top 10 by impact)

### 1. docs/index.mdx (COMPRESS_40)

- Current word count: 703
- Proposed word count: 420 (approximately 40% cut)
- Specific trims:
  1. Drop Section 04 "The surfaces". It restates Section 02 "Three doors" with a six card variant. Pick one. The doors version is more decisive and routes to the same destinations.
  2. Cut "Bobby Lobby: the room" section down to two sentences plus the CardGroup. The current three paragraphs re say what Section 02 already framed.
  3. Trim "03 The principle" body to two lines. The Pullquote does the work. Volume sentence stays.
  4. Pull "01 The engine, live" down to the two card row. The TODO comment about the Convergence Engine animation already implies the visual carries the section.
  5. Remove "One thing to remember" tail. It is a single sentence quoting the trust principle already on the page in Section 03 and on three other pages.

### 2. docs/projects/tier-2.mdx (COMPRESS_20)

- Current word count: 600
- Proposed word count: 480
- Specific trims:
  1. Cut "The trust principle" block (intro + Pullquote + paragraph). It is verbatim Pullquote and near verbatim prose from `projects/why.mdx`. One link, not a re state.
  2. Trim the Mass DM intro paragraph from "Bobby speaks about..." to one sentence plus the table.
  3. Cut "Custom Monthly Sponsored" body to the card alone. The card already says what the paragraph repeats.
  4. The "How to buy" section can drop the "qualification check resolves in about ten seconds" sentence. Already on `founders.mdx` and `apply.mdx`.

### 3. docs/community/board.mdx (COMPRESS_20)

- Current word count: 517
- Proposed word count: 415
- Specific trims:
  1. Remove the entire "What a BOOST is" section. It duplicates the same heading and copy in `community/league.mdx`. Pick one canonical home (suggest `league.mdx` since the verb belongs to the engine, not the scoreboard) and link from the other.
  2. Trim "How it ranks" body. The two paragraphs say the same thing about position, edit cadence, and attribution. One paragraph plus the table.
  3. The intro pullquote line "The Board is the public scoreboard for that sentence" can fold into the lede.

### 4. docs/community/league.mdx (COMPRESS_20)

- Current word count: 440
- Proposed word count: 350
- Specific trims:
  1. The BOOST tap explanation appears three times: in the pullquote intro, inside "How The League works", and in "What a BOOST is". Keep "What a BOOST is" canonical, trim the other two to a single line each.
  2. "Last week" section can be the code block alone with a one line lead in. The prose paragraph repeats the command syntax.
  3. The "The League is what trending wishes it was" Tip is voicey but earns it. Keep.

### 5. docs/surfaces/lobby.mdx (COMPRESS_20)

- Current word count: 409
- Proposed word count: 325
- Specific trims:
  1. "Why this matters" paragraph repeats what "What it is" set up. Cut to one sentence or drop the section entirely.
  2. "Who is in the Lobby" can collapse the third bullet (Bobby) into the intro. The "Bobby. Always there. Reading the room." rhythm already lives on `what-bobby-sees.mdx`.
  3. The Info box about Lobby being one of five surfaces is fine but the body sentence "A slot in the Lobby is community native. The audience already trusts the room." softens. Tighten.

### 6. docs/intelligence/why-we-say-no.mdx (COMPRESS_20)

- Current word count: 338
- Proposed word count: 270
- Specific trims:
  1. The billboard / intelligence Pullquote appears here, on `index.mdx`, on `projects/why.mdx`, and on `projects/tier-2.mdx`. Four times across the network is one too many. Drop from this page (the page title is the principle anyway) or drop from `projects/why.mdx`.
  2. "Why no, when most products would say yes" paragraph rephrases the qualification rationale already covered in the page intro. Cut to one sentence.
  3. The "We do not negotiate. We do not allow upselling around it. We do not have a..." run is three negations doing one job. One negation, sharper.

### 7. docs/projects/why.mdx (COMPRESS_20)

- Current word count: 336
- Proposed word count: 270
- Specific trims:
  1. "The trust principle" section is the same Pullquote and near identical prose as `tier-2.mdx`. Cut here, keep on `tier-2.mdx` (the page projects actually buy from).
  2. The Info box "Where to start" can drop the last sentence. The DM line is on every other projects page.
  3. The "five surfaces. Forever." paragraph repeats what `projects/surfaces.mdx` opens with. Lean on the card link.

### 8. docs/projects/apply.mdx (COMPRESS_20)

- Current word count: 319
- Proposed word count: 255
- Specific trims:
  1. "What we already know" softens with marketing prose ("You just need to be the case"). One sentence: "We have already done the homework. The DM is where we tell you what we found."
  2. "After you DM" section can drop to two short paragraphs. The 20% off line and the precise breakdown line. The "Either way" line is the bridge.
  3. The Tip "Response window" duplicates the Tip on `surfaces/support.mdx`. Pick one home.

### 9. docs/intelligence/convergence.mdx (COMPRESS_20)

- Current word count: 268
- Proposed word count: 215
- Specific trims:
  1. "What we deliberately exclude" volume framing repeats from `what-bobby-sees.mdx`. Cut to one line and link.
  2. The single source problem section is two adjacent paragraphs making the same point (bot pings on every manipulation, market figured this out). Compress to one.
  3. "Cross community pattern matching" paragraph is three sentences saying one thing. Keep the historical context line, cut the rest.

### 10. docs/groups/alerts.mdx (COMPRESS_20)

- Current word count: 218
- Proposed word count: 175
- Specific trims:
  1. "Sensible defaults" body softens. "If you do nothing, Bobby works" is the whole point. The hedge "You probably do not need to" weakens the claim. Cut.
  2. The "twelve herbs and spices" line appears on `what-bobby-sees.mdx` too. Pick one canonical home for the joke.
  3. The Warning at the bottom can fold into "What you cannot tune. And why." It is the same point repeated.

## Merge proposals

None.

A few pages were considered for merge and rejected:

- `intelligence/what-bobby-sees.mdx` and `intelligence/convergence.mdx`. Both use the same ConvergenceEngine component and overlap on volume framing. But the first is the broad principle ("what Bobby looks at") and the second is the specific mechanic ("why convergence beats single source"). Distinct enough to keep, compression already proposed for the overlap.
- `intelligence/bobby-sees.mdx` and `intelligence/what-bobby-sees.mdx`. Name collision is real but they are different things. The first is the discovery surface (formerly Bobby Browser). The second is the principle page. Both routed to from `index.mdx` for different reasons. Rename one if the collision keeps confusing readers, but do not merge.
- `community/board.mdx` and `community/league.mdx`. The Board is the scoreboard, the League is the engine. Different products. The duplicated "What a BOOST is" section is the only real overlap and compression handles it.

## Remove proposals

None.

Every page in the tree routes from the sidebar and serves at least one job not covered elsewhere. The ten compression candidates above address the actual problem (cross page repetition of the trust principle and the BOOST verb) without removing routable pages.

## Hard rules audit

- **Em dashes (U+2014).** Zero across all 29 pages. The April 30 global sweep held.
- **En dashes (U+2013).** Zero across all 29 pages.
- **40 second read pages.** 26 of 29 pages cross the 133 word / 40 second threshold. The three under the threshold are `links.mdx` (101w), `support.mdx` (107w), and `surfaces/x.mdx` (139w, just over but flagged for review since Phase 1 is locked anyway). Of the 26 over threshold, only the 10 listed for compression appear to not earn the length. The other 16 (founders, tier-1, voice, assets, proof, bundles, surfaces, what-bobby-does, commands, configure, add, what-bobby-sees, pro, start, press, bobby-sees) earn it through reference content, pricing tables, or load bearing structure.

## What is not in this audit

- No edits to `docs/` files (read only, as required).
- No edits to `sidebars.js`, `docusaurus.config.js`, or any component file.
- No proposed copy. Compression suggestions are which sections, why. The actual rewrites belong in the trim PRs that follow this audit.
