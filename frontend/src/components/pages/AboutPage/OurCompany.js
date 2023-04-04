import React, { useState, useEffect } from "react";
// import NavBar from "../../Home/NavBar";
// import NavTest from "../../Home/Nav";
import NavBar from "../../Home/Nav";
import logo from "../../../assets/images/gauge-logo-red.png";
import line from "../../../assets/images/about-line-curve.png";
import { calculateImageSize } from "../../utilities/ImageReducer";

const OurCompany = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  useEffect(() => {
    const setImageSize = () => {
      const image = new Image();
      image.onload = () => {
        const { width } = calculateImageSize(image.width, image.height);
        setImageWidth(width);
      };
      image.src =
        "https://ik.imagekit.io/aq3ybtarw/gauge/aboutus.webp?updatedAt=1680329927581";
    };

    setImageSize();
  }, []);
  return (
    <section className="about-main-wrap about-section lg:pb-56 md:pb-32">
      {/* <NavBar logo={logo} /> */}
      <NavBar redLogo={logo} blackLogo={logo} />

      <div className="text-gray-600 body-font md:pt-28 " id="customer">
        <div className="container mx-auto flex lg:px-16 xl:px-28  pt-2 xl:flex-row flex-col   px-4 lg:mb-6">
          <div className="lg:flex-grow md:w-6/2 xl:w-6/12 lg:pr-4 md:pr-0 flex flex-col md:items-start md:text-left mb-4 md:mb-0  text-start lg:mx-auto">
            <div className="company-widget-container xl:pr-16">
              <div className="rt-hover-heading line  lg:pt-20 pt-4">
                <div className="title-company mb-9">About Our Company</div>
                <div className="about-title-heading text-black text-capitalize ">
                  Meet The Team Behind India's
                  <br lass="block md:hidden" />
                  <span className="about-highlight-text ">
                    Smartest Water Purifier
                    <br className="hidden lg:block" />
                  </span>
                </div>
              </div>
              <p className="about-para-one mb-6 w- whitespace-pre-line ">
                Our team of experts delivers top-notch water purification
                solutions for a healthier India. Committed to quality and
                customer satisfaction.
              </p>
            </div>

            <div className="elementor-widget-container lg:pr-12 "></div>
          </div>

          <div className="  md:w-6/2 xl:w-6/12 relative">
            <img
              className="object-cover object-center  transition-transform duration-300 ease-in-out hover:-translate-y-2 rounded-3xl lg:mt-10 mt-5  cursor-pointer "
              alt="customer-need"
              src={`https://ik.imagekit.io/aq3ybtarw/gauge/aboutus.webp?tr=w-${imageWidth},h-${imageHeight},fo-auto&updatedAt=1680329927581`}
              width={imageWidth}
              height={imageHeight}
            />
            <img
              decoding="async"
              width="199"
              height="264"
              src={line}
              className="attachment-full size-full wp-image-36401 absolute top-16 -inset-24 hidden xl:block "
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
