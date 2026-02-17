import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import { getPosts, urlFor } from '@/sanity/lib/client';
import Image from 'next/image';

const fallbackPosts = [
    {
        title: '2025 State of Marketing Report: The AI Revolution',
        excerpt: 'HubSpot put together their annual marketing report. Lots of data on what tools actually work and which trends are worth paying attention to.',
        category: 'Marketing',
        publishedAt: '2025-01-25',
        readTime: 12,
        slug: { current: '' },
        url: 'https://www.hubspot.com/state-of-marketing'
    },
    {
        title: 'Choosing the Best AI Sales Agents for Your Business',
        excerpt: 'Most chatbots are terrible. These ones are not. A breakdown of which sales agents are actually booking meetings for people.',
        category: 'Technology',
        publishedAt: '2025-01-20',
        readTime: 10,
        slug: { current: '' },
        url: 'https://www.ruh.ai/blogs/best-ai-sales-agents-for-business'
    },
    {
        title: 'The Ultimate AI Marketing Strategy Guide',
        excerpt: 'Goes beyond email writing. Shows you how to find good prospects by looking at what people actually do on your site.',
        category: 'Strategy',
        publishedAt: '2025-01-15',
        readTime: 15,
        slug: { current: '' },
        url: 'https://reply.io/blog/ai-marketing-strategy/'
    },
    {
        title: 'Top AI Lead Generation Software to Watch in 2025',
        excerpt: 'Side-by-side look at the lead gen tools people are talking about. What they cost, what they do, which ones are worth your money.',
        category: 'Tools',
        publishedAt: '2025-01-10',
        readTime: 8,
        slug: { current: '' },
        url: 'https://fr.dorik.com/blog/best-ai-lead-generation-software'
    },
    {
        title: 'Automating Lead Generation with Intelligent Workflows',
        excerpt: 'How to wire up your forms so leads go straight into your CRM and get follow-up emails without you lifting a finger.',
        category: 'Automation',
        publishedAt: '2025-01-05',
        readTime: 9,
        slug: { current: '' },
        url: 'https://heyform.net/blog/the-ultimate-guide-to-heyform-zapier-integration-automate-lead-generation-in-2025/'
    },
    {
        title: 'How Top Sales Teams are Using AI to Win',
        excerpt: 'Stories from actual sales teams who figured out how to spend less time on busywork and more time closing.',
        category: 'Sales',
        publishedAt: '2024-12-28',
        readTime: 7,
        slug: { current: '' },
        url: 'https://www.linkedin.com/pulse/5-ways-top-sales-reps-used-ai-crush-2025-goals-what-you-fairchild-b6nme'
    }
];

const gradients = [
    'bg-gradient-to-br from-blue-500 to-indigo-600',
    'bg-gradient-to-br from-emerald-500 to-teal-600',
    'bg-gradient-to-br from-amber-500 to-orange-600',
    'bg-gradient-to-br from-red-500 to-pink-600',
    'bg-gradient-to-br from-violet-500 to-purple-600',
    'bg-gradient-to-br from-cyan-500 to-blue-600',
];

interface Post {
    _id?: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
    readTime: number;
    slug: { current: string };
    mainImage?: { asset: { _ref: string } };
    url?: string;
}

export default async function BlogPage() {
    let posts: Post[] = [];
    
    try {
        const sanityPosts = await getPosts();
        if (sanityPosts && sanityPosts.length > 0) {
            posts = sanityPosts;
        } else {
            posts = fallbackPosts;
        }
    } catch {
        posts = fallbackPosts;
    }

    return (
        <main className="min-h-screen bg-white font-poppins">
            <Navbar />

            <section className="bg-[#f9f6f3] py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6">What We're Reading</h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed italic">
                        Stuff we found useful about getting more leads and growing your business. No fluff.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, idx) => {
                            const isExternal = 'url' in post && post.url;
                            const href = isExternal ? post.url! : `/blog/${post.slug.current}`;
                            const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
                            
                            return (
                                <Link 
                                    key={post._id || idx} 
                                    href={href}
                                    {...linkProps}
                                    className="flex flex-col group cursor-pointer"
                                >
                                    <div className={`h-48 rounded-lg mb-6 ${post.mainImage ? '' : gradients[idx % gradients.length]} flex items-center justify-center overflow-hidden relative`}>
                                        {post.mainImage ? (
                                            <Image 
                                                src={urlFor(post.mainImage).width(400).height(200).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <span className="text-6xl text-white/30">📄</span>
                                        )}
                                    </div>
                                    <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">{post.category}</div>
                                    <h3 className="text-xl font-extrabold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-gray-400 text-sm">
                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                        <span>{post.readTime} min read</span>
                                    </div>
                                    <div className="mt-4 text-indigo-600 font-bold text-sm uppercase tracking-widest flex items-center">
                                        Read Article <span className="ml-2 text-xl group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Talk Shop?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We help businesses get more leads without all the headaches. Curious if we can help you? Let's chat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors">
                            Book a Free Call
                        </Link>
                        <Link href="/pricing" className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
