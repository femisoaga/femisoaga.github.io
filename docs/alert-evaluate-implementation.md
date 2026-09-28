# AlertEvaluate implementation report

## Placement

- First of three equal homepage cards: AlertEvaluate, Business Central, and The Sahara Centre. Bucks Invest Partners remains featured on the projects page.
- First entry on the projects page and Featured filter, using the standard card layout.
- Dedicated case study at `/portfolio/alert-evaluate`, using the existing project-detail route.
- Updated AlertMFB experience bullet and a case-study link on the résumé page. Existing employment details and downloadable PDF are unchanged.

## Final homepage card copy

**AlertEvaluate**

Enterprise performance and appraisal platform

Internal Product — Private Access

Multi-role appraisal workflows for employees, managers, and HR.

**My role:** Frontend/Product Engineer

Designed and built the complete frontend from scratch, from requirements through production delivery. The backend was built separately.

Next.js · React · TypeScript

**View case study**

The projects listing uses the longer description and also shows Tailwind CSS and React Context. All cards use the standard layout; no separate flagship label or oversized card remains.

## Case-study summary

AlertEvaluate translates a configurable organisational appraisal process into a shared workspace for employees, managers, and HR. The case study explains complete frontend ownership from requirements through production, overlapping personal and review duties, assignment-aware editing, configurable forms and cross-stage objectives, request coordination, reusable interfaces, validation, responsive behaviour, accessibility features, and testing evidence. A six-step lifecycle explains preparation through reporting, with corrections and optional employee acceptance explicitly dependent on configured stages and backend policy.

All 16 requested topics are covered. API implementation, persistence, authoritative permissions and transitions, scoring, exports, and infrastructure remain clearly attributed to the separately built backend. No metrics, public demo, source-code link, private records, internal URLs, or proprietary source excerpts were added. The banking middleware entry remains separate and unchanged.

## Screenshots

`src/assets/alert-evaluate-sign-in.webp` is the supplied sign-in screenshot, used on both project cards and the case-study opening. The original WebP is already approximately 47 KB at 2880 × 1600, so it is served without recompression, with explicit dimensions, uncropped scaling, and descriptive alt text. Its caption accurately describes Zoho sign-in.

The supplied dashboard is not included because it still contains employee identity and appraisal status. A sanitized version can be added to the case study when available.

`alert-evaluate-cycle-builder-placeholder.svg` remains a labelled placeholder in the modules section. Replace it with an HR cycle builder capture showing ordered actor stages with fictional cycle dates and identities. The old manager-review placeholder is no longer imported or published; a sanitized manager-review screenshot remains an optional addition.

## Files created

- `src/data/alertEvaluate.js` — source-grounded structured project and case-study copy.
- `src/data/alertEvaluateSeo.json` — shared metadata.
- `src/types/project.d.ts` and `src/types/assets.d.ts` — TypeScript content contracts and SVG import declaration.
- `src/components/portfolio/ProjectCaseStudy.jsx` — reusable case-study layout, contents navigation, workflow, figures.
- `src/components/portfolio/CaseStudyMetadata.jsx` — client metadata and restoration on navigation.
- `src/components/portfolio/AlertEvaluate.test.jsx` — navigation, ownership, stack and metadata regressions.
- The cycle-builder SVG placeholder and WebP sign-in screenshot described above.
- `scripts/build-case-study-metadata.cjs` — static HTML metadata for direct route crawlers.
- `tsconfig.content.json` — scoped static check.
- `docs/alert-evaluate-implementation.md` — this report.

## Files modified

- `src/data/projects.js` — reuse corrected AlertEvaluate entry and move it first; all other project records unchanged.
- `src/components/portfolio/ProjectCard.jsx` — ownership copy and uncropped case-study previews.
- `src/pages/Home/Home.js` — three selected projects and selected-work introduction.
- `src/pages/Portfolio/PortfolioDetails.js` — render structured case studies and wrap long titles on small screens.
- `src/data/experience.js` — strengthen the AlertEvaluate ownership bullet.
- `src/pages/Resume/ResumeDetails.js` — link to the case study.
- `src/index.css` — responsive figure and anchor styles.
- `public/sitemap.xml` — case-study URL.
- `package.json` — postbuild metadata and scoped type-check commands; no dependencies added.
- `.gitignore` — protect the untracked internal dossier from accidental publication.
- `README.md` — authoring, checks and metadata notes.

## Verification

- `npm run format -- --check`: unavailable; no format script or formatter is configured. No formatter dependency was added.
- `npx --no-install eslint src --ext .js,.jsx`: passed after adapting new tests to the repository's Testing Library lint rules.
- `npm run typecheck:content`: passed; checks the new content and declarations, not a migration of the JavaScript application.
- `CI=true npm test -- --watchAll=false --runInBand`: all 3 suites / 12 tests passed. Jest reported a delayed-exit/open-handle warning.
- `npm run build`: passed, including the new static case-study metadata entry.
- `git diff --check`: passed.
- `node /private/tmp/alert-evaluate-browser.cjs`: headless Chrome against the production build passed homepage, listing and case-study checks at 320, 390, 768 and 1440 pixels; no horizontal overflow or page errors. Verified ordering, links, contents anchors, return navigation, metadata cleanup, keyboard skip link, dark-theme capture and metadata with JavaScript disabled. Inspected captured desktop/mobile cards, workflow, and light/dark case-study layouts.
- Compared other project records with HEAD: unchanged. Checked that the internal dossier is absent from the build. Public AlertEvaluate content contains only the supplied safe project facts and labelled illustrative placeholders.

Existing CRA/Babel dependency and outdated Browserslist warnings remain. No deployment was performed. The local browser harness and screenshots are temporary verification artifacts outside the repository.

## Facts still requiring confirmation before further claims

Current public copy uses the supplied owner-confirmed ownership and production-delivery statements and repository-verified implementation descriptions. It does not require reconfirming those statements.

Additional claims would need evidence for exact project dates/duration, hosting and deployment tooling, the production stage sequence and return/acceptance policy, executed QA/UAT and accessibility checks, adoption or measured business impact, and design-research activity. Actual screenshots, logos, any public demo URL, and source visibility require approved material before inclusion. The supplied product name is used as explicitly requested; no company logo was added.
