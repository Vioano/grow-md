# GROW.md — Kessoku Works

Official promotional website: https://vioano.github.io/grow-md/

Static HTML, CSS and JavaScript. No build step or external runtime dependency.

## Preview

Run `python3 -m http.server 8080` in this directory, then open http://localhost:8080.

## Deploy

GitHub Pages serves the `main` branch, repository root. Push site updates to this repository. The game executable is hosted separately as a GitHub Release asset, not inside the Pages repository.

## Design and assets

The two imagegen mockups in `design/` were produced before implementation. See `design/brand-spec.md` for the chosen direction and `design/prompts.json` for the exact built-in imagegen prompts. Mockups are design studies, not gameplay screenshots.

Production artwork, icon, character and screenshots come from GROW.md, by Kessoku Works. Screenshots are cropped and compressed for the web. The 30-second reel is development gameplay footage. The primary download is **GROW.md 1.2.1 rc4 Audience for macOS**, mirrored unchanged from the roadshow delivery: runtime `af163e2cac2746578c1ff9d11a4ecf298c1e1475`, ZIP SHA-256 `b07100d7838dd0d94c958cb8e7ca9b6842a5d72b7b57201d7c23d2dbdd13f367` (270,162,616 bytes). Public release: `v1.2.1-roadshow-rc4-audience`. The separate Windows link retains the previous v1.2 stable bundle under the legacy `v0.2.1-bilingual.2` tag; it is not the rc4 roadshow build. Release notes document macOS launch instructions and verification limits.

This public repository contains the introduction website and promotional assets only. It is not the game source release, and publishing these assets does not grant a general reuse license. Game and third-party asset notices are included in the game download.

Supports Chinese / English copy, responsive layouts, keyboard tabs, a native video dialog, visible focus, and reduced motion. No analytics or third-party font scripts.
