import { ProjectCard } from "./ProjectCard";

const sectionConfig = {
  featured: {
    eyebrow: "Core portfolio",
    title: "Featured work",
    description: "Complex products and client engagements that best represent my frontend ownership, product thinking and delivery range.",
  },
  selected: {
    eyebrow: "Additional work",
    title: "Selected projects",
    description: "Public products, client implementations and focused full-stack work that add breadth to my core experience.",
  },
  experiments: {
    eyebrow: "Practice in public",
    title: "Experiments & learning",
    description: "Smaller, honest explorations used to develop mobile, product and platform skills without presenting them as production systems.",
  },
  credentials: {
    eyebrow: "Professional development",
    title: "Credentials",
    description: "Verified certifications and structured cloud training.",
  },
};

const ProjectSection = ({ id, projects }) => {
  const config = sectionConfig[id];
  if (!projects.length || !config) return null;
  const compact = id === "experiments" || id === "credentials";

  return (
    <section className="space-y-7" aria-labelledby={`${id}-heading`}>
      <header className="max-w-3xl">
        <p className="eyebrow mb-3">{config.eyebrow}</p>
        <h2 id={`${id}-heading`} className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[#171a15] sm:text-4xl dark:text-[#f4f3eb]">{config.title}</h2>
        <p className="mt-3 leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">{config.description}</p>
      </header>
      <div className={`grid gap-5 ${id === "featured" ? "md:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3"}`}>
        {projects.map((project) => <ProjectCard key={project.id} project={project} compact={compact} />)}
      </div>
    </section>
  );
};

export const ProjectGrid = ({ projects = [], activeCategoryId = "all" }) => {
  const sectionIds = activeCategoryId === "all" ? ["featured", "selected", "experiments", "credentials"] : [activeCategoryId];

  return (
    <div className="space-y-24" aria-live="polite">
      {sectionIds.map((id) => (
        <ProjectSection key={id} id={id} projects={projects.filter((project) => project.categoryIds?.includes(id))} />
      ))}
    </div>
  );
};
