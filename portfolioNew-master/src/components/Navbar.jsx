import { useState, useEffect } from 'react';
import cv from '../assets/cv.pdf'
import { Menu, X } from 'lucide-react'; // make sure to install `lucide-react` or replace with any icon library
import { useNavigate } from 'react-router-dom';
 import logo from '../assets/Mlogo.jpg';

export default function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const [isSignIn, setIsSignIn] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSignIn(prev => !prev);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);




  return (
    // <header className="bg-[#673579] text-white shadow-md sticky top-0 z-50">

    // <header className="bg-[#673579] text-white shadow-lg shadow-[#4e2661]/40 sticky top-0 z-50">
    <header className="bg-[#673579]/90 backdrop-blur text-white shadow-lg shadow-[#4e2661]/40 border-b border-[#ffffff33] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-2xl font-bold tracking-wide">MyPortfolio</div> */}
       

<div className="flex items-center gap-2">
  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
    <img
      src={logo}
      alt="Logo"
      className="w-6 h-6 object-contain"
    />
  </div>
  <span className="text-2xl font-bold tracking-wide">M-Portfolio</span>
</div>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-[#e9a7ff] transition">Home</a>
          <a href="#about" className="hover:text-[#e9a7ff] transition">About</a>
          <a href="#projects" className="hover:text-[#e9a7ff] transition">Projects</a>
          <a href="#contact" className="hover:text-[#e9a7ff] transition">Contact</a>
          <a href={cv} download>
            <button className="bg-white text-[#673579] px-4 py-2 cursor-pointer rounded-md hover:bg-[#e9a7ff] hover:text-black transition font-medium">
              Download CV
            </button>
          </a>
          <button onClick={() => navigate('/signup')} className="w-32 border cursor-pointer border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#673579] transition font-medium text-center">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#673579] text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-6 flex flex-col gap-6 pt-20">
          <a href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-[#e9a7ff] transition">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-[#e9a7ff] transition">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-[#e9a7ff] transition">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-[#e9a7ff] transition">Contact</a>
          <button className="bg-white text-[#673579] px-4 py-2 rounded-md hover:bg-[#e9a7ff] hover:text-black transition font-medium">
            Download CV
          </button>
          <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#673579] transition font-medium">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
