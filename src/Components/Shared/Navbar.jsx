import { Link,Outlet } from "react-router-dom"
import Container from "./Container";
import { navItems } from "../Data";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "../MobileMenu";

function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = ()=> {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className="bg-gray">
      <Container>
       <div className="flex justify-between items-center">
       <div>
            <img src="Images/logo.png" alt="logo" />
        </div>
        <div className="hidden lg:flex justify-between items-center gap-5">
             <ul  className="flex justify-between items-center gap-8">
             {
                navItems.map(({label,link},i)=>(
                    <li className='text-sm xl:text-base text-[#71717A]  hover:text-primary transition-colors duration-150' key={i}><Link to={link}>{label}</Link></li>
                   
                ))
            }
            </ul>
           
        </div>

        <div className="flex justify-between items-center gap-5">
            <img src="Images/notification.png" alt="" />
            <div className="flex justify-between items-center">
                <img src="" alt="" />
                <div className="text-[#71717A] font-semibold text-base">
                    <h5>Usman Zafar</h5>
                    <p className="font-normal text-sm">usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>
        <button onClick={toggleMenu} className="md:hidden"><IoMdMenu></IoMdMenu></button>
        {
            isMenuOpen && <MobileMenu toggleMenu={toggleMenu}></MobileMenu>
        }

       </div>

       <div className=" w-full border border-b-[1px] border-[#3F3F46]">

        </div>

         {/* lower portion of navbar */}
       
      </Container>
      <Outlet></Outlet>
    </nav>
    
  )
}

export default Navbar