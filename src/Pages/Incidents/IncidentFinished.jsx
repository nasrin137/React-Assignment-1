import React from 'react'
import Container from '../../Components/Shared/Container'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

function IncidentFinished() {
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate('/incidentDescription')
    }
    const handleFinish = () =>{
        navigate('/')
    }
  return (
    <>
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
  <button onClick={handleBack} className='bg-white btn text-ash font-bold text-sm border border-[#D4D4D8] px-9 py-2 w-[139px] h-[42px] rounded-md hover:bg-primary transition-all duration-300 hover:text-white'>
    Back</button>
   <button onClick={handleFinish} className='bg-primary btn font-bold text-sm  text-white w-[139px] h-[42px] rounded-md hover:bg-white transition-all duration-300 hover:text-primary'>Finished</button>
    </div>
  
 </div>
 <Container>
    <div className='w-[750px] mx-auto mt-10 relative'>
        <h2 className='font-bold text-2xl text-[#000000] pb-2'>Where’s the incident?</h2>
        <p className='w-[518px] text-ash text-sm pb-5'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
        <img src="/Images/map.png" alt="" className='w-[750px] h-[490px]' />
    <div className='absolute top-36 left-6 space-y-3'>
    <div className='relative'>
            <img src="/Images/search.png" alt="" className='absolute top-4 left-2' />
            <input  type="text" className="w-[220px] h-[42px] rounded-md  border-[1px] border-gray bg-[#F4F4F5] py-3 px-[10px] text-ash pl-8 text-sm" placeholder="Search incident"/>
        </div>
        <div className='relative'>
            <img src="/Images/search.png" alt="" className='absolute top-3 left-2' />
            <input  type="text"  className="w-[220px] h-[42px] rounded-md  border-[1px] border-gray bg-[#F4F4F5] py-3 px-[10px] text-ash pl-8 text-sm" placeholder="Pinpoint damage"/>
        </div>
    </div>
</div>
 </Container>
    </>
  )
}

export default IncidentFinished