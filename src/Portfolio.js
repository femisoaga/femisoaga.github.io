import React from "react";
import Nav from "./Nav";
import PersonalInfo from "./PersonalInfo";
import PortfolioDetails from "./PortfolioDetails";
import backgroundSVG from "./assets/bg.png";

const Portfolio = () => {
  return (
    <div>
      <div
        className="bg-gray-200 min-h-screen py-8 bg-center"
        style={{
          backgroundImage: `url(${backgroundSVG})`,
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 md:flex">
          <Nav />
          <div className="lg:w-full">
            <PersonalInfo />
            <PortfolioDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
