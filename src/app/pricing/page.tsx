'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import { PiCheckCircleFill } from 'react-icons/pi';
import DropDownMenu from "@/components/ui/DropDownMenu";
import Navbar from "@/components/Navbar";


import React from "react";
import { features } from "process";
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