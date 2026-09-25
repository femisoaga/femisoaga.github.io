import { Award, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

export const Certifications = () => {
  const credentials = projects.filter((project) => project.categoryIds.includes("credentials"));
  return (
    <section className="mb-10 w-full max-w-6xl" aria-labelledby="credentials-title">
      <p className="eyebrow mb-5">Continuous learning</p>
      <h2 id="credentials-title" className="section-title mb-8">Credentials</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {credentials.map((credential) => (
          <article key={credential.id} className="editorial-card flex h-full flex-col rounded-[1.5rem] p-6 transition-all card-hover">
            <Award aria-hidden="true" className="mb-8 h-9 w-9 text-[#1d4ed8] dark:text-[#93c5fd]" />
            <h3 className="text-lg font-semibold">{credential.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#475569] dark:text-[#94a3b8]">{credential.description}</p>
            {credential.liveUrl && <a href={credential.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1d4ed8] hover:underline dark:text-[#93c5fd]">Verify credential <ExternalLink aria-hidden="true" className="h-4 w-4" /></a>}
          </article>
        ))}
      </div>
    </section>
  );
};
