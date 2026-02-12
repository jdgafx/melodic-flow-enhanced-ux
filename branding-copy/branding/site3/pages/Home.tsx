import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Rocket, Lightbulb, Phone, Settings, Bot, Mail, MapPin, Star, CheckCircle2, ArrowUpRight, Zap, Target, Shield, ChevronDown, Plus, Minus, BarChart3, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Components ---

const LogoMarquee = () => {
  const logos = [
    "ACME Corp", "TechFlow", "GlobalSync", "Nebula", "Vertex", "Orbit", "Quantum", "Hyperion", "Pinnacle", "Zenith"
  ];
  
  return (
    <div className="w-full overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm py-8 mb-20">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 px-8">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-xl md:text-2xl font-black tracking-widest text-white/20 uppercase select-none hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 px-8">
           {/* Duplicate for seamless loop if needed */}
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`p-1 rounded-full border border-white/10 transition-all ${isOpen ? 'bg-white text-black rotate-180' : 'bg-transparent text-gray-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all group">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-amp-primary shadow-lg shadow-amp-primary/20 z-10 group-hover:scale-110 transition-transform">
            {number}
        </div>
        <h3 className="text-xl font-bold text-white mt-4 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </div>
);

// --- Main Page ---

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full relative">
        <Hero />

        {/* Marquee Social Proof */}
        <LogoMarquee />

        {/* Value Props */}
        <section className="px-6 pb-20 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                        <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Save 20+ Hours/Week</h3>
                    <p className="text-gray-400">Stop doing manual outreach. Our agents work 24/7 without coffee breaks or holidays.</p>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                        <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Precision Targeting</h3>
                    <p className="text-gray-400">We don't spray and pray. We identify your exact ICP and engage them with personalized messages.</p>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
                    <p className="text-gray-400">Handle 10x the lead volume without hiring a single new employee. Built for scale.</p>
                </div>
            </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-20 px-6 relative z-10 bg-black/40" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <span className="text-amp-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Our Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Complete Stack</span>
              </h2>
              <p className="text-lg text-gray-400">
                A unified platform of AI agents designed to replace your busywork with automated workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4">
              
              {/* Feature 1 - Large */}
              <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden bg-[#0F121C] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-amp-primary/50 transition-colors">
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                        <Phone className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">AI Voice Receptionist</h3>
                    <p className="text-gray-400 text-lg max-w-md">
                        Your phone line is your lifeline. Our AI answers instantly, qualifies leads, checks your calendar, and books appointments directly. It sounds so human, they won't know it's a robot.
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
                <div className="mt-8">
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Natural Voice</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">24/7 Active</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">CRM Sync</span>
                    </div>
                </div>
              </div>

              {/* Feature 2 - Tall */}
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#0F121C] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Smart Chatbots</h3>
                <p className="text-gray-400 text-sm mb-6">
                    Turn website visitors into booked meetings. Our chatbots don't just say "hello"—they sell.
                </p>
                <div className="absolute bottom-6 right-6">
                    <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
                </div>
                {/* Visual abstract representation */}
                <div className="mt-8 space-y-3 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2 justify-end"><div className="bg-purple-500/20 p-2 rounded-l-xl rounded-t-xl text-[10px] text-purple-200">Do you offer pricing?</div></div>
                    <div className="flex gap-2"><div className="bg-white/10 p-2 rounded-r-xl rounded-t-xl text-[10px] text-gray-300">Yes! Plans start at $997.</div></div>
                </div>
              </div>

              {/* Feature 3 - Wide */}
              <div className="md:col-span-3 md:row-span-1 relative group overflow-hidden bg-[#0F121C] border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-colors">
                 <div className="flex items-start justify-between">
                    <div>
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                            <Rocket className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Sales Funnels</h3>
                        <p className="text-gray-400 text-sm mt-2">High-converting landing pages built to sell.</p>
                    </div>
                 </div>
              </div>

              {/* Feature 4 - Wide */}
              <div className="md:col-span-3 md:row-span-1 relative group overflow-hidden bg-[#0F121C] border border-white/10 rounded-3xl p-8 hover:border-green-500/50 transition-colors">
                 <div className="flex items-start justify-between">
                    <div>
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                            <Lightbulb className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white">SEO Engine</h3>
                        <p className="text-gray-400 text-sm mt-2">Content that ranks #1 on Google automatically.</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works - Process */}
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">From Chaos to <span className="text-amp-primary">Control</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Our proven 4-step framework to automate your business operations.</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    <ProcessStep 
                        number="01" 
                        title="Audit & Strategy" 
                        desc="We analyze your current workflow to identify bottlenecks and high-impact automation opportunities." 
                    />
                    <ProcessStep 
                        number="02" 
                        title="Build & Train" 
                        desc="We develop your custom AI agents and train them on your specific business knowledge base." 
                    />
                    <ProcessStep 
                        number="03" 
                        title="Integration" 
                        desc="We plug the systems into your existing stack (CRM, Calendar, Email) for seamless data flow." 
                    />
                    <ProcessStep 
                        number="04" 
                        title="Launch & Scale" 
                        desc="We go live, monitor performance, and optimize the agents to maximize your ROI." 
                    />
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 relative z-10 bg-white/[0.02]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    <FaqItem 
                        question="How long does it take to see results?" 
                        answer="Most clients see their first automated booking or lead within 7 days of launch. Our setup process is designed for speed." 
                    />
                    <FaqItem 
                        question="Do I need technical skills to manage this?" 
                        answer="Not at all. We build 'Done-For-You' systems. Once set up, they run automatically. We provide a simple dashboard for you to view results." 
                    />
                    <FaqItem 
                        question="Does the AI Voice Receptionist sound robotic?" 
                        answer="No. We use the latest conversational AI models with ultra-low latency and human-like intonation. Most callers cannot distinguish it from a human." 
                    />
                    <FaqItem 
                        question="Can you integrate with my specific CRM?" 
                        answer="Yes, we integrate with HubSpot, Salesforce, GoHighLevel, Pipedrive, and 3,000+ other tools via Zapier and custom APIs." 
                    />
                    <FaqItem 
                        question="Is my data secure?" 
                        answer="Absolutely. We adhere to strict data privacy standards. Your business data is used solely to train your specific agents and is never shared." 
                    />
                </div>
            </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-50" />
            
            <div className="relative bg-[#0F121C] border border-white/10 rounded-3xl p-10 md:p-20 text-center overflow-hidden shadow-2xl shadow-indigo-500/10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-secondary to-amp-accent">Automate?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Stop wasting time on manual follow-ups. Let our AI handle the grunt work so you can focus on closing.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Book a Strategy Call
                    </button>
                    <Link to="/pricing" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-medium text-lg hover:bg-white/5 transition-colors">
                        View Pricing
                    </Link>
                </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Home;