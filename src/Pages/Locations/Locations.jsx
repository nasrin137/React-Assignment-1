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
         <div className="flex justify-between items-center py-3  px-20 bg-gray">
            <div>
                <p className='title-intro'>Incidents - DR-4699 March 2023 Severe Storms </p>
              <div className='flex justify-between items-center gap-3'>
                <img src="Images/tree.png" alt="" />
              <h1 className='title'>DR-4699 March 2023 Severe Storms</h1>

              </div>
            </div>
            <div className="flex justify-between items-center relative gap-3">
            <CiSearch className="top-3 left-3 absolute" /><input  type="text" className="w-[190px] h-[42px] rounded-md  border-[1px] border-gray bg-[#FAFAFA] py-3 px-[10px] text-ash pl-8 text-sm" placeholder="Search incident"/>
            <input  type="text" className="w-[170px] h-[42px] rounded-md  border-[1px] border-gray bg-[#FAFAFA] py-3 px-[15px] text-ash text-sm" placeholder="Sort By: Date modified"/>
            <Button classname="flex justify-center items-center gap-2 w-[170px]"> <img src="/Images/plus.png" alt="" />New Location</Button>
            </div>
         </div>
         <Container>
          <div className='flex justify-between w-[1280px] gap-5'>
          <div className='space-y-4' >
                <div className='flex justify-start items-center gap-4 mt-10'>
                    <img src="Images/location.png" alt="" />
                    <div>
                        <p className='text-sm text-[#6B7280]'>Location</p>
                        <h4 className='text-xl font-bold text-dark'>Tulare County,  Los Angles, CA 23415</h4>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <img src="Images/cost.png" alt="" />
                    <div>
                        <p className='text-sm text-[#6B7280]'>Approx. Cost:</p>
                        <h4  className='text-xl font-bold text-dark'>$60,607,456.00</h4>
                    </div>
                </div>
                <div className='border border-b-2 border-[#E4E4E7] w-[700px] '></div>
                <h6 className='font-bold text-sm text-[#000000]'>Description</h6>
                <p className='text-ash text-base leading-[22px] max-w-[677px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                <div className='border border-b-2 border-[#E4E4E7] w-[700px] '></div>

                {/* location */}
                <SectionTitle>Locations
                    <p className='text-accent font-normal text-sm underline pr-3'>See All</p>
                </SectionTitle>

                  {/* location cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4'>
                {
                    locationCardInfo.map((item,i)=>(
                        <LocationCard key={i} {...item}></LocationCard>
                    ))
                }
            </div>
            <div className='border border-b-[1px] border-gray w-[700px] '></div>

               {/* activities */}
               <SectionTitle>Activities
                    <p className='text-[#0A0A0A] underline  text-sm font-normal'>See All</p>
                </SectionTitle>

                <div className=''>
                    {
                        activities.map((item,i)=>(
                            <ActivitiesCard key={i} {...item}></ActivitiesCard>
                        ))
                    }
                </div>

               {/* documents */}
               <SectionTitle>Documents
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
                <span className='text-sm text-ash '>Incident Map</span>
                <img src="Images/map.png" alt="" className='w-[520px] h-[500px] mt-4' />
                <div className='flex gap-5 mt-5 txet-sm text-ash'>
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