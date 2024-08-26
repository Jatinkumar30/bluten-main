'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [active, setActive] = useState('Rezept einlösen');
    const [isOpen, setIsOpen] = useState(false);
    
    const linkItems = [
        { href: '/', label: 'Rezept einlösen' },
        { href: '/', label: 'Live Bestand' },
        { href: '/', label: 'Videosprechstunde' },
        { href: '/', label: 'FAQs' },
        { href: '/', label: 'Kontakt' },
    ];

    return (
        <nav className='flex z-0 flex-col md:flex-row p-4 justify-between items-center'>
            <div className='flex justify-between w-full md:w-auto'>
                <div>
                    <div className='relative'>
                        <input 
                            type="search" 
                            placeholder=' Suchen' 
                            className='relative rounded-full w-80 pl-3 pt-2 pb-2 font-medium bg-[#EEF7F7] text-black placeholder-[#62C3C6]' 
                        />
                        <Image src='/Search.svg' height={20} width={20} alt='search' className='  absolute left-72 top-3' />
                    </div>
                </div>
                <button 
                    className='md:hidden p-2'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image src='/menu.png' height={30} width={30} alt='menu' />
                </button>
            </div>

            <div className={`md:flex gap-4 md:gap-8 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                {linkItems.map((item) => (
                    <Link 
                        href={item.href} 
                        key={item.label} 
                        className={`flex justify-center items-center sm:justify-start gap-4 hover:scale-110 transition-all ${active === item.label ? "font-bold" : ""} mt-4 md:mt-0`}  // Add mt-4 for mobile spacing
                        onClick={() => {
                            setActive(item.label);
                            if (window.innerWidth < 768) setIsOpen(false); // Close menu on mobile after clicking
                        }}
                    >
                        <Image 
                            src={active === item.label ? '/leaf.svg' : '/lightLeaf.svg'} 
                            height={10} 
                            width={10} 
                            alt="icon" 
                        />
                        <button>{item.label}</button>
                    </Link>
                ))}

                {/* Cart icon displayed below the links on mobile */}
                <div className='flex justify-center mt-4 md:hidden'>
                    <Image 
                        src='/Cart.svg' 
                        height={40} 
                        width={40} 
                        alt='cart' 
                        className='cursor-pointer hover:scale-110' 
                    />
                </div>
            </div>

            {/* Cart icon for desktop view */}
            <div className='hidden md:flex gap-5 mt-4 md:mt-0'>
                <Image 
                    src='/Cart.svg' 
                    height={40} 
                    width={40} 
                    alt='cart' 
                    className='cursor-pointer hover:scale-110' 
                />
                <button 
                    className='bg-[#ECFEAA] text-[#045A5C] text-sm hover:scale-110 py-2 px-4 rounded-tl-3xl rounded-br-3xl'
                >
                    Anmelden
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
