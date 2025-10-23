import React from "react";

import { FadeIn } from "../../components/common/FadeIn";
import { colors } from "../../components/common/Colors";
import FrostedPanel from "../../components/layout/FrostedPanel";
import ContactMeDetails from "./ContactMeDetails";

const ContactMe = () => {
  return (
    <div className="relative px-6 pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <FadeIn delay={200}>
          <FrostedPanel className="p-8 sm:p-12">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.45em] text-blue-300/70">Let&apos;s Collaborate</p>
              <h1 className={`${colors.text.primary} text-4xl font-bold md:text-5xl`}>
                Ready to build your next experience? I&apos;d love to hear from you.
              </h1>
              <p className={`${colors.text.secondary} mx-auto max-w-2xl text-base md:text-lg`}>
                Share a few details about the challenge you&apos;re exploring, and I&apos;ll respond with
                ideas, timelines, and next steps.
              </p>
            </div>
          </FrostedPanel>
        </FadeIn>

        <FadeIn delay={400}>
          <FrostedPanel className="w-full p-6 sm:p-8">
            <ContactMeDetails />
          </FrostedPanel>
        </FadeIn>
      </div>
    </div>
  );
};

export default ContactMe;
