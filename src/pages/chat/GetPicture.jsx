import React from 'react'
import logo from "../../assets/logo.jpg"

function GetPicture() {
	return (
		<div className=' w-full my-2 '>
			<div className=' flex    '>
				<div className='   bg-sky-200 rounded-lg '>
					<img src={logo}
						alt=""
						className=' w-60 h-auto  my-2 px-2  rounded-lg  flex  '/>
				</div>
			</div>
		</div>
	)
}

export default GetPicture
