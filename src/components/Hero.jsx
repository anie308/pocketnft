import React from 'react'
import HeroImg from '../assets/heroImg.webp'
function Hero() {
  return (
    <div className='mt-[20px] p-[30px_20px] lg:p-[50px] text-white font-oxanium flex flex-col justify-center items-center w-full'>
        
        
        <img src={HeroImg} alt="" className='my-[20px] w-[100%] lg:w-[70%] mt-[20px]' />
        <p className='text-[20px] lg:text-[50px] font-[700] text-center mt-[20px]'>WELCOME TO POCKETNFTS</p>
        <p className='mt-[10px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia, soluta tenetur omnis eveniet <br /> iure beatae architecto magni consequuntur numquam iste. Provident veniam unde amet hic natus quisquam corporis eos?</p>
        <div className='w-full lg:w-fit mt-[40px] flex flex-col lg:flex-row items-center space-y-[20px] lg:space-y-0 lg:space-x-[25px] xl:space-x-[60px]'>
        <button className=' font-oxanium text-[16px] shadow bg-[#AD1AAF] text-white w-full lg:w-fit p-[10px_20px] lg:p-[10px_30px] xl:px-[40px]'>White Paper</button>
        <button className=' font-oxanium text-[16px] shadow bg-[#AD1AAF] text-white w-full lg:w-fit p-[10px_20px] lg:p-[10px_20px]'>
          <a href="https://opensea.io/collection/mutant-ape-yacht-club" target="_blank" rel="noopener noreferrer">Browse Collection</a>
          </button>
        </div>
    </div>
    
  )
}

export default Hero