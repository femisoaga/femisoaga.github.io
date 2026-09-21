import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  return (
    <div className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="eyebrow">Writing</p>
              <h1 className={`${colors.text.primary} font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Notes on engineering, product thinking, and personal growth.
              </h1>
              <p className={`${colors.text.secondary} max-w-3xl text-base md:text-lg`}>
                I&apos;m currently drafting long-form content. Check back soon for essays, architecture
                breakdowns, and field notes from recent projects.
              </p>
            </div>
          </FrostedPanel>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="p-4 sm:p-6">
            <BlogDetails />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default Blog;
