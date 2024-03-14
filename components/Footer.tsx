import Link from 'next/link';
import React from 'react'

const Footer = () => {
  
  const current_year = new Date().getFullYear();
  
  return (
    <div className='w-full'>
      <div className='text-center py-4 font-bold'>
        <Link href="/"  className='px-1'>
          Privacy
        </Link>
        <span>|</span>
        <Link href="/"  className='px-1'>
          Terms
        </Link>
        <span>|</span>
        <Link href='http://localhost:3001/contact' className='px-1'>
          Contact
        </Link>
        <p>Copyright © {current_year}, PearTech. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
