"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#7261C8]">
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

      <main className="flex-grow p-8">
        {/* Display Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <img src="4.png" alt="Image 3" className="w-full rounded-lg shadow-md" style={{ width:'100%', height: '90vh', objectFit: 'contain'}}/>
          <img src="6.png" alt="Image 4" className="w-full rounded-lg shadow-md" style={{ width:'100%', height: '90vh', objectFit: 'contain'}}/>
          <img src="7.png" alt="Image 5" className="w-full rounded-lg shadow-md" style={{ width:'100%', height: '90vh', objectFit: 'contain'}}/>
          <img src="9.png" alt="Image 6" className="w-full rounded-lg shadow-md" style={{ width:'100%', height: '90vh', objectFit: 'contain'}}/>
        </div>
      </main>
    </div>
  );
}