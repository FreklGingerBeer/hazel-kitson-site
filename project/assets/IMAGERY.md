# Imagery — sourcing guide

The brand has **one hero image** (`hero-grapefruit-coral.jpg`). The look:

> A single citrus subject, warm coral/peach background, slightly saturated, no grain, no monochrome.

## Direct stock-image queries

I can't fetch live stock photography from this environment, so here are exact Unsplash / Pexels search strings that match the look. Use as-is.

### Unsplash
- https://unsplash.com/s/photos/grapefruit-pink
- https://unsplash.com/s/photos/citrus-flatlay-coral
- https://unsplash.com/s/photos/single-orange-pastel
- https://unsplash.com/s/photos/cocktail-glass-peach-background
- https://unsplash.com/s/photos/dried-citrus-still-life
- https://unsplash.com/s/photos/iced-tea-pink-backdrop
- https://unsplash.com/s/photos/lime-wedge-studio
- https://unsplash.com/s/photos/seltzer-can-coral

### Pexels
- https://www.pexels.com/search/grapefruit/
- https://www.pexels.com/search/citrus%20still%20life/
- https://www.pexels.com/search/peach%20background%20fruit/

## Recommended photographers / styles (Unsplash)
- **Brooke Lark** — clean studio fruit on warm backgrounds
- **Charles Deluvio** — single-object minimalism
- **Calum Lewis** — drink-product shots, warm cast
- **Krisztina Papp** — citrus + pastels

## Curation rules (don't break these)
1. **One subject** per frame. Never composed bowls of mixed fruit.
2. **Warm backgrounds only.** Coral, peach, clay, dusty pink, terracotta. Never cool blues, greys, white-on-white.
3. **No grain, no film texture.** The brand reads as clean editorial, not analog.
4. **No people.** This is a product/consultancy brand, not a lifestyle one.
5. **Slight saturation lift** (`filter: saturate(1.08) contrast(1.05)`) is applied in CSS — don't pre-saturate.
6. **No text overlays in the photo.** Type sits over via CSS.

## Sample crops worth searching for
- Half grapefruit, cut-side up, coral backdrop
- Single lime/lemon on terracotta
- Frosted glass with citrus garnish, peach background
- Powder/granule still-life on dusty pink (for the "adjacent formats" line if it returns)
- Loose botanicals (hops, hibiscus, tea leaves) on warm paper

## When the user asks for a hero image
Until real photography is in `assets/`, use the existing `hero-grapefruit-coral.jpg` or drop in an `<image-slot>` placeholder shaped to the target slot. Don't generate photos.
