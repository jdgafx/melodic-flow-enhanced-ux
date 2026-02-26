import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Peak Performance Ads Optimization | AMP Marketing",
  description: "Ad copy that grabs attention, drives clicks, and lowers your cost per lead. We test relentlessly so your budget works harder.",
  keywords: ["ad copy optimization", "PPC ad writing service", "Google Ads copywriting", "Bing Ads copy optimization", "Facebook ad copy writing", "ad headline testing", "cost per lead reduction", "paid advertising agency", "Meta ad copy agency", "LinkedIn Ads copywriting", "Microsoft Ads copy", "ad A/B testing service", "lower cost per click", "PPC agency Nashua NH", "best ad copy agency 2025"],
};

export default function AdCopyPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Peak Performance Ads Optimization</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop burning money on ads nobody clicks. We write sharp headlines, test multiple variations, and optimize your campaigns every week. Your cost per lead goes down. Your results go up.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">Here&apos;s a number that should bother you: most companies waste 30-50% of their ad budget on weak copy. We fix that.</p>
              <ul className="space-y-4">
                {[
                  "We write 4-8 headline variations per ad set and let real data pick the winner.",
                  "Clear calls to action that make people click\u2014not generic \u2018Learn More\u2019 buttons everyone scrolls past.",
                  "Platform-specific copy for Google, Meta, LinkedIn, and Microsoft Ads. What works on LinkedIn won\u2019t work on Instagram.",
                  "Different messaging for different audiences. A homeowner thinks differently than a contractor.",
                  "Ad quality scores that get your ads noticed faster and shown more often.",
                  "Weekly optimizations based on performance data, not guesswork.",
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
              <div className="text-4xl font-black text-blue-500 mb-2">From $299 set up + $199/mth</div>
              <p className="text-gray-400 mb-6">Unlimited copy revisions.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Questions</h2>
          {[
            { q: "Which platforms do you handle?", a: "Google Ads, Meta (Facebook and Instagram), LinkedIn Ads, and Microsoft Ads. Each platform has its own best practices, so we tailor copy for every one." },
            { q: "How many variations do you write?", a: "Typically 4-8 per ad set. Enough to run meaningful tests without overcomplicating things." },
            { q: "What if I already have ads running?", a: "No problem. We\u2019ll benchmark your current ads against our new versions. Sometimes a small tweak is all it takes. Other times, a full rewrite makes the difference." },
            { q: "How do you know if it's working?", a: "We track clicks, conversions, and cost per lead. When results go up and costs go down, it\u2019s working. We don\u2019t chase vanity metrics." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to stop wasting your ad budget?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One dental client cut their cost per lead by 40% in the first month. Better copy, less waste.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get Better Copy
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
