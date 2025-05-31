import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
  faTelegram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer({ dark }) {
  return (
    <>
      <footer className={` ${dark ? "bg-gray-950" : "bg-opacity-20 bg-pink-200"} `}>
        <div className=" w-full p-2 border-t-2 border-red-600">
          <strong className={`text-center ${dark?'text-purple-400':'text-gray-800'}`}>
            <h1 className=" phone:text-lg tab:text-xl tablet:text-2xl  laptop:text-3xl font-montserrat">
              Get in thouch
              <hr />
            </h1>
          </strong>
        </div>
        <div className="tab:flex text-center items-center w-full justify-around pr-10">
          <div className=" flex items-center phone:flex-col w-fit phone:justify-center p-2 px-4">
            <div>
              <h3 className={` phone:text-base tab:text-lg tablet:text-xl laptop:text-2xl font-semibold font-montserrat ${dark?'text-white':'text-blue-500'}`}>
                Contact Personally
              </h3>
              <div className="w-fit p-2">
                <ul className={`font-mono ${dark?'text-gray-200':'text-gray-800'}`}>
                  <li>
                    <Link
                      to="mailto:anuraganitaanil4aaa@gmail.com"
                      className="list-none flex items-center w-fit cursor-pointer hover:text-blue-900 p-1  hover:scale-x-105  hover:border-b-2 rounded-md transition-all shadow-md hover:shadow-black m-1 phone:text-sm tab:text-base tablet:text-lg  "
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="mr-2 hover:text-2xl  ease-in-out"
                      />
                      anuraganitaanil4aaa@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:anuhackerag799@gmail.com"
                      className="list-none flex items-center w-fit cursor-pointer hover:text-blue-900 p-1  hover:scale-x-105  hover:border-b-2 rounded-md transition-all shadow-md hover:shadow-black m-1 phone:text-sm tab:text-base tablet:text-lg "
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="mr-2 hover:text-2xl  ease-in-out"
                      />
                      anuhackerag799@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="tel:+7991845638"
                      className="list-none flex items-center w-fit cursor-pointer hover:text-blue-900 p-1  hover:scale-x-105  hover:border-b-2 rounded-md transition-all shadow-md hover:shadow-black m-1 phone:text-sm tab:text-base tablet:text-lg "
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="mr-2 hover:text-2xl  ease-in-out"
                      />
                      +91- 7991845638
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" phone:w-fit phone:visible tab:w-0 tab:h-0 tab:invisible tab:-translate-y-96  ">
              <h3 className={`phone:text-base tab:text-lg tablet:text-xl laptop:text-2xl font-semibold font-montserrat  ${dark?'text-white':'text-blue-500'}`}>
                Contact Socially
              </h3>
              <div className={` flex gap-5 my-5 mx-2 ${dark?'text-gray-200':'text-gray-800'}`}>
                <div className="   ">
                  <Link
                    to="https://github.com/Anuragpandey799/my_portfolio"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faSquareGithub}
                      className="phone:text-2xl tab:text-3xl tablet:text-4xl hover:scale-125 hover:text-white rounded-md  hover:-translate-y-2 transition-all shadow-md shadow-black hover:shadow-white hover:shadow-xl hover:ring-white hover:ring-1 p-1 "
                    />
                  </Link>
                </div>
                <div className="w-auto   ">
                  <Link
                    to="https://www.linkedin.com/in/anurag-pandey-7b4502304"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="phone:text-2xl tab:text-3xl tablet:text-4xl hover:scale-125 hover:text-white rounded-md  hover:-translate-y-2 transition-all shadow-md shadow-black hover:shadow-white hover:shadow-xl hover:ring-white hover:ring-1 p-1"
                    />
                  </Link>
                </div>

                <div className="w-auto   ">
                  <Link to="mailto:anuhackerag799@gmail.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="phone:text-2xl tab:text-3xl tablet:text-4xl hover:scale-125  hover:text-white rounded-md  hover:-translate-y-2 transition-all shadow-md shadow-black hover:shadow-white hover:shadow-xl hover:ring-white hover:ring-1 p-1"
                    />
                  </Link>
                </div>
                <div className="w-auto   ">
                  <Link
                    to="https://www.youtube.com/@anuragpandey9337"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="phone:text-2xl tab:text-3xl tablet:text-4xl hover:scale-125  hover:text-white rounded-md  hover:-translate-y-2 transition-all shadow-md shadow-black hover:shadow-white hover:shadow-xl hover:ring-white hover:ring-1 p-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={` p-1 text-center flex flex-wrap phone:justify-center tab:justify-evenly font-montserrat ${dark?'text-gray-300':'text-gray-800'} `}>
            <span>copyright@2025 - </span>
            <span> All rights reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
