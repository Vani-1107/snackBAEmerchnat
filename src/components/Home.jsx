import React, { useState } from "react";
import bg from "../assets/Rectangle 3463524.png";
import arrow from "../assets/Back.png";
import like from "../assets/More.png";
import share from "../assets/More (1).png";
import recommend from "../assets/Group 1000003963.png";
import restro from "../assets/Group 1000003977.png";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import slider from "../assets/sliderimg.png";
import arrow1 from "../assets/Group 1000004020.png";
import arrow2 from "../assets/v.png";
import Modal from "react-modal";

const images = [
  { url: slider, caption: "Image 1" },
  { url: slider, caption: "Image 2" },
  { url: slider, caption: "Image 3" },
];
Modal.setAppElement("#root");
function Home() {
  // const images = [
  //     'slider1.png',
  //     'Back.png',
  //     'More.jpg',
  //     // Add more image URLs as needed
  //   ];
  // Slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  // Popup
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const modalClasses = `fixed top-8 left-1/3  w-1/4 h-5/6 flex justify-centre bg-white  z-50`;
  return (
    <div className="home-page">
      {" "}
      <div className="Home">
        <div className="home-img relative">
          <img className="w-[100vw] " src={bg} alt="" />
          <img
            className=" absolute top-8 left-12 cursor-pointer"
            src={arrow}
            alt=""
          />
          <img
            src={like}
            className="absolute top-0 right-24 cursor-pointer"
            alt=""
          />
          <img
            src={share}
            className="absolute top-0 right-4 cursor-pointer"
            alt=""
          />
          <img
            src={recommend}
            className="absolute top-80 right-0 cursor-pointer"
            alt=""
          />
          <img src={restro} className="absolute left-4 top-80" alt="" />
        </div>
      </div>
      <div className=" px-36 w-full h-fit flex ">
        {/* slider */}
        <div>
          <div className=" py-8 px-4 text-3xl text-slate-600 font-bold">
            Photos
          </div>

          {/* <Slider images={images} /> */}
          <div className="slider-container w-[50vw]  ">
            <img
              src={images[currentSlide].url}
              alt={images[currentSlide].caption}
              className="slider-image h-[50vh] w-[60vw] object-cover rounded-lg shadow-md "
            />

            <button
              className="absolute left-24 top-[114vh]"
              onClick={handlePrev}
            >
              <MdArrowBackIos size={40} color="white" />
            </button>
            <button
              className="absolute top-[114vh] left-[50vw]"
              onClick={handleNext}
            >
              <MdArrowForwardIos size={40} color="white" />
            </button>
          </div>
        </div>
        {/* hi */}
        <div className="flex flex-col py-2 px-20 my-24 ">
          <div className="button-div  bottom-2 h-fit w-[30vw] items-center ">
            <div className="button1">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between py-2 "
                onClick={openModal}
              >
                <span className="pl-8 py-2">Recommed This Place </span>

                <img className=" px-6 py-2 h-10 " src={arrow1} alt="" />
              </button>
              <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={modalClasses}
              >
                <div className="pop-up w-[50vw] ">
                  <div className="head-pop text-xl font-bold text-slate-600 py-2 flex align-middle items-center">
                    Recommend this place to help other foodies
                  </div>
                </div>
                <button onClick={closeModal}></button>
              </Modal>
              {/* </div> */}
            </div>
            <div className="button2  ">
              <button className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between ">
                <span className="pl-8 pt-3">Available Offers</span>{" "}
                <img className=" px-6 py-2 h-10 mt-2" src={arrow1} alt="" />
              </button>
            </div>
            <div className="button3 ">
              <button className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl bg-yellow-400 flex justify-between">
                <span className="pl-8 pt-3"> Book a table</span>
                <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
              </button>
            </div>
            <div className="button4 ">
              {" "}
              <button className="h-16 text-md w-full border-2 rounded-lg text-xl bg-yellow-400 flex justify-between ">
                <span className="pl-8 pt-3">Pay Bill</span>
                <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
