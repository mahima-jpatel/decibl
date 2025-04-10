"use client";
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

import FullPage from './components/FullPage'; // Import the FullPage component



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="bg-[#FFF9E6] p-4 w-full sticky top-0 shadow-md z-50">
        <div className="container flex justify-between items-center mx-auto">
          <div className="brand text-3xl md:text-4xl text-[#9F78E5]">decibl</div>
          
          {/* Regular Navigation - Hidden on small screens */}
          <nav className="hidden sm:flex space-x-6">
            <Link href="/" className="text-lg text-[#333]">Home</Link>
            <Link href="/about" className="text-lg text-[#333]">About</Link>
            <Link href="/team" className="text-lg text-[#333]">Team</Link>
            <Link href="/signup" className="text-lg text-[#333]">Sign Up</Link>
          </nav>
          
          {/* Hamburger Button - Only visible on small screens */}
          <div className="sm:hidden flex items-center justify-center" style={{ paddingRight: '10%' }}>
            <button 
              className="hamburger-button p-2 rounded-md"
              onClick={toggleMenu}
              aria-label="Menu"
              style={{
                background: 'transparent',
                border: 'none',
                position: 'relative',
                width: '40px',
                height: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '8px'
              }}
            >
              {/* Three bars of the hamburger */}
              <span 
                style={{
                  display: 'block',
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#333',
                  transition: 'all 0.3s ease',
                  transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                }}
              ></span>
              <span 
                style={{
                  display: 'block',
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#333',
                  transition: 'all 0.3s ease',
                  opacity: isMenuOpen ? 0 : 1
                }}
              ></span>
              <span 
                style={{
                  display: 'block',
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#333',
                  transition: 'all 0.3s ease',
                  transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                }}
              ></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="sm:hidden mobile-menu">
            <div className="py-2 bg-[#FFF9E6] " style={{ paddingLeft: '80%'}}>
              <Link 
                href="/" 
                className="block py-2 px-4 text-[#333] hover:bg-[#E6E6FA]"
                onClick={() => setIsMenuOpen(false)}
                style={{ textAlign: 'right' }}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-2 px-4 text-[#333] hover:bg-[#E6E6FA]"
                onClick={() => setIsMenuOpen(false)}
                style={{ textAlign: 'right' }}
              >
                About
              </Link>
              <Link 
                href="/team" 
                className="block py-2 px-4 text-[#333] hover:bg-[#E6E6FA]"
                onClick={() => setIsMenuOpen(false)}
                style={{ textAlign: 'right' }}
              >
                Team
              </Link>
              <Link 
                href="/signup" 
                className="block py-2 px-4 text-[#333] hover:bg-[#E6E6FA]"
                onClick={() => setIsMenuOpen(false)}
                style={{ textAlign: 'right' }}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </header>

      <div className="hero flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-12 relative" style={{ paddingLeft: '0px'}}>
        <div className="text-section max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-6">
            Embark on Your Mental Wellness Journey
          </h1>
          <p className="text-lg md:text-xl text-[#333333] mb-6">
            Build emotional resilience, one step at a time, with Decibl.
          </p>
          <Link href="/signup">
            <button className="cta-button text-white bg-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-lg text-lg md:text-xl hover:bg-orange-600 transition">
              Start Your Journey
            </button>
          </Link>
        </div>

        <style jsx>{`
          .hero::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('/lavender.gif');
            background-size: cover;
            background-position: center;
            opacity: 0.2;
            z-index: -1;
          }
          
          .mobile-menu {
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}