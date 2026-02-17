#!/usr/bin/env python3
"""
Analyze all website pages for AI content - Improved version
"""

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from detectiq_detector_v2 import ConvertIQDetector


def extract_text_from_page_v2(content: str) -> str:
    """Extract readable text from a Next.js page.tsx file"""
    # Remove imports
    content = re.sub(r'import\s+.*?from\s+["\'][^"\']*["\']', " ", content)

    # Remove exports
    content = re.sub(r"export\s+default\s+function\s+\w+", " ", content)
    content = re.sub(r"export\s+const\s+\w+\s*=", " ", content)
    content = re.sub(r"export\s+\{[^}]*\}", " ", content)

    # Remove JSX props and className attributes
    content = re.sub(r'className\s*=\s*["\'][^"\']*["\']', " ", content)
    content = re.sub(r'href\s*=\s*["\'][^"\']*["\']', " ", content)
    content = re.sub(r'src\s*=\s*["\'][^"\']*["\']', " ", content)
    content = re.sub(r'alt\s*=\s*["\'][^"\']*["\']', " ", content)

    # Remove component tags
    content = re.sub(r"<\/?[A-Z][a-zA-Z0-9]*[^>]*>", " ", content)
    content = re.sub(r"<\/?[A-Z][a-zA-Z0-9]*\s*[^>]*\/?>", " ", content)

    # Remove JS expressions
    content = re.sub(r"\{[^}]*\}", " ", content)

    # Extract text from strings (content inside quotes)
    # Double-quoted strings
    strings1 = re.findall(r'"([^"]{20,})"', content)
    # Single-quoted strings
    strings2 = re.findall(r"'([^']{20,})'", content)

    # Combine all strings
    all_strings = strings1 + strings2

    # Clean up each string
    cleaned_strings = []
    for s in all_strings:
        # Remove escape sequences
        s = re.sub(r"\\.", " ", s)
        # Remove remaining special chars but keep readable text
        s = re.sub(r'[^\w\s.,!?\'"-]', " ", s)
        s = re.sub(r"\s+", " ", s).strip()
        if len(s) > 15:  # Only keep meaningful strings
            cleaned_strings.append(s)

    return " ".join(cleaned_strings)


def analyze_page(path: str) -> dict:
    """Analyze a single page"""
    with open(path, "r") as f:
        content = f.read()

    text = extract_text_from_page_v2(content)

    # Get page name
    parts = path.split("/")
    if "services" in path:
        page_name = parts[-2]
    else:
        page_name = parts[-1].replace(".tsx", "")

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
        emoji = "🤖" if result["ai_probability"] > 0.5 else "👤"
        print(f"{emoji} {result['page']}")
        print(f"   AI Probability: {result['ai_probability']:.1%}")
        print(f"   Verdict: {result['verdict']}")
        print(f"   Word Count: {result['word_count']}")
        if result["method_scores"]:
            print(f"   Scores: ", end="")
            scores_str = ", ".join(
                [f"{k[:6]}={v:.0%}" for k, v in result["method_scores"].items()]
            )
            print(scores_str)
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

avg_ai = sum(r["ai_probability"] for r in results) / len(results)

print(f"Total Pages: {len(results)}")
print(f"🤖 AI-Flagged: {len(ai_pages)} ({len(ai_pages) / len(results) * 100:.0f}%)")
print(
    f"👤 Human-Like: {len(human_pages)} ({len(human_pages) / len(results) * 100:.0f}%)"
)
print(f"Average AI Probability: {avg_ai:.1%}")
print()

print("Pages Flagged as AI (need review):")
for r in sorted(ai_pages, key=lambda x: -x["ai_probability"]):
    print(f"  ⚠️  {r['page']}: {r['ai_probability']:.1%}")

print()
print("Pages Passing as Human-Like:")
for r in sorted(human_pages, key=lambda x: x["ai_probability"]):
    print(f"  ✅ {r['page']}: {r['ai_probability']:.1%}")
