'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav 
        className={`
          transition-all duration-500 ease-out w-full
          ${scrolled || isOpen ? 'bg-black/80 border-b border-white/10 shadow-2xl backdrop-blur-xl' : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Custom Logo Implementation */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none">
            {/* Icon Container */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-b from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
               <div className="w-full h-full bg-[#0a0a0f] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-50"></div>
                  <Zap className="w-5 h-5 text-white fill-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))' }} />
               </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline leading-none mb-1">
                 <span className="text-xl font-bold text-white tracking-tight mr-1">AMP</span>
                 <span className="text-xl font-black text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Marketing</span>
              </div>
              <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase pl-0.5">Growth on Autopilot</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className={`px-5 py-2 text-sm font-medium transition-all rounded-full ${pathname === item.href ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-indigo-50 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10 flex flex-col space-y-2 animate-in slide-in-from-top-4 fade-in duration-300">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-lg font-medium text-gray-300 hover:text-white py-3 px-4 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-4 bg-white text-black py-3 rounded-lg font-bold">
                Get Started
              </button>
            </Link>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
