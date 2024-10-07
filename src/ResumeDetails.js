import React from "react";
import { MdOutlineLinearScale } from "react-icons/md";

const ResumeComponent = () => {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-md sm:p-16 p-6">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Resume</h2>
        <div className="mb-4">
          <MdOutlineLinearScale className="w-12 h-12 text-gray-600" />
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        <article className="mb-6 text-gray-700 ">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Frontend Engineer
          </h3>
          <p className="mb-2">
            UniswitchNg - <span className=" text-sm">2023-Present</span>{" "}
          </p>
          <p>
            - Successfully delivered billerHq, a high-traffic e-commerce
            platform, on time and within budget, contributing to a 15% boost in
            revenue.
          </p>
          <p>
            - Enhanced the frontend performance of billerHq by optimizing API
            calls and reducing rendering time, leading to a 40% increase in
            overall speed.
          </p>
          <p>
            - Responded proactively to bug reports and feature requests,
            reducing issue resolution times by 40%
          </p>
        </article>
        <article className="mb-6 text-gray-700 ">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Frontend Developer
          </h3>
          <p className="mb-2">
            Bincom ICT Solutions. -
            <span className=" text-sm"> 2021-2023</span>
          </p>
          <p>
            - I led mobile app development projects using Ionic framework,
            ensuring seamless cross-platform functionality.
          </p>
          <p>
            - I was Responsible for coding user-side applications using frontend
            frameworks.
          </p>
          <p>
            - I managed end-to-end project lifecycles, from conceptualization to
            deployment.
          </p>
          <p>
            - I built interactive Single page applications using frameworks like
            React, Vue and Angular
          </p>
        </article>
        
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <article className="mb-6 text-gray-700 ">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
          Computer Science & Education
          </h3>
          <p className="mb-2">
          University of Nigeria, Nsukka - 2016-2020
          </p>
        <br></br>
        </article>
        <article className="mb-6 text-gray-700 ">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
          Secondary School Certificate
          </h3>
          <p className="mb-2">
          Mayflower Senior Secondary School, Ikenne - 2005-2011
          </p>
        <br></br>
        </article>
        
      </section>
      <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">JavaScript (React, Node.js)</li>
            <li className="mb-2">HTML5, CSS3 (Tailwind CSS)</li>
            <li className="mb-2">Typescript</li>
            <li className="mb-2">MongoDb (Mongoose)</li>
            <li className="mb-2">ExpressJs </li>
            <li className="mb-2">React, Vue, Angular</li>
            <li className="mb-2">Ionic</li>
            <li className="mb-2">SQL (MySQL, PostgreSQL)</li>
            <li className="mb-2">Git, GitHub</li>
          </ul>
        </section>
    </section>
  

  
  );
};

export default ResumeComponent;
