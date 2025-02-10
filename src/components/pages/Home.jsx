// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function Home({ dark }) {
  // const [visitorData, setVisitorData] = useState(null);

  // useEffect(() => {
  //   fetch("https://ipinfo.io/json?token=738999f6462c03")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVisitorData(data);
  //       console.log("Visitor Details:", data); // Log visitor details
  //     })
  //     .catch((error) => console.error("Error fetching IP info:", error));
  // }, []);
  return (
    <div
      className={`w-full phone:h-screen  ${
        dark
          ? "bg-blue-950 text-white"
          : " bg-gradient-to-br from-purple-800 via-black/40 to-blue-800"
      } `}
    >
      {/* {greet ? <Greeting setGreet={setGreet} /> : ""} */}
      {/* <Greeting setGreet={setGreet} /> */}
      <main className=" flex items-center  justify-center text-center  tablet:h-96 ">
        <div
          className={`top-40 phone:w-full phone:h-80 tab:mr-20 tab:px-5 tablet:w-2/3   absolute flex-col justify-center items-center text-base/loose tracking-widest leading-loose drop-shadow-md hover:shadow-2xl shadow-gray-400 ${
            dark
              ? "hover:shadow-gray-500 tablet:hover:ring-1"
              : "hover:shadow-gray-800"
          } tab:py-10  phone:m-0 phone:p-0 ring-orange-50 rounded-xl hover:bg-gradient-to-br hover:text-white bg-opacity-0 backdrop-blur-0 overflow-hidden transition-all  `}
        >
          {/* <FontAwesomeIcon icon={faHippo} size='2xl' className='text-9xl'/> */}
          <h2 className="font-semibold phone:text-xl tab:text-2xl tablet:text-3xl laptop:text-4xl font-sketch ">
            HEY, I'M{" "}
            <div className="inline phone:font-semibold tablet:font-bold phone:hover:text-2xl tab:hover:text-3xl tablet:hover:text-4xl laptop:hover:text-5xl transition-all  ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-600 to-pink-900 font-eliteRegular hover:italic ">
                {" "}
                ANURAG PANDEY
              </span>
            </div>
          </h2>
          <h2 className="text-5xl phone:text-xl tab:text-2xl tablet:text-3xl laptop:text-4xl font-sketch font-semibold ">
            BUT YOU CAN CALL ME{" "}
            <div className="inline phone:font-semibold tablet:font-bold phone:hover:text-2xl tab:hover:text-3xl tablet:hover:text-4xl laptop:hover:text-5xl transition-all">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-950 via-purple-700 to-pink-950 font-eliteRegular hover:italic">
                SACHIN
              </span>
            </div>
          </h2>
          <div className="phone:text-lg tab:text-xl tablet:text-2xl">
            <p className="phone:hover:text-xl tab:hover:text-2xl tablet:hover:text-3xl transition-all font-montserrat">
              I'm a software developer, UX/UI designer
            </p>
            <p className="phone:hover:text-xl tab:hover:text-2xl tablet:hover:text-3xl transition-all font-montserrat">
              & front-end developer/designer
            </p>
          </div>
          <div className="flex justify-center my-10 w-full">
            <div className="flex phone:flex-col  phone:items-center tab:flex-row justify-evenly phone:w-full text-blue-900">
              <ul className="phone:text-base my-2 tablet:text-xl tablet:hover:scale-110 transition-all  hover:border-b-2 hover:bg-gradient-to-br rounded-md text-white px-2 py-0">
                <li className="phone:font-Markazi tab:font-codePro">
                  <Link to="/project" className="flex">
                    <FontAwesomeIcon
                      icon={faHandPointRight}
                      className="mt-1 py-1 mx-2 tab:p-1 phone:p-0 "
                    />
                    see my projects
                  </Link>
                </li>
              </ul>
              <ul className="phone:text-base my-2 tablet:text-xl tablet:hover:scale-110 transition-all  hover:border-b-2 hover:bg-gradient-to-br rounded-md text-white px-2 py-0">
                <li className="phone:font-Markazi tab:font-codePro ">
                  <Link to="/about" className="flex">
                    <FontAwesomeIcon
                      icon={faHandPointRight}
                      className=" mt-1 py-1 mx-2 tab:p-1 phone:p-0 "
                    />
                    more about me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="p-4 bg-gray-900 text-white rounded-lg">
        {visitorData ? (
          <div>
            <h2 className="text-lg font-bold">Visitor Details:</h2>
            <p>🌍 IP: {visitorData.ip}</p>
            <p>
              📍 Location: {visitorData.city}, {visitorData.region},{" "}
              {visitorData.country}
            </p>
            <p>🏢 ISP: {visitorData.org}</p>
            <p>⏳ Timezone: {visitorData.timezone}</p>
          </div>
        ) : (
          <p>Loading visitor info...</p>
        )}
      </div> */}
      {/* <div className="text-6xl font-extrabold stroke-rose-950  stroke-2  ">
        Transparent Text
      </div> */}
    </div>
  );
}

export default Home;

// phone:mt-8 laptop:mt-20 laptop:p-1 tab:mt-16 tab:pt-4
