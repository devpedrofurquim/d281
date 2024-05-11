'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import { PiCheckCircleFill } from 'react-icons/pi';
import DropDownMenu from "@/components/ui/DropDownMenu";
import Navbar from "@/components/Navbar";

const plans = [
    {
        index: 0,
        title: "Basic",
        price: "BRL R$ 499",
        features: [
            "Fully responsible on all screens",
            "Design + Development",
            "Private Communication Channels",
            "1-3 days turnaround time",
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Standalone components tailored to your needs and easily integrated. Perfect for website elements and sections.",
        button: "Buy Now"
    },
    {
        index: 1,
        title: "Premium",
        price: "BRL R$ 1299",
        features: [
            "Fully responsible on all screens",
            "Design + Development",
            "Private Communication Channels",
            "3-5 days turnaround time",
            "React / Next.js / Tailwind CSS code",
            "24-hour support response time"
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
        button: "Buy Now"
    },
    {
        index: 2,
        title: "Enterprise",
        price: "Let's Talk!",
        features: [
            "Fully responsive on all screens",
            "React / Next.js / Tailwind CSS code",
            "Design + Development",
            "Unlimited Revisions",
            "24-hour support response time",
            "Private communication channel",
            "Priority Development Queue",
            "Dedicated Project Manager"
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
        button: "Buy Now"
    }
]


import React from "react";
import { features } from "process";

const Pricing = () => {
    return ( 
        <section className="w-full md:items-center md:justify-center text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
             <Navbar
        scrollToWebsites={() => {}}
        scrollToDesign={() => {}}
        scrollToStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
        <div className="flex items-center justify-between flex-col">
            <h1 className='text-5xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 font-semibold'>
                Escolha o seu plano
            </h1>
            <div className="mt-20 grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
                {plans.map((plan, index) => (
                    <div
                        key={plan.title}
                        className="h-full flex flex-col justify-between border rounded-3xl px-6"
                    >
                        <div className={plan.style}>
                            <div className="text-4xl flex items-center font-medium">
                            {plan.title}
                            </div>
                        </div>
                        <div className="text-3xl pt-6">{plan.price}</div>
                        <div className="py-6">{plan.description}</div>

                        <ul>
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="text-lg py-2 flex space-x-2 items-center"
                                >
                                    {
                                        index !== 2 ?
                                            <PiCheckCircleFill className="text-blue-400 mr-2 text-xl"/> :
                                            <PiCheckCircleFill className="text-green-400 mr-2 text-xl"/>

                                    }                                    
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={plan.button}>
                            {
                                index === 0 && (
                                    <Link
                                        href="#"
                                        className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-purple-900 bg-opacity-50 font-semibold"
                                    >
                                        {plan.button}
                                    </Link>
                                )
                            }
                            {
                                index === 1 && (
                                    <Link
                                        href="#"
                                        className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-purple-900 bg-opacity-50 font-semibold"
                                    >
                                        {plan.button}
                                    </Link>
                                )
                            }
                            {
                                index === 2 && (
                                    <Link
                                        href="#"
                                        className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-purple-900 bg-opacity-50 font-semibold"
                                    >
                                        {plan.button}
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
     );
}
 
export default Pricing;