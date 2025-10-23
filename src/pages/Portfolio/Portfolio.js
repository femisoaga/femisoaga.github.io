import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import PortfolioDetails from "./PortfolioDetails";

const Portfolio = () => {
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
          <FrostedPanel className="w-full p-0 overflow-hidden">
            <PortfolioDetails />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default Portfolio;
