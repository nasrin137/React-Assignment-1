import React from 'react'
import { cn } from '../../Utils'

function Input({children,className}) {
  return (
    <div>
          <input  type="text" name="" className={cn ("w-[160px] h-[42px] rounded-md  border-[1px] bg-[#FAFAFA] py-3 px-[10px] text-[#71717A]",className)}/>{children}
    </div>
  )
}

export default Input