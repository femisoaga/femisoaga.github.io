import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import ContactMeDetails from "./ContactMeDetails";

const ContactMe = () => {
  return (
    <div className="relative px-5 pb-24 pt-36 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FadeIn delay={200}>
          <div className="py-10 text-left sm:py-16">
            <div className="max-w-4xl space-y-6">
              <p className="eyebrow">Let&apos;s collaborate</p>
              <h1 className={`${colors.text.primary} font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl`}>
                Ready to build your next experience? I&apos;d love to hear from you.
              </h1>
              <p className={`${colors.text.secondary} max-w-2xl text-base md:text-lg`}>
                For product engineering, frontend architecture, client work or a role conversation,
                use any of the direct channels below.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="w-full p-6 sm:p-10">
            <ContactMeDetails />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default ContactMe;
