# Maistros — Brand guidelines

\---

## 1\. Concept

**Maistros makes maestros. Maestro is what you call someone who has mastered their craft, and more often what you call a friend who has just pulled something off: half compliment, half joke, entirely sincere. AI takes over the parts that were never really the craft, the typing and the boilerplate and the fourteenth version of the same document, and what is left is judgment, taste and knowing what is worth making. That is the part our clients have spent twenty years building, and our work gives them more room to do it. The name is plural on purpose. A room full of masters, spoken to as peers.**



\---

## 2\. Logo

### Wordmark

* `maistros`, all lowercase
* Gabarito 700
* Tracking pulled in approximately 2% (`-0.02em`)
* The dot on the `i` is removed and replaced by the sparkle

The `i` in maistros is the `i` of m‑**ai**‑stro. The sparkle lands directly on the wordplay rather than sitting near it, which is why the mark still works when shrunk to a favicon.



### The sparkle

A four-point star drawn with **cubic curves**, not straight concave arms. It must read round and warm to match Gabarito's soft geometry. A sharp, pointed sparkle turns the mark into the generic AI badge that every competitor is using.

Colour is orange `#F2621F`. The sparkle is orange's permanent home.

**Signature move:** the sparkle scales 1.0 → 1.08 → 1.0 over 600ms on first load. Once, never looping.



### Icon

The `i` stem plus the spark above it reads as a baton with something coming off the tip — the conductor's tool and the thing it produces. Set in a rounded square.

Three approved fields:

|Field|Stem|Sparkle|
|-|-|-|
|Paper `#FAF6F1`|Deep teal `#0A403B`|Orange `#F2621F`|
|Deep teal `#0A403B`|Paper `#FAF6F1`|Orange `#F2621F`|
|Turquoise `#16A79B`|Deep teal `#0A403B`|Paper `#FAF6F1`|

**On turquoise the sparkle is never orange.** Orange on turquoise measures roughly 1.1:1 contrast — functionally invisible and it vibrates badly at small sizes.



### Lockups

* Horizontal wordmark — primary
* Icon alone — favicon, app icon, social avatar, deck corner
* Stacked wordmark over a one-line descriptor — deck cover, website footer
* Reversed versions of all three (swap deep teal and paper; sparkle stays orange)



### Clear space and minimum sizes

* **Clear space:** the height of the `m` on every side
* **Wordmark minimum:** 90px wide — below this the sparkle mushes into the `a`
* **Icon minimum:** 20px — below this, use the sparkle alone

The sparkle alone is acceptable *only* below 20px, where there is no room for anything else.



### Production notes

* Outline the type rather than leaving it live
* Adjust the space between `a` and `i` by eye — removing the tittle changes how that gap reads
* Check the sparkle's optical weight at 24px; thin-armed shapes always read lighter than a solid dot and usually need a few percent more mass than the maths suggests



### Don'ts

* No sparkles anywhere except the logo
* No outlined or gradient version
* Never recolour the sparkle to match a client's brand
* Never set the wordmark in any weight other than 700
* Never place the wordmark on a photo without a deep teal or paper field behind it

\---

## 3\. Colour

### Brand palette

|Name|Hex|Role|
|-|-|-|
|Paper|`#FAF6F1`|Dominant surface|
|Deep teal|`#0A403B`|The single dark — fields, logo grounds, headlines|
|Turquoise|`#16A79B`|Structure, rules, active states, chart fills|
|Orange|`#F2621F`|One moment per screen|

Deep teal is the single dark. There is no second near-black in the palette; two darks are the most likely source of drift once other people start building slides.



### Support text colours

Not part of the brand palette. These live in the typography spec and are **never** used as fills, backgrounds or accents.

|Name|Hex|Use|Contrast on paper|
|-|-|-|-|
|Graphite|`#2A2E2C`|Long-form body copy|12.8:1|
|Slate|`#5C625F`|Captions, metadata|5.8:1|
|Hairline|`#E5DFD5`|Rules and dividers|—|
|Chalk|`#DDE8E4`|Body copy on dark grounds|9.3:1 on deep teal|
|Muted chalk|`#8FAAA4`|Captions on dark grounds|—|

### 

### Colour rules

