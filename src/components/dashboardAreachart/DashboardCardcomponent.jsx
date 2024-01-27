import React from 'react';
import ewallet from "../../assets/ewallet.png";
import bonus from "../../assets/bonus.png";
import salehistory from "../../assets/history.png";
import order from "../../assets/order.png";
import addmember from "../../assets/addmember.png";
import product from "../../assets/product.png";
import traval from "../../assets/traval.png";
import waitforclose from "../../assets/waittoclose.png";
import team from "../../assets/team.png";
import transaction from "../../assets/transaction.png";

function DashboardCardcomponent() {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-24 w-full flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-around w-[90%]">
          <DashboardCard title="ໂອນເງິນ Ewallet" image={ewallet} bgColor="bg-green-300" />
          <DashboardCard title="ໂອນໂບນັດ" image={bonus} bgColor="bg-bonus-color" />
          <DashboardCard title="ປະຫັວດການຂາຍ" image={salehistory} bgColor="bg-hist-color" />
          <DashboardCard title="ສັ່ງສີນຄ້າ" image={order} bgColor="bg-order-color" />
          <DashboardCard title="ເພີ່ມສະມາຊິກ" image={addmember} bgColor="bg-addmember-color" />
        </div>
        <div className="flex justify-around w-[90%]">
          <DashboardCard title="ສີນຄ້າ" image={product} bgColor="bg-product-color" />
          <DashboardCard title="ທິບທ່ອງທຽ່ວ" image={traval} bgColor="bg-sky-200" />
          <DashboardCard title="ຍອດຖ້າການປິດ" image={waitforclose} bgColor="bg-waitforclose-color" />
          <DashboardCard title="ປະຫັວດທຸລະກຳ" image={transaction} bgColor="bg-transaction-his-color" />
          <DashboardCard title="ສາຍງານ" image={team} bgColor="bg-team-color" />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, image, bgColor }) {
  return (
    <div className={`font-medium ${bgColor} flex flex-col w-[11rem] rounded-3xl h-[8rem]`}>
      <h1 className="flex self-end mr-3 mt-2">{title}</h1>
      <img src={image} alt="" className="w-24 ml-2" />
    </div>
  );
}

export default DashboardCardcomponent;
