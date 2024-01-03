
import { IoChevronBackOutline } from "react-icons/io5";
import { Form, Formik } from "formik";
import { IoAddCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { MdCheck } from "react-icons/md";
import { useState } from "react";

function AddProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageSelect = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    
        <div>
          <div className="flex items-center justify-between font-medium font-Noto w-[220px] h-[55px] rounded-lg absolute mt-[-5.8rem]">
            <button className="flex items-center justify-center font-medium text-blue-light font-Noto w-[100px] h-[55px] rounded-lg hover:bg-sky-200">
              ຄັງສີນຄ້າ
            </button>
            <button className="flex items-center justify-center font-medium text-blue-light font-Noto w-[100px] h-[55px] rounded-lg hover:bg-sky-200">
              ເພີ່ມສີນຄ້າ
            </button>
          </div>
          <div className=" w-full h-[57rem]  mt-5">
            <div className=" font-Noto font-medium w-full h-[4rem] flex items-center shadow-lg rounded-t-xl bg-white  justify-between  ">
              <div className=" flex gap-4 items-center">
                <IoChevronBackOutline className=" w-10 h-10 ml-2" />
                <h1>ເພີ່ມສີນຄ້າ</h1>
              </div>
            </div>
            <div className=" w-full mt-1 bg-white flex items-center justify-center shadow-lg ">
              <div className="mt-2 flex flex-col items-center gap-5 ">
                <div className=" border-2 overflow-hidden rounded-xl h-[15rem] w-[20rem] bg-sky-200 flex items-center justify-center  ">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      className=" h-full w-full mx-auto object-cover"
                   alt="" />
                  ) : (
                    <div className="relative  border-gray-300 p-6 mx-auto mt-3 h-[12rem] w-[12rem] rounded-full">
                      <div className="text-center flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_533_337)">
                            <path
                              d="M31.6667 0H8.33333C6.12401 0.00264643 4.00593 0.88147 2.4437 2.4437C0.88147 4.00593 0.00264643 6.12401 0 8.33333L0 31.6667C0.00264643 33.876 0.88147 35.9941 2.4437 37.5563C4.00593 39.1185 6.12401 39.9974 8.33333 40H31.6667C33.876 39.9974 35.9941 39.1185 37.5563 37.5563C39.1185 35.9941 39.9974 33.876 40 31.6667V8.33333C39.9974 6.12401 39.1185 4.00593 37.5563 2.4437C35.9941 0.88147 33.876 0.00264643 31.6667 0ZM8.33333 3.33333H31.6667C32.9927 3.33333 34.2645 3.86012 35.2022 4.7978C36.1399 5.73548 36.6667 7.00725 36.6667 8.33333V31.6667C36.6638 32.4091 36.4929 33.1413 36.1667 33.8083L20.895 18.5367C20.1211 17.7626 19.2024 17.1486 18.1912 16.7297C17.18 16.3107 16.0962 16.0951 15.0017 16.0951C13.9071 16.0951 12.8233 16.3107 11.8121 16.7297C10.8009 17.1486 9.88218 17.7626 9.10833 18.5367L3.33333 24.31V8.33333C3.33333 7.00725 3.86012 5.73548 4.7978 4.7978C5.73548 3.86012 7.00725 3.33333 8.33333 3.33333Z"
                              fill="#00AEEF"
                            />
                            <path
                              d="M26.6666 17.4999C27.8203 17.4999 28.9481 17.1578 29.9074 16.5168C30.8667 15.8759 31.6144 14.9648 32.0559 13.8989C32.4974 12.833 32.6129 11.6601 32.3878 10.5286C32.1628 9.39701 31.6072 8.35761 30.7914 7.5418C29.9756 6.72599 28.9362 6.17042 27.8046 5.94534C26.6731 5.72026 25.5002 5.83578 24.4343 6.27729C23.3684 6.7188 22.4573 7.46648 21.8163 8.42576C21.1754 9.38505 20.8333 10.5129 20.8333 11.6666C20.8333 13.2137 21.4478 14.6974 22.5418 15.7914C23.6358 16.8853 25.1195 17.4999 26.6666 17.4999ZM26.6666 9.16659C27.161 9.16659 27.6444 9.31321 28.0555 9.58791C28.4666 9.86262 28.7871 10.2531 28.9763 10.7099C29.1655 11.1667 29.215 11.6694 29.1185 12.1543C29.0221 12.6393 28.784 13.0847 28.4344 13.4344C28.0847 13.784 27.6393 14.0221 27.1543 14.1186C26.6694 14.215 26.1667 14.1655 25.7099 13.9763C25.2531 13.7871 24.8626 13.4666 24.5879 13.0555C24.3132 12.6444 24.1666 12.161 24.1666 11.6666C24.1666 11.0035 24.43 10.3677 24.8988 9.89882C25.3677 9.42998 26.0035 9.16659 26.6666 9.16659Z"
                              fill="#00AEEF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_533_337">
                              <rect width="40" height="40" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <h2 className="mt-3 text-blue-dark font-medium font-Noto text-xl ">
                          ອັບໂລດຮູບພາບ
                        </h2>
                      </div>
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageSelect}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <Formik>
                    
                      <Form>
                        <div className=" w-[30rem] flex flex-col gap-2 h-[30rem] ">
                          <div className=" font-Noto text-gray-400 ">
                            <h1>ຊື່ສີນຄ້າ</h1>
                            <input
                              type="text"
                              className=" w-full h-[2.5rem] text-lg border rounded-lg"
                              id="product_name"
                            />
                          </div>
                          <div className=" font-Noto text-gray-400 ">
                            <h1>ລາຄາ</h1>
                            <input
                              type="text"
                              className=" w-full h-[2.5rem] text-lg border rounded-lg"
                              id="product_price"
                            />
                          </div>
                          <div className=" font-Noto text-gray-400 flex justify-between ">
                            <div>
                              <h1>ຈຳນວນ</h1>
                              <input
                                type="text"
                                className=" w-full h-[2.5rem] text-lg border rounded-lg"
                                id="product_amount"
                              />
                            </div>
                            <div>
                              <h1>ຄະແນນ</h1>
                              <input
                                type="text"
                                className=" w-full h-[2.5rem] text-lg border rounded-lg"
                                id="product_score"
                              />
                            </div>
                          </div>
                          <h1 className=" font-Noto font-medium ">
                            {" "}
                            ລາຍລະອຽດສີນຄ້າ
                          </h1>
                          <div className=" flex justify-between w-full ">
                            <div>
                              {" "}
                              <h1 className=" font-Noto text-gray-400 ">
                                ປະເພດ:
                              </h1>
                              <select className="select select-bordered w-[14.3rem] h-[2.5rem] border rounded-lg font-Noto">
                                <option disabled selected>
                                  ເລືອກປະເພດສີນຄ້າ
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                              </select>
                            </div>
                            <div>
                              {" "}
                              <h1 className=" font-Noto text-gray-400 ">
                                ຫົວໜ່ວຍສີນຄ້າ
                              </h1>
                              <select className="select select-bordered w-[14.3rem] h-[2.5rem] border rounded-lg font-Noto " placeholder=" ເລືອກສີນຄ້າ ">
                                
                                <option>Han Solo</option>
                                <option>Greedo</option>
                              </select>
                            </div>
                          </div>
                          <div className=" font-Noto text-gray-400 flex justify-between ">
                            <div>
                              <h1> ຜູ້ຜະລິດ:</h1>
                              <input
                                type="text"
                                className=" w-full h-[2.5rem] text-lg border rounded-lg"
                                id="product_maker"
                              />
                            </div>
                            <div>
                              <h1>ນຳເຂົ້າຈາກ:</h1>
                              <input
                                type="text"
                                className=" w-full h-[2.5rem] text-lg border rounded-lg"
                                id="product_importer"
                              />
                            </div>
                          </div>
                          <hr className=" mt-2" />
                          <div className=" mt-2 cursor-pointer active:border-blue-dark font-Noto font-medium rounded-lg w-full h-[2.5rem] text-blue-dark text-xl bg-sky-200 flex items-center justify-center gap-2 ">
                            <IoAddCircleOutline className=" text-blue-dark" />
                            <h1>ເພີ່ມຂໍ້ມູນ</h1>
                          </div>
                        </div>
                      </Form>
                    
                  </Formik>
                </div>
              </div>
            </div>
            <div className=" text-blue-dark font-Noto font-medium text-xl shadow-lg gap-7 w-full h-[4rem] bg-white mt-1 rounded-b-xl flex items-center justify-center ">
              <button className=" border-2 border-blue-dark rounded flex items-center justify-center w-[9rem] h-[3rem] ">
                {" "}
                <GoPlus  className=" rotate-45"/> ຍົກເລີກ
              </button>
              <button className=" bg-blue-dark text-white rounded flex items-center justify-center w-[9rem] h-[3rem] ">
                {" "}
                <MdCheck /> ເພີ່ມສີນຄ້າ
              </button>
            </div>
          </div>
        </div>
      
  );
}

export default AddProduct;
