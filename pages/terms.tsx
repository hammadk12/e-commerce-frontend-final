import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'

const terms: React.FC = () => {
  return (

    <div>
        <Hero 
          heading='Our Commitment to You' 
          message="At PearTech, we value transparency and fairness. Read our Terms of Service to understand your rights and responsibilities when using our platform." 
          message2='Return to Home'
          redirectPath='/'
        />

    <div className='container mx-auto px-4'>
        <Head>
            <title>Terms of Service - PearTech</title>
            <meta name='description' content='Terms of Service for PearTech'/>
        </Head>
        <h1 className='text-3xl font-bold mt-6 mb-4'>Terms of Service</h1>
        <p className='mb-2'>Last updated: 3/14/24</p>

        <section>
            <h2 className='text-2xl font-semibold mt-4 mb-2'>1. Introduction</h2>
            <p className='mb-4'>Welcome to PearTech! These terms of service outline the rules and regulations for the use of PearTech's Website and services.</p>
        </section>

        <section>
            <h2 className='text-2xl font-semibold mt-4 mb-2'>2. Privacy Policy</h2>
            <p className='mb-4'>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your data. Please review it to understand our practices.</p>
        </section>

        <section>
                <h2 className="text-2xl font-semibold mt-4 mb-2">3. User Obligations</h2>
                <p className="mb-4">
                    As a user of our website, you agree not to misuse the services or help anyone else do so. You are responsible for ensuring that your use of our services is in compliance with laws and regulations.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4 mb-2">4. Product Information</h2>
                <p className="mb-4">
                    We make every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4 mb-2">5. Payment and Pricing</h2>
                <p className="mb-4">
                    We reserve the right to refuse or cancel orders at any time. Prices for our products are subject to change without notice.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4 mb-2">6. Return Policy</h2>
                <p className="mb-4">
                    If you are not satisfied with your purchase, you can return the product within 30 days of purchase for a full refund or exchange. The product must be returned in the same condition you received it and with the original packaging. Please note that some items may be non-refundable and non-exchangeable. If you have any questions feel free to 
                    <Link href="http://localhost:3001/contact">
                    <span className='text-blue-600 hover:text-blue-800'> Contact</span>
                    </Link> us.
                </p>
            </section>
        </div>
    </div>
  )
}

export default terms