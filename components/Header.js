'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 absolute w-full border-b border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}