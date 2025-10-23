import React from "react";
import { MdOutlineLinearScale } from "react-icons/md";

import alxLogo from "../../assets/Alx-logo-black.svg";
import sarepay from "../../assets/sarepay.png";
import kekere from "../../assets/kekere.png";
import billerhq from "../../assets/billerhq.png";
import uniswitch from "../../assets/uniswitch.png";
import cloudPractionerCertificateBadge from "../../assets/cloudpractioner badge.png";
import solutionsArchitectCertificateBadge from "../../assets/solutions architect badge.png";
import backgroundSVG from "../../assets/bg.png";

const PortfolioDetails = () => {
  const handleCloudBadgeVerification = () => {
    window.open(
      "https://www.credly.com/badges/0148e939-c4d0-4aa2-8451-c1c0d027ae35",
      "_blank"
    );
  };

  const handleSolutionsBadgeVerification = () => {
    window.open(
      "https://www.credly.com/badges/7a37ac9b-3286-4a18-9928-efd86f1b19d8",
      "_blank"
    );
  };

  const handleSarepayClick = () => window.open("https://sarepay.com", "_blank");
  const handleKekereClick = () => window.open("https://kekere.com", "_blank");
  const handleUniswitchClick = () => window.open("https://www.uniswitchng.com", "_blank");
  const handleBillerhqClick = () => window.open("https://billerhq.com", "_blank");

  const projects = [
    {
      title: "Sarepay - Payment Platform",
      image: sarepay,
      tech: "React.js · Node.js · Typescript",
      onVisit: handleSarepayClick,
      onLearn: handleSarepayClick,
    },
    {
      title: "Uniswitch Website",
      image: uniswitch,
      tech: "React.js · Payment Gateway · Microservices",
      onVisit: handleUniswitchClick,
      onLearn: handleUniswitchClick,
    },
    {
      title: "Kekere - Easily Invest in Rental Homes",
      image: kekere,
      tech: "Next.js · Node.js",
      onVisit: handleKekereClick,
      onLearn: handleKekereClick,
    },
    {
      title: "BillerHQ - Bill Management",
      image: billerhq,
      tech: "React.js · Billing Infrastructure",
      onVisit: handleBillerhqClick,
      onLearn: handleBillerhqClick,
    },
  ];

  const credentials = [
    {
      title: "AWS Certified Cloud Practitioner",
      image: cloudPractionerCertificateBadge,
      description:
        "Validates foundational understanding of AWS Cloud, services, and terminology.",
      onVerify: handleCloudBadgeVerification,
      infoLink: "https://www.coursera.org/articles/aws-cloud-practitioner",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      image: solutionsArchitectCertificateBadge,
      description:
        "Demonstrates comprehensive knowledge of AWS architecture and best practices.",
      onVerify: handleSolutionsBadgeVerification,
      infoLink: "https://www.coursera.org/articles/solutions-architect",
    },
    {
      title: "ALX - AWS Cloud Computing",
      image: alxLogo,
      description: "Completed the ALX AWS cloud computing specialization.",
      onVerify: handleCloudBadgeVerification,
      infoLink: "https://www.coursera.org/articles/solutions-architect",
    },
    {
      title: "ALX Foundation",
      image: alxLogo,
      description: "Completed the ALX foundation program.",
      onVerify: handleCloudBadgeVerification,
      infoLink: "https://www.coursera.org/articles/solutions-architect",
    },
  ];

  return (
    <section className="relative overflow-hidden p-6 sm:p-10">
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat bg-right-top bg-contain opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${backgroundSVG})` }}
      />
      <div className="relative z-10 space-y-8">
        <header className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-100">Portfolio</h2>
          <div className="mt-3 flex justify-center md:justify-start text-slate-400">
            <MdOutlineLinearScale className="h-10 w-10" />
          </div>
        </header>

        <div className="space-y-10">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/40 transition hover:border-blue-400/40 hover:shadow-blue-500/20"
                onClick={project.onVisit}
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-72 w-full object-cover" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="mb-2 text-lg font-semibold text-white">Tech Stack</h3>
                    <p className="text-sm text-white/80">{project.tech}</p>
                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        className="btn-primary text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          project.onVisit?.();
                        }}
                      >
                        Visit Site
                      </button>
                      <button
                        type="button"
                        className="btn-secondary text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          project.onLearn?.();
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-center">
                  <h4 className="text-lg font-semibold text-slate-100">{project.title}</h4>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {credentials.map((credential) => (
              <article
                key={credential.title}
                className="overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/40 transition hover:border-blue-400/40 hover:shadow-blue-500/20"
              >
                <div className="relative overflow-hidden">
                  <img src={credential.image} alt={credential.title} className="h-72 w-full object-cover" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent p-6 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-sm text-white/80 text-center">{credential.description}</p>
                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        className="btn-primary text-xs"
                        onClick={credential.onVerify}
                      >
                        Verify
                      </button>
                      <a
                        href={credential.infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs text-center"
                      >
                        Info
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-center">
                  <h4 className="text-lg font-semibold text-slate-100">{credential.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
