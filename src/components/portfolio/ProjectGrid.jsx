import { useMemo } from "react";

import { categories } from "../../data/categories";
import { ProjectCard } from "./ProjectCard";

const catchAllCategory = categories.find((category) => category.catchAll);

export const ProjectGrid = ({ projects = [], activeCategoryId }) => {
  const shouldShowAll =
    activeCategoryId === catchAllCategory?.id || !activeCategoryId;

  const filtered = useMemo(() => {
    if (shouldShowAll) {
      return projects;
    }

    return projects.filter((project) =>
      project.categoryIds?.includes(activeCategoryId)
    );
  }, [activeCategoryId, projects, shouldShowAll]);

  const getGridColumns = (categoryId) =>
    categoryId === "web-apps"
      ? "sm:grid-cols-2 xl:grid-cols-3"
      : "sm:grid-cols-2 xl:grid-cols-2";

  const renderSection = (categoryId, items) => {
    const category = categories.find((entry) => entry.id === categoryId);
    if (!category) {
      return null;
    }

    const hasItems = items.length > 0;

    return (
      <section
        key={categoryId}
        className="space-y-6 rounded-3xl border border-slate-200/60 bg-white/70 p-6 text-left shadow-[0_14px_40px_-32px_rgba(15,23,42,0.45)] transition-colors duration-200 dark:border-slate-700/60 dark:bg-slate-900/50"
      >
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {category.label}
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500/70 dark:text-blue-300/70">
            {items.length} project{items.length === 1 ? "" : "s"}
          </span>
        </header>
        {hasItems ? (
          <div
            className={`grid grid-cols-1 gap-6 transition-all duration-300 ${getGridColumns(
              categoryId
            )}`}
          >
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-200/70 bg-white/40 px-4 py-6 text-sm text-slate-500 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-400">
            I&apos;m curating work for this area. Check back soon.
          </p>
        )}
      </section>
    );
  };

  if (shouldShowAll) {
    return (
      <div
        className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        aria-live="polite"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-none"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8" aria-live="polite">
      {renderSection(activeCategoryId, filtered)}
    </div>
  );
};
