export const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    tags = [],
    href,
    infoHref,
    categoryIds = [],
  } = project;

  const isWebApp = categoryIds.includes("web-apps");
  const isCertification = categoryIds.includes("devops-cert");
  const hasVisitLink = Boolean(href);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/75 p-2 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(56,189,248,0.35)] dark:border-slate-700/60 dark:bg-slate-900/60 dark:hover:border-blue-400/60">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bg-slate-950/65 group-hover:backdrop-blur-sm group-hover:opacity-100 ${
            isCertification ? "sm:justify-end sm:pb-12" : ""
          }`}
        >
          {isCertification ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200">
                Credential
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                {hasVisitLink && (
                  <a
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-blue-200/70 bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-blue-400"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify
                  </a>
                )}
                {infoHref && (
                  <a
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/70 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white/30"
                    href={infoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Info
                  </a>
                )}
              </div>
            </>
          ) : hasVisitLink ? (
            <a
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-slate-100/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition-colors duration-200 hover:bg-white"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          ) : (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Preview
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-2 md:px-6 py-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-slate-100">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
        {tags.length > 0 && (
          <ul
            className="
      flex flex-wrap justify-center items-center 
      gap-x-3 gap-y-3 
      mt-4 text-center
    "
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className="
          rounded-full border border-blue-200/70 
          bg-blue-50/70 px-3 py-1 
          text-xs font-semibold text-blue-600/90 
          dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200
        "
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* {isWebApp && (
          <div className="mt-auto flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-500/90 dark:text-blue-300/90">
            <span className="h-px flex-1 bg-blue-200/60 dark:bg-blue-500/40" />
            UI • Performance 
            <span className="h-px flex-1 bg-blue-200/60 dark:bg-blue-500/40" />
          </div>
        )} */}
      </div>
    </article>
  );
};
