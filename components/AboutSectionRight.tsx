import React from 'react'
import Image from 'next/image';

interface AboutSectionRightProps {
    imageUrl: string;
    altText: string;
    heading: string;
    content: string;
    width: number;
    height: number;
}

const AboutSectionRight: React.FC<AboutSectionRightProps> = ({ imageUrl, altText, heading, content, width, height }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 p-4">
      <div className="w-full md:w-1/2 h-auto relative shadow-lg rounded-lg overflow-hidden">
        {/* Set container to desired aspect ratio */}
        <div className="relative w-full mb-40">
        <Image src={imageUrl} alt={altText} width={width} height={height} objectFit='cover' className='absolute top-0 left-0 w-full h-full'/>
      </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <h2 className='text-2xl font-bold mb-3'>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutSectionRight;