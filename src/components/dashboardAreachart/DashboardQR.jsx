import React from 'react';
import dashqr from "../../assets/dashqr.png";
import dashqrleft from "../../assets/dashqrleft.png";

function DashboardQR() {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="px-4 my-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="#E5B3C4">
            <path opacity="0.2" d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z" />
          </svg>
          <img src={dashqr} alt="" className="absolute mt-[-38px] ml-[10px]" />
        </div>
        <h1 className="text-xl font-medium">
          QR ສະໝັກເລີຍ
        </h1>
      </div>
      <div className="w-full flex items-center justify-center gap-8">
        <DashboardQRItem image={dashqrleft} text="ສາຍງານດ້ານຊ້າຍ" />
        <DashboardQRItem image={dashqrleft} text="ສາຍງານດ້ານຂວາ" />
      </div>
    </div>
  );
}

function DashboardQRItem({ image, text }) {
  return (
    <div className="flex items-center flex-col justify-center">
      <img src={image} alt="" />
      <span className="underline">{text}</span>
    </div>
  );
}

export default DashboardQR;
