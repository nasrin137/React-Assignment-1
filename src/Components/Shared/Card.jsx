import React from 'react'


function Card({img,title,description,price}) {
  return (
    <div className='relative'>
       <img src={img} alt="" />
       <h4>{title}</h4>
       <h6>{description}</h6>
       <p>{price}</p>
       <button className='bg-[#FAFAFA] rounded-md absolute top-5 right-5  flex justify-center items-center gap-2 px-3 py-3'>
        <img src="Images/fi_3314005.png" alt="" /> Blizzard</button>
    </div>
  )
}

export default Card