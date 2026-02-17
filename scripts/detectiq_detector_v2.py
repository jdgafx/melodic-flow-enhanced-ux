#!/usr/bin/env python3
"""
ConvertIQ AI Content Detector - Full Implementation
Uses MiniMax M2.1 for LLM-driven detection + statistical methods.
"""

import re
import math
import json
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from collections import Counter
import numpy as np

# MiniMax API integration
MINIMAX_API_URL = "https://api.minimax.chat/v1/text/chatcompletion_v2"

# =============================================================================
# DETECTION RESULT
# =============================================================================


@dataclass
class DetectionResult:
    ai_probability: float
    is_ai_generated: bool
    confidence: str
    verdict: str
    features: Dict[str, float]
    recommendations: List[str]
    method_scores: Dict[str, float] = field(default_factory=dict)
    metadata: Dict[str, any] = field(default_factory=dict)


# =============================================================================
# LLM DETECTOR (MiniMax M2.1)
# =============================================================================


class LLMDetector:
    """LLM-based detection using MiniMax M2.1"""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.api_url = MINIMAX_API_URL

    def detect(self, text: str) -> float:
        """Ask LLM if text is AI-generated"""
        prompt = f"""You are an expert at detecting AI-generated content.

TEXT TO ANALYZE:
---
{text[:3000]}
---

Analyze for AI-generated patterns:
- Sentence structure consistency
- Vocabulary variety and repetition  
- Predictable transitions
- Lack of personal touches
- Formulaic language

Rate how likely this is AI-generated (0.0 = definitely human, 1.0 = definitely AI):

Just respond with a single number between 0 and 1:"""

        response = self._call_minimax(prompt)
        return self._parse_response(response)

    def _call_minimax(self, prompt: str) -> str:
        """Call MiniMax API"""
        import urllib.request
        import json

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}",
        }

        data = {
            "model": "MiniMax-M2.1",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.0,
            "max_tokens": 10,
        }

        try:
            req = urllib.request.Request(
                self.api_url, data=json.dumps(data).encode(), headers=headers
            )
            with urllib.request.urlopen(req, timeout=30) as response:
                result = json.loads(response.read().decode())
                return (
                    result.get("choices", [{}])[0]
                    .get("message", {})
                    .get("content", "0.5")
                )
        except Exception as e:
            print(f"API call failed: {e}")
            return "0.5"

    def _parse_response(self, response: str) -> float:
        """Extract number from LLM response"""
        import re

        numbers = re.findall(r"[0-9]*\.?[0-9]+", response)
        if numbers:
            try:
                return float(numbers[0])
            except:
                return 0.5
        return 0.5


# =============================================================================
# STATISTICAL DETECTOR
# =============================================================================


