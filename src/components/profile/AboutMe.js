import { Cloud, Code2, ServerCog } from "lucide-react";

const disciplines = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend engineering",
    copy: "I turn product intent into expressive, accessible interfaces with thoughtful interaction, strong performance, and a component system that scales.",
  },
  {
    icon: Cloud,
    number: "02",
    title: "Cloud & DevOps",
    copy: "I design secure cloud foundations and automate delivery with CI/CD, infrastructure as code, containers, and pragmatic observability.",
  },
  {
    icon: ServerCog,
    number: "03",
    title: "Backend systems",
    copy: "I build dependable server-side logic and APIs with scalability, security, and maintainability considered from day one.",
  },
];

const AboutMe = () => (
  <section>
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
      <div>
        <p className="eyebrow mb-5">The short version</p>
        <h2 className="section-title">Engineer, educator, lifelong learner.</h2>
      </div>
      <div className="space-y-5 text-base leading-8 text-[#62675c] dark:text-[#aeb5a5]">
        <p>I&apos;m Samuel Oluwafemi Soaga, a multidisciplinary engineer working across frontend, backend, and cloud infrastructure. My Computer Science and Education background shapes how I work: break down complexity, communicate clearly, and build systems people can actually understand.</p>
        <p>Over the last four years, I&apos;ve worked with React, Angular, Vue, Node.js, AWS, Terraform, Docker, and Kubernetes—helping ideas move from early prototypes into resilient production software.</p>
        <p>I&apos;m especially interested in work where thoughtful product design meets strong engineering: products that feel simple on the surface because the hard systems thinking happened underneath.</p>
      </div>
    </div>

    <div className="mt-16 grid gap-5 md:grid-cols-3">
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
