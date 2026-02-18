import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Reputation Management System | AMP Marketing",
  description: "We handle customer reviews for you, with thoughtful and personalized replies to everyone.",
};

export default function ReviewResponsePage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Reputation Management</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We negotiate your customer feedback on your behalf so you don&apos;t have to. A thoughtful and personalized response is given to every review within 24 hours. It communicates to people that you are attentive and it also helps your business rank first in local searches.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">This is how we clean your reputation while you get your sleep:</p>
              <ul className="space-y-4">
                {[
                  "It expresses gratitude to customers for their positive review in a very sincere and authentic way.",
                  "It professionally deals with those who are upset through de-escalating the conflict so you are not getting anxious about it.",
                  "We train it to be personal and sound like you rather than a cold corporate press release.",
                  "Google, Yelp, Facebook - anytime and anywhere someone mentions you in a positive or negative way, we are on top of it.",
                  "If the situation gets out of control, it fires a message to your phone straight away so you can be the first to act.",
                  "It does not wait until it is convenient but nearly instantaneously replies.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Pricing</h3>
              <div className="text-5xl font-black text-indigo-600 mb-2">Starting at $99<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-400 mb-6">The price includes unlimited number of replies. There is no charge per review.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Some Common Questions</h2>
          {[
            { q: "Can I tweak the responses?", a: "Absolutely. If you want, you may modify the voice, give the template a go-ahead, or simply run the system. You are at the helm of the reputation management." },
            { q: "Which social media platforms are monitored by you?", a: "Basically, wherever anyone posts compliments or grievances. We cover Google, Yelp, TripAdvisor, and all the rest." },
            { q: "And what about customer complaints...", a: "We do not allow AI to go off on angry rants without supervision. Those are flagged and sent to you immediately unless you have instructed otherwise." },
            { q: "Does it sound robotic?", a: "Not a chance. We specifically train it to avoid that 'Thank you valued customer' vibe. It sounds like a human being." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-6 mb-4 border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-amp-primary to-amp-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Build Trust Automatically</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Every review should receive a response. Let your customers know that you value them. Get started today.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Start Free Trial
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
