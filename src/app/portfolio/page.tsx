'use client'

import Navbar from "@/components/Navbar";
import Faq from "@/components/faq";
import React from "react";

const Portfolio = () => {
    return ( 
    <main className="w-full md:items-center md:justify-center text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar   scrollToWebsites={() => {}}
        scrollToDesign={() => {}}
        scrollToStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
        />
        <section className="p-4 h-screen mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1 className='text-2xl pb-5 md:text-2xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 font-semibold'>
            Está página ainda está em desenvolvimento
        </h1>
        </section>
        <Faq/>
    </main> );
}
 
export default Portfolio;