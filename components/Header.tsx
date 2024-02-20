// components/Header.tsx

import React from 'react';
import Image from 'next/image';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'; 

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Pear icon */}
          <div className="flex items-center space-x-2">
            {/* Assuming you have the pear logo at public/pear-logo.svg */}
            <Image src="/pear-logo.png" alt="Pear Logo" width={40} height={40} />
            <span className="text-xl font-bold">Your Brand</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {/* Replace these with your actual navigation links */}
            <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
          
          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100">
              <StarIcon className="h-6 w-6 text-gray-700" />
            </button>
            <button aria-label="Shopping Cart" className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
