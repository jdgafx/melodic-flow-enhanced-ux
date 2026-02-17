#!/usr/bin/env python3
"""
ConvertIQ AI Content Detector
A practical detector combining statistical methods with LLM-based evaluation
"""

import re
import numpy as np
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass
from abc import ABC, abstractmethod
import json


@dataclass
class DetectionResult:
    ai_probability: float
    is_ai_generated: bool
    confidence: str
    features: Dict[str, float]
    recommendations: List[str]
    verdict: str


class BaseDetector(ABC):
    @abstractmethod
    def analyze(self, text: str) -> DetectionResult:
        pass


class StatisticalDetector(BaseDetector):
    """
    Statistical detection using perplexity and burstiness heuristics.
    No API needed - pure statistical analysis.
    """

    def __init__(self):
        self.ai_perplexity_threshold = 75
        self.low_burstiness_threshold = 15

    def analyze(self, text: str) -> DetectionResult:
        features = self._extract_features(text)
        ai_prob = self._calculate_ai_probability(features)
        recommendations = self._get_recommendations(features, ai_prob)

        return DetectionResult(
            ai_probability=ai_prob,
            is_ai_generated=ai_prob > 0.5,
            confidence=self._get_confidence(ai_prob),
            features=features,
            recommendations=recommendations,
            verdict="AI Generated" if ai_prob > 0.5 else "Human Written",
        )

    def _extract_features(self, text: str) -> Dict[str, float]:
        """Extract statistical features from text"""
        words = text.split()
        sentences = self._split_sentences(text)

        if not words or not sentences:
            return self._default_features()

        # Sentence-level features
        sentence_lengths = [len(s.split()) for s in sentences]
        avg_sentence_length = np.mean(sentence_lengths)
        sentence_variance = np.var(sentence_lengths)

        # Word-level features
        word_lengths = [len(w) for w in words]
        avg_word_length = np.mean(word_lengths)
        word_variance = np.var(word_lengths)

        # Vocabulary diversity (unique words / total words)
        unique_ratio = len(set(words)) / max(len(words), 1)

        # Contraction ratio
        contractions = self._count_contractions(words)
        contraction_ratio = contractions / max(len(words), 1)

        # Transition word analysis
        transition_count = self._count_transitions(text)
        transition_ratio = transition_count / max(len(sentences), 1)

        # Sentence starter variety
        starters = self._get_sentence_starters(sentences)
        starter_variety = len(set(starters)) / max(len(starters), 1)

        # Paragraph coherence (if multiple paragraphs)
        paragraphs = text.split("\n\n")
        paragraph_lengths = [len(p.split()) for p in paragraphs if p.strip()]
        paragraph_variance = (
            np.var(paragraph_lengths) if len(paragraph_lengths) > 1 else 0
        )

        # AI-like patterns (formulaic language)
        formulaic_count = self._count_formulaic_phrases(text)

        # Burstiness proxy (normalized variance)
        normalized_burstiness = min(sentence_variance / 100, 1.0)

        return {
            "perplexity_proxy": self._estimate_perplexity(text),
            "burstiness": normalized_burstiness * 100,
            "sentence_variance": sentence_variance,
            "avg_sentence_length": avg_sentence_length,
            "word_variance": word_variance,
            "avg_word_length": avg_word_length,
            "vocabulary_diversity": unique_ratio,
            "contraction_ratio": contraction_ratio,
            "transition_ratio": transition_ratio,
            "starter_variety": starter_variety,
            "paragraph_variance": paragraph_variance,
            "formulaic_count": formulaic_count,
            "word_count": len(words),
            "sentence_count": len(sentences),
        }

    def _estimate_perplexity(self, text: str) -> float:
        """
        Estimate perplexity using n-gram probability approximation.
        Lower values = more AI-like (more predictable).
        """
        words = text.split()
        if len(words) < 5:
            return 50.0

        # Calculate bigram probabilities
        bigrams = [(words[i], words[i + 1]) for i in range(len(words) - 1)]
        if not bigrams:
            return 50.0

        # Count unique bigrams vs total (repetition indicator)
        unique_bigrams = len(set(bigrams))
        bigram_ratio = unique_bigrams / len(bigrams)

        # AI text tends to have higher bigram repetition (lower ratio)
        perplexity_estimate = 100 * (1 - bigram_ratio * 0.5)

        return min(max(perplexity_estimate, 20), 150)

    def _calculate_ai_probability(self, features: Dict[str, float]) -> float:
        """Calculate AI probability from extracted features"""
        scores = []
        weights = []

        # Perplexity proxy (lower = more AI)
        ppl = features.get("perplexity_proxy", 50)
        ppl_score = (
            1.0 if ppl < self.ai_perplexity_threshold else max(0, 1 - (ppl - 85) / 50)
        )
        scores.append(ppl_score)
        weights.append(0.25)

        # Burstiness (lower variance = more AI)
        burst = features.get("burstiness", 50)
        burst_score = (
            1.0
            if burst < self.low_burstiness_threshold
            else max(0, 1 - (burst - 20) / 50)
        )
        scores.append(burst_score)
        weights.append(0.20)

        # Vocabulary diversity (lower = more AI)
        vocab = features.get("vocabulary_diversity", 0.5)
        vocab_score = 1.0 - vocab
        scores.append(vocab_score)
        weights.append(0.15)

        # Contraction ratio (lower = more AI)
        contraction = features.get("contraction_ratio", 0.1)
        contraction_score = 1.0 - min(contraction * 10, 1.0)
        scores.append(contraction_score)
        weights.append(0.10)

        # Transition ratio (higher = more formulaic = more AI)
        transition = features.get("transition_ratio", 0.3)
        transition_score = min(transition * 2, 1.0)
        scores.append(transition_score)
        weights.append(0.10)

        # Starter variety (lower = more formulaic = more AI)
        starter = features.get("starter_variety", 0.5)
        starter_score = 1.0 - starter
        scores.append(starter_score)
        weights.append(0.10)

        # Formulaic phrases (higher = more AI)
        formulaic = features.get("formulaic_count", 0)
        formulaic_score = min(formulaic / 5, 1.0)
        scores.append(formulaic_score)
        weights.append(0.10)

        # Weighted combination
        total = sum(s * w for s, w in zip(scores, weights))
        return min(max(total, 0.0), 1.0)

    def _get_recommendations(
        self, features: Dict[str, float], ai_prob: float
    ) -> List[str]:
        """Generate actionable recommendations"""
        recs = []

        if ai_prob > 0.5:
            recs.append("⚠️ Text likely to be flagged as AI-generated")

        if features.get("contraction_ratio", 1) < 0.05:
            recs.append("Add more contractions (don't, can't, it's, we're)")

        if features.get("sentence_variance", 100) < 20:
            recs.append(
                "Vary sentence lengths more dramatically (mix short, medium, long)"
            )

        if features.get("vocabulary_diversity", 1) < 0.6:
            recs.append("Use more varied vocabulary and avoid word repetition")

        if features.get("transition_ratio", 0) > 0.3:
            recs.append(
                "Reduce formulaic transitions (furthermore, moreover, additionally)"
            )

        if features.get("starter_variety", 1) < 0.4:
            recs.append(
                "Vary how sentences start - avoid patterns like 'The', 'This', 'It'"
            )

        if features.get("formulaic_count", 0) > 3:
            recs.append("Remove overly formal or formulaic phrases")

        if not recs:
            recs.append("✅ Text appears human-like with good variety")

        return recs

    def _get_confidence(self, ai_prob: float) -> str:
        if 0.3 < ai_prob < 0.7:
            return "high"
        elif 0.2 < ai_prob < 0.8:
            return "medium"
        else:
            return "low"

    def _default_features(self) -> Dict[str, float]:
        return {
            "perplexity_proxy": 50.0,
            "burstiness": 50.0,
            "sentence_variance": 25.0,
            "avg_sentence_length": 15.0,
            "word_variance": 5.0,
            "avg_word_length": 5.0,
            "vocabulary_diversity": 0.7,
            "contraction_ratio": 0.1,
            "transition_ratio": 0.2,
            "starter_variety": 0.5,
            "paragraph_variance": 100.0,
            "formulaic_count": 1.0,
            "word_count": 50,
            "sentence_count": 3,
        }

    def _split_sentences(self, text: str) -> List[str]:
        """Split text into sentences"""
        sentences = re.split(r"[.!?]+", text)
        return [s.strip() for s in sentences if s.strip()]

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
            "weren't",
            "hasn't",
            "haven't",
            "hadn't",
            "couldn't",
            "wouldn't",
            "shouldn't",
            "isn't",
            "aren't",
            "ain't",
            "i'll",
            "you'll",
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
            "in addition",
            "similarly",
            "likewise",
            "on the other hand",
            "that said",
            "with that said",
            "all things considered",
            "notwithstanding",
        }
        text_lower = text.lower()
        return sum(1 for t in transitions if t in text_lower)

    def _get_sentence_starters(self, sentences: List[str]) -> List[str]:
        """Get first few words of each sentence"""
        starters = []
        for s in sentences:
            words = s.split()
            if words:
                starters.append(words[0].lower())
        return starters

    def _count_formulaic_phrases(self, text: str) -> int:
        """Count AI-typical formulaic phrases"""
        formulaic = [
            "it is important to note that",
            "it is worth noting that",
            "it should be noted that",
            "at the end of the day",
            "all things being equal",
            "last but not least",
            "needless to say",
            "by and large",
            "in the final analysis",
            "due to the fact that",
            "in today's modern world",
            "with the advent of",
            "as technology continues to",
            "there are several ways in which",
            "this essay will discuss",
        ]
        text_lower = text.lower()
        return sum(1 for phrase in formulaic if phrase in text_lower)


