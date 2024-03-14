import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiBorderBottom } from 'react-icons/bi';

// Changing state so mobile menu is not always showing
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')
  const [borderStyle, setBorderStyle] = useState('');

  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const changeStyle = () => {
      if(window.scrollY >= 900) {
        setColor('bg-white');
        setTextColor('text-black');
        setBorderStyle('border-b-2 border-black'); // Set border color to black when scrolled
      } else {
        setColor('bg-transparent');
        setTextColor('text-white');
        setBorderStyle(''); 
      }
    };
    window.addEventListener('scroll', changeStyle);

    return () => {
      window.removeEventListener('scroll', changeStyle);
    };
  }, []);

  return (
    <div style={{ transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out' }} 
         className={`${color} ${borderStyle} fixed left-0 top-0 w-full z-20`}>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href='/'>
              <h1 className={`font-bold text-4xl ${textColor}`}>PearTech</h1>
            </Link>
            <ul className={`hidden sm:flex ${textColor}`}>
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
                  <Link href='http://localhost:3001/contact'>Contact</Link>
                </li>
                <li className='p-4'>
                  <Link href='/'>Login</Link>
                </li>
            </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
        </div>
        {/* Mobile Menu */}
        <div className={
            nav 
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              }
            >
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