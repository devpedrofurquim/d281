import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Footer from "./Footer";

const Faq = () => {
    return ( 
        <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-t-3xl flex flex-col justify-center items-center">
             <div className={`text-4xl pb-5 pt-5 md:text-7xl text-center px-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-opacity-50 font-semibold`}>
                Dúvidas Frequentes <br />
            </div>
            <Accordion type="single" collapsible className="text-black w-full px-10 lg:px-96">
            <AccordionItem value="item-1">
                <AccordionTrigger>Qual o tempo médio para entregar?</AccordionTrigger>
                <AccordionContent>
                Para desenvolvimento de websites, o prazo é de 3 a 5 dias, enquanto para software customizados, o tempo médio de entrega é de 3-6 meses, dependendo da complexidade do projeto. Se você está pensando em desenvolver um projeto e gostaria de saber mais sobre o tempo e o custo envolvidos, entre em contato conosco para uma conversa personalizada!
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Como você trata revisões e iterações durante o desenvolvimento?</AccordionTrigger>
                <AccordionContent>
                Nossas revisões ilimitadas garantem que o seu projeto seja exatamente o que você precisa. Trabalhamos estreitamente com os clientes para entender suas necessidades e utilizamos metodologias ágeis para iterar e refinar nosso trabalho.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Qual é sua abordagem para testes e garantia de qualidade?</AccordionTrigger>
                <AccordionContent>
                Nossa abordagem para testes e garantia de qualidade é baseada em um processo aprovado e iterativo, que inclui análise de requisitos, testes automatizados e manuais, revisão de código e entrega de produtos que atendam a padrões altos de qualidade. Isso garante que nossos produtos sejam seguros, escaláveis e fáceis de usar.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Footer/>
        </section>
     );
}
 
export default Faq;