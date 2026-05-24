# Custom Hand Drawn Wordmark

_Started 2026-05-10 23:37 UTC_

---

## User



## Assistant

_[tool: update_todos]_

_[tool: local_ls]_

_[tool: local_ls]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: set_project_title]_

_[tool: copy_files]_

_[tool: update_todos]_

_[tool: local_copy_to_project]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: snip]_

Now let me build the preview cards. I'll create a shared base and then individual cards.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: update_todos]_

_[tool: snip]_

Now the UI kit. I'll build it modular with JSX components, replicating the Hazel Kitson site faithfully.

_[tool: write_file]_

_[tool: write_file]_

## Assistant

Now the UI kit — a high-fidelity recreation of the Hazel Kitson site as JSX components.

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Now the JSX components:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: snip]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

## Caveats

- **No real wordmark.** The tagline is set in Google Fonts' **Permanent Marker** — common AI-slop typeface. A custom hand-drawn wordmark would be a serious upgrade.
- **One hero image.** Same single grapefruit photo runs everywhere; no alternates exist.
- **Pomelo green is defined but never used.** Kept the token for future use; the codebase doesn't apply it anywhere.
- **No icon system.** Documented as intentional, but if you ever need icons, the system has no canonical answer yet.
- **No slide deck or app surfaces** were attached, so only one UI kit (the marketing site) was built.

## **Help me get this right — what's next?**

The brand is tight but narrow. **Tell me where you want to push it:**

1. **Should I commission a custom hand-drawn wordmark** (or attach an existing one) to replace the Permanent Marker placeholder?
2. **Do you have additional photography** — alternate hero shots, founder portrait, product close-ups? Drop them in and I'll set up image rules.
3. **Want a slide-deck system** (16:9 templates for client pitches) built off these tokens?
4. **Should pomelo green get an actual use** — a "functional / adjacent" section, or kill the token?
5. **Any second product surface** to recreate (Notion-style brief template, proposal PDF, email signature)?

## User

Remove "powders, gummies and adjacent formats also welcome" from all materials

yes mission custom hand drawn wordmark

I have no additional photography, find similar stock images that fit the theme

sure, a very short slide deck but website is first and crucial

need email signature, proposal pdf, whatever else youcan think of

## Assistant

_[tool: snip]_

_[tool: update_todos]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: copy_starter_component]_

_[tool: snip]_

_[tool: register_assets]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done — five new deliverables are live:

- **Custom wordmark** — `assets/wordmark.svg` (+ `wordmark-small.svg`): tilted Marker letters with a hand-drawn underline swoop and tangerine accent burst.
- **Slide deck** — `slides/index.html`: 6 slides, deck-stage scaled (1920×1080), title → section → pillars → quote → stats → contact.
- **Email signature** — `materials/email-signature.html`: full + short + plain-text variants, all inline-styled for paste-into-Gmail.
- **Proposal PDF** — `materials/proposal.html`: 3-page A4, cover + four-phase scope + fees & terms. Cmd-P → save as PDF.
- **Invoice + brief** — `materials/invoice.html` and `materials/brief.html`: matching A4 templates.

The "powders, gummies and adjacent formats also welcome" line is gone from every surface; replaced with *"The bits that don't fit the brief, also welcome."*

## Caveats

- **The "hand-drawn" wordmark is still vector-set type with decorative accents** — it's a sharper interim than bare Permanent Marker but a real ink-on-paper wordmark from an illustrator would beat it. Worth commissioning when budget allows.
- **No live stock fetched.** `assets/IMAGERY.md` is a curation guide with exact Unsplash/Pexels search URLs + curation rules. Drop chosen JPGs into `assets/` and they'll slot in.
- **All financial figures, ABN, BSB/account, project numbers in `proposal.html` and `invoice.html` are placeholders** — swap before sending.

## **What's next — pick any:**

1. **Pull 3–4 hero shots from the Unsplash queries** and drop them in `assets/` — I'll wire a rotating hero + a "founder portrait" slot.
2. **Want a real wordmark commission brief** I can write up for an illustrator?
3. **Social templates** — Instagram square + LinkedIn header sized to the brand?
4. **Case study layout** — once Frekl / Posca / Fourth Wave have publishable detail, a long-form page template.
5. **Anything in the deck or proposal copy you want rewritten** — tone, length, slide count?

## User

