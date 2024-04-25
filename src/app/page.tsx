import Image from "next/image";
import Navbar  from '@/components/Navbar';
import Hero from '@/components/Hero';
import SliderOne from '@/components/ui/Slider';
import { Spotlight } from "@/components/ui/Spotlight";
import Websites from '@/components/Websites'

export default function Home() {
  return (
    <main className="w-full md:items-center md:justify-center text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar/>
      <Spotlight
      className=" left-80"
      fill="gray"
      />
      <Hero/>
      <SliderOne/>
      <Websites/>
    </main>
  );
}
