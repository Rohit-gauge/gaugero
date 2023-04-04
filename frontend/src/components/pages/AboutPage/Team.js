import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchTeamData() {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}/api/teams?populate=*`,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "content-Type": "application/json",
          },
        };
        const response = await axios.request(config);
        setTeamData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTeamData();
    console.log(teamData + "teamdata");
  }, []);

  return (
    <>
      {teamData && teamData.length > 0 ? (
        <div className="container main-team-wrap mx-auto py-8 lg:px-8 xl:px-0">
          <div className="flex flex-col text-center gap-4 mb-8 p-4">
            <div className="text-red-500 text-lg font-bold">Our Team</div>
            <div className="text-gray-900 text-3xl md:text-4xl font-bold">
              Some of the people you'll be working with
            </div>
            <div className="text-gray-500 md:text-lg">
              Our team is 100% remote, spread out across the globe. Join us!
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 p-4">
            {teamData &&
              teamData.map((item) => (
                <div key={item.id} className="card">
                  {item.attributes.profileimg.data && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}${item.attributes.profileimg.data.attributes.url}`}
                      alt={item.attributes.title}
                      className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110"
                    />
                  )}
                  <div className="text-gray-900 text-lg font-bold title">
                    {item.attributes.title}
                  </div>
                  <div className="text-blue-500 ">
                    {item.attributes.desgination}
                  </div>
                  <Link to={item.attributes.socialLink}>
                    <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
                      <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-blue-900" />
                    </div>
                  </Link>
                </div>
              ))}

            {/* <div className="card">
      <img src="https://css.gauge.ro/wp-content/uploads/2023/02/kavita_484-400x400.webp" alt="cofounder" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Kavita</div>
      <div className="text-blue-500">CTO &amp;  Co-founder</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
          
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
          
      </div>
    </div>

    <div className="card">
      <img src="https://js2.gauge.ro/wp-content/uploads/2023/02/rishi_484-400x400.webp" alt="rishi" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Rishi</div>
      <div className="text-blue-500">Chief Technology Officer</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
          
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
          
      </div>
    </div>

    <div className="card">
      <img src="https://css.gauge.ro/wp-content/uploads/2023/02/anshul_487-400x400.webp" alt="anshul" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Anshul</div>
      <div className="text-blue-500">Flutter</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
          
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
          
      </div>
    </div>

    <div className="card">
      <img src="https://js3.gauge.ro/wp-content/uploads/2023/02/dev_471-400x400.webp" alt="dev" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Dev</div>
      <div className="text-blue-500">Flutter</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
          
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
          
      </div>
    </div>
    <div className="card">
      <img src="https://js1.gauge.ro/wp-content/uploads/2022/09/Abhay-1-400x400.webp" alt="abhay" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Abhay</div>
      <div className="text-blue-500">Backend</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
          
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
          
      </div>
    </div>
    
    <div className="card">
      <img src="https://js3.gauge.ro/wp-content/uploads/2022/09/lk-livingstone-1-1-400x400.webp" alt="living" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Livingstone</div>
      <div className="text-blue-500">Backend</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
          
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
          
      </div>
    </div>
    <div className="card">
      <img src="https://ik.imagekit.io/aq3ybtarw/gauge/tatheer_v2CzMrS4X?updatedAt=1678888096830" alt="Tatheer" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Tatheer  </div>
      <div className="text-blue-500">Video Editor</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
      <Link to="https://www.linkedin.com/in/tatheer-zehra">
        <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
        </Link>
      </div>
    </div>
    <div className="card">
      
      <img src="https://ik.imagekit.io/aq3ybtarw/gauge/WhatsApp_Image_2023-03-13_at_9.28.06_PM.webp?updatedAt=1678789281731" alt="rohit" className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />
      <div className="text-gray-900 text-lg font-bold">Rohit</div>
      <div className="text-blue-500">Front End</div>
     
      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
      
      <i className="fa-brands    fa-linkedin fa-2xl fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
     
          
      
          
      </div>
    </div> */}
          </div>
        </div>
      ) : (
        <div className="px-28 p-10 font-extrabold text-blue-500 loading">
          Loading...
        </div>
      )}
    </>
  );
};

export default Team;
