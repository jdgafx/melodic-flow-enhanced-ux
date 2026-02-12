import React from 'react';
import { Target, Shield, Zap, CheckCircle2, ArrowRight, Heart, Star, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="flex flex-col w-full relative">
            <section className="bg-gradient-to-br from-slate-900 via-indigo-900/40 to-slate-900 pt-40 pb-24 px-6 text-center border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none uppercase">About <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AMP Marketing</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
                        We help find more leads for businesses and help them close more sales through technologies that really work.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#0F121C] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:border-amp-primary/30 transition-all text-center group">
                            <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                                <Target className="w-10 h-10 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Results-First</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">Honestly? We care only about results and not the activity. An ideal situation is that every dollar you invest would return you more money.</p>
                        </div>
                        <div className="bg-[#0F121C] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:border-emerald-500/30 transition-all text-center group">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                                <Star className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">No-Nonsense</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">Clear communication, upfront prices, realistic schedules. We Are not big on corporate jargon or hidden fee fluff.</p>
                        </div>
                        <div className="bg-[#0F121C] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:border-amber-500/30 transition-all text-center group">
                            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                                <Zap className="w-10 h-10 text-amber-400" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Fast & Flexible</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">We break the mold and scale the heck out of your business. Trust me, no bureaucracy, no endless approvals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-3xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight uppercase leading-none">Our Story</h2>
                        <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-medium">
                            <p>
                                AMP Marketing was created by the very same hardworking team that <a href="https://www.primemarketingexperts.com" target="_blank" rel="noopener noreferrer" className="text-amp-primary hover:underline font-bold transition-all">Prime Marketing Experts</a>. With Michael Krieger at the helm, our core mission remains unchanged: through smart, results-driven marketing strategies to help businesses grow.
                            </p>
                            <p>
                                Back in 2017 Michael Krieger founded Prime Marketing Experts. He grew up in Boston, graduated from UMass Lowell, and has spent the better part of his career assisting businesses to achieve growth. 
                            </p>
                            <p>
                                Throughout the journey, he saw one thing clearly: AI was getting to the point where it could make marketing not only faster but also significantly more affordable for regular businesses.
                            </p>
                            <p>
                                AMP Marketing is the result of that decision. We combined the knowledge and experience obtained at Prime with AI technology that actually works—the one you're able to get qualified leads in days rather than months. 
                            </p>
                            <p>
                                We have grown to serve more than 500 businesses nationwide. Whether you are a plumber or a law firm, you will get the same level of attention to detail and the focus on results that Michael has had from the very beginning.
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-white mt-20 mb-12 tracking-tight uppercase leading-none">The AMP Marketing Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { icon: "💸", title: "Fair Pricing", desc: "It is crystal clear to you, what you are paying for. You are sure, that there would be no extra fees and that you can leave whenever you want to." },
                                { icon: "📈", title: "Measurable Results", desc: "Tracking all leads is one of the main priorities for us. You'll be aware all the time if the money you've put into the campaign is actually working." },
                                { icon: "🚀", title: "Fast Setup", desc: "Most of the time, our projects get to the launch stage in approximately a week. No waiting for months to see the results." },
                                { icon: "💬", title: "Real Support", desc: "Have some questions? Simply send us an email. You will be assisted by real persons who can also manage your account." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6 group">
                                    <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-20">
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                                Let us Get to Work <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tight uppercase leading-none">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { quote: "AMP Marketing is the one that really put an end to our lead generation dilemma. We managed to scale from 10 leads a month to more than 100, only in 8 weeks. Apart from the chatbot, it is now working as a lead generator while we are asleep.", author: "Mike R.", company: "HVAC Company Owner" },
                            { quote: "We have done a lot of work with different agencies, but none of them has been able to deliver their results so fast. We got to see more patients interested in the first month than the whole last year put together.", author: "Sarah L.", company: "Dental Practice" },
                            { quote: "We have jumped from being the invisible ones on Google to being the leaders in the local map pack. Our phone keeps ringing with people who want to make reservations.", author: "James T.", company: "Local Restaurant Owner" },
                            { quote: "The AI voice receptionist is a great investment that keeps on giving every single month. We used to lose 20% of our calls due to the unavailability of people.", author: "Amanda K.", company: "Law Firm" },
                            { quote: "Our whole business has been transformed by email automation. We would spend hours on end every week doing follow-ups by hand. Now it is done automatically, and our close rate has gone up by 40%.", author: "David M.", company: "Real Estate Agency" },
                            { quote: "The landing page that I got was able to generate revenue of $47,000 in its first month. No, I am not kidding. That has been the best marketing investment that we have ever done, without a doubt.", author: "Jennifer P.", company: "E-commerce Business" }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-[2rem] p-10 text-left hover:bg-white/[0.08] transition-all">
                                <div className="flex gap-1 mb-6 text-amber-500">
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                </div>
                                <p className="text-xl text-gray-300 italic mb-8 leading-relaxed font-medium">\"{testimonial.quote}\"</p>
                                <div className="border-t border-white/10 pt-6">
                                    <p className="text-white font-black text-lg uppercase tracking-tight">{testimonial.author}</p>
                                    <p className="text-amp-primary font-bold text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#050508]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-amp-primary font-bold uppercase tracking-widest text-sm mb-4 block">Success Stories</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 tracking-tight leading-none uppercase">Case Studies</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Real-life data of the companies we've been working with. No marketing jargon.</p>
                    </div>
                    <div className="space-y-12">
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
                        ].map((study, idx) => (
                            <div key={idx} className="bg-[#0F121C] rounded-[3rem] border border-white/5 shadow-3xl overflow-hidden group hover:border-amp-primary/20 transition-all">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 p-12 md:p-16 text-white flex flex-col justify-center">
                                        <div className="text-indigo-300 text-xs font-black uppercase tracking-[0.2em] mb-6">Success Story</div>
                                        <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase leading-tight">{study.client}</h3>
                                        <div className="space-y-10">
                                            <p className="text-indigo-100 text-lg leading-relaxed font-medium opacity-90">{study.story}</p>
                                            <div className="pt-8 border-t border-white/10">
                                                <h4 className="font-black text-white text-lg uppercase tracking-widest mb-4">The Solution</h4>
                                                <p className="text-indigo-100/80 leading-relaxed font-medium">{study.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-12 md:p-16 flex flex-col justify-center">
                                        <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">The Results</h4>
                                        <p className="text-gray-400 text-xl mb-12 leading-relaxed font-medium">{study.result}</p>
                                        <div className="bg-white/5 rounded-[2rem] p-10 border-l-[6px] border-amp-primary shadow-2xl">
                                            <p className="text-gray-300 italic text-xl mb-6 leading-relaxed">\"{study.testimonial}\"</p>
                                            <p className="text-amp-primary font-black text-sm uppercase tracking-widest">— {study.client}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
