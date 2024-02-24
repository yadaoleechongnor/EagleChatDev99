import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import { SiGooglemessages } from "react-icons/si";
import { BsPeople } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import EagleDev99 from "../assets/EagleDev99.svg";
import { useNavigate } from 'react-router-dom';

function Sidebar1() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  };

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/login");
  };

  return (
    <div className='flex w-full flex-col justify-between hover:shadow-lg hover:shadow-blue-light sticky h-full'>
      <div className='flex w-full my-4 flex-col items-center'>
        <div className='my-2 hover:border h-16 w-16 flex justify-center items-center rounded-full font-bold text-blue-light text-3xl'>
          <img src={EagleDev99} alt="" className='w-14 h-14' />
        </div>
        <div className='w-full flex flex-col items-center'>
          <div onClick={handleLogin} className='hover:shadow-lg text-white hover:shadow-blue-light h-12 w-12 flex justify-center items-center rounded-lg bg-blue-light my-4 cursor-pointer'>
            <SiGooglemessages className='h-8 w-8 hover:w-10 hover:h-10' />
          </div>
          <div className='h-12 w-12 flex justify-center hover:text-white items-center rounded-lg hover:bg-blue-light hover:shadow-lg hover:shadow-blue-light my-4 cursor-pointer'>
            <BsPeople className='h-8 w-8 hover:w-10 hover:h-10' />
          </div>
          <div className='h-12 w-12 flex hover:shadow-lg hover:text-white hover:shadow-blue-light justify-center items-center rounded-lg hover:bg-blue-light my-4 cursor-pointer'>
            <IoCallOutline className='h-8 w-8 hover:w-10 hover:h-10' />
          </div>
          <div className='h-12 w-12 flex hover:shadow-lg hover:text-white hover:shadow-blue-light justify-center items-center rounded-lg hover:bg-blue-light my-4 cursor-pointer'>
            <HiOutlineArchiveBox className='h-8 w-8 hover:w-10 hover:h-10' />
          </div>
          <div className='h-12 w-12 flex hover:shadow-lg hover:text-white hover:shadow-blue-light justify-center items-center rounded-lg hover:bg-blue-light my-4 cursor-pointer'>
            <IoMdNotificationsOutline className='h-8 w-8 hover:w-10 hover:h-10' />
          </div>
          <div onClick={handleLogout} className='hover:text-sky-400 border rounded-full hover:shadow-lg cursor-pointer'>
            <span className='px-2'>Logout</span>
          </div>
        </div>
      </div>

      <div className='flex w-full justify-center flex-col items-center'>
        <hr className='w-[90%] border' />
        <div className='h-12 w-12 flex hover:shadow-lg hover:text-white hover:shadow-blue-light justify-center items-center rounded-lg hover:bg-blue-light my-4 cursor-pointer'>
          <CiSettings className='h-8 w-8 hover:w-10 hover:h-10' />
        </div>
        <img src={logo} alt="" className='rounded-full h-14 w-14 my-4 hover:shadow-lg hover:shadow-blue-light' />
      </div>
    </div>
  );
}

export default Sidebar1;
