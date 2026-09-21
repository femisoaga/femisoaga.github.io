import { experienceEntries } from "../../data/experience";

export const Experience = () => (
  <section id="work" className="w-full max-w-6xl">
    <div className="mb-10 mt-28 max-w-3xl"><p className="eyebrow mb-5">Experience</p><h2 className="section-title">Frontend leadership across real products.</h2><p className="mt-5 text-lg leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">Enterprise fintech, employee workflows, client delivery and cross-functional implementation—from requirements to production.</p></div>
    <div className="space-y-5">
      {experienceEntries.map((entry) => (
        <article key={`${entry.company}-${entry.dates}`} className="editorial-card grid gap-6 rounded-[1.75rem] p-6 transition hover:border-[#a9c52a] md:grid-cols-[0.38fr_1fr] md:p-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#819616] dark:text-[#dfff4f]">{entry.dates}</p><h3 className="mt-3 font-heading text-2xl font-semibold text-[#171a15] dark:text-white">{entry.role}</h3><p className="mt-1 font-bold text-[#62675c] dark:text-[#aeb5a5]">{entry.company}</p></div>
          <div><p className="leading-relaxed text-[#43483f] dark:text-[#c3c9bc]">{entry.summary}</p><ul className="mt-5 space-y-2">{entry.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[#62675c] dark:text-[#aeb5a5]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9bb51d]" />{bullet}</li>)}</ul><ul className="mt-6 flex flex-wrap gap-2" aria-label={`${entry.company} technologies`}>{entry.tech.map((tech) => <li key={tech} className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] dark:border-white/10">{tech}</li>)}</ul></div>
        </article>
      ))}
    </div>
  </section>
);
