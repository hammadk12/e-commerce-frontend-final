import { useRouter } from 'next/router';
import React from 'react'

// defining types 
interface HeroProps {
    heading: string;
    message: string;
    message2: string;
    redirectPath: string;
}

// taking heading and message props to display
const Hero: React.FC<HeroProps> = ({ heading, message, message2, redirectPath }) => {
  const router = useRouter();
    console.log(heading, message)

    // Function to handle button click
    const handleCLick = () => {
      router.push(redirectPath);
    };

  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold text-white'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border' onClick={handleCLick}>{message2}</button>
        </div>
    </div>
   
  )
}

export default Hero