import { CloudCog, PanelsTopLeft, ServerCog, Smartphone, Workflow, Wrench } from "lucide-react";

const services = [
  { icon: PanelsTopLeft, title: "Frontend product engineering", description: "Accessible, responsive interfaces for complex products, from discovery and interaction design through production delivery.", tech: "React · Next.js · TypeScript · Tailwind CSS" },
  { icon: Workflow, title: "Enterprise workflow systems", description: "Role-aware dashboards, approval journeys, data tables and operational tools that make complicated work easier to complete.", tech: "RBAC · Forms · Tables · Design systems" },
  { icon: Smartphone, title: "Mobile product development", description: "Cross-platform mobile experiences with native navigation, local persistence and clear service boundaries.", tech: "React Native · Expo · Expo Router" },
  { icon: ServerCog, title: "Full-stack product foundations", description: "Practical backend and data work for scoped products, prototypes and teams that need one engineer across the stack.", tech: "Node.js · ASP.NET Core · Firebase · SQL" },
  { icon: Wrench, title: "Website & WordPress delivery", description: "Public websites and content platforms with thoughtful information architecture, commerce integrations and responsive presentation.", tech: "WordPress · WooCommerce · Paystack · Shipping" },
  { icon: CloudCog, title: "Production delivery", description: "Deployment, CI/CD, hosting and cloud support that carries a polished interface safely into production.", tech: "AWS · Docker · GitHub Actions · cPanel" },
];

export const Services = () => (
  <section id="services" className="w-full max-w-6xl scroll-mt-32" aria-labelledby="services-title">
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-5">Capabilities</p>
      <h2 id="services-title" className="section-title">Engineering around the product.</h2>
      <p className="mt-5 max-w-2xl text-lg text-[#475569] dark:text-[#94a3b8]">For product and frontend engineering roles, or selected development collaborations, I bring practical ownership across these areas.</p>
    </div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <article key={service.title} className="editorial-card group relative overflow-hidden rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]">
          <span className="absolute right-6 top-5 font-heading text-sm text-[#64748b] dark:text-slate-400">0{index + 1}</span>
          <div className="mb-9 grid h-12 w-12 place-items-center rounded-full bg-[#93c5fd] text-[#0f172a]"><service.icon aria-hidden="true" className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" /></div>
          <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
          <p className="mb-8 text-sm leading-relaxed text-[#475569] dark:text-[#94a3b8]">{service.description}</p>
          <p className="border-t border-black/10 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-[#1d4ed8] dark:border-white/10 dark:text-[#93c5fd]">{service.tech}</p>
        </article>
      ))}
    </div>
  </section>
);
