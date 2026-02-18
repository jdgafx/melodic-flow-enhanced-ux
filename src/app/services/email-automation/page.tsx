import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Human-Like Follow Ups Sequences | AMP Marketing",
  description: "Employ smart email sequences that successfully convert subscribers into customers.",
};

export default function EmailAutomationPage() {
  return (
    <main className="min-h-screen bg-transparent font-poppins text-gray-200">
      <Navbar />
      <section className="bg-transparent text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✉️</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Human-Like Follow Ups</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Generally, automated emails are dull and typical spam emails. We are not one of those. Our sequences are so convincing that it seems like real humans wrote them and not a robot. By doing this, you can successfully convert your subscribers into the customers without sounding robotic.
          </p>
        </div>
      </section>
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Most customers report seeing a positive impact within a week.</h2>
              <p className="text-gray-400 mb-4">Let's be honest, the purpose here is to make your emails appear as a personal conversation between two people only. Regardless whether it's HVAC or legal services, we have experience on both. What we do for you:</p>
              <ul className="space-y-4">
                {[
                  "Welcome emails that really sound as if they were written by a human.",
                  "Emails with script to remind the person of their carton which they abandoned and get them back (as a matter of fact, the recovery rates in the range of 15-30% is what we typically experience).",
                  "Emails that follow up but are not intrusive or irritating.",
                  "Those email marketing campaigns that re-activate the long lost subscribers who have not opened any of your communication for a while.",
                  "Intelligent triggers based on real user's behavior on your site.",
                  "We hold tests for all our steps. We don&apos;t simply guess and wish success.",
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
              <div className="text-4xl font-black text-amp-secondary mb-2">Starting at $199 setup + $49/mo</div>
              <p className="text-gray-400 mb-2">Personalized sequence creation and monthly fine-tuning.</p>
              <p className="text-gray-500 text-sm mb-6">First 2,500 subscribers included</p>
              <Link href="/contact" className="block w-full bg-amp-primary text-white text-center py-4 rounded-xl font-bold hover:bg-amp-primary/80 transition-colors">
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
            { q: "How long does this take?", a: "Approximately one week of your time. We require 1-2 days to figure out your style of communication, install software, and make the necessary tests. Rushing is only conducive to errors." },
            { q: "What platforms do you work with?", a: "We deal with almost all of them starting from Mailchimp, ConvertKit, Klaviyo, and ActiveCampaign. On the bright side, if you are using a rare platform, we will manage to find a solution." },
            { q: "Can I write my own copy?", a: "Of course. The business is yours anyway, and you have full control. We are capable of writing the copy ourselves, you can do it, and together we can even do a hybrid version. The main thing is that you are comfortable." },
            { q: "What about spam filters?", a: "We have done all the technical things—DKIM, SPF, and cleaning the list—so that your emails really reach envelopes. Most of the customers experience 95% or even more delivery rate." },
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
          <h2 className="text-3xl font-bold text-white mb-6">Stop hunting down leads manually?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            One of the clients has said it best: &quot;I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep.&quot;
          </p>
          <Link href="/contact" className="inline-block bg-white text-amp-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            How about we build your sequence?
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
