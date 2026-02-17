import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Consistent Social Presence Package | AMP Marketing",
  description: "Stay online without turning your phone into a second home. Genuine posts for genuine people.",
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Consistent Social Presence</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay online without spending all day on your phone. We make it three posts a week, real photos and captions that begin the conversations. It needs your brand to be top-of-mind and your followers to be loyal.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">We understand. You want to see some success without being glued to your phone. So here&apos;s the idea:</p>
              <ul className="space-y-4">
                {[
                  "20 posts a month, and they really sound like you. No stiff corporate speak here.",
                  "We manage LinkedIn, Facebook, Instagram, and X, basically all of them.",
                  "Customized visuals—and yes, no more horrible pictures of two men shaking hands in boardrooms.",
                  "The hashtags are actually selected to bring you new people and not just words thrown together without meaning.",
                  "We also drop by comments, reply to people and develop the community with your brand at the center.",
                  "At the beginning of the month, you get a report that dissects the work behind the success. Just the data that really counts.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">Starting at $299<span className="text-xl text-gray-500">/mo</span></div>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What possibly questions come up in your mind?</h2>
          {[
            { q: "So, what platforms should you actually consider being present on?", a: "Honestly, it is basically dependent on your product service. A restaurant in the neighborhood? Well, you're definitely better off on Instagram and Google Business rather than LinkedIn, that's just common sense, right? We pinpoint for you the places where your customers spend their time." },
            { q: "Will I have the chance to preview the posts before they are published?", a: "Of course, it's totally fine. Every month, you'll have a content calendar in your hands. You go through it, approve it, tell us what changes need to be made—we won't hit publish without your confirmation, I mean it." },
            { q: "Could you handle posting from my account?", a: "Yes, we can if you decide to give us the access. Or we just deliver the content to you and you post it. To be honest, whatever is your comfort zone, no pressure at all." },
            { q: "What if I want something different in the content?", a: "Don't worry about it, we'll change it. Usually, it's one or two rounds before you get your voice right, so we'll keep tweaking with you until it is really your brand." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-6 mb-4 border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-amp-primary to-amp-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Are You Posting...</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One restaurant client said to us: &quot;I kept meaning to post and then I didn&apos;t. Now my Instagram actually looks alive.&quot;
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get a Content Calendar
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
