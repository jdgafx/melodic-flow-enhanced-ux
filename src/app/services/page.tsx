import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions & Services | AMP Marketing",
  description: "Help with AI to grow your business and increase the leads. We build tools that work from attracting customers to handling calls.",
};

const services = [
  { 
    icon: "🚀", 
    title: "AI Assisted Leadgen", 
    desc: "With AI power, find your potential customers on social media and different ad platforms. The system will auto-fill your sales funnel so that your only job is to close the sales.", 
    price: "Starting at $1,499 Setup + $299/mo",
    href: "/services/lead-funnel",
    featured: true
  },
  { 
    icon: "💡", 
    title: "SEO Content", 
    desc: "AI auxiliaries can help you a lot on the research side and produce top-notch articles that you can post on Google and will thus rank better. Besides, you gain nice and new contents that attract good traffic to your organics.", 
    price: "Starting at $149 per article",
    href: "/contact",
    featured: true
  },
  { 
    icon: "📞", 
    title: "AI Voice", 
    desc: "Our AI will be answering the calls, qualifying the leads, and booking the appointments even when you are sleeping. This is the answer for both inbound and outbound calls.", 
    price: "Starting at $497 Setup + $249/mo",
    href: "/services/ai-voice",
    featured: true
  },
  { 
    icon: "⚙️", 
    title: "Landing Pages", 
    desc: "You have only 3 seconds to capture the visitor’s attention. If you can convince him to make a purchase, then your page is the right one. Fast loading and seamless are the solution. Trust!", 
    price: "Starting at $799 one-time",
    href: "/services/landing-pages",
    featured: true
  },
  { 
    icon: "🤖", 
    title: "AI Chatbot", 
    desc: "Admittedly, a lot of chatbots are just terrible. But the one we develop is saving the day of your business by talking with a human voice and booking when people are ready to call. Thus, customers very often get more qualified leads during the first week.", 
    price: "Starting at $497 Setup + $149/mo",
    href: "/services/ai-chatbot"
  },
  { 
    icon: "📱", 
    title: "Social Media", 
    desc: "Regular posting works well, but it takes a lot of your time. We keep you in good shape while you concentrate on other things.", 
    price: "Starting at $299/mo",
    href: "/services/social-media"
  },
  { 
    icon: "📝", 
    title: "Ad Copy", 
    desc: "Bad advertisements only waste money. We write enticing headlines to generate clicks and keep testing until your customer acquisition cost goes down. 100+ advertising platforms.", 
    price: "Starting at $299 Setup + $199/mo",
    href: "/services/ad-copy"
  },
  { 
    icon: "✉️", 
    title: "Email Automation", 
    desc: "Everybody gets tired of reading those boring generic emails. Our follow-ups are real and personal and above all, they typically get responses too!", 
    price: "Starting at $199 Setup + $49/mo",
    href: "/services/email-automation"
  },
  { 
    icon: "📍", 
    title: "Google Business", 
    desc: "If people can’t find your place on Google Map, it means they can find your competitors. We fix up your profile so that locals actually see you.", 
    price: "Starting at $399 one-time",
    href: "/services/google-business"
  },
  { 
    icon: "⭐", 
    title: "Review Response", 
    desc: "Answering to every review is a very time-consuming task. Our AI analyses the review and writes an appropriate response. Good ones get thanked. Bad ones get handled.", 
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
