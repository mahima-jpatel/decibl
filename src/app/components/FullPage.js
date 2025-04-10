"use client";
import { useEffect } from 'react';
import fullpage from 'fullpage.js';
import Link from 'next/link';

const FullPage = () => {
  useEffect(() => {
    // Initialize fullPage.js
    new fullpage('#fullpage', {
      autoScrolling: true, // Enable automatic scrolling
      navigation: true, // Enable navigation dots
      anchors: ['home', 'about', 'team', 'signup'], // Section anchors
      navigationTooltips: ['Home', 'About', 'Team', 'Sign Up'], // Tooltip for navigation
      showActiveTooltip: true, // Show active tooltip
      sectionsColor: ['#FFF', '#F9F9F9', '#F0F0F0', '#FFF'], // Section background colors
      scrollOverflow: true, // Allow content overflow scrolling
    });

    // Cleanup when the component unmounts
    return () => {
      fullpage.destroy('all');
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section" id="home">
        <header className="bg-[#FFF9E6] p-4 w-full sticky top-0 shadow-md z-50">
          <div className="container flex justify-between items-center mx-auto">
            <div className="brand text-3xl md:text-4xl text-[#9F78E5]">decibl</div>
            <nav className="hidden sm:flex space-x-6">
              <Link href="#home" className="text-lg text-[#333]">Home</Link>
              <Link href="#about" className="text-lg text-[#333]">About</Link>
              <Link href="#team" className="text-lg text-[#333]">Team</Link>
              <Link href="#signup" className="text-lg text-[#333]">Sign Up</Link>
            </nav>
          </div>
        </header>
        <div className="flex flex-col justify-center items-center px-4 md:px-8 py-12 relative">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-6">Embark on Your Mental Wellness Journey</h1>
          <p className="text-lg md:text-xl text-[#333333] mb-6">Build emotional resilience, one step at a time, with Decibl.</p>
          <Link href="#signup">
            <button className="cta-button text-white bg-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-lg text-lg md:text-xl hover:bg-orange-600 transition">
              Start Your Journey
            </button>
          </Link>
        </div>
      </div>

      <div className="section" id="about">
        <h2>About Decibl</h2>
        <p>At Decibl, we believe in the power of small steps to create lasting change...</p>
      </div>

      <div className="section" id="team">
        <h2>Meet the Team</h2>
        <p>Our team is dedicated to building a better mental wellness platform...</p>
      </div>

      <div className="section" id="signup">
        <h2>Sign Up</h2>
        <p>Join us today and start your wellness journey...</p>
      </div>
    </div>
  );
};

export default FullPage;
