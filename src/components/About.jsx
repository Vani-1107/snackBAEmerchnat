import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import direction from "../assets/direction.png";
import { FiPhone } from "react-icons/fi";
import Modal from "react-modal";
import chow from "../assets/chow.png";
import { IoCloseSharp } from "react-icons/io5";
import load from "../assets/load.png";
import celeb from "../assets/celeb.png";
import right from "../assets/right.png";
import { FaCheck } from "react-icons/fa";
import thankyou from "../assets/thankyou.png";

function About() {
  //popup4

  const [isOpen3, setIsOpen3] = useState(false);

  const openModal3 = () => {
    setIsOpen3(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal3 = () => {
    setIsOpen3(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  //loading pop-up
  const [isOpen7, setIsOpen7] = useState(false);

  const openModal7 = () => {
    setIsOpen7(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal7 = () => {
    setIsOpen7(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //popup on confirm booking
  const [isOpen8, setIsOpen8] = useState(false);

  const openModal8 = () => {
    setIsOpen8(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal8 = () => {
    setIsOpen8(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  //feeback popup
  const [isOpen9, setIsOpen9] = useState(false);

  const openModal9 = () => {
    setIsOpen9(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal9 = () => {
    setIsOpen9(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //offer popup
  const [isOpen10, setIsOpen10] = useState(false);

  const openModal10 = () => {
    setIsOpen10(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal10 = () => {
    setIsOpen10(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  useEffect(() => {}, [isOpen3, isOpen7, isOpen8, isOpen9]);

  return (
    <div>
      {/* contact popup */}
      <div>
        {isOpen3 && (
          <div>
            <div className="absolute top-16 lg:left-[33%] md:left-[25%] sm:left-[4%] bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[25vw] md:h-fit md:w-[50vw] sm:h-full sm:w-[98%]">
                <div className="text-lg font-bold text-slate-500 px-28 py-6">
                  Call at Restaurant
                </div>
                <div className="chow-div flex flex-row px-8 w-[379px] border-y-2">
                  <div className="chow">
                    <img src={chow} className="h-16 w-16 pt-2" alt="" />
                  </div>
                  <div className="chow-text flex flex-col py-4">
                    <div className="text1 px-4 text-lg font-bold">
                      Chowman - Salt Lake
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      Salt Lake ,Sector 2
                    </div>
                  </div>
                </div>
                <div className="contact py-6 px-24">
                  <div className="flex flex-col ">
                    <div className="text-sm pb-2 text-center">
                      You can contact the restaurant
                    </div>
                    <div className="text-sm text-yellow-400 px-12 pb-4">
                      +9123456789
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm ml-4 text-center">
                      Alternate Contact number
                    </div>
                    <div className="text-sm text-yellow-400 px-12 py-2">
                      +9123456789
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-16 right-2 z-[100]">
              <button className="" onClick={closeModal3}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* loading popup */}
      <div>
        {isOpen7 && (
          <div className="absolute top-16 lg:left-[33%] md:left-[25%] sm:left-0 bg-white z-[100] rounded-2xl">
            <div className="pop-up lg:h-fit lg:w-[25vw] md:h-fit md:w-[50vw] sm:h-full sm:w-[98%]">
              <div className="flex flex-col items-center py-6 ">
                <div>
                  <img src={load} alt="" />
                </div>
                <div className="font-bold text-md text-slate-400 py-4">
                  Something is cooking !
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* call restaurant after booking */}

      <div className="">
        {isOpen8 && (
          <div>
            <div className="absolute top-20 lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 text-center">
                  Call Restaurant
                </div>
                <div className="chow-div flex justify-center flex-row border-y-2 py-2">
                  <div className="chow">
                    <img src={chow} className="h-16 w-16" alt="" />
                  </div>
                  <div className="chow-text flex flex-col ">
                    <div className="text1 px-4 text-lg font-bold">
                      Chowman - Salt Lake
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      Salt Lake ,Sector 2
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="flex justify-center">
                    <img src={celeb} className="h-60 w-60" alt="" />
                  </div>
                  <div className="tick absolute h-32 w-32 bottom-[42%] left-[36%] ">
                    <img src={right} alt="" />
                    <div className="absolute top-8 left-8">
                      <FaCheck size={60} color="white" />
                    </div>
                  </div>
                </div>
                <div className="text-div flex flex-col ">
                  <div className="text-2xl font-bold text-center">
                    Payment Successful !
                  </div>
                  <div className="text-sm text-slate-600 text-center ">
                    Your booking request is successfully recieved!
                  </div>
                </div>

                <div className="flex flex-col items-center py-4 ">
                  <div>
                    <button className="bg-yellow-500 py-4 px-32 rounded-2xl font-bold">
                      Continue
                    </button>
                  </div>
                  <div className="py-4">
                    <button>Need Help?</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-4 z-[100]">
              <button className="" onClick={closeModal8}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* feedback popup */}
      <div className="">
        {isOpen9 && (
          <div>
            <div className="absolute top-20 lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 text-center">
                  Call Restaurant
                </div>
                <div className="chow-div flex flex-row justify-center border-y-2 py-2">
                  <div className="chow">
                    <img src={chow} className="h-16 w-16" alt="" />
                  </div>
                  <div className="chow-text flex flex-col ">
                    <div className="text1 px-4 text-lg font-bold">
                      Chowman - Salt Lake
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      Salt Lake ,Sector 2
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img className="h-48 w-56" src={thankyou} alt="" />
                </div>
                <div className="text-div flex flex-col py-4">
                  <div className="text-2xl font-bold text-center">
                    Oops ! Payment Failed
                  </div>
                  <div className="text-sm text-slate-600 text-center ">
                    Your Payment Transaction Failed ! Please try again !
                  </div>
                </div>

                <div className="flex flex-col items-center py-4 ">
                  <div className="py-6">
                    <button className="bg-yellow-500 py-4 px-32 rounded-2xl font-bold">
                      CONTINUE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-1 z-[100]">
              <button className="" onClick={closeModal9}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* offer popup */}
      <div className="">
        {isOpen10 && (
          <div>
            <div className="absolute top-20 lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 text-center">
                  Offer Details
                </div>
                <div className="chow-div flex justify-center flex-row border-y-2 py-4">
                  <div className="chow">
                    <img src={chow} className="h-16 w-16" alt="" />
                  </div>
                  <div className="chow-text flex flex-col ">
                    <div className="text1 px-4 text-3xl font-bold">
                      Chowman - Salt Lake
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      Salt Lake ,Sector 2
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center  items-center rounded-lg border border-yellow-500 w-[80%] mx-auto mt-2">
                  <div className="font-bold text-4xl py-2">20% off</div>
                  <div className="text-md py-2">
                    on your dining billing above ₹1499
                  </div>
                </div>
                <div className=" px-8 flex flex-col py-2">
                  <div className="text-xl font-bold py-1">How to Reedem?</div>
                  <div>
                    {" "}
                    <li className="text-md py-2">
                      Pay at the restaurant using snackBAE to redeem
                    </li>
                  </div>
                </div>
                <div className="flex flex-col px-8">
                  <div className="font-bold text-xl">Terms & Conditions</div>
                  <div className="py-2">
                    <li className="text-sm py-2">
                      Maximum offer discount applicable ₹ 300
                    </li>
                    <li className="text-sm py-2">
                      This offer cannot be combined with any other offers
                      available
                    </li>
                    <li className="text-sm py-2">
                      Minimum Bill to avail the offer ₹ 1499{" "}
                    </li>
                    <li className="text-sm py-2">
                      SnackBAE has no role to play on taxes and charges levied
                      by the government and restaurants
                    </li>
                    <li className="text-sm py-2">
                      Offer is valid in all outlets of chowman
                    </li>
                    <li className="text-sm py-2">Others T&Cs may apply</li>
                  </div>
                </div>

                <div className="flex justify-center py-4">
                  <button className="bg-yellow-500 py-4 px-32 rounded-2xl font-bold">
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-4 z-[100]">
              <button className="" onClick={closeModal10}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div id="about">
        <div className="about-page h-fit  py-4 ">
          <div className="heading text-slate-600 lg:text-3xl font-bold w-[90%] mx-auto  md:text-2xl  md:-py-12  pb-8 ">
            About The Place
          </div>
          {/* about-md */}
          <div className="about-md flex flex-col border-2  rounded-xl lg:hidden w-[90%] mx-auto relative  ">
            <div className="p-4">
              <span className="flex mb-2 text-sm text-slate-500">
                <GoDotFill color="yellow " size={24} /> ₹1200 for two(Average)
              </span>
              <span className="flex mb-2 text-sm  text-slate-500">
                <GoDotFill color="yellow" size={24} /> Fine Dining,Cafe
              </span>
              <span className="flex mb-2 text-sm  text-slate-500">
                <GoDotFill color="yellow" size={24} /> Everyday Open Except
                Thursday{" "}
              </span>{" "}
              <span className="flex mb-2 text-sm  text-slate-500">
                {" "}
                <GoDotFill color="yellow" size={24} /> Serves Chinese
              </span>
              <span className="flex mb-2 text-sm  text-slate-500">
                {" "}
                <GoDotFill color="yellow" size={24} />
                Accepts UPI, Credit Card , Snackpay
              </span>
            </div>
            <div className="flex relative w-full border-t-2 px-4">
              <div className="flex flex-row items-center w-[50%] gap-4 py-2">
                <div className="imgg">
                  <img src={direction} className="h-[25px]" alt="" />
                </div>
                <div className="relative">Get Direction</div>
              </div>
              <div className="flex flex-row items-center w-[50%] relative gap-4 border-l-2">
                <div className="img-div py-2 pl-2">
                  <FiPhone size={24} color="yellow" />
                </div>
                <div className="text-div py-2">
                  <span onClick={openModal3} className="cursor-pointer">
                    Call Restaurant
                  </span>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="container lg:flex flex-row border-4 rounded-2xl w-[90%] h-[210px] mx-auto mt-8  lg:h-[200px] hidden">
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
                <div className="flex"> </div>
              </div>
            </div>
            {/* <div className="w-2 h-full bg-black opacity-50"></div> */}
            <div className="w-[17%]  h-full my-auto border-x-2">
              <div className="div2 w-full mx-auto lg:top-16 lg:left-8 relative">
                <div className="imgg">
                  <img
                    src={direction}
                    alt=""
                    className="lg:px-12 relaitve lg:bottom-32"
                  />
                </div>
                <div className=" relative lg:-bottom-10 lg:px-8">
                  Get Direction
                </div>
              </div>
            </div>
            <div className="div3 w-[17%] my-auto   lg:left-5 relative">
              <div className="img-div relative lg:-bottom-8 lg:left-16">
                <FiPhone size={34} color="#FFD601" />
              </div>{" "}
              <div className="text-div py-8">
                <span
                  onClick={openModal3}
                  className="cursor-pointer relative lg:-bottom-12 lg:-right-10"
                >
                  Call Restaurant
                </span>

                <div className="call"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
