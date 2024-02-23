import React from "react";
import bg from "./Rectangle 3463524.png";
import arrow from "./Back.png";
import like from "./More.png"
import share from "./More (1).png"
import recommend from "./Group 1000003963.png"
import restro from "./Group 1000003977.png"
function Home(){
    return(
        <div className="Home">
            <div className="home-img relative">
            <img className="w-[100vw] absolute" src={bg} alt="" />
            <img className=" absolute top-8 left-12 cursor-pointer" src={arrow} alt="" />
            <img src={like} className="absolute top-0 right-24 cursor-pointer" alt="" />
            <img src={share} className="absolute top-0 right-4 cursor-pointer" alt="" />
            <img src={recommend} className="absolute top-80 right-0 cursor-pointer" alt="" />
            <img src={restro} className="absolute left-4 top-80" alt="" />
            </div>
           
        </div>
    )
}
export default Home;