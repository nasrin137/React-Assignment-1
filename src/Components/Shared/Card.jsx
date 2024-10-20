import React from 'react'

function Card({img,title,description,price}) {
  return (
    <div className='relative font-bold text-base text-dark space-y-1 hover:translate-y-5 transition-all duration-300'>
       <img src={img} alt="" />
       <h4>{title}</h4>
       <h6 className='text-sm text-ash font-normal'>{description}</h6>
       <p>{price}</p>
       <button className='hidden md:bg-[#FAFAFA] text-[#18181B] rounded-full md:absolute md:top-5 md:right-20 lg:absolute lg:top-5 lg:right-5   md:flex justify-center items-center gap-1 px-2 py-2 font-bold text-xs'>
        <img src="Images/fi_3314005.png" alt="" /> Blizzard</button>
    </div>
  )
}

export default Card