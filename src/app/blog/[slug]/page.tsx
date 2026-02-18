import { Navbar, Footer } from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getPosts, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export async function generateStaticParams() {
    try {
        const posts = await getPosts();
        if (posts && posts.length > 0) {
            return posts.map((post: { slug: { current: string } }) => ({ 
                slug: post.slug.current 
            }));
        }
    } catch (e) {
    }
    return [{ slug: 'placeholder' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const post = await getPost(slug);
        if (!post) return { title: 'Post Not Found' };
        
        return {
            title: `${post.title} | AMP Marketing Blog`,
            description: post.excerpt,
        };
    } catch {
        return { title: 'Post Not Found' };
    }
}

const portableTextComponents = {
    types: {
        image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => (
            <div className="my-8 rounded-lg overflow-hidden">
                <Image
                    src={urlFor(value).width(800).url()}
                    alt={value.alt || 'Blog image'}
                    width={800}
                    height={400}
                    className="w-full"
                />
            </div>
        ),
    },
    block: {
        h2: ({ children }: { children?: React.ReactNode }) => (
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">{children}</h2>
        ),
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>
        ),
        normal: ({ children }: { children?: React.ReactNode }) => (
            <p className="text-gray-300 leading-relaxed mb-6">{children}</p>
        ),
        blockquote: ({ children }: { children?: React.ReactNode }) => (
            <blockquote className="bg-white/5 border-l-4 border-amp-secondary p-6 my-8 rounded-r-lg text-gray-300 backdrop-blur-sm">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: { children?: React.ReactNode }) => (
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">{children}</ul>
        ),
        number: ({ children }: { children?: React.ReactNode }) => (
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-8">{children}</ol>
        ),
    },
    marks: {
        strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
        link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
            <a href={value?.href} className="text-amp-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    let post;
    try {
        post = await getPost(slug);
    } catch {
        notFound();
    }
    
    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-transparent font-poppins text-gray-200">
            <Navbar />
            
            <article>
                <section className="bg-transparent py-20 pt-32">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Link href="/blog" className="text-amp-secondary font-bold text-sm uppercase tracking-widest hover:underline mb-6 inline-block">
                            ← Back to Blog
                        </Link>
                        {post.category && (
                            <div className="text-amp-secondary text-xs font-bold uppercase tracking-widest mb-4">
                                {post.category.title || post.category}
                            </div>
                        )}
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{post.title}</h1>
                        <div className="flex items-center gap-6 text-gray-400 text-sm">
                            {post.publishedAt && (
                                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                            )}
                            {post.readTime && <span>{post.readTime} min read</span>}
                            {post.author && <span>{post.author.name}</span>}
                        </div>
                    </div>
                </section>

                {post.mainImage && (
                    <section className="py-8">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                                    alt={post.title}
                                    width={1200}
                                    height={600}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </section>
                )}

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="prose prose-lg prose-invert max-w-none">
                            {post.excerpt && (
                                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
                                    {post.excerpt}
                                </p>
                            )}
                            {post.body && (
                                <PortableText value={post.body} components={portableTextComponents} />
                            )}
                        </div>
                    </div>
                </section>
            </article>

            <section className="bg-gradient-to-r from-amp-primary to-amp-accent py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-6">Ready to get results?</h2>
                    <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
                        Let's help you implement AI-powered marketing that actually works.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-amp-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        Book a Free Call
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
