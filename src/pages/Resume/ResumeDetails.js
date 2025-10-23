import React from "react";
import { MdOutlineLinearScale } from "react-icons/md";

import backgroundSVG from "../../assets/bg.png";
import { ExperienceTimeline } from "../../components/resume/ExperienceTimeline";

const ResumeDetails = () => {
  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl border border-blue-200/40 bg-white/80 p-6 shadow-soft sm:p-16 dark:border-blue-500/30 dark:bg-slate-900/70">
      <div
        className="pointer-events-none absolute inset-0 bg-contain bg-right-top bg-no-repeat opacity-20 dark:opacity-15"
        style={{ backgroundImage: `url(${backgroundSVG})` }}
      />
      <div className="relative z-10 space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-3 text-primary-500">
            <MdOutlineLinearScale className="h-10 w-10" />
            <span className="text-sm uppercase tracking-[0.4em]">
              Resume
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Crafting resilient products with frontend as the driver.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            A closer look at the systems, teams, and outcomes that have shaped
            my approach across UI engineering, performance optimisation, and
            cross-functional collaboration.
          </p>
        </header>

        <ExperienceTimeline />

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200/40 bg-white/70 p-6 dark:border-blue-500/20 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Education
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  Computer Science & Education
                </p>
                <p>University of Nigeria, Nsukka · 2016 – 2020</p>
              </li>
              <li>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  Secondary School Certificate
                </p>
                <p>Mayflower Senior Secondary School, Ikenne · 2005 – 2011</p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-200/40 bg-white/70 p-6 dark:border-blue-500/20 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Core Skillset
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {[
                "React / Next.js",
                "TypeScript & JavaScript",
                "Design Systems",
                "Tailwind CSS",
                "Accessibility (WCAG)",
                "Node.js & Express",
                "SQL & NoSQL",
                "CI/CD & GitHub Actions",
              ].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-blue-200/40 bg-blue-50/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResumeDetails;
