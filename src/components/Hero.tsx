import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Glass Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-200 tracking-wide">Real results in a matter of days</span>
          <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
        </div>

        {/* Headline - Added 'text-white' fallback before transparent/clip classes */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-white text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-sm">
          AI That Works <br />
          <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 animate-gradient-x">
            for Your Business
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold text-white mb-6">
          More Leads, Less Busywork.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          We make high-tech tools that attract leads, take your calls, and take care of your boring tasks even if you are sleeping. No complicated technical jargon. Just good results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 overflow-hidden">
               <span className="relative z-10">See If We're a Good Fit</span>
               <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </Link>
          
          <Link href="/pricing">
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium text-lg backdrop-blur-xl transition-all hover:scale-105 hover:border-white/20">
              See Our Pricing
            </button>
          </Link>
        </div>

        {/* Social Proof Strip */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple text placeholders for logos to match style */}
             <span className="text-xl font-bold text-white tracking-widest">GOOGLE</span>
             <span className="text-xl font-bold text-white tracking-widest">META</span>
             <span className="text-xl font-bold text-white tracking-widest">SHOPIFY</span>
             <span className="text-xl font-bold text-white tracking-widest">HUBSPOT</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;