import React, { useState } from 'react'
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
     <div className="flex-col md:flex md:flex-row justify-between items-center md:py-3  px-20 bg-gray">
    <div className= 'flex justify-between items-center gap-5'>
        <img src="Images/close.png" alt="" className='rounded-full shadow-card bg-white px-1 py-1 mt-3 size-8' />
       <div>
       <p className='title-intro'>Home - Incidents - New Incident</p>
       <h1 className='title'>New Incident</h1>
       </div>
    </div>
    <div className='mt-5 mb-5 w-[312px] md:w-[527px]'>
        <img src="Images/progressBar.png" alt="" className='' />
    </div>
    <div className="flex-col md:flex md:flex-row justify-between items-center relative gap-3">
  <button onClick={handleBack} className='bg-white btn text-ash hover:bg-primary transition-all duration-300 hover:text-white font-bold text-sm border border-[#D4D4D8] px-9 py-2 w-[139px] h-[42px] rounded-md'>
    Back</button>
   <button onClick={handleClick} className='bg-primary btn font-bold text-sm  text-white w-[139px] h-[42px] rounded-md hover:bg-white transition-all duration-300 hover:text-primary mt-2 mb-2'>Next Step</button>
    </div>
  
 </div>
 
      {/* card portion */}
      <Container>
        <div className='w-[900px] mx-auto mt-10'>
            <h1 className='text-sm md:text-2xl font-bold text-dark'>Which of these best describes the incident?</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-8 pl-16 md:pl-2'>
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