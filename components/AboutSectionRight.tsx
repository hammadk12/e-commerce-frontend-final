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
          <div className="w-full md:w-1/2 h-auto relative">
            <Image src={imageUrl} alt={altText} width={width} height={height} objectFit='cover' />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-3">The End</h2>
            <p>Ended in 2024</p>
          </div>
        </div>
      );
    };

export default AboutSectionRight