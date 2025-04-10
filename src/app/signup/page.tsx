"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    const user = { firstName, lastName, email, interests };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User signed up successfully', data);
        // Clear the form values after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setInterests('');
        
        // Set success message
        setSuccessMessage('You have successfully signed up!');
        setError(''); // Clear any previous error
      } else {
        setError(data.message || 'Something went wrong.');
        setSuccessMessage(''); // Clear success message in case of error
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
      setSuccessMessage(''); // Clear success message in case of error
    }
  };

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

      <div className="flex justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="w-[500px] bg-white shadow-md rounded-lg p-20">
          <h1 className="text-9xl font-bold text-center mb-10 text-gray-800" style={{ fontSize: '40px' }}>Join the Waitlist</h1>
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-md">
              {successMessage}
            </div>
          )}
          <p></p>

          <form onSubmit={handleSubmit} className="px-4 py-10">
            <div>
              <label htmlFor="firstName" className="block text-md font-medium text-gray-700 mb-2" style={{ fontSize: '25px' }}>First Name</label>
              <input
                type="text"
                id="firstName"
                style={{ height: '40px', fontSize: '20px'}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 focus:border-purple-300 transition"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <p></p>

            <div>
              <label htmlFor="lastName" className="block text-md font-medium text-gray-700 mb-2" style={{ fontSize: '25px' }}>Last Name</label>
              <input
                type="text"
                id="lastName"
                style={{ height: '40px', fontSize: '20px' }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <p></p>

            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2" style={{ fontSize: '25px' }}>Email</label>
              <input
                type="email"
                id="email"
                style={{ height: '40px', fontSize: '20px' }}
                className="w-full px-4 py-3 h-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition"
                placeholder="john.doe@xyz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <p></p>
            <div>
              <label htmlFor="interests" className="block text-md font-medium text-gray-700 mb-2" style={{ fontSize: '25px' }}>
                What interests you about Decibl? <span className="text-gray-500 font-normal" style={{ fontSize: '20px' }}>(Optional)</span>
              </label>
              <textarea
                id="interests"
                style={{ fontSize: '20px' }}
                className="w-full px-4 py-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition"
                placeholder="Let us know why you're interested!"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-auto px-8 py-2.5 mt-10 bg-purple-500 text-white text-base font-medium rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors shadow-md mx-auto block"
            >
              Sign Up
            </button>
          </form>
        
        </div>
      </div>
    </div>
  );
}
