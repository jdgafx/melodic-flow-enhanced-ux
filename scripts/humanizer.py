#!/usr/bin/env python3
"""
ConvertIQ Content Humanizer - Humanizes AI content to pass detection.
"""

import re
import sys
import random
from typing import List, Dict, Tuple
from detectiq_detector import StatisticalDetector

# Contraction mappings
CONTRACTIONS = {
    "cannot": "can't",
    "do not": "don't",
    "will not": "won't",
    "it is": "it's",
    "you are": "you're",
    "we are": "we're",
    "they are": "they're",
    "i am": "i'm",
    "has not": "hasn't",
    "have not": "haven't",
    "had not": "hadn't",
    "could not": "couldn't",
    "would not": "wouldn't",
    "should not": "shouldn't",
    "is not": "isn't",
    "are not": "aren't",
}


def add_contractions(text: str) -> str:
    result = text
    for formal, contracted in CONTRACTIONS.items():
        pattern = r"\b" + re.escape(formal) + r"\b"
        result = re.sub(pattern, contracted, result, flags=re.IGNORECASE)
    return result


def remove_formulaic(text: str) -> str:
    replacements = {
        r"\bit is (important|worth|notable)\b": "Look",
        r"\bit should be noted that\b": "",
        r"\bdue to the fact that\b": "because",
        r"\bin today's (modern )?world\b": "now",
        r"\bwith the advent of\b": "with",
        r"\bthere are several ways in which\b": "there are ways",
        r"\bmoreover\b": "also",
        r"\bfurthermore\b": "plus",
        r"\badditionally\b": "and",
        r"\bconsequently\b": "so",
        r"\btherefore\b": "so",
        r"\bin conclusion\b": "finally",
        r"\blast but not least\b": "also",
        r"\bneedless to say\b": "",
        r"\bby and large\b": "generally",
        r"\ball things being equal\b": "",
    }
    result = text
    for pattern, replacement in replacements.items():
        result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)
    return result


def vary_sentences(text: str) -> str:
    sentences = re.split(r"(?<=[.!?])\s+", text)
    varied = []
    for i, sent in enumerate(sentences):
        if not sent.strip():
            continue
        # Every 3rd sentence, try to shorten it
        if i % 3 == 1 and len(sent.split()) > 10:
            if "," in sent:
                sent = sent.split(",")[0] + "."
            elif " and " in sent:
                sent = sent.split(" and ")[0] + "."
        varied.append(sent)
    return " ".join(varied)


def add_personal_touches(text: str) -> str:
    markers = ["Honestly, ", "Actually, ", "You know, ", "I mean, ", "Well, "]
    sentences = re.split(r"(?<=[.!?])\s+", text)
    result = []
    for i, sent in enumerate(sentences):
        if not sent.strip():
            continue
        # Add casual marker to 15% of sentences
        if i > 0 and random.random() < 0.15:
            marker = random.choice(markers)
            if sent[0].isupper():
                sent = sent[0].lower() + sent[1:]
            sent = marker + sent
        result.append(sent)
    return " ".join(result)


def add_surprises(text: str) -> str:
    starters = ["Here's the thing:", "You'd never guess:", "Honestly? I was shocked."]
    sentences = re.split(r"(?<=[.!?])\s+", text)
    if len(sentences) > 2:
        idx = random.randint(1, len(sentences) - 1)
        starter = random.choice(starters)
        sentences[idx] = starter + " " + sentences[idx]
    return " ".join(sentences)


def humanize(text: str, passes: int = 2) -> Tuple[str, List[Dict]]:
    detector = StatisticalDetector()
    history = []

    # Initial check
    initial = detector.analyze(text)
    history.append({"stage": "initial", "prob": initial.ai_probability})

    current = text
    for i in range(passes):
        transforms = [
            add_contractions,
            remove_formulaic,
            vary_sentences,
            add_personal_touches,
            add_surprises,
        ]
        random.shuffle(transforms)

        for t in transforms:
            current = t(current)

        result = detector.analyze(current)
        history.append({"stage": f"pass_{i + 1}", "prob": result.ai_probability})

        if result.ai_probability < 0.45:
            break

    return current, history


def main():
    if len(sys.argv) > 1:
        if sys.argv[1] == "-f" and len(sys.argv) > 2:
            with open(sys.argv[2], "r") as f:
                text = f.read()
        else:
            text = sys.argv[1]
    else:
        text = sys.stdin.read()

    if not text.strip():
        print("Usage: python humanizer.py [-f] <text_or_file>")
        return

    humanized, history = humanize(text)

    print("=" * 50)
    print("HUMANIZATION RESULTS")
    print("=" * 50)

    for h in history:
        emoji = "🤖" if h["prob"] > 0.5 else "👤"
        print(f"{emoji} {h['stage']}: {h['prob']:.1%}")

    print("=" * 50)
    print("HUMANIZED TEXT:")
    print("=" * 50)
    print(humanized)


if __name__ == "__main__":
    main()
