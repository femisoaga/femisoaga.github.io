import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import AboutMe from "../../components/profile/AboutMe";
import FrostedPanel from "../../components/layout/FrostedPanel";

const About = () => {
  return (
    <div className="relative px-6 pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.45em] text-blue-300/70">About</p>
              <h1 className={`${colors.text.primary} text-4xl font-bold md:text-5xl`}>
                Building immersive experiences with clean, scalable engineering.
              </h1>
              <p className={`${colors.text.secondary} mx-auto max-w-2xl text-base md:text-lg`}>
                I’m Oluwafemi Soaga, a multi-disciplinary engineer blending frontend craft, backend
                reliability, and DevOps discipline. From rapid prototypes to production-grade systems,
                I focus on shipping resilient software that feels effortless to use.
              </p>
            </div>
          </FrostedPanel>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="w-full p-6 sm:p-10 text-left">
            <AboutMe />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
