# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The personal website of Ahmed Zahran, an AI/ML engineer — served at https://ai-zahran.github.io.
It is an **Astro** site built by GitHub Actions and published to GitHub Pages. The Pages source
must stay set to "GitHub Actions" in repository settings; switching it back to "Deploy from a
branch" would publish the source tree instead of the built site.

## Commands

A `Makefile` wraps the npm scripts; `make` on its own lists the targets. Each target installs
dependencies first if the manifests changed, so they can be run from a clean checkout.

```bash
make install    # install dependencies
make dev        # local preview at http://localhost:4321, hot-reloads
make build      # production build into dist/ (what CI runs)
make preview    # serve dist/ — use this to check the real output
make check      # astro check; must stay at 0 errors
make clean      # remove dist/ and .astro/
make reinstall  # clean, drop node_modules, reinstall from the lockfile
```

`astro.config.mjs` is not hot-reloaded — restart `dev` after editing it.

## Architecture

Content lives in typed data modules and a content collection; pages read from them and own only
their layout. When a fact about Ahmed changes, edit the data file, not the page.

- `src/data/experience.ts` — the CV: `roles` (reverse-chronological), `eras` (the three-part
  through-line rendered on the home page), and `skills`. A role's `points` are bullets, each
  optionally carrying one supporting `link`. Its `produced` array holds publication ids, which
  `RoleItem` draws as the amber "Led to" provenance edge — **only for papers that role actually
  yielded.** A paper written later on a related topic is not provenance; asserting one is how this
  page starts telling a story the CV does not support.
- `src/data/publications.ts` — `publications` and `education`. Publication `href`s point at real
  ACL Anthology / DOI records; verify any new one resolves before adding it.
- `src/data/site.ts` — name, tagline, contact links, and nav. **Public site: email and profile
  links only.** The CV PDF is deliberately not hosted here — it carries a phone number and a home
  address, and neither may reach the site. Do not add a résumé download; point people at email.
- The current employer is shown as "Stealth Startup" and must not be named anywhere, including
  meta descriptions and OG tags.
- `src/data/legacy-urls.json` — old Jekyll URL → new URL. Generated during the migration off
  Jekyll and consumed by `src/pages/[...legacy].html.ts`, which rebuilds each old
  `/:categories/:y/:m/:d/:name.html` path as a meta-refresh stub with a canonical link. GitHub
  Pages serves static files only, so this is the available redirect mechanism. Do not delete
  entries — those URLs are still linked from elsewhere.
- `src/content/posts/*.md` — blog posts. Front matter: `title`, `date`, `description`, `tags`,
  `draft`. Drafts render in `dev` and are excluded from `build`, the RSS feed, and the sitemap.

## Markdown pipeline

Astro 7 uses **Sätteri**, a Rust Markdown processor whose plugins are a *visitor* API — not
unified. `remark-*` and `rehype-*` packages are accepted by the config and then silently do
nothing, so plugins here are written with `defineMdastPlugin` / `defineHastPlugin`:

- `src/lib/katex-plugin.ts` — renders `math` / `inlineMath` nodes with KaTeX at build time. It runs
  in the mdast phase deliberately: by the hast phase the syntax highlighter has already claimed
  display-math blocks and styled them as code.
- `src/lib/table-plugin.ts` — wraps tables in `.table-scroll` so wide tables scroll inside
  themselves rather than scrolling the page.

Math is written as `$$...$$`. **Single-dollar math is disabled** (`singleDollarTextMath: false`)
because posts contain prices and shell variables — `$9,000`, `$PATH` — that would otherwise parse
as math. Display math needs `$$` alone on its own lines; a one-line `$$x$$` is inline.

## Styling

`src/styles/global.css` holds the whole design system; components carry only their own scoped
styles. Tailwind v4 is loaded via the Vite plugin, with fonts and widths exposed through `@theme`.

- Colours are CSS custom properties defined three times: `:root` (light), `:root[data-theme='dark']`,
  and a `prefers-color-scheme: dark` block guarded by `:root:not([data-theme='light'])`. Adding a
  colour means adding it to all three.
- The palette follows a spectrogram's ramp: indigo ground, plum `--accent`, amber `--signal`.
  **`--signal` is reserved for the career through-line and its provenance edges** — the amber marks
  where the site is drawing a real connection between a job and the paper it produced. Don't spend
  it on ordinary decoration.
- Typography: Bricolage Grotesque (display), Source Serif 4 (body), IBM Plex Mono (labels, dates,
  metadata). All self-hosted via `@fontsource`.
- The theme choice is applied by an inline pre-paint script in `BaseLayout.astro` so the page never
  flashes; every `localStorage` access is wrapped in try/catch.

## Conventions

- Internal links are written as plain absolute paths (`/work/`, `/blog/<slug>/`). The site is at a
  domain root, so there is no base path to prepend.
- Post images live in `public/assets/images/<original-post-folder>/` and are referenced by absolute
  path — the folder names are inherited from the Jekyll site and match old post URLs, not new slugs.
- Keep `public/.nojekyll`; without it GitHub Pages would try to Jekyll-process the built output.
- Verify visual work at both themes and at mobile width, not just desktop light.
