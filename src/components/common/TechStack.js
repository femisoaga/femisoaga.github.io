import { colors } from "./Colors";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFlask,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiJest,
  SiCypress,
  SiRedux,
  // SiZustand,
  SiGithubactions,
} from "react-icons/si";

export const TechStack = () => {
  const iconStyle = "text-3xl text-blue-400 transition-colors duration-300";

  const categories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React.js", icon: <FaReact className={iconStyle} /> },
        { name: "Next.js", icon: <SiNextdotjs className={iconStyle} /> },
        { name: "Vue.js", icon: <FaVuejs className={iconStyle} /> },
        { name: "Angular", icon: <FaAngular className={iconStyle} /> },
        { name: "TypeScript", icon: <SiTypescript className={iconStyle} /> },
        { name: "Tailwind", icon: <SiTailwindcss className={iconStyle} /> },
      ],
    },
    {
      title: "Backend & APIs",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs className={iconStyle} /> },
        { name: "GraphQL", icon: <SiGraphql className={iconStyle} /> },
        { name: "REST API", icon: <SiGraphql className={iconStyle} /> },
        { name: "MongoDB", icon: <SiMongodb className={iconStyle} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className={iconStyle} /> },
        { name: "Flask", icon: <SiFlask className={iconStyle} /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: <FaAws className={iconStyle} /> },
        { name: "Docker", icon: <FaDocker className={iconStyle} /> },
        { name: "Firebase", icon: <SiFirebase className={iconStyle} /> },
        { name: "Vercel", icon: <SiVercel className={iconStyle} /> },
        { name: "Netlify", icon: <SiNetlify className={iconStyle} /> },
        { name: "CI/CD", icon: <SiGithubactions className={iconStyle} /> },
      ],
    },
    {
      title: "Tools & Testing",
      technologies: [
        { name: "Jest", icon: <SiJest className={iconStyle} /> },
        { name: "Cypress", icon: <SiCypress className={iconStyle} /> },
        { name: "Git", icon: <FaGitAlt className={iconStyle} /> },
        { name: "Redux", icon: <SiRedux className={iconStyle} /> },
        // { name: "Zustand", icon: <SiZustand className={iconStyle} /> },
        { name: "Agile", icon: <SiCypress className={iconStyle} /> },
      ],
    },
  ];

  return (
    <>
      <h2
        className={`${colors.text.primary} text-3xl md:text-4xl font-bold text-center mb-12 mt-20`}
      >
        Technical Expertise
      </h2>
      <div
        className={`backdrop-blur-xl ${colors.bg.secondary} rounded-2xl p-8 border ${colors.border.default} shadow-xl w-full max-w-4xl`}
      >
        <p
          className={`${colors.text.accent} text-center text-lg font-semibold mb-4`}
        >
          Technologies I Work With
        </p>
        <br />
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3
                className={`${colors.text.secondary} text-sm mb-6 text-center`}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`backdrop-blur-xl ${colors.bg.secondary} rounded-xl p-4 border ${colors.border.default} shadow-lg transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center gap-2 hover:border-blue-400/50 hover:shadow-blue-500/20`}
                  >
                    <span className="text-blue-600 transition-transform duration-300 group-hover:scale-125 dark:text-blue-300">
                      {tech.icon}
                    </span>
                    <h4
                      className={`${colors.text.secondary} text-xs font-medium text-center group-hover:${colors.text.primary} transition-colors duration-300`}
                    >
                      {tech.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
