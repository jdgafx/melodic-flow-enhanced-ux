'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingClient() {
    const [isAnnual, setIsAnnual] = useState(true);

    const platformTiers = [
        {
            name: 'Starter',
            description: "Just getting started? This is your entry point. You get a chatbot that books appointments while you sleep, Google Business optimization so locals can find you, and automated review responses.",
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
            description: "Where most clients land. Everything in Starter, plus an AI phone receptionist, email sequences that sound human, regular social media posts, and ad copy that drives clicks.",
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
            description: "The full package. We create your content, design your landing pages, build a complete sales funnel, train a custom AI for your business, and assign you a dedicated account manager.",
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
        { name: 'SEO Content', price: 'Starting at $149 per article', oneTime: true, setup: null, description: 'Long-form articles that rank on Google' },
        { name: 'Landing Pages', price: 'Starting at $799 one-time', oneTime: true, setup: null, description: 'Pages built to turn visitors into leads' },
        { name: 'Automated Sales Funnels', price: 'Starting at $299/mo', oneTime: false, setup: '$1,499 one-time setup', description: 'The whole funnel—soup to nuts' }
    ];

    const faqs = [
        {
            question: "What do I get in the free trial?",
            answer: "Full access to everything for 7 days. No credit card required, no catches. Try it out, and if it's not for you, walk away. Zero hassle."
        },
        {
            question: "Can you make it fit my business?",
            answer: "Everything is built specifically for your business. Chatbot scripts, emails, ads—none of it is copy-paste. We keep refining until it sounds like you."
        },
        {
            question: "What if I want to change plans?",
            answer: "Upgrade when you're ready to grow, downgrade during slower months. We adjust your billing accordingly. No fees, no hassle."
        },
        {
            question: "What if none of the plans are right for me?",
            answer: "We'll build a custom plan. Tell us what you need, and we'll put together a package that fits your situation."
        },
        {
            question: "How quickly will this actually work?",
            answer: "Depends on the service. Chatbots can start capturing leads on day one. SEO takes a few months to build momentum. Most clients see noticeable results within the first week or two."
        },
        {
            question: "Do I have to sign a long contract?",
            answer: "Month-to-month billing. If you want to cancel, give us 30 days notice. No long-term contracts, no traps."
        }
    ];

    return (
        <main className="min-h-screen bg-transparent font-poppins text-gray-200">
            <Navbar />

            <section className="bg-transparent py-20 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-emerald-500/20">
                        Transparent Pricing
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                        Straightforward Prices. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">No Hidden Fees.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        No sneaky fees. No contracts locking you in. Everything&apos;s customizable—because that&apos;s how we do things.
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className={`text-lg ${!isAnnual ? 'text-white font-bold' : 'text-gray-500'}`}>Monthly</span>
                        <button onClick={() => setIsAnnual(!isAnnual)} className={`relative w-14 h-8 rounded-full transition-colors ${isAnnual ? 'bg-emerald-500' : 'bg-gray-700'}`}>
                            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`}></div>
                        </button>
                        <span className={`text-lg ${isAnnual ? 'text-white font-bold' : 'text-gray-500'}`}>Annual</span>
                        {isAnnual && <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full font-bold border border-emerald-500/30">Save 17%</span>}
                    </div>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {platformTiers.map((tier, idx) => (
                            <div key={idx} className={`relative bg-white/5 rounded-3xl p-8 border-2 transition-all hover:shadow-2xl backdrop-blur-sm ${tier.popular ? 'border-indigo-500 scale-105 bg-white/10' : 'border-white/10 hover:bg-white/10'}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/20">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                                <div className="mb-6">
                                    <span className="text-gray-400 text-sm block mb-1">Starting at</span>
                                    <span className="text-5xl font-black text-white">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                                    <span className="text-gray-500 text-sm ml-2">/month</span>
                                    {isAnnual && <p className="text-emerald-400 text-sm font-semibold mt-1">Billed annually (${tier.annualPrice * 12}/yr)</p>}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Just Need One Thing?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Not everyone needs the full package. Grab what makes sense for you. We can tweak any of these to fit.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {alaCarteServices.map((service, idx) => (
                            <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all group backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-white group-hover:text-violet-500 transition-colors">
                                        {service.name}
                                    </h3>
                                    {service.oneTime && (
                                        <span className="bg-amber-500/10 text-amber-400 text-xs px-2 py-1 rounded-full font-semibold border border-amber-500/20">One-time</span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-violet-500">{service.price}</span>
                                    {service.oneTime ? (
                                        <span className="text-gray-500 text-sm">one-time</span>
                                    ) : (
                                        <span className="text-gray-500 text-sm">/mo</span>
                                    )}
                                </div>
                                    {service.setup && (
                                        <p className="text-gray-500 text-xs mt-2 font-medium">+ {service.setup}</p>
                                    )}
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-xs text-emerald-400 font-medium">✓ We'll tailor it to you</p>
                                    <p className="text-xs text-emerald-400 font-medium">✓ Help with setup included</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/contact" className="inline-block bg-white/5 border-2 border-indigo-500 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all backdrop-blur-sm">
                            Get Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What's in Each Plan?</h2>
                        <p className="text-gray-400">Here's the breakdown so you know what you're getting</p>
                    </div>
                    <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-1">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-6 px-6 font-bold text-white">Feature</th>
                                    <th className="text-center py-6 px-6 font-bold text-gray-400">Starter</th>
                                    <th className="text-center py-6 px-6 font-bold text-violet-500 bg-white/5 rounded-t-2xl">Professional</th>
                                    <th className="text-center py-6 px-6 font-bold text-gray-400">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { feature: 'AI Chatbot', starter: true, pro: true, enterprise: true },
                                    { feature: 'AI Voice', starter: false, pro: true, enterprise: true },
                                    { feature: 'Google Business', starter: true, pro: true, enterprise: true },
                                    { feature: 'Review Response', starter: true, pro: true, enterprise: true },
                                    { feature: 'Email Automation', starter: false, pro: true, enterprise: true },
                                    { feature: 'Social Media', starter: false, pro: true, enterprise: true },
                                    { feature: 'Ad Copy', starter: false, pro: true, enterprise: true },
                                    { feature: 'SEO Content', starter: false, pro: false, enterprise: '4/mo' },
                                    { feature: 'Landing Pages', starter: false, pro: false, enterprise: '2/mo' },
                                    { feature: 'Automated Sales Funnels', starter: false, pro: false, enterprise: true },
                                    { feature: 'Custom Integrations', starter: false, pro: true, enterprise: true },
                                    { feature: 'Support Response Time', starter: '48hr', pro: '24hr', enterprise: 'Same day' },
                                    { feature: 'Strategy Calls', starter: false, pro: 'Weekly', enterprise: '2x/week' },
                                    { feature: 'Dedicated Manager', starter: false, pro: false, enterprise: true },
                                    { feature: 'Customization', starter: 'Standard', pro: 'Full', enterprise: 'Unlimited' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-gray-300 text-sm font-medium">{row.feature}</td>
                                        <td className="text-center py-4 px-6">
                                            {typeof row.starter === 'boolean' ? (
                                                row.starter ? <CheckIcon /> : <XIcon />
                                            ) : <span className="text-gray-400 font-semibold text-xs">{row.starter}</span>}
                                        </td>
                                        <td className="text-center py-4 px-6 bg-white/5">
                                            {typeof row.pro === 'boolean' ? (
                                                row.pro ? <CheckIcon /> : <XIcon />
                                            ) : <span className="text-violet-500 font-bold text-xs">{row.pro}</span>}
                                        </td>
                                        <td className="text-center py-4 px-6">
                                            {typeof row.enterprise === 'boolean' ? (
                                                row.enterprise ? <CheckIcon /> : <XIcon />
                                            ) : <span className="text-gray-400 font-semibold text-xs">{row.enterprise}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Questions People Usually Ask</h2>
                        <p className="text-gray-400">Answers to the most common questions</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                                Want to See If This Actually Works?
                            </h2>
                            <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
                                7 days free. No card required. Walk away anytime if it's not your thing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                                    Start 7-Day Free Trial
                                </Link>
                                <Link href="/contact" className="bg-indigo-900/30 backdrop-blur text-white px-10 py-5 rounded-full font-bold text-lg border border-white/20 hover:bg-indigo-900/50 transition-all">
                                    Book Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CheckIcon() {
    return (
        <svg className="w-6 h-6 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
