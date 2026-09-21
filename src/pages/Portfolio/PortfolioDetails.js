import { ArrowLeft, ArrowUpRight, CheckCircle2, LockKeyhole, Wrench } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { getProjectBySlug } from "../../data/projects";

const DetailList = ({ title, items, icon: Icon = CheckCircle2 }) => {
  if (!items?.length) return null;
  return (
    <section className="rounded-[1.5rem] border border-black/10 bg-[#faf9f3] p-6 dark:border-white/10 dark:bg-[#191c17] sm:p-8">
      <h2 className="font-heading text-2xl font-semibold text-[#171a15] dark:text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#62675c] dark:text-[#aeb5a5]"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#819616]" /><span>{item}</span></li>)}
      </ul>
    </section>
  );
};

const PortfolioDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <main className="relative px-5 pb-24 pt-36 sm:px-8">
      <article className="mx-auto max-w-6xl">
        <Link to="/portfolio" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#62675c] hover:text-[#171a15] dark:text-[#aeb5a5] dark:hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
        <header className="grid gap-8 border-b border-black/10 pb-14 dark:border-white/10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap gap-2"><span className="rounded-full bg-[#dfff4f] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#171a15]">{project.status}</span><span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] dark:border-white/10">{project.category}</span></div>
            <h1 className="font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#171a15] sm:text-7xl dark:text-white">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">{project.description}</p>
          </div>
          <div className="lg:text-right">
            {project.role && <><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#819616] dark:text-[#dfff4f]">My role</p><p className="mt-2 leading-relaxed text-[#43483f] dark:text-[#c5cbbd]">{project.role}</p></>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#171a15] px-5 py-3 text-sm font-bold text-white dark:bg-[#dfff4f] dark:text-[#171a15]">{project.actionLabel || "Visit live site"}<ArrowUpRight className="h-4 w-4" /></a>}
          </div>
        </header>

        {project.confidentialityNote && <div className="my-8 flex gap-3 rounded-2xl border border-[#9bb51d]/30 bg-[#dfff4f]/10 p-5 text-sm leading-relaxed text-[#56650e] dark:text-[#dfff4f]"><LockKeyhole className="h-5 w-5 shrink-0" /><p>{project.confidentialityNote}</p></div>}

        <div className="grid gap-5 py-10 lg:grid-cols-2">
          <DetailList title="Main workflows" items={project.features} />
          <DetailList title="Engineering decisions" items={project.decisions} />
          <DetailList title="Improvements and next steps" items={project.improvements} icon={Wrench} />
          {project.tags?.length > 0 && <section className="rounded-[1.5rem] border border-black/10 bg-[#faf9f3] p-6 dark:border-white/10 dark:bg-[#191c17] sm:p-8"><h2 className="font-heading text-2xl font-semibold text-[#171a15] dark:text-white">Technology stack</h2><ul className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold dark:border-white/10">{tag}</li>)}</ul></section>}
        </div>

        <footer className="rounded-[2rem] bg-[#171a15] p-8 text-white sm:p-12 dark:bg-[#dfff4f] dark:text-[#171a15]"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dfff4f] dark:text-[#56650e]">The record</p><h2 className="mt-4 font-heading text-3xl font-semibold text-white dark:text-[#171a15]">Verified scope, clearly presented.</h2><p className="mt-4 max-w-2xl text-white/65 dark:text-[#46502d]">This case study focuses on the implementation and responsibilities that can be shown accurately. Quantified outcomes can be added when supporting evidence is available and approved for public use.</p></footer>
      </article>
    </main>
  );
};

export default PortfolioDetails;
