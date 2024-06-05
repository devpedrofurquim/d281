import React from "react";
import { CardHoverEffect } from "./ui/CardHoverEffects";


const services = [
    {
        title: 'Next JS',
        description: 'Desenvolvido para uma experiência de desenvolvimento mais rápida e eficiente, o Next.js é uma ferramenta de construção de aplicativos JavaScript que permite criar aplicativos mais rápidos e escaláveis',
        link: '/web',
        icon: '/brands/next.png'
    },
    {
        title: 'TypeScript',
        description: 'Um suplemento de linguagem de programação para JavaScript, o TypeScript ajuda a melhorar a legibilidade e a manutenção do código, fornecendo ferramentas de análise de tipo e compilação estática.',
        link: '/apps',
        icon: '/brands/typescript.png'
    },
    {
        title: 'React',
        description: 'Uma biblioteca de UI de JavaScript popular, o React permite criar interfaces de usuário dinâmicas e escaláveis, com um foco em componentes reutilizáveis e stateless.',
        link: '/web-2',
        icon: '/brands/react.png'
    },
    {
        title: 'Tailwind CSS',
        description: 'Uma biblioteca de estilização CSS flexível e personalizável, o Tailwind CSS ajuda a simplificar o processo de estilização, permitindo criar layouts rápidos e consistente em aplicativos.',
        link: '/apps-2',
        icon: '/brands/tailwind.png'
    },
    {
        title: 'Node JS',
        description: 'Uma plataforma de execução de JavaScript no lado do servidor, o Node.js permite criar aplicativos escaláveis e performáticos, com um foco em event-driven I/O e threads.',
        link: '/web-3',
        icon: '/brands/node.png'
    },
    {
        title: 'Express JS',
        description: 'Uma biblioteca de framework de aplicativo web para Node.js, o Express.js permite criar aplicativos web escaláveis e flexíveis, com suporte a rotas, middlewares e templates.',
        link: '/apps-3',
        icon: '/brands/express.webp'
    }
]


const Services = () => {
    return ( 
        <section className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2 max-w-5xl'>
            <div className={`text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-r  from-cyan-400 to-blue-600 bg-clip-text text-transparent bg-opacity-50 font-semibold`}>
            Tecnologias
            </div>
            <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4'>
            Com expertise em uma ampla gama de tecnologias, entregamos soluções personalizadas para nossos clientes.
            </p>
            <CardHoverEffect items={services}/>
    </section>
    );
}
 
export default Services;