import { useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BrandedFallback = ({ project }) => (
  <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#0f172a] p-6 text-white">
    <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: project.accent || "#93c5fd" }} />
    <span className="relative text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">{project.category}</span>
    <div className="relative">
      <span className="block font-heading text-4xl font-semibold text-white/60">{project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
    </div>
  </div>
);

export const ProjectCard = ({ project, compact = false }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const hasCaseStudy = Boolean(project.slug && (project.features || project.role || project.improvements));

  return (
    <article className="editorial-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]">
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
          <span className="rounded-full bg-[#93c5fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f172a]">{project.status}</span>
          <span className="text-xs font-semibold text-[#475569] dark:text-[#94a3b8]">{project.category}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold leading-tight text-[#0f172a] dark:text-[#f8fafc]">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#475569] dark:text-[#94a3b8]">{project.description}</p>

        {project.role && <p className="mt-4 text-sm leading-relaxed"><strong className="text-slate-900 dark:text-slate-100">My role: </strong>{project.role}</p>}

        {project.tags?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.tags.slice(0, compact ? 3 : 5).map((tag) => (
              <li key={tag} className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#475569] dark:border-white/10 dark:text-[#cbd5e1]">{tag}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2.5 text-xs font-bold text-white dark:bg-[#93c5fd] dark:text-[#0f172a]">
              {project.actionLabel || "Visit live site"} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {hasCaseStudy && (
            <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-xs font-bold text-[#0f172a] dark:border-white/15 dark:text-white">
              <BookOpen className="h-4 w-4" /> View case study
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
