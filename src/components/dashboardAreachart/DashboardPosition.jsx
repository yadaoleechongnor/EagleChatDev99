import React from 'react';
import frame from "../../assets/Frame.svg";
import frame1 from "../../assets/Frame (1).svg";
import frame2 from "../../assets/Frame (2).svg";
import frame3 from "../../assets/Frame (3).svg";

function DashboardPosition() {
  return (
    <div className='w-full items-center flex justify-center'>
      <div className="flex w-[90%] h-[90%] justify-center items-end">
        <div className="flex justify-center flex-col items-center font-bold">
          <img src={frame} alt="" />
          <h1 className="text-blue-light">ລະດັບ S</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="163" height="40" viewBox="0 0 163 40" fill="none">
            <path d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z" fill="#7CCCF1" stroke="#7CCCF1" />
            <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
            <line x1="140.646" y1="33.6464" x2="153.646" y2="20.6464" stroke="white" />
            <line x1="139.354" y1="5.64645" x2="154.354" y2="20.6464" stroke="white" />
          </svg>
          <div className="absolute text-white flex gap-2 items-center mt-16">
            <h1>0</h1>
            <h1>PV</h1>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center font-bold">
          <img src={frame1} alt="" />
          <h1 className="text-blue-light">ລະດັບ M</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="163" height="40" viewBox="0 0 163 40" fill="none">
            <path d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z" fill="#49BBEF" stroke="#49BBEF" />
            <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
            <line x1="140.646" y1="33.6464" x2="153.646" y2="20.6464" stroke="white" />
            <line x1="139.354" y1="5.64645" x2="154.354" y2="20.6464" stroke="white" />
          </svg>
          <div className="absolute text-white flex gap-2 items-center mt-[75px]">
            <h1>100</h1>
            <h1>PV</h1>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center font-bold">
          <img src={frame2} alt="" />
          <h1 className="text-blue-light">ລະດັບ L</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="163" height="40" viewBox="0 0 163 40" fill="none">
            <path d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z" fill="#16AEF4" stroke="#16AEF4" />
            <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
            <line x1="140.646" y1="33.6464" x2="153.646" y2="20.6464" stroke="white" />
            <line x1="139.354" y1="5.64645" x2="154.354" y2="20.6464" stroke="white" />
          </svg>
          <div className="absolute text-white flex gap-2 items-center mt-[85px]">
            <h1>3000</h1>
            <h1>PV</h1>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center font-bold">
          <img src={frame3} alt="" />
          <h1 className="text-blue-light">ລະດັບ L</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="163" height="40" viewBox="0 0 163 40" fill="none">
            <path d="M13.3347 20.5327L1 1H143.498L162 20.5327L143.498 39H1L13.3347 20.5327Z" fill="#00A3FF" stroke="#00A3FF" />
            <line x1="35" y1="33.5" x2="141" y2="33.5" stroke="white" />
            <line x1="140.646" y1="33.6464" x2="153.646" y2="20.6464" stroke="white" />
            <line x1="139.354" y1="5.64645" x2="154.354" y2="20.6464" stroke="white" />
          </svg>
          <div className="absolute text-white flex gap-2 items-center mt-[90px]">
            <h1>5000</h1>
            <h1>PV</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPosition;
