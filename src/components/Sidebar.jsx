import React from 'react'
import {TbCircleDotted} from "react-icons/tb";
import Personcomponent from './sidebarcomponents/Personcomponent';

import {IoIosSearch} from "react-icons/io";
import {LuListFilter} from "react-icons/lu";

function Sidebar() {
	return (
		<div className='  overflow-scroll w-full flex justify-center hover:shadow-lg hover:shadow-blue-light  '>
			<div className='hidden lg:block lg:flex  flex flex-col fixed z-50 bg-white w-[24rem] items-center '>
				<div className=' w-[95%]  flex flex-col items-center '>
					<div className='w-full flex items-center  text-blue-light  justify-between my-5 '>
						<div className='flex gap-3 items-center '>

							<span className=' text-3xl font-bold '>Chats</span>
						</div>
						<TbCircleDotted className=' h-6 w-6'/>

					</div>
					<div className=' flex w-full '>
						<div className=' flex items-center hover:shadow-lg gap-2 w-full rounded-full border  text-blue-light  '>
							<IoIosSearch className=' h-8 w-8 ml-2'/>
							<input type="search" name="" id="" placeholder='Search ' className=' my-3 w-full outline-none '/>
							<LuListFilter className=' h-8 w-8 mr-2'/>

						</div>
					</div>
					<div className=' w-full '>
						<div className=' flex items-center gap-4 my-3 '>
							{/* <span>Archived </span> */} </div>
						<hr className=' w-full border my-2 '/>

						<div>
							<span className=' my-2 '>All
							</span>
						</div>
					</div>
				</div>

			</div>

			<div className=' w-[90%] '>


				<div className=' h-full flex overflow-scroll  '>
					<div className=' w-full lg:mt-[12rem] flex  '>
						<Personcomponent/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
