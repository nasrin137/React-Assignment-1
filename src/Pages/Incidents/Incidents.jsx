import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Card from '../../Components/Shared/Card'
import { cardInfo } from '../../Components/Data'
import Container from '../../Components/Shared/Container'
import { useNavigate } from 'react-router-dom'

function Incidents() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/startPage')
  }
  return (
    <section>
    <div className="flex-col md:flex md:flex-row md:justify-between md:items-center py-1  md:py-3  md:px-20 bg-gray ">
            <div className='text-center md:text-start'>
                <p className='title-intro'>Home - Incidents</p>
                <h1 className='title'>Incidents</h1>
            </div>
            <div className="flex-col  md:flex md:flex-row md:justify-between md:items-center relative md:gap-3 pl-10 pb-5">
            <CiSearch className="absolute top-4 left-12 md:absolute md:top-4 md:left-12" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] border-gray bg-[#FAFAFA] py-3 px-[10px] text-ash pl-8 text-sm" placeholder="Search incident"/>
            <input  type="text" className="w-[170px] h-[42px] rounded-md  border-[1px] border-gray bg-[#FAFAFA] py-3 px-[15px] text-ash text-sm" placeholder="Sort By: Date modified"/>
            <button onClick={handleClick} className='bg-primary flex justify-center items-center gap-2 text-white text-sm px-2 py-3 rounded-lg w-[150px] hover:bg-white hover:text-primary transition-all duration-300 mt-5 md:mt-1'>
              <img src="/Images/plus.png" alt="" />New Incident</button>
            
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

</Container>
         </section>
  )
}

export default Incidents