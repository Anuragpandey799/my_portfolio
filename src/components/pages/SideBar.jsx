import {
  faGithub,
  faLinkedin,
  faSquareGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function SideBar({ dark }) {
  return (
    <nav className=" phone:invisible tab:visible ">
      <div
        className={`my-1 h-auto tab:w-12 tablet:w-16 hover:ring-1 ring-white fixed bottom-0 right-0 rounded-l-3xl transition-all backdrop-blur bg-opacity-50 ${
          dark ? "bg-black text-gray-400" : "bg-white"
        } `}
      >
        <div className="w-full h-full grid gap-1 grid-col-1 py-5 justify-center p-5 z-50">
          <div className="   ">
            <Link
              to="https://github.com/Anuragpandey799/my_portfolio"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className={`tab:text-3xl tablet:text-4xl hover:scale-125 hover:text-white  rounded-md py-3 hover:-translate-y-2 transition-all `}
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
                className=" tab:text-3xl tablet:text-4xl hover:scale-125 hover:text-white  rounded-md py-3 hover:-translate-y-2 transition-all "
              />
            </Link>
          </div>

          <div className="w-auto   ">
            <Link to="mailto:anuhackerag799@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" tab:text-3xl tablet:text-4xl hover:scale-125  hover:text-white  rounded-md py-3 hover:-translate-y-2 transition-all "
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
                className=" tab:text-3xl tablet:text-4xl hover:scale-125  hover:text-white  rounded-md py-3 hover:-translate-y-2 transition-all "
              />
            </Link>
          </div>

          {/* <div className="w-auto   ">
            <FontAwesomeIcon
              icon={faTwitter}
              className=" tab:text-3xl tablet:text-4xl hover:scale-125  hover:text-white  rounded-md py-3 transition-all "
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
}
