import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Pear icon */}
          <div className="flex items-center space-x-2 border-8 border-solid border-red-500">
            <Image src="/pear-logo.png" alt="Pear Logo" width={80} height={80} priority/>
            <span className="text-xl font-bold">PearTech</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/"><span className="text-gray-700 hover:text-gray-900 cursor-pointer">Shop </span></Link>
            <Link href="/"><span className="text-gray-700 hover:text-gray-900 cursor-pointer">About </span></Link>
            <Link href="/"><span className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact</span></Link>
          </div>
          
          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100">
              Shop
            </button>
            <button aria-label="Shopping Cart" className="p-2 rounded-full hover:bg-gray-100">
              Cart
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
