import React, { useState, useEffect ,useRef} from "react";
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
import restroname from "../assets/restroimg.png";
import { IoCloseSharp } from "react-icons/io5";
import About from "./About";
import right from "../assets/right.png";
import celeb from "../assets/celeb.png";
import { FaCheck } from "react-icons/fa";
import girl from "../assets/girl.png";
import messeng from "../assets/messeng.png";
import whatsapp from "../assets/whatsapp.png";
import tele from "../assets/tele.png";
import chat from "../assets/chat.png";
import Menu from "./Menu";
import Footer from "./Footer";
import { FaClock } from "react-icons/fa";
import axios from "axios";
import Photos from "./Photos";
import { startTransition } from "react";
const datanew = [
  {
    id: 1,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    discount: 20,
    text3: "* on your dining bills",
    constantDate1: new Date(2024, 3, 10),
    constantDate2: new Date(2024, 3, 15),
  },
  {
    id: 2,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    discount: 20,
    text3: "* on your dining bills",
    constantDate1: new Date(2024, 3, 10),
    constantDate2: new Date(2024, 3, 15),
  },
  {
    id: 3,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    discount: 20,
    text3: "* on your dining bills",
    constantDate1: new Date(2024, 3, 10),
    constantDate2: new Date(2024, 3, 15),
  },
  // ... Add more data objects here
];

//const startDate = new Date(10/3/24); // Replace with actual date
// Replace with actual date

// const startDate = new Date();
// const endDate= new Date(startDate.getTime() + 5 * 24 * 60 * 60 * 1000);

// const daysDiff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

// // Safety check to avoid negative values if today's date is past the end date
// const daysRemaining = Math.max(daysDiff, 0);

function calculateDaysRemaining(date1, date2) {
  // if (date1 > date2) {
  //   [date1, date2] = [date2, date1];
  // }

  const diffInMilliseconds = date2.getTime() - date1.getTime();
  const daysDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return daysDiff;
}

