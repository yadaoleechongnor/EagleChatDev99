import React from "react";
import hongfah from "../../assets/hongfah.png";
import rectangle from "../../assets/Rectangle 240 (1).png";
import { NavLink } from "react-router-dom";

function Paysuccess() {
  return (
    <div className=" w-full mt-24 flex justify-center flex-col items-center ">
      <div className=" w-[90%] border mt-12 rounded-2xl shadow-lg my-6 ">
        <div className=" my-10">
          <div className=" flex justify-between items-center  w-full my-8 ">
            <div className=" ml-8">
              <img src={hongfah} alt="" className=" h-[9rem] w-[9rem]" />
            </div>
            <div className=" flex flex-col items-center justify-center gap-6 mr-6">
              <h1 className=" text-5xl text-green-500 font-bold ">
                ສັງຊື້ສຳເລັດ
              </h1>
              <p>
                ເມື່ອໃບບິນຂອງທ່ານໄດ້ຮັບການກວດສອບ ແລະ ຈັດສົ່າງ, ລະບົບຈະແຈ້ງເຕືອນ
                ແລະ ສົ່ງ SMS ແຈ້ງລາຍລະອຽດເມື່ອໄດ້ຮັບການອະນຸມັດ
              </p>
            </div>
            <div></div>
            <div className=" flex items-center absolute ml-[58rem] mt-[-7rem] text-2xl text-blue-light font-bold ">
              {" "}
              <h1> ລະຫັດບິນ : </h1>
              <h1>112233 </h1>
            </div>
          </div>
          <hr className=" w-full h-1 " />
          <div className="w-full">
            <table className="table-auto w-full divide-y flex flex-col">
              <thead>
                <tr className="flex container mx-auto py-4 z-50 bg-white">
                  <th className="font-normal w-[6rem] flex justify-center">
                    ລະຫັດສີນຄ້າ
                  </th>
                  <th className="font-normal w-[6.5rem] flex justify-center items-start">
                    ຮູບສິນຄ້າ
                  </th>
                  <th className="font-normal w-[15rem] flex justify-center items-start">
                    ຊື່ສິນຄ້າ
                  </th>
                  <th className="font-normal w-[11.2rem] flex justify-center items-start">
                    ຈຳນວນ
                  </th>
                  <th className="font-normal w-[10rem] flex justify-center items-start">
                    ລາຄາລວມ
                  </th>
                  <th className="font-normal border w-[12rem] flex justify-center items-start">
                    ວັນທີ່ສັ່ງຊື້
                  </th>
                  <th className="border flex justify-center items-center w-[12rem] ">
                    <div className="font-normal">
                      <span className="">ສະຖານະ</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_901_8525)">
                        <path
                          d="M6.05992 5.99992C6.21665 5.55436 6.52602 5.17866 6.93322 4.93934C7.34042 4.70002 7.81918 4.61254 8.2847 4.69239C8.75022 4.77224 9.17246 5.01427 9.47664 5.3756C9.78081 5.73694 9.94729 6.19427 9.94659 6.66659C9.94659 7.99992 7.94659 8.66659 7.94659 8.66659M7.99992 11.3333H8.00659M14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992Z"
                          stroke="#98A2B3"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_901_8525">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="w-full flex items-center border-b border-r py-2">
                  <td className="w-[6rem] flex justify-center items-start ">
                    <div className="text-sm border rounded-full bg-gray-100 ">
                      <span className="mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className="rounded-lg h-16 w-16"
                    />
                  </td>
                  <td className="w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="w-[11.2rem] flex justify-center">
                    <h1>5</h1>
                  </td>
                  <td className="w-[8rem] flex items-center justify-center ">
                    500.000
                  </td>
                  {/* The last two cells in this row will span multiple columns */}
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="text-xl font-bold text-blue-light">
                      30/11/2023
                    </div>
                  </td>
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="flex justify-center items-center text-2xl text-orange-400 font-bold">
                      {" "}
                      ກຳລັງກວດສອບ
                    </div>
                  </td>
                </tr>
                <tr className="w-full flex items-center border-b border-r py-2">
                  <td className="w-[6rem] flex justify-center items-start ">
                    <div className="text-sm border rounded-full bg-gray-100 ">
                      <span className="mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className="rounded-lg h-16 w-16"
                    />
                  </td>
                  <td className="w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="w-[11.2rem] flex justify-center">
                    <h1>5</h1>
                  </td>
                  <td className="w-[8rem] flex items-center justify-center ">
                    500.000
                  </td>
                  {/* The last two cells in this row will span multiple columns */}
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="text-xl font-bold text-blue-light">
                      30/11/2023
                    </div>
                  </td>
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="flex justify-center items-center text-2xl text-orange-400 font-bold">
                      {" "}
                      ກຳລັງກວດສອບ
                    </div>
                  </td>
                </tr>
                <tr className="w-full flex items-center border-b border-r py-2">
                  <td className="w-[6rem] flex justify-center items-start ">
                    <div className="text-sm border rounded-full bg-gray-100 ">
                      <span className="mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className="rounded-lg h-16 w-16"
                    />
                  </td>
                  <td className="w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="w-[11.2rem] flex justify-center">
                    <h1>5</h1>
                  </td>
                  <td className="w-[8rem] flex items-center justify-center ">
                    500.000
                  </td>
                  {/* The last two cells in this row will span multiple columns */}
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="text-xl font-bold text-blue-light">
                      30/11/2023
                    </div>
                  </td>
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="flex justify-center items-center text-2xl text-orange-400 font-bold">
                      {" "}
                      ກຳລັງກວດສອບ
                    </div>
                  </td>
                </tr>
                <tr className="w-full flex items-center border-b border-r py-2">
                  <td className="w-[6rem] flex justify-center items-start ">
                    <div className="text-sm border rounded-full bg-gray-100 ">
                      <span className="mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className="rounded-lg h-16 w-16"
                    />
                  </td>
                  <td className="w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="w-[11.2rem] flex justify-center">
                    <h1>5</h1>
                  </td>
                  <td className="w-[8rem] flex items-center justify-center ">
                    500.000
                  </td>
                  {/* The last two cells in this row will span multiple columns */}
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="text-xl font-bold text-blue-light">
                      30/11/2023
                    </div>
                  </td>
                  <td
                    className="flex items-center justify-center w-[12rem] "
                    colSpan="2"
                  >
                    <div className="flex justify-center items-center text-2xl text-orange-400 font-bold">
                      {" "}
                      ກຳລັງກວດສອບ
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col ">
        <NavLink
          to="/product"
          className=" flex justify-center rounded-lg items-center w-60 text-xl font-bold mr-16 h-12 my-6 border-2 border-blue-dark text-blue-dark self-end "
        >
          ກັບໄປໜ້າຫຼັກ
        </NavLink>
      </div>
    </div>
  );
}

export default Paysuccess;
