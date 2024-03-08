import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const Instagramimg = ({socialImg}) => {
  return (
    <div className='relative w-full' style={{ paddingTop: '100%' }}>
      <div className='absolute top-0 left-0 w-full h-full group'>
        <Image
        src={socialImg} 
        alt='/' 
        width={1000}
        height={1000}
        className='object-cover w-full h-full'
        />
        
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 group-hover:bg-black/40 transition duration-300 ease-in-out'/>
        <p className='hidden group-hover:flex justify-center items-center absolute inset-0 text-white z-10'>
          <FaInstagram size={30} className='z-10'/>
        </p>
    </div>
    </div>
  );
};

export default Instagramimg