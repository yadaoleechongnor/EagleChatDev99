import React from 'react'

function MyChat() {
	return (
		<div className=' w-full my-2 '>
			<div className=' flex  flex-col   '>
				<div className=' flex flex-col bg-green-300 self-end   my-2 px-2   rounded-lg text-black '>
					<div className=' '>
						<span className='  '>
							Hello EagleDev99
						</span>
					</div>
					<div className=' flex self-end  '>

						<p className=' text-[10px] '>10:00 AM</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyChat
