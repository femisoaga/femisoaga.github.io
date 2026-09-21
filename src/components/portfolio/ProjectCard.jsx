import { useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BrandedFallback = ({ project }) => (
  <div className="relative flex h-full min-h-52 flex-col justify-between overflow-hidden bg-[#171a15] p-6 text-white">
    <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: project.accent || "#dfff4f" }} />
    <span className="relative text-xs font-bold uppercase tracking-[0.16em] text-white/50">{project.category}</span>
    <div className="relative">
      <span className="mb-4 block font-heading text-5xl font-semibold text-white/20">{project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
      <p className="font-heading text-2xl font-semibold text-white">{project.title}</p>
    </div>
  </div>
);

export const ProjectCard = ({ project, compact = false }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const hasCaseStudy = Boolean(project.slug && (project.features || project.role || project.improvements));

  return (
    <article className="editorial-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#a9c52a]">
      <div className={`relative overflow-hidden rounded-[1.35rem] ${compact ? "h-40" : "h-56"}`}>
        {project.image && !imageFailed ? (
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} project preview`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            width="720"
            height="420"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <BrandedFallback project={project} />
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 py-5 md:px-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#dfff4f] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#171a15]">{project.status}</span>
          <span className="text-xs font-semibold text-[#777d70] dark:text-[#9fa697]">{project.category}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold leading-tight text-[#171a15] dark:text-[#f4f3eb]">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">{project.description}</p>

        {project.tags?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.tags.slice(0, compact ? 3 : 5).map((tag) => (
              <li key={tag} className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#69705f] dark:border-white/10 dark:text-[#b6bdac]">{tag}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#171a15] px-4 py-2.5 text-xs font-bold text-white dark:bg-[#dfff4f] dark:text-[#171a15]">
              {project.actionLabel || "Visit live site"} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {hasCaseStudy && (
            <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-xs font-bold text-[#171a15] dark:border-white/15 dark:text-white">
              <BookOpen className="h-4 w-4" /> View case study
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
