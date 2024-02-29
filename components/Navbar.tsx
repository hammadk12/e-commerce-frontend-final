import React from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
              <h1 className='font-bold text-4xl'>PearTech</h1>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>Shop</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>About</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>Contact</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>Login</Link>
                </li>
            </ul>

        {/* Mobile Button */}
        <div className='block sm:hidden z-10'>
          <AiOutlineMenu size={20} />
        </div>
        {/* Mobile Menu */}
        <div className=' absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'>
          <ul>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/'>Shop</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/'>About</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/'>Contact</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/'>Login</Link>
                </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar