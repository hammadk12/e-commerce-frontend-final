import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface AboutSectionLeftProps {
    imageUrl: string;
    altText: string;
    heading: string;
    content: string;
    width: number;
    height: number;
}

const AboutSectionLeft: React.FC<AboutSectionLeftProps> = ({ imageUrl, altText, heading, content, width, height }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-10 border border-gray-800 mx-20">
      <div className="w-full md:w-1/2 max-w-md mx-auto">

        <Image src={imageUrl} alt={altText} width={width} height={height} className='w-full h-auto p-5 border border-pink-800' style={{ objectFit: 'contain' }}/>
      
      </div>
  
      <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <h2 className='text-2xl font-bold mb-3'>{heading}</h2>
        <p>{content}</p>
      </div>
      </div>
  );
};

export default AboutSectionLeft;