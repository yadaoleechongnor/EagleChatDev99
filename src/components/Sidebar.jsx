import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { HiHome } from 'react-icons/hi';
import { PiHandbagLight } from 'react-icons/pi';
import hong from '../assets/hong.svg';
import { BiSolidCart } from 'react-icons/bi';
import { IoWalletSharp } from 'react-icons/io5';
import HongfahSidebarFeather from './HongfahSidebarFeather';
import planeicon from '../assets/planeicon.ico';
import bonus from '../assets/bonus.png';
import chart from '../assets/chart.png';
import setting from '../assets/setting.png';
import structure from '../assets/structure.png';

const navlinks1 = [
  { title: 'Dashboard', icon: <HiHome className='w-8 h-8' />, path: '/' },
  { title: 'ສີນຄ້າ', icon: <PiHandbagLight className='w-8 h-8' />, path: '/product' },
  { title: 'ປະຫັວດການຂາຍ', icon: <img src={chart} alt="Chart Icon" className="icon" />, path: '/salehistory' },
  { title: 'ອໍເດິສັ່ງຊື້', icon: <BiSolidCart className='w-8 h-8' />, path: '/order' },
  { title: 'ແຜນພັງສາຍງານ', icon: <img src={structure} alt='Structure Icon' className="icon" />, path: '/member' },
  { title: 'Bonus', icon: <img src={bonus} alt="Bonus Icon" className="icon" />, path: '/bonus' },
  { title: 'ກະເປົາ E-wallet', icon: <IoWalletSharp className='w-8 h-8' />, path: '/ewalletwithdraw ' },
  { title: 'ທິບທ່ອງທຽ່ວ', icon: <img src={planeicon} alt="Plane Icon" className="icon" />, path: '/travel' },
  { title: 'ການຕັ້ງຄ່າ', icon: <img src={setting} alt="Setting Icon" className="icon" />, path: '/setting' },
];

const Sidebar = ({ click, setClick }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setClick(false);
  };

  return (
    <div
      onClick={() => setClick(false)}
      className={`bg-gradient-to-b from-blue-dark to-blue-light w-[15rem] max-w-[100%] z-[100] duration-500 min-h-screen shadow p-2 drop-shadow-md md:block md:left-0 top-0 fixed ${click ? 'top-0 left-0' : 'fixed -left-[100rem]'}`}
    >
      <div className="absolute mt-[15rem]">
        <HongfahSidebarFeather />
      </div>
      <div className="logo w-full flex align-middle relative">
        <span
          onClick={() => setClick(false)}
          className="text-base p-2 rounded-full bg-main-color absolute top-2 -right-[1.5rem] z-40 cursor-pointer md:hidden block"
        >
          <AiOutlineClose className="text-white" size={20} />
        </span>
      </div>
      <nav className='absolute w-[93%]'>
        <ul className="flex gap-2 flex-col">
          <div className="w-full h-[10rem] flex justify-center my-8">
            <img src={hong} alt="" className="w-[150px] h-[170px] cursor-pointer" />
          </div>
          {navlinks1.map((link, index) => (
            <li key={index}>
              <NavLink 
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={activeLink === link.path ? 'flex gap-2 items-center p-2 rounded-full bg-white text-blue-dark' : 'flex text-white gap-3 items-center p-2 bg-transparent rounded-full hover:bg-white hover:text-blue-dark'}
              >
                <span className="icon-container">{link.icon}</span>
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
