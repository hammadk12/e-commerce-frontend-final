import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Changing state so mobile menu is not always showing
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isVisible, setIsVisible] = useState(true); // New visibility state
  const [iconColor, setIconColor] = useState('white'); // State for icon color 

  const handleNav = () => {
    setNav(!nav)
  };

  // function to make mobile menu hidden when link clicked
  const handleLinkClick = () => {
    setNav(false);
  };

  useEffect(() => {
    const changeStyle = () => {
      const scrolled = window.scrollY > 700;
      setIsVisible(!scrolled);

      // Update icon color based on scroll position
      setIconColor(scrolled ? 'black' : 'white');
    };

    window.addEventListener('scroll', changeStyle);

    return () => {
      window.removeEventListener('scroll', changeStyle);
    };
  }, []);

  return (
    <div  style={{ transition: 'opacity 0.3s ease-in-out' }} 
    className={`fixed left-0 top-0 w-full z-20 ${isVisible ? '' : 'opacity-0'}`}>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-5 bg-transparent text-white'>
            <Link href='/'>
              <h1 className='font-bold text-4xl'>PearTech</h1>
            </Link>
            <ul className='hidden sm:flex text-xl'>
                <li className='p-4'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>Shop</Link>
                </li>
                <li className='p-4'>
                  <Link href='http://localhost:3001/about'>About</Link>
                </li>
                <li className='p-4'>
                  <Link href='http://localhost:3001/contact'>Contact</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>Login</Link>
                </li>
            </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className={`${iconColor} block sm:hidden z-10 cursor-pointer`}>
          {nav ? <AiOutlineClose size={20} style={{color: 'white'}}/> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div className={
            nav 
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              }
            >
          <ul>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/' onClick={handleLinkClick}>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/' onClick={handleLinkClick}>Shop</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='http://localhost:3001/about' onClick={handleLinkClick}>About</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='http://localhost:3001/contact' onClick={handleLinkClick}>Contact</Link>
                </li>
                <li className='p-4 text-4xl hover:scale-110 transition-transform duration-300'>
                  <Link href='/' onClick={handleLinkClick}>Login</Link>
                </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar