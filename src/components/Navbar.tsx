'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import DropDownMenu from '@/components/DropDownMenu'

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
        md:flex space-x-10 items-center text-slate-300 bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to neutral-400 bg-opacity-50'>
          <div className='hover:text-gray-50'>
            Desenvolvimento de Websites
          </div>
          <div className='hover:text-gray-50'>
            Design de Ecommerce
          </div>
          <div className='hover:text-gray-50'>
            Preços
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
      </div>
    </section>
  );
};

export default Navbar;
