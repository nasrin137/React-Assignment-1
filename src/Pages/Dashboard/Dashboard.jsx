import React, { useState } from 'react'
import { cardInfo } from '../../Components/Data'
import Card from '../../Components/Shared/Card'
import Container from '../../Components/Shared/Container'
import ChatPopUp from './ChatPopUp'
import { CiSearch } from 'react-icons/ci'
import Button from '../../Components/Shared/Button'

function Dashboard() {
  const[isOpen,setIsOpen]=useState(false);

  const toggleChatBox = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <section className='w-full relative'>
          <div className="flex-col md:flex md:flex-row justify-between items-center py-3  px-20 bg-gray ">
            <div>
                <p className='title-intro'>Welcome back</p>
                <h1 className='title'>Dashboard</h1>
            </div>
            <div className=" flex-col md:flex md:flex-row justify-between items-center relative  md:gap-3">
            <CiSearch className="top-4 md:top-5 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] border-gray bg-[#FAFAFA] py-3 px-[10px] text-ash pl-8 text-sm" placeholder="Search incident"/>
            <input  type="text" className="w-[170px] h-[42px] rounded-md  border-[1px] border-gray bg-[#FAFAFA] py-3 px-[15px] text-ash text-sm mt-2 mb-2" placeholder="Sort By: Date modified"/>
            <Button>Cypher AI</Button>
            </div>
         </div>
          <Container>

    {/* dashboard body portion */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-7'>
        {
            cardInfo.map((item,i)=>(
                <Card key={i} {...item}></Card>
            ))
        }
    </div>
    {/* chatbox portion */}
   <button onClick={toggleChatBox}>
   <img src="/Images/C.png" alt="" className='bg-primary rounded-full p-4 absolute bottom-2 right-7 md:absolute md:right-28 md:-bottom-16'/>
   </button>
   {
    isOpen &&  <ChatPopUp toggleChatBox={toggleChatBox}></ChatPopUp>
   }
  </Container>
    </section>
  )
}

export default Dashboard