# AI Content Detection: How It Works & How To Pass It

## Executive Summary

This document details the exact algorithms used by AI detectors (GPTZero, CopyLeaks, Desklib, etc.) and provides actionable strategies to pass them.

---

## Part 1: How AI Detectors Work

### 1.1 GPTZero's Statistical Approach

GPTZero uses **two core metrics**:

#### PERPLEXITY
- **Definition**: Measures how "surprised" a language model is by the text
- **Formula**: `P(w) = 2^(-Σ log P(wi))`
- **How it works**: AI-generated text has **LOW perplexity** because AI models choose the most statistically probable words
- **Detection**: 
  - Low perplexity → AI-generated
  - High perplexity (above 85) → Human-written
- **Example**: 
  - "The AI is very" → AI completes with "intelligent" (low perplexity)
  - "The AI ate" → Unlikely completion, AI would rarely say this (high perplexity)

#### BURSTINESS (Variance)
- **Definition**: Measures how much perplexity **varies** throughout a document
- **How it works**:
  - **Humans**: Vary sentence length, structure, vocabulary naturally (high burstiness)
  - **AI**: Maintains consistent sentence patterns throughout (low burstiness)
- **Detection**: Low variance in sentence complexity = AI

**Why this works**: AI models use the same probability distribution for every sentence. Humans have "short-term memory" that changes their writing patterns throughout a document.

---

### 1.2 DeBERTa-Based Detectors (Desklib, RAID Benchmark)

The **state-of-the-art detectors** use deep learning:

#### Architecture
```
Input Text → DeBERTa-v3-large → Mean Pooling → Classifier Head → AI/Human Score
```

#### What It Analyzes
1. **Semantic patterns**: Context relationships between words
2. **Writing style fingerprints**: Vocabulary usage, syntax patterns
3. **Statistical signatures**: Word frequency distributions, n-gram patterns
4. **Structural patterns**: Sentence length distributions, paragraph coherence

#### Training Data (RAID Benchmark)
- 10+ million text samples
- 11 different LLMs (GPT-2/3/4, Mistral, etc.)
- 11 domains (news, Reddit, Wikipedia, academic, poetry, etc.)
- Adversarial attacks (humanization attempts)

#### Performance
- **Desklib/ai-text-detector-v1.01**: #1 on RAID leaderboard
- **Accuracy**: ~99% on Chicago Booth Benchmark
- **Weakness**: Adversarial attacks (paraphrasing, humanizing)

---

### 1.3 Other Detection Methods

#### Binoculars (University of Amsterdam)
- Compares perplexity between **two different LLMs**
- If both models find text predictable → AI-generated
- Formula: `PPL(model1) / cross_entropy(model1, model2)`

#### Self-BLEU
- Measures how similar text is to itself
- AI text → High self-similarity (repetitive)
- Human text → Low self-similarity (varied)

---

## Part 2: What AI Detectors Actually Measure

### Statistical Features (measurable values)

| Feature | AI Pattern | Human Pattern |
|---------|------------|---------------|
| Sentence length | Consistent | Varied |
| Word repetition | Low | Variable |
| Vocabulary diversity | Medium | High |
| Per-sentence perplexity | Low, uniform | High, varied |
| Burstiness (variance) | Low | High |
| Transition probabilities | Predictable | Unpredictable |
| N-gram frequency | Uniform | Clustered |
| Function word usage | Regular | Irregular |

### Key "AI Fingerprints"

1. **Overly consistent sentence structure**
2. **Lack of vocabulary variation**
3. **Predictable word transitions**
4. **No "surprising" phrases**
5. **Uniform paragraph complexity**
6. **Missing conversational markers**

---

## Part 3: How To Pass AI Detectors

### 3.1 Core Strategy: Mimic Human Writing

#### Rule 1: Increase Perplexity
- Use unexpected but reasonable word combinations
- Add surprising but logical transitions
- Include domain-specific colloquialisms
- **Example**:
  - ❌ AI: "Climate change causes rising temperatures"
  - ✅ Human: "That heat wave everyone's been talking about? Yeah, that's climate change doing its thing"

#### Rule 2: Maximize Burstiness
- **Vary sentence length dramatically**:
  - Short: "This is key."
  - Medium: "The results showed significant improvement."
  - Long: "After analyzing over three million data points across twelve different demographic segments, the research team discovered something unexpected that would change how we approach this problem entirely."
  
- **Mix writing styles**: Sometimes formal, sometimes casual
- **Include tangential thoughts**: Humans digress

#### Rule 3: Add "Human Markers"
```
✓ Contractions (don't, can't, it's)
✓ First-person observations ("I noticed that...")
✓ Casual language ("pretty much", "kind of", "honestly")
✓ Self-corrections ("Well, actually...", "I mean...")
✓ Incomplete sentences (when appropriate)
✓ Questions to reader ("Ever wonder why...?")
✓ Personal anecdotes
✓ Time markers ("Recently...", "Back when I...")
✓ Emotion words ("amazing", "terrible", "excited")
```

#### Rule 4: Decrease Self-Similarity
- Avoid repeating the same phrases
- Use synonyms (but not same synonyms repeatedly)
- Vary transition words:
  - ❌ "Furthermore", "Furthermore", "Furthermore"
  - ✅ "Also", "Besides", "On top of that", "Plus"

---

### 3.2 Generation Settings (If Using AI to Write)

| Setting | AI Detector Risk | Human-Like Setting |
|---------|------------------|-------------------|
| Temperature | 0 = More robotic | **1.0 = More human** |
| Top P | 1.0 = Uniform | Keep high |
| Frequency penalty | 0 = Repetitive | **Increase** |
| Presence penalty | 0 = Repetitive | **Increase** |

