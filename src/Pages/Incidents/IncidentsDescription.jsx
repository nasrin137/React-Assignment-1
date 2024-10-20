import React from 'react'
import Container from '../../Components/Shared/Container'
import IncidentIntro from '../../Components/IncidentIntro';

function IncidentsDescription() {
  return (
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