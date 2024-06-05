import React from 'react';
import Graphics from './ui/Graphics';

const gradient01 = 'bg-gradient-to-br from-blue-400 to-fuchsia-600'


const Websites = () => {
    return ( 
        <section className='p-4 mx-auto relative z-10 max-w-screen-2xl pt-10 md:pt-20 px-2'>
        <div className={`text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent ${gradient01} bg-opacity-50 font-semibold`}>
        Nossos Serviços
        </div>
        <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
        Desde o design de website até ao gerenciamento de ecommerce, oferecemos uma ampla gama de serviços para ajudar a crescer seu negócio.
        </p>
        <Graphics/>
    </section>
     );
}
 
export default Websites;