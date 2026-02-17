#!/usr/bin/env python3
"""
ConvertIQ AI Detector API Wrapper
Simple HTTP API for the detector - works with any Python web framework.
"""

import asyncio
import json
from typing import Dict, Any
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from detectiq_detector import StatisticalDetector, EnsembleDetector, format_result

app = FastAPI(title="ConvertIQ AI Detector API")

# Initialize detector
detector = StatisticalDetector()


class AnalyzeRequest(BaseModel):
    text: str
    use_llm: bool = False


class AnalyzeResponse(BaseModel):
    ai_probability: float
    is_ai_generated: bool
    confidence: str
    verdict: str
    features: Dict[str, Any]
    recommendations: list[str]


@app.post("/analyze", response_model=AnalyzeResponse)
async def analyze_text(request: AnalyzeRequest):
    """Analyze text for AI-generated content"""
    try:
        result = detector.analyze(request.text)

        return AnalyzeResponse(
            ai_probability=result.ai_probability,
            is_ai_generated=result.is_ai_generated,
            confidence=result.confidence,
            verdict=result.verdict,
            features=result.features,
            recommendations=result.recommendations,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "detector": "statistical"}


@app.get("/batch-analyze")
async def batch_analyze(texts: str):
    """Analyze multiple texts (comma-separated)"""
    text_list = [t.strip() for t in texts.split(",")]
    results = []

    for text in text_list:
        result = detector.analyze(text)
        results.append(
            {
                "text_preview": text[:100] + "..." if len(text) > 100 else text,
                "ai_probability": result.ai_probability,
                "verdict": result.verdict,
            }
        )

    return {"results": results}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
