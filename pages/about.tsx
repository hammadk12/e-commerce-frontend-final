import React, { useRef } from 'react'
import Hero from '../components/Hero'
import Head from 'next/head'
import About from '../components/About'

const about: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAboutSection = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <Head>
        <title>About Us - PearTech | Innovation and Excellence in Technology</title>
        <meta name="description" content="Discover the story of PearTech, from our humble beginnings to becoming a leader in tech innovation. Learn about our values, our team, and how we're shaping the future of technology." />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero 
          heading='About' 
          message='Learn about our mission, our journey, and our passionate team.' 
          message2='Explore'
          onClickExplore={scrollToAboutSection} // Scroll function from the custom hook
          />
        <About ref={aboutRef} />
    </div>
  )
}

export default about