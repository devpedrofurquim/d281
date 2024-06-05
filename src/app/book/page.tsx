"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/Navbar";
import Faq from "@/components/faq";

const Book = () => {
  return (
    <main className="w-full md:items-center md:justify-center text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Navbar
          scrollToWebsites={() => {}}
          scrollToDesign={() => {}}
          scrollToStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />
      <div className="flex flex-col w-full h-screen bg-black/[0.96] bg-grid-white/[0.02] pt-10 md:pt-20   ">
        <div className="text-4xl pb-10 md:text-6xl text-center font-semibold
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Agende uma Consultoria 
        </div>

        <InlineWidget url="https://calendly.com/d281/consultoria-gratuita" />
      </div>
      <Faq/>
    </main>
  );
};

export default Book;