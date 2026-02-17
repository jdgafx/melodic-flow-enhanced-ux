#!/usr/bin/env python3
"""
Test suite for ConvertIQ AI Detector
Run with: python test_detector.py
"""

import sys

sys.path.insert(0, "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/scripts")

from detectiq_detector import detect_ai_content, StatisticalDetector


def test_ai_generated_text():
    """Test that AI-like text gets high AI probability"""
    detector = StatisticalDetector()

    # Typical AI-generated text (formulaic, consistent)
    ai_text = """
    It is important to note that artificial intelligence has revolutionized numerous industries.
    Furthermore, machine learning algorithms have enabled significant advances in data processing.
    Additionally, natural language processing has improved human-computer interaction.
    Moreover, deep learning models have demonstrated remarkable capabilities in image recognition.
    Consequently, businesses have adopted AI solutions to enhance operational efficiency.
    Therefore, the adoption of AI technology continues to grow exponentially.
    """

    result = detector.analyze(ai_text)

    print(f"AI Text Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Verdict: {result.verdict}")
    print(f"  Confidence: {result.confidence}")
    assert result.ai_probability > 0.5, (
        f"Expected AI probability > 0.5, got {result.ai_probability}"
    )
    print("  ✅ PASSED\n")


def test_human_written_text():
    """Test that human-like text gets relatively low AI probability"""
    detector = StatisticalDetector()

    human_text = """
    So I was working on this project last week, right? 
    Things were going smoothly at first. 
    Then boom—everything broke.
    Honestly, I didn't see it coming.
    Three days of debugging later, I found the culprit: a tiny typo.
    Go figure.
    """

    result = detector.analyze(human_text)

    print(f"Human Text Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Verdict: {result.verdict}")
    print(f"  Confidence: {result.confidence}")
    # Statistical detectors aren't perfect - human text should score below 60%
    assert result.ai_probability < 0.6, (
        f"Expected AI probability < 0.6, got {result.ai_probability}"
    )
    print("  ✅ PASSED\n")


def test_mixed_text():
    """Test mixed quality text"""
    detector = StatisticalDetector()

    mixed_text = """
    Climate change affects everyone. Rising temperatures impact ecosystems.
    Additionally, extreme weather events have become more frequent.
    I remember last summer—it was brutal.
    Polar ice caps are melting faster than predicted.
    Honestly, it's kind of terrifying.
    """

    result = detector.analyze(mixed_text)

    print(f"Mixed Text Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Verdict: {result.verdict}")
    print(f"  Confidence: {result.confidence}")
    # Mixed should be somewhere in the middle
    assert 0.2 < result.ai_probability < 0.8, (
        f"Expected AI probability between 0.2 and 0.8, got {result.ai_probability}"
    )
    print("  ✅ PASSED\n")


def test_recommendations():
    """Test that recommendations are generated"""
    detector = StatisticalDetector()

    # AI text that should trigger recommendations
    ai_text = "It is important to note that technology continues to advance. Furthermore, this advancement brings challenges. Additionally, opportunities arise. Moreover, innovation drives progress."

    result = detector.analyze(ai_text)

    print(f"Recommendations Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Recommendations: {result.recommendations}")
    assert len(result.recommendations) > 0, "Expected recommendations to be generated"
    assert any(
        "contraction" in r.lower() or "vary" in r.lower()
        for r in result.recommendations
    ), "Expected contraction or vary recommendations"
    print("  ✅ PASSED\n")


def test_edge_cases():
    """Test edge cases"""
    detector = StatisticalDetector()

    # Empty text - should be near 50% (uncertain)
    result = detector.analyze("")
    print(f"Empty Text Test: AI Probability = {result.ai_probability:.1%}")
    assert 0.4 < result.ai_probability < 0.6, (
        f"Empty text should be ~50%, got {result.ai_probability}"
    )
    print("  ✅ PASSED\n")

    # Very short text
    result = detector.analyze("Hi")
    print(f"Short Text Test: AI Probability = {result.ai_probability:.1%}")
    assert result.ai_probability > 0.3, "Short text should not be too confident"
    print("  ✅ PASSED\n")

    # One sentence
    result = detector.analyze("This is a single sentence.")
    print(f"Single Sentence Test: AI Probability = {result.ai_probability:.1%}")
    print("  ✅ PASSED\n")


def test_features():
    """Test feature extraction"""
    detector = StatisticalDetector()

    text = "Hello world! This is a test. How are you today? I'm doing well."
    result = detector.analyze(text)

    print(f"Feature Extraction Test:")
    print(f"  Features: {list(result.features.keys())}")

    required_features = [
        "perplexity_proxy",
        "burstiness",
        "sentence_variance",
        "vocabulary_diversity",
        "contraction_ratio",
        "transition_ratio",
    ]

    for feat in required_features:
        assert feat in result.features, f"Missing feature: {feat}"
        assert isinstance(result.features[feat], (int, float)), (
            f"Feature {feat} should be numeric"
        )

    print("  ✅ PASSED\n")


def run_all_tests():
    print("=" * 60)
    print("CONVERTIQ AI DETECTOR - TEST SUITE")
    print("=" * 60 + "\n")

    tests = [
        ("AI-Generated Text Detection", test_ai_generated_text),
        ("Human-Written Text Detection", test_human_written_text),
        ("Mixed Quality Text", test_mixed_text),
        ("Recommendations Generation", test_recommendations),
        ("Edge Cases", test_edge_cases),
        ("Feature Extraction", test_features),
    ]

    passed = 0
    failed = 0

    for name, test_func in tests:
        try:
            test_func()
            passed += 1
        except AssertionError as e:
            print(f"❌ {name}: FAILED - {e}\n")
            failed += 1
        except Exception as e:
            print(f"❌ {name}: ERROR - {e}\n")
            failed += 1

    print("=" * 60)
    print(f"RESULTS: {passed} passed, {failed} failed")
    print("=" * 60)

    return failed == 0


if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)
