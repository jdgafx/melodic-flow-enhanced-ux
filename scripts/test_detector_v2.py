#!/usr/bin/env python3
"""
ConvertIQ AI Detector - Complete Test Suite
Tests all detection methods and edge cases.
"""

import sys

sys.path.insert(0, "/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com/scripts")

from detectiq_detector_v2 import ConvertIQDetector, analyze, format_result


def test_ai_text():
    """Test AI-generated text is detected correctly"""
    detector = ConvertIQDetector()

    ai_text = """It is important to note that artificial intelligence has revolutionized 
many industries. Furthermore, machine learning algorithms have enabled significant advances. 
Additionally, natural language processing has improved interactions. Moreover, deep learning 
models demonstrate remarkable capabilities. Consequently, businesses adopt AI solutions. 
Therefore, AI technology continues to grow exponentially in adoption and sophistication."""

    result = detector.analyze(ai_text)

    print("AI Text Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Verdict: {result.verdict}")
    print(f"  Method Scores: {result.method_scores}")

    assert result.ai_probability > 0.7, (
        f"Expected AI prob > 0.7, got {result.ai_probability}"
    )
    assert result.is_ai_generated == True, "Should be flagged as AI"
    print("  ✅ PASSED\n")


def test_human_text():
    """Test human-written text is recognized"""
    detector = ConvertIQDetector()

    human_text = """So I was working on this project last week, right? Things were going 
smoothly at first. Then boom—everything broke. Honestly, I didn't see it coming. 
Three days of debugging later, I found the culprit: a tiny typo. Go figure. 
The fix took literally five minutes. Sometimes that's just how it goes."""

    result = detector.analyze(human_text)

    print("Human Text Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Verdict: {result.verdict}")
    print(f"  Method Scores: {result.method_scores}")

    assert result.ai_probability < 0.5, (
        f"Expected AI prob < 0.5, got {result.ai_probability}"
    )
    assert result.is_ai_generated == False, "Should be recognized as human"
    print("  ✅ PASSED\n")


def test_mixed_text():
    """Test mixed quality text - more human elements"""
    detector = ConvertIQDetector()

    # Text with some human elements
    mixed_text = """I've been thinking about this problem for a while now. 
The data shows some interesting patterns. Honestly, the results surprised me.
We found that customer behavior changed significantly over the past year.
Of course, more research is needed to confirm these findings."""

    result = detector.analyze(mixed_text)

    print("Mixed Text Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Verdict: {result.verdict}")

    # Mixed should be in middle range
    assert 0.2 < result.ai_probability < 0.8, (
        f"Expected middle range (0.2-0.8), got {result.ai_probability:.1%}"
    )
    print("  ✅ PASSED\n")


def test_recommendations():
    """Test recommendations are generated"""
    detector = ConvertIQDetector()

    # AI text
    ai_text = """It is important to note that technology continues to advance. 
Furthermore, innovation drives progress. Moreover, adoption increases over time."""

    result = detector.analyze(ai_text)

    print("Recommendations Test:")
    print(f"  AI Probability: {result.ai_probability:.1%}")
    print(f"  Recommendations: {result.recommendations}")

    assert len(result.recommendations) > 0, "Should generate recommendations"
    assert any(
        "contraction" in r.lower() or "vary" in r.lower()
        for r in result.recommendations
    ), "Should recommend contractions or variety"
    print("  ✅ PASSED\n")


def test_edge_cases():
    """Test edge cases"""
    detector = ConvertIQDetector()

    # Empty text
    result = detector.analyze("")
    print(f"Empty Text: AI Prob = {result.ai_probability:.1%}")
    assert 0.3 < result.ai_probability < 0.7, "Empty should be uncertain"

    # Very short text
    result = detector.analyze("Hi there!")
    print(f"Short Text: AI Prob = {result.ai_probability:.1%}")

    # Single sentence
    result = detector.analyze(
        "This is a single sentence about artificial intelligence."
    )
    print(f"Single Sentence: AI Prob = {result.ai_probability:.1%}")

    print("  ✅ PASSED\n")


def test_features():
    """Test feature extraction"""
    detector = ConvertIQDetector()

    text = "Furthermore, technology advances rapidly. Additionally, adoption increases."
    result = detector.analyze(text)

    print("Feature Extraction Test:")
    features = result.features
    print(f"  Features: {list(features.keys())}")

    # Check for expected features (statistical and pattern detectors)
    has_stat_features = any(k.startswith("stat_") for k in features.keys())
    has_pattern_score = any("pattern_score" in k for k in features.keys())
    has_method_scores = "method_scores" in features

    assert has_stat_features, "Should have statistical features"
    assert has_pattern_score, "Should have pattern score"
    assert has_method_scores, "Should have method_scores"
    print("  ✅ PASSED\n")


def run_all_tests():
    print("=" * 60)
    print("CONVERTIQ AI DETECTOR - COMPLETE TEST SUITE")
    print("=" * 60 + "\n")

    tests = [
        ("AI Text Detection", test_ai_text),
        ("Human Text Recognition", test_human_text),
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
