import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import direction from "../assets/direction.png";
import { FiPhone } from "react-icons/fi";
import Modal from "react-modal";
import chow from "../assets/chow.png";
Modal.setAppElement("#root");
function About() {
  //popup4

  const [isOpen3, setIsOpen3] = useState(false);

  const openModal3 = () => {
    setIsOpen3(true);
  };

  const closeModal3 = () => {
    setIsOpen3(false);
  };

  //const modalClasses = `absolute top-8 left-1/3  w-1/4 h-fit flex justify-centre bg-white rounded-xl  z-50 md:w-[50vw]`;
  const modalClasses = `absolute top-8 lg:left-1/3 lg:w-[25vw] lg:h-fit md:h-fit flex justify-centre bg-white z-50 rounded-lg  md:w-fit 
   sm:h-[100%] sm:w-[100%] sm:left-0 md:h-fit md:left-1/4 `;
  return (
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
            <GoDotFill color="yellow" size={24} /> Everyday Open Except Thursday{" "}
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
              <img src={direction} className="h-[25px]" alt=""/>
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
            <div className=" relative lg:-bottom-10 lg:px-8">Get Direction</div>
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

            <Modal
              isOpen={isOpen3}
              onRequestClose={closeModal3}
              contentLabel="Example Modal"
              className={modalClasses}
            >
              <div className="call">
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
                    <div className="text-sm pb-2">
                      You can contact the restaurant
                    </div>
                    <div className="text-sm text-yellow-400 px-12 pb-4">
                      +9123456789
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm ml-4">Alternate Contact number</div>
                    <div className="text-sm text-yellow-400 px-12 py-2">
                      +9123456789
                    </div>
                  </div>
                </div>
              </div>
              <button className="rounded-3xl bg-yellow-500 h-fit w-fit -top-6 absolute left-1/2" onClick={closeModal3}>✖</button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
