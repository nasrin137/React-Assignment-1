import { cn } from "../../Utils"

function Container({children,classname}) {
  return (
    <div className={cn("w-full mx-auto max-w-screen-xl px-2.5",classname)}>
        {children}
    </div>
  )
}

export default Container