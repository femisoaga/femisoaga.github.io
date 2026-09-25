import React from "react";
import { useSearchParams } from "react-router-dom";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import { CategoryBar } from "../../components/portfolio/CategoryBar";
import { ProjectGrid } from "../../components/portfolio/ProjectGrid";
import { categories } from "../../data/categories";
import { projects } from "../../data/projects";

const defaultCategoryId =
  categories.find((category) => category.default)?.id ?? categories[0]?.id;

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFromParams = searchParams.get("cat");
  const activeCategory = categories.find(
    (category) => category.id === activeFromParams
  );
  const activeCategoryId = activeCategory?.id ?? defaultCategoryId;

  const counts = categories.reduce((base, category) => {
    base[category.id] = category.catchAll
      ? projects.length
      : projects.filter((project) => project.categoryIds?.includes(category.id)).length;
    return base;
  }, {});

  const handleCategoryChange = (categoryId) => {
    setSearchParams({ cat: categoryId }, { replace: true });
  };

  return (
    <main id="main-content" className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <div className="py-10 sm:py-16">
            <div className="max-w-4xl space-y-6">
              <p className="eyebrow">Selected work</p>
              <h1 className={`${colors.text.primary} font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Useful products, from idea to production.
              </h1>
              <p className={`${colors.text.secondary} max-w-2xl text-base md:text-lg`}>
                Enterprise platforms, client work, and independent products. Explore the workflows, engineering decisions, and responsibilities behind each one.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="w-full space-y-10">
            <CategoryBar
              activeCategoryId={activeCategoryId}
              onChange={handleCategoryChange}
              counts={counts}
            />

            <ProjectGrid
              projects={projects}
              activeCategoryId={activeCategoryId}
            />
          </div>
        </FadeIn>
      </div>
    </main>
  );
};

export default Portfolio;
