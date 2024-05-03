import React from "react";
import { CardHoverEffect } from "./ui/CardHoverEffects";


const services = [
    {
        title: 'Desenvolvimento Web',
        description: 'A technology company that builds economic infrastructure for the internet.',
        link: '/web',
        icon: '/brands/brand-1.svg'
    },
    {
        title: 'Desenvolvimento Web',
        description: 'A technology company that builds economic infrastructure for the internet.',
        link: '/apps',
        icon: '/brands/brand-1.svg'
    },
    {
        title: 'Desenvolvimento Web',
        description: 'A technology company that builds economic infrastructure for the internet.',
        link: '/web-2',
        icon: '/brands/brand-1.svg'
    },
    {
        title: 'Desenvolvimento Web',
        description: 'A technology company that builds economic infrastructure for the internet.',
        link: '/apps-2',
        icon: '/brands/brand-1.svg'
    },
    {
        title: 'Desenvolvimento Web',
        description: 'A technology company that builds economic infrastructure for the internet.',
        link: '/web-3',
        icon: '/brands/brand-1.svg'
    },
    {
        title: 'Desenvolvimento Web',
        description: 'A technology company that builds economic infrastructure for the internet.',
        link: '/apps-3',
        icon: '/brands/brand-1.svg'
    }
]


const Services = () => {
    return ( 
        <section className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2'>
            <div className={`text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent bg-opacity-50 font-semibold`}>
            Alavanque seu negócio com <br />os nosso serviços
            </div>
            <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
            Desde Desenvolvimento de websites até o desenvolvimento de aplicativos e software customizados
            </p>
            <CardHoverEffect items={services}/>
    </section>
    );
}
 
export default Services;