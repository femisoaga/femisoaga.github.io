import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import ResumeDetails from "./ResumeDetails";

const Resume = () => {
  return (
    <div className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <div className="py-10 sm:py-16">
            <div className="max-w-4xl space-y-6">
              <p className="eyebrow">Résumé</p>
              <h1 className={`${colors.text.primary} font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Experience, education, and the skills I rely on to ship quality software.
              </h1>
              <p className={`${colors.text.secondary} max-w-3xl text-base md:text-lg`}>
                A snapshot of the teams I&apos;ve supported and the impact delivered across frontend,
                backend, and DevOps initiatives.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="p-4 sm:p-6">
            <ResumeDetails />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default Resume;
