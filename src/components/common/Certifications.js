import { Award } from "lucide-react";
import { colors } from "./Colors";

export const Certifications = () => {
  const certs = [
    {
      title: 'AWS Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2024-03-13',
      icon: Award
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023-10-19',
      icon: Award
    },
  ];

  return (
    <div className="w-full max-w-5xl mb-10">
      <h3 className={`${colors.text.primary} text-2xl font-bold text-center mb-8`}>
        Certifications
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className={`backdrop-blur-xl bg-slate-800/40 rounded-2xl p-6 border ${colors.border.default} shadow-xl flex items-start gap-4 hover:border-blue-500/50 transition-all`}
          >
            <cert.icon className={`w-10 h-10 ${colors.text.accent} flex-shrink-0`} />
            <div>
              <h4 className={`${colors.text.primary} font-semibold mb-1`}>{cert.title}</h4>
              <p className={`${colors.text.secondary} text-sm mb-1`}>{cert.issuer}</p>
              <p className={`${colors.text.accent} text-xs`}>Active: {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
