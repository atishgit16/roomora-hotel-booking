import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll listener for bg change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900 shadow-xl' : 'bg-gray-500'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-40 h-auto transition-all duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium items-center">
          <li>
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${location.pathname === '/' ? 'text-blue-400 bg-white/10' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${location.pathname === '/about' ? 'text-blue-400 bg-white/10' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${location.pathname === '/gallery' ? 'text-blue-400 bg-white/10' : ''}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/attraction" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${location.pathname === '/attraction' ? 'text-blue-400 bg-white/10' : ''}`}
            >
              Attraction
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${location.pathname === '/contact' ? 'text-blue-400 bg-white/10' : ''}`}
            >
              Contact
            </Link>
          </li>
          
          {/* Action Buttons */}
          <li>
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 border border-white/20 hover:border-white/40 flex items-center gap-1"
            >
              My Bookings
            </Link>
          </li>
          <li>
            <Link 
              to="/rooms" 
              className="px-4 py-2.5 rounded-lg flex items-center gap-1 transition-all duration-300 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5"
            >
              Book Now <MdArrowForwardIos className="text-sm" />
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white text-2xl p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div className={`md:hidden fixed top-20 left-0 right-0 text-white bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <ul className="px-6 py-4 space-y-3">
          <li>
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg transition-all ${location.pathname === '/' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`block px-4 py-3 rounded-lg transition-all ${location.pathname === '/about' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={`block px-4 py-3 rounded-lg transition-all ${location.pathname === '/gallery' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/attraction" 
              className={`block px-4 py-3 rounded-lg transition-all ${location.pathname === '/attraction' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
              onClick={() => setIsOpen(false)}
            >
              Attraction
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-lg transition-all ${location.pathname === '/contact' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="pt-4 border-t border-white/20">
            <Link 
              to="/login" 
              className="block px-4 py-3 rounded-lg text-center bg-white/10 hover:bg-white/20 transition-colors mb-2"
              onClick={() => setIsOpen(false)}
            >
              My Bookings
            </Link>
            <Link 
              to="/rooms" 
              className=" px-4 py-3 rounded-lg text-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all flex items-center justify-center gap-1"
              onClick={() => setIsOpen(false)}
            >
              Book Now <MdArrowForwardIos className="text-sm" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}