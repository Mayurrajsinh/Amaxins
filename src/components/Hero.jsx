import React from 'react'
import { Car, Bike, HeartPulse, Plane, LayoutGrid } from 'lucide-react';
// // text-white px-25 py-2 text-sm font-medium rounded-full transition-all
//              bg-gradient-to-r from-[rgba(13,53,148,0.898)] to-[#35d3e1] hover:opacity-90  shadow-[3px_3px_6px_rgb(191,195,207)]
function Hero() {

const minibox = [
  { id: 0, name: 'Car', icon: Car },
  { id: 1, name: 'Bike', icon: Bike },
  { id: 2, name: 'Health', icon: HeartPulse },
  { id: 3, name: 'Travel', icon: Plane },
  { id: 4, name: 'More', icon: LayoutGrid },
  { id: 4, name: 'More', icon: LayoutGrid },
  { id: 4, name: 'More', icon: LayoutGrid },
  { id: 4, name: 'More', icon: LayoutGrid }
];

  return (
<div className="text-center px-4 grid items-center h-lvh place-content-center bg-[url('/bg-img.png')] bg-cover bg-center">

      <h2 className="text-[#264A9F]  font-bold text-6xl mb-6 ">Trusted Naam, Fantastic Kaam!</h2>
      
   
      
      <div className=" mx-auto flex  flex-wrap gap-3 justify-items-center  w-[710px]">
    {minibox.map((item, index) => {
  const Icon = item.icon;
  const isLast = index === minibox.length - 1; // check if last item

  return (
    <div
      key={item.id}
      className={`py-2 px-6 flex gap-2 rounded-full cursor-pointer text-center hover:bg-amber-100
        ${isLast 
          ? 'bg-black hover:bg-gray-800' 
          : 'bg-orange-100 text-orange-400 hover:bg-amber-100'}
      `}
    >
      <Icon className={`w-6 h-6 rounded-md ${isLast ? 'text-white' : 'text-orange-400'}`} />
      <p className={`leading-6 text-sm font-medium ${isLast ? 'text-white' : 'text-orange-400'}`}>
        {item.name}
      </p>
    </div>
  );
})}

      </div>   
    </div>

    
  );
}

export default Hero