import React from 'react'
import ChatNavbar from './ChatNavbar'
import ChatText from './ChatText'

function Chat() {
  return (
    <div className=' flex w-full '>
      <div className='w-full  flex  '>
        <div className=' fixed z-50 bg-white w-[65rem] flex items-center  '> 
          <ChatNavbar/>
        </div>
         <div className=' flex w-full h-full  '>
              <ChatText/>
         </div>
      </div>
    </div>
  )
}

export default Chat