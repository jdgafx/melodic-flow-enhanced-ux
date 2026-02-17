import os
import glob
import re
import json

JSX_TEXT_PATTERN = re.compile(r">([^<{]+)<")
METADATA_PATTERN = re.compile(r"export const metadata = \{([\s\S]+?)\};")
STRING_VALUE_PATTERN = re.compile(
    r'(?:title|description|question|answer|name|price|price_string):\s*[\'"](.+?)[\'"]'
)
CODE_STRING_PATTERN = re.compile(r'[\'"]([^"\'\n]{50,})[\'"]')


def get_focus_topic(file_path, content):
    meta_match = METADATA_PATTERN.search(content)
    if meta_match:
        meta_content = meta_match.group(1)
        title_match = re.search(r'title:\s*[\'"](.+?)[\'"]', meta_content)
        if title_match:
            return title_match.group(1).split("|")[0].strip()

    folder = os.path.dirname(file_path).split("/")[-1]
    if folder and folder != "app" and folder != "src":
        return folder.replace("-", " ").title()

    return "Home Page"


def extract_content():
    content_map = {}
    files = glob.glob("src/app/**/page.tsx", recursive=True)
    files.extend(glob.glob("src/components/**/*.tsx", recursive=True))

    print(f"🔍 Found {len(files)} files. Extracting text and determining topics...")

    for file_path in files:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        blocks = set()

        for match in JSX_TEXT_PATTERN.finditer(content):
            text = match.group(1).strip()
            if len(text) > 50:
                blocks.add(text)

        meta_match = METADATA_PATTERN.search(content)
        if meta_match:
            meta_content = meta_match.group(1)
            for val_match in STRING_VALUE_PATTERN.finditer(meta_content):
                val = val_match.group(1).strip()
                if len(val) > 20:
                    blocks.add(val)

        for match in CODE_STRING_PATTERN.finditer(content):
            val = match.group(1).strip()
            if (
                not val.startswith("/")
                and not val.startswith("@")
                and not val.endswith(".svg")
            ):
                blocks.add(val)

        if blocks:
            sorted_blocks = sorted(list(blocks), key=len, reverse=True)
            full_text = "\n\n".join(sorted_blocks)
            topic = get_focus_topic(file_path, content)

            content_map[file_path] = {
                "topic": topic,
                "blocks": sorted_blocks,
                "full_text": full_text,
            }
            print(f"  ✅ {file_path}: Topic '{topic}', {len(blocks)} items")

    with open("scripts/content_map.json", "w", encoding="utf-8") as f:
        json.dump(content_map, f, indent=2)
    print("\n💾 Content map updated in scripts/content_map.json")


if __name__ == "__main__":
    extract_content()
