import os
import requests
import json
import sys
from bs4 import BeautifulSoup

AISEO_API_KEY = os.environ.get("AISEO_API_KEY")
AISEO_BASE_URL = "https://api.aiseo.ai/api/v1"

PAGES = [
    "/pricing",
    "/services/ai-chatbot",
    "/services/ai-voice",
]


def check_no_hidden_fees(text):
    if "No Hidden Fees" in text:
        return True, "✅ Found 'No Hidden Fees'"
    if "No BS" in text:
        return False, "❌ Found 'No BS' (Profanity)"
    return False, "❌ 'No Hidden Fees' not found"


def aiseo_humanize_check(text):
    if not AISEO_API_KEY:
        return None, "⚠️ No AISEO API Key provided"

    try:
        payload = {"text": text[:500], "mode": "balanced"}
        headers = {
            "Authorization": f"Bearer {AISEO_API_KEY}",
            "Content-Type": "application/json",
        }
        response = requests.post(
            f"{AISEO_BASE_URL}/humanize", json=payload, headers=headers
        )

        if response.status_code == 200:
            data = response.json()
            trace_id = data.get("data", {}).get("trace_id", "N/A")
            return True, f"✅ AISEO API Connection Successful (Trace: {trace_id})"
        else:
            return (
                False,
                f"❌ AISEO API Error: {response.status_code} - {response.text}",
            )

    except Exception as e:
        return False, f"❌ AISEO Exception: {str(e)}"


def run_audit(base_url):
    print(f"🚀 Starting Audit for {base_url}...")

    for page in PAGES:
        url = f"{base_url.rstrip('/')}{page}"
        print(f"\nChecking {url}...")

        try:
            resp = requests.get(url, timeout=10)
            if resp.status_code != 200:
                print(f"  ❌ Failed to fetch (Status {resp.status_code})")
                continue

            soup = BeautifulSoup(resp.text, "html.parser")
            text = soup.get_text()

            pass_content, msg_content = check_no_hidden_fees(text)
            print(f"  {msg_content}")

            pass_api, msg_api = aiseo_humanize_check(text)
            print(f"  {msg_api}")

        except Exception as e:
            print(f"  ❌ Error: {str(e)}")


if __name__ == "__main__":
    urls = (
        sys.argv[1:]
        if len(sys.argv) > 1
        else [
            "https://melodic-travesseiro-f5ef27.netlify.app",
            "https://convertiq.pages.dev",
        ]
    )

    if not AISEO_API_KEY:
        print("⚠️  WARNING: AISEO_API_KEY environment variable not set.")
        print("    Programmatic validation will skip API calls.\n")

    for url in urls:
        run_audit(url)
