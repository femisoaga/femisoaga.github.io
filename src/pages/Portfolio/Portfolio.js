import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
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

  useEffect(() => {
    if (!activeCategory && defaultCategoryId) {
      setSearchParams({ cat: defaultCategoryId }, { replace: true });
    }
  }, [activeCategory, defaultCategoryId, setSearchParams]);

  const counts = useMemo(() => {
    const base = {};

    const totalProjects = projects.length;
    categories.forEach((category) => {
      if (category.catchAll) {
        base[category.id] = totalProjects;
      } else {
        base[category.id] = projects.filter((project) =>
          project.categoryIds?.includes(category.id)
        ).length;
      }
    });

    return base;
  }, [projects, categories]);

  const handleCategoryChange = (categoryId) => {
    setSearchParams({ cat: categoryId }, { replace: true });
  };

  return (
    <div className="relative px-6 pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.45em] text-blue-300/70">Selected Work</p>
              <h1 className={`${colors.text.primary} text-4xl font-bold md:text-5xl`}>
                Products, platforms, and experiments I&apos;ve helped bring to life.
              </h1>
              <p className={`${colors.text.secondary} mx-auto max-w-2xl text-base md:text-lg`}>
                From fintech dashboards to cloud-native infrastructure, these projects highlight how I
                blend design intuition with engineering rigor to deliver meaningful outcomes.
              </p>
            </div>
          </FrostedPanel>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="w-full space-y-8 bg-transparent p-6 sm:p-10">
            <CategoryBar
              activeCategoryId={activeCategoryId}
              onChange={handleCategoryChange}
              counts={counts}
            />

            <ProjectGrid
              projects={projects}
              activeCategoryId={activeCategoryId}
            />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default Portfolio;
