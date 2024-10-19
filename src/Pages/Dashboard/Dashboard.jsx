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
    // console.log('click')
  }
  return (
    <section className='w-full'>
          <div className="flex justify-between items-center py-3  px-20 bg-accent">
            <div>
                <p>Welcome back</p>
                <h1>Dashboard</h1>
            </div>
            <div className="flex justify-between items-center relative gap-3">
            <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>
          
            <Button >Cypher AI</Button>
            </div>
         </div>
          <Container>
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-7'>
        {
            cardInfo.map((item,i)=>(
                <Card key={i} {...item}></Card>
            ))
        }
    </div>
   <button onClick={toggleChatBox}>
   <img src="/Images/C.png" alt="" className='bg-primary rounded-full p-4 absolute right-28'/>
   </button>
   {
    isOpen &&  <ChatPopUp toggleChatBox={toggleChatBox}></ChatPopUp>
   }
  </Container>
    </section>
  )
}

export default Dashboard