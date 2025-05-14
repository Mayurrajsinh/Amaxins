import { CircleUserRound, Menu } from 'lucide-react';
import React from 'react'
function Navbar() {
    const logoURL = "/Amaxlogo.png";
    const nav_links = [
        {id:0,link:'personal'},
        {id:1,link:'Business'},
        {id:2,link:'Renewal'},
        {id:3,link:'Claims'},
        {id:4,link:'Support'},

    ]


    
  return (
<header className='bg-white-500 flex items-center justify-between px-4 py-2 fixed top-0 w-full bg-white'>
  
        <button >
            {/* <img src={logo}/> */}
            <img src={logoURL}/>
        </button>
        <ul className='bg-whit-800 hidden gap-1.5 justify-center md:flex   '>
            {
                nav_links.map((link, index) => (
                <li key={index} className=' px-6 leading-[3] rounded-full hover:bg-orange-100 hover:text-orange-400 cursor-pointer'>
                    {link.link}
                </li>
                ))
            }
          
       
        <span className="inline-flex items-center gap-2  px-6 py-4 rounded-full bg-green-500 text-green-100 shadow-[0px 7pnline-flex items-center gap-2 px-6 py-4 rounded-full bg-green-500 text-green-100 shadow-[0px_7px_24px_rgb(183,241,193)] cursor-pointer">
            <CircleUserRound className="w-5 h-5" />
            <span className="text-sm font-bold ">My Policy</span>
        </span>
  
        </ul>
        
<Menu className='cursor-pointer h-12 w-12 p-3 rounded-full block md:hidden ' />


</header>
  )
}

export default Navbar