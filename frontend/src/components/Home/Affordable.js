import React, { useState, useEffect } from "react";
import { calculateImageSize } from "../utilities/ImageReducer";

const Affordable = () => {
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
        "https://ik.imagekit.io/aq3ybtarw/gauge/water-purifier.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678437195785";
    };

    setImageSize();
  }, []);

  return (
    <section id="affordable" className="text-gray-600 body-font ">
      <div className="container mx-auto flex lg:px-28   xl:flex-row flex-col items-center sm:items-start  px-4 lg:pt-20 lg:pb-12 lg:mb-24 mb-20 pt-24 ">
        <div className="lg:w-full w-full lg:pt-4 ">
          <img
            alt="hero"
            src={`https://ik.imagekit.io/aq3ybtarw/gauge/affordable.webp?tr=w-${imageWidth},h-${imageHeight},fo-auto&iupdatedAt=1680328827110`}
            className="object-cover object-center  transition-transform duration-300 ease-in-out hover:-translate-y-2 rounded-3xl  cursor-pointer"
            width={imageWidth}
            height={imageHeight}
          />
        </div>

        <div className="lg:flex-grow md:w-6/2 lg:w-full  md:pl-10 flex flex-col md:items-start md:text-left  text-start health-main-wrap md:pr-12">
          <div className="customer-need-wrap hidden sm:block "></div>

          <h2 className="rt-textappear-line49 rt-textappear-line ml1 text-black text-3xl font-bold text-capitalize pt-8 pb-4">
            {" "}
            Easy To Understand,{" "}
            <span className="rt-heading-div">
              {" "}
              <span className="text-wrapper">
                {" "}
                <span className="smarter">Affordable</span>{" "}
                <span className="line line2">Cost</span>{" "}
              </span>{" "}
            </span>{" "}
            <span className="after-text"></span>
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2  lg:pr-8">
              <div className="text-4xl health-title text-black font-bold mb-1">
                5 Yrs
              </div>
              <div className="text-lg text-gray-700 health-subtitle font-semibold mb-1 ">
                Product Guarantee
              </div>
              <p className="text-gray-600 mb-1 health-info">
                Includes Replacement for sensors, electronics, electrical, body,
                uv tube, hot water tap and water tank.
              </p>
            </div>

            <div className="w-full md:w-1/2  lg:pl-12 mt-4 sm:mt-0">
              <div className="text-4xl text-black font-semibold mb-1 health-title">
                10 Sets
              </div>
              <div className="text-lg text-gray-700 font-medium mb-1 health-subtitle">
                Filters Replacement
              </div>
              <p className="text-gray-600 mb-1 health-info ">
                Includes sediment filters, carbon filters, ro membrane and
                alkaline filters.
              </p>
            </div>
          </div>

          <div className="save-info-wrap flex mt-6 ">
            <div className="icon-check mt-2">
              <div className="elementor-icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                    fill="#39C69B"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="check-point">
              <p className="px-4 para">
                You may choose between 1-5 years of product guarantee and how
                many filter sets you need to replace per year to determine the
                final pricing.
              </p>
            </div>
          </div>

          <div className="save-info-wrap flex mt-6 ">
            <div className="icon-check mt-2">
              <div className="elementor-icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                    fill="#39C69B"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="check-point">
              <p className="px-4 para">
                Allow us to discuss your requirements with you to provide the
                custom quote and discounts 🙂
              </p>
            </div>
          </div>

          <div className="pre-launch-btn rounded-full lg:px-16 px-6 lg:py-5 py-4 flex mx-auto mt-10 shadow-md">
            <a
              href="https://api.whatsapp.com/send/?phone=918872781919&amp;text=Hi%2C+I+want+to+know+the+latest+deal+on+Gauge+Smart+Water+Purifier.&amp;type=phone_number"
              rel="nofollow"
              className="rt-readmore-btn text-white font-bold "
            >
              Get A Pre-Launch Deal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affordable;