class StatisticalDetector:
    def __init__(self):
        self.perplexity_threshold = 85
        self.burstiness_threshold = 20

    def detect(self, text: str) -> float:
        features = self.get_features(text)
        return self._calculate_score(features)

    def get_features(self, text: str) -> Dict[str, float]:
        words = text.split()
        sentences = self._split_sentences(text)

        if not words or not sentences:
            return self._default_features()

        perplexity = self._estimate_perplexity(words)
        burstiness = self._calculate_burstiness(sentences)
        vocab_diversity = len(set(words)) / max(len(words), 1)
        contraction_ratio = self._count_contractions(words) / max(len(words), 1)
        transition_ratio = self._count_transitions(text) / max(len(sentences), 1)
        starter_variety = self._get_starter_variety(sentences)
        formulaic_count = self._count_formulaic(text)

        return {
            "perplexity": perplexity,
            "burstiness": burstiness,
            "vocab_diversity": vocab_diversity,
            "contraction_ratio": contraction_ratio,
            "transition_ratio": transition_ratio,
            "starter_variety": starter_variety,
            "formulaic_count": formulaic_count,
            "word_count": len(words),
            "sentence_count": len(sentences),
        }

    def _calculate_score(self, features: Dict[str, float]) -> float:
        scores, weights = [], []

        ppl = features.get("perplexity", 50)
        ppl_score = (
            1.0 if ppl < self.perplexity_threshold else max(0, 1 - (ppl - 85) / 50)
        )
        scores.append(ppl_score)
        weights.append(0.30)

        burst = features.get("burstiness", 50)
        burst_score = (
            1.0 if burst < self.burstiness_threshold else max(0, 1 - (burst - 20) / 50)
        )
        scores.append(burst_score)
        weights.append(0.25)

        vocab = features.get("vocab_diversity", 0.7)
        scores.append(1.0 - vocab)
        weights.append(0.20)

        contraction = features.get("contraction_ratio", 0.1)
        scores.append(1.0 - min(contraction * 10, 1.0))
        weights.append(0.15)

        transition = features.get("transition_ratio", 0.2)
        scores.append(min(transition * 2, 1.0))
        weights.append(0.10)

        return min(max(sum(s * w for s, w in zip(scores, weights)), 0), 1)

    def _estimate_perplexity(self, words: List[str]) -> float:
        if len(words) < 5:
            return 50.0
        bigrams = [(words[i], words[i + 1]) for i in range(len(words) - 1)]
        if not bigrams:
            return 50.0
        bigram_ratio = len(set(bigrams)) / len(bigrams)
        return min(max(100 * (1 - bigram_ratio * 0.5), 20), 150)

    def _calculate_burstiness(self, sentences: List[str]) -> float:
        if len(sentences) < 2:
            return 50.0
        complexities = [len(s) / max(len(s.split()), 1) for s in sentences if s.split()]
        return min(np.var(complexities) / 40 * 100, 100)

    def _split_sentences(self, text: str) -> List[str]:
        return [s.strip() for s in re.split(r"[.!?]+", text) if s.strip()]

    def _count_contractions(self, words: List[str]) -> int:
        contractions = {
            "don't",
            "can't",
            "won't",
            "it's",
            "you're",
            "i'm",
            "we're",
            "they're",
            "didn't",
            "wasn't",
            "hasn't",
            "couldn't",
        }
        return sum(1 for w in words if w.lower() in contractions)

    def _count_transitions(self, text: str) -> int:
        transitions = {
            "furthermore",
            "moreover",
            "additionally",
            "however",
            "therefore",
            "consequently",
            "more specifically",
        }
        return sum(1 for t in transitions if t in text.lower())

    def _get_starter_variety(self, sentences: List[str]) -> float:
        if not sentences:
            return 0.5
        starters = [s.split()[0].lower() for s in sentences if s.split()]
        return len(set(starters)) / max(len(starters), 1)

    def _count_formulaic(self, text: str) -> int:
        formulaic = [
            "it is important to note",
            "furthermore",
            "moreover",
            "additionally",
            "consequently",
            "therefore",
            "in conclusion",
        ]
        return sum(1 for phrase in formulaic if phrase in text.lower())

    def _default_features(self) -> Dict[str, float]:
        return {
            "perplexity": 50.0,
            "burstiness": 50.0,
            "vocab_diversity": 0.7,
            "contraction_ratio": 0.1,
            "transition_ratio": 0.2,
            "starter_variety": 0.5,
            "formulaic_count": 0,
            "word_count": 50,
            "sentence_count": 3,
        }


# =============================================================================
# PATTERN DETECTOR
# =============================================================================


