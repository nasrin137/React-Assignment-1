import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Button from '../../Components/Shared/Button'
import Container from '../../Components/Shared/Container'
import { activities, documents, locationCardInfo } from '../../Components/Data'
import LocationCard from './LocationCard'
import ActivitiesCard from './ActivitiesCard'
import SectionTitle from '../../Components/Shared/SectionTitle'

function Locations() {
  return (
    <section>
         <div className="flex justify-between items-center py-3  px-20 bg-accent">
            <div>
                <p>Incidents - DR-4699 March 2023 Severe Storms </p>
              <div className='flex justify-between items-center gap-3'>
                <img src="Images/tree.png" alt="" />
              <h1 className='text-3xl'>DR-4699 March 2023 Severe Storms</h1>

              </div>
            </div>
            <div className="flex justify-between items-center relative gap-3">
            <CiSearch className="top-4 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A] pl-8" placeholder="Search incident"/>
          
            <Button classname="flex justify-center items-center w-[170px]" > <img src="/Images/plus.png" alt="" /> New Location</Button>
            </div>
         </div>
         <Container>
          <div className='flex justify-between max-w-[680px]gap-5'>
          <div className='space-y-4' >
                <div className='flex justify-start items-center gap-4 mt-10'>
                    <img src="Images/location.png" alt="" />
                    <div>
                        <p>Location</p>
                        <h4 className='text-3xl'>Tulare County,  Los Angles, CA 23415</h4>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <img src="Images/cost.png" alt="" />
                    <div>
                        <p>Approx. Cost:</p>
                        <h4 className='text-3xl'>$60,607,456.00</h4>
                    </div>
                </div>
                <div className='border border-b-2 border-[#E4E4E7] w-[680px] '></div>
                <h6>Description</h6>
                <p className='text-[#71717A] text-[16px] leading-[22px] max-w-[677px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                <div className='border border-b-2 border-[#E4E4E7] w-[680px] '></div>

                {/* location */}
                <SectionTitle>Locations
                    <p className='text-[#A1A1AA] underline'>See All</p>
                </SectionTitle>

                  {/* location cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4'>
                {
                    locationCardInfo.map((item,i)=>(
                        <LocationCard key={i} {...item}></LocationCard>
                    ))
                }
            </div>

               {/* activities */}
               <SectionTitle>activities
                    <p className='text-[#0A0A0A] underline font-normal'>See All</p>
                </SectionTitle>

                <div className=''>
                    {
                        activities.map((item,i)=>(
                            <ActivitiesCard key={i} {...item}></ActivitiesCard>
                        ))
                    }
                </div>

               {/* documents */}
               <SectionTitle>Locations
                    <p className='text-[#0A0A0A] underline font-normal'>See All</p>
                </SectionTitle>

                <div>
                    {
                        documents.map((item,i)=>(
                            <ActivitiesCard key={i} {...item}></ActivitiesCard>
                        ))
                    }
                </div>
            </div>
          
            {/* map portion */}
            <div className='mt-10'>
                <span>Incident Map</span>
                <img src="Images/map.png" alt="" />
                <div className='flex gap-5'>
                <p>Start 19.1232, -118.233</p>
                <p>End 19.3245, -119.2323</p>
                </div>
            </div>
          </div>
         </Container>
    </section>
  )
}

export default Locations