import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const logos = [
    {
        image: '/brands/brand-1.svg'
    },
    {
        image: '/brands/brand-1.svg'
    },
    {
        image: '/brands/brand-1.svg'
    },
]

const Brands = () => {
    return ( 
    <section>
        <div className="p-4 mx-auto relative z-10 w-full pt-20 md::pt-32">
            <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-opacity-50 font-semibold">
                <h1>As melhores marcas <br /> nos escolhem</h1>
            </div>
            <p className='mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto'>
                Desde negócios pequenos até grandes corporações, nós temos o que você precisa para crescer o seu negócio.
            </p>

            <div className="grid grid-cols-3 items-center justify-center mx-auto md:w-3/5 cursor-pointer">
                {
                    logos.map((logo, i) => (
                        <div key={i} className="p-4 md:p-20">
                            <Image
                                priority
                                src={logo.image}
                                width={400}
                                height={400}
                                alt="Logo"
                                className="w-full h-auto max-w-[100px] rounded-lg"
                            />
                        </div>
                    ))
                }
            </div>
            
            <div className={cn(
                    "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center"
                )}>
                    &quot;Nós nos desfaszemos de quase uma duzia de diferentes ferramentas por cause do que a D281 realizou em nossa empresa.&quot;
            </div>

            <div className="items-center flex justify-center flex-col text-white">
                <Image
                    src={"/brands/brand-1.svg"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="pt-2 xl:pt-0 w-10 xl:w-14"
                />

                <div className="text-center">
                    <div className="text-sm font-medium pt-4">Elon Musk</div>
                    <div className="text-sm">CEO, Tesla</div>
                </div>
            </div>
        </div>
    </section>
    
);
}
 
export default Brands;