const reedem = [
  {
    text: "Reedem Now",
  },
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

// const WEEK_DAYS = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
const rectext1 = ["Redeem Now"];

const rectext = ["Recommendations"];

const images = [
  { url: slider, caption: "Image 1" },
  { url: slider, caption: "Image 2" },
  { url: slider, caption: "Image 3" },
];
function Home() {
   //recommendations
  const [allMenuItems,setAllMenuItems] = useState();

  const fetchMenu = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/menu/65edb6299b2c9622f9286293",
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setAllMenuItems(response.data);
        console.log("all menu data : ", allMenuItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  //book a table
  const [dateSelected, setDateSelected] = useState("");
  const [timeSelected, setTimeSelected] = useState("");
  const [occassion, setOccassion] = useState("");
  const [numberSelected, setNumberSelected] = useState();

  const submitHandler = () => {
    const formData = {
        date: dateSelected,
        time: timeSelected,
        occassion: occassion,
        numofpeople: numberSelected,
      };
    console.log("formData: ", formData);
    console.log("dateSelected : ", dateSelected);
    console.log("timeSelected : ", timeSelected);
    console.log("occassion : ", occassion);
    console.log("numberSelected : ", numberSelected);

    const data = JSON.stringify(formData);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/bookings/65eb65fbb91e205204c67f52/65edb6299b2c9622f9286293',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      toast({
        title: "Table booked successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
    });

    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  };

  const [discount, setDiscount] = useState(0);
  function calcDiscount(data, amount) {
    const disc = (data / 100) * amount;
    setDiscount(disc);
    // return disc;
  }

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
  const [selectedHourIndex, setSelectedHourIndex] = useState(null);
  const handleTimeSelector = (index) => {
    setSelectedHourIndex(index); // Update selected index upon click
  };
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
      "March",
      "April",
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
  const [selectedId, setSelectedId] = useState(null);

  // Generate an array of dates for the current week
  const getWeekDates = () => {
    const days = [];
    const currentDay = startDate.getDay();
    for (let i = currentDay; i >= 0; i--) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);

      const d = new Date(date);

      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are 0-indexed
      const year = date.getFullYear();
      let fullDate = '';
      if(month<10)
        fullDate = `${day}-0${month}-${year}`;
      else  
        fullDate = `${day}-${month}-${year}`;
      // Extract the day of the week using getDay()
      const weekday = d.getDay();

      // Convert the numerical day (0-6) to the corresponding weekday string (Sun-Sat)
      const weekdayString = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ][weekday];

      console.log("Extracted weekday:", weekdayString); // Output: "Thu"
      // console.log("day  ",weekdayString);
      days.unshift({
        date: formatDate(date),
        dd: weekdayString,
        fullDate: fullDate,
      });
      console.log(date, " day : ", weekdayString);
    }

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
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;

    setIsOpen(true);
  };

  const closeModal = () => {
    document.getElementById("background").style.filter = "blur(0px)";
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
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  }; 

  const closeModal1 = () => {
    setIsOpen1(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //popup3
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal2 = () => {
    if (isOpen4) {
      setIsOpen4(false);
    }
    setIsOpen2(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal2 = () => {
    setIsOpen2(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //popup4
  const [isOpen4, setIsOpen4] = useState(false);

  const openModal4 = () => {
    setIsOpen2(false);
    setIsOpen4(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal4 = () => {
    setIsOpen4(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  //paymentsuccessful popup

  const [isOpen5, setIsOpen5] = useState(false);

  const openModal5 = () => {
    setIsOpen5(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal5 = () => {
    setIsOpen5(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  const [isOpen6, setIsOpen6] = useState(false);

  const openModal6 = () => {
    setIsOpen6(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal6 = () => {
    setIsOpen6(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //share pop-up
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

  useEffect(() => {}, [
    isOpen,
    isOpen1,
    isOpen4,
    isOpen2,
    isOpen5,
    isOpen6,
    isOpen7,
  ]);

  //Search bar
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // const modalClasses = `absolute top-8 lg:left-1/3 md:left-1/4 lg:w-[30vw] md:h-fit lg:h-fit flex justify-centre bg-white z-50 rounded-lg  md:w-[44vw] sm:h-[100%] sm:w-[100%] sm:left-0`;

  //input for pay bill popup
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setAmount("");
  };
  //copy link
  const [textToCopy, setTextToCopy] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      console.log("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text:", err);
    } finally {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  const handleChange1 = (event) => {
    setTextToCopy(event.target.value);
  };

  //handle data for booking

  const [formData, setFormData] = useState({
    day: "",
    date: "",
    time: "",
    guest: "",
    occ: "",
  });

  //console.log(bookingData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonClicked1, setIsButtonClicked1] = useState(false);
 
    //photos integration
    const [pics,setPics]  = useState([]);
    const getImages = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:4000/api/gallery/65edb6299b2c9622f9286293",
        headers: {},
      };
  
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setPics(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(()=>{
      getImages();
    },[]);


    //select
    
    const [selectedDate, setSelectedDate] = useState(null); // State to store selected date

    const handleClick = (day) => {
      setSelectedDate(day.fullDate); // Update selected date on click
    };
   
    
   
      const [selectedNumber, setSelectedNumber] = useState(null); // Initialize selected number state

      //const numbers = [1, 2, 3, 4, 5, 6]; // Array of available guest numbers
    
      const handleNumberSelection = (number) => {
        setSelectedNumber(number); // Update selected number state
      };

        const [selectedOccasion, setSelectedOccasion] = useState(null); // Initialize selected occasion state

        const [isButtonClicked2, setIsButtonClicked2] = useState(false);
        const [isButtonClicked3, setIsButtonClicked3] = useState(false);
        const [isButtonClicked4, setIsButtonClicked4] = useState(false);

    useEffect(()=>{
      if(isOpen)
      {
        fetchMenu();
      }
    },[isOpen]);

          

  return (
    <div>
      {/* popup1 recommendation */}

      <div className="">
        {isOpen && (
          <div>
            <div className="absolute top-16 lg:left-[33%] md:left-[25%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[50vw] sm:h-fit sm:w-[90%]">
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
                  <div className="btn-1  border-2 rounded-md ">
                    <button
                      className={` flex px-4 py-2 ${
                        isButtonClicked1 ? "bg-yellow-500 " : ""
                      }`}
                      onClick={() => setIsButtonClicked1(!isButtonClicked1)}
                    >
                      <div className="-ml-2 py-1">
                        <GoThumbsup className="" />
                      </div>{" "}
                      <div className="ml-2">Recommend</div>
                    </button>
                  </div>
                  <div className="btn2   border-2 rounded-md ">
                    {" "}
                    <button className={` flex px-4 py-2 ${
                        isButtonClicked ? "bg-yellow-500 " : ""
                      }`}
                      onClick={() => setIsButtonClicked(!isButtonClicked)}>
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
                <div className="flex items-center -mt-2 rounded-md border border-gray-300 w-[90%] mx-auto ">
                  <div className="absolute px-1 ">
                    {" "}
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder=" Search your Favourites "
                    className="w-[420px] h-8 px-6 py-2  "
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="map-img w-[88%] mx-auto pt-4 h-[350px] overflow-scroll no-scrollbar">
                  <div className="container flex flex-wrap justify-center gap-1">
                    {allMenuItems && allMenuItems.map((data) => (
                      <div className="p-2 border-2  w-fit rounded-xl relative shadow-lg flex flex-col items-center">
                        <img className="h-12 w-12" src={data.pic}></img>
                        <div className="text-xs text-slate-600 text-center">
                          {data.menuItem}
                        </div>
                        <div className="text-lg fnt-bold">240</div>

                        <div className="">
                          <button className="border-2 text-sm px-2 py-2 rounded-lg bg-yellow-500">
                            Reccomendations
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="con-butt py-4 mb-2 ">
                  <button className="text-xl font-bold bg-yellow-500 w-[90%] py-4 rounded-xl ml-5 ">
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-16 right-2   z-[100]">
              <button className="  " onClick={closeModal}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* available offer popup */}
      <div className="">
        {isOpen4 && (
          <div>
            <div className="absolute top-16 lg:left-[33%] md:left-[25%] sm:left-[2%] bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[35vw] md:h-fit md:w-[50vw] sm:h-fit sm:w-[98vw]">
                <div className="text-2xl text-slate-500 font-bold text-center py-4">
                  Available Offers
                </div>
                <div className="chow-div flex flex-row  justify-center border-y-2 py-2">
                  <div className="chow">
                    <img src={chow} className="h-18 w-18" alt="" />
                  </div>
                  <div className="chow-text flex flex-col justify-center ">
                    <div className="text1  text-xl font-bold">
                      Chowman - Salt Lake
                    </div>
                    <div className="txt2  text-slate-600">
                      Salt Lake ,Sector 2
                    </div>
                  </div>
                </div>
                <div className="map ">
                  <div className="container flex flex-wrap justify-center gap-4 p-4 h-fit">
                    {/* {datanew.map((item) => (
                        <ListItem key={item.id} {...item} />
                      ))} */}
                    {datanew.map((data) => (
                      <div className="p-2 border-2 w-fit rounded-xl relative shadow-lg flex flex-col items-center">
                        <div className="absolute top-0 left-0 right-0 rounded-t-xl w-full h-4 bg-[#FFD601]">
                          <div className="">
                            <div className="absolute top-2 right-2">
                              <FaClock />
                            </div>
                            <div className="absolute top-7 right-1 text-[0.6rem] font-semibold">
                              {calculateDaysRemaining(
                                data.constantDate1,
                                data.constantDate2
                              )}{" "}
                              days
                            </div>
                          </div>
                        </div>
                        <div className="pt-3">
                          {" "}
                          <img
                            className="h-18 w-12 shadow-lg py-2"
                            src={data.image}
                          ></img>
                        </div>
                        <div className="text-md font-bold py-2">
                          {data.text1}
                        </div>
                        <div className="text-3xl font-bold border border-yellow-500 py-2 px-2 rounded-xl">
                          {data.discount}%
                        </div>
                        <div className="text-xs pb-4 font-semibold">
                          *on your dining bill
                        </div>

                        <div className="py-2">
                          <button
                            onClick={() => {
                              calcDiscount(data.discount, amount);
                              // setDiscount(data.discount);
                              openModal2();
                            }}
                            className="border-2 font-semibold text-sm px-6 py-2 rounded-lg bg-[#FFD601]"
                          >
                            Redeem Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-16 right-2 z-[100]">
              <button className="" onClick={closeModal4}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* book a table */}
      <div>
        {isOpen1 && (
          <div>
            <div className="absolute top-16 lg:left-[33%] md:left-[22%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[60vw] sm:h-[90%] sm:w-[99vw]">
                <div className="hd-txt text-xl font-bold text-slate-600  text-center  py-4 ">
                  Book a Table
                </div>
                <div className="chow-div flex flex-row    border-y-2 py-4 justify-center">
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
                    <div className="calendar-header"></div>
                    <div  className="calendar-body px-6 flex flex-row gap-2 overflow-scroll no-scrollbar">
                      {weekDates.map((day) => (
                        <div  
                        key={day.date}
                        className={`calendar-day border-2 rounded-xl cursor-pointer py-2 ${
                          selectedDate === day.fullDate ? 'border border-yellow-500' : 'bg-white'
                        }`}
                          // className="calendar-day border-2  rounded-xl py-2 cursor-pointer"
                          
                          onClick={() => { 
                            setDateSelected(day.fullDate);
                            handleClick(day)
                          }}
                        >
                          <div className="date px-7 cursor-pointer text-xs ">
                            {day.date}
                          </div>
                          <div className="weekday px-6 text-sm font-bold py-2">
                            {day.dd}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-lg pt-2 px-6 pb-2">What time?</div>
                <div className=" w-[85%] overflow-scroll no-scrollbar px-6 ">
                  <ul className="flex flex-row  px-18 py-2 rounded-lg px-2 ">
                    {availableHours.map((hour, index) => {
                      const style = hour.isClickable
                        ? {}
                        : { pointerEvents: "none", opacity: 0.5 };
                      return (
                        <li
                          //className="border-2 text-lg px-4 py-2 ml-1 rounded-lg cursor-pointer"
                          className={`
                          border-2 text-lg px-4 py-2 ml-1 rounded-lg cursor-pointer
                          ${index == selectedHourIndex ? 'border border-yellow-500 ' : ''}
                        `}
                          key={index}
                          style={style}
                          //onClick={handletime(hour.time)}
                          onClick={() => {
                            setTimeSelected(hour.time);
                            handleTimeSelector(index)
                          }}
                        >
                          {hour.time}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="px-6 pb-4 text-lg">How Many Guests?</div>
                <div>
                  <ul className="flex flex-row w-[85%] overflow-scroll no-scrollbar px-6 ">
                    {numbers.map((number) => (
                      <li
                        //className="px-6 text-xl font-bold border-2 rounded-lg ml-2 py-4 cursor-pointer hover:bg-gray-200  selectable"
                        className={`
                        px-6 text-xl font-bold border-2 rounded-lg ml-2 py-4 cursor-pointer
                        ${number === selectedNumber ? 'border border-yellow-500' : ''}  // Conditional background color
                      `}
                        key={number}
                        onClick={() => {
                          setNumberSelected(number);
                          handleNumberSelection(number)
                        }}
                      >
                        {number}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 text-lg">Special Ocassions</div>  
                <div className="flex flex-row pb-4 ">     
                  <ul className="flex flex-row items-center px-6">
                    <li
                      className={`border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer ${  isButtonClicked2 ? "border border-yellow-500 " : ""}`}
                      onClick={() => {
                        setOccassion("Birthday");    
                        setIsButtonClicked2(!isButtonClicked2) 
                      }}
                    >
                      Birthday
                    </li>
                    <li
                      //className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer"
                      className={`border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer ${  isButtonClicked3 ? "border border-yellow-500 " : ""}`}
                      onClick={() => {
                        setOccassion("Anniversary");
                        setIsButtonClicked3(!isButtonClicked3) 
                      }}
                    >
                      Anniversary
                    </li>
                    <li
                     // className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer"
                     className={`border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer ${  isButtonClicked4 ? "border border-yellow-500 " : ""}`}
                      onClick={() => {
                        setOccassion("Couple Date");
                        setIsButtonClicked4(!isButtonClicked4) 
                      }}
                    >
                      Couple Date
                    </li>
                  </ul>
                </div>
                <div className="con-butt pb-4 mb-2 flex justify-center">
                  <button
                    className="text-xl font-bold bg-yellow-500  py-4 rounded-xl w-[90%] px-36"
                    onClick={submitHandler}
                  >
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

      {/* pay a bill popup */}
      <div className="">
        {isOpen2 && (
          <div>
            <div className="absolute top-20 lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
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
                  <div
                    className="flex flex-row justify-between py-4 -ml-4 cursor-pointer"
                    onClick={openModal4}
                  >
                    {" "}
                    <div className="ava px-4 pb-2 text-2xl">
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
                    <div className="pb-1">Total amount</div>
                    <div className="pb-1">{amount}</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="pb-1">Total Discount</div>
                    <div className="text-green-400 pb-1">{discount}</div>
                  </div>
                  <div className="flex flex-row justify-between border-t-2">
                    <div className="pt-2">Amount to be Paid</div>
                    <div className="pt-2">{amount - discount}</div>
                  </div>
                </div>
                <div className="con-butt py-4 mb-2 w-full flex justify-center">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="text-xl font-bold w-[90%] bg-yellow-500  py-4 rounded-xl  "
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-4 z-[100]">
              <button className="" onClick={closeModal2}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* 
       paymentsuccesful popup */}

      <div className="">
        {isOpen5 && (
          <div>
            <div className="absolute top-20 lg:left-[33%] md:left-[33%]   bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[90%]">
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
                  <div className="tick absolute h-32 w-32 bottom-[56%] left-[36%] ">
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
                    Your Payment is successfully received by Us !
                  </div>
                </div>
                <div className="bill flex flex-col border-2 mt-4 py-8 px-4 rounded-lg w-[95%] mx-auto ">
                  <div className="flex flex-row justify-between">
                    <div className="pb-1 font-bold text-md text-slate-700">
                      Merchant Name:
                    </div>
                    <div className="pb-1 font-bold text-md text-slate-700">
                      Reunion Cafe
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="pb-1 text-sm text-slate-500">
                      Bill Amount:
                    </div>
                    <div className="pb-1 text-sm text-slate-500">{amount}</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="pb-1 text-sm text-slate-500">
                      Total Savings:
                    </div>
                    <div className="text-green-400 pb-1 ">₹ 400</div>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <div className="text-sm text-slate-500">Amount Paid:</div>
                    <div className="text-sm text-slate-500">₹ 2400</div>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <div className="text-sm text-slate-500">Txn Id:</div>
                    <div className="text-sm text-slate-500">
                      uhujdcjhhcuh2354623bhvbd
                    </div>
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
              <button className="" onClick={closeModal5}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* popup failed */}
      <div className="">
        {isOpen6 && (
          <div>
            <div className="absolute top-20 lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                <div className="payy text-2xl font-bold text-slate-600  py-4 text-center">
                  Call Restaurant
                </div>
                <div className="chow-div flex flex-row justify-center border-y-2 py-2">
                  <div className="chow">
                    <img src={chow} className="h-16 w-16" alt="" />
                  </div>
                  <div className="chow-text flex flex-col ">
                    <div className="text1  text-xl font-bold">
                      Chowman - Salt Lake
                    </div>
                    <div className="txt2  text-slate-600">
                      Salt Lake ,Sector 2
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src={girl} alt="" />
                </div>
                <div className="text-div flex flex-col ">
                  <div className="text-2xl font-bold text-center">
                    Oops ! Payment Failed
                  </div>
                  <div className="text-sm text-slate-600 text-center ">
                    Your Payment Transaction Failed ! Please try again !
                  </div>
                </div>

                <div className="flex flex-col items-center py-4 ">
                  <div>
                    <button className="bg-yellow-500 py-4 px-32 rounded-2xl font-bold">
                      TRY AGAIN
                    </button>
                  </div>
                  <div className="py-4">
                    <button>Need Help?</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-1 z-[100]">
              <button className="" onClick={closeModal6}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* share popup */}
      <div>
        {isOpen7 && (
          <div>
            <div className="absolute lg:h-fit top-28 lg:left-[38%] md:left-[22%] sm:left-0 bg-white z-[100] md:h-fit rounded-lg sm:h-[100vw]">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[58vw] sm:h-fit sm:w-[95%]">
                <div className="text-2xl font-bold py-6 text-[#363636] px-8">
                  Share
                </div>
                <div className="flex flex-row w-[90%] mx-auto">
                  <div className="flex flex-col  ">
                    <div className="mx-4">
                      <img className="h-14 w-14 " src={messeng} alt="" />
                    </div>
                    <div className="text-sm  text-center">Messenger</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mx-4">
                      <img className="h-14 w-14 " src={whatsapp} alt="" />
                    </div>
                    <div className="text-sm text-center">WhatsApp</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mx-4">
                      <img className="h-14 w-14" src={tele} alt="" />
                    </div>
                    <div className="text-sm text-center">Telegram</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mx-4">
                      <img className="h-14 w-14" src={chat} alt="" />
                    </div>
                    <div className="text-sm text-center">Wechat</div>
                  </div>
                </div>
                <div className="flex flex-col py-4 ">
                  <div className="font-bold text-xl px-8 py-4 text-[#363636] ">
                    Or copy link
                  </div>
                  <div className="flex flex-row ">
                    <div className="  px-4 pb-4">
                      <input
                        type="text"
                        id="inputText"
                        placeholder="Enter text to copy"
                        value={textToCopy}
                        onChange={handleChange1}
                        className="bg-[#0000000D]
                        rounded-lg w-[320px] py-2 px-4"
                      />
                    </div>
                    <div className=" pb-4">
                      <button
                        id="copyButton"
                        onClick={handleCopy}
                        className="bg-[#F3D74C] font-bold text-sm px-6 rounded-xl py-2"
                      >
                        {copied ? "COPIED!" : "COPY"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-1 z-[100]">
              <button className="" onClick={closeModal7}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="" id="background">
        {" "}
        <div className="Home  ">
          <div className="home-img sm:h-[50vh] lg:h-[60vh] w-[100vw] relative">
            <img className="w-[100vw] h-full" src={bg} alt="" />
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
              onClick={openModal7}
            />
            <img
              src={recommend}
              className="absolute top-80 right-0 cursor-pointer lg:top-44 md:top-28 md:h-[13vw] sm:top-28 sm:h-[16vw] lg:h-fit"
              alt=""
            />
            {/* <img
            src={restro}
            className="absolute left-4 bottom-5 md:h-[12vw] sm:w-[80vw] h-[22vw] lg:w-[60vw]"
            alt=""
          /> */}
            <div className="flex flex-row absolute left-10 bottom-16 gap-4">
              <div>
                <img
                  src={restroname}
                  className="sm:h-14 w-14 lg:h-full lg:w-full md:h-full md:w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white font-bold lg:text-5xl md:text-5xl sm:text-xl">
                  Chowman-Salt Lake
                </div>
                <div className="text-[#FFFFFF] lg:text-2xl md:text-2xl sm:text-md">
                  Salt Lake ,Sector 2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-36 w-full h-fit flex ">
          {/* slider */}
          <div>
            <div className=" py-8 px-4 text-3xl text-slate-600 font-bold lg:-ml-16 md:hidden sm:hidden lg:block">
              Photos
            </div>

            {/* <Slider images={images} /> */}
            <div className="slider-container w-[50vw]  relative lg:-left-16 md:hidden lg:flex sm:hidden ">
              <img
                src={images[currentSlide].url}
                alt="image"
                className="slider-image h-[50vh] w-[50vw] object-cover rounded-lg shadow-md relative "
              />

              <button
                className="absolute bottom-[50%] left-6"
                onClick={handlePrev}
              >
                <MdArrowBackIos size={40} color="white" />
              </button>
              <button
                className="absolute bottom-[48%] right-4"
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

          {/* lg-button page */}
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
              </div>
              <div className="button2">
                <button
                  className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between "
                  onClick={openModal4}
                >
                  <span className="pl-8 pt-3">Available Offers</span>{" "}
                  <img className=" px-6 py-2 h-10 mt-2" src={arrow1} alt="" />
                </button>
              </div>
              {/* <Modal
                  isOpen={isOpen4}
                  onRequestClose={closeModal4}
                  contentLabel="Example Modal"
                  className={modalClasses}
                > */}
              <div className="offers"></div>
              <div className="button3 ">
                <button
                  className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl bg-yellow-400 flex justify-between"
                  onClick={openModal1}
                >
                  <span className="pl-8 pt-3"> Book a table</span>
                  <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
                </button>
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
                {/* </Modal> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Photos />
      <Menu />
      <Footer />
      {/* footer1 */}
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
        </div>
        {/* <Footer1 /> */}
      </div>
    </div>
  );
}
export default Home;
