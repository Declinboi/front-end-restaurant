import React from "react";
import Primarybutton from "./shared/Primarybutton";
import hero from "../assets/hero.png";
import heroBg from "../assets/heroBg.png";

const BgStyle = {
  backgroundImage: `url(${heroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] ">
            {/* text content section  */}
            <div className="space-y-7 text-Dark order-2 sm:order-1  ">
              <h1 data-aos="fade-up" className="text-5xl">
                Fresh & Healthy Meal Plan
                <span className=" mx-3 font-cursive text-7xl  text-secondary">
                  Delivery
                </span>
                In Miami
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
                Delicous Meals Delivered To Your Door From $100.33 per week.
              </p>

              {/* button section */}
              <div data-aos="fade-up" data-aos-delay="500">
                <Primarybutton />
              </div>
            </div>

            {/* image section  */}
            <div data-aos="zoom-in" data-aos-delay="300" className="relative z-30 order-1 sm:order-2 ">
              <img
                src={hero}
                alt=""
                className="w-full sm:scale-105 sm:translate-y-16 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
