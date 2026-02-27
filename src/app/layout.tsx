import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AMP Marketing | More Leads, Less Busywork",
    template: "%s | AMP Marketing",
  },
  description: "We help businesses get more leads and save time with smart marketing tools. From AI chatbots to ad campaigns, we build systems that work around the clock.",
  keywords: ["AI marketing agency", "automated lead generation", "AI chatbot for business", "AI voice receptionist", "marketing automation", "lead generation agency", "sales automation tools", "small business marketing", "AI marketing agency Nashua NH", "Bing Ads agency", "Bing Ads management", "Google Ads agency", "Google Ads management", "lead generation services near me", "appointment booking AI", "AI lead capture", "business growth tools", "marketing agency New Hampshire", "digital marketing automation", "AI sales funnel", "PPC management agency", "local SEO services Nashua"],
  authors: [{ name: "AMP Marketing" }],
  creator: "AMP Marketing",
  publisher: "AMP Marketing",
  metadataBase: new URL("https://melodic-flow-enhanced-ux.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://melodic-flow-enhanced-ux.netlify.app",
    siteName: "AMP Marketing",
    title: "AMP Marketing | Smart Tools That Grow Your Business",
    description: "We help you automate lead capture and sales follow-ups with smart technology that actually works.",
    images: [
      {
        url: "/logo-amp-marketing.svg",
        width: 1200,
        height: 630,
        alt: "AMP Marketing - Solutions That Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMP Marketing | Smart Tools That Grow Your Business",
    description: "We help you automate lead capture and sales follow-ups with smart technology that actually works.",
    images: ["/logo-amp-marketing.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AMP Marketing",
    "image": "https://melodic-flow-enhanced-ux.netlify.app/logo-amp-marketing.svg",
    "description": "We help businesses get more leads and save time with smart marketing tools that work around the clock.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "74 Northeastern Blvd #12a Ste 101",
      "addressLocality": "Nashua",
      "addressRegion": "NH",
      "postalCode": "03062",
      "addressCountry": "US",
    },
    "telephone": "+1-617-651-1457",
    "email": "hello@ampmarketing.io",
    "url": "https://melodic-flow-enhanced-ux.netlify.app",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
    "sameAs": [
      "https://www.facebook.com/ampmarketing",
      "https://www.twitter.com/ampmarketing",
      "https://www.linkedin.com/company/ampmarketing",
    ],
    "areaServed": {
      "@type": "Place",
      "name": "United States",
    },
    "serviceType": "Marketing Solutions Provider",
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="US-NH" />
        <meta name="geo.placename" content="Nashua" />
        <meta name="geo.position" content="42.7654;-71.4676" />
        <meta name="ICBM" content="42.7654, -71.4676" />
        <link rel="icon" href="/favicon-amp.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-amp.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-amp.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-amp.svg" />
        {/* Google Analytics - uncomment and replace ID when tracking ID is available
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="antialiased">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
