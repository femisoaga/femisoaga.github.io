# Oluwafemi Soaga — Product Engineer

Personal portfolio for product engineering, with frontend expertise at its core.
Practical AI integration and AI-assisted development are supporting capabilities;
engineering judgment, independent problem-solving, and code ownership remain central.
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

The portrait at `src/assets/dp.jpeg` is 810 × 1080. It is served unchanged, with
explicit source dimensions, responsive size information, and high fetch priority.
Its square display crop is capped at 352px on desktop and 280px on mobile (240px on
the smallest screens). CRA has no built-in image optimization component. Use a
larger original before increasing the display size; do not upscale the source.

Project briefs are grounded in the existing project descriptions and feature
lists. Employer names, job titles, dates, delivery status, and confidentiality
notes are preserved. No outcome metrics or additional responsibilities have been
invented. Add quantified outcomes only when supporting evidence is available.

## Appearance preference

The header has a single button that switches between Light and Dark. It follows
the device appearance, including live changes, until the visitor explicitly
toggles it. That Light/Dark choice is saved across visits and synced between tabs.
There is no third option in the interface. The control also works when browser
storage is blocked (the choice then lasts only for the current page).

Preferences use `theme-preference`. The previous `theme` value is intentionally
ignored because it mixed manual choices with automatically saved system values.
Existing visitors therefore start in System mode once after this update and can
choose an explicit preference again.

## AlertEvaluate case study

AlertEvaluate leads the homepage and featured-work listing at
`/portfolio/alert-evaluate`. Its structured content is in
`src/data/alertEvaluate.js`; `src/types/project.d.ts` defines the project and
case-study contracts. Run `npm run typecheck:content` for the scoped content
check (the portfolio itself remains JavaScript).

`npm run build` also emits a static HTML entry for the case-study route using
`src/data/alertEvaluateSeo.json`, so title, description, canonical and social
metadata are available without JavaScript. The existing GitHub Pages fallback
continues to handle other routes. Structured data was not previously configured.

The AlertEvaluate card and case-study opening use the supplied WebP sign-in
screenshot. The cycle-builder SVG remains a labelled placeholder. See
`docs/alert-evaluate-implementation.md` for replacement captures and verification.
The internal `ALERT_EVALUATE_PORTFOLIO_CONTEXT.md` is ignored by Git and is not
imported or copied into the site. No formatter is configured in this repository.
