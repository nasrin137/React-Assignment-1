import React from 'react'
import { cn } from '../../Utils'

function NewIncidentsCard({img,name,activeCard,onClick}) {
  return (
    <button onClick={onClick} className={cn("inline-flex justify-start items-center gap-3 w-[180px] h-[70px] rounded-[6px] border border-[#E4E4E7] bg-[#F4F4F5] pl-5 mb-3" ,activeCard && 'bg-primary')}>
        <img src={img} alt="" />
        <h6 className={cn('text-sm text-ash',activeCard && 'text-white')}>{name}</h6>
    </button>
  )
}

export default NewIncidentsCard