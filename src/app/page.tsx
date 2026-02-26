import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Agency | Automated Lead Generation & Sales Tools | AMP Marketing",
  description: "AMP Marketing builds AI-powered lead generation systems, chatbots, voice receptionists, and sales automation tools for small businesses. Get more leads, book more appointments, and grow revenue on autopilot.",
  keywords: ["AI marketing agency", "automated lead generation", "AI chatbot for business", "AI voice receptionist", "marketing automation", "lead generation services", "sales automation tools", "small business marketing", "Nashua NH marketing agency", "digital marketing automation", "Bing Ads management company", "Google Ads management agency", "AI lead capture system", "appointment booking automation", "business growth tools", "AI marketing services near me", "best AI marketing agency 2025", "affordable lead generation", "AI-powered sales funnel", "marketing agency for small business"],
  openGraph: {
    title: "AMP Marketing | AI-Powered Lead Generation & Sales Automation",
    description: "Get more leads and book more appointments with AI chatbots, voice receptionists, email automation, and smart sales funnels. Built for small businesses that want to grow.",
    url: "https://convertiq.com",
    type: "website",
  },
};

export default function Home() {
  const services = [
    { icon: "🚀", title: "Automated Sales Funnels", href: "/services/lead-funnel", desc: "We use AI to find your ideal clients across social media, Google, and other ad platforms. Your funnel stays full so you can focus on closing deals. It’s like a sales team that never takes a break.", price: "Starting at $1,499 Setup + $299/mo" },
    { icon: "💡", title: "SEO Content", href: "/contact", desc: "We research and write articles that rank well on Google. Fresh content brings in organic visitors month after month, without the cost of a big writing agency. One of the smartest ways to build authority online.", price: "Starting at $149 per article" },
    { icon: "📞", title: "AI Voice", href: "/services/ai-voice", desc: "Our AI answers calls, qualifies leads, and books appointments around the clock. Inbound or outbound, it handles both. Your phone becomes a 24/7 appointment-booking machine.", price: "Starting at $497 Setup + $249/mo" },
    { icon: "⚙️", title: "Landing Pages", href: "/services/landing-pages", desc: "You have about 3 seconds before a visitor leaves. We build pages that load fast, look sharp, and turn browsers into buyers.", price: "Starting at $799 one-time" },
    { icon: "🤖", title: "AI Chatbot", href: "/services/ai-chatbot", desc: "Your website visitors get an intelligent conversation partner that answers questions and books meetings for you. One client tripled their leads in a week after we set this up.", price: "Starting at $497 Setup + $149/mo" },
    { icon: "📱", title: "Social Media", href: "/services/social-media", desc: "Consistent posting builds your brand, but it takes time you don’t have. We handle it for you. Regular posts that keep you visible and help your audience get to know you, without lifting a finger.", price: "Starting at $299/mo" },
    { icon: "📝", title: "Ad Copy", href: "/services/ad-copy", desc: "Stop burning money on ads nobody clicks. We write compelling headlines and test variations until your cost per lead drops. You watch the numbers go up while we do the heavy lifting.", price: "Starting at $299 Setup + $199/mo" },
    { icon: "✉️", title: "Email Automation", href: "/services/email-automation", desc: "We write email sequences that sound like a real person, not a marketing robot. Leads flow through your pipeline on autopilot. No more writing \"just checking in\" emails by hand.", price: "Starting at $199 Setup + $49/mo" },
    { icon: "📍", title: "Google Business", href: "/services/google-business", desc: "If you’re not showing up on Google Maps, your competitors are getting those calls. We optimize your profile so local customers find you first. Better visibility means more phone calls.", price: "Starting at $399 one-time" },
    { icon: "⭐", title: "Review Response", href: "/services/review-response", desc: "Every review gets a thoughtful, personalized reply within 24 hours. Positive ones get thanked. Negative ones get handled professionally. All of it runs on autopilot.", price: "Starting at $99/mo" },
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
                <div className="text-4xl md:text-5xl font-black text-indigo-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">All Services</span>
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
                  <span className="text-blue-500 font-bold text-sm">{service.price}</span>
                  <span className="text-indigo-500 font-semibold text-sm group-hover:text-violet-500">Learn More →</span>
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
              { icon: "⚡", title: "Fast Implementation", desc: "Most clients are up and running within a week. We don't waste time." },
              { icon: "💰", title: "Month-to-Month", desc: "No long-term contracts. Cancel anytime. We earn your business every single month." },
              { icon: "📊", title: "Transparent Reporting", desc: "Every lead and booking is tracked. You always know exactly what's working." },
              { icon: "👋", title: "Direct Support", desc: "A real person picks up when you call. Questions get answered quickly and clearly." },
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
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl font-black mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-400 text-xl">Don't just believe us. Let real clients be the judge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "We went from about 10 leads a week to over 100. The AI chatbot runs around the clock and books appointments while I sleep. AMP Marketing completely changed how we get new business.", author: "Mike R.", company: "HVAC Company Owner" },
              { quote: "We've worked with several agencies before. These guys actually deliver, and fast. They care about results, not just collecting a monthly check.", author: "Sarah L.", company: "Dental Practice" },
              { quote: "Our lead generation was basically nonexistent before AMP Marketing stepped in. Now our pipeline stays full and the phone keeps ringing with qualified prospects.", author: "James T.", company: "Local Restaurant Owner" },
              { quote: "The AI voice receptionist paid for itself in the first month. We used to miss about 20% of our calls. Now every single one gets answered professionally, 24/7.", author: "Amanda K.", company: "Law Firm" },
              { quote: "Email automation changed everything for us. We used to spend hours every week on manual follow-ups. Now it runs on its own, and our close rate went up 40%.", author: "David M.", company: "Real Estate Agency" },
              { quote: "Their AI tools save us around 30 hours a week. That's not a typo. Best investment we've ever made, hands down.", author: "Jennifer P.", company: "E-commerce Business" }
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
                  <p className="text-blue-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-500 to-violet-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Want More Customers?</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            We have hundreds of businesses under our belt. Let's have a brief chat and check whether we may be able to assist you too. No pressure and no sales pitch.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
