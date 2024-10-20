import React from 'react'


function ChatPopUp({toggleChatBox}) {
  return (
   <div className='absolute bottom-20 right-5 md:absolute md:top-48 md:right-16 '>
     <div className='bg-[#F4F4F5] w-[331px] h-[280px] relative'>
        <h1 className='bg-primary text-[#FAFAFA] font-bold text-lg py-4 pl-4 rounded-t-lg'>Chat with Cypher</h1>
       <div className='bg-[#F4F4F5] px-4 rounded-b-xl'>
      <div>
      <p className='bg-[#3F3F46] w-[213px] h-[57px] absolute top-20 right-3 text-white px-2 rounded-md text-sm py-1'>Lorem ipsum dolar sit general sac mascho werho</p>
        <p className='bg-[#F4F4F5] w-[213px] h-[57px] pt-24 text-sm '>Lorem ipsum dolar sit general sac mascho werho</p>
        <p className='bg-[#F4F4F5] w-[213px] h-[57px] pt-16 text-sm'>Lorem ipsum dolar sit general sac mascho werho</p>
        <p className='bg-[#3F3F46] w-[213px] h-[57px] absolute top-72  right-0 rounded-md text-white px-2 text-sm py-1'>Lorem ipsum dolar sit general sac mascho werho</p>
      </div>
      <input type="text" name="" id="" placeholder='Enter your question...' className='mt-36 bg-[#F3F4F6] border border-[#E5E7EB] rounded-[6px] px-3 py-2 w-full ' />
        <div className='flex justify-between items-center mt-5 pb-4'>
            <div className='flex justify-between items-center gap-2'>
                <img src="Images/camera.png" alt="" />
                <img src="Images/instragram.png" alt="" />
                <img src="Images/gallery.png" alt="" />
            </div>
           <button className='btn bg-primary px-4 py-1 rounded-full text-white text-sm'>Send</button>
        </div>
       </div>
      
        <button onClick={toggleChatBox} className='absolute right-5 rounded-full shadow-card bg-white px-4 py-4 mt-3'>
        <img src="Images/close.png" alt="" className='size-6' />
        </button>
    </div>
   </div>
  )
}

export default ChatPopUp