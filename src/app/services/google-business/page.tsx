import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Google Business Profile Optimization | AMP Marketing",
  description: "Dominate local search. Get discovered by customers near you when they are looking for you.",
};

export default function GoogleBusinessPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Local Search Mastery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Listen, if you don't get to the top 3 of Google map pack, you are literally invisible. To tell the truth, most profiles are downright a disaster. We change yours in a way that people in your local area will find you and even call you.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Make yourself visible to local customers</h2>
              <p className="text-gray-400 mb-6">Just to be honest, the majority of Google Business profiles are only halfway finished. It is like handing over money to your competitors. By optimizing every square inch of your profile, we ensure that you get the most from the local search results.</p>
              <ul className="space-y-4">
                {[
                  "We conduct a comprehensive study on the keywords that people most frequently type in when searching for businesses like yours.",
                  "We retake your photos- no more old and blurry photos.",
                  "We work on your categories to make them perfect so that Google is not confused by your services.",
                  "The Q & A spot is filled up with questions that people usually ask and answers are given.",
                  "You reply to every review. Thank the good, handle the bad.",
                  "We let you gauge the traffic to your phone and website at the level of accuracy that the data that you see is the truth.",
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
              <div className="text-4xl font-black text-indigo-600 mb-2">$399 one-time</div>
              <p className="text-gray-400 mb-6">Complete optimization and 30 days of ranking tweaking.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Questions</h2>
          {[
            { q: "How long until I show up in searches?", a: "Most of the companies experience the first changes in 3-7 days. The real growth comes when you are in the map pack, which quite often occurs within a month." },
            { q: "Do I need to give you new photos?", a: "No. We take what you have and let you know what would help. If your photos are good enough, we use them." },
            { q: "What if my profile already exists?", a: "Actually, that's a perfect situation. Our experts checked many online profiles and found out that most of them are only 60% complete. So we make them 100% and optimize everything that is there." },
            { q: "Is this a monthly thing?", a: "No, it's a one-off thing. We create, make it better, and that's it. In case you want us to take care of it on a regular basis, we can discuss that further, but there is no pressure." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Show Up When It Matters</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Be found by people from your neighborhood. Kick-off now.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Get Started
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
