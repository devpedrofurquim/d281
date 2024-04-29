'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import DropDownMenu from '@/components/ui/DropDownMenu'

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  }

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  }

  return (
    <section>
      <div className='p-6 md:p-10 flex items-center justify-between z-50'>
        {/* Logo D281 */}
        <div>
            <Link className='cursor-pointer' href="/"/>
            <Image 
              priority
              src={"/logo/logo.svg"}
              alt='D281'
              width={100}
              height={100}
              className='w-10 h-10 md:w-14 md:h-14'
            />
        </div>
        {/* Navbar Items */}
        <div className='cursor-pointer hidden 
        md:flex  gap-10 items-center text-slate-300 bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to neutral-400 bg-opacity-50'>
          <div className='hover:text-gray-50'>
          Home
          </div>
          <div className='hover:text-gray-50'>
          Sobre Nós
          </div>
          <div className='hover:text-gray-50'>
          Serviços
          </div>
          <div className='hover:text-gray-50'>
          Preços
          </div>
          <div className='hover:text-gray-50'>
          Blog
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className='flex md:hidden'>
          {isDropDownVisible ? (
            // Display Close Icon when the Drop Down is visible
            <div
              onClick={toggleDropDown}
              className='w-8 h-8 text-slate-300 cursor-pointer'
            >
              <X/>
              <DropDownMenu onClose={closeDropDown}/>
            </div>
          ) : (
            <AlignJustify
            onClick={toggleDropDown}
            className='w-8 h-8 text-slate-300 cursor-pointer'
            />
          )}
        </div>
      {/* Contact Button */}
        <div className='hidden md:flex'>
          <Link href={'/contact'} className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-gray-50'>
          Faça um Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
