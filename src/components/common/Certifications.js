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
    <div className="mb-10 w-full max-w-6xl">
      <h3 className={`${colors.text.primary} mb-8 text-2xl font-bold`}>
        Certifications
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="editorial-card flex items-start gap-4 rounded-[1.5rem] p-6 transition-all hover:border-[#a9c52a]"
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
