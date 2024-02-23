import React from 'react';
import { GoPaperclip } from 'react-icons/go';
import { BsEmojiSmile } from 'react-icons/bs';
import { LuSendHorizonal } from 'react-icons/lu';

function ChatInputText() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[95%] flex my-4 justify-between'>
        <div className='flex gap-3 items-center w-full px-3'>
          <BsEmojiSmile className='h-6 w-6' />
          <GoPaperclip className='h-6 w-6' />
          <div className='w-full border overflow-hidden rounded-lg   '>
            <textarea
              className=' h-12 outline-none px-3 w-full resize-none flex items-center '
              placeholder='Text here'
              style={{
                minHeight: '36px', // 3 lines * line-height
                maxHeight: '108px', // 3 lines * line-height
                overflowY: 'auto', // Make the textarea scrollable
              }}
            ></textarea>
          </div>
        </div>
        <div className='h-12 w-12 justify-center flex items-center rounded-lg hover:shadow-lg hover:bg-sky-100 hover:text-blue-light'>
          <LuSendHorizonal className='h-6 w-6' />
        </div>
      </div>
    </div>
  );
}

export default ChatInputText;
