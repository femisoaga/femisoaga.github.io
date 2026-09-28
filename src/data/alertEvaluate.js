// @ts-check
import signInImage from "../assets/alert-evaluate-sign-in.webp";
import setupPreview from "../assets/alert-evaluate-cycle-builder-placeholder.svg";

/** @type {import('../types/project').Project} */
export const alertEvaluate = {
  id: "alert-evaluate",
  slug: "alert-evaluate",
  title: "AlertEvaluate",
  category: "Enterprise performance and appraisal platform",
  categoryIds: ["featured"],
  status: "Internal Product — Private Access",
  summary: "Multi-role appraisal workflows for employees, managers, and HR.",
  description: "Multi-role appraisal workflows for employees, managers, and HR. Configurable reviews, self-assessments, and reporting in one workspace.",
  role: "Frontend/Product Engineer",
  ownership: "Designed and built the complete frontend from scratch, from requirements through production delivery. The backend was built separately.",
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Context", "REST APIs"],
  image: signInImage,
  imageAlt: "AlertEvaluate sign-in screen with product branding and the Continue with Zoho action.",
  imageWidth: 2880,
  imageHeight: 1600,
  imageCaption: "AlertEvaluate sign-in — a single Zoho entry point into the appraisal workspace.",
  accent: "#93c5fd",
  confidentialityNote: "Internal product. The sign-in screen is shown with permission; the cycle-builder visual remains a labelled placeholder. Employee records and private URLs are excluded. This is separate from the Alert Group business-banking middleware product.",
  caseStudy: [
    {
      id: "overview", title: "Making a shared process clear to each person",
      paragraphs: ["AlertEvaluate brings employee self-assessment, manager review, and HR administration into one enterprise performance and appraisal workspace. An appraisal belongs to a cycle with configurable stages, sections, and questions. Each person needs to understand what has happened, who acts next, and what they can change.", "I designed and built the complete frontend from the ground up. The central product-engineering challenge was translating that organisational process into understandable interactions while keeping the frontend consistent and maintainable."],
    },
    {
      id: "problem", title: "The organisational problem",
      paragraphs: ["The product brief called for replacing ad hoc spreadsheet-based review tracking. Manual follow-up, unclear stage ownership, inconsistent review collection, and report preparation made the process difficult to coordinate.", "I translated those needs into personal and assigned-review queues, visible stage ownership, guided setup, and reporting interfaces. Reducing coordination effort was the intent; no measured time savings or adoption figures are claimed."],
    },
    {
      id: "users", title: "Three roles, overlapping responsibilities",
      paragraphs: ["Employees enrol when eligible, complete the stage assigned to them, and follow progress. Managers review assigned appraisals while retaining their own employee experience. HR/Admin configures the organisation, cycles, and forms, monitors queues, and requests reports.", "I separated My, Review, and All appraisal views according to role. This lets managers and HR move between their own appraisal and their review duties without losing the distinction between the two."],
    },
    {
      id: "ownership", title: "Complete frontend ownership",
      paragraphs: ["As Frontend/Product Engineer, I owned the frontend from initial requirements through production delivery: interface design, user experience, architecture, business and workflow logic in the client, reusable components, role-aware behaviour, validation, REST API integration, testing, responsiveness, and accessibility.", "That ownership includes deciding how the application explains prerequisites, presents complex forms, guides correction, and communicates loading, empty, error, and success states."],
    },
    {
      id: "boundary", title: "Where the frontend ends and the backend begins",
      paragraphs: ["The backend was built separately. I integrated its REST APIs; I did not build the backend APIs, database, or infrastructure. My work covers the frontend appraisal workflow, authentication and session interfaces, report filters, upload controls, and browser downloads.", "The backend remains authoritative for permissions, record access, workflow transitions, persistence, validation, scoring, and report/PDF generation. Role-aware controls guide the user; they are not a substitute for server enforcement."],
    },
    {
      id: "approach", title: "Design around the next action",
      paragraphs: ["I made the active cycle, current status, and next action visible before asking a user to enter a long form. Inside an appraisal, ordered stages preserve earlier answers for context and distinguish the editable present from locked future steps.", "For HR, setup follows dependencies: organisation readiness before cycle creation, then cycle and stage selection before form configuration. Optional report filters expand on demand, keeping the initial view focused."],
    },
    {
      id: "workflow", title: "A configurable appraisal lifecycle",
      paragraphs: ["This is a conceptual handoff through the supported frontend, not a fixed production sequence. Stages and actors are configured per cycle; the backend supplies current state and enforces transitions."],
      steps: [
        { title: "Prepare", copy: "HR uploads staff and departments, manages roles, and checks readiness." },
        { title: "Configure", copy: "HR defines the cycle, dates, ordered actors, sections, and question types, then requests the appropriate cycle status." },
        { title: "Enrol and assess", copy: "Zoho sign-in leads to the dashboard. Eligible users enrol and the assigned employee completes validated self-assessment answers." },
        { title: "Review and decide", copy: "Assigned reviewers see earlier context, enter responses or scores, and agree or disagree when decisions are enabled." },
        { title: "Correct and continue", copy: "When the backend returns a stage, its current assigned actor can edit again. The guide describes return to the previous person; exact rollback policy is backend-defined." },
        { title: "Accept, complete, report", copy: "Employee acceptance is supported when configured. The UI displays final backend status and offers completed exports. Administrative cycle closure is separate." },
      ],
    },
    {
      id: "modules", title: "From participation to administration",
      paragraphs: ["The dashboard and appraisal queues connect everyday participation with review work. HR interfaces extend that journey into staff and department uploads, role management, cycle creation and cloning, nested form setup, and completion or returned-appraisal reports.", "Forms support text, boolean, score, and objective questions with department targeting. An objective can be entered by an employee at one stage and scored at another, preserving the original entry beside the appropriate review controls. Reporting interfaces request backend-generated files rather than generating reports in the browser."],
      image: { src: setupPreview, alt: "Labelled placeholder for HR cycle configuration with ordered employee, manager, and HR stages.", caption: "Screenshot placeholder — HR cycle builder. Replace with an approved capture using fictional stages, dates, and identities." },
    },
    {
      id: "architecture", title: "Architecture that follows the domain",
      paragraphs: ["I built the frontend with Next.js App Router, React, TypeScript, and Tailwind CSS. Thin route wrappers lead into feature screens; shared interface primitives and domain-specific REST clients keep recurring concerns in one place.", "Local React state handles forms and selections; React Context shares identity and role. Native fetch connects domain clients to the backend through a shared request layer. Response adapters reconcile differing data envelopes and pagination shapes."],
    },
    {
      id: "access", title: "Role determines the workspace; assignment determines editing",
      paragraphs: ["Role-aware navigation and page controls distinguish staff, manager, and HR experiences. Within an appraisal, editing also depends on the selected stage being current and the signed-in user being its exact assigned actor.", "A manager role does not grant editing of every appraisal, and HR does not bypass that assigned-actor gate. Earlier stages remain context; future stages stay locked in the interface. The backend is the final authority on access."],
    },
    {
      id: "states", title: "Make complex states actionable",
      paragraphs: ["I implemented question-type validation for required answers, score bounds and increments, and required decisions. Cycle and form setup also check dates, ordering, actor requirements, and objective-scoring configuration. Inline feedback and first-error focus help users find the correction that blocks submission.", "Loading, saving, empty, error, and success states are distinct. Busy controls prevent duplicate submission, confirmation protects destructive actions, and shared feedback explains asynchronous results. Drafts are held in memory; persistent autosave and offline editing are not claimed."],
    },
    {
      id: "patterns", title: "Reusable patterns across the workspace",
      paragraphs: ["Shared buttons, badges, loaders, pagination, dialogs, drawers, upload controls, and notification feedback keep interactions consistent. An authenticated shell provides identity, role-aware navigation, cycle context, and notifications across feature screens.", "Domain clients and download helpers separate request construction and browser-file handling from the interface. I integrated Zoho redirect and callback screens, profile loading, and session refresh, including coordination of concurrent JSON-request refresh attempts."],
    },
    {
      id: "challenges", title: "Three difficult interactions, three deliberate solutions",
      paragraphs: ["Workflow state arrives through stage configuration, progress data, and actor assignments. I reconciled these inputs into ordered stage presentation so the user sees a coherent current step and the right editing controls.", "Cross-stage objectives require different interfaces for entry and evaluation. I retained employee context for reviewers and showed scoring controls only at the configured scoring stage, skipping irrelevant validation for unscored sections.", "Score previews can fall behind fast edits. I debounced requests and ignored stale responses so backend-calculated feedback stays aligned with valid current inputs, without claiming ownership of the scoring engine."],
    },
    {
      id: "quality", title: "Testing and quality assurance",
      paragraphs: ["Testing and production delivery were part of my frontend ownership. The source dossier records strict TypeScript configuration, React Strict Mode, documented acceptance criteria, and a manual end-to-end checklist spanning setup, enrolment, employee submission, manager review, and completion.", "The dossier’s inspection passed the non-emitting TypeScript check. It found no tracked automated test suite or coverage evidence, and did not run a production build or authenticated browser session. The documented checklist establishes a QA path, not completed UAT or sign-off; detailed execution evidence remains to be confirmed."],
    },
    {
      id: "accessibility", title: "Responsive layouts and accessibility features",
      paragraphs: ["I implemented desktop and small-screen navigation, wrapping controls, responsive grids, horizontally scrollable tables and stage controls, and viewport-constrained dialogs. The score preview adapts its placement and width to the viewport.", "Accessibility work includes semantic controls, visible focus, labelled actions, validation indicators, loading semantics, and Escape-to-close behaviour. These are implemented features, not a WCAG compliance claim. The dossier notes remaining gaps in general dialog focus trapping, some labels, keyboard tab patterns, and reduced-motion handling."],
    },
    {
      id: "outcome", title: "What this project demonstrates",
      paragraphs: ["AlertEvaluate demonstrates my ability to own an enterprise frontend from requirements to production: translate a configurable organisational process into usable workflows, carry complex state across roles and stages, integrate external services, and build a consistent interface system.", "The delivered frontend connects appraisal participation, assigned review, HR configuration, and reporting. Ownership and production delivery are owner-confirmed; implementation details are grounded in the source dossier. Quantified business outcomes, exact production policies, and detailed QA results are not asserted."],
    },
  ],
};
