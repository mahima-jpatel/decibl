"use client";
import '../styles/globals.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header with Tailwind classes instead of inline styles */}
      <header>
        <div className="container">
          <div className="brand" style={{ fontSize: '40px' }}>decibl</div>
          <nav>
            <Link href="/" style={{ fontSize: '20px' }}>Home</Link>
            <Link href="/about" style={{ fontSize: '20px' }}>About</Link>
            <Link href="/team" style={{ fontSize: '20px' }}>Team</Link>
            <Link href="/signup" style={{ fontSize: '20px' }}>Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <div className="hero flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-12 relative">
        {/* Text Section - Centered for all screens */}
        <div className="text-section max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
            Embark on Your Mental Wellness Journey
          </h1>
          <p className="text-xl md:text-2xl text-[#333333] mb-6">
            Build emotional resilience, one step at a time, with Decibl.
          </p>
          <Link href="/signup">
            <button className="cta-button text-white bg-orange-500 py-3 px-8 rounded-lg text-xl hover:bg-orange-600 transition">
              Start Your Journey
            </button>
          </Link>
        </div>

        {/* Background Image with Opacity using CSS pseudo-element */}
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
        `}</style>
      </div>
    </div>
  );
}