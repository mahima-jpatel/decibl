"use client";
import Link from 'next/link';
export default function Team() {
  return (
    <>
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
    </>
  );
}