class PatternDetector:
    def detect(self, text: str) -> float:
        features = self.get_features(text)
        return features.get("pattern_score", 0.5)

    def get_features(self, text: str) -> Dict[str, float]:
        # Clean words - remove punctuation
        words = re.findall(r"\b\w+\b", text.lower())

        if len(words) < 10:
            return {"pattern_score": 0.5}

        # N-gram analysis
        bigrams = [" ".join(words[i : i + 2]) for i in range(len(words) - 1)]
        trigrams = [" ".join(words[i : i + 3]) for i in range(len(words) - 2)]

        ngram_repetition = (
            sum(1 for c in Counter(bigrams).values() if c > 1)
            / max(len(set(bigrams)), 1)
            + sum(1 for c in Counter(trigrams).values() if c > 1)
            / max(len(set(trigrams)), 1)
        ) / 2

        unique_ratio = len(set(words)) / max(len(words), 1)

        # Formulaic transition density (strong AI signal)
        transitions = {
            "furthermore",
            "moreover",
            "additionally",
            "however",
            "therefore",
            "consequently",
            "more specifically",
            "in addition",
            "similarly",
            "likewise",
            "in conclusion",
        }
        transition_count = sum(1 for w in words if w in transitions)
        transition_density = transition_count / max(len(words), 1)

        # Sentence starter analysis
        sentences = re.split(r"[.!?]+", text)
        starters = [
            re.findall(r"\b\w+\b", s.lower())[0]
            for s in sentences
            if s.strip() and re.findall(r"\b\w+\b", s.lower())
        ]
        starter_repetition = (
            1.0 - len(set(starters)) / max(len(starters), 1) if starters else 0.5
        )

        # Combined pattern score (higher = more AI)
        pattern_score = (
            ngram_repetition * 0.15
            + (1 - unique_ratio) * 0.20
            + transition_density * 100 * 0.40
            + starter_repetition * 0.25
        )

        return {
            "pattern_score": min(pattern_score, 1.0),
            "ngram_repetition": ngram_repetition,
            "unique_word_ratio": unique_ratio,
            "transition_density": transition_density,
            "starter_repetition": starter_repetition,
        }
        transition_count = sum(1 for w in words if w in transitions)
        transition_density = transition_count / max(len(words), 1)

        # Sentence starter analysis
        sentences = re.split(r"[.!?]+", text)
        starters = [s.split()[0].lower() for s in sentences if s.split()]
        starter_repetition = (
            1.0 - len(set(starters)) / max(len(starters), 1) if starters else 0.5
        )

        # Combined pattern score (higher = more AI)
        pattern_score = (
            ngram_repetition * 0.15
            + (1 - unique_ratio) * 0.20
            + transition_density * 100 * 0.40  # Heavy weight on formulaic transitions
            + starter_repetition * 0.25
        )

        return {
            "pattern_score": min(pattern_score, 1.0),
            "ngram_repetition": ngram_repetition,
            "unique_word_ratio": unique_ratio,
            "transition_density": transition_density,
            "starter_repetition": starter_repetition,
        }


# =============================================================================
# ENSEMBLE DETECTOR
# =============================================================================


class EnsembleDetector:
    def __init__(self, api_key: Optional[str] = None):
        self.stat_detector = StatisticalDetector()
        self.pattern_detector = PatternDetector()
        self.llm_detector = LLMDetector(api_key) if api_key else None

    def detect(self, text: str) -> float:
        features = self.get_features(text)
        return features.get("ensemble_score", 0.5)

    def get_features(self, text: str) -> Dict[str, float]:
        all_features = {}
        method_scores = {}
        weighted_sum = 0
        total_weight = 0

        # Statistical detection
        stat_features = self.stat_detector.get_features(text)
        stat_score = self.stat_detector.detect(text)
        stat_conf = min(stat_features["word_count"] / 100, 1.0)
        method_scores["statistical"] = stat_score
        all_features.update({f"stat_{k}": v for k, v in stat_features.items()})
        weighted_sum += stat_score * stat_conf * 0.30
        total_weight += stat_conf * 0.30

        # Pattern detection
        pattern_features = self.pattern_detector.get_features(text)
        pattern_score = self.pattern_detector.detect(text)
        pattern_conf = min(len(text.split()) / 50, 1.0)
        method_scores["pattern"] = pattern_score
        all_features.update({f"pattern_{k}": v for k, v in pattern_features.items()})
        weighted_sum += pattern_score * pattern_conf * 0.25
        total_weight += pattern_conf * 0.25

        # LLM detection (if available)
        if self.llm_detector:
            try:
                llm_score = self.llm_detector.detect(text)
                method_scores["llm_minimax"] = llm_score
                all_features["llm_score"] = llm_score
                weighted_sum += llm_score * 1.0 * 0.45
                total_weight += 1.0 * 0.45
            except Exception:
                pass

        ensemble_score = weighted_sum / total_weight if total_weight > 0 else 0.5

        all_features["ensemble_score"] = ensemble_score
        all_features["method_scores"] = method_scores
        all_features["confidence"] = min(len(text.split()) / 200, 1.0)

        return all_features


