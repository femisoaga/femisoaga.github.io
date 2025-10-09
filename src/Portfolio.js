import React from "react";
import Nav from "./Nav";
import PersonalInfo from "./PersonalInfo";
import PortfolioDetails from "./PortfolioDetails";
import backgroundSVG from "./assets/bg.png";

const Portfolio = () => {
  return (
    <div>
      <div className="bg-app-light dark:bg-app-dark min-h-screen py-10 relative transition-colors">
        <div className="container-pro md:flex">
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
