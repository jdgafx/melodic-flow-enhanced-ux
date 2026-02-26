import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Content That Ranks | AMP Marketing",
  description: "Expert articles your audience will read and trust. Boost your site traffic with well-researched, SEO-optimized content.",
  keywords: ["SEO content writing service", "SEO articles for business", "content marketing services", "blog writing service", "organic traffic growth", "keyword-optimized content", "SEO copywriting agency", "AI-assisted SEO writing", "long-form SEO content", "rank on Google with content", "SEO blog posts for small business", "content marketing agency", "best SEO writing service 2025", "Bing search ranking content"],
};

export default function SeoContentPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Content That Ranks</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We write articles that your target audience will read, share, and trust. We discover the questions your buyers are asking and provide clear answers. No fluff, no keyword stuffing—just helpful information that steadily brings traffic to your website.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">Some pages attract steady traffic for years. Others get zero visitors. The difference is strategy. We write for your audience first and search engines second—so your content performs on both fronts. Here's what goes into every article:</p>
              <ul className="space-y-4">
                {[
                   "Around 2,000 words of in-depth content that fully answers the search query. No filler, no padding.",
                  "We don\u2019t guess at keywords. We dig into ones with real search volume—actual opportunities, not made-up nonsense.",
                  "Strategic internal linking that connects related pages on your site, helping both readers and search engines navigate your content.",
                  "Compelling meta descriptions—the preview text shown in Google search results—written to grab attention and drive clicks to your page.",
                  "Titles that sound appealing to the reader while simultaneously being friendly to search engines.",
                  "Every article is delivered publish-ready and formatted for your platform—WordPress, Wix, Squarespace, or any other CMS you use.",
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
              <div className="text-5xl font-black text-blue-500 mb-2">Starting at $149<span className="text-xl text-gray-500">/article</span></div>
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
            { q: "How do you decide what to write about?", a: "We research what your competitors rank for, analyze the questions your customers are asking, and identify which search terms are driving real traffic. We include you in every content decision before writing begins—so there are no surprises." },
            { q: "Do you guarantee first page rankings?", a: "No reputable agency can guarantee specific rankings—anyone who does is being misleading. What we do guarantee is well-researched, expertly written content that follows SEO best practices. Rankings depend on many factors including competition, domain authority, and site age, but strong content is the foundation of every successful strategy." },
            { q: "Can you post the articles on my website?", a: "Certainly. WordPress, Wix, Squarespace, etc. we can log in and post it, or just give you the content to upload yourself. Whatever is most convenient for you." },
            { q: "Which type of articles are best?", a: "How-to guides, industry explainers, product comparisons, and FAQ pages tend to perform best. The common thread is that they answer the specific questions your target audience is searching for." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Organic Traffic That Converts</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            A home services client went from getting 300 visitors per month to 3,000 in only 4 months. It was the right content in the right way that made it happen.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Write My First Article
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
