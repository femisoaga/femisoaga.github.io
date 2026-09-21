import {
  ArrowRight,
  Calendar,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import FrostedPanel from "../layout/FrostedPanel";
import { Button } from "./Button";
import { colors } from "./Colors";

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
            X DM is recommended — I respond quickest there. Still, I&apos;m happy to hop on a call or answer a good old-fashioned email.
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

        <div className="mx-auto w-full max-w-xl text-left flex justify-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm text-white/60 dark:text-[#505b35] sm:justify-start">
            <MessageSquare className="h-4 w-4 text-blue-400" />
            Prefer email? Drop a message below.
            <a
              href="mailto:samuelsoaga@gmail.com"
              className={`${colors.text.secondary} transition-colors hover:${colors.text.primary}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          </p>
          {/* <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="cta-email" className={`${colors.text.secondary} text-sm font-medium`}>
                Your Email
              </label>
              <input
                id="cta-email"
                type="email"
                placeholder="johndoe69@xyz.com"
                className="w-full rounded-xl border border-slate-300/60 bg-white/85 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:border-blue-500/20 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cta-message" className={`${colors.text.secondary} text-sm font-medium`}>
                Your message
              </label>
              <textarea
                id="cta-message"
                rows={4}
                placeholder="Type your message here."
                className="w-full rounded-xl border border-slate-300/60 bg-white/85 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:border-blue-500/20 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
            <Button variant="cta" type="submit" className="flex w-full items-center justify-center gap-2 text-sm md:text-base">
              <Mail className="h-4 w-4" />
              Send message
            </Button>
          </form> */}
        </div>
      </FrostedPanel>
    </section>
  );
};
