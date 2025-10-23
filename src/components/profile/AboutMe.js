import React from "react";
import { GrCloudSoftware } from "react-icons/gr";
import { FaMixcloud } from "react-icons/fa";
import { GrPerformance } from "react-icons/gr";
import { MdOutlineLinearScale } from "react-icons/md";

import backgroundSVG from "../../assets/bg.png";
import { colors } from "../common/Colors";

const AboutMe = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat bg-right-top bg-contain opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${backgroundSVG})` }}
      />
      <div className="relative z-10">
      <header className="mb-6">
      <h2 className={`${colors.text.primary} text-3xl font-bold text-slate-100`}>About Me</h2>
        <div className="mb-4 text-slate-400">
          <MdOutlineLinearScale className="h-12 w-12" />
        </div>
      </header>
      <article className="mb-8 mt-2 space-y-3 text-slate-300">
        <p>
          Samuel Oluwafemi Soaga is a versatile professional excelling in
          frontend engineering, backend development, and DevOps. With four years
          of coding experience and a degree in Computer Science and Education
          from the University of Nigeria Nsukka, Femi seamlessly integrates
          technical prowess with a passion for education.
        </p>
        <p>
          Mastering frontend technologies like HTML, CSS, JavaScript, and
          frameworks such as React, Angular, and Vue.js, Femi crafts captivating
          user experiences. He has also delved into backend development with
          Node.js and MongoDB, enabling end-to-end application development.
        </p>
        <p>
          Recently, Femi has embraced DevOps and cloud engineering, earning
          certifications in AWS and proficient in infrastructure as code with
          Terraform. Implementing CI/CD pipelines and containerization with
          Docker and Kubernetes, he optimizes deployment processes and
          infrastructure performance.
        </p>
        <p>
          Driven by a commitment to innovation, Femi aims to spearhead
          transformative projects blending technology and education. With a
          dedication to continuous learning, he aspires to drive positive change
          in the tech industry and foster an inclusive global tech community.
        </p>
      </article>
      <h3 className={`${colors.text.primary} mb-4 text-2xl font-bold text-slate-100`}>What I'm Doing</h3>
      <div className="md:flex md:w-full md:justify-center md:items-start md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-1 rounded-2xl border border-blue-500/20 bg-slate-900/40 p-6 text-center transition hover:border-blue-400/40 hover:shadow-blue-500/20">
          <div className="flex justify-center items-center">
            <p>
              <GrCloudSoftware className="h-12 w-12 text-blue-300" />
            </p>
          </div>
          <p className="mb-3 text-xl font-semibold text-slate-100">Frontend Developer</p>
          <p className="text-sm text-slate-300">
            I enjoy bringing designs to life and creating seamless user
            experiences through frontend development. Crafting intuitive
            interfaces, optimizing performance, and ensuring accessibility are
            some of the aspects I find particularly rewarding in my work.
          </p>
        </div>
        <div className="flex-1 rounded-2xl border border-blue-500/20 bg-slate-900/40 p-6 text-center transition hover:border-blue-400/40 hover:shadow-blue-500/20">
          <div className="flex justify-center items-center">
            <p>
              <FaMixcloud className="h-14 w-14 text-blue-300" />
            </p>
          </div>
          <p className="mb-3 text-xl font-semibold text-slate-100">
            Cloud Engineering & DevOps
          </p>
          <p className="text-sm text-slate-300">
            I enjoy design, secure and maintenance of an organization’s
            cloud-based infrastructure and application and I also enjoy to
            improve the speed and quality of delivery, automate and achieve CICD
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-blue-500/20 bg-slate-900/40 p-6 text-center transition hover:border-blue-400/40 hover:shadow-blue-500/20">
        <div className="flex justify-center items-center">
          <p>
            <GrPerformance className="h-12 w-12 text-blue-300" />
          </p>
        </div>

        <p className="mb-3 text-xl font-semibold text-slate-100">Backend Developer</p>
        <p className="text-sm text-slate-300">
          I specialize in developing and maintaining the server-side logic of
          web applications and ensuring their scalability, performance, and
          security.
        </p>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
