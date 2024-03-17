import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

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
  const [isVisible, setIsVisible] = useState(true);

    // Function to handle button click
    const handleClick = () => {
      router.push(redirectPath);
    };

    // function to change visibility when scrolled 190 px
    useEffect(() => {
      const checkScroll = () => {
        setIsVisible(window.scrollY <= 190);
      };

      window.addEventListener('scroll', checkScroll);
      
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }, []);

    return (
      <div className='p-8 relative flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]'/>
        <div className={`p-5 text-white z-[2] mt-[-10rem] transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className='text-4xl lg:text-9xl md:text-6xl font-bold text-white mt-20'>{heading}</h2>
            <p className='py-5 text-2xl'>{message}</p>
            <button className='px-8 py-2 border' onClick={handleClick}>{message2}</button>
        </div>
      </div>
  )
}

export default Hero