import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  return (
    <div className="relative px-6 pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.45em] text-blue-300/70">Writing</p>
              <h1 className={`${colors.text.primary} text-4xl font-bold md:text-5xl`}>
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
