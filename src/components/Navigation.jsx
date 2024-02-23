import React, { useState } from "react";
import bell from "./Notification.png";
import logo from "./IMG-20231226-WA0003 3.png";
import buttonlogo from "./Group 1000003960.png";
import profile from "./Rectangle 5412.png";
function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initially logged out

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="w-full navbar flex justify-between items-center px-10 py-[0.5]">
      <div className="">
        <img className="w-32" src={logo} alt="" />
      </div>

      {isLoggedIn ? (
        <div className="flex space-x-8">
          <button className="">Signup</button>
          <button
            onClick={handleLogout}
            className="bg-yellow-500 text-white rounded-lg px-8 py-2"
          >
            Login
          </button>{" "}
        </div>
      ) : (
        //    <button onClick={handleLogin} className="bg-yellow-500 text-white rounded-lg px-8 py-2">
        //      Login
        //    </button>
        <div className="flex space-x-2">
          <button className="border-2  border-yellow-500 flex px-4 py-3 rounded-3xl">
            {" "}
            <img className="mr-4" src={buttonlogo} alt="" />
            Contact Us
          </button>
          <ul className="flex space-x-4">
            <li>
              <img src={bell} alt="" className="px-2 cursor-pointer" />
            </li>
            <li
              className="flex items-center cursor-pointer gap-4 w-fit"
              onClick={handleLogin}
            >
              <img src={profile} alt="" />
              <div className="flex flex-col gap-1">
              <div>
                Souptik Das
              </div>
              <div>9876543210</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Navigation;
