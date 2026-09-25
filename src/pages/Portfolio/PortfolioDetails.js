import { ArrowLeft, ArrowUpRight, CheckCircle2, LockKeyhole, Wrench } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { getProjectBySlug } from "../../data/projects";

const DetailList = ({ title, items, icon: Icon = CheckCircle2 }) => {
  if (!items?.length) return null;
  return (
    <section className="rounded-[1.5rem] border border-black/10 bg-[#ffffff] p-6 dark:border-white/10 dark:bg-[#101827] sm:p-8">
      <h2 className="font-heading text-2xl font-semibold text-[#0f172a] dark:text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#475569] dark:text-[#94a3b8]"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#1d4ed8] dark:text-blue-300" /><span>{item}</span></li>)}
      </ul>
    </section>
  );
};

const PortfolioDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <main id="main-content" className="relative px-5 pb-24 pt-36 sm:px-8">
      <article className="mx-auto max-w-6xl">
        <Link to="/portfolio" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#475569] hover:text-[#0f172a] dark:text-[#94a3b8] dark:hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
        <header className="grid gap-8 border-b border-black/10 pb-14 dark:border-white/10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap gap-2"><span className="rounded-full bg-[#93c5fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0f172a]">{project.status}</span><span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] dark:border-white/10">{project.category}</span></div>
            <h1 className="font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#0f172a] sm:text-7xl dark:text-white">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#475569] dark:text-[#94a3b8]">{project.description}</p>
          </div>
          <div className="lg:text-right">
            {project.role && <><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1d4ed8] dark:text-[#93c5fd]">My role</p><p className="mt-2 leading-relaxed text-[#334155] dark:text-[#cbd5e1]">{project.role}</p></>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-5 py-3 text-sm font-bold text-white dark:bg-[#93c5fd] dark:text-[#0f172a]">{project.actionLabel || "Visit live site"}<ArrowUpRight className="h-4 w-4" /></a>}
          </div>
        </header>

        {project.confidentialityNote && <div className="my-8 flex gap-3 rounded-2xl border border-[#2563eb]/30 bg-[#93c5fd]/10 p-5 text-sm leading-relaxed text-[#1e40af] dark:text-[#93c5fd]"><LockKeyhole className="h-5 w-5 shrink-0" /><p>{project.confidentialityNote}</p></div>}

        <div className="grid gap-5 py-10 lg:grid-cols-2">
          {project.problem && <section className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#101827] sm:p-8"><h2 className="text-2xl font-semibold">The product challenge</h2><p className="mt-5 leading-relaxed">{project.problem}</p></section>}
          <DetailList title="What I built" items={project.features} />
          <DetailList title="Engineering decisions" items={project.decisions} />
          <DetailList title="Improvements and next steps" items={project.improvements} icon={Wrench} />
          {project.tags?.length > 0 && <section className="rounded-[1.5rem] border border-black/10 bg-[#ffffff] p-6 dark:border-white/10 dark:bg-[#101827] sm:p-8"><h2 className="font-heading text-2xl font-semibold text-[#0f172a] dark:text-white">Technology stack</h2><ul className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold dark:border-white/10">{tag}</li>)}</ul></section>}
        </div>

        <footer className="border-t border-slate-300 pt-8 dark:border-slate-700">
          <Link to="/contact" className="hero-link">Discuss a similar product challenge <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </footer>
      </article>
    </main>
  );
};

export default PortfolioDetails;
