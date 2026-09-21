import { ArrowUpRight } from "lucide-react";

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

  const isCertification = categoryIds.includes("devops-cert");
  const hasVisitLink = Boolean(href);

  return (
    <article className="editorial-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#a9c52a]">
      <div className="relative overflow-hidden rounded-[1.35rem] bg-[#e6e5dc] dark:bg-[#23271f]">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div
          className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bg-[#171a15]/75 group-hover:backdrop-blur-sm group-hover:opacity-100 ${
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
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-[#dfff4f] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#171a15]"
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
              className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#dfff4f] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#171a15]"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Preview
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-3 py-6 md:px-5">
        <div className="space-y-3">
          <h3 className="font-heading text-xl font-semibold leading-tight text-[#171a15] transition-colors duration-200 dark:text-[#f4f3eb]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">
            {description}
          </p>
        </div>
        {tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-3">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#69705f] dark:border-white/10 dark:text-[#b6bdac]"
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
