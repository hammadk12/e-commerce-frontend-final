import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import AboutSectionLeft from './AboutSectionLeft'
import AboutSectionRight from './AboutSectionRight'
import Image from 'next/image'
import myImage from '../public/my-image.jpg'

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = (( props, ref ) => {
  return (
    <div className='bg-gray-50'>
      <section ref={ref} className='container mx-auto text-left pt-20 px-10 pb-60 border-b-2 border-black'>
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold py-10'>Embracing Innovation,<br></br>Empowering Change.</h2>        
        <p className='pt-5 pb-10 text-xl'>PearTech is a pioneering technology company that blends advanced technology with user-centric designs to enhance everyday life and shape a connected future.</p>
        <button className='bg-black text-white px-6 py-4 text-md mr-5'>Learn More</button>
        <button className='bg-white text-black px-6 py-4 text-md border border-black'>Sign Up</button>
      </section>
      
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 pt-20">
        <section className="w-full md:w-1/2 text-left px-10">
          <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold py-10'>Enabling individuals<br></br>to thrive & succeed.</h2>
        </section>
        <section className="w-full md:w-1/2 ">
          <p>At PearTech, we have a rich history of pushing the boundaries of technology. From our humble beginnings as a small startup, we have grown into a global leader in smart devices and AI-driven applications. Our relentless pursuit of innovation has allowed us to create products that seamlessly blend cutting-edge technology with user-centric designs, enhancing everyday life and shaping a connected future.</p>
        </section>
      </section>
      
      <div className='flex justify-center items-center border border-pink-800'>
        <div className='flex justify-center items-center'>
          <Image 
            src={myImage}
            alt='High tech meeting room'
            className='max-w-full max-h-full'
            height={400}
            style={{ objectFit: 'contain'}}
          />
        </div>
      </div>

    <AboutSectionLeft 
      imageUrl='/about3.avif'
      altText=''
      heading=''
      content='Our Beginning'
      width={500}
      height={375}
    />
    </div>
  )
})

export default forwardRef(About);