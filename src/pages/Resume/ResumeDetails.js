import React from "react";
import { MdOutlineLinearScale } from "react-icons/md";

import resumePdf from "../../assets/OluwafemiResume.pdf";
import { ExperienceTimeline } from "../../components/resume/ExperienceTimeline";

const ResumeDetails = () => {
  return (
    <section className="relative mb-8 overflow-hidden rounded-[1.75rem] p-3 sm:p-8">
      <div className="relative z-10 space-y-14">
        <header className="space-y-4">
          <div className="flex items-center gap-3 text-[#1d4ed8] dark:text-[#93c5fd]">
            <MdOutlineLinearScale className="h-10 w-10" />
            <span className="text-sm uppercase tracking-[0.4em]">
              Resume
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Crafting resilient products with frontend as the driver.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            A closer look at the systems and teams that shaped my approach to
            frontend architecture, product delivery and cross-functional collaboration.
          </p>
        </header>

        <a href={resumePdf} download="Oluwafemi_Soaga_Frontend_Engineer_CV.pdf" className="hero-link hero-link-primary">Download CV</a>
        <ExperienceTimeline />

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/10 bg-[#f8fafc] p-6 dark:border-white/10 dark:bg-[#080d18]">
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

          <div className="rounded-[1.5rem] border border-black/10 bg-[#f8fafc] p-6 dark:border-white/10 dark:bg-[#080d18]">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Core Skillset
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {[
                "React / Next.js",
                "TypeScript & JavaScript",
                "Design Systems",
                "Tailwind CSS",
                "Accessible UI",
                "TanStack Query & Zustand",
                "React Native & Expo",
                "Node.js & Express",
                "ASP.NET Core & Firebase",
                "AWS & CI/CD",
              ].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-[#ffffff] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#475569] dark:border-white/10 dark:bg-[#101827] dark:text-[#cbd5e1]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
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
