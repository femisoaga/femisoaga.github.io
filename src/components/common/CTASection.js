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
      <FrostedPanel className="w-full space-y-8 p-8 text-center sm:p-12">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="ghost"
            className="border border-blue-300/40 bg-blue-200/40 text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100 dark:hover:bg-blue-500/20"
            onClick={handleViewWork}
          >
            View My Work
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <header className="space-y-4 my-6">
          <h2 className={`${colors.text.primary} text-3xl font-bold md:text-4xl`}>
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className={`${colors.text.secondary} mx-auto max-w-2xl text-base md:text-lg`}>
            X DM is recommended — I respond quickest there. Still, I&apos;m happy to hop on a call or answer a good old-fashioned email.
          </p>
        </header>

        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://cal.com/oluwafemi-soaga-tul2cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-200/40 px-5 py-3 text-base text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
          >
            <Calendar className="h-5 w-5" />
            Book a meet
          </a>
          <a
            href="https://twitter.com/messages/compose?recipient_id=femisoaga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-200/40 px-5 py-3 text-base text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
          >
            <Twitter className="h-5 w-5" />
            DM on X
          </a>
          <a
            href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-200/40 px-5 py-3 text-base text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
          >
            <Linkedin className="h-5 w-5" />
            DM on LinkedIn
          </a>
          <a
            href="https://wa.me/2348022093000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-200/40 px-5 py-3 text-base text-emerald-700 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-300/40 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-100 dark:hover:bg-emerald-500/15"
          >
            <Phone className="h-5 w-5" />
            WhatsApp DM
          </a>
        </div>

        <div className="mx-auto w-full max-w-xl text-left flex justify-center">
          <p className={`${colors.text.secondary} mb-3 flex items-center justify-center gap-2 text-sm sm:justify-start`}>
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
