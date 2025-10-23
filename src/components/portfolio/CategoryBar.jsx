import { useCallback, useMemo } from "react";

import { categories as categoriesConfig } from "../../data/categories";

// Derive a map of categoryId -> index to support keyboard navigation between pills.
const categoryIndexMap = categoriesConfig.reduce((acc, category, index) => {
  acc[category.id] = index;
  return acc;
}, {});

export const CategoryBar = ({ activeCategoryId, onChange, counts }) => {
  const handleSelect = useCallback(
    (categoryId) => {
      if (categoryId !== activeCategoryId) {
        onChange(categoryId);
      }
    },
    [activeCategoryId, onChange]
  );

  const categories = useMemo(() => categoriesConfig, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (!["ArrowRight", "ArrowLeft"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      const currentIndex = categoryIndexMap[activeCategoryId] ?? 0;
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + categories.length) % categories.length;

      const nextCategoryId = categories[nextIndex]?.id;
      if (!nextCategoryId) {
        return;
      }

      onChange(nextCategoryId);
      const nextButton = document.getElementById(
        `category-pill-${nextCategoryId}`
      );
      if (nextButton) {
        requestAnimationFrame(() => nextButton.focus());
      }
    },
    [activeCategoryId, categories, onChange]
  );

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200/70 bg-white/50 p-2 shadow-sm transition-colors duration-200 dark:border-slate-700/60 dark:bg-slate-900/40"
      role="tablist"
      aria-label="Project categories"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategoryId;
        const count = counts[category.id] ?? 0;
        const buttonClasses = [
          "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
          "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900",
        ].join(" ");

        const labelClasses = [
          "transition-colors duration-200",
          isActive ? "text-blue-600 dark:text-blue-300" : "",
        ]
          .filter(Boolean)
          .join(" ");

        const countClasses = isActive
          ? "text-blue-500/80 dark:text-blue-300/80"
          : "text-slate-400 dark:text-slate-500";

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-pressed={isActive}
            aria-selected={isActive}
            onClick={() => handleSelect(category.id)}
            onKeyDown={handleKeyDown}
            className={buttonClasses}
            id={`category-pill-${category.id}`}
          >
            <span className={labelClasses}>{category.label}</span>
            <span className={`text-xs font-semibold ${countClasses}`}>
              {count}
            </span>
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-[0_8px_22px_-14px_rgba(59,130,246,0.8)]"
                  : "bg-transparent"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
