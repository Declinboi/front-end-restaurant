import React from "react";
import Apple from "../assets/png/apple.png";
import Kiwi from "../assets/png/kiwi.png";
import Leaf from "../assets/png/leaf.png";
import Lemon from "../assets/png/lemon.png";
import Tomato from "../assets/png/tomato.png";
import Primarybutton from "./shared/Primarybutton";

const Banner = () => {
  return (
    <div className="container px-4 py-14 relative">
      <div className="relative z-20">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="py-8 tracking-wider text-2xl font-semibold text-center text-Dark"
        >
          Taste The Healthy Difference
        </h1>

        {/* content section */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
        >
          <div className="space-y-10">
            <p>
              We know that <span className="text-orange-400">time </span> is the
              greatest value in the mordern world. Our healthy meal plan,
              delivery service, good food in Miami is the answer for those who
              want to eat healthily, saving time for buying food and preparing
              delicious, healthy meals.
            </p>
          </div>
          <div></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
        >
          <div></div>
          <div className="space-y-10">
            <p>
              We know that <span className="text-orange-400">time </span> is the
              greatest value in the mordern world. Our healthy meal plan,
              delivery service, good food in Miami is the answer for those who
              want to eat healthily, saving time for buying food and preparing
              delicious, healthy meals.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="0" className="flex justify-center mt-10 sm:mt-14">
          <Primarybutton />
        </div>
      </div>

      {/* fruit section */}
      <div data-aos="fade-right"  className="absolute top-5 left-6 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={Leaf} alt="" className="max-w-[260px] " />
      </div>
      <div data-aos="fade-right" className="absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={Tomato} alt="" className="max-w-[280px] " />
      </div>
      <div data-aos="fade-left"  className="absolute top-8 right-4 sm:top-28 sm:right-28 opacity-50 sm:opacity-100">
        <img src={Lemon} alt="" className="max-w-[260px] " />
      </div>
      <div data-aos="fade-left" className="absolute bottom-48 right-24 sm:-bottom-10 sm:right-0 opacity-50 sm:opacity-100">
        <img src={Apple} alt="" className="max-w-[280px] " />
      </div>
      <div data-aos="fade" className="absolute top-1/2 left-1/3 opacity-50 sm:opacity-100 -translate-x-1/2 -translate-y-1/2">
        <img src={Kiwi} alt="" className="max-w-[280px] " />
      </div>
    </div>
  );
};

export default Banner;
