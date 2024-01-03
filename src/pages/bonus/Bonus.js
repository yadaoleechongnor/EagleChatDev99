import React from "react";
import Table from "./BonuscomponentTable";

function Bonus() {
  return (
    <div className=" mt-[8rem] w-full ">
      <div>
        <div className=" flex justify-between items-center bg-gradient-to-r from-blue-dark to-blue-light rounded-t-lg">
          <div className=" flex gap-6 items-center font-bold  my-5 ml-8 text-lg ">
            <h1>ລະຫັດສະມາຊິກ</h1>
            <label className=" flex justify-center items-center w-24 h-10 border rounded-lg ">
              20112
            </label>
            <select className="select w-[150px] flex items-center justify-center h-[40px] rounded-lg outline-none shadow-lg max-w-xs border-2 bg-gradient-to-r from-blue-dark to-blue-light ">
              <option
                disabled
                selected
                className=" flex items-center justify-center"
              ></option>
              <option>ມັງກອນ</option>
              <option>ກຸ່ມພາ</option>
              <option>ມີນາ</option>
              <option>ເມສາ</option>
              <option>ພືດສະພາ</option>
              <option>ມີຖຸນາ</option>
              <option>ກໍລະກົດ</option>
              <option>ສີ່ງຫາ</option>
              <option>ກັນຍາ</option>
              <option>ຕຸລາ</option>
              <option>ພະຈິກ</option>
              <option>ທັນວາ</option>
            </select>
            <select className="select w-[100px] flex items-center justify-center h-[40px] rounded-lg shadow-lg outline-none max-w-xs border-2 bg-gradient-to-r ">
              <option
                disabled
                selected
                className=" flex items-center justify-center "
              ></option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
            </select>
            <button className=" flex justify-center items-center w-24 h-10 rounded-lg bg-gradient-to-t from-blue-dark to-blue-light">
              ຄົ້ນຫາ
            </button>
          </div>
          <div className=" mr-5">
            <button className=" w-40 h-10 border rounded-lg bg-gradient-to-t from-gray-500 to-gray-300 ">
              Expert to Excel
            </button>
          </div>
        </div>
        <div>
          <div
            id="table-container"
            className="w-full relative overflow-hidden "
          >
            <div id="table-header" className="sticky top-0 z-50">
              <table className="table-auto w-full divide-y flex flex-col">
                <thead className="w-full bg-[#BEECFF80] text-blue-dark font-bold">
                  <tr className="flex my-4 w-full">
                    <th className=" flex items-center justify-center w-[12rem]">
                      ເລກວັນທີ່
                    </th>
                    <th className="w-24 flex items-center justify-center">
                      ໂບນັດ
                    </th>
                    <th className=" w-[20rem] flex items-center justify-center">
                      ຄ່າແນະນຳ
                    </th>
                    <th className=" w-[10rem] flex items-center justify-center">
                      ບໍລິຫານທີມ
                    </th>
                    <th className=" w-[10rem] flex items-center justify-center">
                      ໂບນັດລວມ
                    </th>
                    <th className=" w-[12rem] flex items-center justify-center">
                      ຂື້ນຕຳແໜ່ງ
                    </th>
                    <th className=" flex items-center justify-center w-[8rem]">
                      Cash Back
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className=" w-full h-[25rem] flex justify-center  overflow-hidden shadow-lg bg-white">
              <div className=" overflow-auto w-full flex justify-center ">
                <table className=" table-auto w-full divide-y flex flex-col ">
                  <tbody className=" bg-white">
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          1
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          2
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          3
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          4
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          5
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          6
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          7
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          9
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          10
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          11
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          12
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          13
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                    <tr className=" w-full  flex items-center border-b ">
                      <td className="  w-[195px] my-4  ">
                        <h1 className=" mx-8 flex items-center justify-center ">
                          14
                        </h1>
                      </td>
                      <td className=" w-[90px]  flex items-center justify-center ">
                        0.0
                      </td>

                      <td className=" w-[20rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[10rem] flex items-center justify-center text-xl  text-orange-600">
                        55
                      </td>
                      <td className=" w-[10.3rem] flex items-center justify-center ">
                        0.00
                      </td>
                      <td className=" w-[12rem] flex items-center justify-center  ">
                        0.00
                      </td>
                      <td className=" w-[8rem] flex items-center justify-center ">
                        0.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonus;
