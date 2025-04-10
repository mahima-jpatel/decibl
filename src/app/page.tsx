"use client";
import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="bg-[#FFF9E6] p-4 w-full sticky top-0 shadow-md">
        <div className="container flex justify-between items-center mx-auto">
          <div className="brand text-3xl md:text-4xl text-[#9F78E5]">decibl</div>
          <nav className="flex space-x-6 md:space-x-8">
            <Link href="/" className="text-lg md:text-xl text-[#333]">Home</Link>
            <Link href="/about" className="text-lg md:text-xl text-[#333]">About</Link>
            <Link href="/team" className="text-lg md:text-xl text-[#333]">Team</Link>
            <Link href="/signup" className="text-lg md:text-xl text-[#333]">Sign Up</Link>
          </nav>
        </div>
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
  `}</style>
</div>

    </div>
  );
}
