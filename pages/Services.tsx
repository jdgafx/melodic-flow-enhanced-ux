import React from 'react';
import { 
  Rocket, Lightbulb, Phone, Bot, Mail, MapPin, Star, 
  CheckCircle2, Zap, Target, BarChart3, Users, Clock, 
  ArrowUpRight, MessageSquare, Search, PenTool, Share2, 
  Layout, GitMerge, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    { icon: <GitMerge className="w-10 h-10" />, title: "Automated Sales Funnels", href: "/services/lead-funnel", desc: "We program AI to track down your ideal clients across different social media, Google, and various other advertising platforms. Your funnel is always full, so you only need to concentrate on selling. It’s like having a sales team that never stops and never asks for breaks.", price: "Starting at ,499 Setup + 99/mo", color: "text-indigo-400", featured: true },
    { icon: <Globe className="w-10 h-10" />, title: "SEO Content", href: "/services/seo-content", desc: "We employ AI to carry out the research and generate top-notch articles that really get a good ranking on Google. So, you will have new content that keeps attracting visitors from a search engine without having to pay a hefty price to a writing agency. It’s basically the cleverest method to increase your authority.", price: "Starting at 49 per article", color: "text-emerald-400", featured: true },
    { icon: <Phone className="w-10 h-10" />, title: "AI Voice", href: "/services/ai-voice", desc: "Answering the call, our AI interacts with the caller, identifies the needs, and schedules the meetings. Whether the calls are inbound or outbound, no problem. Turning the phone into a source of profit that works nonstop is your phone. Your phone is your 24-hour, non-stop appointment scheduler.", price: "Starting at 97 Setup + 49/mo", color: "text-blue-400", featured: true },
    { icon: <Layout className="w-10 h-10" />, title: "Landing Pages", href: "/services/landing-pages", desc: "It's very likely that only a few seconds (probably 3) are at your disposal before the person leaves. We design the websites that load quickly, visually attractive, and guys who are visiting the website stick and convert.", price: "Starting at 99 one-time", color: "text-pink-400", featured: true },
    { icon: <Bot className="w-10 h-10" />, title: "AI Chatbot", href: "/services/ai-chatbot", desc: "Your website visitors deserve an intelligent, human-level conversation partner. The chatbot engages with the guests, replies to their inquiries, and arranges the meetings for you. One of our customers tripled their leads in a week after we installed this. It was a huge deal for them.", price: "Starting at 97 Setup + 49/mo", color: "text-purple-400" },
    { icon: <Share2 className="w-10 h-10" />, title: "Social Media", href: "/services/social-media", desc: "Social media is not really a place for fun but a serious task, isn't it? We handle it for you. We publish posts on your behalf all the time so that the people you know can see them and get to know who you are. Without dipping a finger, you have stayed visible.", price: "Starting at 99/mo", color: "text-blue-500" },
    { icon: <PenTool className="w-10 h-10" />, title: "Ad Copy", href: "/services/ad-copy", desc: "Wanna stop the constant waste of your budget on ads without getting any results? We craft the most attractive headlines and keeps testing till your cost per lead goes down. You can spend your time watching the numbers increase while we carry the load.", price: "Starting at 99 Setup + 99/mo", color: "text-orange-400" },
    { icon: <Mail className="w-10 h-10" />, title: "Email Automation", href: "/services/email-automation", desc: "We create email sequences that don't sound like marketing. We craft email sequences that sound like they were written by a real human being. B2B Leads flow through your pipeline without any struggle or effort. No more \"just checking in\" is the kind of message you have to be the one to send.", price: "Starting at 99 Setup + 9/mo", color: "text-green-400" },
    { icon: <Search className="w-10 h-10" />, title: "Google Business", href: "/services/google-business", desc: "If you are not on Google Maps, you won’t get any customers. We are going to make sure that your profile strikes the searchers' eyes when they're walking around, and looking for you. When your visibility increases, so do the phone calls. Simple enough, huh?", price: "Starting at 99 one-time", color: "text-orange-500" },
    { icon: <Star className="w-10 h-10" />, title: "Review Response", href: "/services/review-response", desc: "Pulling off writing review responses is a great way to engage customers. You can let the system come up with creative answers to both positive and negative reviews automatically. You type nothing while great service is being provided.", price: "Starting at 9/mo", color: "text-yellow-400" },
  ];

  return (
    <div className="flex flex-col w-full relative">
      <section className="bg-gradient-to-br from-[#0A0C14] via-indigo-900/20 to-[#0A0C14] pt-40 pb-24 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-amp-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
            Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Gets Results</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            More leads. Less busywork. We build AI tools that save you time and bring in customers.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-indigo-500/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amp-secondary font-bold uppercase tracking-widest text-sm">Featured</span>
            <h2 className="text-4xl font-black text-white mt-4">What We Do Best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.filter(s => s.featured).map((service, idx) => (
              <Link 
                key={idx} 
                to={service.href}
                className="bg-[#0F121C] rounded-[2.5rem] p-10 shadow-2xl hover:border-amp-primary/50 border border-white/10 transition-all group hover:-translate-y-2 block"
              >
                <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 ${service.color} group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">{service.desc}</p>
                <div className="text-amp-primary font-black text-xl">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                to={service.href}
                className="bg-white/5 rounded-[2rem] p-8 hover:bg-white/[0.08] transition-all border border-white/5 group hover:-translate-y-1 block"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amp-secondary transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                <div className="text-amp-primary font-bold">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-amp-primary/20 to-amp-secondary/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-8">Not Sure What You Need?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's meet for 15 minutes. No selling—we will just decide what makes sense for you.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
