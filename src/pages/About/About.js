import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import AboutMe from "../../components/profile/AboutMe";
import FrostedPanel from "../../components/layout/FrostedPanel";

const About = () => {
  return (
    <div className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <div className="py-10 sm:py-16">
            <div className="max-w-4xl space-y-6">
              <p className="eyebrow">About</p>
              <h1 className={`${colors.text.primary} font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Building immersive experiences with clean, scalable engineering.
              </h1>
              <p className={`${colors.text.secondary} max-w-2xl text-base leading-relaxed md:text-lg`}>
                I’m Oluwafemi Soaga, a multi-disciplinary engineer blending frontend craft, backend
                reliability, and DevOps discipline. From rapid prototypes to production-grade systems,
                I focus on shipping resilient software that feels effortless to use.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="w-full p-7 text-left sm:p-12">
            <AboutMe />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
