import React from "react";
import Nav from "./Nav";
import PersonalInfo from "./PersonalInfo";
import PitchDetails from "./PitchDetails";

const Pitch = () => {
  return (
    <div>
      <div className="bg-gray-200 min-h-screen py-8 relative">
        <div className="max-w-5xl mx-auto px-4 md:flex">
          <Nav />
          <div className="lg:w-full">
            <PersonalInfo />
            <PitchDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
