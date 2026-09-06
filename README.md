# GROW.md — Kessoku Works

Official promotional website: https://nikolastarx.github.io/grow-md/

Static HTML, CSS and JavaScript. No build step or external runtime dependency.

## Preview

Run `python3 -m http.server 8080` in this directory, then open http://localhost:8080.

## Deploy

GitHub Pages serves the `main` branch, repository root. Push site updates to this repository. The game executable is hosted separately as a GitHub Release asset, not inside the Pages repository.

## Design and assets

The two imagegen mockups in `design/` were produced before implementation. See `design/brand-spec.md` for the chosen direction and `design/prompts.json` for the exact built-in imagegen prompts. Mockups are design studies, not gameplay screenshots.

Production artwork, icon, character and screenshots come from GROW.md, by Kessoku Works. Screenshots are cropped and compressed for the web. The 30-second reel is development gameplay footage. Download points to desktop version `0.2.1-bilingual.2`, built from game revision `0ac702bd10c03799e9e5c3c725921a8afe5e7212`.

This public repository contains the introduction website and promotional assets only. It is not the game source release, and publishing these assets does not grant a general reuse license. Game and third-party asset notices are included in the game download.

Supports Chinese / English copy, responsive layouts, keyboard tabs, a native video dialog, visible focus, and reduced motion. No analytics or third-party font scripts.
