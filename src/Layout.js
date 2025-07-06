import React from "react";
import Nav from "./Nav";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";

const Layout = () => {
  return (
    <div>
      <div className="bg-gray-200 min-h-screen py-8 relative">
        <div className="max-w-5xl mx-auto px-4 md:flex">
          <Nav />
          <div className="lg:w-full">
            <PersonalInfo />
            <Experience />
          </div>
          {/* <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundSVG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
          ></div> */}

          {/* <Resume /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
