import React from 'react'
import Button from '../../Components/Shared/Button'

function ChatPopUp() {
  return (
    <div className='bg-[#F4F4F5] w-[331px] h-[280px] relative'>
        <h1 className='bg-primary text-white text-center'>Chat with Cypher</h1>
       <div>
       <p className='bg-[#3F3F46] w-[213px] h-[57px] absolute top-7 right-0'>Lorem ipsum dolar sit general sac mascho werho</p>
        <p className='bg-[#F4F4F5] w-[213px] h-[57px] pt-16'>Lorem ipsum dolar sit general sac mascho werho</p>
        <p className='bg-[#F4F4F5] w-[213px] h-[57px] pt-16'>Lorem ipsum dolar sit general sac mascho werho</p>
        <p className='bg-[#3F3F46] w-[213px] h-[57px] absolute top-52 right-0'>Lorem ipsum dolar sit general sac mascho werho</p>
       </div>
        <input type="text" name="" id="" placeholder='Enter your question...' className='mt-36'/>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center'>
                <img src="Images/camera.png" alt="" />
                <img src="Images/instragram.png" alt="" />
                <img src="Images/gallery.png" alt="" />
            </div>
            <Button>Send</Button>
        </div>
        <div className='flex justify-end'>
        <img src="Images/close.png" alt="" className='' />
        </div>
    </div>
  )
}

export default ChatPopUp