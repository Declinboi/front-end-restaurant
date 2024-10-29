import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Primarybutton = () => {
  return (

    <div className="flex items-center group ">
      <button className=" bg-orange-400 h-10 text-white px-3 py-2 rounded-md ">
        Choose Your Meal Plan
      </button>
      <FaArrowRight className="inline-block group-hover:translate-x-4 duration-200 p-2 text-base h-10 w-10 bg-primaryDark text-white " />
    </div>
    
  );
};

export default Primarybutton;
