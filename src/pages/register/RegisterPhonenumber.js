import React, { useState } from "react";
import OtpInput from "react-otp-input";
import hong from "../../assets/hong.svg";
import { NavLink } from "react-router-dom";
import otps from "../../assets/otp.png";

function RegisterPhoneNumber() {
  const [otp, setOtp] = useState("");

  return (
    <div className=" w-full fixed">
      <div>
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
            <div className=" rounded-lg w-full flex flex-col items-center border h-[25rem] justify-around shadow-lg bg-white ">
              <div>
                <b>ຢືນຢັນເບີໂທລະສັບຂອງທ່ານ</b>
              </div>
              <hr className="w-[90%] h-1 " />
              <div className=" flex flex-col justify-center items-center">
                <img src={otps} alt="" className=" w-36" />
                <h1 className=" text-black ">ປ້ອນລະຫັດໂອທີພີ 6 ຕົວເລກ</h1>
                <h1 className=" font-thin text-black">
                  ລະຫັດໂອທີພີໄດ້ສົ່ງໄປຫາໝາຍເລກ 020 785555555
                </h1>
              </div>

              <div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        border: "1px solid blue",
                        borderRadius: "5px",
                        boxShadow: "sky",
                        fontSize: "30px",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        textAlign: "center",
                      }}
                    />
                  )}
                />
              </div>
              <h1 className=" underline  my-6 font-thin cursor-pointer ">
                {" "}
                ສົ່ງລະຫັດໂອທີພີອີກຄັ້ງ{" "}
              </h1>
            </div>
            <div className=" mt-4 flex justify-between w-full ">
              <NavLink
                to="/register"
                className=" flex items-center justify-center border-2 border-blue-dark w-[45%] h-10 rounded"
              >
                {" "}
                ຍົກເລິກ{" "}
              </NavLink>
              <NavLink to="/register/otp/success" className=" flex items-center justify-center text-white bg-blue-dark w-[45%] h-10 rounded">
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

export default RegisterPhoneNumber;
