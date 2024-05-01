'use client'
import React from 'react';
import Image from 'next/image';

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
        <section className='mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl'>
            <div className='p-4 mx-auto relative z-10 w-full'>
                <div className={`text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent ${gradient03} bg-opacity-50 font-semibold`}>
                Lojas Shopify <br />
                </div>

                <p className='mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto'>
                Nós criamos lindas lojas da Shopify que são desenvolvidas para converter.
                </p>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 items-center justify-center px-10'>
                    {stores.map((store, index) => (
                        <div
                        key={index}
                        className='flex flex-col items-center align-items-center justify-center mt-10 md:2/3 mx-auto'
                        >
                            <div className='flex flex-col items-center justify-center'>
                                <Image
                                    src={store.image}
                                    alt='shopify store'
                                    width={200}
                                    height={200}
                                    className='rounded-xl mx-auto'
                                >
                                </Image>
                                <p className='text-neutral-800 font-bold text-lg mt-4 text-center'>
                                        &quot;{store.quote}&quot;
                                </p>
                                <p className='text-neutral-800 font-bold text-lg mt-4 text-center'>
                                    {" "}
                                    - {store.name}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}


 
export default ShopfyStores;