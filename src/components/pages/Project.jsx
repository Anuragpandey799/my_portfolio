import React from "react";
import { Link } from "react-router";


function Project({dark}) {
  return (
    <div className={`w-full h-auto bg-gradient-to-br ${dark?'from-blue-950 via-orange-900 to-black':'bg-gray-300'} items-center justify-center flex text-black`}>
      <div className=" phone:w-screen phone:h-full tab:h-auto laptop:w-2/3 flex flex-col justify-center items-center my-16 tablet:my-24">
      <h2 className={`m-1 p-2 phone:text-xl tablet:text-2xl laptop:text-3xl font-sketchRegular w-screen text-center text-transparent bg-gradient-to-b bg-clip-text  ${dark?'from-red-500 via-white to-red-500':'from-purple-800 via-gray-800 to-pink-800'} transition-all`}>
        My projects - Journey of front-end development.
        </h2>
        <div className={`tab:mx-16 min-h-60 h-auto grid phone:grid-cols-1 phone:gap-y-5 tablet:grid-cols-2 gap-2 tablet:gap-5 p-3  rounded-xl shadow-xl ${dark?'hover:shadow-gray-800':'hover:shadow-black/50 ring-1'} `}>
          <div className={`overflow-auto m-2 hover:scale-105 ${dark?'text-white':'hover:bg-gray-400'} transition-all rounded-lg ring-1 ring-red-500`}>
            <div className="  bg-gray-300 w-full tab:h-2/3 phone:h-1/2 rounded-xl ">
              <img
                src="/Images/profile-about.png"
                alt=""
                className="hover:scale-110 transition-all phone:h-full"
              />
            </div>
            <h2 className="tab:text-xl m-1 font-Roboto">
              <Link
                to=""
                className="font-Oswald underline hover:text-blue-800 transition-all"
              >
                Current session - My Portfolio
              </Link>{" "}
              using HTML5, Tailwind Css and React.js .
            </h2>
            <p className="m-1 p-1 text-justify phone:text-sm tab:text-base tablet:text-lg font-Newsreader ">
              This is my Portfolio website. I hope it will absolutely impress you .
            </p>
          </div>


          <div className={`overflow-auto m-2 hover:scale-105 ${dark?'text-white':'hover:bg-gray-400'} transition-all rounded-lg ring-1 ring-red-500`} onClick={()=>{}}>
            <div className="  bg-gray-300 w-full h-2/3 rounded-xl">
              <img
                src="/Images/profile-about.png"
                alt=""
                className="hover:scale-110 transition-all"
              />
            </div>
            <h2 className="tab:text-xl m-1 font-Roboto">
              <Link
                to="/great scientist"
                className="font-Oswald underline hover:text-blue-800 transition-all"
              >
                Top-10 Scientiest
              </Link>{" "}
              using pure react.js and tailwind CSS.
            </h2>
            <p className="m-1 p-1 text-justify phone:text-sm tab:text-base tablet:text-lg font-Newsreader ">
              This webpage is a collection of top Scientists of India who
              gave theis whole life to this country.
            </p>
          </div>
          {/* <div className={`overflow-auto m-2 hover:scale-105 ${dark?'text-white':'hover:bg-gray-400'} transition-all rounded-lg ring-1 ring-red-500`}>
            <div className="  bg-gray-300 w-full h-2/3 rounded-xl">
              <img
                src="/Images/profile-about.png"
                alt=""
                className="hover:scale-110 transition-all"
              />
            </div>
            <h2 className="tab:text-xl m-1 font-Roboto">
              <Link
                to=""
                className="font-Oswald underline hover:text-blue-800 transition-all"
              >
                User Registration/Login page
              </Link>{" "}
              using HTML, CSS and vanilla JavaScript.
            </h2>
            <p className="m-1 p-1 text-justify phone:text-sm tab:text-base tablet:text-lg font-Newsreader ">
              This webpage is a collection of top 10 Scientists of India who
              gave theis whole life to this country.
            </p>
          </div>
          <div className={`overflow-auto m-2 hover:scale-105 ${dark?'text-white':'hover:bg-gray-400'} transition-all rounded-lg ring-1 ring-red-500`}>
            <div className="  bg-gray-300 w-full h-2/3 rounded-xl">
              <img
                src="/Images/profile-about.png"
                alt=""
                className="hover:scale-110 transition-all"
              />
            </div>
            <h2 className="tab:text-xl m-1 font-Roboto">
              <Link
                to=""
                className="font-Oswald underline hover:text-blue-800 transition-all"
              >
                Top-10 Scientiest
              </Link>{" "}
              using pure HTML, CSS.
            </h2>
            <p className="m-1 p-1 text-justify phone:text-sm tab:text-base tablet:text-lg font-Newsreader ">
              This webpage is a collection of top 10 Scientists of India who
              gave theis whole life to this country.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
