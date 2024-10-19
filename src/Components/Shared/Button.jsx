import React from 'react'
import { cn } from '../../Utils'

function Button({children,classname}) {
  return (
    <button className={cn("bg-primary text-white font-bold text-sm px-[25px] py-[8px] gap-5 rounded-[6px] w-[150px] h-[40px]",classname)}>
        {children}
    </button>
  )
}

export default Button;