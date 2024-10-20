import React from 'react'

function ActivitiesCard({img,title,description,price}) {
  return (
    <div className='flex justify-start items-center gap-5 mb-4 bg-[#F4F4F5] font-bold text-base text-dark rounded-xl pl-3 py-2'>
        <img src={img} alt="" />
        <div className=''>
            <h5>{title}</h5>
            <span className='text-sm font-normal text-accent'>{description}</span>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default ActivitiesCard