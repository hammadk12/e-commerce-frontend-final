import React, {useRef} from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Register from '../components/Register';

const register: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToRegisterSection = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <Head>
        <title>Register - PearTech</title>
        <meta name="description" content="Register today. Create an account for easy and accessible navigation." />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero 
          heading='Register' 
          message='Provide your information to register an account.' 
          message2='Register'
          onClickExplore={scrollToRegisterSection} // Scroll function from custom hook
          />
        <Register ref={aboutRef} />
    </div>
  );
};

export default register