import { useCallback, useMemo } from "react";
import { categories as categoriesConfig } from "../../data/categories";

const categoryIndexMap = categoriesConfig.reduce((acc, category, index) => {
  acc[category.id] = index;
  return acc;
}, {});

export const CategoryBar = ({ activeCategoryId, onChange, counts }) => {
  const handleSelect = useCallback(
    (categoryId) => {
      if (categoryId !== activeCategoryId) onChange(categoryId);
    },
    [activeCategoryId, onChange]
  );

  const categories = useMemo(() => categoriesConfig, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (!["ArrowRight", "ArrowLeft"].includes(event.key)) return;

      event.preventDefault();
      const currentIndex = categoryIndexMap[activeCategoryId] ?? 0;
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + categories.length) % categories.length;

      const nextCategoryId = categories[nextIndex]?.id;
      if (!nextCategoryId) return;

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
      role="group"
      aria-label="Project categories"
      className={[
        // Mobile: grid layout (2 columns)
        "grid grid-cols-2 gap-2",
        // Desktop and up: revert to flex layout
        "md:flex md:flex-wrap md:items-center md:justify-center",
        // Styling
        "rounded-[1.4rem] border border-black/10 bg-[#e2e8f0]/70 p-2 transition-colors duration-200",
        "dark:border-white/10 dark:bg-white/5",
      ].join(" ")}
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategoryId;
        const count = counts[category.id] ?? 0;

        const buttonClasses = [
          "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
          isActive ? "bg-[#0f172a] text-white dark:bg-[#93c5fd] dark:text-[#0f172a]" : "text-[#475569] hover:text-[#0f172a] dark:text-[#94a3b8] dark:hover:text-white",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900",
          // Left-align text and make full width on small screens
          "w-full justify-start text-left md:w-auto",
          "whitespace-nowrap",
        ].join(" ");

        const labelClasses = [
          "transition-colors duration-200",
          isActive ? "text-white dark:text-[#0f172a]" : "",
        ]
          .filter(Boolean)
          .join(" ");

        const countClasses = isActive
          ? "text-[#93c5fd] dark:text-[#1e3a8a]"
          : "text-slate-600 dark:text-slate-400";

        return (
          <button
            key={category.id}
            type="button"
            aria-pressed={isActive}
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
                "bg-transparent"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
