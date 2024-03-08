import React, { useState, useEffect } from "react";
import arrow from "../assets/Back.png";
import arrow2 from "../assets/v.png";
import Modal from "react-modal";
import chow from "../assets/chow.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
function Footer1() {
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
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
    for (let i = currentDay - 1; i >= 0; i--) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);

      const d = new Date(date);

      // Extract the day of the week using getDay()
      const weekday = d.getDay();

      // Convert the numerical day (0-6) to the corresponding weekday string (Sun-Sat)
      const weekdayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
        weekday
      ];

      console.log("Extracted weekday:", weekdayString); // Output: "Thu"
      // console.log("day  ",weekdayString);
      days.unshift({ date: formatDate(date), dd: weekdayString });
      console.log(date, " day : ", weekdayString);
    }
   
    return days;
  };
  const weekDates = getWeekDates();

  const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
    //document.getElementById('background').style.filter = "blur(10px)";
    // document.documentElement.scrollTop = 0;
  };

  const closeModal1 = () => {
    setIsOpen1(false);
    //document.getElementById('background').style.filter = "blur(0px)";
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal2 = () => {
    setIsOpen2(true);
    // document.getElementById('background').style.filter = "blur(10px)";
    //document.documentElement.scrollTop = 0;
  };

  const closeModal2 = () => {
    setIsOpen2(false);
    // document.getElementById('background').style.filter = "blur(0px)";
  };
  useEffect(() => {
    // window.scrollTo({top: 0, behavior: 'smooth'});
  }, [isOpen1, isOpen2]);

  //booking detail for popup
  const [bookingData, setBookingData] = useState({
    restaurant: null,
    date: null,
    time: null,
    guests: null,
    occasion: null,
  });
  const handleWeekdayClick = (day) => {
    setBookingData({ ...bookingData, date: day.date });
  };

  const handleGuestSelection = (guestCount) => {
    setBookingData({ ...bookingData, guests: guestCount });
  };
  const handletime = (timing) => {
    setBookingData({ ...bookingData, time: timing });
  };

  //console.log(bookingData);

  return (
    <div>
      {/* book popup */}
      <div>
        {isOpen1 && (
          <div>
            <div className="absolute top-16 lg:left-[33%] md:left-[22%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[60vw] sm:h-[90%] sm:w-[99vw]">
                <div className="hd-txt text-xl font-bold text-slate-600  text-center  py-4 ">
                  Book a Table
                </div>
                <div className="chow-div flex flex-row px-8  lg:w-[460px] border-y-2 py-4 justify-center">
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
                    <div className="calendar-body flex flex-row overflow-scroll no-scrollbar">
                      {weekDates.map((day) => (
                        <div
                          key={day.date}
                          className="calendar-day border-2 mx-auto rounded-xl py-2 cursor-pointer"
                          onClick={() => handleWeekdayClick(day.date)}
                        >
                          <div className="date px-6 cursor-pointer text-xs ">
                            {day.date}
                          </div>
                          <div
                            className="weekday px-6 text-sm font-bold py-2"
                            onClick={() => handleWeekdayClick(day.dd)}
                          >
                            {day.dd}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-lg pt-2 px-6 pb-2">What time?</div>
                <div className=" w-[83%] overflow-scroll no-scrollbar ">
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
                         // onClick={handletime(hour.time)}
                        >
                          {hour.time}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="px-6 pb-4 text-lg">How Many Guests?</div>
                <div>
                  <ul className="flex flex-row w-[85%] overflow-scroll no-scrollbar px-2">
                    {numbers.map((number) => (
                      <li
                        className="px-6 text-xl font-bold border-2 rounded-lg ml-2 py-4 cursor-pointer"
                        key={number}
                        onClick={() => handleGuestSelection(number)}
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
         
            </div>
            <div className="absolute top-16 right-3 z-[100]">
              <button className="" onClick={closeModal1}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
            </div>
        )}
      </div>
      

      {/* pay bill popup */}
      <div
        id="footer"
        className="footer1 md:flex lg:hidden md:flex-row py-8 sm:h-fit sm:flex sm:flex-row sm:-ml-8 "
      >
        <div className="div1 left-10 relative w-[40vw] sm:w-[46vw]">
          {" "}
          <button
            className="h-16 text-md w-full border-2 rounded-lg  text-xl bg-yellow-400 flex justify-between "
            onClick={openModal1}
          >
            <span className="pl-8 pt-4 sm:text-sm font-bold">
              {" "}
              Book a table
            </span>
            <img className=" px-6 py-2 h-10 mt-2 " src={arrow2} alt="" />
          </button>
        </div>

        <div className="div2 relative left-24 w-[40vw] sm:w-[46vw] sm:-ml-12 ">
          <button
            className="h-16 text-md w-full border-2 rounded-lg text-xl bg-yellow-400 flex justify-between "
            onClick={openModal2}
          >
            <span className="pl-8 pt-4 sm:text-sm lg:text-xl md:text-lg font-bold">
              Pay Bill
            </span>
            <img className=" px-6 py-2 h-10 mt-3" src={arrow2} alt="" />
          </button>
          <div className="">
            {isOpen2 && (
              <div>
                <div className="absolute -top-[100%] left-0  bg-white z-[100] ">
                  <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                    <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 text-center">
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
                      <div className="enter px-2 mx-auto">
                        Enter Bill Amount
                      </div>
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
                          <MdKeyboardDoubleArrowRight
                            color="yellow"
                            size={36}
                          />
                        </div>
                      </div>

                      <div className="offers w-[100%] shadow shadow-offset-x-8 shadow-offset-y-8 text-lg py-2  rounded-md px-2 ">
                        Check Your Offers
                      </div>
                    </div>
                    <div className="bill flex flex-col border-2 mt-4 py-4 px-4 rounded-lg w-[95%] mx-auto ">
                      <div className="flex flex-row justify-between">
                        <div className="pb-1">Total Bill Amount</div>
                        <div className="pb-1">{amount}</div>
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
                      <button
                        type="submit"
                        className="text-xl font-bold bg-yellow-500 w-[90%] py-4 rounded-xl ml-5 "
                      >
                        PAY NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-24 right-4 z-[100]">
                  <button className="" onClick={closeModal2}>
                    <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer1;
