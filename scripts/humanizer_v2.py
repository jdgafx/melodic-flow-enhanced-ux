#!/usr/bin/env python3
"""
ConvertIQ Content Humanizer - LLM-powered humanization.
Uses MiniMax M2.1 to rewrite AI text to pass detection.
"""

import re
import sys
import random
from typing import List, Dict, Tuple, Optional
from dataclasses import dataclass

# =============================================================================
# HUMANIZER RESULT
# =============================================================================


@dataclass
class HumanizerResult:
    humanized_text: str
    original_ai_probability: float
    final_ai_probability: float
    improvement: float
    iterations: int
    transformations: List[str]


# =============================================================================
# STATIC HUMANIZATION
# =============================================================================

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
}

FORMULAIC_REPLACEMENTS = {
    r"\bit is (important|worth|notable)\b": "Look",
    r"\bit should be noted that\b": "",
    r"\bdue to the fact that\b": "because",
    r"\bin today's (modern )?world\b": "now",
    r"\bwith the advent of\b": "with",
    r"\bmoreover\b": "also",
    r"\bfurthermore\b": "plus",
    r"\badditionally\b": "and",
    r"\bconsequently\b": "so",
    r"\btherefore\b": "so",
    r"\bin conclusion\b": "finally",
}


def static_humanize(text: str) -> Tuple[str, List[str]]:
    """Apply static humanization rules"""
    transformations = []
    result = text

    # Add contractions
    for formal, contracted in CONTRACTIONS.items():
        pattern = r"\b" + re.escape(formal) + r"\b"
        if re.search(pattern, result, re.IGNORECASE):
            result = re.sub(pattern, contracted, result, flags=re.IGNORECASE)
            transformations.append(f"Added contraction: {formal} → {contracted}")

    # Remove formulaic phrases
    for pattern, replacement in FORMULAIC_REPLACEMENTS.items():
        if re.search(pattern, result, re.IGNORECASE):
            result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)
            transformations.append(f"Removed formulaic phrase")

    return result, transformations


def vary_sentences(text: str) -> Tuple[str, List[str]]:
    """Vary sentence lengths"""
    sentences = re.split(r"(?<=[.!?])\s+", text)
    varied = []
    transformations = []

    for i, sent in enumerate(sentences):
        if not sent.strip():
            continue
        words = sent.split()

        # Make every 3rd sentence shorter if long
        if i % 3 == 1 and len(words) > 12:
            if "," in sent:
                new_sent = sent.split(",")[0] + "."
                transformations.append(f"Shortened sentence {i + 1}")
            else:
                new_sent = " ".join(words[: min(8, len(words))]) + "."
                transformations.append(f"Truncated sentence {i + 1}")
            varied.append(new_sent)
        else:
            varied.append(sent)

    return " ".join(varied), transformations


def add_personal_markers(text: str) -> Tuple[str, List[str]]:
    """Add casual personal markers"""
    markers = ["Honestly, ", "Actually, ", "You know, ", "I mean, ", "Well, "]
    sentences = re.split(r"(?<=[.!?])\s+", text)
    result = []
    transformations = []

    for i, sent in enumerate(sentences):
        if not sent.strip():
            continue
        # Add marker to 15% of sentences
        if i > 0 and random.random() < 0.15:
            marker = random.choice(markers)
            if sent[0].isupper():
                sent = sent[0].lower() + sent[1:]
            sent = marker + sent
            transformations.append(f"Added personal marker")
        result.append(sent)

    return " ".join(result), transformations


# =============================================================================
# LLM HUMANIZER
# =============================================================================


class LLMHumanizer:
    """LLM-powered humanization using MiniMax M2.1"""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.api_url = "https://api.minimax.chat/v1/text/chatcompletion_v2"

    def humanize(self, text: str, instructions: str = "") -> str:
        """Use LLM to rewrite text more human-like"""
        prompt = f"""{instructions}

Rewrite this text to sound more naturally human-written:

TEXT:
---
{text}
---

Make it:
- Use contractions naturally
- Vary sentence lengths (mix short and long)
- Add personal touches
- Avoid formulaic transitions like "furthermore", "moreover", "therefore"
- Include casual language
- Sound conversational

Return ONLY the rewritten text, nothing else:"""

        return self._call_minimax(prompt)

    def make_less_ai(self, text: str, problem: str) -> str:
        """Fix specific AI problems"""
        prompt = f"""Fix this text to remove AI-like patterns:

PROBLEM: {problem}

TEXT:
---
{text}
---

Rewrite it to sound more human. Use contractions, vary sentence lengths, 
avoid formulaic language. Return ONLY the rewritten text:"""

        return self._call_minimax(prompt)

    def _call_minimax(self, prompt: str) -> str:
        import urllib.request
        import json

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}",
        }

        data = {
            "model": "MiniMax-M2.1",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.8,
            "max_tokens": 4000,
        }

        try:
            req = urllib.request.Request(
                self.api_url, data=json.dumps(data).encode(), headers=headers
            )
            with urllib.request.urlopen(req, timeout=60) as response:
                result = json.loads(response.read().decode())
                return (
                    result.get("choices", [{}])[0]
                    .get("message", {})
                    .get("content", "")
                    .strip()
                )
        except Exception as e:
            print(f"API call failed: {e}")
            return ""


