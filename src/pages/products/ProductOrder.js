import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import rectangle from "../../assets/Rectangle 240 (1).png";
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function ProductOrder() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" w-full ">
      {" "}
      <div className=" mt-24 w-full">
        <div className="  w-full h-[80px] flex shadow-lg rounded-t-xl border items-center justify-between ">
          <div className="w-full h-full flex items-center  gap-5 ml-3">
            <IoIosArrowBack className=" h-12 w-12" />
            <h1 className=" text-lg">ກັບໄປໜ້າກ່ອນ</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" mr-4"
          >
            <g clip-path="url(#clip0_857_7339)">
              <path
                d="M18.656 0.92995L6.46402 13.122C5.99836 13.5851 5.6292 14.136 5.3779 14.7428C5.1266 15.3496 4.99817 16.0002 5.00002 16.6569V18C5.00002 18.2652 5.10538 18.5195 5.29291 18.7071C5.48045 18.8946 5.7348 19 6.00002 19H7.34302C7.99978 19.0018 8.65039 18.8734 9.25718 18.6221C9.86396 18.3708 10.4149 18.0016 10.878 17.5359L23.07 5.34395C23.6544 4.75812 23.9826 3.96443 23.9826 3.13695C23.9826 2.30948 23.6544 1.51578 23.07 0.92995C22.4757 0.361844 21.6852 0.0447998 20.863 0.0447998C20.0408 0.0447998 19.2503 0.361844 18.656 0.92995ZM21.656 3.92995L9.46402 16.122C8.90015 16.6824 8.13803 16.9979 7.34302 17H7.00002V16.6569C7.0021 15.8619 7.31759 15.0998 7.87802 14.536L20.07 2.34395C20.2836 2.13991 20.5676 2.02604 20.863 2.02604C21.1584 2.02604 21.4424 2.13991 21.656 2.34395C21.866 2.55447 21.9839 2.83964 21.9839 3.13695C21.9839 3.43426 21.866 3.71944 21.656 3.92995Z"
                fill="black"
              />
              <path
                d="M23 8.979C22.7348 8.979 22.4804 9.08436 22.2929 9.27189C22.1054 9.45943 22 9.71379 22 9.979V15H18C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18V22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H14.042C14.3072 2 14.5616 1.89464 14.7491 1.70711C14.9366 1.51957 15.042 1.26522 15.042 1C15.042 0.734784 14.9366 0.48043 14.7491 0.292893C14.5616 0.105357 14.3072 0 14.042 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H16.343C16.9999 24.0019 17.6507 23.8735 18.2576 23.6222C18.8646 23.3709 19.4157 23.0017 19.879 22.536L22.535 19.878C23.0008 19.4149 23.37 18.864 23.6215 18.2572C23.873 17.6504 24.0016 16.9998 24 16.343V9.979C24 9.71379 23.8946 9.45943 23.7071 9.27189C23.5196 9.08436 23.2652 8.979 23 8.979ZM18.465 21.122C18.063 21.523 17.5547 21.8006 17 21.922V18C17 17.7348 17.1054 17.4804 17.2929 17.2929C17.4804 17.1054 17.7348 17 18 17H21.925C21.8013 17.5535 21.524 18.0609 21.125 18.464L18.465 21.122Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_857_7339">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className=" flex flex-col justify-center w-full border shadow-lg h-[35rem] overflow-hidden  ">
          <div className="flex justify-center w-full text-4xl font-medium h-[6rem] items-center text-blue-dark ">
            <h1>ສີນຄ້າໃນກະຕ່າ</h1>
          </div>
          <div className=" w-full overflow-auto flex   ">
            <table className=" table-auto w-full divide-y flex flex-col  ">
              <thead className={isSticky ? 'sticky top-0' : ''}>
                <tr className=" flex mt-12 container mx-auto py-4 z-50 bg-white ">
                  <th className=" font-normal text-gray-400 w-[6rem] flex justify-center  ">
                    ລະຫັດສີນຄ້າ
                  </th>

                  <th className=" font-normal text-gray-400 w-[6.5rem] flex justify-center items-start">
                    ຮູບສິນຄ້າ
                  </th>
                  <th className=" font-normal text-gray-400 w-[15rem] flex justify-center items-start ">
                    ຊື່ສິນຄ້າ
                  </th>
                  <th className=" font-normal text-gray-400 w-[11.2rem] flex justify-center items-start">
                    ລາຄາສິນຄ້າ
                  </th>
                  <th className="  font-normal text-gray-400 w-[8rem] flex items-center justify-center">
                    Point{" "}
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
                  <th className="  font-normal text-gray-400 w-[10rem] flex justify-center items-start">
                    ຈຳນວນ
                  </th>
                  <th className=" font-normal text-gray-400 w-[8rem] flex justify-center items-start">
                    ລາຄາລວມ
                  </th>
                  <th className=" w-[8rem]  flex justify-center items-center">
                    {" "}
                    <span className=" text-sm text-gray-400">ລວມPoint</span>
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
                  <th className="  flex items-center w-20 justify-center text-sm text-gray-400">
                    {" "}
                    ລົບອອກ{" "}
                  </th>
                </tr>
              </thead>
              <tbody className=" mt-[1rem]">
                <tr className=" w-full flex items-center py-2">
                  <td className="  w-[6rem] flex justify-center items-start ">
                    <div className=" text-sm border rounded-full bg-gray-100 ">
                      <span className=" mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="  w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className=" rounded-lg h-16 w-16 "
                    />
                  </td>
                  <td className="  w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="  w-[11.2rem] flex justify-center">
                    <h1>100.000</h1>
                  </td>
                  <td className="  w-[8rem] flex items-center justify-center ">
                    100
                  </td>
                  <td className="  w-[10rem]  flex justify-center items-center gap-2">
                    <button
                      className=" w-6 h-6 rounded  bg-black text-white"
                      onClick={handleMinus}
                    >
                      -
                    </button>{" "}
                    <h1> {count}</h1>{" "}
                    <button
                      className="   w-6 h-6 bg-black text-white rounded"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                  </td>
                  <td className="  flex items-center w-[8rem] justify-center ">
                    500.000
                  </td>
                  <td className="  flex justify-center items-center w-[8rem] ">
                    {" "}
                    500{" "}
                  </td>
                  <td className="  flex justify-center items-center w-[5rem] text-red-600 ">
                    {" "}
                    <FaRegTrashAlt />{" "}
                  </td>
                </tr>
                <tr className=" w-full flex items-center py-2 ">
                  <td className="  w-[6rem] flex justify-center items-start ">
                    <div className=" text-sm border rounded-full bg-gray-100 ">
                      <span className=" mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="  w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className=" rounded-lg h-16 w-16 "
                    />
                  </td>
                  <td className="  w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="  w-[11.2rem] flex justify-center">
                    <h1>100.000</h1>
                  </td>
                  <td className="  w-[8rem] flex items-center justify-center ">
                    100
                  </td>
                  <td className="  w-[10rem]  flex justify-center items-center gap-2">
                    <button
                      className=" w-6 h-6 rounded  bg-black text-white"
                      onClick={handleMinus}
                    >
                      -
                    </button>{" "}
                    <h1> {count}</h1>{" "}
                    <button
                      className="   w-6 h-6 bg-black text-white rounded"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                  </td>
                  <td className="  flex items-center w-[8rem] justify-center ">
                    500.000
                  </td>
                  <td className="  flex justify-center items-center w-[8rem] ">
                    {" "}
                    500{" "}
                  </td>
                  <td className="  flex justify-center items-center w-[5rem] text-red-600 ">
                    {" "}
                    <FaRegTrashAlt />{" "}
                  </td>
                </tr>
                <tr className=" w-full flex items-center py-2 ">
                  <td className="  w-[6rem] flex justify-center items-start ">
                    <div className=" text-sm border rounded-full bg-gray-100 ">
                      <span className=" mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="  w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className=" rounded-lg h-16 w-16 "
                    />
                  </td>
                  <td className="  w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="  w-[11.2rem] flex justify-center">
                    <h1>100.000</h1>
                  </td>
                  <td className="  w-[8rem] flex items-center justify-center ">
                    100
                  </td>
                  <td className="  w-[10rem]  flex justify-center items-center gap-2">
                    <button
                      className=" w-6 h-6 rounded  bg-black text-white"
                      onClick={handleMinus}
                    >
                      -
                    </button>{" "}
                    <h1> {count}</h1>{" "}
                    <button
                      className="   w-6 h-6 bg-black text-white rounded"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                  </td>
                  <td className="  flex items-center w-[8rem] justify-center ">
                    500.000
                  </td>
                  <td className="  flex justify-center items-center w-[8rem] ">
                    {" "}
                    500{" "}
                  </td>
                  <td className="  flex justify-center items-center w-[5rem] text-red-600 ">
                    {" "}
                    <FaRegTrashAlt />{" "}
                  </td>
                </tr>
                <tr className=" w-full flex items-center py-2 ">
                  <td className="  w-[6rem] flex justify-center items-start ">
                    <div className=" text-sm border rounded-full bg-gray-100 ">
                      <span className=" mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="  w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className=" rounded-lg h-16 w-16 "
                    />
                  </td>
                  <td className="  w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="  w-[11.2rem] flex justify-center">
                    <h1>100.000</h1>
                  </td>
                  <td className="  w-[8rem] flex items-center justify-center ">
                    100
                  </td>
                  <td className="  w-[10rem]  flex justify-center items-center gap-2">
                    <button
                      className=" w-6 h-6 rounded  bg-black text-white"
                      onClick={handleMinus}
                    >
                      -
                    </button>{" "}
                    <h1> {count}</h1>{" "}
                    <button
                      className="   w-6 h-6 bg-black text-white rounded"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                  </td>
                  <td className="  flex items-center w-[8rem] justify-center ">
                    500.000
                  </td>
                  <td className="  flex justify-center items-center w-[8rem] ">
                    {" "}
                    500{" "}
                  </td>
                  <td className="  flex justify-center items-center w-[5rem] text-red-600 ">
                    {" "}
                    <FaRegTrashAlt />{" "}
                  </td>
                </tr>
                <tr className=" w-full flex items-center py-2 ">
                  <td className="  w-[6rem] flex justify-center items-start ">
                    <div className=" text-sm border rounded-full bg-gray-100 ">
                      <span className=" mx-1 py-1 flex ">#23456GH</span>
                    </div>
                  </td>
                  <td className="  w-[6.5rem] flex justify-center items-center ">
                    <img
                      src={rectangle}
                      alt=""
                      className=" rounded-lg h-16 w-16 "
                    />
                  </td>
                  <td className="  w-[15rem] flex justify-center items-center">
                    <h1>TAEKO Cleansing Foam & serum Liquid Foundation </h1>
                  </td>
                  <td className="  w-[11.2rem] flex justify-center">
                    <h1>100.000</h1>
                  </td>
                  <td className="  w-[8rem] flex items-center justify-center ">
                    100
                  </td>
                  <td className="  w-[10rem]  flex justify-center items-center gap-2">
                    <button
                      className=" w-6 h-6 rounded  bg-black text-white"
                      onClick={handleMinus}
                    >
                      -
                    </button>{" "}
                    <h1> {count}</h1>{" "}
                    <button
                      className="   w-6 h-6 bg-black text-white rounded"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                  </td>
                  <td className="  flex items-center w-[8rem] justify-center ">
                    500.000
                  </td>
                  <td className="  flex justify-center items-center w-[8rem] ">
                    {" "}
                    500{" "}
                  </td>
                  <td className="  flex justify-center items-center w-[5rem] text-red-600 ">
                    {" "}
                    <FaRegTrashAlt />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" border h-[8rem]  flex rounded-b-xl bg-white w-full ">
          <div className=" w-full flex justify-between flex-col  items-center">
          
            <div className=" flex self-end w-[50%] mr-4 justify-around flex-col items-center h-full  ">
              <div className="flex w-full  justify-between">
                <h1>ຄ່າສົ່ງ</h1>
                <div className="flex gap-2">
                  <h1>50,000 </h1> <h1> ກີບ </h1>
                </div>
              </div>
              <div className=" flex w-full  justify-between ">
                <h1>Point ທີ່ທ່ານຈະໄດ້ຮັບ</h1>
                <div className=" flex gap-2 text-green-500  ">
                  <h1>1500</h1> <h1> point </h1>
                </div>
              </div>
              <div className="flex w-full  justify-between items-center">
                <h1>ເງິນທີ່ທ່ານຕ້ອງຊຳລະ</h1>
                <div className=" flex text-3xl gap-2 font-medium ">
                  <h1>1.500.000</h1>
                  <h1>ກີບ</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className=" w-full flex flex-col ">
         <NavLink to="/paychoice" className=" mt-6 my-10 bg-blue-dark w-60 h-16 flex self-end justify-center items-center rounded-lg text-xl font-bold text-white  "> ຢືນຢັນ ແລະ ຊຳລະ</NavLink>
       </div>
    </div>
  );
}

export default ProductOrder;
