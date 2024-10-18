import React from 'react'
import Container from '../../Components/Shared/Container'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

function IncidentFinished() {
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate('/incidentDescription')
    }
  return (
    <div>
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
   <button className='bg-primary btn text-white'>Finished</button>
    </div>
  
 </div>
 <Container>
    <div>
        <h2></h2>
        <p></p>
        <img src="/Images/map.png" alt="" />
        <div className='relative'>
            <img src="/Images/search.png" alt="" className='absolute top-4 left-2' />
            <input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#F4F4F5] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>
        </div>
        {/* <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#F4F4F5] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/> */}
        <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>
    </div>
 </Container>
    </div>
  )
}

export default IncidentFinished