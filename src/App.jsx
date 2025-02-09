import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { Outlet } from "react-router-dom";
import Preloader from "./components/PreLoader";
import SideBar from "./components/pages/SideBar";

function App({dark,setDark}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <AnimatedCursor
            innerSize={15}
            outerSize={30}
            color="999, 999, 999"
            outerAlpha={0.5}
            innerScale={0.9}
            outerScale={2}
            trailingSpeed={10}
          />
          <Header dark={dark} setDark={setDark}  />
          <SideBar dark={dark}/>
          <Outlet />
          <Footer dark={dark}/>
        </div>
      )}
    </>
  );
}

export default App;
