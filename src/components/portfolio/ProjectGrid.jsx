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
        className="space-y-6 text-left"
      >
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-2xl font-semibold text-[#171a15] dark:text-[#f4f3eb]">
            {category.label}
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718317] dark:text-[#dfff4f]">
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
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
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
