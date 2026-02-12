import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Zap, Shield, Target } from 'lucide-react';

const Pricing: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const platformTiers = [
        {
            name: 'Starter',
            description: "What if you are just figuring things out? That should be your starting point. You get a chatbot that books appointments for you when you sleep, we'll optimize your Google listing so the locals can actually find you, and reviews will be answered automatically. Close to a dozen sign-ups a month.",
            monthlyPrice: 297,
            annualPrice: 247,
            features: [
                'AI Chatbot Setup',
                'Google Business Optimization',
                'AI Review Response System',
                'Email support (48hr response)',
                'Basic analytics dashboard',
                '7-day free trial'
            ],
            cta: 'Start Free Trial',
            popular: false
        },
        {
            name: 'Professional',
            description: "If you ask us most clients end up here. You get everything from Starter plus a phone bot that automatically answers your phone when you can't, email sequences that don't sound like spam, regular social media posts, and ad copy that people actually click on.",
            monthlyPrice: 597,
            annualPrice: 497,
            features: [
                'Everything in Starter, plus:',
                'AI Voice Receptionist',
                'Email Automation Sequences',
                'Social Media Content (20 posts/mo)',
                'AI Ad Copy Optimization',
                'Priority support (24hr response)',
                'Weekly performance calls',
                'Custom integrations'
            ],
            cta: 'Start Free Trial',
            popular: true
        },
        {
            name: 'Enterprise',
            description: "That's the complete one. We create your content, design your landing pages, establish a complete sales funnel, train an AI which understands your business, and you are assigned a personal manager who knows your business inside out.",
            monthlyPrice: 1297,
            annualPrice: 1097,
            features: [
                'Everything in Professional, plus:',
                'SEO Content Writing (4 articles/mo)',
                'Landing Page Creation (2/mo)',
                'Lead Magnet & Funnel Setup',
                'Custom AI model training',
                'Same-day priority support',
                'Bi-weekly strategy sessions',
                'White-glove onboarding',
                'Dedicated account manager'
            ],
            cta: 'Schedule Consultation',
            popular: false
        }
    ];

    const alaCarteServices = [
        { name: 'AI Chatbot', price: 'Starting at $149/mo', oneTime: false, setup: '$497 one-time setup', description: 'A bot that grabs leads while you sleep' },
        { name: 'AI Voice', price: 'Starting at $249/mo', oneTime: false, setup: '$497 one-time setup', description: 'Picks up so you never miss a call again' },
        { name: 'Google Business', price: 'Starting at $399 one-time', oneTime: true, setup: null, description: 'Get found on Maps—usually takes 3-7 days' },
        { name: 'Review Response', price: 'Starting at $99/mo', oneTime: false, setup: null, description: 'Replies to reviews without you lifting a finger' },
        { name: 'Email Automation', price: 'Starting at $49/mo', oneTime: false, setup: '$199 one-time setup', description: 'Follow-ups that actually get opened' },
        { name: 'Social Media', price: 'Starting at $299/mo', oneTime: false, setup: null, description: '20 posts a month so you stay visible' },
        { name: 'Ad Copy', price: 'Starting at $199/mo', oneTime: false, setup: '$299 one-time setup', description: 'Words that make people click' },
        { name: 'SEO Content', price: 'Starting at $149 per article', oneTime: true, setup: null, description: 'Long-form stuff that ranks on Google' },
        { name: 'Landing Pages', price: 'Starting at $799 one-time', oneTime: true, setup: null, description: 'Pages built to turn visitors into leads' },
        { name: 'Automated Sales Funnels', price: 'Starting at $299/mo', oneTime: false, setup: '$1,499 one-time setup', description: 'The whole funnel—soup to nuts' }
    ];

    return (
        <div className="flex flex-col w-full relative">
            <section className="bg-gradient-to-br from-[#0A0C14] via-indigo-900/20 to-[#0A0C14] pt-40 pb-24 px-6 text-center border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mb-6">
                        Transparent Pricing
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
                        Straightforward Prices. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">No Hidden Fees.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        No sneaky fees. No contracts locking you in. Everything&apos;s customizable—because that&apos;s how we do things.
                    </p>
                    
                    <div className="flex items-center justify-center gap-6">
                        <span className={`text-lg font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                        <button 
                            onClick={() => setIsAnnual(!isAnnual)} 
                            className={`relative w-16 h-8 rounded-full transition-all ${isAnnual ? 'bg-amp-primary' : 'bg-gray-700'}`}
                        >
                            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`}></div>
                        </button>
                        <span className={`text-lg font-bold transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
                        {isAnnual && <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20 font-black">Save 17%</span>}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platformTiers.map((tier, idx) => (
                            <div key={idx} className={`relative bg-[#0F121C] rounded-[2.5rem] p-10 border-2 transition-all hover:translate-y-[-8px] ${tier.popular ? 'border-amp-primary shadow-2xl shadow-amp-primary/20' : 'border-white/5'}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amp-primary to-amp-accent text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{tier.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-10 min-h-[80px]">{tier.description}</p>
                                <div className="mb-10">
                                    <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Starting at</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black text-white">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                                        <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">/ month</span>
                                    </div>
                                    {isAnnual && <p className="text-emerald-400 text-sm font-bold mt-4">Billed annually (${tier.annualPrice * 12}/yr)</p>}
                                </div>
                                <div className="space-y-4 mb-12">
                                    {tier.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className={`block w-full text-center py-5 rounded-2xl font-black text-lg transition-all ${tier.popular ? 'bg-white text-black hover:bg-gray-200 shadow-xl' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4 tracking-tight leading-none uppercase">Just Need One Thing?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Not everyone needs the full package. Grab what makes sense for you. We can tweak any of these to fit.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {alaCarteServices.map((service, idx) => (
                            <div key={idx} className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-amp-primary/30 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold text-white group-hover:text-amp-primary transition-colors tracking-tight">
                                        {service.name}
                                    </h3>
                                    {service.oneTime && (
                                        <span className="bg-orange-500/10 text-orange-400 text-[10px] px-2 py-1 rounded-md border border-orange-500/20 font-black uppercase tracking-widest">One-time</span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed min-h-[40px]">{service.description}</p>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-white">{service.price}</span>
                                    </div>
                                    {service.setup && (
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">+ {service.setup}</p>
                                    )}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                                    <p className="text-[10px] text-amp-primary font-black uppercase tracking-widest flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3" /> We'll tailor it to you
                                    </p>
                                    <p className="text-[10px] text-amp-primary font-black uppercase tracking-widest flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3" /> Help with setup included
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-16 text-center tracking-tight leading-none uppercase">Questions People Usually Ask</h2>
                    <div className="grid gap-6">
                        {[
                            {
                                question: "What do I get in the free trial?",
                                answer: "It is everything. The whole thing. 7 days, no credit card required, no strange catches. Try it out. If it's not for you, no problem—just don't continue. Zero hassle."
                            },
                            {
                                question: "Can you make it fit my business?",
                                answer: "There is no one-size-fits-all with us. We don't do copy-paste for the same content all over the place. Your chatbot scripts, emails, ads—everything is created specifically for YOUR business. We'll keep working on it until it really sounds like you."
                            },
                            {
                                question: "What if I want to change plans?",
                                answer: "Absolutely. Upgrade when you feel like expanding, downgrade if less busy. We make sure your bill is the right one. No fees, no guilt."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all">
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-r from-amp-primary to-amp-secondary rounded-[3rem] mx-6 mb-24 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-none">
                        Want to See If This <br /> Actually Works?
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
                        7 days free. No card required. Walk away anytime if it's not your thing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            Start 7-Day Free Trial
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
