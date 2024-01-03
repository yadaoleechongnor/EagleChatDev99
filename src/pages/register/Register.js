import React from "react";
import hong from "../../assets/hong.svg";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className=" w-full fixed">
      <div >
        <div className=" flex justify-between items-center p-2 bg-blue-dark ">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={hong}
              alt=""
              className=" md:w-24 md:ml-12 sml:w-20 w-10 "
            />
            <h1 className=" text-white md:ml-12 text-sm md:text-lg">
              ບໍລິດສັດ ຫົງຟ້າຈຳກັດ
            </h1>
          </div>
          <span className=" font-medium text-white md:text-5xl md:mr-32 mr-10">
            {" "}
            ສະໝັກສະມາຊິກ{" "}
          </span>
          <div></div>
        </div>
        <div className=" w-full mt-8 flex justify-center text-blue-dark font-medium ">
          <div className=" flex flex-col justify-center items-center sm:w-[30rem] w-[90%] ">
            <div className=" w-full flex flex-col items-center border h-[10rem] justify-around shadow-lg ">
              <b>ປ້ອນເບີໂທລະສັບຂອງທ່ານ</b>
              <div className=" overflow-hidden items-center flex border text-xl rounded border-blue-dark h-10 sm:w-[25rem] w-[90%] ">
                <h1 className=" w-24 flex items-center justify-center border-r  border-blue-dark h-full">
                  +856
                </h1>
                <div className="flex rounded h-full items-center gap-2  ">
                  <h1 className=" ml-4">20</h1>
                  <input type="phone" className=" h-6 my-4 md:bg-sky-200  " />
                </div>
              </div>
            </div>
            <div className=" mt-4 flex justify-between w-full ">
              <NavLink
                to="/login"
                className=" flex items-center justify-center border-2 border-blue-dark w-[45%] h-10 rounded"
              >
                {" "}
                ຍົກເລິກ{" "}
              </NavLink>
              <NavLink
                to="/register/otp"
                className=" flex items-center justify-center text-white bg-blue-dark w-[45%] h-10 rounded"
              >
                {" "}
                ຢືນຢັນ{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
