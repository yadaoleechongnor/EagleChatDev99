import React, { useState } from "react";
import paybankaccount from "../../assets/paybankaccount.png";
import paywallet from "../../assets/paywallet.png";
import { FaPhoneAlt } from "react-icons/fa";
import billqr from "../../assets/billqr.png";
import { IoCloudUploadOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AutoWrapInput = ({ value, onChange }) => {
  return (
    <div className=" h-[86%] mx-auto w-[96%] rounded-lg  ">
      <textarea
        className=" w-full h-full border rounded-lg resize-none"
        placeholder="ຂໍ້ມູນເພີ່ມເຕີມ"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

function PayChoice() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageSelect = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [inputText, setInputText] = useState("");

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className=" border  mt-24 w-full ">
      <div className=" w-full my-6 sm:flex sm:justify-around ">
        <div className=" w-[35%] border bg-gradient-to-r from-blue-dark to-blue-light flex items-center text-3xl gap-6 justify-center h-24 rounded-xl font-bold text-white ">
          {" "}
          <img src={paybankaccount} alt="" /> ຊຳລະຜ່ານບັນຊີທະນາຄານ{" "}
        </div>
        <NavLink
          to="/ewallet"
          className=" w-[35%] border bg-gradient-to-t from-gray-400 to-gray-200 flex items-center text-3xl gap-6 justify-center h-24 rounded-xl font-bold text-gray-500 "
        >
          {" "}
          <img src={paywallet} alt="" /> ຊຳລະຜ່ານກະເປົ່າ Ewallet{" "}
        </NavLink>
      </div>
      <div className=" w-full flex justify-center flex-col items-center ">
        <div className=" w-[95%] flex justify-center ">
          <div className="w-[95%]  ">
            <div className=" my-8  ">
              <label htmlFor="branch" className=" font-medium ">
                {" "}
                ລະຫັດສະມາຊິກ
              </label>
              <div className=" flex items-center border border-blue-dark rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className=" ml-4 mx-2"
                >
                  <path
                    d="M9.54361 11.6817C5.99217 12.0027 3.28647 15.0036 3.33361 18.5692V18.75C3.33361 19.4403 3.89326 20 4.58361 20C5.27397 20 5.83361 19.4403 5.83361 18.75V18.5192C5.79604 16.3299 7.41166 14.463 9.58361 14.1858C11.8763 13.9585 13.9192 15.6328 14.1466 17.9255C14.16 18.061 14.1668 18.1971 14.1669 18.3333V18.75C14.1669 19.4403 14.7266 20 15.4169 20C16.1073 20 16.6669 19.4403 16.6669 18.75V18.3333C16.6629 14.6473 13.6714 11.6624 9.98541 11.6665C9.83803 11.6667 9.69068 11.6717 9.54361 11.6817Z"
                    fill="#00AEEF"
                  />
                  <path
                    d="M10.0002 10C12.7617 10 15.0002 7.76141 15.0002 5C15.0002 2.23859 12.7617 0 10.0002 0C7.23884 0 5.00024 2.23859 5.00024 5C5.00298 7.76027 7.23997 9.99723 10.0002 10ZM10.0002 2.5C11.3809 2.5 12.5002 3.6193 12.5002 5C12.5002 6.3807 11.3809 7.5 10.0002 7.5C8.61954 7.5 7.50024 6.3807 7.50024 5C7.50024 3.6193 8.61954 2.5 10.0002 2.5Z"
                    fill="#00AEEF"
                  />
                </svg>
                <input
                  type="search"
                  name=""
                  id=""
                  className=" flex w-full h-12 focus:border-blue-dark outline-none"
                />{" "}
                <button className=" w-40 bg-gradient-to-t from-blue-dark to-blue-light flex items-center justify-center h-12 rounded-lg my-4 mr-6 gap-3 text-white text-lg font-bold ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M20.1935 17.9925L15.6596 13.4586C16.7511 12.0054 17.3404 10.2367 17.3384 8.4192C17.3384 3.77688 13.5615 0 8.9192 0C4.27688 0 0.5 3.77688 0.5 8.4192C0.5 13.0615 4.27688 16.8384 8.9192 16.8384C10.7367 16.8404 12.5054 16.2511 13.9586 15.1596L18.4925 19.6935C18.722 19.8986 19.0213 20.0081 19.329 19.9995C19.6367 19.9909 19.9295 19.8648 20.1472 19.6472C20.3648 19.4295 20.4909 19.1367 20.4995 18.829C20.5081 18.5213 20.3986 18.222 20.1935 17.9925ZM2.90549 8.4192C2.90549 7.2298 3.25818 6.06711 3.91898 5.07816C4.57977 4.08921 5.51899 3.31842 6.61785 2.86325C7.71671 2.40809 8.92587 2.289 10.0924 2.52104C11.259 2.75308 12.3305 3.32583 13.1715 4.16686C14.0126 5.00789 14.5853 6.07944 14.8174 7.24598C15.0494 8.41253 14.9303 9.62169 14.4751 10.7205C14.02 11.8194 13.2492 12.7586 12.2602 13.4194C11.2713 14.0802 10.1086 14.4329 8.9192 14.4329C7.32485 14.431 5.79635 13.7968 4.66897 12.6694C3.5416 11.542 2.9074 10.0135 2.90549 8.4192Z"
                      fill="white"
                    />
                  </svg>
                  ຄົ້ນຫາ
                </button>
              </div>
            </div>
            <div className=" my-8  ">
              <label htmlFor="branch" className=" font-medium ">
                {" "}
                ຊື່ຜູ້ຮັບ
              </label>
              <div className=" flex items-center border border-blue-dark rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className=" ml-4 mx-2"
                >
                  <path
                    d="M9.54361 11.6817C5.99217 12.0027 3.28647 15.0036 3.33361 18.5692V18.75C3.33361 19.4403 3.89326 20 4.58361 20C5.27397 20 5.83361 19.4403 5.83361 18.75V18.5192C5.79604 16.3299 7.41166 14.463 9.58361 14.1858C11.8763 13.9585 13.9192 15.6328 14.1466 17.9255C14.16 18.061 14.1668 18.1971 14.1669 18.3333V18.75C14.1669 19.4403 14.7266 20 15.4169 20C16.1073 20 16.6669 19.4403 16.6669 18.75V18.3333C16.6629 14.6473 13.6714 11.6624 9.98541 11.6665C9.83803 11.6667 9.69068 11.6717 9.54361 11.6817Z"
                    fill="#00AEEF"
                  />
                  <path
                    d="M10.0002 10C12.7617 10 15.0002 7.76141 15.0002 5C15.0002 2.23859 12.7617 0 10.0002 0C7.23884 0 5.00024 2.23859 5.00024 5C5.00298 7.76027 7.23997 9.99723 10.0002 10ZM10.0002 2.5C11.3809 2.5 12.5002 3.6193 12.5002 5C12.5002 6.3807 11.3809 7.5 10.0002 7.5C8.61954 7.5 7.50024 6.3807 7.50024 5C7.50024 3.6193 8.61954 2.5 10.0002 2.5Z"
                    fill="#00AEEF"
                  />
                </svg>
                <input
                  type="search"
                  name=""
                  id=""
                  className=" flex w-full h-12 focus:border-blue-dark outline-none rounded-lg"
                />{" "}
              </div>
            </div>
            <div className=" my-8  ">
              <label htmlFor="branch" className=" font-medium ">
                {" "}
                ເບີໂທຜູ້ຮັບ
              </label>
              <div className=" flex items-center border border-blue-dark rounded-lg ">
                <FaPhoneAlt className=" ml-4 mx-4 text-blue-dark" />
                <input
                  type="search"
                  name=""
                  id=""
                  className=" flex w-full h-12 focus:border-blue-dark outline-none rounded-lg"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="w-full my-6">
            <div className="w-full">
              <div className="w-full flex justify-center items-center text-3xl font-medium text-blue-dark my-6">
                <h1>ວິທີຮັບສິນຄ້າ</h1>
              </div>
              <div className="  flex flex-col w-full justify-center items-center  ">
                <div className="w-full sm:flex sm:justify-center sm:gap-8  items-center ">
                  <div className="sm:w-[43.5%] border w-[80%] bg-gradient-to-r rounded-xl from-blue-dark to-blue-light flex justify-center">
                    <div className="sm:w-[80%] w-full flex flex-col justify-center">
                      <div className="w-full sm:text-3xl sm:font-medium flex justify-center">
                        <h1 className="my-4">ຈັດສົ່ງໃຫ້ຂ້ອຍ</h1>
                      </div>
                      <div className="w-full">
                        <label htmlFor="company">ອານູສິດ ຂົນສົ່ງດ່ວນ</label>
                        <select
                          id="company"
                          className="select w-full h-[50px] rounded-lg shadow-lg"
                          value={selectedCompany}
                          onChange={handleCompanyChange}
                        >
                          <option disabled value="">
                            ອານູສິດ ຂົນສົ່ງດ່ວນ
                          </option>
                          <option>ອານູສິດ ຂົນສົ່ງດ່ວນ</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="branch">ສາຂາ</label>
                        <input
                          type="text"
                          id="branch"
                          className="w-full h-[50px] rounded-lg"
                          placeholder="ປ້ອນຂໍ້ມູນສາຂາ"
                          value={selectedBranch}
                          onChange={handleBranchChange}
                        />
                      </div>
                      <div className="my-6 w-full h-[8rem] bg-white rounded-lg flex justify-center items-center">
                        <AutoWrapInput
                          value={inputText}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[43.5 %] bg-productpay-menu-color rounded-xl flex justify-center">
                    <div className="w-[80%] flex flex-col justify-center">
                      <div className="w-full sm:text-3xl sm:font-medium flex justify-center">
                        <h1 className="my-4">ໄປຮັບເອງທີ່ສາຂາ</h1>
                      </div>
                      <div className="w-full">
                        <label htmlFor="company">ເລືອກສາຂາໄປຮັບ</label>
                        <select
                          id="company"
                          className="select w-full h-[50px] rounded-lg shadow-lg"
                          value={selectedCompany}
                          onChange={handleCompanyChange}
                        >
                          <option disabled value="">
                            ສຳນັກໃຫ່ຍຫົງຟ້າ
                          </option>
                          <option>ສຳນັກໃຫ່ຍຫົງຟ້າ</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="branch">ເບີໂທຕິດຕໍ່</label>
                        <div className=" flex gap-2 items-center bg-white rounded-lg">
                          <label
                            htmlFor="branch"
                            className=" w-12 justify-center flex text-gray-400 "
                          >
                            {" "}
                            20{" "}
                          </label>
                          <input
                            type="text"
                            id="branch"
                            className="w-full h-[50px] rounded-lg"
                            placeholder="7xxxxxxx"
                          />
                        </div>
                      </div>
                      <div className="my-6 w-full h-[8rem] bg-white rounded-lg flex flex-col justify-center ">
                        <div className=" ml-2">
                          <li>
                            {" "}
                            ສຳນັກງານໃຫ່ຍຫົງຟ້າ ຖະໜົນກຳແພງເມຶອງ
                            ບ້ານໂພນສີນວນເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງວຽງຈັນ
                          </li>
                          <li> ເປິດບໍລິການແຕ 8:00 ຫາ 17:00</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center  flex-col items-center">
          <div className=" my-12 text-blue-light text-4xl font-bold ">
            <span>ຊຳລະເງິນຜ່ານ BCEL ONE</span>
          </div>
          <div className=" sm:flex sm:gap-12 ">
            <div>
              <img src={billqr} alt="" />
            </div>
            <div>
              <span className=" text-xl font-medium ">ອັບໂຫລດໃບບີນ</span>
              <div>
                <div className=" border-2 overflow-hidden rounded-xl h-[30rem] w-[30rem] flex items-center justify-center  ">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      className=" h-full w-full mx-auto object-cover"
                      alt=""
                    />
                  ) : (
                    <div className="relative  border-gray-300 p-6 mx-auto mt-3 h-[rem] w-[20rem] rounded-full">
                      <div className="text-center flex flex-col items-center gap-3">
                        <IoCloudUploadOutline className=" text-gray-400 w-16 h-20" />
                        <h2 className="mt-3 text-gray-400 font-medium font-Noto text-2xl ">
                          Drag & Drop files here
                        </h2>
                        <h3 className=" text-gray-400">or</h3>
                        <button className=" border-2 border-blue-light text-blue-light font-bold text-lg w-40 h-12 rounded-lg">
                          {" "}
                          Browse Files{" "}
                        </button>
                      </div>
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageSelect}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:flex sm:justify-center sm:items-center my-6 sm:gap-24 ">
          <button className=" w-[35%] border rounded-lg h-[80px] bg-gradient-to-t from-gray-400 to-gray-200 text-white text-xl font-bold ">
            {" "}
            ຍົກເລີກ{" "}
          </button>
          <NavLink to="/paysuccess" className=" flex justify-center items-center w-[35%] border rounded-lg h-[80px] bg-gradient-to-r from-blue-light to-blue-dark text-white text-xl font-bold ">
            {" "}
            ໂອນ E-Wallet{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PayChoice;
