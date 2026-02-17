import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const services = [
    { icon: "🚀", title: "Automated Sales Funnels", href: "/services/lead-funnel", desc: "We program AI to track down your ideal clients across different social media, Google, and various other advertising platforms. Your funnel is always full, so you only need to concentrate on selling. It’s like having a sales team that never stops and never asks for breaks.", price: "Starting at $1,499 Setup + $299/mo" },
    { icon: "💡", title: "SEO Content", href: "/contact", desc: "We employ AI to carry out the research and generate top-notch articles that really get a good ranking on Google. So, you will have new content that keeps attracting visitors from a search engine without having to pay a hefty price to a writing agency. It’s basically the cleverest method to increase your authority.", price: "Starting at $149 per article" },
    { icon: "📞", title: "AI Voice", href: "/services/ai-voice", desc: "Answering the call, our AI interacts with the caller, identifies the needs, and schedules the meetings. Whether the calls are inbound or outbound, no problem. Turning the phone into a source of profit that works nonstop is your phone. Your phone is your 24-hour, non-stop appointment scheduler.", price: "Starting at $497 Setup + $249/mo" },
    { icon: "⚙️", title: "Landing Pages", href: "/services/landing-pages", desc: "It's very likely that only a few seconds (probably 3) are at your disposal before the person leaves. We design the websites that load quickly, visually attractive, and guys who are visiting the website stick and convert.", price: "Starting at $799 one-time" },
    { icon: "🤖", title: "AI Chatbot", href: "/services/ai-chatbot", desc: "Your website visitors deserve an intelligent, human-level conversation partner. The chatbot engages with the guests, replies to their inquiries, and arranges the meetings for you. One of our customers tripled their leads in a week after we installed this. It was a huge deal for them.", price: "Starting at $497 Setup + $149/mo" },
    { icon: "📱", title: "Social Media", href: "/services/social-media", desc: "Social media is not really a place for fun but a serious task, isn't it? We handle it for you. We publish posts on your behalf all the time so that the people you know can see them and get to know who you are. Without dipping a finger, you have stayed visible.", price: "Starting at $299/mo" },
    { icon: "📝", title: "Ad Copy", href: "/services/ad-copy", desc: "Wanna stop the constant waste of your budget on ads without getting any results? We craft the most attractive headlines and keeps testing till your cost per lead goes down. You can spend your time watching the numbers increase while we carry the load.", price: "Starting at $299 Setup + $199/mo" },
    { icon: "✉️", title: "Email Automation", href: "/services/email-automation", desc: "We create email sequences that don't sound like marketing. We craft email sequences that sound like they were written by a real human being. B2B Leads flow through your pipeline without any struggle or effort. No more \"just checking in\" is the kind of message you have to be the one to send.", price: "Starting at $199 Setup + $49/mo" },
    { icon: "📍", title: "Google Business", href: "/services/google-business", desc: "If you are not on Google Maps, you won’t get any customers. We are going to make sure that your profile strikes the searchers' eyes when they're walking around, and looking for you. When your visibility increases, so do the phone calls. Simple enough, huh?", price: "Starting at $399 one-time" },
    { icon: "⭐", title: "Review Response", href: "/services/review-response", desc: "Pulling off writing review responses is a great way to engage customers. You can let the system come up with creative answers to both positive and negative reviews automatically. You type nothing while great service is being provided.", price: "Starting at $99/mo" },
  ];

  const stats = [
    { value: "7 Days", label: "To First Results" },
    { value: "500+", label: "Businesses Helped" },
    { value: "3x", label: "Average Lead Growth" },
    { value: "95%", label: "Client Retention" },
  ];

  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />

      <Hero />

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-amp-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amp-secondary font-bold uppercase tracking-widest text-sm">All Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">All the things we can do for you</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              If it turns out AI is able to get you more customers or save your time, we may have just built it. See what we have here.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.map((service, idx) => (
                <Link key={idx} href={service.href} className="bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/10 group hover:-translate-y-1 block backdrop-blur-sm hover:bg-white/10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                  <div className="flex justify-between items-center">
                  <span className="text-amp-secondary font-bold text-sm">{service.price}</span>
                  <span className="text-amp-primary font-semibold text-sm group-hover:text-amp-accent">Learn More →</span>
                </div>
                </Link>
              ))}
            </div>

        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-white mb-8 text-center">Why People Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "⚡", title: "Fast Implementation", desc: "Usually, people claim their stuff is up and running and functioning within a week. We don't waste time." },
              { icon: "💰", title: "Month-to-Month", desc: "No strings attached. You can cancel anytime. We would rather continually earn your trust and loyalty." },
              { icon: "📊", title: "Transparent Reporting", desc: "We don't miss a single lead and booking. Your insights will be crystal clear at all times." },
              { icon: "👋", title: "Direct Support", desc: "The person who answers the call is genuine. If you have a question, you can expect an helpful answer." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 shadow border border-white/10 backdrop-blur-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/20 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-amp-secondary font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl font-black mt-4 mb-6">What Our Clients Say</h2>
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
              <div key={idx} className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-amp-secondary text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amp-primary to-amp-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Want More Customers?</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            We have hundreds of businesses under our belt. Let's have a brief chat and check whether we may be able to assist you too. No pressure and no sales pitch.
          </p>
          <Link href="/contact" className="inline-block bg-white text-amp-primary px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
