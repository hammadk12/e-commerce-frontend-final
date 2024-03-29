import Link from 'next/link';
import React from 'react'

const Footer = () => {
  
  const current_year = new Date().getFullYear();
  
  return (
    <div className='bg-gray-50'>
    <div className='w-full'>
      <div className='text-center py-10 font-bold'>
        <Link href="http://localhost:3001/privacy"  className='px-1'>
          Privacy
        </Link>
        <span>|</span>
        <Link href="http://localhost:3001/terms"  className='px-1'>
          Terms
        </Link>
        <span>|</span>
        <Link href='http://localhost:3001/contact' className='px-1'>
          Contact
        </Link>
        <p>Copyright © {current_year}, PearTech. All Rights Reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
