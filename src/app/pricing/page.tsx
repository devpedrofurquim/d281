'use client';
import Navbar from "@/components/Navbar";


import React from "react";
import Plans from "./components/Plan";
import Faq from "@/components/faq";

const Pricing = () => {
    return (
      <main className="w-full text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
           <Navbar
          scrollToWebsites={() => {}}
          scrollToDesign={() => {}}
          scrollToStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />
        <div className="min-h-screen md:items-center flex flex-col flex-grow w-full pt-10 md:pt-20">
          <Plans />
        </div>
        <Faq />
      </main>
    );
  };
  
  export default Pricing;