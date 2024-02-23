import React from 'react'
import MyChat from './MyChat'
import YourChat from './YourChat'
import GetPicture from './GetPicture'
import PostPicture from './PostPicture'
import ChatInputText from './ChatInputText'
import background from "../../assets/background.jpg"

function ChatText() {
	return (
		<div className=' flex w-full  flex-col items-center bg-sky-50  '>
			<div className=' w-full '>
				<img src={background} alt="" className='w-full h-full ' />
			</div>
			<div className='absolute w-full flex flex-col items-center  h-full'>
			<div className=' w-[95%] flex flex-col    items-center h-[90%]   '>
				<div className=' flex overflow-hidden  w-full h-full  '>
					<div className=' w-full flex overflow-x-auto  flex-col h-full '>
						<div className=' flex flex-col mt-24 '>
							<div className=' w-full flex  '>
								<YourChat/>
							</div>
							<div className=' flex w-full items-center justify-center my-3'>
								<span>
									Today
								</span>
							</div>
							<div className=' w-full '>
								<MyChat/>
							</div>
							<div className=' w-full '>
								<GetPicture/>
							</div>
							<div className=' w-full '>
								<PostPicture/>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className=' w-full flex bg-white  justify-center    '>
				 <ChatInputText/>
			</div>
			</div>

		</div>
	)
}

export default ChatText
