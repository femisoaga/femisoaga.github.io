import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import PitchDetails from "./PitchDetails";

const Pitch = () => {
  return (
    <div className="relative px-6 pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.45em] text-blue-300/70">Pitch</p>
              <h1 className={`${colors.text.primary} text-4xl font-bold md:text-5xl`}>
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
