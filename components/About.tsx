import React from 'react'
import AboutSectionLeft from './AboutSectionLeft'
import AboutSectionRight from './AboutSectionRight'

const About: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto text-left pt-20'>
        <h2 className='text-4xl lg:text-7xl md:text-6xl font-bold py-10'>Embracing Innovation,<br></br>Empowering Change.</h2>        <p className='py-5 text-2xl'></p>
      </div>

    <AboutSectionLeft 
      imageUrl='/about3.avif'
      altText=''
      heading=''
      content='Our Beginning'
      width={500}
      height={500}
    />

   </div>
  )
}

export default About