import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaCaretDown,
  FaCaretUp,
  FaSquareCaretDown,
  FaUser,
} from "react-icons/fa6";
const navlink = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "About",
    path: "/about",
  },
  {
    link: "Contact",
    path: "/contact",
  },
];

const DropdownLinks = [
  {
    path: "/",
    link: "Vegatables",
  },
  {
    path: "/",
    link: "Fruits",
  },
  {
    path: "/",
    link: "Grains",
  },
];

const Navbar = ({ HandlePopup }) => {
  return (
    <div data-aos="fade" className="bg-white shadow-md ">
      <div className="container flex justify-between px-6 py-4  sm:py-3 ">
        {/* the logo section */}
        <div className=" font-cursive font-bold text-3xl  text-orange-500  mr-4">
          KRN
        </div>

        {/* Navlink section */}
        <div className="">
          <ul className="flex items-center gap-10 ">
            {navlink.map(({ path, link }) => (
              <li
                className="  sm:inline-block hidden  hover:text-orange-500 transition-all duration-150 ease-in-out underline font-semibold"
                key={path}
              >
                <NavLink to={path}> {link} </NavLink>
              </li>
            ))}

            {/* simple dropdown and links */}
            <li className="cursor-pointer group relative ">
              <a href="/">
                <div className="flex items-center gap-[2px] py-2">
                  Dropdown
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 transition" />
                  </span>
                </div>
              </a>

              {/* dropdown links */}
              <div className="absolute z-[9999] hidden group-hover:block shadow-md bg-gray-300 rounded-md p-2 ">
                <ul>
                  {DropdownLinks.map(({ path, link }) => (
                    <li key={path}>
                      <Link
                        className="inline-block hover:bg-red-200 rounded-md p-2 w-full text-sm "
                        to={path}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* login button section  */}
            <li className=" ">
              <button
                onClick={HandlePopup}
                className="flex justify-center items-center gap-2 bg-secondary h-10 text-white px-5 py-2 rounded-md hover:scale-105 duration-300 "
              >
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
