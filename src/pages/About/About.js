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
                Frontend-focused engineering with practical end-to-end ownership.
              </h1>
              <p className={`${colors.text.secondary} max-w-2xl text-base leading-relaxed md:text-lg`}>
                I build responsive interfaces and complex product workflows first, then work across APIs, mobile, cloud and deployment when the product requires it.
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
