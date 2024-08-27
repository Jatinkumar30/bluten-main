import Image from 'next/image';
import React from 'react';
import { Manrope, Sora } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className='flex z-0 flex-col md:flex-row justify-between items-center m-4'>
      <div className='flex flex-col md:flex-row items-center w-full md:justify-between '>
        <Image src='/Logo.svg' height={150} width={150} alt='logo' className='md:ml-20 mb-4 md:mb-0 ' />
        
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-14 w-full md:w-auto'>
          <div className='relative w-full md:w-auto'>
            <input 
              type="search" 
              placeholder='Suchen' 
              className='relative rounded-full w-full md:w-80 pl-3 pt-2 pb-2 font-medium bg-[#EEF7F7] text-black placeholder-[#62C3C6]' 
            />
            <Image src='/Search.svg' height={20} width={20} alt='search' className='hidden sm:block absolute left-3 top-2 md:left-72 md:top-3' />
          </div>

          <div className="hidden md:flex gap-3 bg-[#62C3C64D] w-52 pl-6 rounded-lg items-center">
            <button className={`${sora.className} pt-2 pb-2 font-semibold text-[18px] text-[#365758]`}>
              Sortieren nach
            </button>
            <Image src="/Arrow_down.svg" height={15} width={15} alt="arrow" />
          </div>

          <div className="hidden md:flex gap-3 bg-[#62C3C64D] w-52 pl-6 rounded-lg items-center">
            <button className={`${sora.className} pt-2 pb-2 font-semibold text-[18px] text-[#365758]`}>
              Verfügbarkeit
            </button>
          </div>

          <button className=' hover:scale-110 transition-all hidden sm:block'>
            <Image src='menuBtn.svg' height={50} width={50} alt='menu button'/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
