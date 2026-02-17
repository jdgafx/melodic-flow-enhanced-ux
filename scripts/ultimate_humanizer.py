#!/usr/bin/env python3
"""
Ultimate AI Content Humanizer (MiniMax Version)
Iterative, adversarial humanization using MiniMax models.
"""

import os
import sys
import json
import requests
import time
from typing import Dict, List, Optional
from ultimate_detector import UltimateDetector

DEFAULT_MINIMAX_KEY = "sk-cp-Avxj5o7NA3UDyU-c5pbagf0X9ac_eTRlEAkLxPr1Kc-u2mytyb5CgmL3NaIvboJ6ZWX-8DCChZ9AotiwFDX5bsIyyhDu4K5yeqNBThmdu17C8kr7yRLETlw"
MINIMAX_API_KEY = os.environ.get("MINIMAX_API_KEY", DEFAULT_MINIMAX_KEY)
MINIMAX_API_URL = (
    os.environ.get("MINIMAX_API_HOST", "https://api.minimax.io")
    + "/v1/text/chatcompletion_v2"
)


def humanize_minimax(
    text: str, instructions: str, api_key: str, temp: float = 0.8
) -> str:
    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"}

    prompt = f"""
    ROLE: Professional Human Copywriter.
    TASK: Rewrite this text to sound completely natural and human.
    INSTRUCTIONS: {instructions}
    
    RULES:
    1. VARY SENTENCE LENGTHS: Mix short punchy sentences with longer ones.
    2. USE CONTRACTIONS: "don't", "can't", "it's" (Mandatory).
    3. REMOVE ROBOTIC TRANSITIONS: Delete "Furthermore", "In conclusion".
    4. ADD PERSONALITY: Use casual phrasing like "Honestly,", "You know,".
    5. BE IMPERFECT: A little conversational roughness is good.
    
    TEXT TO REWRITE:
    "{text}"
    
    Return ONLY the rewritten text.
    """

    data = {
        "model": "MiniMax-M2.1",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": temp,
    }

    try:
        response = requests.post(
            MINIMAX_API_URL, headers=headers, json=data, timeout=30
        )
        response.raise_for_status()
        res_json = response.json()

        if "base_resp" in res_json and res_json["base_resp"].get("status_code") != 0:
            print(f"MiniMax API Error: {res_json['base_resp'].get('status_msg')}")
            return text

        return res_json["choices"][0]["message"]["content"].strip()
    except Exception as e:
        print(f"MiniMax Rewrite Error: {e}")
        return text


class UltimateHumanizer:
    def __init__(self):
        self.detector = UltimateDetector()
        self.minimax_key = MINIMAX_API_KEY

    def process(
        self, text: str, max_iterations: int = 3, target_score: float = 0.20
    ) -> Dict:
        current_text = text
        history = []

        print(f"Starting humanization (Target Score: < {target_score})")

        for i in range(max_iterations):
            print(f"\n--- Iteration {i + 1} ---")

            detection = self.detector.analyze(current_text)
            score = detection["score"]
            print(f"Current Score: {score:.2f} ({detection['verdict']})")

            history.append({"iteration": i, "score": score, "text": current_text})

            if score < target_score:
                print("✅ Target reached!")
                return {"final_text": current_text, "success": True, "history": history}

            instructions = ""
            temp = 0.8
            if score > 0.8:
                instructions = "Aggressive rewrite. Change structure completely. Use metaphors and anecdotes."
                temp = 1.0
            elif score > 0.5:
                instructions = "Make it more conversational. Use contractions and vary sentence length."
                temp = 0.85
            else:
                instructions = "Polish it. Make it sound a bit more casual."
                temp = 0.7

            print(f"Rewriting with temperature {temp}...")
            if self.minimax_key:
                current_text = humanize_minimax(
                    current_text, instructions, self.minimax_key, temp
                )
            else:
                print("No API Key available for rewriting.")
                break

        final_detection = self.detector.analyze(current_text)
        print(f"\nFinal Score: {final_detection['score']:.2f}")

        return {
            "final_text": current_text,
            "final_score": final_detection["score"],
            "success": final_detection["score"] < target_score,
            "history": history,
        }


if __name__ == "__main__":
    if len(sys.argv) > 1:
        if sys.argv[1] == "-f":
            with open(sys.argv[2], "r") as f:
                text_input = f.read()
        else:
            text_input = sys.argv[1]
    else:
        print("Usage: python3 ultimate_humanizer.py 'Text to humanize'")
        sys.exit(1)

    humanizer = UltimateHumanizer()
    result = humanizer.process(text_input)

    print("\n" + "=" * 50)
    print("FINAL HUMANIZED TEXT:")
    print("=" * 50)
    print(result["final_text"])
