import React from "react";
import Nav from "./Nav";
import PersonalInfo from "./PersonalInfo";
import ResumeDetails from "./ResumeDetails";
import backgroundSVG from "./assets/bg.png";

const Resume = () => {
  return (
    <div>
      <div
        className="bg-gray-200 min-h-screen py-8 bg-center"
        style={{
          backgroundImage: `url(${backgroundSVG})`,
          // backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="bg-gray-200 min-h-screen py-8 relative">
          <div className="max-w-5xl mx-auto px-4 md:flex">
            <Nav />
            <div className="lg:w-full">
              <PersonalInfo />
              <ResumeDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
