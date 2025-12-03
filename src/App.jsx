import  { React, useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { Outlet } from "react-router-dom";
import Preloader from "./components/PreLoader";
import SideBar from "./components/pages/SideBar";
import Resume from "./components/pages/Resume";


function App({ dark = false, setDark = () => {} }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500`}>
          <AnimatedCursor
            innerSize={12}
            outerSize={20}
            color={dark ? "255,0,0" : "0,0,0"} 
            outerAlpha={0.3}
            innerScale={0.8}
            outerScale={3}
            trailingSpeed={6}
            clickables={["a", "button", ".link"]}
          />
          <Header dark={dark} setDark={setDark} />
          <SideBar dark={dark} />
          <main className="min-h-screen pt-16">
            <Outlet />
              <Resume dark={dark} />

          </main>
          <Footer dark={dark} />
        </div>
      )}
    </>
  );
}

export default App;
