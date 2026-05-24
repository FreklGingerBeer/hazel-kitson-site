# Hazel Kitson — Site UI Kit

A modular recreation of the **No Problem, Darling** marketing site as React components, faithfully matching the production CSS in `hazel-kitson-site/`.

## Open
- [`index.html`](./index.html) — the full one-page site (interactive, navigates via in-page anchors, hover states live)

## Components
| File | What it is |
|---|---|
| `Navbar.jsx` | Fixed top nav with scroll-state (frosted bone background appears past 20px). |
| `Hero.jsx` | Full-bleed grapefruit photo, tilted Caveat 700 wordmark, eyebrow, lede, primary CTA. |
| `ClientStrip.jsx` | Ink band with apricot all-caps client names separated by middle-dot bullets. |
| `Approach.jsx` | Four-pillar grid — serif italic numeral + Inter label + serif H3. |
| `Ways.jsx` | Three service tiles. The middle "Retainer" tile is featured (ink background, lifted). |
| `About.jsx` | Peach band — type-led intro + four stat blocks. |
| `Contact.jsx` | Drop-a-line section with huge serif email + meta grid. |
| `Footer.jsx` | Ink footer, brand mark + tilted tagline, two link columns, copyright bottom rule. |
| `primitives.jsx` | Shared bits — `Eyebrow`, `SectionHead`. |

## Source of truth
- `hazel-kitson-site/index.html` and `hazel-kitson-site/styles.css`
- Tokens copied into `../../colors_and_type.css`

## What's intentionally simplified
- Scroll-reveal IntersectionObserver is preserved (same code path).
- Mobile breakpoints below 980px use the original CSS — works as you'd expect.
- The hamburger menu shows but doesn't open a drawer (the production site doesn't have one wired either).
