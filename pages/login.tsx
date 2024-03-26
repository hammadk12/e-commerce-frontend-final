import React from 'react'
import Head from 'next/head';
import Hero from '../components/Hero';
import Login from '../components/Login'; 
 
 const login = () => {
   return (
    <div>
      <Head>
        <title>Contact Us - PearTech</title>
        <meta name="description" content="Login or Register. Create an account for easy and accessible navigation." />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero 
          heading='Login' 
          message='Provide your information to login/register.' 
          message2='Register'
          redirectPath='/register'
          />
        <Login />
    </div>
  );
};


export default login