Verifier agent check completed

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Fixed — slide text now inherits `var(--ink)` so headlines on title, pillars, and stats render in dark ink against the bone background instead of white-on-bone.

## User

Can you now apply your eye to this as an expert brand designer and offer advice?

## Assistant

Sitting back and looking at the whole system as a brand designer rather than a builder — here are the honest observations, ranked by what would actually move the needle.

---

### 1. The wordmark is the single biggest liability.

"No problem, darling" is the entire brand promise in three words. Setting it in **Permanent Marker** is the most generic possible execution of a hand-lettered idea — and Permanent Marker is one of the top tells that something was made fast, not commissioned. The strategic asset of this brand is a *voice*, and the voice is currently dressed in the default Sharpie costume.

**Move:** Commission a real wordmark — ideally signed by Hazel in her own hand, scanned, vectorised, with two or three lockups (stacked, inline, stamp). This is the one thing worth spending money on before anything else.

### 2. The italic-tangerine highlight is doing too much work.

Every headline across slides, proposal, marketing site, and invoice has one italic word in tangerine. By the fifth instance it stops being emphasis and starts being a layout pattern — emphasis-by-default is no emphasis at all.

**Move:** Reserve the tangerine italic for **one** moment per surface (the headline, not every heading). For other emphasis, use weight, line break, or a hand-drawn underline mark (which would reinforce the wordmark).

### 3. There's no recurring decorative device beyond the marker stamp.

Great consultancy brands have a *signature gesture* — Lapka's ticker tape, Aesop's apothecary label, Pip & Nut's handwritten asides. "No problem, darling" begs for: handwritten margin notes, "— H." sign-offs, asterisks with footnotes, deli-ticket numbering, masking-tape rectangles. Right now the system has tangerine italic + Anton eyebrows + a marker stamp and that's it.

**Move:** Pick **one** ownable mark — I'd argue handwritten asides in Hazel's hand (same source as the wordmark commission). Use it sparingly: a margin note on a proposal page, a sign-off on the invoice, a single annotation on the about page.

### 4. Four type families is one too many.

DM Serif Display + Inter + Anton + Permanent Marker. DM Serif Display is the Playfair/Fraunces tier of "small-brand serif" — it's everywhere. Anton is a heavy condensed sans being used at 10pt for eyebrows, which is loud and dated. Inter is the safest default on the internet.

**Move:** Drop Anton — replace its job (all-caps structural labels) with serif small-caps from the display face, or move some of those labels into handwriting. Consider swapping DM Serif Display for something with more character — **GT Sectra**, **Tiempos**, **Söhne Breit**, or **Editorial New**. A serif with a real personality is the second-highest-leverage upgrade after the wordmark.

### 5. The colour system relies too hard on tangerine.

Peach + tangerine + bone + ink is a tight, defensible palette. But tangerine is currently: CTA, eyebrow, accent rule, italic emphasis, section number, link colour, footer brand colour, swoop underline, *and* the wordmark accent. When one colour is everywhere it stops being a colour and becomes texture.

**Move:** Tangerine = action + emphasis only. Pomelo green (already defined, nowhere used) should pick up some of the load — quotes, supporting data, "good news" moments. The eyebrows can become ink-soft, not tangerine.

### 6. The imagery story is thin.

One grapefruit photo running everywhere is a tell. An NPD consultancy especially should have a richer image vocabulary — kitchen-process shots, samples on stainless steel, ingredient close-ups, packaging mockups in studio light. The marketing site looks beautiful with one image; at five surfaces it looks like the brand has nothing else.

**Move:** Build a 12-image bank with three categories — *Produce* (current direction), *Process* (hands, kitchens, samples), *Product* (in-context shots on shelves, on counters). Pick a treatment — warm grain, slightly pulled saturation, daylight only — and lock it.

### 7. The proposal and invoice are competent but personality-free.

The marketing site is generous, warm, breathy. The materials are dense, monochromatic, and could be from any consultant. The marker tagline in the corner is doing all the work, alone.

**Move:** A handwritten margin annotation on the proposal cover. The phase numbers could be hand-numbered, not serif italic. The invoice's "Pay to" block could be a stamp. One signature gesture per document, applied with restraint.

---

### If I had two days on this, in order of leverage

