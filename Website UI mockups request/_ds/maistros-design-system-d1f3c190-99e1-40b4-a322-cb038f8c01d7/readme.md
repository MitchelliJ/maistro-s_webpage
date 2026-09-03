# maistros — design system

maistros is a two-person Dutch AI consultancy for mid-market companies (50–250 employees) running on Microsoft — 365, Dynamics, Power BI. Three offers: **advice** (AI-scan, roadmap, monthly sparring), **Power AI** (an agent that writes recurring reports out of data already sitting in the client's Microsoft environment), and **custom AI agents** built together with the client's own "AI-champions". The pitch is adoption, not technology: the founders are the people who build, there is no account layer, and the business case comes before the work.

The brand concept: *maistros makes maestros.* Maestro is what you call someone who has mastered their craft, and more often what you call a friend who has just pulled something off — half compliment, half joke, entirely sincere. AI takes over the parts that were never the craft; what is left is judgment and taste. The name is plural on purpose: a room full of masters, spoken to as peers.

## Sources given
| Source | What it contained |
|-|-|
| `uploads/maistros-brand-guidelines.md` | The full brand book: concept, logo spec, colour, typography, imagery, iconography, motion, tone of voice. This is the ground truth for everything in this system. |
| `uploads/maistro-website-copy.md` | Dutch website copy, v1 (homepage, Power AI, AI-agents, advies, over ons, microcopy). Directional only — as noted by the client it **currently violates the guidelines** (see "Copy corrections applied"). |

Logo construction files were supplied later (`uploads/maistros-wordmark-primary.html`, `uploads/maistros-wordmark-reversed.html`) and extracted to `assets/logo/`. No Figma file, repository, screenshots or font binaries were provided. Nothing in this system is reconstructed from memory of an existing product.

## Products represented
1. **Marketing website** (Dutch) — `ui_kits/website/`. The only surface with source material.
2. **Power AI** — described in the copy as a product, but no product UI was provided (no Figma, no code, no screenshots). It appears here only as it appears on the website: a product page with an illustrative report card. **No app UI kit was authored**, because inventing one would put screens into the system that no designer at maistros would recognise.

---

## Content fundamentals

**Assured and plainspoken.** Short sentences, verbs over nouns, second person. The first sentence of anything is under ten words.

- **Dutch first, English second.** Write Dutch, then translate. Dutch → English preserves the plainness; English → Dutch imports the hype, because English marketing copy is full of it.
- **`je`, never `u`.** Direct address, singular or plural (`jij`, `jullie`).
- **Sentence case everywhere. No all-caps, ever** — including the brand name, which is always `maistros`, lowercase.
- **Every claim carries a number or a name, or it gets cut.** "50 tot 250 medewerkers", "binnen één werkdag", "met z'n tweeën".
- **Headlines are statements, never questions** as a hook. (A question is allowed as a section head where it is the reader's own thought: "Je hebt Copilot. En nu?" — that is the reader talking, not a sales prompt like "Klaar voor AI?")
- **Never imply AI replaces people.** The line is always that AI takes the typing and the boilerplate; judgment stays with the client's people.
- **No emoji.** None in the guidelines, none in the copy, none in the UI.
- **Banned words.** Dutch: ontzorgen, naadloos, toekomstbestendig, revolutionair, AI-gedreven. English: unlock, empower, seamless, cutting-edge, game-changing.
- **Honesty is a voice feature.** "Soms is het antwoord 'niet doen'." "Als het niet rekent, doen we het niet." "Geen testimonials verzonnen."

Vibe: a builder who has done this before, sitting across the table, not selling. Dry, warm, slightly challenging. Numbers instead of adjectives.

Examples straight from the source:
> AI die werkt. Ook bij jullie.
> Geen consultants die praten. Bouwers die meedoen.
> Rapporten die zichzelf schrijven. Uit data die je al hebt.
> Deze pagina bestaat niet. Onze agents wel.

### Copy corrections applied
The supplied copy sets the brand as **MAISTRO** in caps. The guidelines forbid all-caps anywhere and set the wordmark as lowercase `maistros`, so everywhere in this system the name is `maistros`. Otherwise the Dutch copy is used verbatim, including the `[Naam]` placeholders on the about page.

---

## Visual foundations

**Colour.** Four brand colours and nothing else: paper `#FAF6F1` (the dominant surface), deep teal `#0A403B` (the single dark — there is deliberately no second near-black), turquoise `#16A79B` (structure, rules, active states, chart fills), orange `#F2621F` (one moment per screen). Support text colours — graphite, slate, hairline, chalk, muted chalk — live in the typography spec and are never fills, backgrounds or accents. Orange appears **once per screen and the logo counts**; never on turquoise (≈1.1:1). Headlines are deep teal on paper and pure white on dark; body is graphite on paper and chalk on dark, because pure white body text halates at reading sizes. Rules are always hairline — never a brand colour at low opacity, which reads as a mistake rather than a choice.

**Type.** Gabarito 700/600 for h1/h2; Onest 600/400 for h3, body, UI and captions. Two weights per face — a hierarchy that wants a third weight has a spacing problem. Web scale: h1 `clamp(2.5rem,5vw,4.5rem)`/1.05, h2 32/1.15, h3 22/1.3, body 17/1.65, small 14/1.6. Deck scale: 44 / 24 / 18 / 12 pt, max three sizes per slide. Headline slots are designed against the **Dutch** and left short in English; `hyphens:auto` with `lang="nl"` declared.

**Spacing and layout.** 4px base step, 0–128px. 96px between page sections, 24px gutters inside a block, 1160px page max, 680px prose max. Controls are 34 / 44 / 52px tall, pill-shaped. The header is the only fixed element: sticky, 76px, paper at 88% with a 10px blur and a hairline bottom edge. Nothing else is pinned — no floating action buttons, no sticky CTA bars.

**Backgrounds and imagery.** Flat paper, full stop. No gradients, no photographic hero, no texture, no pattern fills. Section separation comes from three moves only: a paper→sunk-paper tone change with hairline edges, a full-bleed deep-teal band, and the rhythm rule. The one non-photographic graphic in the brand is that **rhythm system**: measured horizontal rules with marks at intervals, derived from notation without ever being notation — section dividers and deck chapter slides only, drawn in hairline or turquoise, never orange, never behind text. No photography was supplied; where a photo belongs, this system leaves a labelled empty slot rather than a stand-in image. When photography does arrive it should be warm-neutral and unstyled — the palette is warm, so cool or blue-graded imagery will fight it.

**Borders, radii, depth.** Radii: 4 (badges, checkboxes), 8 (fields), 12 (small cards, toasts), 18 (cards), 28 (dialogs), pill (buttons, tags, switches). Borders: 1px hairline structural, 2px for controls that need to read as controls (secondary buttons, checkboxes, radios) — matching the 2px icon stroke. **Depth is hairlines and paper tone, not shadow.** Cards sit flat: white on paper with a 1px hairline and no shadow at rest. Only two real shadows exist and both are for overlays: `0 1px 2px rgba(10,64,59,.06)` on hover lift and `0 18px 48px rgba(10,64,59,.14)` under dialogs and toasts. Transparency and blur appear in exactly two places: the sticky header and the dialog scrim (deep teal at 42%, 3px blur). No glass panels anywhere else.

**States.** Hover on a solid button lightens the fill toward `#0D544D`; press darkens to `#072F2B` — colour change only, never a scale-down. Ghost buttons underline in turquoise on hover. Cards rise 2px and turn their hairline turquoise. Quiet icon buttons wash in turquoise at 8–10% alpha. Active state is turquoise everywhere — tab rules, selected tags, switch tracks, checkbox fills. Focus is a 2px turquoise outline at 2px offset, and fields carry a soft turquoise ring instead. Disabled is 40% opacity with no colour change.

**Motion.** Everything moves on a beat: 120ms hover, 240ms base, 320ms page, 60ms list stagger, one easing curve — `cubic-bezier(0.2,0.8,0.2,1)`. **No springs, no bounce**; they fight the calm the brand is selling. Content rises 8px and fades; nothing slides in from an edge. Lists and cards enter with a 60ms stagger — the ensemble coming in rather than everything landing at once. The signature move is the sparkle scaling 1.0 → 1.08 → 1.0 over 600ms on first load, once, never looping. Loading is a **count-in**: three marks appearing in sequence, never a spinner. Under `prefers-reduced-motion` everything collapses to a plain opacity fade.

---

## Iconography

- **System:** Lucide, loaded from CDN (`https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js`). **This is a substitution, flagged:** no icon font, sprite or SVG set was supplied. Lucide happens to match the brand spec exactly as drawn — 24px grid, uniform 2px stroke, round caps and joins, open forms — so it is the closest available set rather than a compromise. Swap in the real set when it exists; the `Icon` component is the single seam.
- **Spec:** uniform 2px stroke on a 24px grid, round caps and round joins, open forms with generous corner radii, circles / straight lines / 45° angles only. Draw at 24, check at 16.
- **Colour:** deep teal or graphite, inherited via `currentColor`. **Never orange.**
- **No icon ever contains a sparkle** — the sparkle belongs to the logo alone.
- **No emoji, and no unicode characters used as icons.** The one non-Lucide glyph in the system is the `×` in the don'ts card, which is typography, not an icon.
- Icons are used sparingly: inside buttons, as field affordances, in the proof rows and toast tones. There is no icon-per-card decoration habit.

## Logo

Source: `uploads/maistros-wordmark-primary.html` and `-reversed.html`. The wordmark is **live Gabarito 700 text** with the `i` replaced by an SVG glyph — a 9×33 rounded stem with the four-point cubic-curve sparkle above it, in a 20×52 box, 0.823em tall, sitting on the baseline. `Wordmark` draws this inline so it scales with the type; `LogoIcon` puts the glyph on a rounded square in the three approved fields. Static SVGs for favicons, avatars and deck corners are in `assets/logo/` (see its README).

Rules carried into the components: sparkle orange on paper and on deep teal, **paper on turquoise**; sparkle alone only below 20px; wordmark never below 90px wide; the 600ms scale beat runs once on mount. The rounded-square icon tile geometry (rx 21 on 96) is an interpretation — the source only defined the wordmark.

## Fonts

Gabarito and Onest are both available on Google Fonts, so `tokens/fonts.css` loads them from the Google CDN. **No vendor binaries were supplied** — if maistros licenses or self-hosts these faces, replace that one `@import` with self-hosted `@font-face` rules and drop the woff2 files into `assets/fonts/`.

---

## Index

| Path | What it is |
|-|-|
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/fonts.css` | Font loading and family declarations. |
| `tokens/colors.css` | Brand palette, support text colours, semantic aliases, dark-ground scope. |
| `tokens/typography.css` | Families, weights, web + deck scales, tracking, measure. |
| `tokens/spacing.css` | 4px scale, page/prose max, control heights. |
| `tokens/shape.css` | Radii, border widths, the four shadows, focus ring. |
| `tokens/motion.css` | Durations, easing, keyframes, reduced-motion collapse. |
| `tokens/base.css` | Element resets: headings, body, links, rules, selection. |
| `guidelines/*.html` | 21 specimen cards feeding the Design System tab (Colors, Type, Spacing, Motion, Brand). |
| `assets/logo/` | Wordmark glyph, sparkle and icon tiles as SVG, extracted from the supplied logo files. |
| `components/core/` | Button, IconButton, Card, Badge, Tag, Icon, Wordmark + LogoIcon, RhythmRule |
| `components/forms/` | Field, Input, Select, Checkbox, Radio, Switch |
| `components/navigation/` | Tabs |
| `components/feedback/` | Dialog, Toast, Tooltip, CountIn |
| `ui_kits/website/` | Click-through Dutch marketing site — 5 screens. See its own README.md. |
| `SKILL.md` | Agent Skills wrapper, for downloading this system into Claude Code. |
| `uploads/` | The original brand guidelines and website copy, unmodified. |

Every component directory carries a `<Name>.d.ts` props contract and a `<Name>.prompt.md` usage note next to the `.jsx`.

### Intentional additions
The brand book defines no component inventory, so the standard primitive set was authored. Four components exist because the guidelines describe the behaviour and something has to carry it:

- **`Icon`** — one seam for the substituted glyph set, so replacing Lucide later is a one-file change.
- **`Wordmark` / `LogoIcon`** — the supplied logo construction, componentised so it scales and animates correctly.
- **`RhythmRule`** — the guidelines' imagery system is a drawn rule with marks; it is a component, not a background image.
- **`CountIn`** — the guidelines forbid spinners and specify a three-mark count-in, so the loading state ships as a component.

No Tooltip/Toast/Tabs invention beyond the standard set, and deliberately **no slide template**: no deck was supplied, so none was authored. The deck type scale is in the tokens and specimen cards, ready for one.
