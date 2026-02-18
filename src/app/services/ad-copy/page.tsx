import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Peak Performance Ads Optimization | AMP Marketing",
  description: "Crafted ad copy that feels native, really gets people's attention, and attracts clicks. Achieve even better results while lowering your expense.",
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
            Throwing your money down on ads that are totally invisible to people is not the right thing to do. We come up with short but strong CD headlines that catch the eye and force the click. Every month, we try out several versions AND we keep your cost low and your sales high.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">Here is something that worries us: most companies throw away a double-digit percentage of their ad budgets—sometimes 30-50%—simply due to poor ad copy. Insane, right? So here is our answer:</p>
              <ul className="space-y-4">
                {[
                   "We produce 4-8 headline variations for each ad set and let the testing do its thing.",
                  "We create engage attention CTA that makes people click—not those boring 'Learn More' buttons which are always being scrolled past.",
                  "Google, Meta, LinkedIn—we have the secret of each platform in our pockets.",
                  "A different message for each audience because, let&apos;s face it, the way a homeowner thinks is totally different from the way a contractor thinks.",
                  "And here is something most of the people are just missing totally—a handful of points, such as your ad getting noticed immediately, which actually make a real difference.",
                  "Every week, we perform updates to the campaign based on the analysis of actual data, not guesswork. It's not that complex when you break it down.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amp-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Pricing</h3>
              <div className="text-4xl font-black text-amp-secondary mb-2">From $299 set up + $199/mth</div>
              <p className="text-gray-400 mb-6">Unlimited copy revisions.</p>
              <Link href="/contact" className="block w-full bg-amp-primary text-white text-center py-4 rounded-xl font-bold hover:bg-amp-primary/80 transition-colors">
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
            { q: "Which platforms do you handle?", a: "Google Ads, Meta (that includes Facebook and Instagram), LinkedIn Ads, and Microsoft Ads. Each one has its own unique features and best practices, so what works on LinkedIn may not necessarily work on Instagram." },
            { q: "How many variations do you actually write?", a: "Typically, the number ranges between 4-8 per ad set. It is sufficient for testing without overwhelming with a multitude of options." },
            { q: "What if I already have ads running?", a: "It’s cool. We will focus on creating a contrast between the works and your new ads. Occasionally, a simple solution is to just do a little tweak here and there. Other times? Yeah, the overhaul might be necessary." },
            { q: "How do you know if it's working?", a: "We monitor every three of these metrics — clicks, conversions, and cost per lead. When the numbers keep going up and the costs go down, then it's working. We are not after vanity metrics." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to stop wasting your ad budget?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One of the dental clients that we cooperated with managed to reduce their cost per lead by 40% within a month. Better text. Less waste.
          </p>
          <Link href="/contact" className="inline-block bg-white text-amp-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get Better Copy
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
