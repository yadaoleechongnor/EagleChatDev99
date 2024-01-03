
import { BsList } from "react-icons/bs";
import rectangle from "../../assets/Rectangle 240.png";
import { AreaChart } from "recharts";
import { RiHistoryFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function BuySale() {
  return (
    <div className=" w-full font-Noto h-[55rem] ">
      <div>
        <div className="flex items-center justify-between font-medium font-Noto w-[220px] h-[55px] rounded-lg absolute mt-[-5.8rem]">
          <button className="flex items-center justify-center font-medium text-blue-light font-Noto w-[100px] h-[55px] rounded-lg bg-blue-200">
            ຄັງສີນຄ້າ
          </button>
        </div>
        <div className=" w-full  mt-5 ">
          <div className="flex gap-3 justify-between ">
            <div className="flex flex-col gap-4">
              <div className=" w-full flex gap-4 ">
                <div className="flex gap-2  bg-white w-[17.5rem] font h-[5rem] items-center shadow-lg rounded-xl">
                  <div className=" ml-3 bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M35.7143 17.7253L33.6486 15.0652L30.2969 8.39861C30.0639 7.93595 29.5977 7.64878 29.0803 7.64878H24.548V6.77202C24.548 6.0208 23.9369 5.4104 23.1864 5.4104H4.533C3.78179 5.4104 3.17139 6.0215 3.17139 6.77202C3.17139 7.52254 3.78248 8.13364 4.533 8.13364H21.8234V15.7249C21.8234 16.4761 22.4345 17.0865 23.185 17.0865H31.7695L33.2754 19.0266V24.4724H31.5934C31.019 22.5128 29.2072 21.0777 27.0646 21.0777C24.9219 21.0777 23.1094 22.5128 22.5358 24.4724H16.2986C15.7242 22.5128 13.9124 21.0777 11.7698 21.0777C9.62711 21.0777 7.81532 22.5128 7.24098 24.4724H4.533C3.78179 24.4724 3.17139 25.0835 3.17139 25.834C3.17139 26.5845 3.78248 27.1956 4.533 27.1956H7.26248C7.8604 29.117 9.65485 30.5161 11.7698 30.5161C13.8847 30.5161 15.6798 29.117 16.2771 27.1963H22.5573C23.1552 29.1177 24.9497 30.5161 27.0646 30.5161C29.1795 30.5161 30.9746 29.117 31.5718 27.1956H34.6371C35.3883 27.1956 35.9987 26.5845 35.9987 25.834V18.5598C35.9987 18.2587 35.8974 17.9625 35.7129 17.7246L35.7143 17.7253ZM24.5473 10.372H28.2396L30.2463 14.3632H24.5473V10.372ZM27.0653 27.7928C25.9651 27.7928 25.0697 26.8973 25.0697 25.7972C25.0697 24.6971 25.9651 23.8016 27.0653 23.8016C28.1654 23.8016 29.0609 24.6971 29.0609 25.7972C29.0609 26.8973 28.1654 27.7928 27.0653 27.7928ZM13.7654 25.7972C13.7654 26.8973 12.8699 27.7928 11.7698 27.7928C10.6697 27.7928 9.77416 26.8973 9.77416 25.7972C9.77416 24.6971 10.6697 23.8016 11.7698 23.8016C12.8699 23.8016 13.7654 24.6971 13.7654 25.7972Z"
                        fill="black"
                      />
                      <path
                        d="M8.33844 21.5265C9.08965 21.5265 9.70006 20.9154 9.70006 20.1648C9.70006 19.8014 9.55856 19.4594 9.30121 19.2021C9.04387 18.9447 8.70191 18.8032 8.33844 18.8032H3.19023C2.43902 18.8032 1.82861 19.4143 1.82861 20.1648C1.82861 20.9154 2.43971 21.5265 3.19023 21.5265H8.33844Z"
                        fill="black"
                      />
                      <path
                        d="M12.274 15.763C12.274 15.0118 11.6629 14.4007 10.9124 14.4007H1.36162C0.610405 14.4007 0 15.0118 0 15.763C0 16.5142 0.611098 17.1246 1.36162 17.1246H10.9117C11.6629 17.1246 12.2733 16.5135 12.2733 15.763H12.274Z"
                        fill="black"
                      />
                      <path
                        d="M3.19023 12.7228H12.7403C13.4915 12.7228 14.1019 12.1117 14.1019 11.3612C14.1019 10.9977 13.9604 10.655 13.7031 10.3984C13.4457 10.1417 13.1038 9.99954 12.7403 9.99954H3.19023C2.43902 9.99954 1.82861 10.6106 1.82861 11.3612C1.82861 12.1117 2.43971 12.7228 3.19023 12.7228Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1>ກຳລັງຈັດສົ່ງ</h1>
                    <h1>1,348</h1>
                  </div>
                </div>
                <div className="flex gap-2  bg-white w-[17.5rem] font h-[5rem] items-center shadow-lg rounded-xl">
                  <div className=" ml-3 bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="32"
                      viewBox="0 0 31 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_316_389)">
                        <path
                          d="M30.612 7.91526V7.84721C30.5783 7.77983 30.5783 7.71244 30.5446 7.64439V7.6107C30.5102 7.54331 30.4428 7.47526 30.4092 7.44157L30.3755 7.40788C30.3411 7.37418 30.2737 7.33983 30.24 7.30614L30.2063 7.27244H30.172L30.1383 7.23875L15.7625 0.101728C15.4923 -0.0337058 15.154 -0.0337058 14.8495 0.101728L10.0122 2.5032L6.39313 4.29555L0.541074 7.20506L0.507381 7.23875H0.473687L0.439994 7.27244C0.40564 7.30614 0.338254 7.33983 0.304561 7.37419L0.270867 7.40788C0.20282 7.47526 0.169127 7.54331 0.10174 7.6107V7.64439C0.0673865 7.71244 0.0336933 7.77983 0.0336933 7.84721V7.91526C0.0336933 7.98265 0 8.01634 0 8.08439V23.8806C0 24.2525 0.20282 24.6251 0.574767 24.7943L14.8158 31.8976C15.0186 31.9987 15.2551 32.0324 15.4923 31.965L15.5597 31.9313C15.6271 31.9313 15.6614 31.8976 15.7288 31.8632L30.0709 24.7599C30.4092 24.5908 30.6457 24.2525 30.6457 23.8469V8.08439C30.612 8.01634 30.612 7.98265 30.612 7.91526ZM27.9099 22.8348L15.2445 29.1077L2.73576 22.8685V9.11368L7.72963 6.63095L11.1426 4.94034L15.3066 2.8725L27.9092 9.12954V22.8341L27.9099 22.8348Z"
                          fill="black"
                        />
                        <path
                          d="M15.3099 6.32443C16.3339 6.32443 17.2007 6.90184 17.2007 7.92585C17.2007 11.0501 16.8334 15.5405 16.8334 18.6647C16.8334 19.4787 15.9409 19.8202 15.3106 19.8202C14.4702 19.8202 13.7614 19.4787 13.7614 18.6647C13.7614 15.5405 13.394 11.0501 13.394 7.92585C13.394 6.90184 14.2344 6.32443 15.3106 6.32443H15.3099Z"
                          fill="black"
                        />
                        <path
                          d="M15.3356 25.6756C14.1801 25.6756 13.314 24.7302 13.314 23.654C13.314 22.5778 14.1807 21.6324 15.3356 21.6324C16.4118 21.6324 17.3307 22.5514 17.3307 23.654C17.3307 24.7566 16.4118 25.6756 15.3356 25.6756Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_316_389">
                          <rect width="30.6457" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h1>ລະງັບການສົ່ງ</h1>
                    <h1>200</h1>
                  </div>
                </div>
                <div className="flex gap-2  bg-white w-[17.5rem] font h-[5rem] items-center shadow-lg rounded-xl">
                  <div className=" ml-3 bg-gray-300 w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                    >
                      <path
                        d="M26.9169 2.00003H14.1049C13.0258 1.99674 11.9603 2.23885 10.991 2.70762C10.0216 3.1764 9.17444 3.85928 8.5149 4.70343L0.298474 15.1404C0.105028 15.3862 0 15.6886 0 16C0 16.3114 0.105028 16.6138 0.298474 16.8596L8.5149 27.2966C9.17444 28.1407 10.0216 28.8236 10.991 29.2924C11.9603 29.7612 13.0258 30.0033 14.1049 30H26.9169C28.7947 29.9977 30.5951 29.2595 31.9229 27.9473C33.2508 26.635 33.9978 24.8558 34 23V9.00002C33.9978 7.14419 33.2508 5.36501 31.9229 4.05274C30.5951 2.74047 28.7947 2.00226 26.9169 2.00003ZM31.1667 23C31.1667 24.1139 30.719 25.1822 29.922 25.9698C29.125 26.7575 28.044 27.2 26.9169 27.2H14.1049C13.4574 27.2022 12.818 27.0571 12.2363 26.776C11.6546 26.4949 11.1462 26.0852 10.7503 25.5788L3.21247 16L10.7503 6.42122C11.1462 5.91477 11.6546 5.50512 12.2363 5.22399C12.818 4.94287 13.4574 4.7978 14.1049 4.80003H26.9169C28.044 4.80003 29.125 5.24252 29.922 6.03018C30.719 6.81783 31.1667 7.88611 31.1667 9.00002V23ZM24.3769 13.4898L21.8369 16L24.3769 18.5102C24.5122 18.6393 24.6201 18.7938 24.6943 18.9646C24.7686 19.1354 24.8077 19.3191 24.8093 19.505C24.8109 19.6909 24.7751 19.8753 24.7039 20.0473C24.6326 20.2194 24.5274 20.3757 24.3944 20.5071C24.2614 20.6386 24.1032 20.7425 23.9291 20.8129C23.755 20.8833 23.5685 20.9188 23.3804 20.9171C23.1923 20.9155 23.0064 20.8769 22.8336 20.8035C22.6608 20.7302 22.5044 20.6235 22.3738 20.4898L19.8337 17.9796L17.2937 20.4898C17.0266 20.7448 16.6687 20.8859 16.2973 20.8827C15.9258 20.8795 15.5705 20.7323 15.3079 20.4727C15.0452 20.2132 14.8962 19.862 14.893 19.495C14.8898 19.1279 15.0326 18.7742 15.2906 18.5102L17.8306 16L15.2906 13.4898C15.0326 13.2258 14.8898 12.8721 14.893 12.505C14.8962 12.138 15.0452 11.7868 15.3079 11.5273C15.5705 11.2677 15.9258 11.1205 16.2973 11.1173C16.6687 11.1141 17.0266 11.2552 17.2937 11.5102L19.8337 14.0204L22.3738 11.5102C22.6409 11.2552 22.9988 11.1141 23.3702 11.1173C23.7416 11.1205 24.097 11.2677 24.3596 11.5273C24.6223 11.7868 24.7712 12.138 24.7745 12.505C24.7777 12.8721 24.6349 13.2258 24.3769 13.4898Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1>ຍົກເລີກແລ້ວ</h1>
                    <h1>800</h1>
                  </div>
                </div>
              </div>
                {/* =============================== Area chart ============================= */}
              <div className=" bg-white w-[54.5rem] rounded-xl h-[20rem] shadow-lg ">
                <AreaChart />
                hi
              </div>
            </div>
            <div className="   w-[23rem] rounded-xl bg-white h-[26rem] flex justify-between  items-center border flex-col">
              <div className=" w-[21rem] h-[21.8rem] overflow-auto ">
                <div className=" w-full mt-3 gap-2 flex flex-col ">
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border w-full h-[4rem] flex justify-center items-center overflow-hidden rounded-b-xl ">
                <NavLink to="/order" className=" bg-blue-dark w-[20rem] h-[3rem] rounded-xl flex items-center gap-2 justify-center text-white   ">
                  <BsList />
                  <h1>ອໍເດີ້ທັງໝົດ</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full  mt-5 ">
          <div className="flex gap-3 justify-between ">
            <div className="flex flex-col gap-4">
              
              <div className=" bg-white w-[54.5rem] rounded-xl h-[26rem] shadow-lg ">
                {/* =============================== Area chart ============================= */}
                <AreaChart />
              </div>
            </div>
            <div className="   w-[23rem] rounded-xl bg-white h-[26rem] flex justify-between  items-center border flex-col">
              <div className=" w-[21rem] h-[21.8rem] overflow-auto ">
                <div className=" w-full mt-3 gap-2 flex flex-col ">
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-3 ">
                      <img src={rectangle} alt="" className=" w-12 h-12" />
                      <div>
                        <h1 className=" font-medium ">
                          {" "}
                          TAEKO Cleansing Froam...
                        </h1>
                        <h1 className=" text-sm text-gray-400"> skin care</h1>
                      </div>
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex  flex-col">
                        <h1 className=" font-medium ">1,5M</h1>
                        <h1 className=" text-gray-400 self-end flex">x15</h1>
                      </div>
                      <div className="w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border w-full h-[4rem] flex justify-center items-center overflow-hidden rounded-b-xl ">
                <NavLink to="/salehistory" className=" bg-btn-green w-[20rem] h-[3rem] rounded-xl flex items-center gap-2 justify-center text-white   ">
                <RiHistoryFill />
                  <h1>ປະຫວັດການຂາຍ</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySale;
