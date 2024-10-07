import React from "react";
import dp from "./assets/dp.jpg";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiSmileyBold } from "react-icons/pi";
import OluwafemiResume from "../src/assets/OluwafemiResume.pdf";

const PersonalInfo = () => {
  return (
    <section className="mt-4 mb-3 bg-white rounded-lg shadow-md p-6">
      <div className="container md:flex md:items-center md:justify-between">
        <div className="flex justify-center items-center my-2">
          <div className="bg-gray-300 rounded-full h-32 w-32 flex justify-center items-center ">
            <img className="h-32 rounded-full" src={dp} alt="Mypicture" />
          </div>
        </div>
        <header className="text-center md:flex md:flex-col justify-center md:items-center md:text-left mb-3">
          <h1 className="text-3xl md:text-2xl font-bold md:mb-2">
            Oluwafemi Samuel Soaga
          </h1>
          <p className="text-gray-500 md:mb-2">Software Engineer | DevOps </p>
          <div className="flex justify-center md:justify-start md:w-full items-center my-2">
            <ul className="flex">
              <li className="mr-3 cursor-pointer hover:text-blue-500">
                <CiLinkedin />
              </li>
              <li className="mr-3 cursor-pointer hover:text-blue-500">
                <FiTwitter />
              </li>
              <li className="mr-3 cursor-pointer hover:text-blue-500">
                <FiGithub />
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </header>
        <hr></hr>
        <div>
          <article className="mb-3 mt-1">
            <h3 className="md:text-sm font-semibold text-gray-400">EMAIL</h3>
            <p className="text-gray-900 flex items-center hover:text-blue-400">
              samuelsoaga@gmail.com
              <span className="ml-3">
                <MdOutlineMail />
              </span>
            </p>
          </article>
          <article className="mb-3">
            <h3 className="text-sm font-semibold text-gray-400">LOCATION</h3>
            <p className="text-gray-900 flex items-center">
              Lagos, Nigeria.
              <span className="ml-2">
                <IoLocationOutline />
              </span>
            </p>
          </article>
        </div>

        <div>
          <article className="mb-3">
            <h3 className="text-sm font-semibold text-gray-400">CV</h3>
            <p className="text-gray-900 flex items-center hover:text-blue-400">
              <a
                href={OluwafemiResume}
                download="Oluwafemi-Resume"
                target="_blank"
              >
                Download
              </a>
              
              <span className="ml-3">
                <MdOutlineFileDownload />
              </span>
            </p>
          </article>
          <article className="mb-3">
            <h3 className="text-sm font-semibold text-gray-400">STATUS</h3>
            <p className="text-gray-900 flex items-center">
              Available{" "}
              <span className="ml-3">
                <PiSmileyBold />
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
