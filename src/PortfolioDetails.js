import React, { useEffect, useState } from "react";
import { MdOutlineLinearScale } from "react-icons/md";
import alxLogo from "./assets/Alx-logo-black.svg";
import dp from "./assets/dp.jpg";
import cloudPractionerCertificateBadge from "./assets/cloudpractioner badge.png";
import solutionsArchitectCertificateBadge from "./assets/solutions architect badge.png";

const ResumeComponent = () => {

  function handleCloudBadgeVerification() {
    window.open(
      "https://www.credly.com/badges/0148e939-c4d0-4aa2-8451-c1c0d027ae35",
      "_blank"
    );
  }

  function handleSolutionsBadgeVerification() {
    window.open(
      "https://www.credly.com/badges/7a37ac9b-3286-4a18-9928-efd86f1b19d8",
      "_blank"
    );
  }

  return (
    <section className="mb-8 bg-white rounded-lg shadow-md sm:p-16 p-6">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <div className="mb-4">
          <MdOutlineLinearScale className="w-12 h-12 text-gray-600" />
        </div>
      </header>

      <section className="overflow-y-scroll h-[38rem] md:h-full md:overflow-auto">
        <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img className="h-72" src={alxLogo} alt="Card 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="font-bold text-xl mb-2">TECH STACK</h2>
                      <p>Full Stack MEVN - Vercel - Heroku.</p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">Project Title</h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img className="h-72" src={dp} alt="Card 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="font-bold text-xl mb-2">TECH STACK</h2>
                      <p>Full Stack MEVN - Vercel - Heroku.</p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">Project Title</h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={cloudPractionerCertificateBadge}
                  alt="Certificate Badge"
                  className="h-72"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-2">
                      <h2 className="font-bold text-xl mb-2">
                        AWS Certified Cloud Practitioner
                      </h2>
                      <p>
                        The AWS Certified Cloud Practitioner validates
                        foundational, high-level understanding of AWS Cloud,
                        services, and terminology.
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/aws-cloud-practitioner"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">
                  AWS Certified Cloud Practitioner
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={solutionsArchitectCertificateBadge}
                  alt="Certificate Badge"
                  className="h-72"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-2">
                      <h2 className="font-bold text-xl mb-2">
                        AWS Certified Solutions Architect
                      </h2>
                      <p>
                        Earners of this certification have a comprehensive
                        understanding of AWS services and technologies.
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">
                  AWS Certified Solutions Architect – Associate
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img className="h-72" src={alxLogo} alt="Card 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-2">
                      <h2 className="font-bold text-xl mb-2">
                        AWS Cloud Computing
                      </h2>
                      <p>
                        Completed the Cloud Computing Course (AWS Solution
                        Architect and AWS Cloud Practitioner) class from ALX.
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">
                  ALX - AWS Cloud Computing
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img className="h-72" src={alxLogo} alt="Card 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="font-bold text-xl mb-2">ALX Foundation</h2>
                      <p>Completed the ALX Foundation Course.</p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">ALX Foundation </h2>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img className="h-72" src={alxLogo} alt="Card 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="font-bold text-xl mb-2">TECH STACK</h2>
                      <p>Full Stack MEVN - Vercel - Heroku.</p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">Project Title</h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-2 bg-gray-100 rounded-lg m-2">
              <div className="rounded-lg overflow-hidden relative">
                <img className="h-72" src={dp} alt="Card 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out transform origin-top hover:opacity-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="font-bold text-xl mb-2">TECH STACK</h2>
                      <p>Full Stack MEVN - Vercel - Heroku.</p>
                      <div className="flex justify-center items-center my-2">
                        <button
                          onClick={handleCloudBadgeVerification}
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl mr-2"
                        >
                          Verify Badge
                        </button>
                        <a
                          className="bg-blue-600 text-xs w-[7rem] px-4 py-1 rounded-xl text-white text-center block"
                          href="https://www.coursera.org/articles/solutions-architect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 h-[5rem]">
                <h2 className="font-bold text-lg leading-8">Project Title</h2>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </section>
  );
};

export default ResumeComponent;
