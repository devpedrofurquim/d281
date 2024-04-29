import React from 'react';
import Link from 'next/link';
import SliderOne from './ui/Slider';

const Hero = () => {
    return (
        <section className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2'>
            <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 font-semibold'>
            Construindo software <br /> de qualidade
            </div>
            <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
            Soluções feitas à mão com <span className='font-bold'>Next.js</span>, <span className='font-bold'>TypeScript</span>, <span className='font-bold'>React</span> e <span className='font-bold'>Tailwind</span>, pensadas exclusivamente para o seu negócio.
            </p>
            <Link
            href='/book'
            className='cursor-pointer flex items-center text-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white'
            >
            <p>Consulta gratuita</p>
            </Link>
            <SliderOne/>
        </section>
    )
}

export default Hero;