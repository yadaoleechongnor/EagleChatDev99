import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hong from "../../assets/hong.svg";
import axios from "axios";

function RegisterSuccess() {
  const [userData, setUserData] = useState(null);
 
  const localUsercode = localStorage.getItem("userCode");

  const localpassword = localStorage.getItem("password") 
  
 

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex justify-between items-center p-2 bg-blue-dark">
          <div className="flex flex-col justify-center items-center">
            <img src={hong} alt="" className="md:w-24 md:ml-12 sml:w-20 w-10" />
            <h1 className="text-white md:ml-12 text-sm md:text-lg">
              ບໍລິດສັດ ຫົງຟ້າຈຳກັດ
            </h1>
          </div>
          <span className="font-medium text-white md:text-5xl md:mr-32 mr-10">
            {" "}
            ສະໝັກສະມາຊິກ{" "}
          </span>
          <div></div>
        </div>
        <div className="w-full mt-8 flex justify-center text-blue-dark font-medium">
          <div className="flex flex-col justify-center items-center sm:w-[30rem] w-[90%]">
            <div className="rounded-lg w-full flex flex-col items-center border h-[20rem] justify-around shadow-lg bg-white">
              <div>
                <b>ລົງທະບຽນສຳເລັດ</b>
              </div>
              <hr className="w-[90%] h-1" />
              <h1 className="text-black">
                ກະລຸນາຮັກສາໄອດີແລະລະຫັດຜ່ານຂອງທ່ານເປັນຄວາມລັບ
              </h1>
              <div className="w-[80%] border h-[10rem] flex justify-center items-center mb-8 border-blue-dark">
                <div className="flex flex-col gap-5 items-center w-[25%] text-lg">
                  <span> ໄອດີ </span>
                  <span> ລະຫັດຜ່ານ </span>
                </div>
                <div className="flex flex-col gap-5 items-center w-[75%] text-lg">
                  <label name="userid" className="bg-sky-200 w-[15rem] flex justify-center items-center text-center">
                    {userData?.data?.userCode || `${localUsercode.toString()}` }
                  </label>
                  <label name="password" className="bg-sky-200 w-[15rem] flex justify-center items-center text-center">
                    {userData?.data?.password || `${localpassword}`}
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between w-full">
              <NavLink
                to="/login"
                className="flex items-center justify-center bg-blue-dark w-full h-10 rounded text-white"
              >
                {" "}
                ກັບໄປທີ່ໜ້າເຂົ້າສູ່ລະບົບ{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSuccess;
