import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-neutral-100 p-4">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image src="/pear-logo.png" alt="Logo" width={50} height={50} />
          <span className="text-xl font-bold ml-2 text-gray-900">PearTech</span>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            {/* Icon for hamburger menu */}
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isNavOpen ? 'flex' : 'hidden'} absolute top-16 right-4 md:relative md:top-auto md:right-auto md:flex bg-neutral-100 md:bg-transparent z-20`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li><a href="#" className="block text-gray-900 hover:text-blue-600 p-2">&nbsp;&nbsp;&nbsp;Home</a></li>
            <li><a href="#" className="block text-gray-900 hover:text-blue-600 p-2">&nbsp;&nbsp;&nbsp;Shop</a></li>
            <li><a href="#" className="block text-gray-900 hover:text-blue-600 p-2">&nbsp;&nbsp;&nbsp;About</a></li>
            <li><a href="#" className="block text-gray-900 hover:text-blue-600 p-2">&nbsp;&nbsp;&nbsp;Contact</a></li>
          </ul>
        </nav>

        {/* Search bar and User Account and Cart for medium and larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search bar */}
          <div className="border-2 border-gray-700 rounded overflow-hidden flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-full"
            />
            <button className="px-4">
              🔍
            </button>
          </div>

          {/* User Account and Cart */}
          <a href="#" className="text-gray-900 hover:text-blue-600">Login</a>
          <a href="#" className="text-gray-900 hover:text-blue-600">
            <Image 
              src="/transparent_cart.png" 
              alt="Cart" 
              width={30} 
              height={30} 
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
