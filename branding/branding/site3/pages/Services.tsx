import React from 'react';
import { Rocket, Phone, Lightbulb, Bot, Check, ArrowRight, Zap, Database, MessageSquare, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full relative z-0">
        
        {/* Header */}
        <div className="pt-40 pb-20 px-6 text-center">
             <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="text-xs font-bold text-amp-accent tracking-widest uppercase">Our Capabilities</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                 Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Growth Engine</span>
             </h1>
             <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                 We don't just sell software. We build custom infrastructure that attracts, nurtures, and converts leads automatically.
             </p>
        </div>

        {/* Integration Strip */}
        <div className="border-y border-white/5 bg-black/20 py-10 mb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-gray-500 font-mono mb-6 uppercase tracking-widest">Powering integrations with</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Text Placeholders for Tech Stack Logos */}
                    <span className="text-xl font-bold text-white">OpenAI</span>
                    <span className="text-xl font-bold text-white">HubSpot</span>
                    <span className="text-xl font-bold text-white">Zapier</span>
                    <span className="text-xl font-bold text-white">Twilio</span>
                    <span className="text-xl font-bold text-white">Shopify</span>
                    <span className="text-xl font-bold text-white">Stripe</span>
                </div>
            </div>
        </div>

        {/* Detailed Services */}
        <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-32">
            
            {/* Service 1: Voice */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                        <Phone className="w-7 h-7" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">AI Voice Receptionist</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Stop losing revenue to missed calls. Our AI receptionist answers 24/7, handles complex queries, and books appointments directly into your calendar. It sounds so natural, your customers won't believe it's AI.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                                <h4 className="text-white font-bold">24/7 Availability</h4>
                                <p className="text-sm text-gray-500">Never miss a lead, even at 3 AM.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                                <h4 className="text-white font-bold">Instant Booking</h4>
                                <p className="text-sm text-gray-500">Syncs with Calendly/Google Calendar.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-1" />
                            <div>
                                <h4 className="text-white font-bold">CRM Injection</h4>
                                <p className="text-sm text-gray-500">Automatically logs call transcripts and details.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                    <div className="relative bg-[#0F121C] border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-center items-center overflow-hidden">
                        {/* Abstract UI Representation */}
                        <div className="w-full max-w-xs bg-black/40 rounded-xl p-4 border border-white/5 mb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs">AI</div>
                                <div className="h-2 w-20 bg-white/20 rounded-full animate-pulse" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/5 rounded-full" />
                                <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                            </div>
                        </div>
                        <div className="w-full max-w-xs bg-blue-900/10 rounded-xl p-4 border border-blue-500/20 ml-8">
                             <div className="flex items-center gap-3 mb-3 justify-end">
                                <div className="h-2 w-20 bg-blue-500/20 rounded-full" />
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">User</div>
                            </div>
                             <div className="space-y-2">
                                <div className="h-2 w-full bg-blue-500/10 rounded-full" />
                                <div className="h-2 w-1/2 bg-blue-500/10 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service 2: Chatbots */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
                    <div className="relative bg-[#0F121C] border border-white/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
                        <Bot className="w-32 h-32 text-purple-400 opacity-80" />
                    </div>
                </div>
                <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                        <MessageSquare className="w-7 h-7" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">Intelligent Chat Agents</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        A static website is a dead website. Transform your site into a conversion machine with AI agents that engage visitors, answer questions, and guide them to checkout.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                            <h5 className="text-white font-bold">Instant</h5>
                            <p className="text-xs text-gray-500">0s response time</p>
                         </div>
                         <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <Database className="w-6 h-6 text-pink-400 mb-2" />
                            <h5 className="text-white font-bold">Knowledge</h5>
                            <p className="text-xs text-gray-500">Trained on your data</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* Service 3: SEO */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                        <Globe className="w-7 h-7" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">SEO Content Engine</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Dominate your niche. We build automated content pipelines that research keywords, write high-quality articles, and publish them to your site to capture organic traffic.
                    </p>
                    <Link to="/pricing" className="inline-flex items-center gap-2 text-amp-secondary hover:text-white transition-colors font-bold">
                        View Packages <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="order-1 md:order-2 relative">
                     <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
                     <div className="relative bg-[#0F121C] border border-white/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
                        <Lightbulb className="w-32 h-32 text-green-400 opacity-80" />
                     </div>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto px-6 pb-20 w-full">
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h3>
                <p className="text-gray-300 mb-8">Book a free audit call. We'll analyze your business and tell you exactly which automations will generate the highest ROI.</p>
                <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    Book Audit
                </button>
            </div>
        </div>
    </div>
  );
};

export default Services;