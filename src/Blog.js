import React from "react";
import Nav from "./Nav";
import PersonalInfo from "./PersonalInfo";
import BlogDetails from "./BlogDetails";
import backgroundSVG from "./assets/bg.png";

const Blog = () => {
  return (
    <div>
    <div className="bg-app-light dark:bg-app-dark min-h-screen py-10 relative transition-colors">
      <div className="container-pro md:flex">
        <Nav />
        <div className="lg:w-full">
            <PersonalInfo />
            <BlogDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
