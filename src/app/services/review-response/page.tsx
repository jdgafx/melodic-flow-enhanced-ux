import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Reputation Management System",
  description: "Automated review responses that sound personal and professional. Every review gets a reply within 24 hours.",
  keywords: ["reputation management service", "automated review responses", "Google review management", "Yelp review response service", "online reputation management", "review monitoring service", "business review management", "customer feedback automation", "AI review response", "respond to Google reviews automatically", "negative review management", "review generation service", "online reviews for business", "best reputation management agency 2025"],
};

export default function ReviewResponsePage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Reputation Management</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every review deserves a response. We handle yours automatically&mdash;thoughtful, personalized replies within 24 hours. It shows customers you care, and it helps your business rank higher in local search.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">Here&apos;s how we protect and build your reputation while you focus on running your business:</p>
              <ul className="space-y-4">
                {[
                  "Positive reviews get sincere, specific thank-you responses\u2014not generic templates.",
                  "Negative reviews are handled professionally. We de-escalate the situation so you don\u2019t have to.",
                  "Every response is trained to match your voice and tone, not sound like a corporate press release.",
                  "We monitor Google, Yelp, Facebook, and any other platform where customers leave feedback.",
                  "If something urgent comes in, you get an immediate alert on your phone so you can step in if needed.",
                  "Responses go out quickly\u2014often within minutes, not hours.",
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
              <div className="text-5xl font-black text-blue-500 mb-2">Starting at $99<span className="text-xl text-gray-500">/mo</span></div>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Questions</h2>
          {[
            { q: "Can I tweak the responses?", a: "Yes. You can adjust the tone, approve templates in advance, or just let it run. You\u2019re always in control of how your brand sounds." },
            { q: "Which platforms do you monitor?", a: "Everywhere your customers leave reviews. Google, Yelp, TripAdvisor, Facebook, and more." },
            { q: "What about angry customers?", a: "Sensitive reviews get flagged and sent to you immediately. We don\u2019t let AI handle heated situations unsupervised unless you tell us otherwise." },
            { q: "Does it sound robotic?", a: "Not at all. We train it to avoid the \u2018Thank you, valued customer\u2019 template tone. Every reply reads like a real person wrote it." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Build Trust Automatically</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Every review should receive a response. Let your customers know that you value them. Get started today.
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
