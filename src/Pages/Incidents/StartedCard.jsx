import React from 'react'
import Button from '../../Components/Shared/Button'

function StartedCard({img,title,description}) {
  return (
    <>
    <div className='bg-[#E4E4E7] pl-10'>
        <img src={img} alt="" className='' />
        <h2>{title}</h2>
        <p>{description}</p>
       
    </div>
    </>
  )
}

export default StartedCard