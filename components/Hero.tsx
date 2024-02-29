import React from 'react'

// defining types 
interface HeroProps {
    heading: string;
    message: string;
}

// taking heading and message props to display
const Hero: React.FC<HeroProps> = ({ heading, message }) => {
    console.log(heading, message)
  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]'/>
        <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
            <h2 className='text-5xl font-bold text-white'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Shop</button>
        </div>
    </div>
   
  )
}

export default Hero