import React, { useState, useEffect } from "react";
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
import chow from "../assets/chow.png";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { CiGlass, CiSearch } from "react-icons/ci";
import burger from "../assets/burger.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const datanew = [
  {
    id: 1,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 2,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 3,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  // ... Add more data objects here
];
const reedem=[{
  text:"Reedem Now"}
];

const datanew1 = [
  {
    id: 1,
    image: burger, // Replace with your image URL
    text1: "Smoking Burger",
    text2: "240",
    
  },
  {
    id: 2,
    image: burger, // Replace with your image URL
    text1: "Smokin Burger",
    text2: "240",
    
  },
  {
    id: 3,
    image: burger, // Replace with your image URL
    text1: "Smokin Burger",
    text2: "240",
    
  },
  {
    id: 4,
    image: burger, // Replace with your image URL
    text1: "Smoking Burger",
    text2: "240",
    
  },
  {
    id: 5,
    image: burger, // Replace with your image URL
    text1: "Smokin Burger",
    text2: "240",
    
  },
  {
    id: 6,
    image: burger, // Replace with your image URL
    text1: "Smokin Burger",
    text2: "240",
    
  },
  // ... Add more data objects here
];
// const ListItem = ({ image, text1, text2, text3 }) => (
//   <div className="list-item">
//     <img src={image} alt={text1} className="list-item-image" />
//     <div className="list-item-content">
//       <p className="list-item-text1">{text1}</p>
//       <p className="list-item-text2">{text2}</p>
//       <p className="list-item-text2">{text3}</p>
//     </div>
//   </div>
// );

