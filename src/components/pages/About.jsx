import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { Link } from "react-router";
// import AboutImage from ".public/Images/progile-about.png"


function About({dark}) {
  return (
    <div className={`w-full Tablet:h-screen ${dark?'bg-blue-950 text-white':'bg-gray-200'}  items-center justify-center flex text-black mt-2 phone:flex-col tablet:flex-row phone:h-auto`}>
      <div className="phone:pt-10 tablet:pt-0 tab:w-1/3 phone:w-2/3 tablet:h-full phone:h-2/3 phone:mt-10  flex justify-center items-center text-center overflow-hidden ">
        <div
          className={` w-auto h-auto flex justify-center items-center rounded-full  ${dark?'bg-gray-800 ring-1':''} overflow-hidden transition-all
        `}
        >
          <img src="/Images/myPhoto3.jpg" alt="" width={450} className="hover:scale-110 transition-all" />
        </div>
      </div>
      <div className="tablet:mt-10 tablet:pt-10  tablet:w-2/3  h-full flex justify-center place-items-center ">
        <div className=" min-w-full min-h-40 ">
          <p className="phone:text-2xl tab:text-3xl tablet:text-4xl mx-2 my-4">
            <span className="px-3 ring-1 ring-white rounded-full bg-opacity-40 backdrop-blur-md bg-gray-400 font-Markazi">
              About
            </span>
          </p>
          <div className="p-2 tab:mr-16 font-codePro">
            <ReactTyped
              strings={[
                "ANURAG PANDEY",
                "FRONTEND DEVELOPER",
                "SOFTWARE ENGINEER",
                "INTERESTED IN AI/ML",
                "LEARNING FULL-STACK DEVELOPMENT",
                "INTERESTED IN ETHICAL HACKING",
                "LIKE TO READ ABOUT CYBER SECURITY",
              ]}
              typeSpeed={100}
              backSpeed={10}
              loop
              className="m-2 phone:text-xl tab:text-2xl tablet:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-950 via-purple-700 to-pink-950 font-medium"
            />

            <p className={` mx-2 my-4 phone:text-sm tab:text-base tablet:text-lg ${dark?'text-white':'text-gray-900'} text-justify font-latothin`}>
              <span className="font-latobolditalic">👋 Hello! I'm Anurag Pandey.</span>
              <br />
              I'm currently in my third year of Bachelor of Computer
              Applications (BCA) at Tilak Maharashtra Vidyapeeth, where I'm
              deepening my understanding of the ever-evolving world of
              technology. My journey began with a passion for frontend
              development, which I've been honing through various projects and
              internships. Alongside, I'm expanding my skillset into full-stack
              development to build end-to-end solutions.
            </p>
            <p className={`font-Newsreader mx-2 my-4 phone:text-sm tab:text-base tablet:text-lg  text-slate-200 text-justify ${dark?'text-white':'text-gray-900'}`}>
              But my interests don't stop there. I'm genuinely captivated by the
              realms of Artificial Intelligence, Machine Learning, and Cyber
              Security. Ethical hacking excites me as it combines my love for
              problem-solving with my commitment to enhancing security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
