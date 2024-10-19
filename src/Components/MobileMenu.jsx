import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function MobileMenu({toggleMenu}) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
    <div className='flex justify-between items-center pb-6'>
    <button onClick={toggleMenu}>
        <AiOutlineClose className='text-black text-2xl'/></button>
    </div>
        <div className='space-y-4'>
        <ul  className="flex justify-between items-center gap-5">
             {
                navItems.map(({label,link},i)=>(
                    <li key={i}><Link to={link}>{label}</Link></li>
                   
                ))
            }
            </ul>
        </div>
</div>
  )
}

export default MobileMenu