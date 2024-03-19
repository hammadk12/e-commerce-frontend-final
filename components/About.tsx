import React from 'react'
import AboutSectionLeft from './AboutSectionLeft'
import AboutSectionRight from './AboutSectionRight'

const About: React.FC = () => {
  return (
    <div className='bg-gray-50 border border-pink-800'>
      <div className='container ml-10 text-left pt-20 px-10 py-48'>
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold py-10'>Embracing Innovation,<br></br>Empowering Change.</h2>        
        <p className='pt-5 pb-10 text-xl'>PearTech is a pioneering technology company that blends advanced technology with user-centric designs to enhance everyday life and shape a connected future.</p>
        <button className='bg-black text-white px-4 py-2 text-md mr-5'>Learn More</button>
        <button className='bg-white text-black px-4 py-2 text-md border border-black'>Sign Up</button>
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
}

export default About