import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFileDownload, MdOutlineMail } from "react-icons/md";
import { PiSmileyBold } from "react-icons/pi";

import dp from "../../assets/dp.jpg";
import OluwafemiResume from "../../assets/OluwafemiResume.pdf";

const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", Icon: CiLinkedin },
  { id: "twitter", label: "Twitter", Icon: FiTwitter },
  { id: "github", label: "GitHub", Icon: FiGithub },
  { id: "instagram", label: "Instagram", Icon: FaInstagram },
];

const CONTACT_DETAILS = [
  {
    id: "email",
    label: "EMAIL",
    value: (
      <a href="mailto:samuelsoaga@gmail.com" className="hover:text-blue-400">
        samuelsoaga@gmail.com
      </a>
    ),
    Icon: MdOutlineMail,
  },
  {
    id: "location",
    label: "LOCATION",
    value: "Lagos, Nigeria.",
    Icon: IoLocationOutline,
  },
];

const OTHER_DETAILS = [
  {
    id: "cv",
    label: "CV",
    value: (
      <a
        href={OluwafemiResume}
        download="Oluwafemi-Resume"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary-600"
      >
        Download
      </a>
    ),
    Icon: MdOutlineFileDownload,
  },
  {
    id: "status",
    label: "STATUS",
    value: "Available",
    Icon: PiSmileyBold,
  },
];

const InfoItem = ({ label, icon: Icon, children }) => {
  const content = typeof children === "string" ? <span>{children}</span> : children;

  return (
    <article className="mb-3">
      <h3 className="text-sm font-semibold text-gray-400">{label}</h3>
      <div className="flex items-center text-gray-900">
        {content}
        <span className="ml-3">
          <Icon />
        </span>
      </div>
    </article>
  );
};

const PersonalInfo = () => {
  return (
    <section className="card mt-4 mb-3">
      <div className="container md:flex md:items-center md:justify-between">
        <div className="my-2 flex items-center justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-primary-400 p-1">
            <img className="h-32 w-32 rounded-full bg-white object-cover" src={dp} alt="Oluwafemi Soaga" />
          </div>
        </div>

        <header className="mb-3 flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="md:mb-2">Oluwafemi Soaga</h1>
          <p className="text-gray-500 md:mb-2">Software Engineer | DevOps</p>
          <nav aria-label="Social media" className="my-2 flex justify-center md:justify-start">
            <ul className="flex">
              {SOCIAL_LINKS.map(({ id, label, Icon }) => (
                <li key={id} className="mr-3 last:mr-0">
                  <button type="button" aria-label={label} className="transition-colors hover:text-primary-600">
                    <Icon />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <hr className="border-gray-200" />

        <div>
          {CONTACT_DETAILS.map(({ id, label, value, Icon }) => (
            <InfoItem key={id} label={label} icon={Icon}>
              {value}
            </InfoItem>
          ))}
        </div>

        <div>
          {OTHER_DETAILS.map(({ id, label, value, Icon }) => (
            <InfoItem key={id} label={label} icon={Icon}>
              {value}
            </InfoItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
