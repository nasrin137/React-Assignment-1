import React from 'react'
import { useNavigate } from 'react-router-dom';

function IncidentIntro() {
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate('/newIncident')
    }

    const handleNext = () =>{
      navigate('/finished')
      }
      
  return (
    <div className="flex justify-between items-center py-3  px-20 bg-gray">
    <div className='flex justify-between items-center gap-5'>
        <img src="Images/close.png" alt="" className='rounded-full shadow-card bg-white px-1 py-1 mt-3 size-8' />
       <div>
       <p className='title-intro'>Home - Incidents - New Incident</p>
       <h1 className='title'>New Incident</h1>
       </div>
    </div>
    <div>
        <img src="Images/progressBar.png" alt="" />
    </div>
    <div className="flex justify-between items-center relative gap-3">
  <button onClick={handleBack} className='bg-white btn text-ash font-bold text-sm border border-[#D4D4D8] px-9 py-2 w-[139px] h-[42px] rounded-md'>
    Back</button>
   <button onClick={handleNext} className='bg-primary btn font-bold text-sm  text-white w-[139px] h-[42px] rounded-md'>Next Step</button>
    </div>
  
 </div>
  )
}

export default IncidentIntro