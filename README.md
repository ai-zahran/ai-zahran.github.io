# ai-zahran.github.io

[My personal website](https://ai-zahran.github.io) — built with [Astro](https://astro.build/) and
published to GitHub Pages.

- [About](https://ai-zahran.github.io/) — who I am and what I work on
- [Work](https://ai-zahran.github.io/work/) — ten years of ML and NLP roles
- [Research](https://ai-zahran.github.io/research/) — publications and degrees
- [Writing](https://ai-zahran.github.io/blog/) — posts, mostly from GSoC 2018
  ([RSS](https://ai-zahran.github.io/rss.xml))

## Running it locally

```bash
make dev      # installs if needed, then serves http://localhost:4321
```

Run `make` on its own to list every target — `build`, `preview`, `check`, `clean`, `reinstall`.
They wrap the equivalent `npm run` scripts, which still work if you prefer them.

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site and deploys it to GitHub Pages. This requires the repository's **Settings → Pages →
Source** to be set to **GitHub Actions**.

Thanks for reading.
