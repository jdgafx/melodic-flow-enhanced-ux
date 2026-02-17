import os
import subprocess
import sys
import json
import time


def run_step(command, description):
    print(f"\n--- 🚀 STEP: {description} ---")
    try:
        subprocess.run(command, shell=True, check=True, text=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during '{description}': {e}")
        return False


def main():
    aiseo_email = os.environ.get("AISEO_EMAIL")
    aiseo_pass = os.environ.get("AISEO_PASSWORD")
    mm_email = os.environ.get("MARKETMUSE_EMAIL")
    mm_pass = os.environ.get("MARKETMUSE_PASSWORD")

    if not all([aiseo_email, aiseo_pass, mm_email, mm_pass]):
        print("⚠️  MISSING CREDENTIALS!")
        print("Please set the following environment variables:")
        print("  export AISEO_EMAIL='...'")
        print("  export AISEO_PASSWORD='...'")
        print("  export MARKETMUSE_EMAIL='...'")
        print("  export MARKETMUSE_PASSWORD='...'")

        if not os.environ.get("CI"):
            print("Running in partial mode (extraction only)...")
        else:
            print("CI detected. Extraction only mode.")

    print("🌟 STARTING FULL SITE HUMANIZATION & SEO AUDIT 🌟")

    if not run_step(
        "python3 scripts/extract_site_content.py", "Extracting Site Content"
    ):
        sys.exit(1)

    if aiseo_email and aiseo_pass:
        if not run_step(f"node scripts/aiseo_bot.js", "Running AISEO Humanizer Bot"):
            print("⚠️ AISEO step failed, skipping to next...")
        else:
            run_step(
                "python3 scripts/apply_humanization.py",
                "Applying Humanized Content to Codebase",
            )
    else:
        print("⏩ Skipping AISEO (No Credentials)")

    if mm_email and mm_pass:
        if not run_step(
            f"node scripts/marketmuse_bot.js", "Running MarketMuse SEO Bot"
        ):
            print("⚠️ MarketMuse step failed.")
    else:
        print("⏩ Skipping MarketMuse (No Credentials)")

    print("\n" + "=" * 40)
    print("✅ MASTER PROCESS COMPLETE")
    print("=" * 40)

    if os.path.exists("scripts/aiseo_final_report.json"):
        print("- AISEO Report: scripts/aiseo_final_report.json")
    if os.path.exists("scripts/marketmuse_final_report.json"):
        print("- MarketMuse Report: scripts/marketmuse_final_report.json")

    print(
        "\nNext steps: git commit -m 'feat: site-wide humanization and SEO optimization' && git push"
    )


if __name__ == "__main__":
    main()
