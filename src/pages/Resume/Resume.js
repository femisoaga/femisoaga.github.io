import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import ResumeDetails from "./ResumeDetails";

const Resume = () => {
  return (
    <main id="main-content" className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <div className="py-10 sm:py-16">
            <div className="max-w-4xl space-y-6">
              <p className="eyebrow">Résumé</p>
              <h1 className={`${colors.text.primary} font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Frontend leadership grounded in complete product delivery.
              </h1>
              <p className={`${colors.text.secondary} max-w-3xl text-base md:text-lg`}>
                Experience building enterprise workflows, product interfaces and the supporting
                integrations needed to move software from requirement to production.
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
    </main>
  );
};

export default Resume;
