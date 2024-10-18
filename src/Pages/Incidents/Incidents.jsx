import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Button from '../../Components/Shared/Button'
import Card from '../../Components/Shared/Card'
import { cardInfo } from '../../Components/Data'
import Container from '../../Components/Shared/Container'
import StartPage from './StartPage'
import { useNavigate } from 'react-router-dom'

function Incidents() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/startPage')
  }
  return (
    <section>
    <div className="flex justify-between items-center py-3  px-20 ">
            <div>
                <p>Home - Incidents</p>
                <h1>Incidents</h1>
            </div>
            <div className="flex justify-between items-center relative gap-3">
            <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>

            <button onClick={handleClick}  classname="btn w-[170px] bg-primary text-white font-bold text-xs gap-5 rounded-[6px]" >+ New Incident</button>
          
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