**Optimal for human-like output**:
- Temperature: 0.9 - 1.0
- Top P: 0.9 - 1.0
- Frequency penalty: 0.3 - 0.5
- Presence penalty: 0.3 - 0.5

---

### 3.3 Post-Processing Techniques

#### Technique 1: Sentence Restructuring
```python
# Original AI sentence
"The system analyzes data to identify patterns and anomalies."

# Human version
"Looking at the data, the system spots patterns—and flags anything weird."
```

#### Technique 2: Add Specific Details
```python
# Vague AI sentence  
"The company grew significantly."

# Specific human version
"The company exploded from 12 employees to nearly 200 in just 18 months."
```

#### Technique 3: Personal Angle
```python
# Neutral AI sentence
"Social media affects mental health."

# Personal human sentence
"I've watched friends get sucked into doom-scrolling, and honestly, it's worrying."
```

#### Technique 4: Vary Sentence Starters
```python
# AI pattern (always starting sentences the same way)
"Social media affects mental health. Social media usage has increased. Social media companies..."

# Human pattern
"Social media affects mental health. These days, everyone's glued to their feeds. The impact? Huge."
```

---

### 3.4 Adversarial Attacks That Work

Based on RAID benchmark research:

#### Most Effective (Decrease detector accuracy by 30%+):
1. **Article deletion**: Remove "the", "a", "an" randomly
2. **Homoglyphs**: Replace letters with similar Unicode characters (careful - may be detectable)
3. **Whitespace insertion**: Add spaces between words
4. **Synonym substitution**: Replace common words with synonyms

#### Least Effective:
- Paraphrasing with same AI model
- Simple sentence splitting
- Adding emojis (actually flags as AI sometimes)

---

## Part 4: Detection Bypass Checklist

Before publishing any content, verify:

- [ ] **Sentence length varies** (mix short, medium, long)
- [ ] **Vocabulary is varied** (no repeated phrases)
- [ ] **Contractions used** (don't, can't, it's)
- [ ] **Personal touches** (anecdotes, opinions, observations)
- [ ] **Per-sentence complexity varies**
- [ ] **No consistent starting patterns**
- [ ] **Includes "surprising" but logical phrases**
- [ ] **Specific details** (numbers, names, examples)
- [ ] **Conversational markers** ("honestly", "actually", "you know")
- [ ] **Emotion words** used appropriately

---

## Part 5: Testing Your Content

### Free Tools To Test

1. **GPTZero**: https://gptzero.me/
2. **Desklib AI Detector**: https://desklib.com/ai-content-detector/
3. **Hugging Face API** (free tier): `desklib/ai-text-detector-v1.01`
4. **CopyLeaks**: https://copyleaks.com/

### Test Before Publishing

Always run your content through at least 2 detectors before publishing. If it flags as AI:
1. Add more personal anecdotes
2. Increase sentence variety
3. Add specific details and numbers
4. Rewrite with more conversational tone

---

## Part 7: RAID Adversarial Attacks (What Works)

Based on [RAID benchmark research](https://github.com/liamdugan/raid), here are the 11 adversarial attacks that can fool AI detectors:

### Most Effective Attacks (Reduce detection accuracy by 30%+)

| Attack | Description | Effectiveness |
|--------|-------------|---------------|
| **Article Deletion** | Remove "the", "a", "an" randomly | High |
| **Homoglyphs** | Replace letters with similar Unicode (a→а) | Medium-High |
| **Whitespace Insertion** | Add spaces between letters | Medium |
| **Synonym Substitution** | Replace words with synonyms | Medium |
| **Paraphrase** | Rewrite using different LLM | High |

### Least Effective Attacks

| Attack | Notes |
|--------|-------|
| Simple sentence splitting | Detectors still catch patterns |
| Adding emojis | Sometimes flags as MORE AI |
| Case manipulation | Easy to reverse-detect |

### Our Humanization Techniques (Based on RAID)

The `humanizer.py` script implements these effective techniques:

1. **Contraction conversion** - "cannot" → "can't"
2. **Formulaic phrase removal** - Remove "furthermore", "moreover", "therefore"
3. **Sentence length variation** - Mix short and long sentences
4. **Personal markers** - Add "Honestly,", "You know,"
5. **Surprise insertions** - Add unexpected phrases

---

## Part 8: Quick Reference

### The Golden Rules of Human-Like Writing

1. **Be unpredictable** - AI is built to be predictable
2. **Be specific** - AI defaults to vague, general statements
3. **Be personal** - AI has no lived experiences
4. **Be varied** - AI is consistent, humans are not
5. **Be emotional** - AI is emotionally neutral
6. **Be imperfect** - AI is too perfect, humans aren't

### CLI Tools

```bash
# Detect AI content
python3 scripts/detectiq_detector.py "Your text here"

# Humanize AI content
python3 scripts/humanizer.py -f ai_text.txt

# Run tests
python3 scripts/test_detector.py
```

---

## References

- GPTZero Technology: https://gptzero.me/technology
- RAID Benchmark: https://github.com/liamdugan/raid
- RAID Leaderboard: https://raid-bench.xyz/leaderboard
- Desklib AI Detector: https://huggingface.co/desklib/ai-text-detector-v1.01
- Binoculars Detection: https://arxiv.org/abs/2303.04115
- "Detecting AI-Humanized Text" (GPTZero): https://gptzero.me/news/detecting-ai-humanized-text-how-gptzero-stays-ahead/
- It's AI Benchmarks: https://its-ai.org/benchmarks.pdf

---

*Last updated: January 27, 2026*
*For ConvertIQ Content Team*
