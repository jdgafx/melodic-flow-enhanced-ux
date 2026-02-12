import React from 'react';
import Hero from '../components/Hero';
import { 
  Rocket, Lightbulb, Phone, Bot, Mail, MapPin, Star, 
  CheckCircle2, Zap, Target, BarChart3, Users, Clock, 
  ArrowUpRight, MessageSquare, Search, PenTool, Share2, 
  Layout, GitMerge, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const services = [
    { icon: <GitMerge className="w-8 h-8" />, title: "Automated Sales Funnels", href: "/services/lead-funnel", desc: "We program AI to track down your ideal clients across different social media, Google, and various other advertising platforms. Your funnel is always full, so you only need to concentrate on selling. It’s like having a sales team that never stops and never asks for breaks.", price: "Starting at ,499 Setup + 99/mo", color: "text-indigo-400" },
    { icon: <Globe className="w-8 h-8" />, title: "SEO Content", href: "/services/seo-content", desc: "We employ AI to carry out the research and generate top-notch articles that really get a good ranking on Google. So, you will have new content that keeps attracting visitors from a search engine without having to pay a hefty price to a writing agency. It’s basically the cleverest method to increase your authority.", price: "Starting at 49 per article", color: "text-emerald-400" },
    { icon: <Phone className="w-8 h-8" />, title: "AI Voice", href: "/services/ai-voice", desc: "Answering the call, our AI interacts with the caller, identifies the needs, and schedules the meetings. Whether the calls are inbound or outbound, no problem. Turning the phone into a source of profit that works nonstop is your phone. Your phone is your 24-hour, non-stop appointment scheduler.", price: "Starting at 97 Setup + 49/mo", color: "text-blue-400" },
    { icon: <Layout className="w-8 h-8" />, title: "Landing Pages", href: "/services/landing-pages", desc: "It's very likely that only a few seconds (probably 3) are at your disposal before the person leaves. We design the websites that load quickly, visually attractive, and guys who are visiting the website stick and convert.", price: "Starting at 99 one-time", color: "text-pink-400" },
    { icon: <Bot className="w-8 h-8" />, title: "AI Chatbot", href: "/services/ai-chatbot", desc: "Your website visitors deserve an intelligent, human-level conversation partner. The chatbot engages with the guests, replies to their inquiries, and arranges the meetings for you. One of our customers tripled their leads in a week after we installed this. It was a huge deal for them.", price: "Starting at 97 Setup + 49/mo", color: "text-purple-400" },
    { icon: <Share2 className="w-8 h-8" />, title: "Social Media", href: "/services/social-media", desc: "Social media is not really a place for fun but a serious task, isn't it? We handle it for you. We publish posts on your behalf all the time so that the people you know can see them and get to know who you are. Without dipping a finger, you have stayed visible.", price: "Starting at 99/mo", color: "text-blue-500" },
    { icon: <PenTool className="w-8 h-8" />, title: "Ad Copy", href: "/services/ad-copy", desc: "Wanna stop the constant waste of your budget on ads without getting any results? We craft the most attractive headlines and keeps testing till your cost per lead goes down. You can spend your time watching the numbers increase while we carry the load.", price: "Starting at 99 Setup + 99/mo", color: "text-orange-400" },
    { icon: <Mail className="w-8 h-8" />, title: "Email Automation", href: "/services/email-automation", desc: "We create email sequences that don't sound like marketing. We craft email sequences that sound like they were written by a real human being. B2B Leads flow through your pipeline without any struggle or effort. No more \"just checking in\" is the kind of message you have to be the one to send.", price: "Starting at 99 Setup + 9/mo", color: "text-green-400" },
    { icon: <Search className="w-8 h-8" />, title: "Google Business", href: "/services/google-business", desc: "If you are not on Google Maps, you won’t get any customers. We are going to make sure that your profile strikes the searchers' eyes when they're walking around, and looking for you. When your visibility increases, so do the phone calls. Simple enough, huh?", price: "Starting at 99 one-time", color: "text-orange-500" },
    { icon: <Star className="w-8 h-8" />, title: "Review Response", href: "/services/review-response", desc: "Pulling off writing review responses is a great way to engage customers. You can let the system come up with creative answers to both positive and negative reviews automatically. You type nothing while great service is being provided.", price: "Starting at 9/mo", color: "text-yellow-400" },
  ];

  const stats = [
    { value: "7 Days", label: "To First Results" },
    { value: "500+", label: "Businesses Helped" },
    { value: "3x", label: "Average Lead Growth" },
    { value: "95%", label: "Client Retention" },
  ];

  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <LogoMarquee />

      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 relative z-10 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amp-secondary font-bold uppercase tracking-widest text-sm">All Services</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">All the things we can do for you</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              If it turns out AI is able to get you more customers or save your time, we may have just built it. See what we have here.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link key={idx} to={service.href} className="bg-[#0F121C] rounded-3xl p-8 border border-white/10 hover:border-amp-primary/50 transition-all group hover:-translate-y-2 block relative overflow-hidden">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amp-secondary transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-amp-primary font-bold">{service.price}</span>
                  <span className="text-white/40 group-hover:text-white transition-colors"><ArrowUpRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#050508]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Why People Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Fast Implementation", desc: "Usually, people claim their stuff is up and running and functioning within a week. We don't waste time." },
              { icon: <BarChart3 className="w-8 h-8 text-blue-400" />, title: "Month-to-Month", desc: "No strings attached. You can cancel anytime. We would rather continually earn your trust and loyalty." },
              { icon: <Users className="w-8 h-8 text-purple-400" />, title: "Transparent Reporting", desc: "We don't miss a single lead and booking. Your insights will be crystal clear at all times." },
              { icon: <MessageSquare className="w-8 h-8 text-green-400" />, title: "Direct Support", desc: "The person who answers the call is genuine. If you have a question, you can expect an helpful answer." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amp-primary font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-400 text-xl">Don't just believe us. Let real clients be the judge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "AMP Marketing really brought a turnaround in our life. In the beginning, we only had 10 leads per week and now we are working with more than 100 clients every week. That AI chatbot? It is working and generating leads 24-hours a day, even while I'm sleeping.", author: "Mike R.", company: "HVAC Company Owner" },
              { quote: "Unlike other AI teams that promise a lot but never deliver anything, these guys are different. We have been through several agencies before, and these guys are extremely fast. They really care about their clients and business.", author: "Sarah L.", company: "Dental Practice" },
              { quote: "Before AMP Marketing revamped our lead generation, it was almost non-existent. We are now getting a full pipeline of qualified prospects and our phone has been constantly ringing.", author: "James T.", company: "Local Restaurant Owner" },
              { quote: "The AI voice receptionist is a self-sustaining investment. It has been associated with us missing 20% of our calls previously. Now every single call is answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
              { quote: "Our business has been changed by email automation. We used to spend a lot of time every week on our manual follow-ups. The process has been automated, and our close rate has increased by 40%.", author: "David M.", company: "Real Estate Agency" },
              { quote: "Custom-made AI application from them helped us save around 30 hours a week. That is not a typographical mistake. It is the best investment that we have ever made.", author: "Jennifer P.", company: "E-commerce Business" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0F121C] border border-white/10 rounded-3xl p-8 relative">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">\"{testimonial.quote}\"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amp-primary to-amp-accent flex items-center justify-center font-bold text-white">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.author}</p>
                    <p className="text-amp-primary text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-amp-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Want More Customers?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We have hundreds of businesses under our belt. Let's have a brief chat and check whether we may be able to assist you too. No pressure and no sales pitch.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
