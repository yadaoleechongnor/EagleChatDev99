import React from 'react'

import {IoVideocamOutline} from "react-icons/io5";

import {IoCallOutline} from "react-icons/io5";
import logo from "../../assets/logo.jpg"
import {BsThreeDotsVertical} from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function ChatNavbar() {
	return (
		<div className=' flex w-full '>
			<div className=' flex items-center justify-between my-2   w-full '>
			<NavLink to="/personaldetail" className='ml-4 gap-4 flex items-center '>
					<img src={logo}
						alt=""
						className=' h-12 w-12 rounded-full '/>
					<div>
						<span className=' text-lg font-medium '>
							EagleDev99
						</span>
						<p className=' text-sm '>Online</p>
					</div>
				</NavLink>
				{/* <div className=' absolute border w-[30rem] h-[80rem] bg-white ml-[40rem] '>

				</div> */}
				<div className=' flex items-center gap-8 mr-4  '>
					
						<div className=' w-12 h-12   rounded-lg hover:shadow-lg hover:text-blue-light hover:border h-8 flex justify-center items-center'>
							<IoVideocamOutline className=' w-6 h-6 '/>
						</div>
						<div className=' w-12 h-12   rounded-lg hover:shadow-lg hover:text-blue-light hover:border h-8 flex justify-center items-center'>
							<IoCallOutline className=' w-6 h-6 '/>
						</div>
					
					<div className=' w-12 h-12     hover:text-blue-light  h-8 flex justify-center items-center'>
						<BsThreeDotsVertical className=' w-6 h-6 '/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatNavbar
