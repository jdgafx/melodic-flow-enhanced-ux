#!/usr/bin/env python3
"""
Analyze all website pages for AI content
"""

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from detectiq_detector_v2 import ConvertIQDetector


def extract_text_from_page(content: str) -> str:
    """Extract readable text from a Next.js page.tsx file"""
    # Remove JSX tags and component syntax
    text = re.sub(r"\{[^}]*\}", " ", content)  # Remove JS expressions
    text = re.sub(r"<[^>]+>", " ", text)  # Remove JSX tags
    text = re.sub(r'import\s+.*?from\s+["\'].*?["\']', " ", text)  # Remove imports
    text = re.sub(r"export\s+const\s+\w+\s*=", " ", text)  # Remove exports
    text = re.sub(r"export\s+default\s+function\s+\w+", " ", text)
    text = re.sub(r"=\s*\{", " ", text)
    text = re.sub(r"\}\s*;", " ", text)

    # Clean up whitespace
    text = re.sub(r"\s+", " ", text)

    # Extract strings (content between quotes)
    strings = re.findall(r'"[^"]*"', text)
    strings.extend(re.findall(r"'[^']*'", text))

    # Combine and clean
    combined = " ".join(strings)
    combined = re.sub(r"\\n", " ", combined)
    combined = re.sub(r"\\t", " ", combined)
    combined = re.sub(r"\s+", " ", combined)
    combined = combined.strip()

    return combined


def analyze_page(path: str) -> dict:
    """Analyze a single page"""
    with open(path, "r") as f:
        content = f.read()

    text = extract_text_from_page(content)

    # Get page name
    page_name = (
        path.split("/")[-2]
        if "/services/" in path
        else path.split("/")[-1].replace(".tsx", "")
    )

    detector = ConvertIQDetector()
    result = detector.analyze(text)

    return {
        "page": page_name,
        "path": path,
        "ai_probability": result.ai_probability,
        "verdict": result.verdict,
        "confidence": result.confidence,
        "method_scores": result.method_scores,
        "word_count": len(text.split()),
        "recommendations": result.recommendations[:3],
    }


# Pages to analyze
pages = [
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/lead-funnel/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/ai-chatbot/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/ai-voice/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/google-business/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/review-response/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/email-automation/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/social-media/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/ad-copy/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/seo-content/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/services/landing-pages/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/about/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/contact/page.tsx",
    "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/src/app/pricing/page.tsx",
]

print("=" * 70)
print("CONVERTIQ WEBSITE - AI CONTENT DETECTION ANALYSIS")
print("=" * 70)
print()

results = []
for page_path in pages:
    try:
        result = analyze_page(page_path)
        results.append(result)
        print(f"📄 {result['page']}")
        print(f"   AI Probability: {result['ai_probability']:.1%}")
        print(f"   Verdict: {result['verdict']}")
        print(f"   Word Count: {result['word_count']}")
        print(
            f"   Scores: Statistical={result['method_scores'].get('statistical', 'N/A'):.1%}, Pattern={result['method_scores'].get('pattern', 'N/A'):.1%}"
        )
        if result["recommendations"]:
            print(f"   Tips: {result['recommendations'][0][:60]}...")
        print()
    except Exception as e:
        print(f"❌ {page_path}: {e}")
        print()

# Summary
print("=" * 70)
print("SUMMARY")
print("=" * 70)

ai_pages = [r for r in results if r["ai_probability"] > 0.5]
human_pages = [r for r in results if r["ai_probability"] <= 0.5]

print(f"Total Pages: {len(results)}")
print(f"🤖 AI-Flagged: {len(ai_pages)} ({len(ai_pages) / len(results) * 100:.0f}%)")
print(
    f"👤 Human-Like: {len(human_pages)} ({len(human_pages) / len(results) * 100:.0f}%)"
)
print()

print("Highest AI Probability:")
for r in sorted(results, key=lambda x: -x["ai_probability"])[:5]:
    emoji = "🤖" if r["ai_probability"] > 0.5 else "👤"
    print(f"  {emoji} {r['page']}: {r['ai_probability']:.1%}")

print()
print("Lowest AI Probability (Most Human-Like):")
for r in sorted(results, key=lambda x: x["ai_probability"])[:5]:
    emoji = "🤖" if r["ai_probability"] > 0.5 else "👤"
    print(f"  {emoji} {r['page']}: {r['ai_probability']:.1%}")
