import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Video = () => {
    return ( 
        

<video className="md:w-[50%] max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mx-auto" controls preload="fill" autoPlay={true}>
  <source src="/videos/video.mp4" type="video/mp4"/>
  <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
  Your browser does not support the video tag.
</video>

     );

}

export default Video;