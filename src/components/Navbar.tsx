'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { AlignJustify, X } from 'lucide-react';
import DropDownMenu from '@/components/ui/DropDownMenu'

interface NavbarProps {
  scrollToWebsites: () => void;
  scrollToDesign: () => void;
  scrollToStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
  
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToWebsites,
  scrollToDesign,
  scrollToStores,
  scrollToBrands,
  scrollToServices
}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
    isDropDownVisible == true ? document.documentElement.style.overflow = "" : document.documentElement.style.overflow = "hidden"
  }

  const closeDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  }

  return (
    <section className='max-w-screen-xl justify-center items-center text-center mx-auto'>
      <div className='p-10 flex items-center justify-between z-50'>
        {/* Logo D281 */}
        <div>
            <Link className='cursor-pointer' href="/"><Image
              priority
              src={"/logo/logo.svg"}
              alt='D281'
              width={100}
              height={100}
              className='w-16 h-16 md:w-20 md:h-20'
            /></Link>
        </div>
        {/* Navbar Items */}
        <div className='cursor-pointer hidden 
        lg:flex gap-10 items-center text-white'>
          <Link href="/">
            <div className='hover:text-gray-50'>
              Home
            </div>
          </Link>
          <Link href="/#websites">
            <div className='hover:text-gray-50'>
            Serviços
            </div>
          </Link>
          <Link href="/#tecnologias">
            <div className='hover:text-gray-50'>
            Tecnologias
            </div>
          </Link>
          <Link href="/portfolio">
            <div className='hover:text-gray-50'>
            Portfólio
            </div>
          </Link>
          <Link href="/pricing">
            <div className='hover:text-gray-50'>
            Planos
            </div>
          </Link>
        </div>
        {/* Mobile Navbar */}
        <div className='flex lg:hidden'>
          {isDropDownVisible ? (
            // Display Close Icon when the Drop Down is visible
            <div
              onClick={toggleDropDown}
              className='w-8 h-8 text-slate-300 cursor-pointer'
            >
              <X/>
              <DropDownMenu/>
            </div>
          ) : (
            <AlignJustify
            onClick={toggleDropDown}
            className='w-8 h-8 text-slate-300 cursor-pointer'
            />
          )}
        </div>
      {/* Contact Button */}
        <div className='hidden lg:flex'>
          <Link href={'/contact'} className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-gray-50'>
          Faça um Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
