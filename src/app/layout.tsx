import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

export const metadata: Metadata = {
  title: {
    default: "AMP Marketing | More Leads, Less Busywork",
    template: "%s | AMP Marketing",
  },
  description: "We help businesses get more leads and save time with smart marketing tools. From AI chatbots to ad campaigns, we build systems that work around the clock.",
  keywords: ["marketing agency", "AI marketing", "automated lead generation", "business growth", "AI voice receptionist", "sales automation", "AI chatbot", "sales funnel", "marketing automation", "lead generation"],
  authors: [{ name: "AMP Marketing" }],
  creator: "AMP Marketing",
  publisher: "AMP Marketing",
  metadataBase: new URL("https://convertiq.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://convertiq.com",
    siteName: "AMP Marketing",
    title: "AMP Marketing | Smart Tools That Grow Your Business",
    description: "We help you automate lead capture and sales follow-ups with smart technology that actually works.",
    images: [
      {
        url: "/branding/site3/logo.svg",
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
    images: ["/branding/site3/logo.svg"],
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
    "image": "https://convertiq.com/branding/site3/logo.svg",
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
    "email": "hello@convertiq.com",
    "url": "https://convertiq.com",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon-amp.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-amp.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-amp.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-amp.svg" />
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
