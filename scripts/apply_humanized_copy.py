#!/usr/bin/env python3
"""
Apply humanized copy from section markdown files back into TSX source files.
Uses content_map.json as the bridge: block IDs → original text + type + file path.
"""

import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPTS = os.path.join(ROOT, "scripts")
SECTIONS = os.path.join(SCRIPTS, "humanized-copy-files")
ZWCHARS = re.compile("[\u200b\u200c\u200d\u200e\u200f\ufeff]")


def clean(text, collapse_newlines=False):
    text = ZWCHARS.sub("", text).strip()
    text = text.replace("&amp;", "&").replace("&gt;", ">").replace("&lt;", "<")
    if collapse_newlines:
        text = re.sub(r"\s*\n\s*", " ", text)
    return text


def parse_marked_blocks(files):
    """Extract [BLOCK-xxx] ... [/BLOCK-xxx] pairs from markdown files."""
    blocks = {}
    for fp in files:
        raw = ZWCHARS.sub("", open(fp, encoding="utf-8").read())
        for m in re.finditer(
            r"\[BLOCK-([\w-]+)\]\s*\([^)]*\)\s*\n([\s\S]*?)\[/BLOCK-\1\]", raw
        ):
            bid = m.group(1)
            txt = m.group(2).strip()
            txt = txt.replace("&amp;", "&").replace("&gt;", ">").replace("&lt;", "<")
            if txt:
                blocks[bid] = txt
    return blocks


def parse_section5():
    """Section 5 (social media) has no BLOCK markers — map by position."""
    fp = os.path.join(SECTIONS, "section5.md")
    if not os.path.exists(fp):
        return {}
    raw = ZWCHARS.sub("", open(fp, encoding="utf-8").read())
    paras = [l.strip() for l in raw.split("\n") if l.strip()]
    paras = [
        p.replace("&amp;", "&").replace("&gt;", ">").replace("&lt;", "<") for p in paras
    ]
    # Strip bullet prefix "- " for bullet-type blocks
    paras = [p[2:] if p.startswith("- ") else p for p in paras]
    blocks = {}
    for i, p in enumerate(paras):
        if i < 22:
            blocks[f"social-media-{i + 1:02d}"] = p
    return blocks


def encode_html_entities(text):
    """Encode apostrophes and quotes as HTML entities (for JSX matching)."""
    return text.replace("'", "&apos;").replace('"', "&quot;")


def esc_js(text):
    """Re-escape text for inside a JS double-quoted string."""
    return text.replace("\\", "\\\\").replace('"', '\\"')


def apply():
    os.chdir(ROOT)

    # Load the content map (original text + type + file for every block)
    cmap = json.load(open(os.path.join(SCRIPTS, "content_map.json"), encoding="utf-8"))

    # Parse humanized text from all section markdown files
    section_files = sorted(
        os.path.join(SECTIONS, f) for f in os.listdir(SECTIONS) if f.endswith(".md")
    )
    hblocks = parse_marked_blocks(section_files)
    hblocks.update(parse_section5())
    print(f"📋 Parsed {len(hblocks)} humanized blocks from section files\n")

    # Build lookup: block_id → (original_text, type, file_path)
    lookup = {}
    for fp, pd in cmap.items():
        for b in pd["blocks"]:
            lookup[b["id"]] = (b["original"], b["type"], fp)

    applied, failed, missing = [], [], []

    # Find blocks with no humanized copy
    for bid in lookup:
        if bid not in hblocks:
            missing.append(bid)

    # Group humanized blocks by target file
    by_file = {}
    for bid, htxt in hblocks.items():
        if bid not in lookup:
            continue
        orig, btype, fp = lookup[bid]
        by_file.setdefault(fp, []).append((bid, htxt, orig, btype))

    # Process each TSX file
    for fp, blocks in sorted(by_file.items()):
        if not os.path.exists(fp):
            for bid, _, _, _ in blocks:
                failed.append((bid, "file not found"))
            continue

        content = open(fp, encoding="utf-8").read()
        changes = 0

        for bid, htxt, orig, btype in blocks:
            collapse = btype in ("data", "bullet", "faq_q", "faq_a", "meta")
            htxt = clean(htxt, collapse_newlines=collapse)

            if collapse:
                search = esc_js(orig)
                repl = esc_js(htxt)
                if search in content:
                    content = content.replace(search, repl, 1)
                    changes += 1
                    applied.append(bid)
                else:
                    search_enc = esc_js(encode_html_entities(orig))
                    repl_enc = esc_js(encode_html_entities(htxt))
                    if search_enc != search and search_enc in content:
                        content = content.replace(search_enc, repl_enc, 1)
                        changes += 1
                        applied.append(bid)
                    else:
                        failed.append((bid, f"string not found in {fp}"))

            elif btype == "jsx":
                if orig in content:
                    content = content.replace(orig, htxt, 1)
                    changes += 1
                    applied.append(bid)
                else:
                    enc = encode_html_entities(orig)
                    if enc != orig and enc in content:
                        content = content.replace(enc, encode_html_entities(htxt), 1)
                        changes += 1
                        applied.append(bid)
                    else:
                        enc2 = orig.replace("&", "&amp;")
                        if enc2 != orig and enc2 in content:
                            content = content.replace(
                                enc2, htxt.replace("&", "&amp;"), 1
                            )
                            changes += 1
                            applied.append(bid)
                        else:
                            enc3 = encode_html_entities(orig).replace("&", "&amp;")
                            if enc3 != orig and enc3 in content:
                                content = content.replace(
                                    enc3,
                                    encode_html_entities(htxt).replace("&", "&amp;"),
                                    1,
                                )
                                changes += 1
                                applied.append(bid)
                            else:
                                failed.append((bid, f"jsx text not found in {fp}"))
            else:
                failed.append((bid, f"unknown type '{btype}'"))

        if changes:
            open(fp, "w", encoding="utf-8").write(content)
            print(f"  ✅ {fp}: {changes} blocks replaced")
        else:
            print(f"  ⚠️  {fp}: 0 changes")

    # ── Summary ──────────────────────────────────────────────
    print(f"\n{'=' * 55}")
    print(f"  ✅ Applied:  {len(applied)} blocks")
    print(f"  ❌ Failed:   {len(failed)} blocks")
    print(f"  ⚠️  Missing:  {len(missing)} blocks (no humanized copy received)")
    print(f"{'=' * 55}")

    if failed:
        print("\n--- FAILED (could not locate original text in TSX) ---")
        for bid, reason in failed:
            print(f"  {bid}: {reason}")

    if missing:
        print("\n--- MISSING HUMANIZED COPY (truncated sections) ---")
        for bid in sorted(missing):
            orig, btype, fp = lookup[bid]
            short = orig[:70].replace("\n", " ")
            print(f"  {bid} ({btype}) → {short}...")

    return len(failed), len(missing)


if __name__ == "__main__":
    f, m = apply()
    sys.exit(1 if f > 0 else 0)
