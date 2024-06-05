import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Phone from '@/components/ui/Phone';
import Video from '@/components/ui/Video';
import Laptop from '@/components/ui/Laptop';
import Mansory from '@/components/ui/Mansory';
import SliderOne from './ui/Slider';
import { Layout } from './LayoutGrid';
import Graphics from './ui/Graphics';

const gradient01 = 'bg-gradient-to-br from-blue-400 to-fuchsia-600' // Yes // Yes
const gradient02 = 'bg-gradient-to-br from-cyan-400 to-blue-600'; // Yes // Yes
const gradient03 = 'bg-gradient-to-br from-teal-400 to-blue-600'; // Yes // Yes


const Websites = () => {
    return ( 
        <section className='p-4 mx-auto relative z-10 max-w-screen-2xl pt-10 md:pt-20 px-2'>
        <div className={`text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent ${gradient01} bg-opacity-50 font-semibold`}>
        Desenvolvimento <br />de Websites
        </div>
        <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
        Criamos sites deslumbrantes e totalmente responsivos que cativam seu público e convertem visitantes em clientes fiéis.
        </p>
        <Graphics/>
    </section>
     );
}
 
export default Websites;