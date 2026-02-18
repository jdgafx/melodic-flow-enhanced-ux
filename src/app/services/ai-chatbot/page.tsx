import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Chatbot Setup | AMP Marketing",
  description: "Use a clever AI chatbot to get leads round the clock. Make sure you never lose a visitor to your website.",
};

export default function AiChatbotPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />

      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Smart Website Chat</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's face it, your site shouldn't just be a vehicle for looking at stuff. Actually, if it doesn't promote your business by continuously chatting and booking leads while you are asleep, you are losing money. We make AI chatbots that are trained specifically for your business and lead visitors from casual browsing to the booking of an appointment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Ways Your Business Benefits</h2>
              <p className="text-gray-400 mb-6">
                To be honest, most bots on the market are just useless. We have things different. We use your business files, docs, and PDFs to train the bot so it sounds exactly like you, not some random script. This salesperson does not need breaks, and it will work according to your schedule which is 24/7.
              </p>
              <ul className="space-y-4">
            {[
              "We give it the info of your web, your docs, and also any PDFs if you have—so it really understands your company.",
              "Before setting up the appointment, it quickly determines whether the person is really interested/presenting the time.",
              "Intuitive communication made easy for Google, Outlook, and other calendar users. Synchronizes latest version helpful to not double-book.",
              "Instant responses are available even if the business owner is asleep at 2 in the morning.",
              "Just like a human operator, the messages are directed and updated.",
              "Also, it is becoming more intelligent every day because of its interactions with different users.",
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
              <div className="text-4xl font-black text-amp-secondary mb-2">Starting at $497 setup + $149/mo</div>
              <p className="text-gray-400 mb-6">Custom training and monthly AI management.</p>
              <Link href="/contact" className="block w-full bg-amp-primary text-white text-center py-4 rounded-xl font-bold hover:bg-amp-primary/80 transition-colors">
                Start 7-Day Free Trial
              </Link>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Put it on your site. Only pay if you are satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          {[
            { 
              q: "How does the free trial work?", 
              a: "For the first 7 days, you have access to everything - no credit card requirement. Simply check the number of leads the chatbot can attract for you. If you are not convinced, just leave. Nothing lost." 
            },
            { 
              q: "How is the AI trained?", 
              a: "Whatever you give us: your website, PDFs, documents, whatever. The bot remembers it all so that it can provide answers tailored to your business and not some generic or vague ones." 
            },
            { 
              q: "Does it work with my calendar?", 
              a: "Yes, it supports Google, Outlook, and any other calendar you use. It will only schedule appointments when your calendar shows that you are free. Don't worry about the setup; we will do it all for you." 
            },
            { 
              q: "What if it doesn't know an answer?", 
              a: "The bot politely tells them that it will find the right person for them and then it would immediately send your team an email or a text message. Now your job is to get the deal done. Simple as that." 
            },
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
          <h2 className="text-3xl font-bold text-white mb-6">How many leads do you want? Time to catch them all!</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Try it out and see how it works within 7 days. If the number of qualified leads conveyed is not satisfactory, then you may walk away.
          </p>
          <Link href="/contact" className="inline-block bg-white text-amp-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
            Start Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
