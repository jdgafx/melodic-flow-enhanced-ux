import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Assisted Leadgen | AMP Marketing",
  description: "Convert potential customers 24/7. AI-powered lead capture on your website, Facebook, and LinkedIn.",
};

export default function LeadGenPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧲</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">AI Assisted Leadgen</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Broken lead funnels are the norm these days. They either pressure people by oversharing requests for information or suddenly disappear after dropping the lead into the funnel. Our lead funnels convert strangers into booked appointments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why AI Assisted Leadgen Works Better</h2>
              <p className="text-gray-400 mb-6">
                We craft lead funnels that work for real. The ones that turn faceèves into booked appointments. That&apos;s the way we do it:
              </p>
              <ul className="space-y-4">
                {[
                  "Initially, we decide on a lead magnet that is irresistible to your target customers; it could be a checklist, a guide, a calculator, or anything they would be attracted to and will want to download without hesitation.",
                  "After that, we design a landing page that actually gets the visitors to take the desired action. A conversion rate of 20% or even higher is what we are talking about. However, most agencies get excited about 5% only—we go way beyond that.",
                  "Then we put together a series of mails that feel more like one-on-one conversations rather than being robotic and cold. The messages progressively 'heat' the leads so that they are ready for a call.",
                  "By tethering to your schedule, we save your good leads from endless e-mail threads and allow them to book a session with you directly.",
                  "Also, to make it easy for you, we do the tracking as well. You will pinpoint the successful activities as well as those that have to be worked on.",
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
              <div className="text-5xl font-black text-indigo-600 mb-2">$1,499 setup + $299/mo</div>
              <p className="text-sm text-gray-500 mb-2">Complete lead generation system</p>
              <p className="text-gray-400 mb-6">
                Simple and clear pricing. We set up the system, run it, and make sure that your leads never dry up.
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
            Many businesses miss out on one or more of these channels. We, on the other hand, connect all three so you never lose a lead regardless of how and where the customer first gets to know about you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "Website Chatbot",
                desc: "Gradually at the right time, pops up asking qualification questions and lastly, appointments booking. It keeps working 24/7.",
                stat: "Never sleep on a lead again"
              },
              {
                icon: "📱",
                title: "Facebook Messenger",
                desc: "1.3 billion people use Messenger every month. So what better way is there than to reach them on a platform they already use and trust?",
                stat: "Instant response, any time of day"
              },
              {
                icon: "💼",
                title: "LinkedIn Automation",
                desc: "Locates the prospect that perfectly matches the given one criteria. Likes their content, comments, and shares. Initiates conversations that result in sales.",
                stat: "Warm introductions at scale"
              },
            ].map((channel, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="text-4xl mb-3">{channel.icon}</div>
                <h3 className="font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.desc}</p>
                <p className="text-indigo-600 font-medium text-sm">{channel.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Clients Actually Ask</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this chatbot different from the one I already have?",
                a: "Look, the majority of chatbots are programmed to respond to simple queries that don't go beyond the very basics. Our bot is a salesperson. It 'talks' through its algorithm to determine if a visitor is suitable, then gathers the necessary contact information, and schedules appointments on your calendar—all without your intervention. Some of our clients even joked their old bot seemed more like a vending machine. Ours was more like the best sales representative who was always there at night."
              },
              {
                q: "What if I already have a CRM?",
                a: "That's actually a great question—the good news is we can integrate with all the major CRM systems. HubSpot, Salesforce, Pipedrive, Zoho, you name it. Every chat, every piece of data, is seamlessly integrated into your setup. Your team gets full visibility of the conversation and therefore the leads will not have to repeat themselves."
              },
              {
                q: "Facebook Messenger sounds complicated. Is it?",
                a: "Absolutely not—and that's what we are best at. The actual scenario goes like this: someone sends a direct message to your Facebook page at 3 o'clock in the morning. Your AI-powered assistant instantly (and I mean instantly) gets back to them, verifies them through asking a couple of short questions, and if they are deemed suitable, a call is scheduled at their convenience. They choose a slot from your calendar, it's all done. Next morning you'll find your calendar stuffed with appointments. Isn't it awesome?"
              },
              {
                q: "I have tried LinkedIn automation before and it felt spammy.",
                a: "Yeah, we totally get your point. Those spam bots that send out the same lame message to everyone? They are nothing but trash—plus they ruin the platform for all users. We take a different approach. We target actual individuals who fit your criteria, we genuinely engage with them through their content (real and thoughtful comments, not just 'great post!'), and then we start authentic conversations. You could say warm intros instead of cold spam."
              },
              {
                q: "How long does it take to see the results?",
                a: "It really depends on the amount of traffic your site is getting. However, the majority of people are able to spot a qualified lead for the very first time within the first week. What is even more exciting is that the system constantly gets better by learning what works perfectly for your particular business. By the third or fourth week, brute flow is usually there without any extra work on your part."
              },
              {
                q: "What if I want to change things after the launch?",
                a: "Free for the first month, you can request any modifications you want. Afterwards, we charge by the hour at modest rates. We are not those kind of people who disappear after the launch—we keep you updated on what we are doing. Honestly, most of the clients don't move on to other companies because of some contract, but simply because this stuff really works."
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

      <section className="py-24 bg-gradient-to-r from-amp-primary to-amp-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">The Number One Reason Leads Get Lost</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            It's response time. If a lead doesn't get a response within 5 minutes, the chances of that lead converting drop by a factor of 10. That's simply human behavior—they get distracted, they forget, or they find a competitor. 
          </p>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            One gym owner we helped summed it up saying: "I was losing 5 to 10 leads weekly because I was too slow to respond. Now I wake up to appointments that are already booked on my calendar."
          </p>
          <Link href="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Book Your Discovery Call
          </Link>
          <p className="text-indigo-200 text-sm mt-6">
            It will just take 15 min, and there won't be any pressure. We just talk about what you need.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
