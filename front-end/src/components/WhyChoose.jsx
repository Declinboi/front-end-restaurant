import React from "react";
import { FaBus } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <div className="bg-gray-100 py-14 md:py-28">
      <div className="container ">
        <h1 data-aos="fade" data-aos-delay="300" className="pb-16 tracking-wider text-2xl font-semibold text-center text-Dark">
          Why Choose Us
        </h1>

        {/* card section */}
        <div  className="">
          <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
            {/* 1st card */}
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-Dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, explicabo sed voluptate deleniti placeat.
              </p>
              <p className=" text-5xl rotate-90 text-red-400 text-center translate-x-5">
                ....
              </p>
              <FaBus className="text-5xl text-red-400" />
            </div>

            {/* 2nd card */}
            <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
              <FaBus className="text-5xl text-secondary" />
              <p className=" text-5xl rotate-90 text-secondary text-center translate-x-5">
                ....
              </p>
              <p className="text-Dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, explicabo sed voluptate deleniti placeat.
              </p>
            </div>
            {/* 3rd card */}
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-Dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, explicabo sed voluptate deleniti placeat.
              </p>
              <p className=" text-5xl rotate-90 text-red-400 text-center translate-x-5">
                ....
              </p>
              <FaBus className="text-5xl text-red-400" />
            </div>

            {/* 4th card */}
            <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
              <FaBus className="text-5xl text-secondary" />
              <p className=" text-5xl rotate-90 text-secondary text-center translate-x-5">
                ....
              </p>
              <p className="text-Dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, explicabo sed voluptate deleniti placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WhyChoose;
