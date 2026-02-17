const https = require('https');

// Page content to test from convertiq.pages.dev
const pages = {
  homepage: `AI Solutions That Actually Deliver. We help businesses automate, scale, and grow with AI. From lead generation to custom applications, we build systems that work 24/7 so you don't have to. No fluff. Just results.

AI Lead Generation - We build AI systems that find your ideal customers across social media, search, and 100+ ad platforms. Our programmatic approach means your pipeline stays full while you focus on closing deals. It's like having a full-time prospecting team that never sleeps.

AI Consulting - Not sure where AI fits in your business? We'll audit your operations and build a roadmap. From automation opportunities to custom implementations, we help you cut costs and scale faster. Think of us as your AI strategy partner.

AI Voice Solutions - AI Phone Receptionist and Cold Calling powered by VoiceIQ—our platform of choice. Every call gets answered, qualified, and booked. Whether it's inbound leads or outbound prospecting, your phone becomes a revenue machine that works 24/7.

Smart Website Chat - A chatbot that actually makes sense to your visitors. It handles questions with a human touch and books meetings while you're focused on your work. One client recently saw their lead count triple in a single week. It is a game changer for them.

Most of our clients see their new AI systems live and working in about a week. We believe in earning your business. No long-term contracts, cancel whenever you need. We track every lead and booking. You will always know exactly how your investment is performing.

Amp AI Experts honestly changed everything for us. We went from like 10 leads to over 100 in eight weeks. That AI chatbot? It grabs leads while I'm sleeping.`,

  about: `About Amp AI. We help businesses find more leads and close more sales using technology that actually delivers.

Results-First. Honestly? We're obsessed with outcomes, not activity. Every dollar you spend should bring you more back.

No-Nonsense. Straight talk, clear pricing, honest timelines. We don't do corporate speak or hidden fees. Period.

Fast & Flexible. We move fast and adapt to your needs. Seriously, no bureaucracy, no endless approvals.

Our Story. Amp AI was built by the same dedicated team behind Prime Marketing Experts. Led by Michael Krieger, our mission remains the same: helping businesses grow through smart, results-driven strategies.

Michael Krieger, a native Bostonian and graduate of the University of Massachusetts, Lowell, founded Prime Marketing Experts in 2017. With years of experience helping hundreds of small and medium-sized businesses scale, Michael saw a new opportunity to use artificial intelligence to make marketing faster, more accessible, and significantly more effective.

Amp AI is the next evolution of that vision. We combine the deep marketing expertise learned at Prime with cutting-edge AI technology to deliver qualified leads in days, not months.

Today, we continue to support over 500 businesses across the country. Whether you're a local service provider or a professional firm, you benefit from the same high standards and commitment to results that Michael has championed since day one.`,

  pricing: `Straightforward Prices. No BS. No sneaky fees. No contracts locking you in. Everything's customizable—because that's how we do things.

Starter Plan. Just getting started? This gets you a chatbot that actually books stuff, your Google Business sorted so people nearby can find you, auto-review replies, and a dead-simple dashboard. Nothing complicated. $297 per month.

Professional Plan. Ready to step it up? You get everything in Starter, plus a phone bot that never misses a call, emails that people actually read, social posts so you stay on people's radar, and ad copy that actually converts. $597 per month.

Enterprise Plan. The whole shebang. We do everything—content that ranks, pages that convert, full funnels, custom AI trained on your stuff, plus a dedicated manager who actually learns how your business works. $1297 per month.

What is included in the free trial? Everything. Seriously, you get the full platform for 7 days—no credit card, no tricks. If it doesn't blow you away, just walk away. No hard feelings, no hoops to jump through.

Can I customize the services? Totally. We don't do cookie-cutter. Every chatbot script, email template, and ad we write is tailored specifically to your business. We'll work with you until it sounds exactly like you.

How quickly will I see results? Chatbots start working right away—you might see leads the first day. SEO takes longer, usually a couple months. Most folks notice real improvements within the first week though.

Is there a long-term contract? Nope! Month-to-month all the way. If you need to cancel, just give us 30 days notice. We're not about locking people into contracts they don't want.`,

  contact: `Contact Us. Have questions or want to discuss your project? Send us a message and we will respond promptly—typically within the same business day.

Come say hi. 74 Northeastern Blvd 12a Ste 101, Nashua, NH 03062.

Email us. hello@ampaiexperts.com

Call us. 617-651-1457

Schedule a Call. Free 15-minute consultation. Tell us about your challenges. No sales pitch—just an honest conversation about how we might be able to help.

Office Hours. Monday through Friday 9 AM to 6 PM EST. Saturday 10 AM to 2 PM EST. Sunday Closed.

We typically respond within 24 hours.`,

  aiVoice: `Virtual Front Desk. Stop missing opportunities because you were too busy to pick up the phone. Our AI-powered voice receptionists answer instantly, qualify every caller, and book appointments directly on your calendar.

24/7 Phone Answering. Most businesses miss roughly one-third of their incoming calls. Our AI system ensures every potential client gets a response the moment they call, regardless of the time or day.

Calls are answered on the first ring to prevent leads from calling your competitors. The AI naturally qualifies callers and books appointments based on your criteria. If a complex situation arises, the system can seamlessly transfer the call to your team. Keep your existing business phone number while adding intelligent automation. We can train the system on your specific service details in less than an hour. Direct integration with your calendar ensures no double-bookings occur.

Pricing. $249 per month. Pay only for calls handled. No setup fees.

How quickly can I go live? Most businesses are set up and receiving calls within 24 to 48 hours. We just need your basic business details and appointment preferences.

What if the AI cannot handle a specific request? You define the rules. The system can take a detailed message, transfer the call to your mobile, or schedule a callback for your team.

Do I need a new phone number? No. You keep your current number. We simply route your calls through our intelligent system so they can be handled automatically.

Never Miss Another Call. Start your free trial today. See results in less than a week.`,

  aiChatbot: `Smart Website Chat. Your website should be your best salesperson. We set up custom-trained AI chatbots that engage every visitor, answer their questions, and book qualified appointments on your calendar.

How It Helps Your Business. We train the bot specifically on your stuff—your products, your pricing, how you actually talk. So when visitors ask questions, they get real answers that sound like you, not some generic robot.

We feed it your actual website, docs, and any PDFs you have—so it really knows your business inside and out. It asks the right questions to figure out if someone's actually worth your time before booking anything. Plugs straight into whatever calendar you use—Google, Outlook, doesn't matter. Books only when you're free.

Visitors get instant answers at 2am. You don't have to be there. Every conversation automatically flows into your CRM. No manual data entry. And yeah, it gets smarter the more it chats with people. Learns what works.

Pricing. $149 per month. Plus one-time setup fee of $497. Try it on your site. If it doesn't work, you don't pay.

How does the free trial work? You get the full thing for 7 days—no credit card needed. Just see how many leads it actually pulls in. If it doesn't work for you, walk away. No harm done.

Ready to Capture More Leads? Give it a week. Seriously. If you don't see more qualified leads coming in, just walk away.`,

  googleBusiness: `Local Search Mastery. When someone in your neighborhood searches for the services you provide, your business needs to be the first name they see. We ensure your profile is fully optimized to capture that local demand.

Optimizing for Visibility. Most local profiles are only partially complete, leaving significant traffic on the table. We perform a deep-dive optimization to ensure you show up in the local 3-pack when it matters most.

We perform extensive keyword research to match how your local customers actually search. We select and optimize high-quality images that showcase your best work to potential clients. We verify every category and attribute to ensure you appear for the correct service searches.

We populate your profile with relevant Q&A to answer customer concerns before they even call. We implement a reliable system to ensure every customer review receives a professional response. We track phone calls, website clicks, and direction requests so you can measure your return.

Pricing. $399 one-time. Includes setup and 30-day optimization guarantee.

How long until we see movement? Most businesses see an increase in visibility within 3 to 7 days. Google rewards active and complete profiles, and the real growth happens once you secure a spot in the local map pack.

Is this a recurring monthly fee? This is a one-time optimization service. We fix your profile and set the foundation. If you want ongoing management later, we can discuss that, but there's no obligation.

Show Up When It Matters. Get found by customers nearby. Start dominating local search today.`,

  leadFunnel: `Smart Lead Capture. Most lead funnels are broken. They either ask for too much info too soon, or they just drop leads into a black hole. We build funnels that actually convert strangers into booked appointments.

Why Advanced AI LeadGen Works Better. We build funnels that actually work—you know, the kind that turn strangers into booked appointments on your calendar. Here's how we roll:

We start by creating something your ideal customers actually want—maybe it's a checklist, a guide, or a calculator. Something they can't resist downloading. Then we build you a landing page that actually converts. We're talking 20% or better. Most agencies get excited about 5%—we shoot way higher.

Next, we set up email sequences that don't feel robotic. These emails warm up your leads automatically until they're ready to talk. We connect everything to your calendar so qualified prospects can book time with you directly—no back-and-forth email chains. And yeah, we track all of it. You'll know exactly which pieces are working and which ones we need to tweak.

Investment. $1,499 one-time setup fee. No monthly retainers. No hidden costs. You pay once, we build the system, and it keeps working. Typical clients see their first qualified lead within 7 days.

The Number One Reason Leads Get Lost. Response time. A lead that does not get a reply within 5 minutes is 10x less likely to convert. That is just how people work—they move on, forget, find a competitor.

One gym owner we worked with put it simply: I used to lose 5 to 10 leads a week because I could not respond fast enough. Now I wake up to appointments already booked on my calendar.`,

  emailAutomation: `Human-Like Follow Ups. Look, automated emails usually sound like... automated emails. We fix that. We build sequences that actually sound like you, running in the background 24/7.

Most Clients See Results in About a Week. We've built dozens of email systems for HVAC companies, law firms, dentists, and more. Here's what you actually get:

A welcome series that actually feels personal—like a real person sat down to write it. Cart recovery emails that bring people back—honestly, we usually see 15-30% recovery rates. Follow-ups that don't feel spammy or annoying.

Campaigns to wake up those quiet subscribers who haven't opened anything in months. Smart triggers based on what people actually do on your site. We test everything. We don't just guess and hope.

Pricing. $199 setup. Plus $49 per month for sending. First 2,500 subscribers included.

How long does this take? Give us about a week. We need a few days to really get your voice down, set up the tech, and test it all. Rushing just leads to mistakes.

Tired of Chasing Leads Manually? One of our clients put it best: I used to spend 3 hours a day on follow-ups. Now it all happens while I sleep.`,

  socialMedia: `Consistent Social Presence. Look, social media can feel like a full-time job—and honestly, nobody's got time for that. But if you're not showing up consistently, you're basically invisible.

We get it. You want results without living on your phone. So here's what we do for you:

20 posts a month that actually sound like you. None of that stiff corporate nonsense. We handle LinkedIn, Facebook, Instagram, and X. All of them.

Custom graphics—and yes, no more cringe stock photos of people shaking hands in meeting rooms. Hashtags that are actually chosen to help people find you, not just random words thrown together.

We also jump into the comments, reply to people, and build a real community around your brand. At the end of each month, you get a report that breaks down what's working. Just the data that actually matters.

Pricing. $299 per month. Includes content calendar and scheduling.

Do I get to see posts before they go live? Absolutely. You'll get a content calendar every month. Review it, give it the thumbs up, tell us what needs changing—we're not hitting publish without your say-so, promise.

Your Competitors Are Posting. Are You? One restaurant client told us: I kept meaning to post. Then I never did. Now my Instagram actually looks alive.`,

  adCopy: `High-Performance Ads Optimization. Honestly, stop throwing your money away on copy that just doesn't work. We write headlines and descriptions that actually get clicks—it's kind of our thing.

Here's something that keeps us up at night: most businesses waste a massive chunk of their ad budget—sometimes 30-50%—on copy that totally misses the mark. That's crazy, right? So here's how we tackle things:

We create 4-8 headline variations for each ad set and let the A/B testing do its thing. We do calls-to-action that actually make people click—not those boring Learn More buttons we all scroll right past.

Google, Meta, LinkedIn—we know what works on each platform. Different messages for different audiences because, let's be honest, a homeowner thinks way differently than a contractor.

Oh, and most folks completely overlook ad extension recommendations that could actually make a real difference. We do weekly optimization based on real data, not guesses. It's really not that complicated when you break it down.

Pricing. $199 per month. Includes unlimited copy revisions.

Ready to Stop Burning Ad Budget? A dentist we work with cut their cost per lead by 40% in one month. Better copy. Less waste.`,

  landingPages: `High-Converting Pages. Look, we build pages that actually sell. No fluff—just clean design and a straight path for customers to hit Buy. Honestly, it's not rocket science.

Here's the honest difference between a pretty page and one that makes money:

It looks perfect on mobile—let's be real, that's where 70% of your traffic comes from. It loads fast, like under 3 seconds. Any slower, and people bounce.

Headlines that actually make you stop scrolling. We mix in your best reviews and logos so trust is built instantly—people buy from people they trust, right?

Big, clear buttons. We don't hide checkout. We set up tracking that actually works so you know what's bringing in money.

Pricing. $799 per page. Includes 2 rounds of revisions.

What if I want changes down the road? First 30 days of tweaks are on us. After that, we're here if you need us. Fair enough?

That Landing Page You've Been Putting Off. A client in e-commerce told us their landing page generated $47,000 in its first month. Seriously, they'd been meaning to get around to it for two years.`,

  reviewResponse: `Reputation Management. Leaving a review unanswered is like ignoring someone who just walked up to shake your hand. We make sure you never leave anyone hanging.

Here's how we keep your reputation spotless while you sleep:

It thanks customers for positive feedback in a way that feels real and authentic. It handles the haters professionally—defusing the situation so you don't have to stress about it.

We teach it to sound like you, not a corporate press release. Google, Yelp, Facebook—if someone's talking about you online, we catch it.

If things get heated, it pings you instantly so you can step in. It responds in minutes, not whenever I get around to it.

Pricing. $99 per month. Unlimited responses. No per-review fees.

Can I customize the responses? Totally. You can tweak the voice, approve templates, or just let it run. It's your reputation, you're in charge.

What about angry customers? We don't let the AI freelance on angry rants. Those get flagged straight to you unless you tell us otherwise.

Build Trust Automatically. Respond to every review. Show customers you care. Start today.`,

  seoContent: `Content That Ranks. Content that Google loves and humans actually read. Keywords that rank, copy that converts.

Ever wonder why some content gets high traffic while other pages remain invisible? We create content that search engines favor and your audience actually wants to read. Here is how we make that happen:

Around 2,000 words of genuinely useful content that actually answers what searchers are looking for. No filler. We don't guess at keywords. We dig into ones with real search volume—actual opportunities, not made-up nonsense.

Internal linking that actually makes sense for how your site is structured. Meta titles and descriptions that make people stop scrolling and click.

Headers that sound natural to readers while playing nice with Google at the same time. And honestly? The best part is that it's ready to drop right into WordPress, Wix, Squarespace—whatever platform you're using.

Pricing. $149 per article. Or $499 per month for 4 articles delivered monthly.

How do you pick what to write about? Honestly, we dig into what your competitors are ranking for, check out what questions your customers are asking, and find out what search terms actually get traffic. We run everything by you before we start writing—no surprises.

Do you guarantee first page rankings? Look, no honest person can promise that. Here's what we can guarantee: well-written, properly optimized content. Rankings depend on so many factors though—competition, domain authority, how old your site is, you name it.

Organic Traffic That Actually Converts. A client in the home services space went from 300 monthly visitors to 3,000 in 4 months. The right content, optimized the right way.`,

  blog: `Latest Insights. Stay informed on how artificial intelligence is changing the way we find leads and grow businesses.

2025 State of Marketing Report: The AI Revolution. The marketing landscape is shifting fast. This report from HubSpot explores the trends and tools that define a successful AI-first strategy this year.

Choosing the Best AI Sales Agents for Your Business. Not all chatbots are created equal. We look at the top-performing AI sales agents that actually help businesses book more meetings and close deals.

The Ultimate AI Marketing Strategy Guide. AI can do more than just write emails. It can find your best prospects by analyzing behavior and scoring them for priority. Here is how to use it.

Top AI Lead Generation Software to Watch in 2025. We compared the top lead gen tools on the market. If you want to scale your outreach without increasing your workload, these are the tools you need.

Automating Lead Generation with Intelligent Workflows. Learn how connecting your forms to automation tools can streamline your entire sales process. It is about working smarter, not harder.

How Top Sales Teams are Using AI to Win. Real-world examples of how sales teams are using AI to automate routine work and personalize their outreach at scale.

Ready to Grow Your Business? See how our AI-powered marketing can help you get more leads and make more sales.`
};

console.log('=== AMP AI EXPERTS - AI CONTENT AUDIT ===\n');
console.log('Pages to test:', Object.keys(pages).length);
console.log('Target: ≤4% AI detection score\n');
console.log('Content samples extracted for testing:\n');

Object.entries(pages).forEach(([name, content]) => {
  const wordCount = content.split(/\s+/).length;
  const charCount = content.length;
  console.log(`${name.toUpperCase()}:`);
  console.log(`  - Word count: ${wordCount}`);
  console.log(`  - Character count: ${charCount}`);
  console.log(`  - Status: Ready for testing\n`);
});

console.log('\n=== NEXT STEPS ===');
console.log('1. Navigate to https://www.undetectableai.pro');
console.log('2. Copy each content sample');
console.log('3. Paste into the text box');
console.log('4. Click "Humanize" to get AI score');
console.log('5. Document results in AI_AUDIT_REPORT.md');
console.log('6. Humanize any content scoring >4%');
console.log('7. Re-test until all pages pass');
