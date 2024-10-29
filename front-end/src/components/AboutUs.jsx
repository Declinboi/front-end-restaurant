import React from "react";
import polygon from "../assets/polygon.png";
import vector from "../assets/vector-wave.png";
import { FaUser } from "react-icons/fa6";
import Banner from "./Banner";

const BgColor = {
  backgroundImage: `url(${polygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const AboutUs = ({HandlePopup}) => {
  return (
    <div>
      <div style={BgColor} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 data-aos="fade"  className="pt-20 tracking-wider text-2xl font-semibold text-center text-Dark">
            About Us
          </h1>
          {/* card section */}
          <div data-aos="fade" data-aos-delay="300" className="bg-white/80 p-10 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            earum necessitatibus! Magnam deleniti, voluptatum accusamus qui
            incidunt error ullam cum aspernatur asperiores esse ipsum,
            reiciendis inventore ab commodi eum porro! <br /> Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Quia nam facilis illo ducimus
            praesentium quidem accusamus, mollitia aliquid cum blanditiis iure
            distinctio tenetur reprehenderit rem ratione numquam fuga ex sed!
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Unde aspernatur itaque quae sunt modi laborum porro. Impedit iste
            fuga facere! Impedit, veniam voluptatum. Optio voluptatem quas ullam
            nemo quod odit!
            {/* login button */}
            <div className="pt-10 flex justify-center">
              <button onClick={HandlePopup} className="flex justify-center items-center gap-2 bg-primary h-10 text-white px-5 py-2 rounded-md hover:scale-105 duration-300 ">
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>
        {/* wave section */}
        <div className="absolute top-0 right-0 w-full ">
          <img src={vector} alt="" className="mx-auto " />
        </div>
      </div>
      <Banner/>
    </div>
  );
};

export default AboutUs;
