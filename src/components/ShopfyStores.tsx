'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`

const stores = [
    {
        image: "/images/shopify-store-1.png",
        quote: "D281 showed us how to get started, what to do, and how to do it.",
        name: "Jason Scer"
    },
    {
        image: "/images/shopify-store-1.png",
        quote: "We had no idea how to get started but D281 showed us the way. And we were able to create something amazing.",
        name: "Elon Musk"
    }, 
    {
        image: "/images/shopify-store-1.png",
        quote: "The team of D281 is amazing, filled with great enginners and great software development and design team. They helped us create something amazing",
        name: "Miguel Eglesias"
    }
]

const gradient03 = 'bg-gradient-to-br from-red-400 to-blue-600'; // Yes // Yes


const ShopfyStores = () => {
    return ( 
        <section className='mt-10 py-10 md:py-20 bg-[#f6f5f4] max-w-screen-2xl mx-auto rounded-3xl'>
            <div className='p-4 mx-auto relative z-10 items-center justify-around text-center flex flex-col lg:flex-row'>
                <div className={`text-3xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent ${gradient03} bg-opacity-50 font-semibold`}>
                Explore Nosso Trabalho <br />
                </div>

                <Link href="/portfolio">
                    <button className="px-4 text-md md:text-2xl py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                        Acessar Portfólio
                    </button>
                </Link>
                </div>
        </section>
     );
}


 
export default ShopfyStores;