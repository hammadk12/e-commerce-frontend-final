import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Head from 'next/head'

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - PearTech</title>
        <meta name="description" content="Get in touch with PearTech. Contact us for queries, support, or feedback." />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero 
          heading='Contact' 
          message='Submit the form below to get in contact with our team.' 
          message2='Home'
          redirectPath='/'
          />
        <Contact />
    </div>
  )
}

export default contact