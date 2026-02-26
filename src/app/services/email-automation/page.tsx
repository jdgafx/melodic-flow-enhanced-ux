import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Human-Like Follow Ups Sequences | AMP Marketing",
  description: "Employ smart email sequences that successfully convert subscribers into customers.",
  keywords: ["email automation services", "automated email sequences", "email marketing automation", "drip campaign setup", "abandoned cart email recovery", "email follow-up automation", "B2B email sequences", "email nurture campaigns", "automated lead follow-up emails", "email automation agency", "best email automation for small business", "cold email sequences", "welcome email automation", "email marketing agency"],
};

export default function EmailAutomationPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✉️</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Human-Like Follow Ups</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most automated emails feel like spam. Ours don't. Our sequences read as if a real person wrote them, not a robot. That's how you convert subscribers into customers without sounding robotic.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Most customers report seeing a positive impact within a week.</h2>
              <p className="text-gray-400 mb-4">The goal is to make every email feel like a personal conversation between just two people. Whether it's HVAC or legal services, we have experience across both. Here's what we deliver:</p>
              <ul className="space-y-4">
                {[
                  "Welcome emails that read like a personal note, not a mass broadcast.",
                  "Abandoned cart recovery emails that bring shoppers back — we typically see 15-30% recovery rates.",
                  "Follow-up emails that nurture leads without being pushy.",
                  "Re-engagement campaigns for long-lost subscribers who haven't opened your emails in months.",
                  "Intelligent triggers based on real user behavior on your site.",
                  "A/B testing on every sequence. We measure what works and cut what doesn't.",
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
              <div className="text-4xl font-black text-blue-500 mb-2">Starting at $199 setup + $49/mo</div>
              <p className="text-gray-400 mb-2">Personalized sequence creation and monthly fine-tuning.</p>
              <p className="text-gray-500 text-sm mb-6">First 2,500 subscribers included</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Questions</h2>
          {[
            { q: "How long does this take?", a: "About one week. We spend 1-2 days learning your communication style, setting up the platform, and running initial tests. Taking the time upfront means fewer revisions later." },
            { q: "What platforms do you work with?", a: "Mailchimp, ConvertKit, Klaviyo, ActiveCampaign, and most others. If you're on a less common platform, we'll find a way to make it work." },
            { q: "Can I write my own copy?", a: "Absolutely. You can write your own copy, we can write it, or we collaborate on a hybrid version. Your business, your call." },
            { q: "What about spam filters?", a: "We handle all the technical details — DKIM, SPF, and list hygiene — so your emails actually reach inboxes. Most clients see a 95%+ delivery rate." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Stop Chasing Leads Manually</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One of the clients has said it best: &quot;I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep.&quot;
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Let's Build Your Sequence
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
