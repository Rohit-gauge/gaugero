import React, { useState, useEffect } from "react";
import { calculateImageSize } from "../../utilities/ImageReducer";

const CoFOunder = () => {
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
        "https://ik.imagekit.io/aq3ybtarw/gauge/aboutuscircle.webp?updatedAt=1680330406628";
    };

    setImageSize();
  }, []);
  return (
    <section className="text-gray-600 body-font co-founder">
      <div className="container mx-auto flex xl:px-28 lg:px-16   xl:flex-row flex-col items-center sm:items-start  px-4 md:pt-16  ">
        <div >
        <img
            alt="cofounder"
            src={`https://ik.imagekit.io/aq3ybtarw/gauge/aboutuscircle.webp?tr=w-${imageWidth},h-${imageHeight},fo-auto&updatedAt=1680330406628`}
            width={imageWidth}
            height={imageHeight}
          />
        </div>

        <div className="lg:flex-grow md:w-6/2 lg:w-full  md:pl-10 flex flex-col md:items-start md:text-left  text-start cofounder-main-wrap md:pr-12  ">
          <div className="co-founder-title-wrap">
            <p className=" cofounder-title ">
              “ As the co-founder of Gauge.ro, I am passionate about providing
              safe drinking water for all through innovative water purification
              solutions.
            </p>

            <p className="cofounder-title">
              Our team uses cutting-edge technology and puts customers first to
              solve problems and enhance health and well-being. ”
            </p>
          </div>

          <div className="cofounder-widget-container">
            {" "}
            <img
              decoding="async"
              src="https://js2.gauge.ro/wp-content/uploads/elementor/thumbs/kavita_484-q2ovkyg7r1uxs2gjfye0mmawmcqgxn04nuyqmfe81q.webp"
              title="kavita_484"
              alt="Kavita (Co-founder)"
              loading="lazy"
            />
          </div>

          <div className="co-founder-info">
            <div className="cofounder-name">Kavita Bhatia</div>

            <div className="cofounder-title cofoudner-desgination">
              Co-Founder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFOunder;
