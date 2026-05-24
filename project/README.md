# No Problem, Darling — Design System

> *"No problem, darling."* — Hazel Kitson Consulting. A food & beverage NPD (new product development) consultancy based in Newcastle, Australia, working across AU, NZ and the UK.

This design system captures the brand voice, visual foundations and component vocabulary of the **Hazel Kitson** consultancy — a small practice helping food & beverage founders take an idea from a notebook to a real product on a real shelf. The aesthetic is **editorial, type-led, warm and intentionally hand-touched** — peach and apricot on bone, with a tilted hand-drawn wordmark sitting against a serif-led editorial layout.

---

## Sources

- **Codebase** — `hazel-kitson-site/` (mounted local folder). The full marketing site: `index.html`, `styles.css`, and one hero image (`assets/hero-grapefruit-coral.jpg`).
- **Brief** — "No Problem, Darling. An NPD consultancy" + the codebase above.
- No Figma, no slide deck, no app — single marketing site is the entire surface.

---

## Index

| File / folder | What's inside |
|---|---|
| `README.md` | This file — brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Cross-compatible skill manifest (works as an Agent Skill if downloaded). |
| `colors_and_type.css` | All design tokens. Color, type families, semantic vars, spacing, radii, shadow. |
| `assets/` | Logos, wordmarks, hero imagery. |
| `preview/` | Small HTML cards rendered in the Design System tab — tokens, type specimens, components. |
| `ui_kits/site/` | High-fidelity recreation of the Hazel Kitson marketing site. JSX components + `index.html`. |
| `slides/` | 6-slide deck (title · section · pillars · quote · stats · contact) on `<deck-stage>`. |
| `materials/` | Print-ready templates: `proposal.html`, `invoice.html`, `brief.html`, `email-signature.html`. |
| `deck-stage.js` | Slide-deck shell web component (used by `slides/`). |

---

## Brand at a glance

- **Name:** Hazel Kitson Consulting
- **Tagline:** *No problem, darling.* (hand-drawn, tilted, set in Permanent Marker)
- **Sector:** Food & beverage NPD consultancy. Drinks-first.
- **Tone:** Editorial, dry, slightly British, lower-cased confidence. No exclamation marks. No emoji. No jargon-without-translation.
- **Visual:** Bone background, apricot accent, ink text. Serif headings (DM Serif Display italics), Anton labels in all-caps with wide tracking, Inter body. One hand-drawn punctum: the tilted Permanent Marker wordmark.
- **Markets:** AU · NZ · UK.

---

## Content fundamentals

The voice is one of the strongest parts of the brand. It does almost as much work as the visuals.

### Tone
**Editorial, dry, calm-confident, lightly British.** It sounds like a senior operator who has done this before and isn't trying to sell you — they're observing. Short sentences. No hype. Implicit authority. Occasional dry asides set off with em dashes or in italics.

### Person & address
- **Third person about the practice**, second person to the reader. The consultancy is referred to as *"the consultancy"* or *"the studio"*, not "I" or "we" — keeps it grown-up.
- Direct address to founders is conversational: *"so founders can stay where they're useful — on the brand, the buyers, the room."*

### Casing
- **Sentence case** for everything except eyebrows, labels and button text, which are **ALL CAPS** with tight letter-spacing (~0.22–0.30em).
- Headings are sentence case, **terminated with a full stop**: *"Four things to get right."* — *"One day a week, ongoing."* — *"Honest unit economics."* The full stop matters. It's editorial finality.

