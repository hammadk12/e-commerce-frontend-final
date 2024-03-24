import React from 'react'
import Image from 'next/image'

interface ImageCardProps {
    imageUrl: string;
    altText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText }) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden relative w-full h-[500px] md:h-[300px]'>
        <Image 
            src={imageUrl} 
            alt={altText} 
            layout='fill'
            style={{ objectFit: 'cover'}}
        />
    </div>
  )
}

export default ImageCard