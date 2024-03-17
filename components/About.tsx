import React from 'react'
import AboutSectionLeft from './AboutSectionLeft'
import AboutSectionRight from './AboutSectionRight'

const About: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl lg:text-7xl md:text-6xl font-bold py-10'>Embracing Innovation, Empowering Change</h2>
        <p className='py-5 text-2xl '>Join us on a journey through PearTech's evolution, where every breakthrough and innovation is more than just technology—it's a step towards a smarter, more connected world. From our earliest days to our vision for the future, discover how we're crafting technologies that redefine the digital landscape.</p>
      </div>

      <AboutSectionLeft 
        imageUrl='/about.png'
        altText=''
        heading=''
        content=''
        width={600}
        height={400}
      />

      <AboutSectionRight 
        imageUrl=''
        altText=''
        heading=''
        content=''
        width={600}
        height={400}
      />
    </div>
  )
}

export default About