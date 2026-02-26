import React from 'react';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
                 
                 {/* Footer Logo */}
                 <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none mb-6">
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-b from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-purple-500/20 flex-shrink-0">
                    <div className="w-full h-full bg-[#0a0a0f] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-50"></div>
                        <Zap className="w-5 h-5 text-white fill-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))' }} />
                    </div>
                    </div>

                    <div className="flex flex-col justify-center">
                    <div className="flex items-baseline leading-none mb-0.5">
                        <span className="text-xl font-bold text-white tracking-tight mr-1">AMP</span>
                        <span className="text-xl font-black text-white drop-shadow-[0_2px_5px_rgba(255,255,255,0.3)]">Marketing</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase pl-0.5">Growth on Autopilot</span>
                    </div>
                 </Link>

                 <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                    Growth on autopilot. We build systems that help businesses scale without the headache.
                 </p>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer flex items-center justify-center text-gray-400 hover:text-white">
                        <Twitter className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer flex items-center justify-center text-gray-400 hover:text-white">
                        <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer flex items-center justify-center text-gray-400 hover:text-white">
                        <Instagram className="w-5 h-5" />
                    </div>
                 </div>
            </div>
            
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Services</h4>
                <ul className="space-y-4 text-gray-500 text-sm font-medium">
                    <li><Link href="/services/ai-chatbot" className="hover:text-indigo-500 transition-colors">AI Chatbot</Link></li>
                    <li><Link href="/services/ai-voice" className="hover:text-indigo-500 transition-colors">AI Voice</Link></li>
                    <li><Link href="/services/lead-funnel" className="hover:text-indigo-500 transition-colors">Sales Funnels</Link></li>
                    <li><Link href="/services/seo-content" className="hover:text-indigo-500 transition-colors">SEO Engine</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
                <ul className="space-y-4 text-gray-500 text-sm font-medium">
                    <li><Link href="/about" className="hover:text-indigo-500 transition-colors">About Us</Link></li>
                    <li><Link href="/pricing" className="hover:text-indigo-500 transition-colors">Pricing</Link></li>
                    <li><Link href="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
                    <li><Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Legal</h4>
                <ul className="space-y-4 text-gray-500 text-sm font-medium">
                    <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Cookie Policy</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">© 2026 AMP Marketing. All rights reserved.</p>
            <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                <span className="text-gray-600 text-[8px] tracking-wider">built by Chris Gentile / CGDarkstardev1 / NewDawn AI</span>
            </div>
        </div>
      </footer>
  );
};

export default Footer;
