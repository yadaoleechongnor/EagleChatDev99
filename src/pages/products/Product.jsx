import React from "react";
import { FiSearch } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import {  BiSolidCart } from "react-icons/bi"; // Add this import
import ProductCont from "./ProductCont";

function Product() {
  const handlePageClick = (selectedPage) => {
    console.log(`Selected page: ${selectedPage}`);
  };

  return (
    <div className=" w-full flex justify-center mt-[6rem] ">
      <div className="flex w-full ">
        <div></div>
        <div className="w-full h-full mt-4  ">
          <div className="  w-full h-[50px] flex shadow-lg rounded-t-xl bg-gradient-to-t from-blue-light to-blue-dark">
            <div className="w-full h-full flex items-center gap-5 ml-3">
              <select className="select w-[150px] h-[30px] rounded-lg shadow-lg max-w-xs text-white bg-sky-300">
                <option disabled selected>
                  ປະເພດຂອງສີນຄ້າ
                </option>
                <option>ປະເພດຂອງສີນຄ້າ</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <select className="select w-[150px] flex items-center justify-center h-[30px] rounded-lg shadow-lg max-w-xs border-2 bg-sky-300 text-white">
                <option
                  disabled
                  selected
                  className=" flex items-center justify-center"
                >
                  ລາຄາຂອງສີນຄ້າ
                </option>
                <option>ລາຄາຂອງສີນຄ້າ</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <div className="self-end flex full h-full items-center mr-5 gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_378_575)">
                    <path
                      d="M1 4.75008H3.736C3.95064 5.53981 4.41917 6.23697 5.06933 6.73401C5.71948 7.23104 6.51512 7.50033 7.3335 7.50033C8.15188 7.50033 8.94752 7.23104 9.59767 6.73401C10.2478 6.23697 10.7164 5.53981 10.931 4.75008H23C23.2652 4.75008 23.5196 4.64472 23.7071 4.45718C23.8946 4.26965 24 4.01529 24 3.75008C24 3.48486 23.8946 3.23051 23.7071 3.04297C23.5196 2.85543 23.2652 2.75008 23 2.75008H10.931C10.7164 1.96034 10.2478 1.26318 9.59767 0.766145C8.94752 0.269108 8.15188 -0.000183105 7.3335 -0.000183105C6.51512 -0.000183105 5.71948 0.269108 5.06933 0.766145C4.41917 1.26318 3.95064 1.96034 3.736 2.75008H1C0.734784 2.75008 0.48043 2.85543 0.292893 3.04297C0.105357 3.23051 0 3.48486 0 3.75008C0 4.01529 0.105357 4.26965 0.292893 4.45718C0.48043 4.64472 0.734784 4.75008 1 4.75008ZM7.333 2.00008C7.67912 2.00008 8.01746 2.10271 8.30525 2.295C8.59303 2.4873 8.81734 2.76061 8.94979 3.08038C9.08224 3.40015 9.1169 3.75202 9.04937 4.09148C8.98185 4.43095 8.81518 4.74277 8.57044 4.98751C8.3257 5.23225 8.01388 5.39893 7.67441 5.46645C7.33494 5.53397 6.98307 5.49932 6.6633 5.36687C6.34353 5.23441 6.07022 5.01011 5.87793 4.72232C5.68564 4.43454 5.583 4.09619 5.583 3.75008C5.58353 3.28611 5.76807 2.8413 6.09615 2.51322C6.42422 2.18515 6.86903 2.00061 7.333 2.00008Z"
                      fill="white"
                    />
                    <path
                      d="M23 11H20.264C20.0497 10.2101 19.5814 9.51268 18.9313 9.01544C18.2812 8.5182 17.4855 8.24878 16.667 8.24878C15.8485 8.24878 15.0528 8.5182 14.4027 9.01544C13.7526 9.51268 13.2843 10.2101 13.07 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H13.07C13.2843 13.7899 13.7526 14.4873 14.4027 14.9846C15.0528 15.4818 15.8485 15.7512 16.667 15.7512C17.4855 15.7512 18.2812 15.4818 18.9313 14.9846C19.5814 14.4873 20.0497 13.7899 20.264 13H23C23.2652 13 23.5196 12.8947 23.7071 12.7071C23.8946 12.5196 24 12.2652 24 12C24 11.7348 23.8946 11.4804 23.7071 11.2929C23.5196 11.1054 23.2652 11 23 11ZM16.667 13.75C16.3209 13.75 15.9825 13.6474 15.6948 13.4551C15.407 13.2628 15.1827 12.9895 15.0502 12.6697C14.9178 12.3499 14.8831 11.9981 14.9506 11.6586C15.0181 11.3191 15.1848 11.0073 15.4296 10.7626C15.6743 10.5178 15.9861 10.3512 16.3256 10.2836C16.6651 10.2161 17.0169 10.2508 17.3367 10.3832C17.6565 10.5157 17.9298 10.74 18.1221 11.0278C18.3144 11.3156 18.417 11.6539 18.417 12C18.4165 12.464 18.2319 12.9088 17.9039 13.2369C17.5758 13.5649 17.131 13.7495 16.667 13.75Z"
                      fill="white"
                    />
                    <path
                      d="M23 19.25H10.931C10.7164 18.4603 10.2478 17.7631 9.59767 17.2661C8.94752 16.769 8.15188 16.4998 7.3335 16.4998C6.51512 16.4998 5.71948 16.769 5.06933 17.2661C4.41917 17.7631 3.95064 18.4603 3.736 19.25H1C0.734784 19.25 0.48043 19.3554 0.292893 19.5429C0.105357 19.7304 0 19.9848 0 20.25C0 20.5152 0.105357 20.7696 0.292893 20.9571C0.48043 21.1447 0.734784 21.25 1 21.25H3.736C3.95064 22.0397 4.41917 22.7369 5.06933 23.2339C5.71948 23.731 6.51512 24.0003 7.3335 24.0003C8.15188 24.0003 8.94752 23.731 9.59767 23.2339C10.2478 22.7369 10.7164 22.0397 10.931 21.25H23C23.2652 21.25 23.5196 21.1447 23.7071 20.9571C23.8946 20.7696 24 20.5152 24 20.25C24 19.9848 23.8946 19.7304 23.7071 19.5429C23.5196 19.3554 23.2652 19.25 23 19.25ZM7.333 22C6.98688 22 6.64854 21.8974 6.36075 21.7051C6.07297 21.5128 5.84866 21.2395 5.71621 20.9197C5.58376 20.5999 5.5491 20.2481 5.61663 19.9086C5.68415 19.5691 5.85082 19.2573 6.09556 19.0126C6.3403 18.7678 6.65213 18.6012 6.99159 18.5336C7.33106 18.4661 7.68293 18.5008 8.0027 18.6332C8.32247 18.7657 8.59578 18.99 8.78807 19.2778C8.98036 19.5656 9.083 19.9039 9.083 20.25C9.08221 20.7139 8.89758 21.1586 8.56956 21.4866C8.24154 21.8146 7.79689 21.9992 7.333 22Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_378_575">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="w-[350px] h-[40px] rounded-lg flex items-center gap-3 bg-background-color">
                  <FiSearch className="w-8 h-8 ml-3 text-blue-dark" />
                  <input
                    type="search"
                    className="w-full h-full bg-background-color rounded-r-lg font-medium text-xl"
                    placeholder="Search"
                  />
                </div>
                <button className=" w-24 h-10 rounded-xl text-white text-lg font-medium bg-gradient-to-b from-blue-light to-blue-dark ">
                  ຄົ້ນຫາ{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg bg-white mt-1 h-[35rem] flex overflow-hidden ">
            <ProductCont />
          </div>
          <div className="bg-white w-full h-[6rem] shadow-lg flex items-center mt-1 rounded-b-xl">
            <div className="flex justify-between items-center  w-full">
              <button className="rounded-lg font-Noto font-medium shadow-lg ml-5 border-2 border-blue-dark text-blue-dark w-[150px] h-[40px] flex items-center justify-center gap-2">
              <BiSolidCart /> ສີນຄ້າໃນກະຕ່າ
              </button>
              <div className="flex gap-3 mr-5 items-center">
                <div className=" w-[300px] ">
                  <ReactPaginate 
                    previousLabel={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M11.6428 7L6.7584 12L11.6428 17"
                          stroke="#A0A0A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.481 7L13.5965 12L18.481 17"
                          stroke="#A0A0A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                    nextLabel={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M13.6455 17L18.5299 12L13.6455 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.80737 17L11.6918 12L6.80737 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                    breakLabel={"..."}
                    containerClassName="Pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link prev"
                    nextClassName="page-item"
                    nextLinkClassName="page-link next"
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={8}
                    activeLinkClassName="active"
                    onPageChange={({ selected }) =>
                      handlePageClick(selected + 1)
                    }
                    pageCount={10}
                  />
                </div>
              </div>
              <select className="select w-[100px] h-[40px] rounded-lg shadow-lg max-w-xs border-2 border-gray-400 mr-5">
                <option disabled selected>
                  10
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
