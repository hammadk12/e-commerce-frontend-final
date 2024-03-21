import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Image from 'next/image'
import myImage from '../public/images.jpg'

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = (( props, ref ) => {
  return (
    <div className='bg-gray-50'>
      <section ref={ref} className='container mx-auto text-left pt-20 px-10 pb-60 border-b-2 border-black'>
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold py-10'>Embracing Innovation,<br></br>Empowering Change.</h2>        
        <p className='pt-5 pb-14 text-xl'>PearTech is a pioneering technology company that blends advanced technology with user-centric designs to enhance everyday life and shape a connected future. Embracing innovation and continous improvement.</p>
        <button className='bg-black text-white px-6 py-4 text-md mr-5'>Learn More</button>
        <button className='bg-white text-black px-6 py-4 text-md border border-black'>Sign Up</button>
      </section>
      
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 pt-20">
        
      <section className="w-full md:w-1/2 text-left px-10">
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold py-10 mb-5'>Enabling individuals<br></br>to thrive & succeed.</h2>
      </section>
        
      <section className="w-full md:w-1/2 text-left">
        <p className='px-10 text-xl mb-5'>At PearTech, we have a rich history of pushing the boundaries of technology. From our humble beginnings as a small startup, we have grown into a global leader in smart devices and AI-driven applications. Our relentless pursuit of innovation has allowed us to create products that seamlessly blend cutting-edge technology with user-centric designs, enhancing everyday life and shaping a connected future.</p>
      </section>

    </section>
      
      <div className='flex justify-center items-center mt-10 mb-10 h-[500px] overflow-hidden md:px-10 sm:px-5'>
        <div className='flex justify-center items-center'>
          <Image 
            src={myImage}
            alt='Tech Meeting'
            width={1200}
            height={500}
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-4 pt-20 border-b-2 border-black">
        <div className="w-full md:w-1/2 px-10 pt-10">
          <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold mt-10 mb-10 text-center md:text-left leading-tight'>Enabling individuals<br/>to thrive & succeed.</h2>
          <p className='text-xl mb-10'>At PearTech, we have a rich history of pushing the boundaries of technology. From our humble beginnings as a small startup, we have grown into a global leader in smart devices and AI-driven applications. Our relentless pursuit of innovation has allowed us to create products that seamlessly blend cutting-edge technology with user-centric designs, enhancing everyday life and shaping a connected future.</p>
        </div>
      
        <div className="w-full md:w-1/2 px-10 pt-10">
          <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold mt-10 mb-10 text-center md:text-left leading-tight'>Empowering creativity<br/>in technology.</h2>
          <p className='text-xl mb-10'>PearTech is dedicated to empowering creativity and innovation in the field of technology. Our expert team of engineers and designers work tirelessly to develop solutions that push the envelope, delivering state-of-the-art products that redefine what's possible in the tech world.</p>
        </div>
      </div>

    </div>
   
  )
})

export default forwardRef(About);