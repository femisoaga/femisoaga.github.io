import React from "react";
import { GrCloudSoftware } from "react-icons/gr";
import { FaMixcloud } from "react-icons/fa";
import { GrPerformance } from "react-icons/gr";
import { MdOutlineLinearScale } from "react-icons/md";

const AboutMe = () => {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-md sm:p-16 p-6">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mb-4">
          <MdOutlineLinearScale className="w-12 h-12 text-gray-600" />
        </div>
      </header>
      <article className="mb-8 mt-2">
        <p className="text-gray-600 mb-2">
          Samuel Oluwafemi Soaga is a versatile professional excelling in
          frontend engineering, backend development, and DevOps. With four years
          of coding experience and a degree in Computer Science and Education
          from the University of Nigeria Nsukka, Femi seamlessly integrates
          technical prowess with a passion for education.
        </p>
        <p className="text-gray-600 mb-2">
          Mastering frontend technologies like HTML, CSS, JavaScript, and
          frameworks such as React, Angular, and Vue.js, Femi crafts captivating
          user experiences. He has also delved into backend development with
          Node.js and MongoDB, enabling end-to-end application development.
        </p>
        <p className="text-gray-600 mb-2">
          Recently, Femi has embraced DevOps and cloud engineering, earning
          certifications in AWS and proficient in infrastructure as code with
          Terraform. Implementing CI/CD pipelines and containerization with
          Docker and Kubernetes, he optimizes deployment processes and
          infrastructure performance.
        </p>
        <p className="text-gray-600">
          Driven by a commitment to innovation, Femi aims to spearhead
          transformative projects blending technology and education. With a
          dedication to continuous learning, he aspires to drive positive change
          in the tech industry and foster an inclusive global tech community.
        </p>
      </article>
      <h3 className="text-2xl font-bold mb-2">What I'm Doing</h3>
      <div className="md:flex md:w-full md:justify-center md:items-center">
        <div className="mb-4 md:w-80 md:h-80 md:mr-2 border-2 border-gray-600 rounded-xl shadow-md p-6 text-center">
          <div className="flex justify-center items-center">
            <p>
              <GrCloudSoftware className="w-12 h-12 text-gray-600" />
            </p>
          </div>
          <p className="text-xl font-semibold mb-3">Frontend Developer</p>
          <p className="text-sm">
            I enjoy bringing designs to life and creating seamless user
            experiences through frontend development. Crafting intuitive
            interfaces, optimizing performance, and ensuring accessibility are
            some of the aspects I find particularly rewarding in my work.
          </p>
        </div>
        <div className="mb-4 md:w-80 md:h-80 border-2 border-gray-600 rounded-xl shadow-md p-6 text-center">
          <div className="flex justify-center items-center">
            <p>
              <FaMixcloud className="w-12 h-14 text-gray-600" />
            </p>
          </div>
          <p className="text-xl font-semibold mb-3">
            Cloud Engineering & DevOps
          </p>
          <p className="text-sm">
            I enjoy design, secure and maintenance of an organization’s
            cloud-based infrastructure and application and I also enjoy to
            improve the speed and quality of delivery, automate and achieve CICD
          </p>
        </div>
      </div>

      <div className="mb-4 md:w-80 md:h-80 md:mx-auto border-2 border-gray-600 rounded-xl shadow-md p-6 text-center">
        <div className="flex justify-center items-center">
          <p>
            <GrPerformance className="w-12 h-12 text-gray-600" />
          </p>
        </div>

        <p className="text-xl font-semibold mb-3">Backend Developer</p>
        <p className="text-sm">
          I specialize in developing and maintaining the server-side logic of
          web applications and ensuring their scalability, performance, and
          security.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
