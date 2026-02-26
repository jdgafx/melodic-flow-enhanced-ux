import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI-Driven Growth for 500+ Businesses",
  description: "Founded by Michael Krieger, AMP Marketing combines Prime Marketing Experts' decade of experience with AI technology to deliver faster, more affordable lead generation for businesses nationwide.",
  keywords: ["about AMP Marketing", "Michael Krieger marketing", "Prime Marketing Experts", "AI marketing company", "marketing agency Nashua NH", "small business lead generation agency", "AI-powered business growth", "digital marketing agency New Hampshire", "AI marketing firm Boston area", "Nashua NH digital marketing", "results-driven marketing agency", "marketing automation company"],
  openGraph: {
    title: "About Us | Smart Marketing, Real Results",
    description: "From Prime Marketing Experts to AMP Marketing — we've helped 500+ businesses grow with AI-powered lead generation, chatbots, and sales automation.",
    url: "https://melodic-flow-enhanced-ux.netlify.app/about",
  },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent font-poppins text-gray-200">
            <Navbar />

            <section className="bg-transparent py-24 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">About AMP Marketing</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We help find more leads for businesses and help them close more sales through technologies that really work.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                            <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/20">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Results-First</h3>
                            <p className="text-gray-400 text-sm">We measure success by outcomes, not activity. Every dollar you invest should bring back more in return.</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No-Nonsense</h3>
                            <p className="text-gray-400 text-sm">Clear communication, upfront prices, realistic timelines. No corporate jargon, no hidden fees.</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fast & Flexible</h3>
                            <p className="text-gray-400 text-sm">We move fast and scale with your business. No bureaucracy, no endless approval chains.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Our Story</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                            AMP Marketing was built by the same team behind <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline">Prime Marketing Experts</a>. With Michael Krieger at the helm, our core mission hasn't changed: help businesses grow through smart, results-driven marketing.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                            Michael founded Prime Marketing Experts back in 2017. He grew up in Boston, graduated from UMass Lowell, and has spent the better part of his career helping businesses scale. Along the way, he saw something clearly: AI had reached a point where it could make marketing faster and far more affordable for everyday businesses.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                            AMP Marketing is the result of that realization. We took everything we learned at Prime and combined it with AI tools that deliver qualified leads in days, not months.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8 relative z-10">
                            Today we serve over 500 businesses nationwide. Whether you're a plumber or a law firm, you get the same attention to detail and focus on results that Michael has brought to every project since day one.
                        </p>
                        <h2 className="text-3xl font-bold text-white mb-8 mt-12 relative z-10">The AMP Marketing Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "You know exactly what you're paying for. No surprise fees, and you can cancel whenever you want." },
                                { icon: "📈", title: "Measurable Results", desc: "We track every lead so you always know whether your investment is paying off." },
                                { icon: "🚀", title: "Fast Setup", desc: "Most projects launch within a week. No waiting months to see results." },
                                { icon: "💬", title: "Real Support", desc: "Questions? Send us an email. Real people manage your account and respond quickly." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 relative z-10">
                            <Link href="/contact" className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-white/10">
                                Let us Get to Work →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black/20">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-4xl font-black text-white mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { quote: "We scaled from 10 leads a month to over 100 in just 8 weeks. The chatbot generates leads around the clock while we focus on running the business.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "We've worked with several agencies before, but none delivered this fast. More patients showed interest in month one than we saw all of last year.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "We went from invisible on Google to the top of the local map pack. The phone rings nonstop with people wanting to book reservations.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist keeps paying for itself every month. We used to lose 20% of calls because nobody could pick up.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Email automation transformed our business. We used to spend hours every week on manual follow-ups. Now it runs itself, and our close rate is up 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "Our landing page generated $47,000 in revenue during its first month. Not a typo. Best marketing investment we've ever made.", author: "Jennifer P.", company: "E-commerce Business" }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-white/5 rounded-2xl p-8 text-left border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="text-amber-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-white font-bold">{testimonial.author}</p>
                                    <p className="text-violet-500 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Success Stories</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">Case Studies</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real numbers from real clients. No marketing fluff.</p>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                client: "HVAC Company",
                                story: "This HVAC company was pulling about 15 leads a month from their website. The business relied almost entirely on referrals and word of mouth.",
                                solution: "We installed a 24/7 AI chatbot for lead capture, optimized their Google Business profile, and built landing pages targeting the areas they serve.",
                                result: "Eight weeks later: over 100 leads in a single month. That's a 567% increase. Their cost per lead dropped 62%, and the chatbot now books appointments automatically.",
                                testimonial: "I wasn't sure at first, but they delivered. Our phone hasn't stopped ringing since."
                            },
                            {
                                client: "Dental Practice",
                                story: "A new dental clinic struggling to fill chairs. Too many no-shows, and their online reviews were a mess.",
                                solution: "We set up an AI-powered phone scheduler plus automated follow-up emails to confirm appointments and request patient feedback.",
                                result: "Month one: 47 new patient appointments. No-shows dropped 73%. They hit a 4.8-star rating with over 120 reviews.",
                                testimonial: "Our staff saves 10+ hours every week with the automation, and patient flow has been incredible."
                            }
                        ].map((study, studyIdx) => (
                            <div key={studyIdx} className="bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-sm group hover:border-indigo-500/30 transition-all">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-900/40 p-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                        <div className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4 relative z-10">Success Story</div>
                                        <h3 className="text-3xl font-black text-white mb-6 relative z-10">{study.client}</h3>
                                        <div className="space-y-8 relative z-10">
                                            <p className="text-gray-300 leading-relaxed">{study.story}</p>
                                            <div className="pt-6 border-t border-white/10">
                                                <h4 className="font-bold text-violet-500 mb-3 uppercase tracking-wider text-xs">The Solution</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-12 flex flex-col justify-center">
                                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">The Results</h4>
                                        <p className="text-gray-300 mb-10 leading-relaxed text-lg">{study.result}</p>
                                        <div className="bg-white/5 rounded-2xl p-8 border-l-4 border-blue-500">
                                            <p className="text-gray-300 italic mb-4 leading-relaxed">"{study.testimonial}"</p>
                                            <p className="text-blue-500 font-bold text-sm tracking-wide">— {study.client}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
