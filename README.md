# ConvertIQ - AI-Powered Marketing Agency Website

## Overview
A complete, production-ready marketing agency website built with Next.js 16, TypeScript, and Tailwind CSS. Features 10 AI-powered marketing services with competitive pricing and conversion-focused design.

## Features

### Core Pages
- **Homepage**: Hero section, services grid, stats, testimonials, CTA
- **About Page**: Company story, values, case studies, testimonials
- **Contact Page**: Full contact form with FormSubmit integration
- **Pricing Page**: Platform tiers + à la carte service pricing

### Service Pages (10 Total)
1. AI Chatbot Setup - $149/mo + $497 setup
2. AI Voice Receptionist - $249/mo
3. Google Business Optimization - $399 one-time
4. AI Review Response - $99/mo
5. Email Automation - $49/mo + $199 setup
6. Social Media Content - $299/mo
7. AI Ad Copy - $199/mo
8. SEO Content Writing - $149/article
9. Landing Page Creation - $799/page
10. Lead Magnet & Funnel - $1,499 one-time

### Blog (6 Articles)
1. The Complete Guide to AI-Powered Marketing in 2025
2. Chatbot Best Practices for 2025: What Actually Converts
3. Calculate the ROI of AI Voice Receptionists
4. The Ultimate Google Business Optimization Guide
5. Email Automation Strategies That Actually Get Results
6. Social Media Content Strategy for Service Businesses

## Technology Stack
- **Framework**: Next.js 16.1.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **Forms**: FormSubmit.co
- **Fonts**: Poppins + Inter

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name convertiq-com
```

## Environment Variables

For production deployment:
- No environment variables required for basic functionality
- FormSubmit works without backend configuration

## SEO & Analytics

### Metadata
- Open Graph tags for social sharing
- Twitter Card preview
- JSON-LD LocalBusiness schema
- Keywords and descriptions for all pages

### Sitemap
- Auto-generated sitemap.xml at /sitemap.xml
- robots.txt for search engine crawling

## Project Structure

```
convertiq.com/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About page
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── pricing/page.tsx      # Pricing page
│   │   ├── blog/                 # Blog listing + articles
│   │   └── services/             # 10 service pages
│   ├── components/
│   │   └── Layout.tsx            # Navbar + Footer
│   └── lib/
│       └── services.ts           # Service data
├── public/
│   ├── logo.svg                  # Logo
│   ├── favicon.svg               # Favicon
│   ├── og-image.svg              # Social share image
│   ├── robots.txt                # Search engine rules
│   └── sitemap.xml               # Sitemap
└── tailwind.config.ts
```

## Pricing Model

### Platform Tiers (17% annual discount)
- **Starter**: $247/mo (3 services)
- **Professional**: $497/mo (7 services + custom integrations)
- **Enterprise**: $1097/mo (all 10 services + dedicated manager)

### À La Carte
All 10 services available individually at listed prices.

## Deployment

### Netlify (Primary)
```bash
# Build first
npm run build

# Deploy via GitHub (automatic on push to main)
# Or manually via Netlify CLI
npx netlify deploy --prod --dir=out
```

### Cloudflare Pages (Alternative)
```bash
# Build first
npm run build

# Deploy
CLOUDFLARE_API_TOKEN=your_token npx wrangler pages deploy out --project-name convertiq-com
```

### Verification Commands
```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for full DNS, CI/CD, and secrets configuration.

### Preview URL
Latest deployment: https://b4a8688c.convertiq-com.pages.dev

## Contact Information

- **Email**: hello@convertiq.ai
- **Phone**: 617-651-1457
- **Address**: 74 Northeastern Blvd #12a Ste 101, Nashua, NH 03062

## License

This project is owned by ConvertIQ and is available for use.
