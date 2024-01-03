import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import teamwork from '../../assets/teamwork.jpeg'
import frame from '../../assets/Frame.svg'
import frame1 from '../../assets/Frame (1).svg'
import frame2 from '../../assets/Frame (2).svg'
import frame3 from '../../assets/Frame (3).svg'

function Member() {
  return (
    <div className=' mt-[6rem] w-full flex justify-center '>
        <div className=' flex  w-[96%]  flex-col my-8'>
          <div className=' flex justify-between items-center h-[5rem] w-full bg-gradient-to-b from-blue-dark to-blue-light rounded-xl '>
           <div className=' flex px-6 gap-6'>
           <div className=' w-48 flex justify-center items-center bg-white h-10 rounded-lg text-blue-light font-bold '><span>ສະແດງຕາມລຳດັບ</span></div>
            <NavLink to="/membertable" className=' w-48 flex justify-center items-center bg-sky-400 h-10 rounded-lg text-white font-bold '><span>ສະແດງຕາມຕາຕະລາງ</span></NavLink>
           </div>
           <div className=' flex items-center gap-8 mr-10'>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_1296_5165)">
    <path d="M1.25 5.93764H4.67C4.9383 6.92481 5.52397 7.79626 6.33666 8.41755C7.14935 9.03885 8.1439 9.37546 9.16687 9.37546C10.1898 9.37546 11.1844 9.03885 11.9971 8.41755C12.8098 7.79626 13.3955 6.92481 13.6637 5.93764H28.75C29.0815 5.93764 29.3995 5.80594 29.6339 5.57152C29.8683 5.3371 30 5.01916 30 4.68764C30 4.35612 29.8683 4.03818 29.6339 3.80376C29.3995 3.56934 29.0815 3.43764 28.75 3.43764H13.6637C13.3955 2.45048 12.8098 1.57902 11.9971 0.957727C11.1844 0.336431 10.1898 -0.000183105 9.16687 -0.000183105C8.1439 -0.000183105 7.14935 0.336431 6.33666 0.957727C5.52397 1.57902 4.9383 2.45048 4.67 3.43764H1.25C0.918479 3.43764 0.600537 3.56934 0.366117 3.80376C0.131696 4.03818 0 4.35612 0 4.68764C0 5.01916 0.131696 5.3371 0.366117 5.57152C0.600537 5.80594 0.918479 5.93764 1.25 5.93764ZM9.16625 2.50014C9.5989 2.50014 10.0218 2.62844 10.3816 2.8688C10.7413 3.10917 11.0217 3.45081 11.1872 3.85052C11.3528 4.25023 11.3961 4.69007 11.3117 5.1144C11.2273 5.53873 11.019 5.92851 10.713 6.23444C10.4071 6.54036 10.0173 6.7487 9.59301 6.83311C9.16868 6.91751 8.72884 6.87419 8.32913 6.70863C7.92942 6.54306 7.58778 6.26268 7.34741 5.90295C7.10704 5.54322 6.97875 5.12029 6.97875 4.68764C6.97941 4.10768 7.21009 3.55167 7.62018 3.14158C8.03028 2.73148 8.58629 2.5008 9.16625 2.50014Z" fill="white"/>
    <path d="M28.75 13.75H25.33C25.0621 12.7626 24.4767 11.8908 23.6641 11.2693C22.8515 10.6477 21.8568 10.3109 20.8337 10.3109C19.8107 10.3109 18.816 10.6477 18.0034 11.2693C17.1908 11.8908 16.6054 12.7626 16.3375 13.75H1.25C0.918479 13.75 0.600537 13.8817 0.366117 14.1161C0.131696 14.3505 0 14.6685 0 15C0 15.3315 0.131696 15.6494 0.366117 15.8839C0.600537 16.1183 0.918479 16.25 1.25 16.25H16.3375C16.6054 17.2374 17.1908 18.1091 18.0034 18.7307C18.816 19.3523 19.8107 19.689 20.8337 19.689C21.8568 19.689 22.8515 19.3523 23.6641 18.7307C24.4767 18.1091 25.0621 17.2374 25.33 16.25H28.75C29.0815 16.25 29.3995 16.1183 29.6339 15.8839C29.8683 15.6494 30 15.3315 30 15C30 14.6685 29.8683 14.3505 29.6339 14.1161C29.3995 13.8817 29.0815 13.75 28.75 13.75ZM20.8337 17.1875C20.4011 17.1875 19.9782 17.0592 19.6184 16.8188C19.2587 16.5785 18.9783 16.2368 18.8128 15.8371C18.6472 15.4374 18.6039 14.9976 18.6883 14.5732C18.7727 14.1489 18.981 13.7591 19.287 13.4532C19.5929 13.1473 19.9827 12.9389 20.407 12.8545C20.8313 12.7701 21.2712 12.8134 21.6709 12.979C22.0706 13.1446 22.4122 13.4249 22.6526 13.7847C22.893 14.1444 23.0212 14.5673 23.0212 15C23.0206 15.5799 22.7899 16.136 22.3798 16.5461C21.9697 16.9561 21.4137 17.1868 20.8337 17.1875Z" fill="white"/>
    <path d="M28.75 24.0625H13.6637C13.3955 23.0753 12.8098 22.2039 11.9971 21.5826C11.1844 20.9613 10.1898 20.6247 9.16687 20.6247C8.1439 20.6247 7.14935 20.9613 6.33666 21.5826C5.52397 22.2039 4.9383 23.0753 4.67 24.0625H1.25C0.918479 24.0625 0.600537 24.1942 0.366117 24.4286C0.131696 24.663 0 24.981 0 25.3125C0 25.644 0.131696 25.962 0.366117 26.1964C0.600537 26.4308 0.918479 26.5625 1.25 26.5625H4.67C4.9383 27.5497 5.52397 28.4211 6.33666 29.0424C7.14935 29.6637 8.1439 30.0003 9.16687 30.0003C10.1898 30.0003 11.1844 29.6637 11.9971 29.0424C12.8098 28.4211 13.3955 27.5497 13.6637 26.5625H28.75C29.0815 26.5625 29.3995 26.4308 29.6339 26.1964C29.8683 25.962 30 25.644 30 25.3125C30 24.981 29.8683 24.663 29.6339 24.4286C29.3995 24.1942 29.0815 24.0625 28.75 24.0625ZM9.16625 27.5C8.7336 27.5 8.31067 27.3717 7.95094 27.1313C7.59121 26.891 7.31083 26.5493 7.14526 26.1496C6.9797 25.7499 6.93638 25.3101 7.02078 24.8857C7.10519 24.4614 7.31353 24.0716 7.61945 23.7657C7.92538 23.4598 8.31516 23.2514 8.73949 23.167C9.16382 23.0826 9.60366 23.1259 10.0034 23.2915C10.4031 23.4571 10.7447 23.7374 10.9851 24.0972C11.2255 24.4569 11.3538 24.8798 11.3538 25.3125C11.3528 25.8923 11.122 26.4482 10.712 26.8582C10.3019 27.2682 9.74611 27.499 9.16625 27.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1296_5165">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>
 <div className='flex items-center h-10  bg-white rounded-lg w-80 '> <IoSearch className="px-2 h-10 w-10 text-blue-dark" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="outline-none"
                  placeholder=" ຄົ້ນຫາສະມາຊິກ "
                /></div> <button className=' border bg-[#00628A] rounded-lg w-28 h-10 text-white font-bold'>ຄົ້ນຫາ</button></div>
          </div>
          <img src={teamwork} alt="" />

          <div className=' flex rounded-b-lg shadow-lg border items-center bg-white '>
            <div className=' flex  ml-4 h-[5rem] border w-[20rem] rounded-lg items-center bg-[#F4F7FC] '>
             <div className='flex gap-2 w-full justify-center px-3 '>
               <div className=' font-bold text-lg'>ໝາຍເຫດ:</div>
              <div>ຄະແນນ BV ຈະຖືກລີເຊັດທຸກໆຕົ້ນເດືອນແຈ້ງມາຍັງສະມາຊິກທຸກທ່ານ</div>
              </div>
            </div>
            <div className='flex items-center gap-3 px-6 '>
              <img src={frame} alt="" />
              <div >
                 <h1 className=' font-bold'> Member</h1>
                <div className=' flex items-center gap-2 text-gray-500'> <p>3,000</p><p>BV</p></div>
              
              </div>
            </div>
            <div className='flex items-center gap-3 px-6 '>
              <img src={frame1} alt="" />
              <div >
                 <h1 className=' font-bold'> Silver</h1>
                <div className=' flex items-center gap-2 text-gray-500'> <p>5,000</p><p>Bv</p></div>
              
              </div>
            </div>
            <div className='flex items-center gap-3 px-6 '>
              <img src={frame2} alt="" />
              <div >
                 <h1 className=' font-bold'> Gold</h1>
                <div className=' flex items-center gap-2 text-gray-500'> <p>8,000</p><p>Bv</p></div>
              
              </div>
            </div>
            <div className='flex items-center gap-3 px-6 my-6 '>
              <img src={frame3} alt="" />
              <div >
                 <h1 className=' font-bold'> Platinum </h1>
                <div className=' flex items-center gap-2 text-gray-500'> <p>10,000</p><p>Bv</p></div>
              
              </div>
            </div>
           
          </div>
          
        </div>
    </div>
  )
}

export default Member