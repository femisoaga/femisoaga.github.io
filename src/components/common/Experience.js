import { colors } from "./Colors";

export const Experience = () => {
  const experiences = [
    {
      company: 'UniswitchNg',
      role: 'Frontend Engineer',
      period: 'Jan 2023 – Present',
      achievements: [
        'Spearheaded Sarepay Checkout - secure payment gateway processing 1000s of monthly transactions',
        'Enhanced HRDesk platform performance by 40%, boosting user retention by 25%',
        'Integrated GraphQL APIs, reducing query response times by 35%',
      ],
      tech: 'React.js • Vue.js • GraphQL • AWS'
    },
    {
      company: 'Bincom Dev Center',
      role: 'Frontend Developer',
      period: 'Jan 2021 – Dec 2022',
      achievements: [
        'Developed enterprise mobile apps with Ionic + Angular, improving engagement by 20%',
        'Built responsive cross-platform solutions optimized for mobile-first users',
        'Mentored junior developers and conducted code reviews',
      ],
      tech: 'Ionic • Angular • TypeScript • REST APIs'
    },
  ];

  return (
    <div id="work" className="w-full max-w-5xl">
      <h2 className={`${colors.text.primary} text-3xl md:text-4xl font-bold text-center mb-12 mt-20`}>
        Proven Track Record
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`backdrop-blur-xl ${colors.bg.secondary} rounded-2xl p-6 md:p-8 border ${colors.border.default} shadow-xl transition-all duration-300 hover:border-blue-400/50`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className={`${colors.text.primary} text-2xl font-bold`}>{exp.role}</h3>
                <p className={`${colors.text.accent} text-lg`}>{exp.company}</p>
              </div>
              <p className={`${colors.text.secondary} text-sm mt-2 md:mt-0`}>{exp.period}</p>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className={`${colors.text.secondary} text-sm flex gap-2`}>
                  <span className={`${colors.text.accent} mt-1`}>▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <p className={`${colors.text.accent} text-xs font-mono`}>{exp.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