const WEEK_DAYS = ["Thur", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"];
const rectext1 = ["Redeem Now"];

const rectext = ["Recommendations"];

const images = [
  { url: slider, caption: "Image 1" },
  { url: slider, caption: "Image 2" },
  { url: slider, caption: "Image 3" },
];
Modal.setAppElement("#root");
function Home() {
  //guest
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(Array.from({ length: 10 }, (_, i) => i + 1));
  }, []);

  //timing
  const openingTime = "11:00";
  const closingTime = "23:00";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [availableHours, setAvailableHours] = useState([]);
  useEffect(() => {
    const updateAvailableHours = () => {
      const now = new Date();
      const hours = [];

      // Ensure opening time is before closing time
      if (openingTime > closingTime) {
        console.warn(
          "Invalid opening and closing times: Opening time must be before closing time."
        );
        return; // Prevent unnecessary calculations
      }

      // Convert opening and closing times to Date objects
      const open = new Date();
      open.setHours(...openingTime.split(":"));
      open.setMinutes(0);
      open.setSeconds(0);
      const close = new Date();
      close.setHours(...closingTime.split(":"));
      close.setMinutes(0);
      close.setSeconds(0);

      // Iterate from opening time to closing time with 1-hour gap
      let current = new Date(open.getTime());
      while (current <= close) {
        const hour = current.getHours();
        const minutes = current.getMinutes().toString().padStart(2, "0");
        const timeStr = `${hour}:${minutes}`;

        // Determine clickability based on current time
        const isClickable = current > now;

        hours.push({ time: timeStr, isClickable });

        // Add 1 hour to the current time
        current.setHours(current.getHours() + 1);
      }

      setAvailableHours(hours);
    };

    // Update available hours initially and every minute to reflect changes
    updateAvailableHours();
    const intervalId = setInterval(updateAvailableHours, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [openingTime, closingTime]);

  //Date
  const [startDate, setStartDate] = useState(new Date());
  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const daysToScroll = Math.round(scrollLeft / 150); // Assuming 150px per day
    const newStartDate = new Date(
      startDate.getTime() - daysToScroll * 24 * 60 * 60 * 1000
    );
    setStartDate(newStartDate);
  };

  // Function to format a date object into a string
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();
    const monthInt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const monthWords = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${monthWords[month - 1]}`;
  };

  // Generate an array of dates for the current week
  const getWeekDates = () => {
    const days = [];
    const currentDay = startDate.getDay();
    for (let i = currentDay - 3; i >= 0; i--) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);

      const d = new Date(date);

      // Extract the day of the week using getDay()
      const weekday = d.getDay();

      // Convert the numerical day (0-6) to the corresponding weekday string (Sun-Sat)
      const weekdayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
        weekday
      ];

      console.log("Extracted weekday:", weekdayString); // Output: "Thu"
      // console.log("day  ",weekdayString);
      days.unshift({ date: formatDate(date), dd: weekdayString });
      console.log(date, " day : ", weekdayString);
    }
    // for (let i = 0; i < 7; i++) {
    //   const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    //   days.push({ date: formatDate(date), weekday: WEEK_DAYS[i] });
    // }

    return days;
  };
  const weekDates = getWeekDates();

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
  const modalContainerStyle = {
    // Base styles for the modal container
  };

  if (isOpen) {
    // Apply conditional styles when modal is open
    modalContainerStyle.backgroundColor = "black";
    modalContainerStyle.opacity = 0.5;
  }
  //popup2
  const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };
  //popup3
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };
  //popup4
  const [isOpen4, setIsOpen4] = useState(false);

  const openModal4 = () => {
    setIsOpen4(true);
  };

  const closeModal4 = () => {
    setIsOpen4(false);
  };

  //Search bar
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const modalClasses = `absolute top-8 lg:left-1/3 md:left-1/4 lg:w-[30vw] md:h-fit lg:h-fit flex justify-centre bg-white z-50 rounded-lg  md:w-[44vw] sm:h-[100%] sm:w-[100%] sm:left-0`;

 
  //input for pay bill popup
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    // Allow only numbers and a single decimal point
    // const regex = /^\d+(\.\d{0,2})?$/;
    // if (regex.test(event.target.value)) {
    setAmount(event.target.value);
    // }
  };
  return (
    <div className="">
      {" "}
      <div className="Home  ">
        <div className="home-img sm:h-[50vh] lg:h-[60vh] w-[100vw] relative">
          <img
            className="w-[100vw] h-full"
            src={bg}
            alt=""
          />
          <img
            className=" absolute top-6 left-12 cursor-pointer lg:top-6 md:top-4  sm:top-4 sm:h-8"
            src={arrow}
            alt=""
          />
          <img
            src={like}
            className="absolute top-0 right-20 cursor-pointer sm:h-14 sm:top-2"
            alt=""
          />
          <img
            src={share}
            className="absolute top-0 right-8 cursor-pointer sm:h-14 sm:top-2"
            alt=""
          />
          <img
            src={recommend}
            className="absolute top-80 right-0 cursor-pointer lg:top-44 md:top-28 md:h-[13vw] sm:top-28 sm:h-[16vw] lg:h-fit"
            alt=""
          />
          <img
            src={restro}
            className="absolute left-4 bottom-5 md:h-[12vw] sm:w-[80vw] h-[22vw] lg:w-[60vw]"
            alt=""
          />
        </div>
      </div>
      <div className=" px-36 w-full h-fit flex ">
        {/* slider */}
        <div>
          <div className=" py-8 px-4 text-3xl text-slate-600 font-bold lg:-ml-16 md:hidden sm:hidden lg:block">
            Photos
          </div>

          {/* <Slider images={images} /> */}
          <div className="slider-container w-[50vw] relative lg:-left-16 md:hidden lg:flex sm:hidden ">
            <img
              src={images[currentSlide].url}
              alt={images[currentSlide].caption}
              className="slider-image h-[50vh] w-[60vw] object-cover rounded-lg shadow-md  "
            />

            <button
              className="absolute left-[25px] top-[155px]"
              onClick={handlePrev}
            >
              <MdArrowBackIos size={40} color="white" />
            </button>
            <button
              className="absolute top-[150px] left-[720px]"
              onClick={handleNext}
            >
              <MdArrowForwardIos size={40} color="white" />
            </button>
          </div>
        </div>
        {/* hi */}
        {/* md-div */}
        <div className="div-md md:flex flex-col h-fit w-full py-8 lg:hidden sm:-ml-4">
          <div className="button2  ">
            <button
              className="h-16 text-md w-[90vw] border-2 rounded-lg mb-8 text-xl flex justify-between -ml-28 "
              onClick={openModal4}
            >
              <span className="pl-8 pt-3">Available Offers</span>{" "}
              <img className=" px-6 py-2 h-10 mt-2" src={arrow1} alt="" />
            </button>
          </div>
          <div className="button1">
            <button
              className="h-16 text-md -ml-28 border-2 rounded-lg mb-8 text-xl flex justify-between py-2 w-[90vw] "
              onClick={openModal}
            >
              <span className="pl-8 py-2 text-xl md:-mt-1">
                Recommed This Place{" "}
              </span>

              <img className=" px-6 py-2 h-10 " src={arrow1} alt="" />
            </button>
          </div>
        </div>

        <div className="flex flex-col py-2 px-20 my-24  md:hidden lg:block sm:hidden lg:py-4">
          <div className="button-div  bottom-2 h-fit w-[30vw] items-center lg:-left-24 relative md:-left-36 md:w-[36vw]">
            <div className="button1">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between py-2 "
                onClick={openModal}
              >
                <span className="pl-8 py-2 text-lg md:-mt-1">
                  Recommed This Place{" "}
                </span>

                <img className=" px-6 py-2 h-10 " src={arrow1} alt="" />
              </button>
              <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={`${modalClasses} `}
              >
                <div className="pop-up">
                  <div className="head-pop text-xl font-bold text-slate-600 py-4 text-center">
                    Recommend this place to help other foodies
                  </div>
                  <div className="chow-div flex flex-row justify-center pb-4">
                    <div className="chow">
                      <img src={chow} className="h-16 w-16" alt="" />
                    </div>
                    <div className="chow-text flex flex-col">
                      <div className="text1 px-4 text-xl font-bold">
                        Chowman - Salt Lake
                      </div>
                      <div className="txt2 px-4 text-slate-600">
                        Salt Lake ,Sector 2
                      </div>
                    </div>
                  </div>
                  <div className="chow-button flex flex-row justify-center gap-2">
                    <div className="btn-1 px-2  border-2 rounded-md bg-yellow-500 ">
                      <button className=" flex px-4 py-2 ">
                        <div className="-ml-2 py-1">
                          <GoThumbsup className="" />
                        </div>{" "}
                        <div className="ml-2">Recommend</div>
                      </button>
                    </div>
                    <div className="btn2   border-2 rounded-md ">
                      {" "}
                      <button className="flex py-2 px-4 ">
                        <div className="-ml-1 py-1">
                          <GoThumbsdown />
                        </div>
                        <div className="ml-2">Not Recommend</div>
                      </button>
                    </div>
                  </div>
                  <div className="rec-txt text-lg font-bold text-slate-600 px-8 py-6">
                    Recommend Dishes
                  </div>
                  <div className="flex items-center -mt-2 rounded-md border border-gray-300 w-[88%] mx-auto ">
                    <CiSearch />
                    <input
                      type="text"
                      placeholder=" Search your Favourites"
                      className="w-[300px] h-8 px-2 py-2  "
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="map-img w-[88%] mx-auto pt-4">
                  <div className="container flex flex-wrap justify-center gap-1 ">
                      {/* {datanew.map((item) => (
                        <ListItem key={item.id} {...item} />
                      ))} */}
                      {datanew1.map((data)=>(
                            
                              <div className="p-2 border-2  w-fit rounded-xl relative shadow-lg flex flex-col items-center">
                                
                                <img className="h-12 w-12" src={data.image}></img>
                                <div className="text-xs text-slate-600 ">{data.text1}</div>
                                <div className="text-lg fnt-bold">{data.text2}</div>
                                
                                {reedem.map((data)=>(
                        <div className=""><button className="border-2 text-sm px-2 py-2 rounded-lg bg-yellow-500">{data.text}</button></div>
                       ))}
                              </div>
                            )
                      )
                      }
                      
                    </div>

                  </div>
                  <div className="con-butt py-4 mb-2 ">
                    <button className="text-xl font-bold bg-yellow-500 w-[90%] py-4 rounded-xl ml-5 ">
                      Continue
                    </button>
                  </div>
                </div>
                <button className="rounded-3xl bg-yellow-500 h-fit w-fit -top-6 absolute left-1/2" onClick={closeModal}>✖</button>
              </Modal>
              {/* </div> */}
            </div>
            <div className="button2  ">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between "
                onClick={openModal4}
              >
                <span className="pl-8 pt-3">Available Offers</span>{" "}
                <img className=" px-6 py-2 h-10 mt-2" src={arrow1} alt="" />
              </button>
              <Modal
                isOpen={isOpen4}
                onRequestClose={closeModal4}
                contentLabel="Example Modal"
                className={modalClasses}
              >
                <div className="offers">
                  <div className="text-lg text-slate-500 font-bold text-center py-4">
                    Available Offers
                  </div>
                  <div className="chow-div flex flex-row px-24  border-y-2 py-2">
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
                  <div className="map ">
                    <div className="container flex flex-wrap justify-center gap-4 p-4">
                      {/* {datanew.map((item) => (
                        <ListItem key={item.id} {...item} />
                      ))} */}
                      {datanew.map((data)=>(
                            
                              <div className="p-2 border-2 w-fit rounded-xl relative shadow-lg flex flex-col items-center">
                                <div className="absolute top-0 left-0 rounded-t-xl w-full h-3 bg-yellow-300"></div>
                                <img className="h-12 w-12 " src={data.image}></img>
                                <div className="text-md font-bold">{data.text1}</div>
                                <div className="text-3xl font-bold border border-yellow-500 py-2 px-2 rounded-xl">{data.text2}</div>
                                <div className="text-xs">{data.text3}</div>
                                {reedem.map((data)=>(
                        <div className="py-8"><button className="border-2 text-sm px-2 py-2 rounded-lg bg-yellow-500">{data.text}</button></div>
                       ))}
                              </div>
                            )
                      )
                      }
                      
                    </div>
                  </div>
                </div>

                <button className="rounded-3xl bg-yellow-500 h-fit w-fit -top-6 absolute left-1/2" onClick={closeModal4}>✖</button>
              </Modal>
            </div>
            <div className="button3 ">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl bg-yellow-400 flex justify-between"
                onClick={openModal1}
              >
                <span className="pl-8 pt-3"> Book a table</span>
                <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
              </button>
              <Modal
                isOpen={isOpen1}
                onRequestClose={closeModal1}
                contentLabel="Example Modal"
                className={modalClasses}
              >
                <div className="book">
                  <div className="hd-txt text-xl font-bold text-slate-600 lg:px-40 py-4 sm:relative ">
                    Book a Table
                  </div>
                  <div className="chow-div flex flex-row px-8  w-[463px] border-y-2 py-4 justify-center" >
                    <div className="chow">
                      <img src={chow} className="h-16 w-16" alt="" />
                    </div>
                    <div className="chow-text flex flex-col">
                      <div className="text1 px-4 text-xl font-bold">
                        Chowman - Salt Lake
                      </div>
                      <div className="txt2 px-4 text-slate-600">
                        Salt Lake ,Sector 2
                      </div>
                    </div>
                  </div>
                  <div className="day">
                    <div className="day-text  px-6 text-lg pt-2 pb-4">
                      Which Day?
                    </div>
                    <div className="calendar-scroller" onScroll={handleScroll}>
                      <div className="calendar-header">
                        {/* {WEEK_DAYS.map((day) => (
          <span key={day}>{day}</span>
        ))} */}
                      </div>
                      <div className="calendar-body flex flex-row">
                        {weekDates.map((day) => (
                          <div
                            key={day.date}
                            className="calendar-day border-2 ml-2 rounded-xl pb-2"
                          >
                            <div className="date px-5 cursor-pointer">
                              {day.date}
                            </div>
                            <div className="weekday px-5">{day.dd}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg pt-2 px-6 pb-2">What time?</div>
                  <div className=" w-[42%] overflow-scroll no-scrollbar ">
                    <ul className="flex flex-row  px-18 py-2 rounded-lg px-2 ">
                      {availableHours.map((hour, index) => {
                        const style = hour.isClickable
                          ? {}
                          : { pointerEvents: "none", opacity: 0.5 };
                        return (
                          <li
                            className="border-2 text-lg px-4 py-2 ml-1 rounded-lg cursor-pointer"
                            key={index}
                            style={style}
                          >
                            {hour.time}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="px-6 pb-4 text-lg">How Many Guests?</div>
                  <div>
                    <ul className="flex flex-row w-[42%] overflow-scroll no-scrollbar px-2">
                      {numbers.map((number) => (
                        <li
                          className="px-6 text-xl font-bold border-2 rounded-lg ml-2 py-4 cursor-pointer"
                          key={number}
                        >
                          {number}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-4 text-lg">Special Ocassions</div>
                  <div className="flex flex-row pb-4 ">
                    <ul className="flex flex-row items-center px-9">
                      <li className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer">
                        Birthday
                      </li>
                      <li className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer">
                        Anniversary
                      </li>
                      <li className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer">
                        Couple Date
                      </li>
                    </ul>
                  </div>
                  <div className="con-butt pb-4 mb-2 ">
                    <button className="text-xl font-bold bg-yellow-500  py-4 rounded-xl ml-5 px-40">
                      Book Now
                    </button>
                  </div>
                </div>
                <button className="rounded-3xl bg-yellow-500 h-fit w-fit -top-6 absolute left-1/2" onClick={closeModal1}>✖</button>
              </Modal>
            </div>
            <div className="button4 ">
              {" "}
              <button
                className="h-16 text-md w-full border-2 rounded-lg text-xl bg-yellow-400 flex justify-between "
                onClick={openModal2}
              >
                <span className="pl-8 pt-3">Pay Bill</span>
                <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
              </button>
              <Modal
                isOpen={isOpen2}
                onRequestClose={closeModal2}
                contentLabel="Example Modal"
                className={modalClasses}
              >
                <div className="pay mx-auto ">
                  <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 relative ml-10">
                    Pay Restaurant
                  </div>
                  <div className="chow-div flex flex-row px-8 py-2 border-t-2 border-b-2 mb-6 mt-3">
                    <div className="chow">
                      <img src={chow} className="h-16 w-16" alt="" />
                    </div>
                    <div className="chow-text flex flex-col justify-center">
                      <div className="text1 px-4 text-xl font-bold">
                        Chowman - Salt Lake
                      </div>
                      <div className="txt2 px-4 text-slate-600">
                        Salt Lake ,Sector 2
                      </div>
                    </div>
                  </div>
                  <div className="money mx-auto w-[95%] ">
                    <div className="enter px-2 mx-auto">Enter Bill Amount</div>
                    <div className="input  py-4 relative">
                      <div className="absolute text-xl font-bold pl-2 pt-1">
                        ₹
                      </div>
                      <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={handleChange}
                        placeholder=""
                        className="w-[100%] bg-gray-200 py-2 rounded-lg pl-6"
                      />
                    </div>
                  </div>
                  <div className="avoff px-4">
                    <div className="flex flex-row justify-between py-4 -ml-4">
                      {" "}
                      <div className="ava px-4 pb-2 text-2xl ">
                        Available Offers
                      </div>
                      <div>
                        {" "}
                        <MdKeyboardDoubleArrowRight color="yellow" size={36} />
                      </div>
                    </div>

                    <div className="offers w-[100%] shadow shadow-offset-x-8 shadow-offset-y-8 text-lg py-2  rounded-md px-2 ">
                      Check Your Offers
                    </div>
                  </div>
                  <div className="bill flex flex-col border-2 mt-4 py-4 px-4 rounded-lg w-[95%] mx-auto ">
                    <div className="flex flex-row justify-between">
                      <div className="pb-1">Total Bill Amount</div>
                      <div className="pb-1">₹2500</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="pb-1">Total Discount</div>
                      <div className="text-green-400 pb-1">100</div>
                    </div>
                    <div className="flex flex-row justify-between border-t-2">
                      <div className="pt-2">Amount to be Paid</div>
                      <div className="pt-2">₹2400</div>
                    </div>
                  </div>
                  <div className="con-butt w-[460px] py-4 mb-2">
                    <button className="text-xl font-bold bg-yellow-500 w-[90%] py-4 rounded-xl ml-5 ">
                      PAY NOW
                    </button>
                  </div>
                </div>
                <button className="rounded-3xl bg-yellow-500 h-fit w-fit -top-6 absolute left-1/2" onClick={closeModal2}>✖</button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
