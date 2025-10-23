import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import ResumeDetails from "./ResumeDetails";

const Resume = () => {
  return (
    <div className="relative px-6 pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.45em] text-blue-300/70">Resume</p>
              <h1 className={`${colors.text.primary} text-4xl font-bold md:text-5xl`}>
                Experience, education, and the skills I rely on to ship quality software.
              </h1>
              <p className={`${colors.text.secondary} max-w-3xl text-base md:text-lg`}>
                A snapshot of the teams I&apos;ve supported and the impact delivered across frontend,
                backend, and DevOps initiatives.
              </p>
            </div>
          </FrostedPanel>
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
