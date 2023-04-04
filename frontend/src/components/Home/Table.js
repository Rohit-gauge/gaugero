import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    async function fetchtableData() {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}/api/compare-tables`,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "content-Type": "application/json",
          },
        };
        const response = await axios.request(config);
        settableData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchtableData();
    // console.log(tableData + "tabledata");
  }, []);

  function scrollToNextSection() {
    const nextSection = document.querySelector("#affordable");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      {tableData && tableData.length > 0 ? (
        <div className="flex justify-center mb-20 lg:w-full lg:text-center flex-col ">
          <div className="gauge-title py-0 pb-8  px-0 pb-30 text-gray-900 text-2xl lg:text-3xl font-bold leading-1.2 text-center capitalize">
            Gauge vs. other Purifiers
          </div>
          <div className="overflow-x-auto lg:shadow-md shadow-sm lg:w-full ">
            <table className="table-custom min-w-full max divide-y divide-gray-200 width-table  ">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    className="sticky top-0 px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    style={{ zIndex: "10" }}
                  >
                    Features
                  </th>
                  <th
                    className="sticky top-0 px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    style={{ zIndex: "10" }}
                  >
                    Gauge
                  </th>
                  <th
                    className="sticky top-0 px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    style={{ zIndex: "10" }}
                  >
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData &&
                  tableData.map((item) => (
                    <tr key={item.id}>
                      <td className="px-5 py-4 whitespace-nowrap up">
                        <div className=" uppercase">
                          {item.attributes.features}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap  gauge">
                        <div className="text-sm text-gray-900">
                          {item.attributes.gauge}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.attributes.others}
                        </div>
                      </td>
                    </tr>
                  ))}

                {/* <tr>
              <td className="px-5 py-4 whitespace-nowrap up">
                <div className="flex items-center uppercase">Filter change</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900">5yrs</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1st yr</div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 whitespace-nowrap ">
                <div className="flex items-center uppercase">maintenance</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900">5yrs</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1yrs</div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 whitespace-nowrap up">
                <div className="flex items-center uppercase">electronics</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900">5yrs</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1yrs</div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 whitespace-nowrap up">
                <div className="flex items-center uppercase">Body</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900">5yrs</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1yrs</div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 whitespace-nowrap up">
                <div className="flex items-center uppercase">
                  delay cashback
                </div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900"> ₹ 100/day</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">None</div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 whitespace-nowrap up">
                <div className="flex items-center uppercase">Mobile App</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900">
                  <i className="fa-solid fa-check"></i>
                </div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  <i className="fa-solid fa-check"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 whitespace-nowrap up">
                <div className="flex items-center uppercase">Emergency Off</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap gauge">
                <div className="text-sm text-gray-900">
                  <i className="fa-solid fa-check"></i>
                </div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </td>
            </tr> */}
              </tbody>
            </table>
          </div>

          <button
            onClick={scrollToNextSection}
            className="rt-arrow-btn rounded-full bg-blue-500 w-fit  lg:px-12 px-10 lg:py-5 py-5 flex m-auto lg:mt-14 mt-12  mb-10"
          >
            <a
              href="#smartly-conserved"
              rel="nofollow"
              className="rt-readmore-btn text-white font-bold"
            >
              Next: Pricing
            </a>
          </button>
        </div>
      ) : (
        <div className="px-4 loading">Loading...</div>
      )}
    </>
  );
};
export default Table;
