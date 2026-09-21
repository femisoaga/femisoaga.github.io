import {
  ArrowRight,
  Calendar,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import FrostedPanel from "../layout/FrostedPanel";
import { Button } from "./Button";

export const CTASection = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/portfolio");
  };

  return (
    <section id="contact-cta" className="w-full max-w-4xl">
      <FrostedPanel className="w-full space-y-8 bg-[#171a15] p-8 text-center sm:p-14 dark:bg-[#dfff4f]">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="ghost"
            className="border border-white/20 text-white hover:bg-white/10 dark:border-black/20 dark:text-[#171a15] dark:hover:bg-black/5"
            onClick={handleViewWork}
          >
            View My Work
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <header className="space-y-4 my-6">
          <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl dark:text-[#171a15]">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/65 md:text-lg dark:text-[#384025]">
            Building a product or strengthening an existing team? Choose the channel that works best for you.
          </p>
        </header>

        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://cal.com/oluwafemi-soaga-tul2cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#dfff4f] px-5 py-3 text-sm font-bold text-[#171a15] transition hover:-translate-y-0.5 dark:bg-[#171a15] dark:text-white"
          >
            <Calendar className="h-5 w-5" />
            Book a meet
          </a>
          <a
            href="https://twitter.com/messages/compose?recipient_id=femisoaga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-black/20 dark:text-[#171a15] dark:hover:bg-black/5"
          >
            <Twitter className="h-5 w-5" />
            DM on X
          </a>
          <a
            href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-black/20 dark:text-[#171a15] dark:hover:bg-black/5"
          >
            <Linkedin className="h-5 w-5" />
            DM on LinkedIn
          </a>
          <a
            href="https://wa.me/2348022093000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-black/20 dark:text-[#171a15] dark:hover:bg-black/5"
          >
            <Phone className="h-5 w-5" />
            WhatsApp DM
          </a>
        </div>

        <a href="mailto:samuelsoaga@gmail.com" className="mx-auto inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-white/30 underline-offset-4 dark:text-[#171a15] dark:decoration-black/30"><Mail aria-hidden="true" className="h-4 w-4" /> samuelsoaga@gmail.com</a>
      </FrostedPanel>
    </section>
  );
};
