const experienceEntries = [
  {
    company: "Tech Citadel",
    role: "Frontend Developer",
    dates: "September 2024 – January 2025",
    bullets: [
      "Built a reusable component library that standardized product UI patterns.",
      "Improved core landing page LCP by 32% through code-splitting and critical CSS.",
      "Partnered with design on a systemized token architecture across platforms.",
    ],
  },
  {
    company: "Freelance",
    role: "Product-Focused Frontend Engineer",
    dates: "2024 – Present · Ongoing",
    bullets: [
      "Delivered responsive sites and web apps tuned for multiple breakpoints.",
      "Operationalized component-driven workflows with Storybook and visual diffs.",
      "Led performance-first builds with Core Web Vitals monitoring baked in.",
    ],
  },
];

export const ExperienceTimeline = () => {
  return (
    <section aria-label="Experience timeline" className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.45em] text-blue-400/70">
          Experience
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Frontend-led impact
        </h2>
      </header>

      <ol className="relative space-y-10">
        <span className="absolute left-3 top-0 h-full w-px bg-blue-400/60 dark:bg-blue-600/40" />

        {experienceEntries.map((entry) => (
          <li
            key={entry.company}
            className="relative ml-10 rounded-2xl border border-blue-200/40 bg-white/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-xl dark:border-blue-500/30 dark:bg-slate-900/70"
          >
            <span className="absolute -left-10 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/50 bg-blue-600 text-xs font-semibold text-white shadow-lg shadow-blue-500/40">
              {entry.company.charAt(0)}
            </span>

            <div className="flex flex-col gap-3 text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {entry.company}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-300">
                    {entry.role}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300 md:mt-0">
                  {entry.dates}
                </p>
              </div>

              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
