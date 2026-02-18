import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Voice Receptionist | AMP Marketing",
  description: "AI-powered phone answering that works 24/7 and you never miss a call again.",
};

export default function AiVoicePage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📞</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Virtual Front Desk</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Missed calls are not only an irritation, but also a loss of revenue. If your customer is not answered on the first ring, they will simply call the next business that appears on Google. Therefore, if your business is closed our AI phone system will answer automatically. It will also book appointments, answer questions, and run your front desk without any supervision.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Your Phone Works 24/7 Now</h2>
              <p className="text-gray-400 mb-6">It has been proved that on average, most businesses only manage to answer two-thirds of their calls. So, by not answering the calls, they are leaving the same amount of money on the table, literally. Our system trains your staff to be always ready to engage with the caller including the booking process at all times, even at 2 AM on a Sunday.</p>
              <ul className="space-y-4">
                {[
                  "The very first ring is the time it picks up. Your customers will get a real human conversation and booked their appointments instead of getting the voicemail.",
                  "Basically, what the AI phone do is figure out the ones that really want to use a service and then it books the appointments.",
                  "Sometimes situations may change unexpectedly. The AI phone can either redirect the calls to your mobile, or it can write the message for you.",
                  "There is no pressure on you to change your phone number at all. Your number remains yours.",
                  "Believe it or not, it takes us less than an hour to train the AI for your services.",
                  "Whatever calendar you are using, the assistant will be able to connect with it. No double-bookings at any time.",
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
              <div className="text-4xl font-black text-blue-500 mb-2">Starting at $497 setup + $249/mo</div>
              <p className="text-gray-400 mb-6">Great phone answering installation & 24/7 after care service</p>
              <Link href="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Got questions? We're here to help!</h2>
          {[
            { q: "How fast can I get this running?", a: "We can practically have you up and running with phone call operations within a couple of days. For this, you just need to tell us what your business is about, when you are available, and how you want calls to be handled." },
            { q: "What if it can't help someone?", a: "The answer depends on the type of house rules that you get to determine. So, it may be that the information is collected and sent to your mobile or a callback is scheduled." },
            { q: "Do I need a new phone number?", a: "You don't have to do a thing in order to keep your number. We just take care of routing the incoming calls from the phone system to our service so the calls can be answered again." },
            { q: "How do I know how many calls you handled?", a: "Dashboard shows you everything—how many calls, how long they lasted, what happened. No guessing." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Stop leaving calls unanswered and sending them straight to voicemail.</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Try it for free for a week and watch how many appointments you get.
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
