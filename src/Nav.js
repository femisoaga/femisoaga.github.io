import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { LuCodesandbox } from "react-icons/lu";
import { PiBookOpenBold } from "react-icons/pi";
import { GrContact } from "react-icons/gr";
import { MdHeadsetMic } from "react-icons/md";

const Nav = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);


  return (
    <div>
      <nav className="hidden md:block w-40 h-[36rem] mr-4 mt-4 mb-3 bg-white rounded-lg shadow-md p-3">
        <ul className="flex flex-col items-center justify-around py-2">
          <li>
            <Link
              to="/"
              className={`${
                activeLink === "/"
                  ? "text-blue-600 text-3xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md transition duration-300"
                  : "text-gray-800 text-xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md hover:text-blue-400 transition duration-300"
              }`}
            >
              <FaUser />
              <span className="text-xs mt-2">ABOUT</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={`${
                activeLink === "/resume"
                  ? "text-blue-600 text-3xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md transition duration-300"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md hover:text-blue-400 transition duration-300 transition duration-300"
              }`}
            >
              <GrDocumentText />
              <span className="text-xs mt-2">RESUME</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`${
                activeLink === "/portfolio"
                  ? "text-blue-600 text-3xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md transition duration-300"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md hover:text-blue-400 transition duration-300"
              }`}
            >
              <LuCodesandbox />
              <span className="text-xs mt-2">PORTFOLIO</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pitch"
              className={`${
                activeLink === "/pitch"
                  ? "text-blue-600 text-3xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md transition duration-300"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md hover:text-blue-400 transition duration-300"
              }`}
            >
              <MdHeadsetMic />
              <span className="text-xs mt-2">PITCH</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${
                activeLink === "/blog"
                  ? "text-blue-600 text-3xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md transition duration-300"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md hover:text-blue-400 transition duration-300"
              }`}
            >
              <PiBookOpenBold />
              <span className="text-xs mt-2">BLOG</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                activeLink === "/contact"
                  ? "text-blue-600 text-3xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md transition duration-300"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-20 h-20 p-2 mb-3 bg-gray-100 rounded-md hover:text-blue-400 transition duration-300"
              }`}
            >
              <GrContact />
              <span className="text-xs mt-2">CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="fixed top-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-md">
        <ul className="flex justify-around py-2">
          <li>
            <Link
              to="/"
              className={`${
                activeLink === "/"
                  ? "text-blue-500 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <FaUser />
            </Link>
            <span className="text-xs">About</span>
          </li>
          <li>
            <Link
              to="/resume"
              className={`${
                activeLink === "/resume"
                  ? "text-blue-500 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <GrDocumentText />
            </Link>
            <span className="text-xs">Resume</span>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`${
                activeLink === "/portfolio"
                  ? "text-blue-500 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <LuCodesandbox />
            </Link>
            <span className="text-xs">Portfolio</span>
          </li>
          <li>
            <Link
              to="/pitch"
              className={`${
                activeLink === "/pitch"
                  ? "text-blue-500 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <MdHeadsetMic />
            </Link>
            <span className="text-xs">Pitch</span>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${
                activeLink === "/blog"
                  ? "text-blue-500 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <PiBookOpenBold />
            </Link>
            <span className="text-xs">Blog</span>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                activeLink === "/contact"
                  ? "text-blue-500 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <GrContact />
            </Link>
            <span className="text-xs">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
