// import { Code2, Shield, Zap } from "lucide-react";
// import { colors } from "./Colors";

// export const Services = () => {
//   const services = [
//     {
//       icon: Code2,
//       title: 'Web Application Development',
//       description: 'Building modern, scalable web applications from concept to deployment. Expert in React, Vue, Angular, and Next.js for any industry or use case.',
//       tech: 'React • Vue • Angular • Next.js'
//     },
//     {
//       icon: Zap,
//       title: 'Performance & Optimization',
//       description: 'Transform slow applications into lightning-fast experiences. Code splitting, lazy loading, and architecture optimization that delivers measurable results.',
//       tech: 'Redux • Zustand • Jest • Lighthouse'
//     },
//     {
//       icon: Shield,
//       title: 'API Integration & Backend',
//       description: 'Seamless integration of REST and GraphQL APIs. Full-stack capabilities with Node.js, AWS cloud services, and secure data handling.',
//       tech: 'GraphQL • REST • Node.js • AWS'
//     },
//   ];

//   return (
//     <div id="services" className="w-full max-w-6xl">
//       <h2 className={`${colors.text.primary} text-3xl md:text-4xl font-bold text-center mb-4 mt-20`}>
//         What I Can Do For You
//       </h2>
//       <p className={`${colors.text.secondary} text-center mb-12 max-w-2xl mx-auto`}>
//         Versatile full-stack development expertise across industries—from startups to enterprise applications
//       </p>
//       <div className="grid md:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`backdrop-blur-xl bg-slate-800/40 rounded-2xl p-6 border ${colors.border.default} shadow-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group`}
//           >
//             <div className="relative mb-4 h-14 w-14">
//               <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 transition-opacity duration-300" />
//               <service.icon className={`relative z-10 h-12 w-12 ${colors.text.accent} transition-transform duration-500 group-hover:rotate-[360deg]`} />
//             </div>
//             <h3 className={`${colors.text.primary} text-xl font-semibold mb-3`}>{service.title}</h3>
//             <p className={`${colors.text.secondary} mb-4 text-sm leading-relaxed`}>{service.description}</p>
//             <p className={`${colors.text.accent} text-xs font-mono`}>{service.tech}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import { Cpu, Rocket, Workflow } from "lucide-react";
import { colors } from "./Colors";

export const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Web Application Development',
      description: 'Designing and shipping polished web experiences end-to-end. From discovery and UX to production-ready frontends that scale with your roadmap.',
      tech: 'React • Next.js • Tailwind • Design Systems'
    },
    {
      icon: Cpu,
      title: 'Cloud & DevOps Automation',
      description: 'Automating infrastructure and delivery pipelines so teams ship faster with confidence. IaC, CI/CD, observability, and cloud-native best practices.',
      tech: 'AWS • Terraform • Docker • GitHub Actions'
    },
    {
      icon: Workflow,
      title: 'API Integration & Backend',
      description: 'Designing resilient APIs and orchestrating microservices with security and performance in mind. Future-proof foundations for product growth.',
      tech: 'Node.js • GraphQL • REST • Serverless'
    },
  ];

  return (
    <div id="services" className="w-full max-w-6xl">
      <h2 className={`${colors.text.primary} text-3xl md:text-4xl font-bold text-center mb-4 mt-20`}>
        What I Can Do For You
      </h2>
      <p className={`${colors.text.secondary} text-center mb-12 max-w-2xl mx-auto`}>
        Versatile full-stack development expertise across industries—from startups to enterprise applications
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`backdrop-blur-xl ${colors.bg.secondary} rounded-2xl p-6 border ${colors.border.default} shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-400/50 group`}
          >
            <div className="relative mb-4 h-14 w-14">
              <div className="absolute inset-0 rounded-full bg-blue-200/40 opacity-0 transition-opacity duration-300 dark:bg-blue-500/10" />
              <service.icon className={`relative z-10 h-12 w-12 ${colors.text.accent} transition-transform duration-500 group-hover:rotate-[360deg]`} />
            </div>
            <h3 className={`${colors.text.primary} text-xl font-semibold mb-3`}>{service.title}</h3>
            <p className={`${colors.text.secondary} mb-4 text-sm leading-relaxed`}>{service.description}</p>
            <p className={`${colors.text.accent} text-xs font-mono`}>{service.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
