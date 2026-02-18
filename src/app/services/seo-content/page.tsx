import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Content That Ranks | AMP Marketing",
  description: "Knowledgeable articles that human beings will genuinely read. Boost your site traffic without worthless content.",
};

export default function SeoContentPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Content That Ranks</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Are articles that people actually read. We discover the questions that your buyers are asking and provide clear answers. We avoid fluff and repetitive keywords. Instead, we offer only helpful information that steadily brings traffic to your website.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">Have you ever thought about why some content attracts traffic while other pages get no visitors? One way we render our content is by putting the needs of your audience first and search engines second so naturally, your content gets the best of both worlds. We take several steps:</p>
              <ul className="space-y-4">
                {[
                   "Approximately 2,000 words of legitimate content carefully crafted to provide comprehensive answers to the main search intent without fillers or other content additives.",
                  "We don&apos;t guess at keywords. We dig into ones with real search volume—actual opportunities, not made-up nonsense.",
                  "Always make the link relationships among your pages logical and coherent.",
                  "The text element that people see when searching on Google, which catches their attention and attracts clicks.",
                  "Titles that sound appealing to the reader while simultaneously being friendly to search engines.",
                  "Frankly, the best thing about it is that it comes ready to be uploaded to the most popular platforms such as WordPress, Wix, Squarespace, or any other platform you are using.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">Starting at $149<span className="text-xl text-gray-500">/article</span></div>
              <p className="text-sm text-gray-500 mb-2">One-time fee per article</p>
              <p className="text-gray-400 mb-6">Or $499/month for 4 new articles delivered each month.</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Order Article
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Before You Ask</h2>
          {[
            { q: "How do you decide what to write about?", a: "Actually, we think about what your competitors rank for, analyze the questions from your customers, and determine which search terms are really getting traffic. We include you in decision-making before doing the actual writing—so no surprises." },
            { q: "Do you guarantee first page rankings?", a: "Come on, no reasonable person can make such a promise. What we do promise is: great content that is well crafted and properly optimized. However, there are so many ranking factors such as your competitors, your domain authority, the age of your site, and so on." },
            { q: "Can you post the articles on my website?", a: "Certainly. WordPress, Wix, Squarespace, etc. we can log in and post it, or just give you the content to upload yourself. Whatever is most convenient for you." },
            { q: "Which type of articles are best?", a: "Instructional articles or how-to guides, industry explainers, comparisons and list of FAQs. In fact, it is all the information that your target audience needs and searches for." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Organic Traffic That Converts</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            A home services client went from getting 300 visitors per month to 3,000 in only 4 months. It was the right content in the right way that made it happen.
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Write My First Article
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
