import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Container from '../../Components/Shared/Container'
import { newIncidentCards } from '../../Components/Data'
import NewIncidentsCard from './NewIncidentsCard'
import { useNavigate } from 'react-router-dom'

function NewIncident() {
    const [activeCard, setActiveCard] = useState(1);
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/incidentDescription")
    }
    const handleBack = () =>{
        navigate('/startPage')
    }
  return (
    <>
     <div className="flex justify-between items-center py-3  px-20 bg-accent">
    <div className='flex justify-between items-center'>
        <img src="Images/close.png" alt="" />
       <div>
       <p>Home - Incidents - New Incident</p>
       <h1>New Incident</h1>
       </div>
    </div>
    <div>
        <img src="Images/progressBar.png" alt="" />
    </div>
    <div className="flex justify-between items-center relative gap-3">
    <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>
  
   <button onClick={handleBack} className='bg-primary btn text-white'>Back</button>
   <button onClick={handleClick} className='bg-primary btn text-white'>Next Step</button>
    </div>
  
 </div>
      {/* card portion */}
      <Container>
        <div className='w-[900px] mx-auto'>
            <h1 className='text-3xl font-semibold'>Which of these best describes the incident?</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1'>
                {
                    newIncidentCards.map((item,i)=>(
                        <NewIncidentsCard 
                        key={i} {...item}
                        activeCard={(activeCard===i)}
                        onClick={()=>setActiveCard(i)}
                     ></NewIncidentsCard>
                    ))
                }
            </div>
        </div>
    </Container>
    </>
   
  )
}

export default NewIncident