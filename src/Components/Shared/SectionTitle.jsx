import { cn } from "../../Utils"


function SectionTitle({children,className}) {
  return (
    <div className={cn("flex justify-between items-center text-[#000000] font-bold",className)}>
         {children}
    </div>
  )
}

export default SectionTitle