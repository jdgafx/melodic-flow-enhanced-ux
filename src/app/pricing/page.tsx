import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Plans | AI Marketing Tools from $99/mo",
  description: "Transparent pricing for AI chatbots, voice receptionists, email automation, SEO content, and full-service marketing packages. No long-term contracts. 7-day free trial on every plan.",
  keywords: ["marketing automation pricing", "AI chatbot pricing", "lead generation cost", "affordable marketing agency", "AI voice receptionist price", "email automation pricing", "small business marketing plans", "marketing agency monthly plans", "Bing Ads management pricing", "Google Ads management cost", "cheap AI marketing services", "marketing agency pricing plans 2025", "how much does AI marketing cost", "best value marketing agency", "AI chatbot monthly cost"],
  openGraph: {
    title: "AMP Marketing Pricing | Plans Starting at $99/mo",
    description: "AI marketing tools that fit your budget. Starter, Professional, and Enterprise plans with no long-term contracts. Start your 7-day free trial today.",
    url: "https://convertiq.com/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
