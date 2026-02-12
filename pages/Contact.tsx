import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col w-full relative">
            <section className="bg-gradient-to-br from-slate-900 via-indigo-900/40 to-slate-900 pt-40 pb-24 px-6 text-center border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none uppercase">Contact <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Us</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
                        Do you have any questions? Are you interested in discussing your project? Please, send us a message and we will respond to you quickly—in most cases the same day.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="bg-[#0F121C] rounded-[3rem] p-12 shadow-3xl border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amp-primary/10 blur-[100px] pointer-events-none" />
                            
                            <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">Drop Us a Line</h2>
                            <form className="space-y-8" action="https://formsubmit.co/michael@primemarketingexperts.com" method="POST">
                                <input type="hidden" name="_subject" value="New Contact Form Submission - AMP Marketing" />
                                <input type="hidden" name="_next" value="https://convertiq.com/contact?success=true" />
                                <input type="hidden" name="_honeypot" value="" />
                                
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Your Name</label>
                                        <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amp-primary transition-all font-medium" placeholder="John Smith" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                        <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amp-primary transition-all font-medium" placeholder="john@company.com" />
                                    </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                                        <input type="tel" name="phone" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amp-primary transition-all font-medium" placeholder="(555) 123-4567" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Company Name</label>
                                        <input type="text" name="company" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amp-primary transition-all font-medium" placeholder="Your Company LLC" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">What are you looking for?</label>
                                    <select name="service_interest" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amp-primary transition-all font-medium appearance-none">
                                        <option value="" className="bg-[#0F121C]">Select a service...</option>
                                        <option value="ai-chatbot" className="bg-[#0F121C]">AI Chatbot Setup</option>
                                        <option value="ai-voice" className="bg-[#0F121C]">AI Voice Receptionist</option>
                                        <option value="google-business" className="bg-[#0F121C]">Google Business Optimization</option>
                                        <option value="review-response" className="bg-[#0F121C]">AI Review Response</option>
                                        <option value="email-automation" className="bg-[#0F121C]">Email Automation</option>
                                        <option value="social-media" className="bg-[#0F121C]">Social Media Content</option>
                                        <option value="ad-copy" className="bg-[#0F121C]">AI Ad Copy</option>
                                        <option value="seo-content" className="bg-[#0F121C]">SEO Content Writing</option>
                                        <option value="landing-pages" className="bg-[#0F121C]">Landing Page Creation</option>
                                        <option value="lead-funnel" className="bg-[#0F121C]">Lead Magnet & Funnel</option>
                                        <option value="multiple" className="bg-[#0F121C]">Multiple Services</option>
                                        <option value="other" className="bg-[#0F121C]">Something Else</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">What's on your mind?</label>
                                    <textarea name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amp-primary transition-all font-medium resize-none" placeholder="What are you hoping to fix or improve? What's getting in the way?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-white text-black py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-3xl shadow-white/5">
                                    Send Message <Send className="w-6 h-6" />
                                </button>
                                
                                <p className="text-[10px] text-gray-500 text-center font-black uppercase tracking-[0.3em]">Most times, we respond within 24 hours.</p>
                            </form>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-white/5 rounded-[3rem] p-12 border border-white/10 shadow-2xl">
                                <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">Other Ways to Reach Us</h2>
                                <div className="space-y-10">
                                    <div className="flex items-center gap-8 group">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-all shadow-2xl shadow-indigo-500/10">
                                            <MapPin className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Stop by</p>
                                            <p className="text-xl text-white font-bold tracking-tight">74 Northeastern Blvd #12a Ste 101<br />Nashua, NH 03062</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 group">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-all shadow-2xl shadow-emerald-500/10">
                                            <Mail className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Email us</p>
                                            <p className="text-xl text-white font-bold tracking-tight transition-colors hover:text-amp-primary cursor-pointer underline underline-offset-4 decoration-white/10">hello@convertiq.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 group">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-all shadow-2xl shadow-amber-500/10">
                                            <Phone className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Call us</p>
                                            <p className="text-xl text-white font-bold tracking-tight transition-colors hover:text-amp-primary cursor-pointer underline underline-offset-4 decoration-white/10">617-651-1457</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[3rem] p-12 text-white shadow-3xl shadow-indigo-500/20 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight relative z-10">Let's Talk</h3>
                                <p className="text-indigo-100 mb-10 text-lg leading-relaxed font-medium relative z-10">
                                    15 minutes for free. Tell us what is your problem. You won't get pressured or pitched here — only a real conversation on whether we could be the right people to help you.
                                </p>
                                <a href="mailto:michael@primemarketingexperts.com" className="inline-block w-full bg-white text-black text-center py-6 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-2xl relative z-10">
                                    Email Us
                                </a>
                            </div>

                            <div className="bg-[#050508] border border-white/5 rounded-[3rem] p-12 text-white shadow-2xl">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-[0.1em] flex items-center gap-4">
                                    <Clock className="w-6 h-6 text-amp-primary" /> When We're Around
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Monday - Friday</span>
                                        <span className="text-white font-black">9:00 AM - 6:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Saturday</span>
                                        <span className="text-white font-black">10:00 AM - 2:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Sunday</span>
                                        <span className="text-white font-black uppercase">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
