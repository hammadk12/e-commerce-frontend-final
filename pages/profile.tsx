import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Profile from '../components/Profile'

const profile = () => {
  return (
    <div>
        <Head>
        <title>Profile Dashboard - PearTech</title>
        <meta name="description" content="Profile Dashboard. Edit, delete, or update information." />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero 
          heading='Hello' 
          message='Edit, update, or delete your information here.' 
          message2='Home'
          redirectPath='/'
          />
        <Profile />
    </div>
  )
}

export default profile