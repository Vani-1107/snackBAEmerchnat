import React from "react";
import { GoDotFill } from "react-icons/go";
import direction from "../assets/direction.png";
import { FiPhone } from "react-icons/fi";
function About() {
  return (
    <div className="about-page h-[60vh] px-20">
      <div className="heading text-slate-600 text-3xl px-20 font-bold">
        About The Place
      </div>
      <div className="container flex flex-row border-4 rounded-2xl w-[80vw] h-[210px] ml-28 mt-8 ">
        <div className="div w-[66%] flex flex-row px-20 h-full my-auto pt-8 ">
          <div className="sub-div flex flex-col ">
            <span className="flex mb-4">
              <GoDotFill color="yellow " size={28} /> ₹1200 for two(Average)
            </span>
            <span className="flex mb-4">
              <GoDotFill color="yellow" size={28} /> Fine Dining,Cafe
            </span>
            <span className="flex">
              <GoDotFill color="yellow" size={28} /> Everyday Open Except
              Thursday{" "}
            </span>{" "}
          </div>
          <div className="sub-div2 flex flex-col px-20 ">
            <div className="flex mb-4">
              {" "}
              <GoDotFill color="yellow" size={28} /> Serves Chinese
            </div>
            <div className="flex mb-4">
              {" "}
              <GoDotFill color="yellow" size={28} />
              Accepts UPI, Credit Card , Snackpay
            </div>
            <div className="flex">
              {" "}
            </div>
          </div>
        </div>
        {/* <div className="w-2 h-full bg-black opacity-50"></div> */}
        <div className="w-[17%]  h-full my-auto border-x-2">
        <div className="div2 w-full mx-auto">
          <div className="imgg">
            <img src={direction} alt="" />
          </div>
          <div className=" py-6">Get Direction</div>
        </div>
        </div>
        <div className="div3 w-[17%] my-auto">
          <div className="img-div">
            <FiPhone size={34} color="yellow" />
          </div>{" "}
          <div className="text-div py-8">Call Restaurant</div>
        </div>
      </div>
    </div>
  );
}
export default About;
