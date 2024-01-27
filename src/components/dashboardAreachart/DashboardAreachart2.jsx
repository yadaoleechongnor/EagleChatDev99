import React from 'react';
import linechartgreen from "../../assets/linechartgreen.jpeg";

function DashboardAreachart2() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="px-4 my-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path opacity="0.2" d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z" fill="#1AF765" fillOpacity="0.6" />
            </svg>
          </div>
          <h1 className="text-xl font-medium">
            ຍອດຂາຍ
          </h1>
        </div>
        <div className="flex">
          <p>+</p>
          <p>6.75</p>
          <p>%</p>
          <div className="px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z" fill="#44A56B" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={linechartgreen} alt="" className="w-[40rem] h-[8rem]" />
      </div>
      <div className="my-2 flex w-full items-center justify-center font-bold text-green-600 text-xl">
        <h1>
          2,000,000
        </h1>
        <h1>
          ກີບ
        </h1>
      </div>
    </div>
  );
}

export default DashboardAreachart2;
