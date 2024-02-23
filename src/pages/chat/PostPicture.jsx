import React from 'react'
import logo from "../../assets/logo.jpg"


function PostPicture() {
	return (
		<div className=' w-full my-2 '>
			<div className=' flex  flex-col   '>
				<div className=' flex flex-col bg-green-300  self-end rounded-lg    '>
					<img src={logo}
						alt=""
						className=' w-60 h-auto  my-2 px-2 flex  rounded-lg '/>
				</div>
			</div>
		</div>
	)
}

export default PostPicture
