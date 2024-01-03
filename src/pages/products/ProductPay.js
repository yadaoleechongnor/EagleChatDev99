import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const AutoWrapInput = ({ value, onChange }) => {
  return (
    <div className=" h-[86%] mx-auto w-[96%] rounded-lg  ">
      <textarea
        className=" w-full h-full border rounded-lg resize-none"
        placeholder="ຂໍ້ມູນເພີ່ມເຕີມ"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

function ProductPay() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [inputText, setInputText] = useState('');

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="mt-24 w-full">
      <div className="w-full border my-6 rounded-xl shadow-lg">
        <div className="w-full h-[80px] flex shadow-lg rounded-t-xl border items-center justify-between">
          <div className="w-full h-full flex items-center gap-5 ml-3">
            <IoIosArrowBack className="h-12 w-12" />
            <h1 className="text-lg">ກັບໄປໜ້າກ່ອນ</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-4"
          >
            {/* ... (your SVG code) */}
          </svg>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-center items-center text-3xl font-medium text-blue-dark my-6">
            <h1>ວິທີຮັບສິນຄ້າ</h1>
          </div>
         <div className='  flex flex-col w-full justify-center items-center  '>
        <div className='w-full flex justify-center gap-12'>
        <div className="w-[40%] bg-gradient-to-r rounded-xl from-blue-dark to-blue-light flex justify-center">
            <div className="w-[80%] flex flex-col justify-center">
              <div className="w-full sm:text-3xl sm:font-medium flex justify-center">
                <h1 className="my-4">ຈັດສົ່ງໃຫ້ຂ້ອຍ</h1>
              </div>
              <div className="w-full">
                <label htmlFor="company">ອານູສິດ ຂົນສົ່ງດ່ວນ</label>
                <select
                  id="company"
                  className="select w-full h-[50px] rounded-lg shadow-lg"
                  value={selectedCompany}
                  onChange={handleCompanyChange}
                >
                  <option disabled value="">
                    ອານູສິດ ຂົນສົ່ງດ່ວນ
                  </option>
                  <option>ອານູສິດ ຂົນສົ່ງດ່ວນ</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="branch">ສາຂາ</label>
                <input
                  type="text"
                  id="branch"
                  className="w-full h-[50px] rounded-lg"
                  placeholder="ປ້ອນຂໍ້ມູນສາຂາ"
                  value={selectedBranch}
                  onChange={handleBranchChange}
                />
              </div>
              <div className="my-6 w-full h-[8rem] bg-white rounded-lg flex justify-center items-center">
                <AutoWrapInput value={inputText} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="w-[40%] bg-productpay-menu-color rounded-xl flex justify-center">
            <div className="w-[80%] flex flex-col justify-center">
              <div className="w-full sm:text-3xl sm:font-medium flex justify-center">
                <h1 className="my-4">ໄປຮັບເອງທີ່ສາຂາ</h1>
              </div>
              <div className="w-full">
                <label htmlFor="company">ເລືອກສາຂາໄປຮັບ</label>
                <select
                  id="company"
                  className="select w-full h-[50px] rounded-lg shadow-lg"
                  value={selectedCompany}
                  onChange={handleCompanyChange}
                >
                  <option disabled value="">
                  ສຳນັກໃຫ່ຍຫົງຟ້າ
                  </option>
                  <option>ສຳນັກໃຫ່ຍຫົງຟ້າ</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="branch">ເບີໂທຕິດຕໍ່</label>
                <div className=' flex gap-2 items-center bg-white rounded-lg'>
                <label htmlFor="branch" className=' w-12 justify-center flex text-gray-400 '> 20 </label>
                <input
                  type="text"
                  id="branch"
                  className="w-full h-[50px] rounded-lg"
                  placeholder="7xxxxxxx"
                />
                </div>
              </div>
              <div className="my-6 w-full h-[8rem] bg-white rounded-lg flex flex-col justify-center ">
                 <div className=' ml-2'>
                 <li> ສຳນັກງານໃຫ່ຍຫົງຟ້າ ຖະໜົນກຳແພງເມຶອງ ບ້ານໂພນສີນວນເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງວຽງຈັນ</li>
                 <li> ເປິດບໍລິການແຕ 8:00 ຫາ 17:00</li>
                 </div>
              </div>
            </div>
          </div>
         </div>
          <NavLink to="/paychoice" className=" w-[84%] bg-blue-dark h-[4rem] rounded-lg flex justify-center items-center text-xl text-white my-4"> ຢືນຢັນ ແລະ ຊຳລະ </NavLink>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPay;
