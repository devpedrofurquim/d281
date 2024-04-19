import Image from "next/image";
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="w-full md:items-center md:justify-center text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar/>
    </main>
  );
}
