import React, { useState, useEffect } from "react";
import { calculateImageSize } from "../../utilities/ImageReducer";

const OurStory = () => {
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
        "https://ik.imagekit.io/aq3ybtarw/gauge/ourstory.webp?updatedAt=1680328467303";
    };

    setImageSize();
  }, []);
  return (
    <section className="text-gray-600 body-font co-founder">
      <div className="container mx-auto flex xl:px-28 lg:px-16  xl:flex-row flex-col items-center sm:items-start   lg:pt-32  ">
        <div className=" w-full hidden xl:block ">
        <img
            alt="story"
            src={`https://ik.imagekit.io/aq3ybtarw/gauge/ourstory.webp?tr=w-${imageWidth},h-${imageHeight},fo-auto&updatedAt=1680328467303`}
            className="object-cover object-center rounded-3xl  cursor-pointer"
            width={imageWidth}
            height={imageHeight}
          />
        </div>

        <div className="lg:flex-grow md:w-6/2 lg:w-full  md:pl-10  story-main-wrap  ">
          <div className="co-founder-title-wrap">
            <div className="our-story-wrap mb-10">Our Story</div>
            <div className="elementor-spacer">
              <div className="elementor-spacer-inner"></div>
            </div>
            <p className=" cofounder-title ">
              Our story at Gauge.ro began with a mission to solve a problem we
              faced ourselves. Like many others, we struggled with managing our
              water purifier at home and keeping it in a perfect condition. We
              encountered issues such as poor service, water leakage, and the
              high cost of ownership, which led us to understand the problems
              faced by other people just like us.
            </p>

            <p className="cofounder-title">
              Determined to find a solution, we set out on a journey to develop
              innovative water purification systems that would address these
              common problems and provide a better experience for customers. We
              believed that technology and a customer-first approach could make
              a difference in the water purification industry, and we were
              committed to making it happen.
            </p>

            <p className="cofounder-title">
              Our team of experts worked tirelessly to bring our vision to life,
              using the latest technology and conducting extensive research to
              identify the needs of our customers. Our focus on customer
              satisfaction and continuous improvement is helping our aim to
              become a leader in the industry, offering a wide range of products
              and services that are helping to improve public health and enhance
              the quality of life for people everywhere.
            </p>

            <p className="cofounder-title">
              From families looking for a safe source of drinking water to
              communities seeking solutions to water scarcity, we are here to
              help. Our passion for providing clean water and improving lives
              drives us forward every day. We believe that everyone deserves
              access to clean, safe water, and we are dedicated to making it a
              reality. Join us on our mission to make a positive impact in the
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