# =============================================================================
# MAIN CLASS
# =============================================================================


class ConvertIQDetector:
    def __init__(self, api_key: Optional[str] = None):
        self.detector = EnsembleDetector(api_key)

    def analyze(self, text: str) -> DetectionResult:
        features = self.detector.get_features(text)
        ai_prob = self.detector.detect(text)
        method_scores = features.get("method_scores", {})

        is_ai = ai_prob > 0.5
        confidence = "high" if features.get("confidence", 0.5) > 0.6 else "medium"
        verdict = "AI Generated" if is_ai else "Human Written"

        recommendations = self._get_recommendations(ai_prob, features)

        return DetectionResult(
            ai_probability=ai_prob,
            is_ai_generated=is_ai,
            confidence=confidence,
            verdict=verdict,
            features=features,
            recommendations=recommendations,
            method_scores=method_scores,
            metadata={"text_length": len(text), "word_count": len(text.split())},
        )

    def _get_recommendations(self, ai_prob: float, features: Dict) -> List[str]:
        recs = []
        if ai_prob > 0.5:
            recs.append("⚠️ Text likely flagged as AI-generated")

        contraction = features.get("stat_contraction_ratio", 0.1)
        if contraction < 0.05:
            recs.append("Add more contractions")

        burst = features.get("stat_burstiness", 50)
        if burst < 30:
            recs.append("Vary sentence lengths")

        vocab = features.get("stat_vocab_diversity", 0.7)
        if vocab < 0.6:
            recs.append("Use more varied vocabulary")

        if not recs:
            recs.append("✅ Text appears human-like")
        return recs


# =============================================================================
# CONVENIENCE
# =============================================================================


def analyze(text: str, api_key: Optional[str] = None) -> DetectionResult:
    detector = ConvertIQDetector(api_key)
    return detector.analyze(text)


def format_result(result: DetectionResult) -> str:
    emoji = "🤖" if result.is_ai_generated else "👤"
    output = f"\n{emoji} RESULT: {result.verdict} ({result.ai_probability:.1%})\n"
    output += f"Confidence: {result.confidence}\n\n"
    output += "Method Scores:\n"
    for method, score in result.method_scores.items():
        output += f"  • {method}: {score:.1%}\n"
    output += "\nRecommendations:\n"
    for rec in result.recommendations:
        output += f"  • {rec}\n"
    return output


# =============================================================================
# CLI
# =============================================================================

if __name__ == "__main__":
    import sys

    # Get API key from environment or args
    api_key = None
    if "MINIMAX_API_KEY" in __import__("os").environ:
        api_key = __import__("os").environ["MINIMAX_API_KEY"]
    elif len(sys.argv) > 1 and sys.argv[1] == "--api" and len(sys.argv) > 2:
        api_key = sys.argv[2]
        sys.argv = sys.argv[2:]

    if len(sys.argv) > 1:
        if sys.argv[1] == "-f":
            with open(sys.argv[2], "r") as f:
                text = f.read()
        else:
            text = " ".join(sys.argv[1:])
    else:
        text = sys.stdin.read()

    if not text.strip():
        print("Usage: python detectiq_detector_v2.py [--api KEY] [-f file] [text]")
        sys.exit(1)

    print("Analyzing...")
    result = analyze(text, api_key)
    print(format_result(result))