# =============================================================================
# COMPLETE HUMANIZER
# =============================================================================


class ContentHumanizer:
    """Complete humanization pipeline"""

    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key
        self.llm_humanizer = LLMHumanizer(api_key) if api_key else None

    def humanize(
        self, text: str, max_iterations: int = 3, target_prob: float = 0.45
    ) -> HumanizerResult:
        """Complete humanization workflow"""

        all_transformations = []
        current_text = text
        current_prob = 0.0
        iterations = 0

        # Initial static humanization
        current_text, trans = static_humanize(current_text)
        all_transformations.extend(trans)

        # Iterative improvement
        while iterations < max_iterations:
            iterations += 1
            print(f"\n--- Iteration {iterations}/{max_iterations} ---")

            # Check current status
            current_prob = self._estimate_probability(current_text)
            print(f"Current AI probability: {current_prob:.1%}")

            if current_prob < target_prob:
                print("✅ Target reached!")
                break

            # Apply static transformations
            current_text, trans = vary_sentences(current_text)
            all_transformations.extend(trans)

            current_text, trans = add_personal_markers(current_text)
            all_transformations.extend(trans)

            # Use LLM if available
            if self.llm_humanizer:
                print("Using LLM to improve...")
                if current_prob > 0.6:
                    # Heavy rewriting needed
                    llm_text = self.llm_humanizer.humanize(current_text)
                else:
                    # Subtle improvement
                    llm_text = self.llm_humanizer.make_less_ai(
                        current_text, "Make this sound more conversational and human"
                    )
                if llm_text:
                    current_text = llm_text
                    all_transformations.append("LLM rewrite")

            # Update probability
            current_prob = self._estimate_probability(current_text)

            if not all_transformations[-3:] and not self.llm_humanizer:
                # No more improvements possible
                break

        original_prob = self._estimate_probability(text)

        return HumanizerResult(
            humanized_text=current_text,
            original_ai_probability=original_prob,
            final_ai_probability=current_prob,
            improvement=original_prob - current_prob,
            iterations=iterations,
            transformations=all_transformations,
        )

    def _estimate_probability(self, text: str) -> float:
        """Quick probability estimation using static analysis"""
        words = text.split()
        sentences = re.split(r"[.!?]+", text)

        if not words:
            return 0.5

        # Check contractions
        contractions = sum(1 for w in words if w.lower() in CONTRACTIONS.values())
        contraction_score = 1.0 - min(contractions / max(len(words), 1) * 15, 1.0)

        # Check sentence variety
        sentence_lengths = [len(s.split()) for s in sentences if s.strip()]
        if len(sentence_lengths) > 1:
            variance = np.var(sentence_lengths)
            variety_score = min(variance / 50, 1.0)
        else:
            variety_score = 0.5

        # Check for formulaic phrases
        formulaic_count = 0
        for pattern in FORMULAIC_REPLACEMENTS.keys():
            if re.search(pattern, text, re.IGNORECASE):
                formulaic_count += 1
        formulaic_score = min(formulaic_count / 3, 1.0)

        # Personal markers
        markers = ["honestly", "actually", "you know", "i mean", "well,"]
        marker_count = sum(1 for m in markers if m in text.lower())
        personal_score = min(marker_count / 3, 1.0)

        # Combined score (lower = more human)
        ai_prob = (
            contraction_score * 0.30
            + (1 - variety_score) * 0.25
            + formulaic_score * 0.25
            + (1 - personal_score) * 0.20
        )

        return min(max(ai_prob, 0), 1)


# =============================================================================
# CLI
# =============================================================================


def main():
    import os

    # Get API key
    api_key = os.environ.get("MINIMAX_API_KEY")

    if len(sys.argv) > 1 and sys.argv[1] == "--api" and len(sys.argv) > 2:
        api_key = sys.argv[2]
        sys.argv = sys.argv[2:]

    # Get text
    if len(sys.argv) > 1:
        if sys.argv[1] == "-f" and len(sys.argv) > 2:
            with open(sys.argv[2], "r") as f:
                text = f.read()
        else:
            text = " ".join(sys.argv[1:])
    else:
        text = sys.stdin.read()

    if not text.strip():
        print("Usage: python humanizer_v2.py [--api KEY] [-f file] [text]")
        print("\nEnvironment: export MINIMAX_API_KEY=your_key")
        sys.exit(1)

    print("=" * 60)
    print("CONVERTIQ CONTENT HUMANIZER")
    print("=" * 60)

    humanizer = ContentHumanizer(api_key)
    result = humanizer.humanize(text)

    print("\n" + "=" * 60)
    print("HUMANIZATION RESULT")
    print("=" * 60)
    print(f"Original AI Probability: {result.original_ai_probability:.1%}")
    print(f"Final AI Probability: {result.final_ai_probability:.1%}")
    print(f"Improvement: {result.improvement:.1%}")
    print(f"Iterations: {result.iterations}")

    if result.transformations:
        print(f"\nTransformations: {len(result.transformations)}")
        for t in result.transformations[:10]:
            print(f"  • {t}")
        if len(result.transformations) > 10:
            print(f"  ... and {len(result.transformations) - 10} more")

    print("\n" + "=" * 60)
    print("HUMANIZED TEXT:")
    print("=" * 60)
    print(result.humanized_text)


if __name__ == "__main__":
    main()
