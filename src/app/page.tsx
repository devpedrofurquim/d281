'use client';

import Navbar  from '@/components/Navbar';
import Hero from '@/components/Hero';
import Websites from '@/components/Websites'
import ShopfyStores from '@/components/ShopfyStores'
import Services from "@/components/Services";
import Faq from "@/components/faq";
import { useRef } from "react";

export default function Home() {

  const websitesRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const shopifyRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsites = () => {
    websitesRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
  }

  const scrollToDesign = () => {
    designRef.current?.scrollIntoView({behavior: "smooth"});
  }

  const scrollToStores = () => {
    shopifyRef.current?.scrollIntoView({behavior: "smooth"});
  }


  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({behavior: "smooth"});
  }

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <main className="w-full md:items-center md:justify-center text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsites={scrollToWebsites}
        scrollToDesign={scrollToDesign}
        scrollToStores={scrollToStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />
      <Hero/>
      <div ref={websitesRef} id="websites">
        <Websites/>
      </div>
      <div ref={shopifyRef}>
        <ShopfyStores/>
      </div>
      <div ref={servicesRef} id="tecnologias">
        <Services/>
      </div>
      <Faq/>
    </main>
  );
}
