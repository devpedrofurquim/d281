import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
    return ( 
        <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl flex flex-col justify-center items-center">
             <div className={`text-4xl pb-5 pt-5 md:text-7xl px-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-opacity-50 font-semibold`}>
                Possui duvidas? <br />
            </div>
            <p className='mt-4 text-lg font-normal text-black max-w-lg mx-auto px-4'>
            Aqui estão as respostas.
            </p>
            <Accordion type="single" collapsible className="text-black w-1/2">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </section>
     );
}
 
export default Faq;