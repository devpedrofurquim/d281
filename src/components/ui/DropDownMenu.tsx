import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const DropDownMenu = () => {
    return (
        <motion.div className='w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-300 p-5 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl'
        initial={{opacity: 0, y: '-80%'}}
        animate={{opacity: 1, y: '0'}}
        exit={{opacity: 0, y: '-100%'}}
        transition={{duration: .5}}
        >
            <div className='flex flex-col space-y-10'>
                <Link href="/" className='text-black text-2xl'>
                    Home
                </Link>
                <Link href="/contact" className='text-black text-2xl'>
                    Entre em Contato
                </Link>
                <Link href="/book" className='text-black text-2xl'>
                    Agende uma consultoria
                </Link>
                <Link href="/portfolio" className='text-black text-2xl'>
                    Portfólio
                </Link>
                <Link href="/pricing" className='text-black text-2xl'>
                    Preços
                </Link>
            </div>
        </motion.div>
    )
}

export default DropDownMenu