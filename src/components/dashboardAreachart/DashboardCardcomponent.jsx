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
import Swal from 'sweetalert2';
import verify from '../../assets/verify.png';
import { useNavigate } from 'react-router-dom';


function DashboardCardcomponent() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    Swal.fire({
      html: '<div class="flex flex-col items-center">' +
            '<img src="' + verify + '" alt="verify" class="w-16 h-16 mb-4" />' +
            '<h2 class="text-lg font-semibold mb-2">ທ່ານຍັງບໍ່ທັນຢືນຢັນຕົວຕົນ</h2>' +
            '<p>ທ່ານຕ້ອງຢືນຢັນຕົວຕົນກ່ອນ ຈຶ່ງຈະສາມາດນຳໃຊ້ຟັງຊັ້ນຕ່າງໆຂອງພວກເຮົາໄດ້</p>' +
            '</div>',
      showCancelButton: true,
      confirmButtonColor: "#00AEEF",
      confirmButtonText: "ຢືນຢັນ",
      cancelButtonText: "ພາຍຫຼັງ",
      cancelButtonColor: "#ffffff",
      cancelButtonText: '<span style="color: blue;">ພາຍຫຼັງ</span>',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/verifyswall");
      }
    });
  };
  

  return (
    <div className="w-full flex justify-center">
      <div className="mt-24 w-full flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-around w-[90%]">
          <DashboardCard title="ໂອນເງິນ Ewallet" image={ewallet} bgColor="bg-green-300" onClick={handleCardClick} />
          <DashboardCard title="ໂອນໂບນັດ" image={bonus} bgColor="bg-bonus-color" onClick={handleCardClick} />
          <DashboardCard title="ປະຫັວດການຂາຍ" image={salehistory} bgColor="bg-hist-color" onClick={handleCardClick} />
          <DashboardCard title="ສັ່ງສີນຄ້າ" image={order} bgColor="bg-order-color" onClick={handleCardClick} />
          <DashboardCard title="ເພີ່ມສະມາຊິກ" image={addmember} bgColor="bg-addmember-color" onClick={handleCardClick} />
        </div>
        <div className="flex justify-around w-[90%]">
          <DashboardCard title="ສີນຄ້າ" image={product} bgColor="bg-product-color" onClick={handleCardClick} />
          <DashboardCard title="ທິບທ່ອງທຽ່ວ" image={traval} bgColor="bg-sky-200" onClick={handleCardClick} />
          <DashboardCard title="ຍອດຖ້າການປິດ" image={waitforclose} bgColor="bg-waitforclose-color" onClick={handleCardClick} />
          <DashboardCard title="ປະຫັວດທຸລະກຳ" image={transaction} bgColor="bg-transaction-his-color" onClick={handleCardClick} />
          <DashboardCard title="ສາຍງານ" image={team} bgColor="bg-team-color" onClick={handleCardClick} />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, image, bgColor, onClick }) {
  return (
    <div onClick={onClick} className={`font-medium ${bgColor} flex flex-col w-[11rem] rounded-3xl h-[8rem]`}>
      <h1 className="flex self-end mr-3 mt-2">{title}</h1>
      <img src={image} alt="" className="w-24 ml-2" />
    </div>
  );
}

export default DashboardCardcomponent;
