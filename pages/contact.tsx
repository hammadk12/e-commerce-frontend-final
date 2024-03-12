import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const contact = () => {
  return (
    <div>
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