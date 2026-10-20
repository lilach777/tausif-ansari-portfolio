# Tausif Ansari: portfolio

Next.js 14 static export. Three runtime deps (`next`, `react`, `react-dom`); no UI/animation libraries.

## Edit content

Everything (copy, numbers, roles, links) is in `content/site.ts`. Fields left as `""` are hidden on the page instead of showing a guess. Don't use the em dash character anywhere; use "to" for date ranges.

Open TODOs in that file:

- `impact[2].context`: add the time period to "FereAI Discord server".
- `work` → Defx: add an analytics screenshot as `evidence`.
- `work` → BimaBTC / TinyFish: these are ownership-led. Add numeric `metrics` / `before` / `after` only once verified and attributable to your work.

## Evidence screenshots

`public/evidence/*.webp` were converted from the original PNGs (resized and re-encoded only; the pixels weren't edited).
The FereAI shading over Sep to Oct 2025 is an HTML overlay (`evidence.excluded`), not baked into the image.

## Run / build

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in /out
```

Deploy the `out/` folder (or the repo, with build command `npm run build` and output `out`) on Bolt hosting.
