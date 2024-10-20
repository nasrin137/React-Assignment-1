import React from 'react'
import { cn } from '../../Utils'

function Button({children,classname,onClick}) {
  return (
    <button onClick={onClick} className={cn("bg-primary text-white font-bold text-sm px-[25px] py-[8px] gap-5 rounded-[6px] w-[150px] h-[40px] hover:text-primary hover:bg-white transition-all duration-300",classname)}>
        {children}
    </button>
  )
}

export default Button;