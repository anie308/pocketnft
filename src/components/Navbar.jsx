import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0 bg-primary shadow-md flex items-center justify-between p-[20px_15px] lg:p-[15px_25px] '>
         <div className="bg-[#AD1AAF] rounded-full blur-xl h-[70px] w-[70px] absolute"></div>
        <div>
            <p className='font-oxanium text-[20px] lg:text-[30px] text-white'>POCKETNFT</p>
        </div>
        <div>
            <button className='font-oxanium text-[16px] shadow bg-[#AD1AAF] text-white p-[8px_15px] lg:p-[8px_20px]'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar