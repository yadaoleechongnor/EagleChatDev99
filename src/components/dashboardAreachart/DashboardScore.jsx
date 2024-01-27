import React from 'react';
import { FaCircle } from 'react-icons/fa';
import circlechart from '../../assets/circlechart.jpeg';

function DashboardScore() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center my-4 text-xl font-bold">
        <span>ບອດຄະແນນສະມາຊິກ</span>
      </div>
      <div>
        <img src={circlechart} alt="" />
      </div>
      <div className="w-full flex items-center flex-col gap-2">
        <ScoreItem title="ຄະແນນລວມທັງໝົດ" value="100000" color="" />
        <ScoreItem title="ຄະແນນຂອງທ່ານ" value="20000" color="text-orange-300" />
        <ScoreItem title="ຄະແນນລວມສະມາຊິກ" value="750000" color="text-green-600" />
        <ScoreItem title="ຄະແນນໂບນັດ" value="5000" color="text-purple-500" />
      </div>
    </div>
  );
}

function ScoreItem({ title, value, color }) {
  return (
    <div className="w-[85%]">
      <div className="flex gap-4 items-center w-full justify-between">
        <div className={`flex items-center gap-3 ${color && color}`}>
          <FaCircle />
          <h1 className="font-medium">{title}</h1>
        </div>
        <h1 className={`text-2xl font-bold ${color && color}`}>{value}</h1>
      </div>
    </div>
  );
}

export default DashboardScore;
