import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoCloseOutline, IoLocateSharp, IoLocation } from "react-icons/io5";

const PopUp = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen top-0 left-0 fixed bg-black/50 z-50 backdrop-blur-sm ">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white p-4 rounded-md duration-200 w-[300px]">
              {/* header for login */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-Dark">login</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>
              {/* login form section */}
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />

                {/* button section  */}
                <div>
                  <button
                    className="w-full bg-primary text-white p-2 rounded-md"
                    onClick={() => setShowPopup(false)}
                  >
                    Login
                  </button>
                </div>

                {/* social login */}
                <div className="mt-4">
                  <p className="text-center"> or login with</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <FaFacebook className="text-3xl hover:text-blue-400 duration-200"/>
                    <FaGoogle className="text-3xl hover:text-primary duration-200"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
