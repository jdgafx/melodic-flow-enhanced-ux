'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mainNavigation = [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-white w-full h-auto shadow-sm sticky top-0 z-[100] font-poppins">
            {/* Desktop Navigation */}
            <div className="hidden xl:flex flex-row items-center justify-between py-4 h-24 w-full px-4 max-w-full">
                <div className="flex items-center">
                    <Link href="/" className="transition-opacity hover:opacity-90">
                        <img src="/logo.svg" alt="AMP Marketing" className="h-24 w-auto" />
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    {mainNavigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block py-4 px-2 text-[15px] font-bold text-gray-800 hover:text-indigo-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <Link href="/contact">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-full font-bold text-[15px] hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Get Started
                    </div>
                </Link>
            </div>

            {/* Mobile Header */}
            <div className="xl:hidden flex items-center justify-between px-4 py-4 border-b bg-white relative z-50">
                <Link href="/">
                    <img src="/logo.svg" alt="AMP Marketing" className="h-12 w-auto" />
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" /></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-80px)] shadow-inner">
                    <div className="px-4 py-6 space-y-4">
                        {mainNavigation.map((item) => (
                            <div key={item.label} className="border-b border-gray-50 pb-4 last:border-0">
                                <Link
                                    href={item.href}
                                    className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className="block bg-indigo-600 text-white text-center py-4 rounded-full font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 font-poppins">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    <div className="space-y-8">
                        <Link href="/">
                            <img src="/logo.svg" alt="AMP Marketing" className="h-12 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                        </Link>
                        <p className="text-gray-400 text-[15px] leading-relaxed pr-6">
                            Smart marketing tools that grow your business. We help you automate and scale with technology that actually works.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-8 text-white">Quick Links</h4>
                        <ul className="grid grid-cols-1 gap-3 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-8 text-white">Contact Us</h4>
                        <ul className="space-y-6 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-4 text-xl">📍</span>
                                <span>74 Northeastern Blvd #12a Ste 101<br />Nashua, NH 03062</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-4 text-xl">📧</span>
                                <a href="mailto:michael@primemarketingexperts.com" className="hover:text-white transition-colors">michael@primemarketingexperts.com</a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-4 text-xl">📞</span>
                                <a href="tel:617-651-1457" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors italic">617-651-1457</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#0b111f] py-8">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} AMP Marketing. All rights reserved.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Terms of use</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
