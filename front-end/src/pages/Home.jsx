import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import WhyChoose from "../components/WhyChoose";
import AboutUs from "../components/AboutUs";
import PopUp from "../components/PopUp";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect (() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    },
    []);

  return (
    <div className="overflow-x-clip">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <AboutUs HandlePopup={HandlePopup} />
      <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default Home;
