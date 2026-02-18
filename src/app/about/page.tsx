import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
                            <p className="text-gray-400 text-sm">Honestly? We care only about results and not the activity. An ideal situation is that every dollar you invest would return you more money.</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No-Nonsense</h3>
                            <p className="text-gray-400 text-sm">Clear communication, upfront prices, realistic schedules. We Are not big on corporate jargon or hidden fee fluff.</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fast & Flexible</h3>
                            <p className="text-gray-400 text-sm">We break the mold and scale the heck out of your business. Trust me, no bureaucracy, no endless approvals.</p>
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
                            AMP Marketing was created by the very same hardworking team that <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" className="text-amp-accent hover:underline">Prime Marketing Experts</a>. With Michael Krieger at the helm, our core mission remains unchanged: through smart, results-driven marketing strategies to help businesses grow.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                            Back in 2017 Michael Krieger founded Prime Marketing Experts. He grew up in Boston, graduated from UMass Lowell, and has spent the better part of his career assisting businesses to achieve growth. 
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                            Throughout the journey, he saw one thing clearly: AI was getting to the point where it could make marketing not only faster but also significantly more affordable for regular businesses.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                            AMP Marketing is the result of that decision. We combined the knowledge and experience obtained at Prime with AI technology that actually works—the one you're able to get qualified leads in days rather than months. 
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8 relative z-10">
                            We have grown to serve more than 500 businesses nationwide. Whether you are a plumber or a law firm, you will get the same level of attention to detail and the focus on results that Michael has had from the very beginning.
                        </p>
                        <h2 className="text-3xl font-bold text-white mb-8 mt-12 relative z-10">The AMP Marketing Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "It is crystal clear to you, what you are paying for. You are sure, that there would be no extra fees and that you can leave whenever you want to." },
                                { icon: "📈", title: "Measurable Results", desc: "Tracking all leads is one of the main priorities for us. You'll be aware all the time if the money you've put into the campaign is actually working." },
                                { icon: "🚀", title: "Fast Setup", desc: "Most of the time, our projects get to the launch stage in approximately a week. No waiting for months to see the results." },
                                { icon: "💬", title: "Real Support", desc: "Have some questions? Simply send us an email. You will be assisted by real persons who can also manage your account." }
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
                            <Link href="/contact" className="inline-block bg-white text-amp-primary px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-white/10">
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
                            { quote: "AMP Marketing is the one that really put an end to our lead generation dilemma. We managed to scale from 10 leads a month to more than 100, only in 8 weeks. Apart from the chatbot, it is now working as a lead generator while we are asleep.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "We have done a lot of work with different agencies, but none of them has been able to deliver their results so fast. We got to see more patients interested in the first month than the whole last year put together.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "We have jumped from being the invisible ones on Google to being the leaders in the local map pack. Our phone keeps ringing with people who want to make reservations.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist is a great investment that keeps on giving every single month. We used to lose 20% of our calls due to the unavailability of people.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Our whole business has been transformed by email automation. We would spend hours on end every week doing follow-ups by hand. Now it is done automatically, and our close rate has gone up by 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "The landing page that I got was able to generate revenue of $47,000 in its first month. No, I am not kidding. That has been the best marketing investment that we have ever done, without a doubt.", author: "Jennifer P.", company: "E-commerce Business" }
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
                                    <p className="text-amp-accent text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-amp-secondary font-bold uppercase tracking-widest text-sm">Success Stories</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">Case Studies</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real-life data of the companies we've been working with. No marketing jargon.</p>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                client: "HVAC Company",
                                story: "This HVAC company was collecting approximately 15 leads a month from their website. The business was almost entirely dependent on referrals and word of mouth.",
                                solution: "Round-the-clock lead capture AI chatbot was installed, Google's business profile was fixed up and landing pages were created for the different areas they served.",
                                result: "Eight weeks thereafter? Over 100 leads in a month. That's a 567% increase. Their lead cost fell by 62%, and the automated assistant is now booking appointments.",
                                testimonial: "At first, I was not entirely convinced by them but in the end, they delivered. To be honest, our phone has not stopped ringing ever since."
                            },
                            {
                                client: "Dental Practice",
                                story: "The dental clinic is new. The dentists were in a hurry to get patients, there was a frequent occurrence of no-shows, and the whole review process was a mess.",
                                solution: "An AI-powered phone scheduler plus automated emails to follow-up new patients and ask for their feedback, were set up by us.",
                                result: "Month one: 47 new patient appointments. Number of no-shows dropped by 73%. In addition, they had managed to get 4.8 stars with more than 120 reviews.",
                                testimonial: "Besides automation, our staff gets to save 10+ hours every week and the patient flow is simply amazing."
                            }
                        ].map((study, studyIdx) => (
                            <div key={studyIdx} className="bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-sm group hover:border-indigo-500/30 transition-all">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-900/40 p-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                        <div className="text-amp-secondary text-sm font-bold uppercase tracking-widest mb-4 relative z-10">Success Story</div>
                                        <h3 className="text-3xl font-black text-white mb-6 relative z-10">{study.client}</h3>
                                        <div className="space-y-8 relative z-10">
                                            <p className="text-gray-300 leading-relaxed">{study.story}</p>
                                            <div className="pt-6 border-t border-white/10">
                                                <h4 className="font-bold text-amp-accent mb-3 uppercase tracking-wider text-xs">The Solution</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-12 flex flex-col justify-center">
                                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">The Results</h4>
                                        <p className="text-gray-300 mb-10 leading-relaxed text-lg">{study.result}</p>
                                        <div className="bg-white/5 rounded-2xl p-8 border-l-4 border-amp-secondary">
                                            <p className="text-gray-300 italic mb-4 leading-relaxed">"{study.testimonial}"</p>
                                            <p className="text-amp-secondary font-bold text-sm tracking-wide">— {study.client}</p>
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
