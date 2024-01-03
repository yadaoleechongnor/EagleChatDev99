import React, { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import Rectangle from '../../assets/Rectangle 240 (1).png';
import ReactPaginate from 'react-paginate';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Orders() {
  useEffect(() => {
    const handleScroll = () => {
      const tableHeader = document.getElementById('table-header');
      const tableContainer = document.getElementById('table-container');

      if (tableHeader && tableContainer) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const isSticky = scrollTop > tableContainer.offsetTop;

        if (isSticky) {
          tableHeader.classList.add('sticky', 'top-0', 'z-50');
        } else {
          tableHeader.classList.remove('sticky', 'top-0', 'z-50');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePageClick = (selectedPage) => {
    console.log(`Selected page: ${selectedPage}`);
  };

  return (
    <div className="w-full font-Noto mt-24 flex justify-center">
      <div className="w-full">
        <div className="fixed flex ml-[60px] items-center justify-between font-medium font-Noto w-[270px] h-[55px] rounded-lg mt-[-5rem]">
          <div className="flex items-center justify-center text-black font-Noto w-[100px] h-[55px] font-bold ">
            <div className="flex items-center gap-2 ">
              <h1> ລະບົບຊື້ຂາຍ</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                className="flex items-end"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0V8H0L8 0Z"
                  fill="#1F263E"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center it">
          <div className="w-full justify-center flex flex-col items-center  ">
            <div className="flex justify-between items-center w-full my-4">
              <span className="text-3xl font-bold ">ລາຍລະອຽດໂດຍລວມ</span>
              <button className="w-40 h-12 bg-gradient-to-t from-blue-dark to-blue-light font-bold text-white rounded-lg ">
                {" "}
                Export to Excel{" "}
              </button>
            </div>

            <div className='flex w-full gap-7 my-8 justify-center'>
              <div className='w-[18rem] shadow-lg bg-white border rounded-lg '>
                <div className='mt-3'><span className='mt-3 px-3'> ກຳລັງຈັດສົ່ງ </span></div>
                <div className='flex items-center gap-4 justify-center w-full my-8 text-3xl font-bold text-blue-light '><h1>1.234</h1><h1>ອໍເດີ</h1></div>
              </div>
              <div className='w-[18rem] shadow-lg bg-white border rounded-lg '>
                <div className='mt-3'><span className='mt-3 px-3'> ຈັດສົ່ງສຳເລັດ </span></div>
                <div className='flex items-center gap-4 justify-center w-full my-8 text-3xl font-bold text-green-500'><h1>3.210</h1><h1>ອໍເດີ</h1></div>
              </div>
              <div className='w-[18rem] shadow-lg bg-white border rounded-lg '>
                <div className='mt-3'><span className='mt-3 px-3'> ຍົກເລີກ</span></div>
                <div className='flex items-center gap-4 justify-center w-full my-8 text-3xl font-bold text-orange-700 '><h1>320</h1><h1>ອໍເດີ</h1></div>
              </div>
              <div className='w-[18rem] shadow-lg bg-white border rounded-lg '>
                <div className='mt-3'><span className='mt-3 px-3'>ມູນຄ່າທັງໝົດ </span></div>
                <div className='flex items-center gap-4 justify-center w-full my-8 text-3xl font-bold  '><h1>300</h1><h1>ລ້ານ</h1></div>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full justify-center ">
              <input type="date" name="" id="" className="border h-10 w-60 rounded-lg " />
              <input type="date" name="" id="" className="border h-10 w-60 rounded-lg" />
              <div className="flex items-center border rounded-lg  ">
                <IoSearch className="px-2 h-10 w-10 text-blue-dark" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none"
                  placeholder=" ລະຫັດການສັ່ງຊື້"
                />
              </div>
              <div className="flex items-center border rounded-lg  ">
                <IoSearch className="px-2 h-10 w-10 text-blue-dark" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none"
                  placeholder=" ຄົ້ນຫາລາຍການສີນຄ້າ"
                />
              </div>
              <button className="h-10 w-40 text-white font-medium bg-gradient-to-t from-blue-dark to-blue-light rounded-lg"> ຄົ້ນຫາ </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex justify-between w-full">
            <div className="w-full h-full mt-4 my-12">
              <div id="table-container" className="w-full relative overflow-hidden ">
                <div id="table-header" className="sticky top-0 z-50">
                  <table className="table-auto w-full divide-y flex flex-col">
                    <thead className="w-full rounded-t-xl bg-gradient-to-t from-blue-dark to-blue-light text-white">
                      <tr className="flex my-4 w-full">
                        <th className="font-normal flex items-center justify-center w-[12rem]">
                          ເລກທີ່ການສັ່ງຊື້
                        </th>
                        <th className="w-24 flex items-center justify-center font-normal">
                          ຮູບສີນຄ້າ
                        </th>
                        <th className="font-normal w-[19.3rem] flex items-center justify-center">
                          ຊື່ສີນຄ້າ
                        </th>
                        <th className="font-normal w-[5rem] flex items-center justify-center">
                          ຈຳນວນ
                        </th>
                        <th className="font-normal w-[9.5rem] flex items-center justify-center">
                          ລາຄາລວມ
                        </th>
                        <th className="font-normal w-[12rem] flex items-center justify-center">
                          ຖ້ານະ
                        </th>
                        <th className="flex items-center justify-center font-normal w-[6rem]">
                          ຍົກເລີກ
                        </th>
                        <th className="flex items-center justify-center font-normal w-[8rem]">
                          ຮັບແລ້ວ
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className=" w-full h-[28rem] flex justify-center  overflow-hidden shadow-lg bg-white">
                
                <div className=" overflow-auto w-full flex justify-center ">
                  <table className=" table-auto w-full divide-y flex flex-col ">
                    
                    <tbody className="">
                      <tr className=" w-full  flex items-center border-b ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg  my-2 "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center text-orange-400 ">
                          <h1>ລໍຖ້າກວດສອບ ແລະ ຈັດສົ່ງ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline text-red-500'>ຍົກເລີກອໍເດີນີ້</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline text-gray-400'>ຢືນຢັນການຮັບ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center ">
                          <h1>ກຳລັງຈັດສົ່ງ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline text-gray-500'>ຍົກເລີກອໍເດີນີ້</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline text-green-400'>ຢືນຢັນການຮັບ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b bg-green-200 ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center ">
                          <h1>ກຳລັງຈັດສົ່ງ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline '>ຍົກເລີກອໍເດີນີ້</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline'>ຮັບສຳເລັດ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b bg-green-200 ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center ">
                          <h1>ກຳລັງຈັດສົ່ງ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline'>ຍົກເລີກອໍເດີນີ້</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline '>ຮັບສຳເລັດ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b bg-[#FFDDD9] ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center ">
                          <h1>ຍົກເລີກ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline '>ຍົກເລີກ</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline '>ຍົກເລີກ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center text-orange-400 ">
                          <h1>ລໍຖ້າກວດສອບ ແລະ ຈັດສົ່ງ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline text-red-500'>ຍົກເລີກອໍເດີນີ້</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline text-gray-400'>ຢືນຢັນການຮັບ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b bg-[#FFDDD9] ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center ">
                          <h1>ຍົກເລີກ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline '>ຍົກເລີກ</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline '>ຍົກເລີກ</h1>
                        </td>
                      </tr>
                      <tr className=" w-full flex items-center border-b ">
                        <td className="  w-[195px]  ">
                          <h1 className=" mx-8 bg-gray-100 rounded-full flex items-center justify-center ">
                            #0123456789
                          </h1>
                        </td>
                        <td className=" w-[90px]  flex items-center justify-center ">
                          {" "}
                          <img
                            src={Rectangle}
                            alt=""
                            className=" w-16 h-16 rounded-lg my-2  "
                          />
                        </td>


                        <td className=" w-[19.3rem] flex items-center justify-center ">
                          <p>TAEKO Cleansing Foam & Serum liquid Foundation </p>
                        </td>
                        <td className=" w-[5rem] flex items-center justify-center text-xl font-bold">
                          5
                        </td>
                        <td className=" w-[9.5rem] flex items-center justify-center ">
                          500.000 <h1>ກີບ</h1>
                        </td>
                        <td className=" w-[12rem] flex items-center justify-center text-orange-400 ">
                          <h1>ລໍຖ້າກວດສອບ ແລະ ຈັດສົ່ງ</h1>
                        </td>
                        <td className=" w-[6rem] flex items-center justify-center ">
                          <h1 className=' underline text-red-500'>ຍົກເລີກອໍເດີນີ້</h1>
                        </td>
                        <td className=" w-[8rem] flex items-center justify-center ">
                          <h1 className=' underline text-gray-400'>ຢືນຢັນການຮັບ</h1>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              </div>
              <div className="bg-white rounded-b-xl w-full h-[6rem] shadow-lg flex items-center mt-1 ">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-3 mr-5 items-center justify-center w-full ">
                    <div className="w-[300px] ">
                      <ReactPaginate
                        previousLabel={<BiChevronLeft size={20} />}
                        nextLabel={
                          <BiChevronRight className="hover:bg-none" size={20} />
                        }
                        breakLabel={"..."}
                        containerClassName="Pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link prev"
                        nextClassName="page-item"
                        nextLinkClassName="page-link next"
                        marginPagesDisplayed={0}
                        pageRangeDisplayed={8}
                        activeLinkClassName="active"
                        onPageChange={({ selected }) =>
                          handlePageClick(selected + 1)
                        }
                        pageCount={8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