1. **Brief and commission a real wordmark** — hand-lettered or hand-signed by Hazel.
2. **Build the handwritten-mark system** from that same source (asterisks, sign-offs, underlines, three or four annotations).
3. **Swap DM Serif Display** for a serif with character; drop Anton.
4. **Re-allocate tangerine** — reserve for action + one emphasis per surface; bring pomelo green into the system.
5. **Commission 8–12 photographs** with a locked treatment, mixing produce + process + product.

Everything else (proposal layout, slide rhythm, button states) is solid — it just sits underneath a wordmark and a typographic system that aren't yet pulling their weight. The bones are good. The skin needs another pass.

## User

Don't have budget for wordmark. suggest free way to do this or move on and leave as is. using a handwritten system throughout is cool. Sure swap font. yes reallocate and use pomelo more. Don't have budget for photos and don't want this to be literal. want this to be very editorial and pretty, not functional

## Assistant

_[tool: snip]_

_[tool: update_todos]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: list_files]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: list_files]_

_[tool: update_todos]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

The brand has been re-set against your critique notes. Three concrete moves:

**Type system**
- **Permanent Marker → Caveat 700** for the wordmark and a full handwriting layer (sign-offs, asides, margin notes) — a deliberately strong free choice, with a clear upgrade path documented for when a custom hand-signed wordmark is in budget.
- **DM Serif Display → Instrument Serif** — genuinely editorial face, hairline-to-thick contrast.
- **Anton retired.** `--structure` now resolves to Inter 500 at tight tracking. Less shouty, lets the serif and handwriting carry voice.

**Colour rebalanced**
- Tangerine is now **action + one-word emphasis only**.
- Pomelo green has moved into real use: handwritten asides default to pomelo, hero aside introduces with a tangerine ✳ and runs in pomelo handwriting, pillar numerals and tags pulled back to ink/ink-soft.
- Eyebrows are ink-soft by default; tangerine is opt-in.

**Editorial pushes**
- New wordmark SVG with tangerine swoop underline + pomelo signature dot.
- Footer carries a handwritten "— H." sign-off.
- Site asides (hero, about-side, ways-footnote) now use handwriting in pomelo, tilted −1.5°.
- Email signature reworked to Instrument Serif + Caveat sign-off.
- New `.t-aside`, `.t-signoff`, `.t-aside-mark` semantic classes in tokens for reusing the handwriting layer anywhere.

The bones are unchanged — same surfaces, same content — but the system now has three jobs for three families instead of four-doing-overlapping-work, and the handwriting is the brand's voice made visible rather than a wordmark gimmick.

## User

I hate that. all the edge and personality has gone

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

Pushing toward street / grungy now — adding a real texture and sticker layer rather than just type tweaks.

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

The site now carries street/grungy energy without overwhelming it:

- **Wordmark** picks up a hard tangerine offset shadow — graffiti-stencil energy.
- **Hero** has an SVG noise/grain overlay multiplying into the peach.
- **Client strip** gets a halftone dot pattern.
- **"Most signed" flag** is now a slapped-on sticker — tangerine, rotated −4°, hard ink shadow, ink border.
- **About aside** is now masking-tape — tangerine semi-transparent, rotated −2°.
- **Ways footnote** is hand-drawn between two tangerine slash marks, no longer pomelo whisper.

Also added a reusable street-layer in `colors_and_type.css`: `.s-sticker`, `.s-tape`, `.s-stamp`, `.s-marker` (highlighter), `.s-circled` (hand-drawn ring), `.s-halftone`, `.s-grain`, `.s-riso` (riso misregister), `.s-slash`. Use anywhere.

## User

Regenerate "Brand lockup": Change the font used for "a food and beverage NPD consultancy"

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_to_user]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: show_to_user]_

_[tool: snip]_

Primary buttons are now ink-on-bone with the tangerine reserved for the arrow on hover — same energy, far less orange. Secondary button is bone-warm with an ink border; email link underline is ink.

## User

Regenerate "Brand lockup": not bad, are there other options for that font?

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: show_to_user]_

Six handwriting options laid out in the card — Caveat (current, marked), Kalam, Shadows Into Light Two, Architects Daughter, Reenie Beanie, Homemade Apple. Each shows the same subtitle string at the same tilt for direct comparison. Tell me which to lock in.

## User

actually no, make it the same font as the "newcastle au"

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: show_to_user]_

_[tool: snip]_

Subtitle now uses the same Anton (structure) font as the "NPD Consultancy · Newcastle, AU" tag — all-caps, wide tracking, ink-soft.

