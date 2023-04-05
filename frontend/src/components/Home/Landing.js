import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../../assets/css/custom.css";
import logo from "../../assets/images/gauge.png";
import redLogo from "../../assets/images/gauge-logo-red.png";

const Landing = () => {
  const mobileImageUrl =
    "https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244";
  const desktopImageUrl =
    "https://ik.imagekit.io/aq3ybtarw/landing/lg-landing.webp?updatedAt=1680626153268";

  function scrollToNextSection() {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToNextSection() {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="landing-page">
      <Nav redLogo={logo} blackLogo={redLogo} />
      <div className="container mx-auto lg:px-20 lg:pt-20 pt-10">
        <div className="text-gray-600 body-font">
          <div className="container lg:mx-auto flex flex-col xl:flex-row px-5 pb-24 text-center ">
            <div className="xl:w-1/2 mb-5 lg:mb-0 relative landing-img-wrap flex items-center justify-center  ">
              <img
                srcSet={`${mobileImageUrl} 768w, ${desktopImageUrl} 1024w`}
                sizes="(max-width: 768px) 100vw, 55vw"
                alt="hero"
                className={`object-cover relative object-center rounded transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer loading="lazy"`}
              />
              <div className="elementor-icon-wrapper hidden lg:block">
                <div className="updown-icon absolute left-2 ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#31C3F1"></circle>
                  </svg>
                </div>
              </div>
            </div>

            <div className="xl:w-1/2  md:pl-2 flex flex-col justify-center items-start text-start">
              <div className="hidden lg:block absolute icon-moving-rotate">
                <div className="circle-icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <circle cx="5" cy="5" r="5" fill="#F1A431"></circle>
                  </svg>
                </div>
              </div>

              <div className="landing-widget-container mx-auto lg:mx-6 lg:py-4 lg:pt-12">
                <h1 className="rt-textappear-line70 text-center rt-textappear-line ml1 rt_gradient mb-5 xl:mb-2">
                  {" "}
                  Gauge Water Purifier{" "}
                  <span className="rt-heading-div">
                    {" "}
                    <span className="text-wrapper">
                      {" "}
                      <span className="letters">puts an end</span>{" "}
                      <span className="line line2" />{" "}
                    </span>{" "}
                  </span>{" "}
                  <span className="after-text">to RO service pain</span>
                </h1>
              </div>
              <p className="mb-12 px-4 md:px-16 lg:px-0 lg:mx-3 leading-relaxed text-center  font-medium text-base md:text-lg lg:text-xl max-w-2xl customer-para-one">
                Fully automatic water purifier provides the highest water
                savings while ensuring a seamless service experience.
              </p>

              <div className="flex flex-col justify-center items-center mx-auto relative ">
                <button
                  onClick={scrollToNextSection}
                  className="inline-flex text-white focus:outline-none  border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-7 text-base font-semibold"
                >
                  Take a product Tour
                </button>
                <p className="leading-relaxed text-center  font-medium text-base lg:mx-7 md:px-9  lg:px-8 mt-4 customer-para-two ">
                  Experience Convenience Like Never Before With Our Smart Water
                  Purifier
                </p>
                <div className="elementor-icon-wrapper hidden lg:block absolute bottom-0 right-1/3">
                  <div className="loading-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5.5"
                        stroke="#1CC8D3"
                        strokeWidth="3"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
