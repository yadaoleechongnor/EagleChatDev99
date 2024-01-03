import React from 'react'
import moneywithdraw from '../../assets/moneywithdraw.png'
import {IoCall, IoSearch} from 'react-icons/io5'
import wallet from '../../assets/wallet.png'
import cash from '../../assets/cash.png'
import { NavLink } from 'react-router-dom'

function EwalletMoneyTransfer() {
  return (
    <div className='mt-24 w-full'>
    <div>

        <div className=' flex gap-6 w-full    '>
            <div className=' ml-12 text-center '>
                <h1 className=' my-8'>ເງິນຄົງເຫຼື່ອໃນ wallet</h1>
                <img src={moneywithdraw}
                    alt=""/>
            </div>
            <div>
                <div className=' flex items-center text-3xl font-bold text-blue-light '>
                    <h1 className=' my-6 '>7.000.000</h1>
                    <h1>ກີບ</h1>
                </div>
                <div className=' mt-8'>
                    <label>ລະຫັດສະມາຊິກຜູ້ຮັບ</label>
                    <div className='flex items-center border border-blue-dark w-[46rem] rounded-lg  '>
                        <div className=' px-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none ">
                            <path d="M9.54361 11.6817C5.99217 12.0027 3.28647 15.0036 3.33361 18.5692V18.75C3.33361 19.4403 3.89326 20 4.58361 20C5.27397 20 5.83361 19.4403 5.83361 18.75V18.5192C5.79604 16.3299 7.41166 14.463 9.58361 14.1858C11.8763 13.9585 13.9192 15.6328 14.1466 17.9255C14.16 18.061 14.1668 18.1971 14.1669 18.3333V18.75C14.1669 19.4403 14.7266 20 15.4169 20C16.1073 20 16.6669 19.4403 16.6669 18.75V18.3333C16.6629 14.6473 13.6714 11.6624 9.98541 11.6665C9.83803 11.6667 9.69068 11.6717 9.54361 11.6817Z" fill="#00AEEF"/>
                            <path d="M10 10C12.7614 10 15 7.76141 15 5C15 2.23859 12.7614 0 10 0C7.23859 0 5 2.23859 5 5C5.00273 7.76027 7.23973 9.99723 10 10ZM10 2.5C11.3807 2.5 12.5 3.6193 12.5 5C12.5 6.3807 11.3807 7.5 10 7.5C8.6193 7.5 7.5 6.3807 7.5 5C7.5 3.6193 8.6193 2.5 10 2.5Z" fill="#00AEEF"/>
                        </svg>
                        </div>
                        <input type="search" placeholder='2xxx' className=' w-full text-lg outline-none h-12 '/>
                        <button className='flex text-white items-center gap-2 h-10 my-3 px-2 bg-gradient-to-tr from-blue-dark to-blue-light rounded-lg mr-3 w-24 '>
                            <IoSearch className=' h-6 w-6'/>
                            <h1>ຄົ້ນຫາ</h1>
                        </button>
                    </div>
                </div>
                <div className=' mt-2 '>
                    <label>ຊື່ຜູ້ຮັບ</label>
                    <div className='flex items-center border border-blue-dark w-[46rem] rounded-lg  '>
                        <div className=' px-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none ">
                            <path d="M9.54361 11.6817C5.99217 12.0027 3.28647 15.0036 3.33361 18.5692V18.75C3.33361 19.4403 3.89326 20 4.58361 20C5.27397 20 5.83361 19.4403 5.83361 18.75V18.5192C5.79604 16.3299 7.41166 14.463 9.58361 14.1858C11.8763 13.9585 13.9192 15.6328 14.1466 17.9255C14.16 18.061 14.1668 18.1971 14.1669 18.3333V18.75C14.1669 19.4403 14.7266 20 15.4169 20C16.1073 20 16.6669 19.4403 16.6669 18.75V18.3333C16.6629 14.6473 13.6714 11.6624 9.98541 11.6665C9.83803 11.6667 9.69068 11.6717 9.54361 11.6817Z" fill="#00AEEF"/>
                            <path d="M10 10C12.7614 10 15 7.76141 15 5C15 2.23859 12.7614 0 10 0C7.23859 0 5 2.23859 5 5C5.00273 7.76027 7.23973 9.99723 10 10ZM10 2.5C11.3807 2.5 12.5 3.6193 12.5 5C12.5 6.3807 11.3807 7.5 10 7.5C8.6193 7.5 7.5 6.3807 7.5 5C7.5 3.6193 8.6193 2.5 10 2.5Z" fill="#00AEEF"/>
                        </svg>
                        </div>
                        <input type="text" placeholder='2xxx' className=' w-full text-lg rounded-lg outline-none h-12 '/>
                        
                    </div>
                </div>
                <div className=' mt-2 '>
                    <label>ເບີໂທ</label>
                    <div className='flex items-center border border-blue-dark w-[46rem] rounded-lg  '>
                        <div className=' px-3 '>
                        <IoCall className=' text-blue-light ' />
                        </div>
                        <input type="text" placeholder='2xxx' className=' w-full text-lg rounded-lg outline-none h-12 '/>
                        
                    </div>
                </div>
                <div className=' mt-2 '>
                    <label>ຈຳນວນທີ່ຕ້ອງການໂອນ</label>
                    <div className='flex items-center border border-blue-dark w-[46rem] rounded-lg  '>
                        <div className=' px-3 '>
                        <img src={cash} alt="" />
                        </div>
                        <input type="text" placeholder='2xxx' className=' w-full text-lg rounded-lg outline-none h-12 '/>
                        
                    </div>
                </div>
                <div className=' mt-2 '>
                    <label>ລະຫັດກະເປົ່າ </label>
                    <div className='flex items-center border border-blue-dark w-[46rem] rounded-lg  '>
                        <div className=' px-3 '>
                        <img src={wallet} alt="" />
                        </div>
                        <input type="text" placeholder='2xxx' className=' w-full text-lg rounded-lg outline-none h-12 '/>
                        
                    </div>
                </div>

            </div>
        </div>
        <div className='flex w-full justify-center items-center border gap-12 '>
            <NavLink to="/ewalletwithdraw" className=' flex  my-10  justify-center items-center w-[21rem] h-12 bg-gradient-to-t from-gray-500 to-gray-200 text-white rounded-lg font-bold text-lg   '> ຍົກເລີກ </NavLink>
            <button className=' flex  my-10  justify-center items-center w-[21rem] h-12 bg-gradient-to-t from-blue-dark to-blue-light font-bold text-lg  text-white rounded-lg  '> ໂອນ E-Wallet  </button>
        </div>
    </div>
</div>
  )
}

export default EwalletMoneyTransfer