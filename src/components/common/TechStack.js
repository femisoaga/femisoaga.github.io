const capabilityGroups = [
  { title: "Frontend systems", description: "The primary layer of my work: typed product interfaces, interaction and reusable UI architecture.", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI", "Accessible UI", "Design systems", "Frontend performance"] },
  { title: "Application architecture", description: "State, validation and integration patterns for complex role-aware products.", skills: ["TanStack Query", "Zustand", "Redux", "React Context", "React Hook Form", "Zod", "REST APIs", "GraphQL", "RBAC", "Enterprise workflows"] },
  { title: "Mobile products", description: "Growing cross-platform capability grounded in working Expo projects.", skills: ["React Native", "Expo", "Expo Router", "AsyncStorage", "Notifications", "Native sharing", "Device APIs"] },
  { title: "Backend & data", description: "Supporting capabilities for complete product foundations and secure integrations.", skills: ["Node.js", "Express", "ASP.NET Core", "C#", "Authentication", "Firebase Auth", "Firestore", "PostgreSQL", "Prisma", "Server validation"] },
  { title: "Cloud & production delivery", description: "Practical deployment and infrastructure work across modern and shared-hosting environments.", skills: ["AWS", "Docker", "GitHub Actions", "GitHub Pages", "Vercel", "Netlify", "Namecheap", "cPanel", "DNS & SSL", "SMTP", "Production troubleshooting"] },
  { title: "Platforms & operational UI", description: "Project-based tools and patterns for content, commerce and data-heavy products.", skills: ["WordPress", "WooCommerce", "Paystack", "Shipping integrations", "Tables", "Search & filtering", "Pagination", "CSV exports", "Charts", "Approval workflows", "Audit trails"] },
  { title: "Testing & delivery practice", description: "Engineering habits that support safer change and team delivery.", skills: ["Jest", "Cypress", "React Testing Library", "Git", "Code review", "Agile delivery", "CI/CD"] },
];

export const TechStack = () => (
  <section className="w-full max-w-6xl" aria-labelledby="skills-title">
    <p className="eyebrow mb-5">Working toolkit</p>
    <h2 id="skills-title" className="section-title mb-5">Capabilities, not a logo wall.</h2>
    <p className="mb-10 max-w-2xl text-[#62675c] dark:text-[#aeb5a5]">Tools are selected around the product and team. These are the technologies and practices I can support with current project evidence.</p>
    <div className="grid gap-5 md:grid-cols-2">
      {capabilityGroups.map((group) => (
        <article key={group.title} className="editorial-card rounded-[1.75rem] p-7 sm:p-8">
          <h3 className="text-xl font-semibold">{group.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">{group.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
            {group.skills.map((skill) => <li key={skill} className="rounded-full border border-black/10 bg-[#f3f1e8] px-3 py-1.5 text-xs font-semibold text-[#62675c] dark:border-white/10 dark:bg-[#11130f] dark:text-[#b7beae]">{skill}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
