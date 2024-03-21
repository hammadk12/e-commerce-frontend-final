import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import myImage from '../public/images.jpg'
import useScrollTo from '../hooks/useScrollTo'

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter();
  const { scrollTo: scrollToInternalSection, ref: internalSectionRef } = useScrollTo();

  const handleNavigation = (path: string) => {
    router.push(path);
  }

  return (
    // First About Section
    <div className='bg-gray-50'>
      <section ref={ref} className='container mx-auto text-left pt-20 px-10 pb-60 border-b-2 border-black'>
        <h2 className='text-4xl lg:text-6xl md:text-5xl font-bold py-10'>Embracing Innovation,<br></br>Empowering Change.</h2>        
        <p className='pt-5 pb-14 text-xl lg:text-2xl'>PearTech is a pioneering technology company that blends advanced technology with user-centric designs to enhance everyday life and shape a connected future. Embracing innovation and continous improvement.</p>
        <button onClick={scrollToInternalSection} className='bg-black text-white px-6 py-4 text-md mr-5'>Learn More</button>
        <button onClick={() => handleNavigation('/login')} className='bg-white text-black px-6 py-4 text-md border border-black'>Sign Up</button>
      </section>

    {/* Second About Section */}  
    <section ref={internalSectionRef} className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 pt-20">
        
      <section className="w-full md:w-1/2 text-left px-10">
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold py-10 mb-5'>Enabling individuals<br></br>to thrive & succeed.</h2>
      </section>
        
      <section className="w-full md:w-1/2 text-left">
        <p className='px-10 text-xl mb-5'>At PearTech, we have a rich history of pushing the boundaries of technology. From our humble beginnings as a small startup, we have grown into a global leader in smart devices and AI-driven applications. Our relentless pursuit of innovation has allowed us to create products that seamlessly blend cutting-edge technology with user-centric designs, enhancing everyday life and shaping a connected future.</p>
      </section>

    </section>
      
      <div className='flex justify-center items-center mt-10 mb-10 h-[500px] overflow-hidden md:px-10 px-5'>
        <div className='flex justify-center items-center'>
          <Image 
            src={myImage}
            alt='Tech Meeting'
            width={1200}
            height={500}
          />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

     {/* Third About Section */} 
    <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center gap-5 pt-20 border-b-2 border-black border-t-2">
      <div className="w-full md:w-1/2 px-10 pt-10 flex flex-col mb-20">
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold my-10 text-left leading-tight'>PearTech: Explore Our Products and Services</h2>
        <p className='text-xl flex-grow'>Discover the innovative world of PearTech, where advanced technology meets everyday convenience. Our range of smart devices and user-friendly software solutions is designed to enhance your daily life. Experience the perfect blend of functionality and style with our products and services – your gateway to the future of technology.</p>
        <button onClick={() => handleNavigation('/products')} className='bg-black text-white px-6 py-4 text-md mt-10 sm:w-3/4 md:w-1/2 lg:w-1/4'>Products</button>
      </div>
  
      <div className="w-full md:w-1/2 px-10 pt-10 flex flex-col mb-20">
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold my-10 text-left leading-tight'>Get in Touch - Inquiries</h2>
        <p className='text-xl flex-grow sm:mt-20 lg:mt-10'>Have questions or need assistance? PearTech is here to help. Our dedicated team is ready to address your inquiries and provide personalized support. Whether it’s about our products, services, or general queries, we're just a message away. Connect with us and experience customer service that truly cares about your needs.</p>
        <button onClick={() => handleNavigation('/contact')} className='bg-white text-black px-6 py-4 text-md border border-black mt-10 sm:w-3/4 md:w-1/2 lg:w-1/4'>Contact</button>
      </div>
    </div>

    </div>
   
  )
})

export default About;