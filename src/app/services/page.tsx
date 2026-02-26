import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions & Services | AMP Marketing",
  description: "Help with AI to grow your business and increase the leads. We build tools that work from attracting customers to handling calls.",
  keywords: ["AI marketing services", "business automation services", "lead generation tools", "AI chatbot service", "AI voice receptionist service", "marketing automation agency", "Nashua NH marketing services", "Bing Ads management services", "Google Ads management services", "AI-powered marketing solutions", "automated sales tools for business", "digital marketing services near me", "best AI marketing tools 2025"],
};

const services = [
  {
    icon: "🚀",
    title: "AI Assisted Leadgen",
    desc: "AI finds your ideal clients across social media and ad platforms. Your sales funnel stays full so you can focus on closing deals.",
    price: "Starting at $1,499 Setup + $299/mo",
    href: "/services/lead-funnel",
    featured: true
  },
  {
    icon: "💡",
    title: "SEO Content",
    desc: "We research and write articles that rank well on Google. Fresh content that brings in organic traffic month after month.",
    price: "Starting at $149 per article",
    href: "/contact",
    featured: true
  },
  {
    icon: "📞",
    title: "AI Voice",
    desc: "Our AI answers calls, qualifies leads, and books appointments around the clock. Works for both inbound and outbound calls.",
    price: "Starting at $497 Setup + $249/mo",
    href: "/services/ai-voice",
    featured: true
  },
  {
    icon: "⚙️",
    title: "Landing Pages",
    desc: "You have about 3 seconds before a visitor leaves. We build pages that load fast, look sharp, and turn browsers into buyers.",
    price: "Starting at $799 one-time",
    href: "/services/landing-pages",
    featured: true
  },
  {
    icon: "🤖",
    title: "AI Chatbot",
    desc: "Most chatbots are terrible. Ours actually books meetings and sounds like a real person. Clients typically see more qualified leads within the first week.",
    price: "Starting at $497 Setup + $149/mo",
    href: "/services/ai-chatbot"
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Consistent posting builds your brand, but it takes time you don't have. We handle it so you can focus on running your business.",
    price: "Starting at $299/mo",
    href: "/services/social-media"
  },
  {
    icon: "📝",
    title: "Ad Copy",
    desc: "Bad ads waste money. We write compelling headlines, test variations, and keep optimizing until your cost per lead drops. Works across 100+ ad platforms.",
    price: "Starting at $299 Setup + $199/mo",
    href: "/services/ad-copy"
  },
  {
    icon: "✉️",
    title: "Email Automation",
    desc: "Nobody reads generic follow-up emails. Ours sound personal and human, and they actually get responses.",
    price: "Starting at $199 Setup + $49/mo",
    href: "/services/email-automation"
  },
  {
    icon: "📍",
    title: "Google Business",
    desc: "If people can't find you on Google Maps, they're finding your competitors instead. We optimize your profile so local customers see you first.",
    price: "Starting at $399 one-time",
    href: "/services/google-business"
  },
  {
    icon: "⭐",
    title: "Review Response",
    desc: "Responding to every review takes time. Our AI reads each one and writes a personalized reply. Good reviews get thanked. Bad ones get handled professionally.",
    price: "Starting at $99/mo",
    href: "/services/review-response"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />

      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6">
               Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500">Gets Results</span>
             </h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               More leads. Less busywork. We build AI tools that save you time and bring in customers.
             </p>
        </div>
      </section>

      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Featured</span>
            <h2 className="text-3xl font-black text-white mt-2">What We Do Best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.filter(s => s.featured).map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/10 group hover:-translate-y-1 block backdrop-blur-sm hover:bg-white/10"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="text-blue-500 font-bold text-lg">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/10 group hover:-translate-y-1 block backdrop-blur-sm hover:bg-white/10"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.desc}</p>
                <div className="text-blue-500 font-bold text-lg">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-indigo-500 to-violet-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Not Sure What You Need?</h2>
          <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
            Let's meet for 15 minutes. No selling—we will just decide what makes sense for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
