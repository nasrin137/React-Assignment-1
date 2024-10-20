import React from 'react'
import Button from '../../Components/Shared/Button'


function StartedCard({img,title,description}) {
  return (
    <>
    <div className='bg-gray pl-7 w-[235px] h-[270px] rounded-xl hover:translate-y-3 transition-all duration-300'>
        <img src={img} alt="" className='pt-5' />
        <h2 className='font-bold text-xl text-dark pt-12 pb-3'>{title}</h2>
        <p className='text-sm text-ash '>{description}</p>
       
    </div>
    </>
  )
}

export default StartedCard