import React, { useState, useEffect } from "react";
import { calculateImageSize } from "../utilities/ImageReducer";
import Table from "./Table";

const MainTable = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const setImageSize = () => {
      const image = new Image();
      image.onload = () => {
        const { width, height } = calculateImageSize(image.width, image.height);
        setImageWidth(width);
        setImageHeight(height);
      };
      image.src =
        "https://ik.imagekit.io/aq3ybtarw/gauge/water-purifier.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678437195785";
    };

    setImageSize();

    const handleResize = () => {
      const { width, height } = calculateImageSize(imageWidth, imageHeight);
      setImageWidth(width);
      setImageHeight(height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageWidth, imageHeight]);
  return (
    <section className="text-gray-600 body-font main-table-wrap mt-0 ">
      <div className="container mx-auto flex lg:px-28   xl:flex-row flex-col items-center sm:items-center  px-4 lg:pt-20 lg:pb-12  pt-24  ">
        <div className="rt-retina-image-container md:6/2 hidden xl:block">
          {" "}
          
        </div>

        <div className="lg:flex-grow md:w-6/2 lg:w-full w-90  md:pl-10 flex flex-col md:items-start md:text-left  text-start health-main-wrap md:pr-12 lg:mt-0  ">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default MainTable;
