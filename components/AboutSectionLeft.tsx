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
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
      <div className="w-full md:w-1/2 h-auto relative shadow-lg rounded-lg overflow-hidden">
        <div style={{ minHeight: '400px' }}> 
        <Image src={imageUrl} alt={altText} width={width} height={height} objectFit='cover'/>
      </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <h2 className='text-2xl font-bold mb-3'>{heading}</h2>
        <p>{content}</p>
      </div>
      </div>
  );
};

export default AboutSectionLeft;