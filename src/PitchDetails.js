import React from "react";
import { MdOutlineLinearScale } from "react-icons/md";
import backgroundSVG from "./assets/bg.png";

const PitchDetails = () => {
  return (
    <section className="mb-8 card sm:p-16 p-6 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-no-repeat bg-right-top bg-contain opacity-25 dark:opacity-20 pointer-events-none"
      style={{ backgroundImage: `url(${backgroundSVG})` }}
    />
    <div className="relative z-10">
    <header className="mb-4">
      <h2 className="text-3xl font-bold">Pitch</h2>
      <div className="mb-4">
        <MdOutlineLinearScale className="w-12 h-12 text-gray-600" />
      </div>
    </header>
    <h2 className="text-xl mb-4">Work In Progress.....</h2>
    </div>
    </section>

  
  );
};

export default PitchDetails;
