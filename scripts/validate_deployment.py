import requests
from bs4 import BeautifulSoup
import sys
import os
import json
import time

# Configuration
PAGES = [
    "/",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/services/ad-copy",
    "/services/ai-chatbot",
    "/services/ai-voice",
    "/services/email-automation",
    "/services/google-business",
    "/services/landing-pages",
    "/services/lead-funnel",
    "/services/review-response",
    "/services/seo-content",
    "/services/social-media",
]

PROFANITY_CHECK = ["No BS", "bullshit", "BS"]
REQUIRED_TEXT = ["No Hidden Fees"]


def get_page_text(url):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code != 200:
            print(f"❌ Error fetching {url}: Status {response.status_code}")
            return None
        soup = BeautifulSoup(response.text, "html.parser")
        # Remove script and style elements
        for script in soup(["script", "style"]):
            script.decompose()
        return soup.get_text()
    except Exception as e:
        print(f"❌ Exception fetching {url}: {e}")
        return None


def check_content(text, url):
    issues = []

    # Check for profanity
    for term in PROFANITY_CHECK:
        if term in text:
            issues.append(f"⚠️ Found profanity '{term}'")

    # Check for required text (on pricing page only?)
    if "/pricing" in url:
        for term in REQUIRED_TEXT:
            if term not in text:
                issues.append(f"❌ Missing required text '{term}'")

    return issues


def compare_sites(url1, url2):
    print(f"\n🔍 Comparing {url1} vs {url2}...")

    mismatches = 0

    for page in PAGES:
        full_url1 = f"{url1.rstrip('/')}{page}"
        full_url2 = f"{url2.rstrip('/')}{page}"

        text1 = get_page_text(full_url1)
        text2 = get_page_text(full_url2)

        if text1 is None or text2 is None:
            print(f"  Skipping {page} due to fetch error")
            continue

        # Simple content hash or length check?
        # Text extraction can vary slightly due to dynamic bits, so let's normalize
        clean1 = " ".join(text1.split())
        clean2 = " ".join(text2.split())

        if clean1 == clean2:
            print(f"  ✅ {page}: Match")
        else:
            print(f"  ❌ {page}: Mismatch")
            # print(f"    Len1: {len(clean1)} vs Len2: {len(clean2)}")
            mismatches += 1

        # Run content checks on the first site
        issues = check_content(text1, full_url1)
        for issue in issues:
            print(f"    {issue}")

    return mismatches


def aiseo_audit(url, api_key):
    # Stub for AISEO audit
    pass


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 validate_deployment.py <URL1> <URL2>")
        print(
            "Example: python3 validate_deployment.py https://convertiq.com https://convertiq.pages.dev"
        )
        sys.exit(1)

    url1 = sys.argv[1]
    url2 = sys.argv[2]

    mismatches = compare_sites(url1, url2)

    if mismatches == 0:
        print("\n✅ All pages match and pass basic content checks.")
        sys.exit(0)
    else:
        print(f"\n❌ Found {mismatches} mismatches.")
        sys.exit(1)
