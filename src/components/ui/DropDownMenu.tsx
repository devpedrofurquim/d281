import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface DropDownMenuProps {
    onClose: () => void
}


const DropDownMenu : React.FC<DropDownMenuProps> = ({onClose}) => {
    return (
        <motion.div className='w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-300 p-5 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl'
        initial={{opacity: 0, y: '-80%'}}
        animate={{opacity: 1, y: '0'}}
        exit={{opacity: 0, y: '-100%'}}
        transition={{duration: .5}}
        >
            <div className='flex flex-col space-y-10'>
                <Link href="/pricing" className='hover:text-gray-50 text-black text-2xl'>
                    Preço
                </Link>
                <Link href="/contact" className='hover:text-gray-50 text-black text-2xl'>
                    Entre em Contato
                </Link>
                <Link href="/book" className='hover:text-gray-50 text-black text-2xl'>
                    Agende uma reunião
                </Link>
                

            </div>
        </motion.div>
    )
}

export default DropDownMenu