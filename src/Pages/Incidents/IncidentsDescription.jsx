import React from 'react'
import Container from '../../Components/Shared/Container'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

function IncidentsDescription() {
    const navigate = useNavigate();

    const handleNext = () =>{
        navigate('/finished')
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
  
   <button className='bg-primary btn text-white'>Back</button>
   <button onClick={handleNext} className='bg-primary btn text-white'>Next Step</button>
    </div>
  
 </div>
 <Container>
  <div className='max-w-[850px] mx-auto'>
  <div>
    <h1 className='text-2xl'>Let’s give the incident a title?</h1>
    <h6 className='text-md'>Make a title that will easily identify the incidents</h6>
    <input type="text" name="" id="" placeholder='Add title here'/>
    </div>
    
   <div>
   <h1>Describe what happened during the incident?</h1>
    <h6>Share some information about the incident. The when, where, how. </h6>
    <textarea name="" id="" placeholder='Type here'></textarea>
   </div>

  </div>
 </Container>
    </div>
  )
}

export default IncidentsDescription