### Punctuation
- Em dashes used liberally to set off asides.
- Italics (Instrument Serif italic) carry emphasis inside serif headings. **Italic + apricot is reserved for at most one word per surface.** Most italic emphasis is just italic — let the letterforms do the work.
- Handwritten asides in Caveat (set in olive green) carry short notes that would otherwise be footnotes — *"replies within 48 hours"*, *"— H."*, *"first call's on me"*. Always rotated −1 to −2°. Always introduced by a apricot ✳..
- **No exclamation marks. No emoji. No ALL-CAPS shouting** (only the typographic Anton labels are uppercase — that's a system, not shouting).

### Examples to copy
- **Hero lede:** *"Concept, recipe, packaging, production — the bits between an idea and a real shelf."*
- **Aside under hero:** *"Drinks, mostly. The bits that don't fit the brief, also welcome."*
- **Section heading:** *"Four things to **get right.**"* (italic + apricot on the last two words)
- **Footnote:** *"— First conversation's free. Replies within 48 hours."*
- **CTA:** "Get in touch" — *never* "Get Started", "Sign Up Now", "Book a free consultation today!"

### Don't write
- Don't write "we" / "us" / "our team" — write "the consultancy".
- Don't say "passionate", "innovative", "best-in-class", "synergy", "solutions provider".
- Don't end CTAs with exclamation marks.
- Don't use emoji.
- Don't capitalise every word in a heading (no Title Case).

---

## Visual foundations

### Colors

A small, warm, food-photography-friendly palette. Six brand colors plus ink.

- `--peach #F2B8A0` — soft warm pink-orange. The **About** section background. Skin-tone-adjacent, friendly.
- `--peach-soft #F8D2BF` — lightest tint, used for flag/chip backgrounds.
- `--apricot #EE9F66` — **the** accent. Italic words in headings, eyebrows, CTAs, links, hover states, all-caps client names on dark backgrounds.
- `--apricot-dark #CB7F48` — hover/press for apricot.
- `--olive #6B7A3A` — supporting green. Reserved for "adjacent" / functional / category moments. Use sparingly.
- `--bone #FAF1E6` — page background. A warm off-white that reads as paper, not screen.
- `--bone-warm #F4E8D6` — surface/card. One notch deeper than page.
- `--ink #2A2A28` — text and dark sections (client strip, footer, featured "Most signed" card).

### Type system

Four families working together — each does one job.

| Role | Family | When |
|---|---|---|
| Display wordmark | **Permanent Marker** | The tagline *"No problem, darling."* only. Always tilted −3°. Nowhere else. |
| Structure / label | **Anton** | Eyebrows, button text, nav links, all-caps client names, table dt labels, footer column headers. Always uppercase, tracked 0.22–0.32em. |
| Headings & ledes | **DM Serif Display** | All `h1–h3`, ledes, blockquotes. The italic variant carries emphasis (with `color: var(--apricot)`). Email addresses styled as headlines also use this. |
| Body | **Inter** (400/500/600) | Paragraphs, dd descriptions, footer bio, button arrows, stat numbers, anything not on the list above. |

**No mono.** No code blocks anywhere in the system — there's no need for one.

### Spacing & rhythm

The site uses **fluid spacing via `clamp()`** rather than a strict 4/8 grid. Sections breathe — `clamp(96px, 14vh, 160px)` of vertical padding per section is the rhythm. Gaps between cards are smaller (24px). Headings have generous max-widths in `ch` units (22ch is a recurring measure).

A useful 4-step inner-spacing scale: **24 / 32 / 48 / 72px**.

### Backgrounds

- **Full-bleed photography** is the hero treatment — a single warm grapefruit-on-coral close-up fills 100vh. The photo dominates; type sits *on* it with no scrim or capsule, just a faint warm radial haze near the wordmark and a soft 18% dark band at the bottom for legibility.
- Most sections are solid bone or peach — **no patterns, no gradients, no textures**.
- The featured "Most signed" service card and the footer use solid `--ink` as a deep dark moment.
- **No gradient backgrounds.** No mesh gradients. No noise textures. Anywhere.

### Borders & rules

Hairline rules are the structural device, not boxes-with-borders. `1px solid var(--ink-faint)` (`rgba(42,42,40,0.18)`) is the default — used to top-rule pillars, separate stat blocks, divide footer sections. Eyebrows have a 36px apricot rule before the text (`.eyebrow.with-rule::before`).

Cards (`.way`) get a 1px hairline border that **animates to apricot** on hover, plus a 3px apricot top-border that **wipes in left-to-right** on hover.

### Corners & cards

**No rounded corners on cards.** Service tiles (`.way`) are square-cornered. Only `border-radius: 999px` (pills) appears, on buttons and the featured "Most signed" flag.

### Shadows

Shadows are **flat offset-only**, never blurred — they read as printing-press depth, not as drop-shadow.
- Buttons: `0 4px 0 rgba(42,42,40,0.15)` → `0 8px 0 rgba(42,42,40,0.18)` on hover.
- Navbar (when scrolled): `0 1px 0 var(--ink-faint)` (a hairline, not a shadow).
- **No `blur()` in box-shadow anywhere.**

### Hover & press

A consistent vocabulary:
- **Primary button:** lifts 2px (`translateY(-2px)`), shadow grows, background darkens to `--apricot-dark`, arrow slides 4px right.
- **Nav link:** color shifts to apricot; underline wipes in from left.
- **Service card:** lifts 4px; border becomes apricot; apricot top-bar wipes in left-to-right.
- **Email link:** underline appears; color darkens.
- **No press/active state changes** — the link itself is the affordance.
- **No "scale down" press states.**

### Transparency & blur

Used only twice, both purposeful:
1. **Navbar on scroll** — `rgba(250, 241, 230, 0.92)` over `backdrop-filter: blur(14px) saturate(1.2)` for the warm frosted-glass effect.
2. **Hero photo legibility** — soft radial + linear gradients (not solid scrims) maintain the photo's dominance.

Transparency on text is via the `--ink-soft` (62%) and `--ink-faint` (18%) tokens — never via `opacity:` on whole elements.

### Animation

Quiet, brief, never bouncy.
- Default timing function: **`ease`** (yes, the browser default — the whole system uses it).
- Durations: **200–350ms** for component hovers, **800ms** for the reveal-on-scroll fade-up.
- The reveal: `opacity: 0 → 1` + `transform: translateY(20px) → 0`, 800ms ease, triggered via `IntersectionObserver` at 10% visibility.
- **No bounce, no overshoot, no spring physics, no rotation animations.**

### Layout rules

- **Fixed navbar** with on-scroll state change (padding shrinks, frosted bone background appears).
- **Container width:** `min(1200px, 90vw)`. Narrow: `min(760px, 90vw)`.
- **One column on mobile** (≤980px) for pillars, ways, about; navbar collapses to hamburger ≤640px.
- Generous left-aligned text. Center alignment is rare — only the `.section-head.center` modifier and the contact "Drop a line" headline.

### Imagery vibe

**Warm. Coral. Single subject.** The hero image is a single grapefruit half on a coral-pink background, slightly saturated and contrasted (`filter: saturate(1.08) contrast(1.05)`). No grain, no monochrome, no cool tones. Future imagery should match: simple subject, warm cast, coral/peach/clay backgrounds.

---

## Iconography

**There is no icon system.** The site is type-led; the only SVG in the entire codebase is the navbar hamburger (3 lines, currentColor, stroke 1.6, rounded caps). No icon font is loaded; no Heroicons / Lucide / Phosphor are used.

### Approach
- **Words over icons.** Eyebrows + Anton labels do the labelling work icons usually do.
- **One exception** — the hamburger menu (mobile nav).
- **Buttons use a literal arrow character** (`→`, the Unicode right arrow U+2192) inside the button text, animated to slide on hover. Not an SVG.
- **The bullet between client names** is a Unicode middle dot (`·`, U+00B7).
- **Em dashes** (`—`, U+2014) prefix several lines as a typographic device.

### If you must add icons
When extending the system and an icon is unavoidable, match this vocabulary:
- **Stroke style**, not fill.
- **Stroke width: 1.6px.**
- **Rounded line caps.**
- **`stroke="currentColor"`** so they inherit ink/bone/apricot context.
- **20–24px viewBox.**
- If pulling from a CDN library to extend the system: **Lucide** is the closest match in stroke weight and rounded-cap style. CDN: `https://unpkg.com/lucide@latest`.

### Emoji
**Never.** Emoji are categorically off-brand. Anton labels with em dashes do the same job.

---

## Font substitution flags

The site loads four Google Fonts (`DM Serif Display`, `Inter`, `Anton`, `Permanent Marker`) at runtime — no font files were ever bundled in the codebase. The `colors_and_type.css` token file in this design system uses the same `@import` from Google Fonts. If the brand later commissions a custom hand-drawn wordmark to replace the Permanent Marker tagline, drop the SVG into `assets/wordmark.svg` and swap the `.t-display` rule.

No substitutions made — all four families are pulled live from their canonical sources.

---

## Next steps for iteration

See bottom of any conversation — the design system is intentionally lightweight (one product, one surface) and ready for iteration on:
- A real custom wordmark to replace Permanent Marker.
- A second hero image option (current single grapefruit is striking but constrains seasonal updates).
- A olive-green usage example (currently defined as a token but unused).
