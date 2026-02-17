#!/usr/bin/env python3
"""
Ultimate AI Content Detector (MiniMax Version)
Uses an ensemble of:
1. LLM Evaluation (MiniMax)
2. Compression-based Entropy (Zlib)
3. Statistical Stylometry (Sentence variance, Stopwords)
"""

import os
import sys
import json
import zlib
import re
import statistics
import requests
from typing import Dict, List, Optional

DEFAULT_MINIMAX_KEY = "sk-cp-Avxj5o7NA3UDyU-c5pbagf0X9ac_eTRlEAkLxPr1Kc-u2mytyb5CgmL3NaIvboJ6ZWX-8DCChZ9AotiwFDX5bsIyyhDu4K5yeqNBThmdu17C8kr7yRLETlw"
MINIMAX_API_KEY = os.environ.get("MINIMAX_API_KEY", DEFAULT_MINIMAX_KEY)
MINIMAX_API_URL = (
    os.environ.get("MINIMAX_API_HOST", "https://api.minimax.io")
    + "/v1/text/chatcompletion_v2"
)


def calculate_entropy_proxy(text: str) -> float:
    if not text:
        return 0.0
    encoded = text.encode("utf-8")
    compressed = zlib.compress(encoded)
    return len(compressed) / len(encoded)


def calculate_burstiness_proxy(text: str) -> float:
    sentences = re.split(r"[.!?]+", text)
    lengths = [len(s.split()) for s in sentences if s.strip()]
    if len(lengths) < 2:
        return 0.0

    mean = statistics.mean(lengths)
    variance = statistics.variance(lengths)

    return variance / (mean**2) if mean > 0 else 0.0


def calculate_stylometry(text: str) -> Dict[str, float]:
    words = text.lower().split()
    if not words:
        return {}

    contractions = [
        "don't",
        "can't",
        "won't",
        "it's",
        "you're",
        "i'm",
        "we're",
        "they're",
        "isn't",
        "aren't",
    ]
    contraction_count = sum(1 for w in words if any(c in w for c in contractions))
    contraction_ratio = contraction_count / len(words)

    unique_ratio = len(set(words)) / len(words)

    return {"contraction_ratio": contraction_ratio, "unique_ratio": unique_ratio}


def query_minimax(text: str, api_key: str) -> float:
    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"}

    prompt = f"""Analyze this text and rate probability it is AI generated (0.0 = Human, 1.0 = AI).
    
    TEXT: 
    "{text[:3000]}"
    
    Look for:
    1. Perfect grammar but low emotional variance
    2. Repetitive sentence structures
    3. Formulaic transitions (Furthermore, Moreover)
    4. Lack of specific personal details
    
    Return ONLY a JSON object with this format:
    {{"ai_probability": 0.X, "reasoning": "short explanation"}}
    """

    data = {
        "model": "MiniMax-M2.1",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.01,
        "response_format": {"type": "json_object"},
    }

    try:
        response = requests.post(
            MINIMAX_API_URL, headers=headers, json=data, timeout=30
        )
        response.raise_for_status()
        res_json = response.json()

        if "base_resp" in res_json and res_json["base_resp"].get("status_code") != 0:
            print(
                f"MiniMax API Error: {res_json['base_resp'].get('status_msg')}",
                file=sys.stderr,
            )
            return 0.5

        content = res_json["choices"][0]["message"]["content"]
        if "```json" in content:
            content = content.replace("```json", "").replace("```", "")

        parsed = json.loads(content)
        return float(parsed.get("ai_probability", 0.5))
    except Exception as e:
        print(f"MiniMax Exception: {e}", file=sys.stderr)
        return 0.5


class UltimateDetector:
    def __init__(self):
        self.minimax_key = MINIMAX_API_KEY

    def analyze(self, text: str) -> Dict:
        entropy = calculate_entropy_proxy(text)
        burstiness = calculate_burstiness_proxy(text)
        stylo = calculate_stylometry(text)

        stat_score_ai = 0.0
        if entropy < 0.50:
            stat_score_ai += 0.3
        if burstiness < 0.25:
            stat_score_ai += 0.3
        if stylo.get("contraction_ratio", 0) < 0.01:
            stat_score_ai += 0.2
        if stylo.get("unique_ratio", 0) < 0.4:
            stat_score_ai += 0.2

        stat_score = min(stat_score_ai, 1.0)

        llm_score = 0.5
        used_model = "None"

        if self.minimax_key:
            llm_score = query_minimax(text, self.minimax_key)
            used_model = "MiniMax-M2.1"

        final_score = (llm_score * 0.75) + (stat_score * 0.25)

        return {
            "is_ai": final_score > 0.5,
            "score": final_score,
            "verdict": "AI-Generated" if final_score > 0.5 else "Human-Written",
            "components": {
                "llm_judge": llm_score,
                "heuristics": stat_score,
                "entropy_proxy": entropy,
                "burstiness_proxy": burstiness,
                "model_used": used_model,
            },
        }


if __name__ == "__main__":
    if len(sys.argv) > 1:
        if sys.argv[1] == "-f":
            with open(sys.argv[2], "r") as f:
                text_input = f.read()
        else:
            text_input = sys.argv[1]
    else:
        print("Usage: python3 ultimate_detector.py 'Text to analyze'")
        sys.exit(1)

    detector = UltimateDetector()
    result = detector.analyze(text_input)
    print(json.dumps(result, indent=2))
