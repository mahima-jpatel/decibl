"use client";
import Link from 'next/link';
import { useState } from 'react';

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

      <div className="flex flex-col items-center py-16 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
        <h2 className="text-4xl font-extrabold text-center text-[#1a1a1a] mb-12" style={{ fontSize: '40px' }}>
          Meet The Team
        </h2>
        <p></p>
        <p></p>
        <p></p>
        
        {/* Flex container for horizontal layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Founder 1 */}
          <div className="team-card bg-white shadow-md rounded-lg p-6 text-center max-w-xs" style={{paddingLeft: '60px', paddingRight: '60px'}}>
            <img 
              src="/akhil.jpeg" 
              alt="Akhil Dua" 
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              style={{width: '200px', height: '200px'}}
            />
            <h3 className="text-xl font-semibold text-[#4e4e4e]">Akhil Dua</h3>
            <p className="text-lg text-[#555] mb-2">Carnegie Mellon University</p>
          </div>
          
          {/* Founder 2 */}
          <div className="team-card bg-white shadow-md rounded-lg p-6 text-center max-w-xs" style={{paddingLeft: '60px', paddingRight: '60px'}}>
            <img 
              src="/mahima1.jpeg" 
              alt="Mahima Jagadeesh Patel" 
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              style={{width: '200px', height: '200px'}}
            />
            <h3 className="text-xl font-semibold text-[#4e4e4e]">Mahima Jagadeesh Patel</h3>
            <p className="text-lg text-[#555] mb-2">Carnegie Mellon University</p>
          </div>
          
          {/* Founder 3 */}
          <div className="team-card bg-white shadow-md rounded-lg p-6 text-center max-w-xs" style={{paddingLeft: '60px', paddingRight: '60px'}}>
            <img 
              src="/reuben2.jpeg" 
              alt="Reuben George Mathew" 
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              style={{width: '200px', height: '200px'}}
            />
            <h3 className="text-xl font-semibold text-[#4e4e4e]">Reuben George Mathew</h3>
            <p className="text-lg text-[#555] mb-2">Carnegie Mellon University</p>
          </div>
          
          {/* Founder 4 */}
          <div className="team-card bg-white shadow-md rounded-lg p-6 text-center max-w-xs" style={{paddingLeft: '60px', paddingRight: '60px'}}>
            <img 
              src="/arihant.jpeg" 
              alt="Arihant Seth" 
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              style={{width: '200px', height: '200px'}}
            />
            <h3 className="text-xl font-semibold text-[#4e4e4e]">Arihant Seth</h3>
            <p className="text-lg text-[#555] mb-2">Carnegie Mellon University</p>
          </div>
        </div>
      </div>
    </div>

  );
}