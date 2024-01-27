import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import logout from "../assets/logout.png";
import hong from "../assets/hong.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const logoutAndRedirect = () => {
    handleLogout();
   navigate("/login");

    
  };

  const handleLogin = () => {
    setLoggedIn(true);
    window.location.href = "/login";
  };

  return (
    <div className="z-50 fixed w-full shadow-lg bg-white mt-20">
      <div className="p-5 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="flex">
            {/* Your logo SVG or other content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 29"
              fill="none"
              className="w-5 h-5 md:w-8 md:h-8 lg:w-[39px] lg:h-[29px]"
            >
              {/* ... (Your logo SVG path data) */}
            </svg>
          </div>
        </div>
        <div className="flex gap-3 mr-28 sm:gap-8">
          <div className="w-[5rem] h-8 text-xs sm:text-lg sm:font-medium md:w-[10rem] md:h-12 sm:h-8 sm:w-[8rem] flex items-center justify-center bg-sky-200 rounded-full">
            <h1 className="sm:font-medium text-blue-dark">ທ່ານມີ 0 PV</h1>
          </div>
          <div className="flex items-center justify-center sm:w-12 sm:h-12 sm:bg-blue-dark rounded-full">
            <IoNotifications className="sm:text-white w-5 h-6" />
          </div>
          <div className="flex ">
            <div className="flex md:gap-8 justify-center items-center">
              <div className="flex sm:w-12 sm:h-12 rounded-full bg-blue-dark justify-center items-center">
                <img src={hong} alt="" className="w-8" />
              </div>
              <h1 className="hidden lg:block">Thadsaphone ShAllio</h1>
            </div>
          </div>

          {/* Logout Button */}
          {isLoggedIn ? (
            <div
              className="flex justify-center items-center"
              onClick={logoutAndRedirect}
            >
              <img src={logout} alt="" className="w-8 h-8 cursor-pointer" />
            </div>
          ) : (
            // Login Button
            <NavLink
              to="/login"
              className="flex justify-center items-center"
              onClick={handleLogin}
            >
              {/* Your login button content */}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
