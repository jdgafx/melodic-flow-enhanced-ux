import json
import os


def apply_changes():
    report_path = "scripts/aiseo_final_report.json"
    if not os.path.exists(report_path):
        print(f"❌ Report not found: {report_path}")
        return

    with open(report_path, "r", encoding="utf-8") as f:
        report = json.load(f)

    for file_path, data in report.items():
        if not os.path.exists(file_path):
            print(f"  ⚠️ File not found: {file_path}")
            continue

        print(f"📄 Updating {file_path}...")
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        for original, humanized in zip(data["original"], data["humanized"]):
            if original in content:
                content = content.replace(original, humanized)
                print(
                    f"    ✅ Replaced block (Score: {data['scores'][report[file_path]['original'].index(original)]}%)"
                )
            else:
                print(f"    ❌ Could not find original block in file")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)


if __name__ == "__main__":
    apply_changes()
