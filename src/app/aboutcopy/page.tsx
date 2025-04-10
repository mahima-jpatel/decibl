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

      {/* About Content */}
      <div className="flex-1 flex flex-col items-left px-6 sm:px-12 md:px-16 py-12 relative" style={{ paddingLeft: '10%', paddingRight: '10%'}}>
        {/* About Section - Main content */}
        <div className="max-w-5xl mx-auto text-left space-y-10 relative z-10 py-8 text-justify">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8">
            About Decibl
          </h1>
          
          <div className="text-lg md:text-xl text-[#333333] space-y-6">
            <p className="leading-relaxed">
              At Decibl, we believe in the power of small steps to create lasting change. Our mission is to help individuals build emotional resilience, 
              practice mindfulness, and cultivate self-awareness through a unique and engaging approach. Decibl is a habit-building mental wellness app 
              designed to guide you through a transformative 30-day journey of self-care, reflection, and personal growth.
            </p>
          </div>

          {/* How It Works Section */}
          <div className="max-w-3xl mx-auto py-12 px-4">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-10">
                <div className="bg-purple-600 text-white py-4">
                <h2 className="text-3xl font-bold text-left" style={{margin: '0px'}}>
                    How It Works
                </h2>
                </div>
                
                <div className="p-6 grid grid-cols-1 gap-6">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                    </div>
                    <div>
                    <h3 className="font-bold text-xl text-gray-800 " style={{margin: '0px'}}>1. Interactive Podcasts</h3>
                    <p className="text-gray-600" style={{margin: '0px'}}>
                        Decibl offers bite-sized, interactive podcasts designed to engage and help you reflect on your thoughts, feelings, and actions. These podcasts are personalized based on your progress and preferences.
                    </p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                    </div>
                    <div>
                    <h3 className="font-bold text-xl text-gray-800 " style={{margin: '0px'}}>2. Visual Metaphor - Your Personal Tree</h3>
                    <p className="text-gray-600" style={{margin: '0px'}}>
                        The heart of Decibl&apos;s journey is the growth of your personal tree. As you complete daily sessions, your tree grows, symbolizing the growth of your inner world. With each step, your tree becomes more vibrant, encouraging you to stay consistent.
                    </p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                    </div>
                    <div>
                    <h3 className="font-bold text-xl text-gray-800 " style={{margin: '0px'}}>3. Daily Reflection</h3>
                    <p className="text-gray-600" style={{margin: '0px'}}>
                        Each day, you&apos;ll be prompted with reflection activities that encourage mindfulness and emotional awareness. You can also choose deeper journaling sessions to explore your thoughts in a safe and supportive space.
                    </p>
                </div>
                
                <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                    </div>
                    <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2" style={{margin: '0px'}}>4. Gentle Progress</h3>
                    <p className="text-gray-600" style={{margin: '0px'}}>
                        At Decibl, we believe that true growth happens gradually. That&apos;s why we encourage users to progress at their own pace—whether you&apos;re taking quick reflective moments or diving into more profound personal development.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>

          {/* Why Choose Decibl Section */}
          <p></p>
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8" style={{margin: '0px'}}>
              Why Choose Decibl?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
              <div className="flex items-start p-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{margin: '0px'}}>Personalized Experience</h3>
                  <p className="text-gray-700 leading-relaxed" style={{margin: '0px'}}>
                    Your journey with Decibl is yours to control. Choose the depth of engagement that suits your needs—whether 
                    it&apos;s brief daily sessions or more immersive personal reflections.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{margin: '0px'}}>Guided Growth</h3>
                  <p className="text-gray-700 leading-relaxed" style={{margin: '0px'}}>
                    With the help of our unique visual metaphor, your tree will grow and flourish as you do, giving you a tangible 
                    sense of progress and accomplishment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{margin: '0px'}}>Safe and Supportive</h3>
                  <p className="text-gray-700 leading-relaxed" style={{margin: '0px'}}>
                    We&apos;ve created a welcoming space for everyone, ensuring that you always feel supported in your growth journey, 
                    no matter where you are.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{margin: '0px'}}>Holistic Wellness</h3>
                  <p className="text-gray-700 leading-relaxed" style={{margin: '0px'}}>
                    Decibl isn&apos;t just about meditation or stress reduction—it&apos;s about developing long-term emotional resilience and 
                    building a balanced mindset, step by step.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p></p>
          {/* Why You Should Get Started Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4" style={{margin: '0px'}}>
              Why You Should Get Started
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8" style={{margin: '0px'}}>
              Whether you&apos;re seeking to improve your emotional well-being, create a mindful daily routine, or just get more in touch with 
              your thoughts, Decibl offers an easy and rewarding way to start your mental wellness journey.
            </p>
            
            <p className="text-2xl font-bold text-purple-700 mb-6" style={{margin: '10px', fontWeight: 'bold', textAlign: 'center'}}>
              Start today—Build emotional resilience, one step at a time, with Decibl.
            </p>
            
            <Link href="/signup">
              <button className="cta-button text-white bg-orange-500 py-3 px-10 rounded-lg text-xl hover:bg-orange-600 transition-colors shadow-md" style={{display: 'block', maxWidth: '300px', margin: 'auto'}}>
                Join the Waitlist
              </button>
            </Link>
            <p></p>
          </div>
        </div>

      </div>
    </div>
  );
}
