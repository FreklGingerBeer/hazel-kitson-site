# HANDOVER — No Problem, Darling (Hazel Kitson site)

Context file for continuing work in a new Claude Code session. Read this first.

## Who & what

- **Client:** Hazel Kitson (hazel@goodshoutprojects.com.au) — food & beverage NPD consultant, Newcastle AU. Brand: **"No problem, darling."**
- **Project:** Single-page marketing site, plain HTML/CSS/JS, no build step.
- **Live site:** GitHub Pages from the `gh-pages` branch of this repo (github.com/FreklGingerBeer/hazel-kitson-site).

## Repo layout

- `hazel-kitson-site/` — **the actual site.** `index.html` (all sections + in-browser edit mode JS), `styles.css`, `assets/`.
- `project/` — the Claude Design export this was built from (design tokens, README with brand rules). Reference only.
- `chats/` — original design transcripts. Reference only.

## Deployment

GitHub Pages serves the `gh-pages` branch, which is a subtree split of `hazel-kitson-site/`. After any site change:

```bash
git push -u origin main
git subtree push --prefix hazel-kitson-site origin gh-pages
```

**Gotcha:** remote env requires commit signing that fails — commit with:
`git -c gpg.format=openpgp -c commit.gpgsign=false commit -m "..."`

## Design rules (short version — full rules in project/README.md)

- Tokens: `--bone #FAF1E6` bg, `--apricot #EE9F66` accent, `--peach`, `--olive #6B7A3A`, `--ink #2A2A28`.
- Fonts: DM Serif Display (headings), Anton (labels, caps + tracking), Inter (body), Permanent Marker (wordmark only, tilted −3°).
- Tone: editorial, dry, sentence case, headings end with a full stop. No emoji, no exclamation marks, no Title Case.
- No rounded corners on cards, no blurred shadows, no gradient backgrounds.

## Built features

- Full site: navbar, hero (full-bleed grapefruit photo), approach/pillars, three service cards ("ways in", card 02 is dark/featured), about, contact, footer.
- **Edit mode:** "Edit text" button bottom-right → contenteditable everywhere + bold/italic toolbar → Save downloads the updated index.html.
- Hero image: `assets/hero-grapefruit-whole.jpg` (whole grapefruit on coral — Hazel's real photo, uploaded via GitHub). The old half-grapefruit (`hero-grapefruit-coral.jpg`) is kept in assets but unused.

## Testing locally

```bash
python3 -m http.server 8080 --directory hazel-kitson-site
```
Playwright for screenshots: `require('/opt/node22/lib/node_modules/playwright')` (full path needed).

## Pending / next steps

1. **Higgsfield CLI login.** Hazel wants to use Higgsfield (AI image/video gen) for brand imagery. The `hf` binary is NOT pre-installed — install with:
   ```bash
   curl -sL https://github.com/higgsfield-ai/cli/releases/download/v0.1.40/hf_0.1.40_linux_amd64.tar.gz | tar -xz -C /usr/local/bin
   ```
   (npm install hangs in this environment — use the direct binary download above.)
   Then `hf auth login` (device flow — give Hazel the URL + code to open on her machine).
   Requires `*.higgsfield.ai` on the environment's network allowlist — Hazel was setting this up.
2. Hazel said she was "pretty happy with the rest" after the last copy round — no other outstanding edits.

## Open conversation threads

- Hazel asked about making the repo private — note GitHub Pages on private repos needs a paid plan.
- An old broken environment was auto-loading for her new sessions (working dir `/workspace/repo` missing); she was archiving it via claude.ai/code and creating a fresh environment.
