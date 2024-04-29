import React from 'react';
import Image from 'next/image';
import Graphics from '@/components/ui/Graphics';
import Phone from './ui/Phone';
import Laptop from './ui/Laptop';
import Mansory from './ui/Mansory';

const WebDesign = () => {
    return ( 
      <section className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2'>
      <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600 bg-opacity-50 font-semibold'>
            Web Design de ponta
      </div>
      <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
        Nós criamos soluções responsivas de design para a seu empresa com o <span className='font-bold'>Tailwind.css</span>, nosso principal ingrediente.
      </p>
      <Graphics/>
      </section>
     );
}
 
export default WebDesign;