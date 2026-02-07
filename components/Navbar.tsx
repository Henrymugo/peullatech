import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Menu, X, Cpu, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useData();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-40 transition-all duration-300
        ${scrolled ? 'bg-peulla-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-peulla-neonBlue to-peulla-neonPurple rounded-lg group-hover:shadow-neon transition-shadow duration-300">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Peulla<span className="text-peulla-neonBlue">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                text-sm font-medium tracking-wide transition-colors duration-200
                ${location.pathname === item.path ? 'text-peulla-neonBlue' : 'text-gray-400 hover:text-white'}
              `}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Admin Icon */}
          <Link 
            to={isAuthenticated ? "/admin/dashboard" : "/admin"}
            className={`
              p-2 rounded-full transition-colors duration-300
              ${isAuthenticated ? 'text-peulla-neonBlue bg-peulla-neonBlue/10' : 'text-gray-400 hover:text-white'}
            `}
            aria-label="Admin Panel"
            title="Admin Access"
          >
            <ShieldCheck className="w-5 h-5" />
          </Link>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full border border-peulla-neonBlue/30 text-peulla-neonBlue text-sm font-semibold hover:bg-peulla-neonBlue hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.1)] hover:shadow-neon"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 bg-peulla-dark/95 backdrop-blur-xl z-30 flex flex-col items-center justify-center gap-8
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ top: '0', left: '0', height: '100vh', width: '100vw' }}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              text-2xl font-semibold tracking-wide
              ${location.pathname === item.path ? 'text-peulla-neonBlue' : 'text-white'}
            `}
          >
            {item.label}
          </Link>
        ))}

        <Link
            to={isAuthenticated ? "/admin/dashboard" : "/admin"}
            className={`
              text-xl font-semibold tracking-wide flex items-center gap-2
              ${isAuthenticated ? 'text-peulla-neonBlue' : 'text-gray-400'}
            `}
          >
            <ShieldCheck className="w-6 h-6" /> Admin Access
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;