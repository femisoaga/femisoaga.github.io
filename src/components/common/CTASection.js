import {
  ArrowRight,
  Calendar,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

export const CTASection = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/portfolio");
  };

  return (
    <section id="contact-cta" className="mx-auto w-full max-w-4xl">
      <div className="rounded-[2rem] w-full space-y-8 bg-[#0f172a] p-8 text-center sm:p-14 dark:bg-[#93c5fd]">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="ghost"
            className="border border-white/20 text-white hover:bg-white/10 dark:border-black/20 dark:text-[#0f172a] dark:hover:bg-black/5"
            onClick={handleViewWork}
          >
            View My Work
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <header className="space-y-4 my-6">
          <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl dark:text-[#0f172a]">
            Have a product problem worth solving?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/65 md:text-lg dark:text-[#1e293b]">
            I’m open to Product Engineer and frontend-focused opportunities, as well as selected product development collaborations. Let’s discuss what you’re building.
          </p>
        </header>

        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="https://cal.com/oluwafemi-soaga-tul2cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#93c5fd] px-5 py-3 text-sm font-bold text-[#0f172a] transition hover:-translate-y-0.5 dark:bg-[#0f172a] dark:text-white"
          >
            <Calendar className="h-5 w-5" />
            Book a conversation
          </a>
          <a
            href="https://twitter.com/femi_soaga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-black/20 dark:text-[#0f172a] dark:hover:bg-black/5"
          >
            <Twitter className="h-5 w-5" />
            Connect on X
          </a>
          <a
            href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-black/20 dark:text-[#0f172a] dark:hover:bg-black/5"
          >
            <Linkedin className="h-5 w-5" />
            DM on LinkedIn
          </a>
          <a
            href="https://wa.me/2348022093000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-black/20 dark:text-[#0f172a] dark:hover:bg-black/5"
          >
            <Phone className="h-5 w-5" />
            WhatsApp DM
          </a>
        </div>

        <a href="mailto:samuelsoaga@gmail.com" className="mx-auto inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-white/30 underline-offset-4 dark:text-[#0f172a] dark:decoration-black/30"><Mail aria-hidden="true" className="h-4 w-4" /> samuelsoaga@gmail.com</a>
      </div>
    </section>
  );
};
