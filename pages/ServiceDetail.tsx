import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bot, Phone, Search, Mail, Layout, GitMerge, Star, PenTool, Share2, 
  ArrowLeft, CheckCircle2, Zap, ArrowRight, Shield, Globe
} from 'lucide-react';

const serviceData: Record<string, any> = {
  'ad-copy': {
    title: 'Peak Performance Ads Optimization',
    icon: <PenTool className="w-12 h-12 text-orange-400" />,
    description: 'Throwing your money down on ads that are totally invisible to people is not the right thing to do. We come up with short but strong CD headlines that catch the eye and force the click. Every month, we try out several versions AND we keep your cost low and your sales high.',
    features: [
      "We produce 4-8 headline variations for each ad set and let the testing do its thing.",
      "We create engage attention CTA that makes people click—not those boring 'Learn More' buttons which are always being scrolled past.",
      "Google, Meta, LinkedIn—we have the secret of each platform in our pockets.",
      "A different message for each audience because, let's face it, the way a homeowner thinks is totally different from the way a contractor thinks.",
      "And here is something most of the people are just missing totally—a handful of points, such as your ad getting noticed immediately, which actually make a real difference.",
      "Every week, we perform updates to the campaign based on the analysis of actual data, not guesswork. It's not that complex when you break it down.",
    ],
    pricing: 'From $299 set up + $199/mth',
    pricingNote: 'Unlimited copy revisions.',
    faqs: [
      { q: "Which platforms do you handle?", a: "Google Ads, Meta (that includes Facebook and Instagram), LinkedIn Ads, and Microsoft Ads. Each one has its own unique features and best practices, so what works on LinkedIn may not necessarily work on Instagram." },
      { q: "How many variations do you actually write?", a: "Typically, the number ranges between 4-8 per ad set. It is sufficient for testing without overwhelming with a multitude of options." },
      { q: "What if I already have ads running?", a: "It’s cool. We will focus on creating a contrast between the works and your new ads. Occasionally, a simple solution is to just do a little tweak here and there. Other times? Yeah, the overhaul might be necessary." },
      { q: "How do you know if it's working?", a: "We monitor every three of these metrics — clicks, conversions, and cost per lead. When the numbers keep going up and the costs go down, then it's working. We are not after vanity metrics." },
    ],
    ctaTitle: 'Want to stop wasting your ad budget?',
    ctaText: 'One of the dental clients that we cooperated with managed to reduce their cost per lead by 40% within a month. Better text. Less waste.',
    ctaButton: 'Get Better Copy'
  },
  'ai-chatbot': {
    title: 'Smart Website Chat',
    icon: <Bot className="w-12 h-12 text-purple-400" />,
    description: "Let's face it, your site shouldn't just be a vehicle for looking at stuff. Actually, if it doesn't promote your business by continuously chatting and booking leads while you are asleep, you are losing money. We make AI chatbots that are trained specifically for your business and lead visitors from casual browsing to the booking of an appointment.",
    features: [
      "We give it the info of your web, your docs, and also any PDFs if you have—so it really understands your company.",
      "Before setting up the appointment, it quickly determines whether the person is really interested/presenting the time.",
      "Intuitive communication made easy for Google, Outlook, and other calendar users. Synchronizes latest version helpful to not double-book.",
      "Instant responses are available even if the business owner is asleep at 2 in the morning.",
      "Just like a human operator, the messages are directed and updated.",
      "Also, it is becoming more intelligent every day because of its interactions with different users.",
    ],
    pricing: 'Starting at $497 setup + $149/mo',
    pricingNote: 'Custom training and monthly AI management.',
    faqs: [
      { q: "How does the free trial work?", a: "For the first 7 days, you have access to everything - no credit card requirement. Simply check the number of leads the chatbot can attract for you. If you are not convinced, just leave. Nothing lost." },
      { q: "How is the AI trained?", a: "Whatever you give us: your website, PDFs, documents, whatever. The bot remembers it all so that it can provide answers tailored to your business and not some generic or vague ones." },
      { q: "Does it work with my calendar?", a: "Yes, it supports Google, Outlook, and any other calendar you use. It will only schedule appointments when your calendar shows that you are free. Don't worry about the setup; we will do it all for you." },
      { q: "What if it doesn't know an answer?", a: "The bot politely tells them that it will find the right person for them and then it would immediately send your team an email or a text message. Now your job is to get the deal done. Simple as that." },
    ],
    ctaTitle: 'How many leads do you want? Time to catch them all!',
    ctaText: 'Try it out and see how it works within 7 days. If the number of qualified leads conveyed is not satisfactory, then you may walk away.',
    ctaButton: 'Start Free Trial'
  },
  'ai-voice': {
    title: 'Virtual Front Desk',
    icon: <Phone className="w-12 h-12 text-blue-400" />,
    description: 'Missed calls are not only an irritation, but also a loss of revenue. If your customer is not answered on the first ring, they will simply call the next business that appears on Google. Therefore, if your business is closed our AI phone system will answer automatically. It will also book appointments, answer questions, and run your front desk without any supervision.',
    features: [
      "The very first ring is the time it picks up. Your customers will get a real human conversation and booked their appointments instead of getting the voicemail.",
      "Basically, what the AI phone do is figure out the ones that really want to use a service and then it books the appointments.",
      "Sometimes situations may change unexpectedly. The AI phone can either redirect the calls to your mobile, or it can write the message for you.",
      "There is no pressure on you to change your phone number at all. Your number remains yours.",
      "Believe it or not, it takes us less than an hour to train the AI for your services.",
      "Whatever calendar you are using, the assistant will be able to connect with it. No double-bookings at any time.",
    ],
    pricing: 'Starting at $497 setup + $249/mo',
    pricingNote: 'Great phone answering installation & 24/7 after care service',
    faqs: [
      { q: "How fast can I get this running?", a: "We can practically have you up and running with phone call operations within a couple of days. For this, you just need to tell us what your business is about, when you are available, and how you want calls to be handled." },
      { q: "What if it can't help someone?", a: "The answer depends on the type of house rules that you get to determine. So, it may be that the information is collected and sent to your mobile or a callback is scheduled." },
      { q: "Do I need a new phone number?", a: "You don't have to do a thing in order to keep your number. We just take care of routing the incoming calls from the phone system to our service so the calls can be answered again." },
      { q: "How do I know how many calls you handled?", a: "Dashboard shows you everything—how many calls, how long they lasted, what happened. No guessing." },
    ],
    ctaTitle: 'Stop leaving calls unanswered and sending them straight to voicemail.',
    ctaText: 'Try it for free for a week and watch how many appointments you get.',
    ctaButton: 'Start Free Trial'
  },
  'email-automation': {
    title: 'Human-Like Follow Ups',
    icon: <Mail className="w-12 h-12 text-green-400" />,
    description: 'Generally, automated emails are dull and typical spam emails. We are not one of those. Our sequences are so convincing that it seems like real humans wrote them and not a robot. By doing this, you can successfully convert your subscribers into the customers without sounding robotic.',
    features: [
      "Welcome emails that really sound as if they were written by a human.",
      "Emails with script to remind the person of their carton which they abandoned and get them back (as a matter of fact, the recovery rates in the range of 15-30% is what we typically experience).",
      "Emails that follow up but are not intrusive or irritating.",
      "Those email marketing campaigns that re-activate the long lost subscribers who have not opened any of your communication for a while.",
      "Intelligent triggers based on real user's behavior on your site.",
      "We hold tests for all our steps. We don&apos;t simply guess and wish success.",
    ],
    pricing: 'Starting at $199 setup + $49/mo',
    pricingNote: 'Personalized sequence creation and monthly fine-tuning.',
    faqs: [
      { q: "How long does this take?", a: "Approximately one week of your time. We require 1-2 days to figure out your style of communication, install software, and make the necessary tests. Rushing is only conducive to errors." },
      { q: "What platforms do you work with?", a: "We deal with almost all of them starting from Mailchimp, ConvertKit, Klaviyo, and ActiveCampaign. On the bright side, if you are using a rare platform, we will manage to find a solution." },
      { q: "Can I write my own copy?", a: "Of course. The business is yours anyway, and you have full control. We are capable of writing the copy ourselves, you can do it, and together we can even do a hybrid version. The main thing is that you are comfortable." },
      { q: "What about spam filters?", a: "We have done all the technical things—DKIM, SPF, and cleaning the list—so that your emails really reach envelopes. Most of the customers experience 95% or even more delivery rate." },
    ],
    ctaTitle: 'Stop hunting down leads manually?',
    ctaText: 'One of the clients has said it best: \"I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep.\"',
    ctaButton: 'How about we build your sequence?'
  },
  'google-business': {
    title: 'Local Search Mastery',
    icon: <Search className="w-12 h-12 text-orange-500" />,
    description: "Listen, if you don't get to the top 3 of Google map pack, you are literally invisible. To tell the truth, most profiles are downright a disaster. We change yours in a way that people in your local area will find you and even call you.",
    features: [
      "We conduct a comprehensive study on the keywords that people most frequently type in when searching for businesses like yours.",
      "We retake your photos- no more old and blurry photos.",
      "We work on your categories to make them perfect so that Google is not confused by your services.",
      "The Q & A spot is filled up with questions that people usually ask and answers are given.",
      "You reply to every review. Thank the good, handle the bad.",
      "We let you gauge the traffic to your phone and website at the level of accuracy that the data that you see is the truth.",
    ],
    pricing: '$399 one-time',
    pricingNote: 'Complete optimization and 30 days of ranking tweaking.',
    faqs: [
      { q: "How long until I show up in searches?", a: "Most of the companies experience the first changes in 3-7 days. The real growth comes when you are in the map pack, which quite often occurs within a month." },
      { q: "Do I need to give you new photos?", a: "No. We take what you have and let you know what would help. If your photos are good enough, we use them." },
      { q: "What if my profile already exists?", a: "Actually, that's a perfect situation. Our experts checked many online profiles and found out that most of them are only 60% complete. So we make them 100% and optimize everything that is there." },
      { q: "Is this a monthly thing?", a: "No, it's a one-off thing. We create, make it better, and that's it. In case you want us to take care of it on a regular basis, we can discuss that further, but there is no pressure." },
    ],
    ctaTitle: 'Show Up When It Matters',
    ctaText: 'Be found by people from your neighborhood. Kick-off now.',
    ctaButton: 'Get Started'
  },
  'landing-pages': {
    title: 'High-Converting Pages',
    icon: <Layout className="w-12 h-12 text-pink-400" />,
    description: 'Only one page needed to turn visitors into leads. We come up with the text, the design, and ensure that the \"Buy\" button is 100% functional. You get an elegant website that loads fast and is a great source of income for you.',
    features: [
      "On a mobile device it is flawless—let&apos;s be sincere, that is the source of 70% of your visitors.",
      "Your page loads fast, like under 3 seconds. People leave if it's any slower.",
      "Titles that make you put the scroll down and wait.",
      "Trust is instantly established when we combine your glowing testimonials and client logos—after all, people buy from people they trust, right?",
      "Prominent and obvious buttons. We don&apos;t make it difficult to check out.",
      "We installed proper tracking so you always know where the money is coming from.",
    ],
    pricing: 'Starting at $799/page',
    pricingNote: 'You are free to revise the content two times.',
    faqs: [
      { q: "Where will the pages actually be?", a: "We can either put it on your existing website or create a new one for you. It'll work whichever way you choose." },
      { q: "Can you integrate with my CRM?", a: "Of course, we can feed the leads directly into HubSpot, Salesforce, Mailchimp—the CRM of your choice. No hassles." },
      { q: "What if I want changes after some time?", a: "We cover the first 30 days of tweaks, but after that, if you need us, we will be here. Agreed?" },
      { q: "How many conversions do you think I will get?", a: "Truthfully? It's your product and your traffic that determines the result. We provide the mechanism, but you have to fuel it." },
    ],
    ctaTitle: 'The landing page you&apos;ve been procrastinating about.',
    ctaText: 'A brand in the e-commerce sector mentioned that their landing page alone had fetched $47,000 in month&apos;s time. They seriously could not believe it because they had been \"meaning to get around to it\" for nearly two years.',
    ctaButton: 'Build My Page'
  },
  'lead-funnel': {
    title: 'AI Assisted Leadgen',
    icon: <GitMerge className="w-12 h-12 text-indigo-400" />,
    description: 'Broken lead funnels are the norm these days. They either pressure people by oversharing requests for information or suddenly disappear after dropping the lead into the funnel. Our lead funnels convert strangers into booked appointments.',
    features: [
      "Initially, we decide on a lead magnet that is irresistible to your target customers; it could be a checklist, a guide, a calculator, or anything they would be attracted to and will want to download without hesitation.",
      "After that, we design a landing page that actually gets the visitors to take the desired action. A conversion rate of 20% or even higher is what we are talking about. However, most agencies get excited about 5% only—we go way beyond that.",
      "Then we put together a series of mails that feel more like one-on-one conversations rather than being robotic and cold. The messages progressively 'heat' the leads so that they are ready for a call.",
      "By tethering to your schedule, we save your good leads from endless e-mail threads and allow them to book a session with you directly.",
      "Also, to make it easy for you, we do the tracking as well. You will pinpoint the successful activities as well as those that have to be worked on.",
    ],
    pricing: '$1,499 setup + $299/mo',
    pricingNote: 'Complete lead generation system',
    faqs: [
      { q: "Is this chatbot different from the one I already have?", a: "Look, the majority of chatbots are programmed to respond to simple queries that don't go beyond the very basics. Our bot is a salesperson. It 'talks' through its algorithm to determine if a visitor is suitable, then gathers the necessary contact information, and schedules appointments on your calendar—all without your intervention." },
      { q: "What if I already have a CRM?", a: "That's actually a great question—the good news is we can integrate with all the major CRM systems. HubSpot, Salesforce, Pipedrive, Zoho, you name it. Every chat, every piece of data, is seamlessly integrated into your setup." },
      { q: "Facebook Messenger sounds complicated. Is it?", a: "Absolutely not—and that's what we are best at. The actual scenario goes like this: someone sends a direct message to your Facebook page at 3 o'clock in the morning. Your AI-powered assistant instantly gets back to them, verifies them through asking a couple of short questions, and if they are deemed suitable, a call is scheduled." },
    ],
    ctaTitle: 'The Number One Reason Leads Get Lost',
    ctaText: 'It\'s response time. If a lead doesn\'t get a response within 5 minutes, the chances of that lead converting drop by a factor of 10. One gym owner we helped summed it up saying: \"I was losing 5 to 10 leads weekly because I was too slow to respond. Now I wake up to appointments that are already booked on my calendar.\"',
    ctaButton: 'Book Your Discovery Call'
  },
  'review-response': {
    title: 'Reputation Management',
    icon: <Star className="w-12 h-12 text-yellow-400" />,
    description: 'We negotiate your customer feedback on your behalf so you don&apos;t have to. A thoughtful and personalized response is given to every review within 24 hours. It communicates to people that you are attentive and it also helps your business rank first in local searches.',
    features: [
      "It expresses gratitude to customers for their positive review in a very sincere and authentic way.",
      "It professionally deals with those who are upset through de-escalating the conflict so you are not getting anxious about it.",
      "We train it to be personal and sound like you rather than a cold corporate press release.",
      "Google, Yelp, Facebook - anytime and anywhere someone mentions you in a positive or negative way, we are on top of it.",
      "If the situation gets out of control, it fires a message to your phone straight away so you can be the first to act.",
      "It does not wait until it is convenient but nearly instantaneously replies.",
    ],
    pricing: 'Starting at $99/mo',
    pricingNote: 'The price includes unlimited number of replies. There is no charge per review.',
    faqs: [
      { q: "Can I review the replies before they go out?", a: "Yes, you can. We can set it up so that every reply is held in a queue for your approval. Or, once you trust the system, you can let it run on autopilot. Most clients start with approval and move to autopilot within two weeks." },
      { q: "Which platforms do you monitor?", a: "Google Business, Yelp, Facebook, and industry-specific sites like TripAdvisor or Houzz. If there is an RSS feed or API, we can monitor it." },
      { q: "How does this help my SEO?", a: "Google loves active profiles. When you respond to reviews consistently, it signals to Google that your business is engaged and reliable, which often boosts your local map ranking." },
    ],
    ctaTitle: 'Your Reputation on Autopilot',
    ctaText: 'Stop letting negative reviews sit without a response. Show your customers that you care about their experience, every single time.',
    ctaButton: 'Protect My Reputation'
  },
  'seo-content': {
    title: 'Content That Ranks',
    icon: <Globe className="w-12 h-12 text-emerald-400" />,
    description: 'Are articles that people actually read. We discover the questions that your buyers are asking and provide clear answers. We avoid fluff and repetitive keywords. Instead, we offer only helpful information that steadily brings traffic to your website.',
    features: [
      "Approximately 2,000 words of legitimate content carefully crafted to provide comprehensive answers to the main search intent without fillers or other content additives.",
      "We don&apos;t guess at keywords. We dig into ones with real search volume—actual opportunities, not made-up nonsense.",
      "Always make the link relationships among your pages logical and coherent.",
      "The text element that people see when searching on Google, which catches their attention and attracts clicks.",
      "Titles that sound appealing to the reader while simultaneously being friendly to search engines.",
      "Frankly, the best thing about it is that it comes ready to be uploaded to the most popular platforms such as WordPress, Wix, Squarespace, or any other platform you are using.",
    ],
    pricing: 'Starting at $149/article',
    pricingNote: 'Or $499/month for 4 new articles delivered each month.',
    faqs: [
      { q: "How do you decide what to write about?", a: "Actually, we think about what your competitors rank for, analyze the questions from your customers, and determine which search terms are really getting traffic. We include you in decision-making before doing the actual writing—so no surprises." },
      { q: "Do you guarantee first page rankings?", a: "Come on, no reasonable person can make such a promise. What we do promise is: great content that is well crafted and properly optimized. However, there are so many ranking factors such as your competitors, your domain authority, the age of your site, and so on." },
      { q: "Can you post the articles on my website?", a: "Certainly. WordPress, Wix, Squarespace, etc. we can log in and post it, or just give you the content to upload yourself. Whatever is most convenient for you." },
      { q: "Which type of articles are best?", a: "Instructional articles or how-to guides, industry explainers, comparisons and list of FAQs. In fact, it is all the information that your target audience needs and searches for." },
    ],
    ctaTitle: 'Organic Traffic That Converts',
    ctaText: 'A home services client went from getting 300 visitors per month to 3,000 in only 4 months. It was the right content in the right way that made it happen.',
    ctaButton: 'Write My First Article'
  },
  'social-media': {
    title: 'Consistent Social Presence',
    icon: <Share2 className="w-12 h-12 text-blue-500" />,
    description: 'Stay online without spending all day on your phone. We make it three posts a week, real photos and captions that begin the conversations. It needs your brand to be top-of-mind and your followers to be loyal.',
    features: [
      "20 posts a month, and they really sound like you. No stiff corporate speak here.",
      "We manage LinkedIn, Facebook, Instagram, and X, basically all of them.",
      "Customized visuals—and yes, no more horrible pictures of two men shaking hands in boardrooms.",
      "The hashtags are actually selected to bring you new people and not just words thrown together without meaning.",
      "We also drop by comments, reply to people and develop the community with your brand at the center.",
      "At the beginning of the month, you get a report that dissects the work behind the success. Just the data that really counts.",
    ],
    pricing: 'Starting at $299/mo',
    pricingNote: 'We also prepare and schedule your content.',
    faqs: [
      { q: "So, what platforms should you actually consider being present on?", a: "Honestly, it is basically dependent on your product service. A restaurant in the neighborhood? Well, you're definitely better off on Instagram and Google Business rather than LinkedIn, that's just common sense, right?" },
      { q: "Will I have the chance to preview the posts before they are published?", a: "Of course, it's totally fine. Every month, you'll have a content calendar in your hands. You go through it, approve it, tell us what changes need to be made—we won't hit publish without your confirmation, I mean it." },
      { q: "Could you handle posting from my account?", a: "Yes, we can if you decide to give us the access. Or we just deliver the content to you and you post it. To be honest, whatever is your comfort zone, no pressure at all." },
      { q: "What if I want something different in the content?", a: "Don't worry about it, we'll change it. Usually, it's one or two rounds before you get your voice right, so we'll keep tweaking with you until it is really your brand." },
    ],
    ctaTitle: 'Are You Posting...',
    ctaText: 'One restaurant client said to us: \"I kept meaning to post and then I didn\'t. Now my Instagram actually looks alive.\"',
    ctaButton: 'Get a Content Calendar'
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return (
      <div className="pt-40 pb-20 px-6 text-center bg-amp-bg min-h-screen">
        <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">Service Not Found</h1>
        <Link to="/services" className="text-amp-primary font-bold hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full relative bg-amp-bg min-h-screen">
      {/* Header */}
      <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto w-full border-b border-white/5">
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group font-bold uppercase tracking-widest text-xs">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-3xl">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-none uppercase">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium mb-12 max-w-xl">
              {service.description}
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              Get Started
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-amp-primary/10 blur-[120px] rounded-full" />
            <div className="relative bg-[#0F121C] border border-white/5 rounded-[3rem] p-10 md:p-12 shadow-3xl">
              <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tight">Ways Your Business Benefits</h3>
              <div className="space-y-8">
                {service.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 font-medium leading-relaxed text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-black/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-amp-primary/10 text-amp-primary px-4 py-1.5 rounded-full border border-amp-primary/20 text-xs font-black uppercase tracking-widest mb-8">
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Pricing</h2>
          <div className="text-5xl md:text-7xl font-black text-amp-secondary mb-4 tracking-tighter">{service.pricing}</div>
          <p className="text-xl text-gray-400 font-medium mb-12">
            {service.pricingNote}
          </p>
          <Link to="/contact" className="inline-block px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
            Start 7-Day Free Trial
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-[1.5rem] p-8 hover:bg-white/[0.07] transition-all">
                <h3 className="text-lg font-black text-white mb-4 tracking-tight uppercase">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-amp-primary/20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#0F121C] border border-white/5 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-3xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-none uppercase">{service.ctaTitle}</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {service.ctaText}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                  {service.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
