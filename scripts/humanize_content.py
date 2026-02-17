import os
import requests
import json
import glob
import re
import time

AISEO_API_KEY = os.environ.get("AISEO_API_KEY")
AISEO_BASE_URL = "https://api.aiseo.ai/api/v1"
TARGET_SCORE = 96
MAX_RETRIES = 3

JSX_TEXT_PATTERN = re.compile(r">([^<]+)<")


def get_files_to_process():
    return glob.glob("src/app/**/page.tsx", recursive=True)


def humanize_iteration(text, attempt=1):
    if not AISEO_API_KEY:
        return None, 0, "No API Key"

    mode = "balanced" if attempt == 1 else "aggressive"

    try:
        payload = {"text": text, "mode": mode, "style": "standard"}
        headers = {
            "Authorization": f"Bearer {AISEO_API_KEY}",
            "Content-Type": "application/json",
        }

        resp = requests.post(
            f"{AISEO_BASE_URL}/humanize", json=payload, headers=headers
        )

        if resp.status_code == 200:
            data = resp.json()
            output_text = data.get("data", {}).get("outputText", text)
            human_score = data.get("data", {}).get("humanScore", 0)
            return output_text, human_score, None
        else:
            return text, 0, f"API Error {resp.status_code}"

    except Exception as e:
        return text, 0, str(e)


def iterate_until_human(text):
    current_text = text
    best_score = 0

    for i in range(MAX_RETRIES):
        print(f"    Pass {i + 1}...", end=" ", flush=True)
        new_text, score, err = humanize_iteration(current_text, attempt=i + 1)

        if err:
            print(f"Error: {err}")
            return current_text, best_score

        print(f"Score: {score}%")

        if score > best_score:
            best_score = score
            current_text = new_text

        if score >= TARGET_SCORE:
            print(f"    ✨ Target reached!")
            break

        time.sleep(1)

    return current_text, best_score


def process_file(file_path):
    print(f"📄 Processing {file_path}...")

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    matches = []
    for match in JSX_TEXT_PATTERN.finditer(content):
        text = match.group(1).strip()
        if len(text) > 50 and not text.startswith("{"):
            matches.append(text)

    updates = {}

    for original_text in matches:
        print(f"  📝 Humanizing block ({len(original_text)} chars)...")
        final_text, final_score = iterate_until_human(original_text)

        if final_text != original_text:
            updates[original_text] = final_text

    if updates:
        output_file = file_path + ".humanized.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(updates, f, indent=2)
        print(f"  💾 Saved {len(updates)} suggestions to {output_file}")
    else:
        print("  ✨ No updates needed.")


if __name__ == "__main__":
    if not AISEO_API_KEY:
        print("⚠️  AISEO_API_KEY not set. Using mock mode.")

    files = get_files_to_process()
    for file_path in files:
        process_file(file_path)
