'use client'

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {

    const isMediumScreen = useMediaQuery({minWidth: 768, maxWidth: 1023});
    const isSmallScreen = useMediaQuery({maxWidth: 767});

    const settings = {
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        speed: 4000,
        autoplayspeed: 1000,
        centerMode: true,
        draggable: false,
        pauseOnHover: false,
        fade: false,
        slidesToScroll: 1,
        className: 'max-w-screen-2xl mx-auto cursor-pointer center-mode'
    }

    if (isMediumScreen) settings.slidesToShow = 1.67
    else if (isSmallScreen) settings.slidesToShow = 1
    
    return (
        <div>
            <Slider {...settings}>
                <>
                <div className='rounded-md px-4 flex flex-col items-center'>
                    <Image
                        priority
                        src="/images/code-1.jpg"
                        alt='logo'
                        width={500}
                        height={500}
                        className='rounded-2xl'
                    />
                </div>
                </>
                <>
                <div className='rounded-md px-4'>
                    <Image
                        priority
                        src="/images/code-2.jpg"
                        alt='logo'
                        width={500}
                        height={500}
                        className='rounded-2xl'
                    />
                </div>
                </>
                <>
                <div className='rounded-md px-4'>
                    <Image
                        priority
                        src="/images/code-3.jpg"
                        alt='logo'
                        width={500}
                        height={500}
                        className='rounded-2xl'
                    />
                </div>
                </>
            </Slider>
        </div>
    )
}

export default SliderOne;