class LLMEvaluatorDetector(BaseDetector):
    """
    LLM-based detector that asks an LLM to evaluate if text is AI-generated.
    Requires an API client with chat completion support.
    """

    def __init__(self, api_client=None):
        self.client = api_client

    async def analyze(self, text: str) -> DetectionResult:
        """Async analysis using LLM evaluation"""
        if not self.client:
            # Fallback to statistical if no client
            return StatisticalDetector().analyze(text)

        # Ask LLM to evaluate
        prompt = f"""You are an expert at detecting AI-generated content.

TEXT TO ANALYZE:
---
{text[:3000]}
---

Analyze the writing for AI-generated patterns:
- Sentence structure consistency
- Vocabulary variety and repetition
- Writing style patterns
- Predictability of transitions
- Use of contractions and colloquialisms
- Presence of personal observations/anecdotes
- Overall naturalness of the text

Rate how likely this text is AI-generated on a scale:
- 0.0-0.2: Definitely human-written
- 0.2-0.4: Probably human-written
- 0.4-0.6: Uncertain
- 0.6-0.8: Probably AI-generated
- 0.8-1.0: Definitely AI-generated

Respond with just a single number between 0 and 1."""

        try:
            response = await self.client.complete(prompt=prompt, temperature=0.0)
            ai_prob = self._extract_number(response)
        except Exception:
            # Fallback to statistical
            return StatisticalDetector().analyze(text)

        features = {"llm_verdict": ai_prob}
        recommendations = self._get_recommendations(ai_prob)

        return DetectionResult(
            ai_probability=ai_prob,
            is_ai_generated=ai_prob > 0.5,
            confidence="high" if 0.3 < ai_prob < 0.7 else "medium",
            features=features,
            recommendations=recommendations,
            verdict="AI Generated" if ai_prob > 0.5 else "Human Written",
        )

    def _extract_number(self, response: str) -> float:
        """Extract numeric rating from LLM response"""
        import re

        numbers = re.findall(r"[0-9]*\.?[0-9]+", response)
        if numbers:
            try:
                return float(numbers[0])
            except ValueError:
                return 0.5
        return 0.5

    def _get_recommendations(self, ai_prob: float) -> List[str]:
        if ai_prob < 0.3:
            return ["✅ Likely human-written"]
        elif ai_prob < 0.5:
            return ["Probably human with minor improvements possible"]
        elif ai_prob < 0.7:
            return ["Possibly AI - add more personal touches, vary sentence structure"]
        else:
            return ["Likely AI - significant rewrite needed with human elements"]


