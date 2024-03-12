import React from "react";
import burger from "../assets/burger.png";
import rec from "../assets/recommend.png";
import axios from "axios";
import { useState,useEffect } from "react";
const texts = ["All", "Starter", "Burgers", "Momos", "Desserts"];
const data = [
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
  { image: burger, text: "Smokin' Burger" },
];

const price = ["₹240"];
const recommend = [{ image: rec, text: "1000+" }];
const rectext = ["Recommendations"]; 
function Menu() {
  const [allMenuItem,setAllMenuItem] = useState();

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
        setAllMenuItem(response.data);
        console.log("all menu data : ", allMenuItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    fetchMenu();
  },[]);
  
  return (
    <div className="menu-page h-[fit]  w-[90%] mx-auto lg:px-4 sm:px-2  pb-8">
      <div className="menu-head  text-slate-600 font-bold sm:pt-4 sm:text-2xl relative sm:-ml-4 lg:text-3xl">
        Explore Menu
      </div>
      {/* types */}
      <div className="menu-div flex flex-row py-8 sm:-ml-7 sm:px-2">
        {texts.map((text, index) => (
          <div
            key={index}
            className="my-div border-2 mr-4 rounded-xl px-2 py-2 cursor-pointer"
          >
            {text}
          </div>
        ))}
      </div>
      {/* menu ite */}
      <div className="menu-img  ">
        <div className="flex gap-6 flex-wrap">
          {allMenuItem && allMenuItem.map((item, index) => (
            <div key={index} className="relative mt-24">
              <img
                src={item.pic}
                alt="Image description"
                className="w-26 h-24 absolute -top-20 left-3"
              />
              <div className="p-4 rounded-xl shadow-lg overflow-hidden w-fit">
                <p className="text-lg font-medium pt-3 text-center">{item.menuItem}</p>
                {price.map((text, index) => (
                  <div
                    key={index}
                    className=" px-2 py-2 cursor-pointer font-bold ml-8"
                  >
                    {text}
                  </div>
                ))}

                <div className="div-rec">
                  <div className="">
                    {recommend.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-centre ml-4"
                      >
                        <img
                          src={item.image}
                          alt="Image description"
                          className="w-12 h-6 "
                        />
                        <div className="">
                          <p className="text-lg font-medium text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  {rectext.map((text, index) => (
                    <div key={index} className="text-slate-500">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;
