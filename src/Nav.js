import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { LuCodesandbox } from "react-icons/lu";
import { PiBookOpenBold } from "react-icons/pi";
import { GrContact } from "react-icons/gr";
import { MdHeadsetMic } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location.pathname]);


  return (
    <div>
      <nav className="hidden md:block w-44 h-[36rem] mr-4 mt-4 mb-3 glass p-3 md:sticky md:top-4">
        <ul className="flex flex-col items-center justify-around py-2">
          <li>
            <Link
              to="/"
              className={`${
                activeLink === "/"
                  ? "text-primary-600 text-3xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-100/70 dark:bg-white/10 rounded-xl transition duration-300 shadow"
                  : "text-slate-700 dark:text-slate-300 text-xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-50/70 dark:bg-white/5 rounded-xl hover:text-primary-500 transition duration-300"
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
                  ? "text-primary-600 text-3xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-100/70 dark:bg-white/10 rounded-xl transition duration-300 shadow"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-50/70 dark:bg-white/5 rounded-xl hover:text-primary-500 transition duration-300"
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
                  ? "text-primary-600 text-3xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-100/70 dark:bg-white/10 rounded-xl transition duration-300 shadow"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-50/70 dark:bg-white/5 rounded-xl hover:text-primary-500 transition duration-300"
              }`}
            >
              <LuCodesandbox />
              <span className="text-xs mt-2">PORTFOLIO</span>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/pitch"
              className={`${
                activeLink === "/pitch"
                  ? "text-primary-600 text-3xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-100/70 dark:bg-white/10 rounded-xl transition duration-300 shadow"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-50/70 dark:bg-white/5 rounded-xl hover:text-primary-500 transition duration-300"
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
                  ? "text-primary-600 text-3xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-100/70 dark:bg-white/10 rounded-xl transition duration-300 shadow"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-50/70 dark:bg-white/5 rounded-xl hover:text-primary-500 transition duration-300"
              }`}
            >
              <PiBookOpenBold />
              <span className="text-xs mt-2">BLOG</span>
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className={`${
                activeLink === "/contact"
                  ? "text-primary-600 text-3xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-100/70 dark:bg-white/10 rounded-xl transition duration-300 shadow"
                  : "text-gray-500 text-xl flex flex-col items-center justify-center w-24 h-24 p-2 mb-3 bg-slate-50/70 dark:bg-white/5 rounded-xl hover:text-primary-500 transition duration-300"
              }`}
            >
              <GrContact />
              <span className="text-xs mt-2">CONTACT</span>
            </Link>
          </li>
          <li className="w-full px-1"><ThemeToggle /></li>
        </ul>
      </nav>
      <nav className="fixed top-0 left-0 w-full md:hidden bg-white/80 dark:bg-slate-900/60 backdrop-blur border-b border-gray-200/70 dark:border-white/10 shadow-soft z-50">
        <ul className="flex justify-around py-2 items-center">
          <li>
            <Link
              to="/"
              className={`${
                activeLink === "/"
                  ? "text-primary-600 flex justify-center"
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
                  ? "text-primary-600 flex justify-center"
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
                  ? "text-primary-600 flex justify-center"
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
                  ? "text-primary-600 flex justify-center"
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
                  ? "text-primary-600 flex justify-center"
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
                  ? "text-primary-600 flex justify-center"
                  : "text-gray-500 flex justify-center"
              }`}
            >
              <GrContact />
            </Link>
            <span className="text-xs">Contact</span>
          </li>
          <li className="flex items-center justify-center">
            <ThemeToggle compact />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
