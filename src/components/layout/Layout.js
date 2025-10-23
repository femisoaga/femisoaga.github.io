import React from "react";

import Experience from "../profile/Experience";
import PersonalInfo from "../profile/PersonalInfo";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div>
      <div className="bg-app-light dark:bg-app-dark min-h-screen py-10 relative transition-colors">
        <div className="container-pro md:flex">
          <Nav />
          <div className="lg:w-full">
            <PersonalInfo />
            <Experience />
          </div>

          {/* <Resume /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
