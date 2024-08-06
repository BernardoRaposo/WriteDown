"use client";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">WriteDown</h3>
            <p className="mt-2 text-sm text-gray-400">WriteDown is a lightweight word processor designed for bloggers and writers. <br/> It belongs to the Open Source community!</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="/" className="text-sm text-gray-400 hover:text-white">Home</a>
            <a href="/about" className="text-sm text-gray-400 hover:text-white">About</a>
            <a href="/about#contact" className="text-sm text-gray-400 hover:text-white">Contact</a>
          </div>
          <div className="flex space-x-6">
            <a href="https://x.com/sir__fox" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className='text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/bernardo-raposo/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-2xl' />
            </a>
            <a href="https://github.com/BernardoRaposo" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-2xl' />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; 2024 WriteDown. Open Source Project.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
