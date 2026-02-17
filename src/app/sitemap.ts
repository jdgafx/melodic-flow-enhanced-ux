import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://convertiq.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/contact',
    '/services/ad-copy',
    '/services/ai-chatbot',
    '/services/ai-voice',
    '/services/email-automation',
    '/services/google-business',
    '/services/landing-pages',
    '/services/lead-funnel',
    '/services/review-response',
    '/services/seo-content',
    '/services/social-media',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
