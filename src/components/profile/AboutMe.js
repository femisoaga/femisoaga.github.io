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
      <div className="space-y-5 text-base leading-8 text-[#62675c] dark:text-[#aeb5a5]">
        <p>I&apos;m a frontend-focused software engineer experienced in turning complex requirements into clear, reliable digital products. My strongest work is in React, Next.js and TypeScript, building enterprise dashboards, fintech workflows and responsive user experiences.</p>
        <p>Beyond the interface, I work with REST APIs, authentication, databases and cloud services, build mobile applications with React Native, and take products through deployment and production troubleshooting.</p>
        <p>My work spans banking platforms, investment products, employee-management workflows, public websites and independently developed products. I value interfaces that feel simple because the architecture, edge cases and operational states were handled deliberately.</p>
      </div>
    </div>

    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {disciplines.map(({ icon: Icon, number, title, copy }) => (
        <article key={title} className="group rounded-[1.6rem] border border-black/10 bg-[#f3f1e8] p-6 transition hover:-translate-y-1 hover:border-[#a9c52a] dark:border-white/10 dark:bg-[#11130f]">
          <div className="mb-10 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#dfff4f] text-[#171a15]"><Icon className="h-5 w-5" /></span>
            <span className="font-heading text-sm text-[#969b8d]">{number}</span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-[#171a15] dark:text-[#f4f3eb]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#62675c] dark:text-[#aeb5a5]">{copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default AboutMe;
