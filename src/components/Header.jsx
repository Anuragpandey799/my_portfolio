import { faMoon as faRegularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faSolidMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Contact from "./pages/Contact";

function Navbar({dark,setDark}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // const [darkMoon,setDarkMoon]=useState(faSolidMoon)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

  // const [showContact, setShowContact] = useState(false);

  return (
    <header className="z-10 fixed ">
      <nav
        className={`${dark ?'bg-gray-950 bg-opacity-50 ring-blue-500':'bg-white bg-opacity-20 ring-black'}  backdrop-blur-sm tablet:h-20 tab:h-16 phone:pt-1 tab:pt-2 tab:fixed  top-0 w-screen ring-1 hover:ring-white `}
      >
        {/* <h1>{`bg-${props.dark}`}</h1> */}
        <div className="mx-auto max-w-7xl px-2 tab:px-3 tablet:px-10 laptop:px-12">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center tab:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className={`inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${dark?'text-white':'text-black'}`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo and Navigation Links */}
            <div className="flex flex-1 items-center justify-center tab:items-stretch tab:justify-start">
              <div className="flex shrink-0 items-center ">
                <img
                  className="tab:h-9 phone:h-12 phone:rounded-md tab:w-auto phone:w-20 tab:rounded-l-lg tab:rounded-r-none"
                  src="src\assets\android-chrome-512x512.png "
                  alt="Name-logo"
                />
                <Link
                onClick={toggleMobileMenu}
                  to="/"
                  className={`phone:invisible tab:visible rounded-r-md bg-gray-800 phone:px-1 tablet:px-2 py-2 text-sm font-medium text-white `}
                  aria-current="page"
                >
                 <span className="  text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500"> Anurag <strong>P.</strong></span>
                </Link>
              </div>
              <div className="hidden tab:ml-3 tab:block">
                <div className="flex space-x-8 tab:space-x-2 tablet:space-x-5 laptop:space-x-8 container items-center">
                  <Link
                  
                    to="/home"
                    className={`rounded-md phone:px-2 phone:py-1 phone:text-sm tablet:px-3 tablet:py-2 font-medium text-gray-500 hover:bg-gray-700 hover:text-white bg-gray-50`}
                    onClick={ () => {
                      toggleMobileMenu()
                      document.title = "Text Manipulator - Home";
                    }}
                  >
                    Home

                  </Link>
                  <Link
                    to="/about"
                    className="rounded-md phone:px-2 phone:py-1 phone:text-sm tablet:px-3 tablet:py-2 font-medium text-gray-500 hover:bg-gray-700 hover:text-white bg-gray-50"
                    onClick={() => {
                      toggleMobileMenu()
                      document.title = "Text Manipulator - About";
                      // loading=true
                    }}
                  >
                    About
                  </Link>
                  <Link
                    to="/project"
                    className="rounded-md phone:px-2 phone:py-1 phone:text-sm tablet:px-3 tablet:py-2 font-medium text-gray-500 hover:bg-gray-700 hover:text-white bg-gray-50"
                    onClick={() => {
                      toggleMobileMenu()
                      document.title = "Text Manipulator - Projects";
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-md phone:px-2 phone:py-1 phone:text-sm tablet:px-3 tablet:py-2 font-medium text-gray-500 hover:bg-gray-700 hover:text-white bg-gray-50"
                    onClick={() => {
                      toggleMobileMenu()
                      document.title = "Text Manipulator - Contact";
                    }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="absolute m-3 inset-y-0 right-0 flex items-center pr-2 tab:static tab:inset-auto tab:ml-1 tab:pr-0">
              <div className={`w-auto ring-1 shadow hover:shadow-lg hover:shadow-white shadow-blue-200 bg-transparent bg-opacity-50 hover:scale-110 transition-all font-medium font-Patua ${dark?'bg-green-100 text-gray-950 hover:bg-white/60':'bg-pink-300'}  rounded-full py-1 px-2 m-2 flex items-center justify-center`}>
                <Link></Link>
                <Link to='/resume'>CV</Link>
              </div>
              {/* toggle darkMode button */}
              <button className={`${dark?'text-white':'text-black'}`} onClick={()=>{setDark(!dark)}}>
                <FontAwesomeIcon
                  icon={faSolidMoon}
                  size="xl"
                  className="ring-white ring-1 p-1 rounded-md hover:bg-gray-700"
                />
                {/* <FontAwesomeIcon icon={faRegularMoon} size="2xl" /> */}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="tab:hidden" id="mobile-menu">
            <div className={`space-y-1 px-2 pb-3 pt-2 ${dark?'text-gray-300':'text-gray-900'}`}>
              <Link
              onClick={toggleMobileMenu}
                to="/home"
                className={`block  rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white ${(e)=>{(isActive)?'bg-gray-400':''}}`}
                // aria-current="page"
              >
                Home
              </Link>
              <Link
              onClick={toggleMobileMenu}
                to="/about"
                className="block  rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white"
              >
                About
              </Link>
              <Link
              onClick={toggleMobileMenu}
                to="/project"
                className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Link>
              <Link
              onClick={toggleMobileMenu}
                to="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;




// bg-orange-950 bg-opacity-70 backdrop-blur-sm