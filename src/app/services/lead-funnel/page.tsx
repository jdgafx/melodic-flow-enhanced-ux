import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Assisted Leadgen",
  description: "Convert potential customers 24/7. AI-powered lead capture on your website, Facebook, and LinkedIn.",
  keywords: ["lead generation funnel", "AI lead generation system", "automated sales funnel", "lead capture system", "lead nurturing automation", "B2B lead generation service", "appointment booking funnel", "sales funnel agency", "AI-powered lead generation", "multi-channel lead funnel", "lead magnet funnel setup", "best lead generation agency 2025", "automated prospect pipeline", "sales funnel for small business"],
};

export default function LeadGenPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />

      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧲</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Assisted Leadgen</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most lead funnels fail in one of two ways: they overwhelm visitors with too many form fields, or they go silent after the first touchpoint. Our AI-powered funnels guide prospects from first click to booked appointment—without dropping a single lead.
          </p>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why AI Assisted Leadgen Works Better</h2>
              <p className="text-gray-400 mb-6">
                We build lead funnels that turn prospects into booked appointments. Here&apos;s how the system works:
              </p>
              <ul className="space-y-4">
                {[
                  "First, we identify a lead magnet your target customers can't resist\u2014a checklist, guide, calculator, or resource they'll download without hesitation.",
                  "Next, we design a landing page built for conversions. We target 20% conversion rates or higher. Most agencies celebrate 5%\u2014we don't stop there.",
                  "Then we create an email sequence that reads like a personal conversation, not a mass blast. Each message nurtures leads progressively until they're ready for a call.",
                  "By syncing with your calendar, we skip the back-and-forth email threads and let qualified leads book time with you directly.",
                  "We also handle all the tracking. You'll see exactly what's working and where to improve\u2014no guesswork.",
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
              <div className="text-5xl font-black text-blue-500 mb-2">$1,499 setup + $299/mo</div>
              <p className="text-sm text-gray-500 mb-2">Complete lead generation system</p>
              <p className="text-gray-400 mb-6">
                Transparent pricing. We build the system, manage it, and keep your pipeline full.
              </p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Get Started
              </Link>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Most customers get their first qualified lead in under a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Three Channels, One System</h2>
          <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
            Most businesses only use one or two of these channels. We connect all three so you capture every lead—no matter where a prospect first discovers you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "Website Chatbot",
                desc: "Engages visitors at the right moment, asks qualifying questions, and books appointments—all on autopilot, 24/7.",
                stat: "Never miss a lead again"
              },
              {
                icon: "📱",
                title: "Facebook Messenger",
                desc: "1.3 billion people use Messenger every month. Reach prospects on a platform they already use and trust—with instant, automated responses.",
                stat: "Instant response, any time of day"
              },
              {
                icon: "💼",
                title: "LinkedIn Automation",
                desc: "Finds prospects who match your criteria, engages with their content through meaningful comments and shares, and starts conversations that lead to sales.",
                stat: "Warm introductions at scale"
              },
            ].map((channel, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="text-4xl mb-3">{channel.icon}</div>
                <h3 className="font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.desc}</p>
                <p className="text-blue-500 font-medium text-sm">{channel.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this chatbot different from the one I already have?",
                a: "Most chatbots handle basic FAQ-style questions and stop there. Ours is a sales tool. It qualifies visitors through a natural conversation, collects their contact information, and books appointments on your calendar—without you lifting a finger. One client told us their old bot felt like a vending machine. Ours works more like a top sales rep who never clocks out."
              },
              {
                q: "What if I already have a CRM?",
                a: "We integrate with all major CRM platforms—HubSpot, Salesforce, Pipedrive, Zoho, and more. Every conversation and data point flows directly into your existing setup. Your team gets full visibility, and leads never have to repeat themselves."
              },
              {
                q: "Facebook Messenger sounds complicated. Is it?",
                a: "Not at all—this is one of our strengths. Here's a typical scenario: someone messages your Facebook page at 3 AM. Your AI assistant responds instantly, asks a few qualifying questions, and if they're a fit, books a call at their convenience. They pick a slot from your calendar, and it's done. You wake up to a calendar full of qualified appointments."
              },
              {
                q: "I have tried LinkedIn automation before and it felt spammy.",
                a: "We understand that concern completely. Generic bots that blast the same message to everyone are ineffective and damage your reputation. Our approach is different. We identify individuals who match your ideal customer profile, engage with their content through thoughtful and relevant comments, and then open genuine conversations. The result is warm introductions—not cold spam."
              },
              {
                q: "How long does it take to see the results?",
                a: "Timeline depends on your current traffic levels. That said, most clients see their first qualified lead within the first week. The system also improves over time—it learns what converts best for your specific business. By week three or four, you'll typically have a steady flow of leads coming in without any extra effort on your end."
              },
              {
                q: "What if I want to change things after the launch?",
                a: "During the first month, all modifications are included at no extra cost. After that, changes are billed at reasonable hourly rates. We don't disappear after launch—you'll get regular updates on performance and optimizations. Most clients stay with us not because of a contract, but because the system delivers consistent results."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-indigo-500 to-violet-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">The Number One Reason Leads Get Lost</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            It's response time. If a lead doesn't hear back within 5 minutes, the chance of conversion drops by 10x. People get distracted, lose interest, or find a competitor who responded faster.
          </p>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            One gym owner we work with put it this way: "I was losing 5 to 10 leads every week because I couldn't respond fast enough. Now I wake up to appointments already on my calendar."
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book Your Discovery Call
          </Link>
          <p className="text-indigo-200 text-sm mt-6">
            15 minutes, no pressure. We'll discuss your goals and see if we're the right fit.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
