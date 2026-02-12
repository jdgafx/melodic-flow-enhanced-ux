import React from 'react';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
                 
                 {/* Footer Logo */}
                 <Link to="/" className="flex items-center gap-3 cursor-pointer group select-none mb-6">
                    <div className="relative w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-purple-500/10">
                    <div className="w-full h-full bg-[#0a0a0f] rounded-[7px] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-50"></div>
                        <Zap className="w-5 h-5 text-transparent fill-current" style={{ fill: 'url(#logo-gradient-footer)', filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))' }} />
                        <svg width="0" height="0" className="absolute">
                            <linearGradient id="logo-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#60A5FA" offset="0%" />
                            <stop stopColor="#A855F7" offset="100%" />
                            </linearGradient>
                        </svg>
                    </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                    <div className="flex items-baseline leading-none mb-0.5">
                        <span className="text-lg font-bold text-white tracking-tight mr-1">AMP</span>
                        <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 drop-shadow-[0_2px_5px_rgba(165,180,252,0.2)]">Marketing</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-slate-500 tracking-[0.2em] uppercase pl-0.5">Growth on Autopilot</span>
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
                    <li><Link to="/services/ai-chatbot" className="hover:text-amp-primary transition-colors">AI Chatbot</Link></li>
                    <li><Link to="/services/ai-voice" className="hover:text-amp-primary transition-colors">AI Voice</Link></li>
                    <li><Link to="/services/lead-funnel" className="hover:text-amp-primary transition-colors">Sales Funnels</Link></li>
                    <li><Link to="/services/seo-content" className="hover:text-amp-primary transition-colors">SEO Engine</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
                <ul className="space-y-4 text-gray-500 text-sm font-medium">
                    <li><Link to="/about" className="hover:text-amp-primary transition-colors">About Us</Link></li>
                    <li><Link to="/pricing" className="hover:text-amp-primary transition-colors">Pricing</Link></li>
                    <li><Link to="/contact" className="hover:text-amp-primary transition-colors">Contact</Link></li>
                    <li><Link to="/blog" className="hover:text-amp-primary transition-colors">Blog</Link></li>
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
                <span className="hover:text-gray-400 cursor-pointer">Built with AI</span>
            </div>
        </div>
      </footer>
  );
};

export default Footer;
