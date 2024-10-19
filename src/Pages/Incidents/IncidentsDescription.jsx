import React from 'react'
import Container from '../../Components/Shared/Container'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import IncidentIntro from '../../Components/IncidentIntro';

function IncidentsDescription() {
    const navigate = useNavigate();

    const handleNext = () =>{
        navigate('/finished')
    }
  return (
//     <div>
//           <div className="flex justify-between items-center py-3  px-20 bg-accent">
//     <div className='flex justify-between items-center'>
//         <img src="Images/close.png" alt="" />
//        <div>
//        <p>Home - Incidents - New Incident</p>
//        <h1>New Incident</h1>
//        </div>
//     </div>
//     <div>
//         <img src="Images/progressBar.png" alt="" />
//     </div>
//     <div className="flex justify-between items-center relative gap-3">
//     <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>
  
//    <button className='bg-primary btn text-white'>Back</button>
//    <button onClick={handleNext} className='bg-primary btn text-white'>Next Step</button>
//     </div>
  
//  </div>
<>
<IncidentIntro></IncidentIntro>
<Container>
  <div className='max-w-[850px] mx-auto mt-10'>
  <div>
    <h1 className='incidentTitle'>Let’s give the incident a title?</h1>
    <h6 className='incident-description'>Make a title that will easily identify the incidents</h6>
    <input type="text"  placeholder='Add title here' className='border-[1px] border-gray px-3 py-4 w-[752px] h-[50px] text-sm text-ash outline-none rounded-lg bg-[#F4F4F5]'/>
    </div>
    
   <div className='mt-8'>
   <h1 className='incidentTitle'>Describe what happened during the incident?</h1>
    <h6 className='incident-description'>Share some information about the incident. The when, where, how. </h6>
    <textarea placeholder='Type here' className='border-[1px] border-gray px-3 py-4 w-[752px] h-[150px] text-sm text-ash outline-none bg-[#F4F4F5] rounded-lg '></textarea>
   </div>

  </div>
 </Container>
</>
  )
}

export default IncidentsDescription