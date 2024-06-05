import React from 'react';
import Image from 'next/image';

const Mansory = () => {
    return ( 



<div className="grid gap-4">
    <div>
        <Image className="h-auto max-w-full rounded-lg" width={500} height={500} src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500}  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500}  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500}  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500}  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500}  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
        </div>
    </div>
</div>


     );
}
 
export default Mansory;
