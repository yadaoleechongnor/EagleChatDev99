import React from "react";
import DashboardAreachart1 from "../components/dashboardAreachart/DashboardAreachart1.jsx";
import DashboardAreachart2 from "../components/dashboardAreachart/DashboardAreachart2.jsx";
import DashbordAreachart3 from "../components/dashboardAreachart/DashbordAreachart3.jsx";
import DashboardQR from "../components/dashboardAreachart/DashboardQR.jsx";
import DashboardCardcomponent from "../components/dashboardAreachart/DashboardCardcomponent.jsx";
import DashboardInorder from "../components/dashboardAreachart/DashboardInorder.jsx";
import DashboardPosition from "../components/dashboardAreachart/DashboardPosition.jsx";
import DashboardScore from "../components/dashboardAreachart/DashboardScore.jsx";

function Dashboard() {
  return (
    <div className="w-full my-4">
      <div className="fixed ml-16 flex gap-4 justify-center items-center h-12">
        <div className="flex items-center">
          <p className="">ຍິນດີຕ້ອນຮັບ</p>{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0V8H0L8 0Z" fill="#1F263E" />
          </svg>
        </div>
        <div className="flex items-center">
          <h1 className="text-xs font-medium text-blue-dark">Dashboard</h1>{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0V8H0L8 0Z" fill="#01A5E8" />
          </svg>
        </div>
      </div>
      <div className="w-full">
        <DashboardCardcomponent />
      </div>

      {/* ເລືອນຂັ້ນ ========================================================================= */}
      <div className="w-full mt-8 flex justify-center items-center">
        <div className="w-[90%] flex justify-between items-center">
          <div className="w-[31%] border h-[10rem] rounded-lg flex items-center">
            <DashboardInorder />
          </div>
          <div className="w-[66%] border h-[10rem] rounded-lg flex justify-center items-center">
            <DashboardPosition />
          </div>
        </div>
      </div>
      {/* ======================================================== chart area ================================== */}
      <div className="mt-8 w-full flex justify-center">
        <div className="w-[90%] flex justify-between gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="w-[24rem] h-[15rem] bg-white border rounded-lg overflow-hidden">
                <DashboardAreachart1 />
              </div>
              <div className="w-[24rem] h-[15rem] bg-white border rounded-lg">
                <DashboardAreachart2 />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[24rem] h-[15rem] bg-white border rounded-lg">
                <DashbordAreachart3 />
              </div>
              <div className="w-[24rem] h-[15rem] bg-white border rounded-lg">
                <DashboardQR />
              </div>
            </div>
          </div>

          <div className="border w-[20rem] rounded-lg">
            <DashboardScore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
