"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/markdown-logo.png" className="w-12 h-12" alt="Markdown Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 font-semibold hover:text-black transition-colors duration-300">
              About
            </Link>
            <Link href="/about#contact" className="text-gray-700 font-semibold hover:text-black transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-black focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block text-gray-700 font-semibold hover:text-black transition-colors duration-300">
              About
            </Link>
            <Link href="/about#contact" className="block text-gray-700 font-semibold hover:text-black transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
