import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Consistent Social Presence Package | AMP Marketing",
  description: "Consistent social media posting that keeps your brand visible. 20 posts a month that sound like you, not a robot.",
  keywords: ["social media management service", "social media posting service", "Instagram management for business", "LinkedIn content management", "Facebook business page management", "social media agency", "social media marketing", "brand awareness social media", "social media content calendar", "X Twitter management", "social media for small business", "social media agency Nashua NH", "best social media management 2025", "affordable social media service"],
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Consistent Social Presence</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Consistent posting builds your brand, but it takes time you don&apos;t have. We handle it&mdash;three posts a week with real photos and captions that start conversations. Your brand stays visible and your audience stays engaged.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">You want results without being glued to your phone all day. Here&apos;s what we deliver:</p>
              <ul className="space-y-4">
                {[
                  "20 posts a month that sound like you\u2014no stiff corporate language.",
                  "We manage LinkedIn, Facebook, Instagram, and X. All of them, if you want.",
                  "Custom visuals that represent your brand. No more generic stock photos.",
                  "Hashtags researched and selected to reach new audiences, not randomly thrown together.",
                  "Community engagement\u2014we reply to comments, answer questions, and build relationships on your behalf.",
                  "Monthly performance reports with the metrics that matter. No vanity numbers.",
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
              <div className="text-5xl font-black text-blue-500 mb-2">Starting at $299<span className="text-xl text-gray-500">/mo</span></div>
              <p className="text-gray-400 mb-6">We also prepare and schedule your content.</p>
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
            { q: "Which platforms work best for my business?", a: "It depends on your audience. A local restaurant does better on Instagram and Google Business than LinkedIn. We identify where your customers spend their time and focus there." },
            { q: "Can I preview posts before they go live?", a: "Of course. You get a content calendar at the start of each month. Review it, approve it, request changes\u2014we don\u2019t publish anything without your sign-off." },
            { q: "Can you post from my accounts?", a: "Yes, if you give us access. Or we deliver the content and you post it yourself. Whatever you\u2019re comfortable with." },
            { q: "What if the content doesn\u2019t sound right?", a: "We adjust. It usually takes one or two rounds to nail your brand voice. We keep refining until it sounds like you." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Your Social Media, Handled</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One restaurant owner told us: &quot;I kept meaning to post but never did. Now my Instagram actually looks alive.&quot;
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get a Content Calendar
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
