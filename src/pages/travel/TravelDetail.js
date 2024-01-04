import React from 'react';
import travel3 from '../../assets/travel3.png';
import { NavLink } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import Avata from '../../assets/Avatar.png';
import ReactPaginate from 'react-paginate';

function TravelDetail() {
  const handlePageClick = (selectedPage) => {
    console.log(`Selected page: ${selectedPage}`);
  };

  return (
    <div className='mt-24 flex justify-center w-full'>
      <div className='w-[96%] shadow-lg border my-6 bg-white rounded-xl flex justify-center '>
        <div className='w-[96%] my-6 '>
          <NavLink
            to="/travel"
            className='flex items-center justify-center w-40 gap-4 font-bold bg-[#F6F4F4] rounded-xl'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className='my-3'
            >
              <g clip-path="url(#clip0_1432_9467)">
                <path
                  d="M16.5283 -1.85948e-07L7.02127 9.52C6.36714 10.1772 5.99991 11.0667 5.99991 11.994C5.99991 12.9213 6.36714 13.8108 7.02127 14.468L16.5393 24L18.6553 21.879L9.13727 12.348C9.04354 12.2542 8.99088 12.1271 8.99088 11.9945C8.99088 11.8619 9.04354 11.7348 9.13727 11.641L18.6453 2.121L16.5283 -1.85948e-07Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1432_9467">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>ກັບໄປໜ້າກ່ອນ</span>
          </NavLink>
          <div className='w-full flex justify-center items-start text-4xl font-bold text-blue-light'>
            <span>ລາຍລະອຽດ ແລະ ຜູ້ໂຊກດີ</span>
          </div>
          <div className='flex w-full'>
            <div className='w-[40%] flex flex-col items-center '>
              <div className='text-center flex justify-center flex-col items-center'>
                <span className='text-3xl font-bold my-4'>
                  Đa Nẵng
                </span>
                <div>
                  <img src={travel3} alt="" />
                </div>
              </div>
			  <div className=' w-[73%] '>
				<div className=' flex justify-between w-full mt-4  '>
					<span className=' text-lg font-medium text-gray-500 '> ມື້ເດີນທາງ </span>
					<span className=' text-xl font-bold '> 4.7.2024</span>
				</div>
				<div className=' flex justify-between w-full mt-4  '>
					<span className=' text-lg font-medium text-gray-500 '> ລະດັບ  </span>
					<span className=' text-xl font-bold '> 5 </span>
				</div>
				<div className=' flex justify-between w-full mt-3  '>
					<span className=' text-lg font-medium text-gray-500 '> ໄລຍະເວລາ</span>
					<span className=' text-xl font-bold '> 7 ມື້ / 6 ຄືນ</span>
				</div>
			  </div>
            </div>
            <div className='w-[60%] '>
              <div className='flex items-center w-full gap-4'>
                <div className='flex items-center border rounded-lg h-10 w-full my-4'>
                  <IoSearch className='px-2 h-10 w-10 text-blue-light' />
                  <input type="search" className='outline-none w-full' />
                </div>
                <button className='flex justify-center items-center text-white w-40 h-10 bg-gradient-to-t from-blue-dark to-blue-light rounded-lg'>ຄົ້ນຫາ</button>
              </div>
              <div>
                <div id="table-container" className="w-full relative overflow-hidden">
                  <div id="table-header" className="sticky top-0 z-50">
                    <table className="table-auto w-full divide-y flex flex-col">
                      <thead className="w-full rounded-t-xl bg-gradient-to-t from-blue-dark to-blue-light text-black font-normal">
                        <tr className="flex my-4 w-full">
                          <th className="w-[12rem] flex items-center justify-center">
                            ໂປຣຟາຍ
                          </th>
                          <th className="w-[15rem] flex items-center justify-center border-l h-full ">
                            ຊື່ສະມາຊິກ
                          </th>
                          <th className="w-[15rem] flex items-center justify-center border-r">
                            ລະຫັດສະມາຊິກ
                          </th>
                          <th className="w-[12rem] flex items-center justify-center">
                            ຕຳແໜ່ງ
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="w-full h-[28rem] flex justify-center overflow-hidden bg-white">
                    <div className="overflow-auto w-full flex justify-center">
                      <table className="table-auto w-full divide-y flex flex-col">
                        <tbody>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                          <tr className="w-full flex items-center border-b">
                            <td className="w-[12rem] flex items-center justify-center my-2">
                              <div>
                                <img src={Avata} alt="" className='rounded-lg' />
                              </div>
                            </td>
                            <td className="w-[14.6rem] flex items-center justify-center  ">
                              ນາງ ສຸກດາລັດ ສຸລິຍະວົງ
                            </td>
                            <td className="w-[15.5rem] flex items-center justify-center ">
                              <div className='bg-gray-100 rounded-full'>
                                <span className='px-2'>#0123456789</span>
                              </div>
                            </td>
                            <td className="w-[10rem] flex items-center justify-center font-bold text-lg">
                              L
                            </td>
                          </tr>
                         
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className='w-full flex justify-center items-center'>
                    <ReactPaginate 
                      previousLabel={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M11.6428 7L6.7584 12L11.6428 17"
                            stroke="#A0A0A0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.481 7L13.5965 12L18.481 17"
                            stroke="#A0A0A0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      nextLabel={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M13.6455 17L18.5299 12L13.6455 7"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.80737 17L11.6918 12L6.80737 7"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
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
                      onPageChange={({ selected }) => handlePageClick(selected + 1)}
                      pageCount={8}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
			<div className=' w-full flex justify-center text-lg text-blue-light font-medium my-1'>
				<span>ເມື່ອໃກ້ຮອດທິບທ່ອງທຽ່ວ ທາງທີມງານຈະຕິດຕໍ່ຄອນເຟີມກັບສະມາຊິກຜູ້ໂຊກດີອີກຄັ້ງ</span>
			</div>
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
