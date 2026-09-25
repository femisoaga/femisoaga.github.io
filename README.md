# Oluwafemi Soaga — Product Engineer

Personal portfolio for product engineering, with frontend expertise at its core.
Built with React 18, Create React App, React Router, and Tailwind CSS. Project and
experience content live in `src/data`; reusable components live in `src/components`.

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `CI=true npm test -- --watchAll=false --runInBand`
- `npx --no-install eslint src --ext .js,.jsx`

This is JavaScript; no separate TypeScript check is configured. Deployment remains
`npm run deploy`, which builds and publishes `build` using `gh-pages`. The legacy
compiled files in the repository root are not the authoring source. GitHub Pages
route fallback is handled by `public/404.html` and `public/index.html`.

## Design and content

The homepage uses a two-column editorial hero, with a 2:1 text/portrait ratio and
text-first stacking below 720px. Typography uses `clamp()`. The hero contains only
an introduction, a portrait, and links to selected work and contact. Shared theme
tokens live in `src/index.css`; the common color helpers live in
`src/components/common/Colors.js`. Both light and dark themes are supported.

The existing `src/assets/dp.jpg` portrait is 800 × 800 and visibly soft. It is served
unchanged, with explicit dimensions, responsive size information, and high fetch
priority. Display size is capped at 352px on desktop and 280px on mobile. CRA has
no built-in image optimization component. A sharper original (ideally at least
1200 × 1200) is needed before enlarging the image or promising crisp high-density
output. Do not upscale the current source.

Project briefs are grounded in the existing project descriptions and feature
lists. Employer names, job titles, dates, delivery status, and confidentiality
notes are preserved. No outcome metrics or additional responsibilities have been
invented. Add quantified outcomes only when supporting evidence is available.
