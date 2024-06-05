import React from 'react';
import Image from 'next/image';
import Graphic from '@/components/ui/Graphic';

const Graphics = () => {
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
            <Graphic
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px]"
            >
                <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Desenvolvimento de Websites
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Criamos sites deslumbrantes e totalmente responsivos que cativam seu público e convertem visitantes em clientes fiéis.
                </p>
                </div>
            </Graphic>
            <Graphic containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Web Design de ponta
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Nós criamos soluções responsivas de design para a seu empresa com o <span className='font-bold'>Tailwind.css</span>, nosso principal ingrediente.
                </p>
            </Graphic>
            <Graphic containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px]">
                <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Lojas Shopify
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Nós criamos lindas lojas da Shopify que são desenvolvidas para converter.
                </p>
                </div>
            </Graphic>
        </div>
     );
}

export default Graphics;