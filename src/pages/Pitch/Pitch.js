import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import PitchDetails from "./PitchDetails";

const Pitch = () => {
  return (
    <div className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="eyebrow">Pitch</p>
              <h1 className={`${colors.text.primary} font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Exploring new ideas worth building.
              </h1>
              <p className={`${colors.text.secondary} max-w-3xl text-base md:text-lg`}>
                Rapid concepts, product pitches, and moonshots I&apos;m currently experimenting with.
                This space is evolving—check back as new decks and prototypes land.
              </p>
            </div>
          </FrostedPanel>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="p-4 sm:p-6">
            <PitchDetails />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default Pitch;
