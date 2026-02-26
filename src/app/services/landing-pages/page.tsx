import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "High-Converting Pages | AMP Marketing",
  description: "Pages designed to convert visitors into paying customers. Simple, quick, and user-friendly.",
  keywords: ["landing page design service", "high-converting landing pages", "lead capture page design", "landing page agency", "conversion rate optimization", "mobile-optimized landing pages", "custom landing page builder", "landing page for lead generation", "fast loading landing pages", "A/B tested landing pages", "landing page copywriting", "best landing page agency 2025", "PPC landing page design", "Bing Ads landing pages"],
};

export default function LandingPagesPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">High-Converting Pages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Only one page needed to turn visitors into leads. We come up with the text, the design, and ensure that the &quot;Buy&quot; button is 100% functional. You get an elegant website that loads fast and is a great source of income for you.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">Here is the straightforward comparison between an attractive page and one that generates sales:</p>
              <ul className="space-y-4">
                {[
                  "Flawless on mobile\u2014where over 70% of your visitors are browsing.",
                  "Lightning-fast load times under 3 seconds. Anything slower and visitors leave.",
                  "Headlines that stop the scroll.",
                  "Trust is instantly established when we combine your glowing testimonials and client logos\u2014because people buy from people they trust.",
                  "Prominent and obvious buttons. We don\u2019t make it difficult to check out.",
                  "We set up proper analytics so you always know where the money is coming from.",
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
              <div className="text-5xl font-black text-blue-500 mb-2">Starting at $799<span className="text-xl text-gray-500">/page</span></div>
              <p className="text-sm text-gray-500 mb-2">One-time fee per page</p>
              <p className="text-gray-400 mb-6">You are free to revise the content two times.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Order Landing Page
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Things You May Be Wondering About</h2>
          {[
            { q: "Where will the pages actually be?", a: "We can either put it on your existing website or create a new one for you. It'll work whichever way you choose." },
            { q: "Can you integrate with my CRM?", a: "Of course, we can feed the leads directly into HubSpot, Salesforce, Mailchimp\u2014the CRM of your choice. No hassles." },
            { q: "What if I want changes after some time?", a: "We cover the first 30 days of tweaks, and after that, we are always available if you need further updates." },
            { q: "How many conversions do you think I will get?", a: "Results depend on your product and your traffic. We build the conversion mechanism\u2014you bring the audience." },
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
          <h2 className="text-3xl font-bold text-white mb-6">The landing page you&apos;ve been procrastinating about.</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One e-commerce brand reported that a single landing page generated $47,000 in its first month. They had been putting it off for nearly two years.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Build My Page
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
