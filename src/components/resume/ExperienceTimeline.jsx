import { experienceEntries } from "../../data/experience";

export const ExperienceTimeline = () => (
  <section aria-label="Professional experience" className="space-y-8">
    <header><p className="eyebrow mb-3">Professional experience</p><h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Frontend-led product delivery</h2></header>
    <ol className="relative space-y-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-blue-200 dark:before:bg-white/15">
      {experienceEntries.map((entry) => (
        <li key={`${entry.company}-${entry.dates}`} className="relative ml-10 rounded-[1.5rem] border border-black/10 bg-[#ffffff] p-6 dark:border-white/10 dark:bg-[#101827]">
          <span aria-hidden="true" className="absolute -left-10 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-[#93c5fd] text-xs font-bold text-[#0f172a]">{entry.company.charAt(0)}</span>
          <div className="flex flex-col gap-5 text-left"><div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between"><div><h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{entry.company}</h3><p className="text-sm font-bold text-[#1d4ed8] dark:text-[#93c5fd]">{entry.role}</p></div><p className="text-sm text-slate-500 dark:text-slate-300">{entry.dates}</p></div><p className="text-sm leading-relaxed text-slate-600 dark:text-slate-200">{entry.summary}</p><ul className="space-y-2 text-sm text-slate-600 dark:text-slate-200">{entry.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" /><span>{bullet}</span></li>)}</ul></div>
        </li>
      ))}
    </ol>
  </section>
);
