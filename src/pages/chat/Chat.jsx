import React from 'react';
import ChatNavbar from './ChatNavbar';
import ChatText from './ChatText';
 
function Chat({ selectedUser }) {
  return (
    <div className=' flex w-full '>
      <div className='w-full  flex  '>
        <div className=' fixed z-50 bg-white w-[65rem] flex items-center  '> 
          <ChatNavbar selectedUser={selectedUser} />
        </div>
         <div className=' flex w-full h-full  '>
              <ChatText selectedUser={selectedUser} />
         </div>
      </div>
    </div>
  );
}

export default Chat;
