import React from "react";
import { IoLocateSharp, IoLocation } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-white mt-10">
      <div data-aos="fade-down" className="container bg-gradient-to-b from from-primary to-primaryDark rounded-t-3xl">
        {/* contact section */}
        <div>
          <h1 className="py-8 tracking-wider text-2xl font-bold text-center text-white">
            Contact Us
          </h1>
          {/* grid sect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            {/* address section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocation className="text-5xl" />
              </div>
              <p>
                #88, Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <br /> sagamu, badgry, india.
              </p>
            </div>

            {/* email section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdMail className="text-5xl" />
              </div>
              <div className="">
                <p> info@goodfood.com </p>
                <p> hr@goodfood.com </p>
              </div>
            </div>

            {/* Number section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p> +94 8767839083 - Sales and Services </p>
                <p> +94 7867868678 - Hiring Quaries </p>
                <p> +94 7899332137 - Whatsapp </p>
              </div>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className="flex justify-between p-4 items-center">
            <p>© 2024 TCJ. All right reserved </p>
            <div className="flex items-center gap-6">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms & Conditions</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
