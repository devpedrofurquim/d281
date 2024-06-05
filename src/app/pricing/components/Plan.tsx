import Link from "next/link";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";

const plans = [
    {
        index: 0,
        title: "Componentes",
        price: "BRL R$ 499",
        features: [
            "Plenamente responsável em todas as telas",
            "Design + Desenvolvimento",
            "Tempo de entrega de 3-5 dias",
            "Revisões ilimitadas"
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Componentes independentes personalizados para atender às suas necessidades e facilmente integráveis. Perfeitos para elementos e seções de websites.",
        button: "Contratar"
    },
    {
        index: 1,
        title: "Websites Completos",
        price: "BRL R$ 1299",
        features: [
            "Plenamente responsável em todas as telas",
            "Design + Desenvolvimento",
            "Canais de Comunicação Privados",
            "Tempo de entrega de 5-7 dias",
            "Tempo de resposta de suporte de 24 horas",
            "Revisões ilimitadas"
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Melhor para pequenas empresas e startups que necessitam de um website performático e bonito que possa converter visitantes em clientes.",
        button: "Contratar"
    },
    {
        index: 2,
        title: "Projetos Especiais",
        price: "Vamos conversar!",
        features: [
            "Plenamente responsável em todas as telas",
            "Design + Desenvolvimento",
            "Revisões ilimitadas",
            "Tempo de resposta de suporte de 24 horas",
            "Canais de Comunicação Privados",
            "Fila de Desenvolvimento Priorizada",
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Melhor para empresas que necessitam de um projeto totalmente customizado.",
        button: "Entre em Contato"
    }
]

const Plans = () => {
    return (  
        <section className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between flex-col relative">
            <h1 className='text-5xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 font-semibold'>
                Escolha o seu plano
            </h1>
            <div className="mt-20 grid xl:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
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
                                        href="https://buy.stripe.com/aEU7uM7qW7HAdoc8ww"
                                        className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-purple-900 bg-opacity-50 font-semibold"
                                    >
                                        {plan.button}
                                    </Link>
                                )
                            }
                            {
                                index === 1 && (
                                    <Link
                                        href="https://buy.stripe.com/cN27uM6mSge683S8wx"
                                        className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-purple-900 bg-opacity-50 font-semibold"
                                    >
                                        {plan.button}
                                    </Link>
                                )
                            }
                            {
                                index === 2 && (
                                    <Link
                                        href="/contact"
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
        </section> );
}
 
export default Plans;