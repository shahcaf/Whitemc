import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Game Modes", href: "#gamemodes" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-glass' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo and Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="/whitemc-logo.png" alt="WhiteMC Logo" className="w-10 h-10 object-contain" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-brand-silver hover:text-white transition-colors duration-300 relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-brand-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-dark/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-80 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
      }`}>
        <div className="flex flex-col items-center gap-5 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-brand-silver hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full w-full justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-emerald-400 tracking-wider">
              1,432 PLAYERS ONLINE
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
