import { experienceEntries } from "../../data/experience";

export const Experience = () => (
  <section id="work" className="w-full max-w-6xl">
    <div className="mb-10 max-w-3xl"><p className="eyebrow mb-5">Experience</p><h2 className="section-title">Ownership across real products.</h2><p className="mt-5 text-lg leading-relaxed text-[#475569] dark:text-[#94a3b8]">Enterprise fintech, employee workflows, client delivery and cross-functional implementation—from requirements to production.</p></div>
    <div className="space-y-5">
      {experienceEntries.map((entry) => (
        <article key={`${entry.company}-${entry.dates}`} className="editorial-card grid gap-6 rounded-[1.75rem] p-6 transition hover:border-[#3b82f6] md:grid-cols-[0.38fr_1fr] md:p-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#1d4ed8] dark:text-[#93c5fd]">{entry.dates}</p><h3 className="mt-3 font-heading text-2xl font-semibold text-[#0f172a] dark:text-white">{entry.role}</h3><p className="mt-1 font-bold text-[#475569] dark:text-[#94a3b8]">{entry.company}</p></div>
          <div><p className="leading-relaxed text-[#334155] dark:text-[#cbd5e1]">{entry.summary}</p><ul className="mt-5 space-y-2">{entry.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[#475569] dark:text-[#94a3b8]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />{bullet}</li>)}</ul><ul className="mt-6 flex flex-wrap gap-2" aria-label={`${entry.company} technologies`}>{entry.tech.map((tech) => <li key={tech} className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] dark:border-white/10">{tech}</li>)}</ul></div>
        </article>
      ))}
    </div>
  </section>
);