* **Orange appears once per screen.** The logo counts. If the logo sits in the nav, that's the header's orange spent.
* **Never orange on turquoise.**
* **Headlines:** deep teal on paper, pure white on dark
* **Body:** graphite on paper, chalk on dark. Pure white body text on a dark ground causes halation at reading sizes; dropping body to chalk while headlines stay full white also gives hierarchy on dark backgrounds without changing size or weight
* **Captions:** slate on paper, muted chalk on dark
* **Rules and dividers:** hairline, never a brand colour at low opacity — a tinted-down turquoise reads as a mistake rather than a choice
* Bright colours never hold body text

\---

## 4\. Typography

### Faces

|Level|Face|Weight|
|-|-|-|
|h1|Gabarito|700|
|h2|Gabarito|600|
|h3|Onest|600|
|Body, UI, captions|Onest|400|

Two weights per face. If a hierarchy needs a third weight, the problem is spacing, not weight.



### Scale — web

|Level|Size|Line height|
|-|-|-|
|h1|`clamp(2.5rem, 5vw, 4.5rem)`|1.05|
|h2|32px|1.15|
|h3|22px|1.3|
|Body|17px|1.65|
|Small|14px|1.6|

### 

### Scale — deck (13.33 × 7.5 in)

|Level|Size|
|-|-|
|Headline|44pt|
|Subhead|24pt|
|Body|18pt|
|Caption|12pt|

No more than three sizes on any single slide.



### Dutch typesetting

Dutch runs roughly 15–20% longer than English and builds compounds that do not break. On a bilingual site, the Dutch headline overflows a slot the English one fits perfectly.

* Design every headline slot against the Dutch, then let the English sit short — never the other way around
* Set `hyphens: auto` with `lang="nl"` properly declared, or compounds produce a torn rag
* **No all-caps.** A 22-character Dutch compound in caps is unreadable, and it breaks `IJ` words like IJsselmeer where both letters capitalise together
* **Sentence case everywhere.** It is what Dutch does natively, so both languages stay consistent for free

\---



## 5\. Imagery

Non-photographic imagery is an abstract rhythm system rather than illustration: measured horizontal rules with marks at intervals, derived from notation without ever being notation.

* Section dividers and deck chapter slides only
* Never behind text
* Drawn in hairline or turquoise, never orange

\---

## 6\. Iconography

* Uniform **2px stroke** on a **24px grid**
* Round caps and round joins
* Open forms, generous corner radii
* Circles, straight lines and 45° angles only — this is what keeps a set consistent when three different people draw icons over two years
* Deep teal or graphite. **Never orange.**
* No icon ever contains a sparkle

Draw at 24 and check at 16. Open rounded forms close up and turn to mush when they shrink.

\---

## 7\. Motion

Everything moves on a beat.

|Property|Value|
|-|-|
|Base duration|240ms|
|Hover states|120ms|
|Page transitions|320ms|
|Easing|`cubic-bezier(0.2, 0.8, 0.2, 1)`|
|List stagger|60ms|

* No springs, no bounce — both fight the calm the brand is selling
* Content rises 8px and fades. Nothing slides in from the edge
* Lists and cards enter with a 60ms stagger — the ensemble coming in rather than everything landing at once
* **Signature move:** the sparkle scales 1.0 → 1.08 → 1.0 over 600ms on first load. Once, never looping.
* **Loading states:** three marks appearing in sequence — a count-in — instead of a spinner
* Under `prefers-reduced-motion`, everything collapses to a plain opacity fade

\---

## 8\. Tone of voice

Assured and plainspoken. Short sentences, verbs over nouns, second person. The first sentence of anything is under ten words.



### Dutch

Use **`je`**, not `u`.



### Write Dutch first

Write Dutch first and translate to English second. Dutch → English preserves the plainness. English → Dutch imports the hype, because English marketing copy is full of it and translators reach for the nearest Dutch equivalent.



### Banned words

**Dutch:** ontzorgen, naadloos, toekomstbestendig, revolutionair, AI-gedreven
**English:** unlock, empower, seamless, cutting-edge, game-changing



### Rules

* Every claim carries a number or a name, or it gets cut
* Never imply AI replaces people
* Headlines are statements, never questions — no "Klaar voor AI?"

\---

