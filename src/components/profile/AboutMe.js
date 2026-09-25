import { Cloud, Code2, Layers3, ServerCog, Smartphone } from "lucide-react";

const disciplines = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend engineering",
    copy: "My primary strength: clear, responsive interfaces, complex workflows and reusable systems built with React, Next.js and TypeScript.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Product architecture",
    copy: "Enterprise dashboards, role-based journeys, data-heavy tables, approval flows, forms and operational states designed as coherent products.",
  },
  {
    icon: ServerCog,
    number: "03",
    title: "Backend systems",
    copy: "Practical full-stack delivery with APIs, authentication, validation, databases and server-side integration when a product needs it.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Mobile products",
    copy: "Growing React Native and Expo capability through marketplace, local-first and device-integrated mobile product work.",
  },
  {
    icon: Cloud,
    number: "05",
    title: "Production delivery",
    copy: "Cloud, hosting, DNS, SSL, SMTP and deployment troubleshooting that helps move products beyond localhost.",
  },
];

const AboutMe = () => (
  <section>
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
      <div>
        <p className="eyebrow mb-5">The short version</p>
        <h2 className="section-title">Frontend depth, with the range to ship.</h2>
      </div>
      <div className="space-y-5 text-base leading-8 text-[#475569] dark:text-[#94a3b8]">
        <p>I’m Oluwafemi, a Product Engineer. I start by understanding who will use a product, what they need to accomplish, and how the business works. My strongest tools are React, Next.js and TypeScript; my focus is making complex workflows feel clear.</p>
        <p>Beyond the interface, I work with REST APIs, authentication, databases and cloud services, build mobile applications with React Native, and take products through deployment and production troubleshooting.</p>
        <p>I care about usability, accessibility, performance and maintainability. I balance delivery speed with technical constraints, work through edge cases, and stay involved beyond the hand-off to help the product work reliably in practice.</p>
      </div>
    </div>

    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {disciplines.map(({ icon: Icon, number, title, copy }) => (
        <article key={title} className="group rounded-[1.6rem] border border-black/10 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:border-[#3b82f6] dark:border-white/10 dark:bg-[#080d18]">
          <div className="mb-10 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#93c5fd] text-[#0f172a]"><Icon className="h-5 w-5" /></span>
            <span className="font-heading text-sm text-[#64748b] dark:text-slate-400">{number}</span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-[#0f172a] dark:text-[#f8fafc]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-[#94a3b8]">{copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default AboutMe;
