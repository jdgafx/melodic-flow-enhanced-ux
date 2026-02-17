import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-transparent font-poppins text-gray-200">
            <Navbar />

            <section className="bg-transparent py-24 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Do you have any questions? Are you interested in discussing your project? Please, send us a message and we will respond to you quickly—in most cases the same day.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white/5 rounded-3xl p-10 shadow-xl border border-white/10 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-6">Drop Us a Line</h2>
                            <form className="space-y-6" action="https://formsubmit.co/michael@primemarketingexperts.com" method="POST">
                                <input type="hidden" name="_subject" value="New Contact Form Submission - AMP Marketing" />
                                <input type="hidden" name="_next" value="https://convertiq.com/contact?success=true" />
                                <input type="hidden" name="_honeypot" value="" />
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Your Name</label>
                                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600" placeholder="John Smith" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
                                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Phone Number</label>
                                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600" placeholder="(555) 123-4567" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Company Name</label>
                                    <input type="text" name="company" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-gray-600" placeholder="Your Company LLC" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">What are you looking for?</label>
                                    <select name="service_interest" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all appearance-none cursor-pointer">
                                        <option value="" className="bg-slate-900">Select a service...</option>
                                        <option value="ai-chatbot" className="bg-slate-900">AI Chatbot Setup</option>
                                        <option value="ai-voice" className="bg-slate-900">AI Voice Receptionist</option>
                                        <option value="google-business" className="bg-slate-900">Google Business Optimization</option>
                                        <option value="review-response" className="bg-slate-900">AI Review Response</option>
                                        <option value="email-automation" className="bg-slate-900">Email Automation</option>
                                        <option value="social-media" className="bg-slate-900">Social Media Content</option>
                                        <option value="ad-copy" className="bg-slate-900">AI Ad Copy</option>
                                        <option value="seo-content" className="bg-slate-900">SEO Content Writing</option>
                                        <option value="landing-pages" className="bg-slate-900">Landing Page Creation</option>
                                        <option value="lead-funnel" className="bg-slate-900">Lead Magnet & Funnel</option>
                                        <option value="multiple" className="bg-slate-900">Multiple Services</option>
                                        <option value="other" className="bg-slate-900">Something Else</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">What's on your mind?</label>
                                    <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none placeholder:text-gray-600" placeholder="What are you hoping to fix or improve? What's getting in the way?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
                                    Send Message
                                </button>
                                <p className="text-xs text-gray-500 text-center">Most times, we respond within 24 hours.</p>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-white mb-6">Other Ways to Reach Us</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-2xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Stop by</p>
                                            <p className="text-gray-400">74 Northeastern Blvd #12a Ste 101<br />Nashua, NH 03062</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-2xl">📧</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Email us</p>
                                            <p className="text-gray-400">hello@convertiq.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <span className="text-2xl">📞</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Call us</p>
                                            <p className="text-gray-400">617-651-1457</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl p-10 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Let's Talk</h3>
                                <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                                    15 minutes for free. Tell us what is your problem. You won't get pressured or pitched here — only a real conversation on whether we could be the right people to help you.
                                </p>
                                <a href="mailto:michael@primemarketingexperts.com" className="relative z-10 block w-full bg-white text-indigo-600 text-center py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all transform hover:scale-[1.02] shadow-xl shadow-white/10">
                                    Email Us
                                </a>
                            </div>
                            <div className="bg-black/40 rounded-3xl p-10 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-4">When We're Around</h3>
                                <div className="space-y-3 text-gray-400">
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span><span className="text-white">9:00 AM - 6:00 PM EST</span></p>
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span><span className="text-white">10:00 AM - 2:00 PM EST</span></p>
                                    <p className="flex justify-between"><span>Sunday</span><span className="text-white font-semibold text-amp-accent">Closed</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
