import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Voice Receptionist | AMP Marketing",
  description: "AI-powered phone answering that works 24/7 so you never miss a call again.",
  keywords: ["AI voice receptionist", "automated phone answering service", "AI phone system for business", "virtual receptionist for small business", "24/7 call answering service", "missed call solution", "AI appointment booking by phone", "AI phone agent", "automated call handling", "never miss a call again", "AI receptionist cost", "virtual phone receptionist agency", "best AI voice agent 2025", "phone answering bot for business"],
};

export default function AiVoicePage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📞</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Virtual Front Desk</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every missed call is lost revenue. When no one picks up, your customer calls the next business on Google. Our AI receptionist answers every call instantly — day or night. It books appointments, answers questions, and runs your front desk without supervision.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Your Phone Works 24/7 Now</h2>
              <p className="text-gray-400 mb-6">Most businesses only answer about two-thirds of their calls. That means a third of potential revenue goes straight to a competitor. Our AI receptionist picks up every single call, engages the caller in natural conversation, and books appointments around the clock — even at 2 AM on a Sunday.</p>
              <ul className="space-y-4">
                {[
                  "It answers on the first ring. Your callers get a natural, human-like conversation and book their appointments — no voicemail, no waiting.",
                  "The AI qualifies callers, identifies who needs your services, and books them straight into your schedule.",
                  "Need flexibility? The AI can forward urgent calls to your mobile or take a detailed message and text it to you.",
                  "Keep your existing phone number. No changes, no porting. Your number stays yours.",
                  "Setup takes less than an hour. We train the AI on your services, hours, and call handling preferences — then it goes live.",
                  "It syncs with whatever calendar you use. Google, Outlook, Calendly — no double-bookings, ever.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Pricing</h3>
              <div className="text-4xl font-black text-blue-500 mb-2">Starting at $497 setup + $249/mo</div>
              <p className="text-gray-400 mb-6">Full setup, custom training, and 24/7 support included</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Got questions? We're here to help!</h2>
          {[
            { q: "How fast can I get this running?", a: "Most businesses are live within 48 hours. Just tell us about your services, your availability, and how you want calls handled. We take care of the rest." },
            { q: "What if it can't help someone?", a: "You set the routing rules. The AI can collect the caller's details and text them to you, forward the call to your mobile, or schedule a callback — whatever fits your workflow." },
            { q: "Do I need a new phone number?", a: "No. You keep your existing number. We route incoming calls through our system behind the scenes — nothing changes for your customers." },
            { q: "How do I know how many calls you handled?", a: "Your dashboard shows everything — call volume, duration, outcomes, and booked appointments. Full visibility, zero guesswork." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-6 mb-4 border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-indigo-500 to-violet-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stop losing customers to voicemail.</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Try it free for 7 days. See how many extra appointments your business books when every call gets answered.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Start Free Trial
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
