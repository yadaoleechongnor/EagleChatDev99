import React from "react";
import ewallet from "../assets/ewallet.png";
import bonus from "../assets/bonus.png";
import salehistory from "../assets/history.png";
import order from "../assets/order.png";
import addmember from "../assets/addmember.png";
import product from "../assets/product.png";
import traval from "../assets/traval.png";
import waitforclose from "../assets/waittoclose.png";
import team from "../assets/team.png";
import transaction from "../assets/transaction.png";
import frame from "../assets/Frame.svg";
import frame1 from "../assets/Frame (1).svg";
import frame2 from "../assets/Frame (2).svg";
import frame3 from "../assets/Frame (3).svg";
import linechart from "../assets/linchart.jpeg";
import linechartgreen from "../assets/linechartgreen.jpeg";
import linechartpurple from "../assets/linechartpurple.jpeg";
import dashqr from "../assets/dashqr.png";
import dashqrleft from "../assets/dashqrleft.png";
import { FaCircle } from "react-icons/fa";
import circlechart from "../assets/circlechart.jpeg";

function Dashboard() {
  return (
    <div className="  w-full my-4">
      <div className=" fixed  ml-16 flex  gap-4 justify-center items-center h-12 ">
        <div className=" flex items-center ">
          <p className="">ຍິນດີຕ້ອນຮັບ</p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0V8H0L8 0Z"
              fill="#1F263E"
            />
          </svg>
        </div>
        <div className=" flex items-center ">
          <h1 className=" text-xs  sml:font-medium text-blue-dark">
            Dashboard
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0V8H0L8 0Z"
              fill="#01A5E8"
            />
          </svg>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className="mt-24 w-full flex flex-col gap-6 justify-center items-center">
          <div className="flex justify-around w-[90%] ">
            <div className=" font-medium bg-green-300 flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ໂອນເງິນ Ewallet </h1>
              <img src={ewallet} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-bonus-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ໂອນໂບນັດ </h1>
              <img src={bonus} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-hist-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ປະຫັວດການຂາຍ </h1>
              <img src={salehistory} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-order-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ສັ່ງສີນຄ້າ </h1>
              <img src={order} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-addmember-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ເພີ່ມສະມາຊິກ </h1>
              <img src={addmember} alt="" className=" w-24 ml-2" />
            </div>
          </div>
          <div className="flex justify-around w-[90%] ">
            <div className=" font-medium bg-product-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ສີນຄ້າ </h1>
              <img src={product} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-sky-200 flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ທິບທ່ອງທຽ່ວ </h1>
              <img src={traval} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-waitforclose-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ຍອດຖ້າການປິດ </h1>
              <img src={waitforclose} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-transaction-his-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ປະຫັວດທຸລະກຳ </h1>
              <img src={transaction} alt="" className=" w-24 ml-2" />
            </div>
            <div className=" font-medium bg-team-color flex flex-col w-[11rem] rounded-3xl h-[8rem] ">
              <h1 className=" flex self-end mr-3 mt-2">ສາຍງານ </h1>
              <img src={team} alt="" className=" w-24 ml-2" />
            </div>
          </div>
        </div>
      </div>
      {/*   ເລືອນຂັ້ນ ========================================================================= */}
      <div className=" w-full  mt-8 flex justify-center items-center  ">
        <div className=" w-[90%] flex justify-between items-center  ">
          <div className=" w-[31%] border h-[10rem] rounded-lg flex items-center ">
            <div className=" flex px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="131"
                viewBox="0 0 130 131"
                fill="none"
              >
                <path
                  d="M130 65.5C130 101.399 100.899 130.5 65 130.5C29.1015 130.5 0 101.399 0 65.5C0 29.6015 29.1015 0.5 65 0.5C100.899 0.5 130 29.6015 130 65.5ZM18.8116 65.5C18.8116 91.0092 39.4908 111.688 65 111.688C90.5092 111.688 111.188 91.0092 111.188 65.5C111.188 39.9908 90.5092 19.3116 65 19.3116C39.4908 19.3116 18.8116 39.9908 18.8116 65.5Z"
                  fill="#D0E2FF"
                />
                <path
                  d="M65 9.86072C65 4.69093 69.2122 0.430923 74.3285 1.17287C79.6559 1.94543 84.8787 3.37855 89.8744 5.44783C97.7606 8.71439 104.926 13.5023 110.962 19.5381C116.998 25.5739 121.786 32.7394 125.052 40.6256C127.121 45.6213 128.555 50.8441 129.327 56.1715C130.069 61.2878 125.809 65.5 120.639 65.5C115.47 65.5 111.374 61.2673 110.335 56.2029C109.746 53.3299 108.884 50.5126 107.756 47.79C105.43 42.1752 102.021 37.0735 97.7239 32.7761C93.4265 28.4788 88.3248 25.0699 82.71 22.7442C79.9874 21.6164 77.1701 20.7541 74.2971 20.1649C69.2327 19.1263 65 15.0305 65 9.86072Z"
                  fill="#00A3FF"
                />
              </svg>
              <div className=" absolute mt-11 ml-7">
                <div className="flex justify-center flex-col items-center ">
                  <h1 className=" text-2xl font-bold"> 200 PV </h1>
                  <hr className=" bg-black text-black w-[100%] " />
                  <p> 1000 PV</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ">
              <h1 className=" text-xl font-bold text-blue-light ">
                ເລື່ອນຂັ້ນເປັນ s{" "}
              </h1>
              <li> ທ່ານຍັງຂາດອີກ 800PV ເພື່ອຈະເລື່ອນຂັ້ນເປັນ s </li>
              <li> ໄລຍະເວລາ 30 ມື້</li>
              <div className=" flex items-center self-end px-2 text-lg font-bold gap-2 text-blue-light ">
                <span> ເພີ່ມຄະແນນ </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M3.75 9.5H14.25"
                    stroke="#0682FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 4.25L14.25 9.5L9 14.75"
                    stroke="#0682FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>{" "}
          </div>
          <div className=" w-[66%] border h-[10rem] rounded-lg flex justify-center items-center  ">
            <div className=" flex w-[90%] h-[90%] justify-center items-end ">
              <div className=" flex justify-center flex-col items-center font-bold">
                <img src={frame} alt="" />
                <h1 className=" text-blue-light">ລະດັບ S</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="163"
                  height="40"
                  viewBox="0 0 163 40"
                  fill="none"
                >
                  <path
                    d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z"
                    fill="#7CCCF1"
                    stroke="#7CCCF1"
                  />
                  <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                </svg>
                <div className=" absolute text-white flex gap-2 items-center mt-16 ">
                  <h1> 0 </h1> <h1>PV</h1>
                </div>
              </div>
              <div className=" flex justify-center flex-col items-center font-bold">
                <img src={frame1} alt="" />
                <h1 className=" text-blue-light">ລະດັບ M</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="163"
                  height="40"
                  viewBox="0 0 163 40"
                  fill="none"
                >
                  <path
                    d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z"
                    fill="#49BBEF"
                    stroke="#49BBEF"
                  />
                  <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                </svg>
                <div className=" absolute text-white flex gap-2 items-center mt-[75px] ">
                  <h1> 100 </h1> <h1>PV</h1>
                </div>
              </div>
              <div className=" flex justify-center flex-col items-center font-bold">
                <img src={frame2} alt="" />
                <h1 className=" text-blue-light">ລະດັບ L</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="163"
                  height="40"
                  viewBox="0 0 163 40"
                  fill="none"
                >
                  <path
                    d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z"
                    fill="#16AEF4"
                    stroke="#16AEF4"
                  />
                  <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                </svg>
                <div className=" absolute text-white flex gap-2 items-center mt-[85px] ">
                  <h1> 3000 </h1> <h1>PV</h1>
                </div>
              </div>
              <div className=" flex justify-center flex-col items-center font-bold">
                <img src={frame3} alt="" />
                <h1 className=" text-blue-light">ລະດັບ L</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="163"
                  height="40"
                  viewBox="0 0 163 40"
                  fill="none"
                >
                  <path
                    d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z"
                    fill="#00A3FF"
                    stroke="#00A3FF"
                  />
                  <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="140.646"
                    y1="33.6464"
                    x2="153.646"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                  <line
                    x1="139.354"
                    y1="5.64645"
                    x2="154.354"
                    y2="20.6464"
                    stroke="white"
                  />
                </svg>
                <div className=" absolute text-white flex gap-2 items-center mt-[90px] ">
                  <h1> 5000 </h1> <h1>PV</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================   chart area ================================== */}
      <div className=" mt-8 w-full flex justify-center">
        <div className=" w-[90%] flex justify-between gap-5">
          <div className=" flex flex-col gap-5">
            <div className=" flex gap-5">
              <div className=" w-[24rem] h-[15rem] bg-white border rounded-lg overflow-hidden ">
                <div className=" flex items-center  justify-between ">
                  <div className=" flex items-center ">
                    <div className=" px-4 my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          opacity="0.2"
                          d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z"
                          fill="#F7931A"
                          fill-opacity="0.6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M31.2281 21.2118C31.5517 19.0453 29.9022 17.8807 27.6468 17.1038L28.3784 14.1691L26.5915 13.7239L25.8792 16.5813C25.4101 16.4643 24.9278 16.3538 24.4485 16.2445L25.1659 13.3683L23.3806 12.9231L22.6484 15.8568C22.2597 15.7682 21.8781 15.6807 21.5077 15.5886L21.5098 15.5795L19.0462 14.9643L18.571 16.8723C18.571 16.8723 19.8964 17.176 19.8684 17.1949C20.5919 17.3755 20.7232 17.8543 20.7008 18.2338L19.8674 21.5771C19.9172 21.5898 19.9819 21.6081 20.0531 21.6366L19.8648 21.5898L18.6962 26.2732C18.6076 26.493 18.3832 26.8227 17.8775 26.6975C17.8953 26.7235 16.5791 26.3734 16.5791 26.3734L15.6923 28.4188L18.0174 28.9983C18.2799 29.0641 18.5392 29.1317 18.7957 29.1986L18.7959 29.1987C18.9619 29.242 19.1267 29.285 19.2904 29.327L18.5511 32.2957L20.3355 32.7409L21.0681 29.8042C21.555 29.9365 22.0282 30.0586 22.4912 30.1736L21.7616 33.0966L23.548 33.5418L24.2872 30.5791C27.3334 31.1555 29.6244 30.923 30.5876 28.1684C31.3645 25.9501 30.5494 24.6705 28.9467 23.8356C30.1139 23.5654 30.9931 22.7977 31.2276 21.2118H31.2281ZM27.1461 26.9351C26.639 28.9711 23.4514 28.1287 21.9943 27.7436L21.9942 27.7436C21.8637 27.7091 21.7472 27.6783 21.6476 27.6535L22.6286 23.7211C22.7503 23.7515 22.899 23.7849 23.0674 23.8226C24.5749 24.1609 27.6642 24.8542 27.1466 26.9351H27.1461ZM23.3704 21.9978C24.5862 22.3222 27.2365 23.0293 27.6982 21.1797C28.1702 19.2876 25.5931 18.7173 24.3345 18.4387C24.193 18.4074 24.0682 18.3798 23.9662 18.3544L23.0768 21.921C23.161 21.942 23.2598 21.9683 23.3704 21.9978Z"
                          fill="#F7931A"
                          fill-opacity="0.7"
                        />
                      </svg>
                    </div>
                    <h1 className=" text-xl font-medium"> ຄ່າ commission </h1>
                  </div>
                  <div className=" flex ">
                    <p>+</p>
                    <p>6.75</p>
                    <p>%</p>
                    <div className=" px-3">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z"
                          fill="#F8AE55"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex justify-center ">
                  <img
                    src={linechart}
                    alt=""
                    className=" w-[40rem] h-[8rem] "
                  />
                </div>
                <div className=" my-2  flex w-full items-center justify-center font-bold text-amber-500 text-xl ">
                  <h1> 2.000.000 </h1>
                  <h1> ກີບ </h1>
                </div>
              </div>
              <div className=" w-[24rem] h-[15rem] bg-white border rounded-lg ">
                <div className=" flex items-center  justify-between ">
                  <div className=" flex items-center ">
                    <div className=" px-4 my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          opacity="0.2"
                          d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z"
                          fill="#1AF765"
                          fill-opacity="0.6"
                        />
                      </svg>
                    </div>
                    <h1 className=" text-xl font-medium"> ຍອດຂາຍ </h1>
                  </div>
                  <div className=" flex ">
                    <p>+</p>
                    <p>6.75</p>
                    <p>%</p>
                    <div className=" px-3">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z"
                          fill="#44A56B"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w- flex justify-center  ">
                  <img
                    src={linechartgreen}
                    alt=""
                    className=" w-[40rem] h-[8rem] "
                  />
                </div>
                <div className=" my-2  flex w-full items-center justify-center font-bold text-green-600 text-xl ">
                  <h1> 2.000.000 </h1>
                  <h1> ກີບ </h1>
                </div>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" w-[24rem] h-[15rem] bg-white border rounded-lg ">
                {" "}
                <div className=" flex items-center  justify-between ">
                  <div className=" flex items-center ">
                    <div className=" px-4 my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          opacity="0.2"
                          d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z"
                          fill="#F71AEE"
                          fill-opacity="0.6"
                        />
                      </svg>
                    </div>
                    <h1 className=" text-xl font-medium">
                      {" "}
                      ເງີນຄົງເຫຼືອໃນ E-wallet{" "}
                    </h1>
                  </div>
                  <div className=" flex ">
                    <p>+</p>
                    <p>6.75</p>
                    <p>%</p>
                    <div className=" px-3">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z"
                          fill="#9747FF"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w- flex justify-center  ">
                  <img
                    src={linechartpurple}
                    alt=""
                    className=" w-[40rem] h-[8rem] "
                  />
                </div>
                <div className=" my-2  flex w-full items-center justify-center font-bold text-purple-600 text-xl ">
                  <h1> 2.000.000 </h1>
                  <h1> ກີບ </h1>
                </div>
              </div>
              <div className=" w-[24rem] h-[15rem] bg-white border rounded-lg ">
                {" "}
                <div className=" flex items-center ">
                  <div className=" px-4 my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        opacity="0.2"
                        d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z"
                        fill="#E5B3C4"
                      />
                    </svg>
                    <img
                      src={dashqr}
                      alt=""
                      className=" absolute mt-[-38px] ml-[10px]"
                    />
                  </div>
                  <h1 className=" text-xl font-medium"> QR ສະໝັກເລີຍ </h1>
                </div>
                <div className=" w-full flex items-center justify-center gap-8">
                  <div className=" flex items-center flex-col justify-center ">
                    <img src={dashqrleft} alt="" />
                    <span className=" underline"> ສາຍງານດ້ານຊ້າຍ </span>
                  </div>
                  <div className=" flex items-center flex-col justify-center ">
                    <img src={dashqrleft} alt="" />
                    <span className=" underline"> ສາຍງານດ້ານຂວາ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" border w-[20rem] rounded-lg ">
            <div className=" w-full flex justify-center my-4 text-xl font-bold">
              <span>ບອດຄະແນນສະມາຊິກ</span>
            </div>
            <div>
              {" "}
              <img src={circlechart} alt="" />
            </div>
            <div className=" w-full flex items-center flex-col gap-2 ">
              <div className=" w-[85%] ">
                <div className=" flex gap-4 items-center w-full justify-between ">
                  <div className=" flex items-center gap-3">
                    <FaCircle />
                    <h1 className=" font-medium">ຄະແນນລວມທັງໝົດ</h1>
                  </div>
                  <h1 className=" text-2xl font-bold ">100000</h1>
                </div>
                <div className=" flex gap-4 items-center justify-between w-full ">
                  <div className=" flex items-center  gap-3">
                    <FaCircle className=" text-orange-300" />
                    <h1 className=" font-medium">ຄະແນນຂອງທ່ານ</h1>
                  </div>
                  <h1 className=" text-2xl font-bold text-orange-300 ">
                    20000
                  </h1>
                </div>
                <div className=" flex gap-4 items-center justify-between w-full ">
                  <div className=" flex items-center  gap-3">
                    <FaCircle className=" text-green-600 " />
                    <h1 className=" font-medium">ຄະແນນລວມສະມາຊິກ</h1>
                  </div>
                  <h1 className=" text-2xl font-bold  text-green-600 ">
                    750000
                  </h1>
                </div>
                <div className=" flex gap-4 items-center justify-between w-full ">
                  <div className=" flex items-center  gap-3">
                    <FaCircle className=" text-purple-500" />
                    <h1 className=" font-medium">ຄະແນນໂບນັດ</h1>
                  </div>
                  <h1 className=" text-2xl font-bold text-purple-500 ">5000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