class EnsembleDetector(BaseDetector):
    """
    Combines statistical and LLM-based detection for best accuracy.
    """

    def __init__(self, api_client=None):
        self.statistical = StatisticalDetector()
        self.llm = LLMEvaluatorDetector(api_client)

    async def analyze(self, text: str) -> DetectionResult:
        # Get statistical analysis
        stat_result = self.statistical.analyze(text)

        # Try to get LLM analysis
        llm_result = None
        try:
            if self.llm.client:
                llm_result = await self.llm.analyze(text)
        except Exception:
            pass

        # Combine results
        if llm_result:
            # Weighted average
            ai_prob = 0.4 * stat_result.ai_probability + 0.6 * llm_result.ai_probability
            features = {**stat_result.features, **llm_result.features}
            recommendations = list(
                set(stat_result.recommendations + llm_result.recommendations)
            )
        else:
            ai_prob = stat_result.ai_probability
            features = stat_result.features
            recommendations = stat_result.recommendations

        return DetectionResult(
            ai_probability=ai_prob,
            is_ai_generated=ai_prob > 0.5,
            confidence=self._get_confidence(ai_prob, llm_result),
            features=features,
            recommendations=recommendations,
            verdict="AI Generated" if ai_prob > 0.5 else "Human Written",
        )

    def _get_confidence(
        self, ai_prob: float, llm_result: Optional[DetectionResult] = None
    ) -> str:
        if llm_result and llm_result.confidence == "high":
            return "high"
        if 0.35 < ai_prob < 0.65:
            return "high"
        elif 0.25 < ai_prob < 0.75:
            return "medium"
        return "low"


