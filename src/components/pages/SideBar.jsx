import {
  faSquareGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";

export default function SideBar({ dark }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔁 Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 768) {
        // Only apply for mobile/tablets
        setShowSidebar(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      } else {
        // Always show on larger screens
        setShowSidebar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const icons = [
    {
      icon: faSquareGithub,
      label: "GitHub",
      url: "https://github.com/Anuragpandey799/my_portfolio",
      color: "hover:text-pink-500",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/anurag-pandey-7b4502304",
      color: "hover:text-blue-500",
    },
    {
      icon: faEnvelope,
      label: "Email",
      url: "mailto:anuhackerag799@gmail.com",
      color: "hover:text-green-500",
    },
    {
      icon: faYoutube,
      label: "YouTube",
      url: "https://www.youtube.com/@anuragpandey9337",
      color: "hover:text-red-500",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showSidebar && (
          <motion.nav
            key="sidebar"
            className="fixed bottom-0 right-0 z-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
          >
            <div
              className={`rounded-l-3xl p-4 backdrop-blur-lg bg-opacity-80 ring-2 ${
                dark
                  ? "bg-gradient-to-tr from-gray-800 via-gray-900 to-black ring-purple-500 text-white"
                  : "bg-gradient-to-tr from-pink-200 via-white to-blue-200 ring-blue-400 text-black"
              } shadow-xl transition-shadow duration-500`}
            >
              <div className="flex flex-col items-center gap-5">
                {icons.map((item, idx) => (
                  <div key={idx} className="group relative">
                    <Link
                      to={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tooltip-id="sidebar-tooltip"
                      data-tooltip-content={item.label}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`text-3xl tablet:text-4xl transition-transform duration-300 transform hover:scale-125 animate-pulse ${item.color}`}
                      />
                    </Link>
                    <span
                      className={`absolute right-full mr-2 text-xs font-semibold rounded bg-black text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        dark ? "bg-gray-700" : "bg-gray-800"
                      } hidden md:inline`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Tooltip component */}
      <Tooltip id="sidebar-tooltip" place="left" className="z-50" />
    </>
  );
}
