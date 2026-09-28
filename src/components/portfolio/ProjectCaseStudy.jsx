import { CaseStudyMetadata } from "./CaseStudyMetadata";

/** @param {{project: import('../../types/project').Project}} props */
export const ProjectCaseStudy = ({ project }) => (
  <>
    <CaseStudyMetadata />
    <figure className="case-study-figure my-10">
      <img src={project.image} alt={project.imageAlt} width={project.imageWidth || 1200} height={project.imageHeight || 700} decoding="async" className="rounded-3xl" />
      <figcaption className="mt-3 text-sm text-slate-600 dark:text-slate-400">{project.imageCaption}</figcaption>
    </figure>
    <nav aria-label="Case study contents" className="rounded-3xl border border-black/10 p-6 dark:border-white/10">
      <p className="eyebrow mb-4">Inside the case study</p>
      <ol className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
        {project.caseStudy.map(section => <li key={section.id}><a className="underline decoration-slate-400 underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300" href={`#${section.id}`}>{section.title}</a></li>)}
      </ol>
    </nav>
    <div className="my-10 divide-y divide-slate-200 dark:divide-slate-800">
      {project.caseStudy.map((section, index) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="case-study-section grid gap-5 py-10 md:grid-cols-[0.45fr_1fr] md:gap-12">
          <div><span aria-hidden="true" className="eyebrow mb-3">{String(index + 1).padStart(2, "0")}</span><h2 id={`${section.id}-title`} className="font-heading text-2xl font-semibold">{section.title}</h2></div>
          <div className="min-w-0 space-y-5">
            {section.paragraphs.map(copy => <p key={copy} className="text-base leading-8">{copy}</p>)}
            {section.steps && <ol className="grid gap-4 sm:grid-cols-2">{section.steps.map((step, stepIndex) => <li key={step.title} className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-400/20 dark:bg-blue-400/5"><span className="text-xs font-bold text-blue-700 dark:text-blue-300">STEP {stepIndex + 1}</span><h3 className="mt-2 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7">{step.copy}</p></li>)}</ol>}
            {section.image && <figure className="case-study-figure pt-3"><img src={section.image.src} alt={section.image.alt} width="1200" height="700" loading="lazy" decoding="async" className="rounded-2xl" /><figcaption className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{section.image.caption}</figcaption></figure>}
          </div>
        </section>
      ))}
    </div>
  </>
);
