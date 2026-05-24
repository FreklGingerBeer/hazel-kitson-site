# Rolling the new palette out to the website

The live site at `hazel-kitson-site/` only references colors through CSS custom
properties. Updating the three accent tokens in `:root` cascades to every rule.

## The change

Open `hazel-kitson-site/styles.css` and replace lines 9–11 with:

```css
  --tangerine: #EE9F66;       /* was #EE7B3F — now apricot */
  --tangerine-dark: #CB7F48;  /* was #D2622B */
  --pomelo:    #6B7A3A;       /* was #A8C57C — now olive */
```

That's it. ~30 downstream rules (nav hover, primary button, eyebrow rule,
client-strip names, ways hover bar, contact link, footer hover, etc.) pick up
the new values automatically. Nothing else in `styles.css` references the old
hex codes directly.

## Easiest way to apply

`rollout/styles.css` in this project **is** the patched file. Drag it into
`hazel-kitson-site/` and overwrite. Same 860 lines, only those three values
changed (plus inline `/* was … */` comments for review — strip them if you
prefer a clean diff).

## What to check after deploy

- [ ] Hero — apricot pill button on the bone background
- [ ] Nav scroll state — link hover colour
- [ ] Client strip — names now read warmer/lighter on ink
- [ ] Footer — link hover, "©" caret colour
- [ ] Ways cards — hover border + the wipe-in top bar

## Optional: rename variables

If you want the variable names to match the new palette (`--apricot`,
`--apricot-dark`, `--olive`) so the codebase reads honestly, do a project-wide
find-and-replace in your editor — but `--tangerine` is referenced in ~30
selectors, so the diff is bigger. The hex-only change above gets you the same
visual result with a 3-line diff.

## Files NOT in the live codebase (no rollout needed)

The other materials in this design system project — slides, proposal/invoice
templates, email signature — live here, not on the website. Already updated.