def format_result(result: DetectionResult) -> str:
    """Format detection result for display"""
    emoji = "🤖" if result.is_ai_generated else "👤"

    output = f"""
{emoji} DETECTION RESULT
{"=" * 50}

Verdict: {result.verdict}
AI Probability: {result.ai_probability:.1%}
Confidence: {result.confidence}

Features:
"""
    for key, value in result.features.items():
        if isinstance(value, float):
            output += f"  • {key}: {value:.3f}\n"
        else:
            output += f"  • {key}: {value}\n"

    output += "\nRecommendations:\n"
    for rec in result.recommendations:
        output += f"  • {rec}\n"

    return output


# Convenience function
def detect_ai_content(text: str, use_llm: bool = False) -> DetectionResult:
    """
    Quick detection function.

    Args:
        text: Text to analyze
        use_llm: If True, also use LLM evaluation (requires API client)

    Returns:
        DetectionResult with AI probability and recommendations
    """
    detector = StatisticalDetector()
    result = detector.analyze(text)
    return result


# CLI usage
if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        # Read from file or argument
        if sys.argv[1] == "-f" and len(sys.argv) > 2:
            with open(sys.argv[2], "r") as f:
                text = f.read()
        else:
            text = sys.argv[1]

        result = detect_ai_content(text)
        print(format_result(result))
    else:
        print("Usage: python detectiq_detector.py [-f] <text_or_file>")
        print("\nExample:")
        print('  python detectiq_detector.py "Your text here"')
        print("  python detectiq_detector.py -f sample.txt")
