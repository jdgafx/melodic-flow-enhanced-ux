#!/usr/bin/env python3
"""
ConvertIQ AI Detection HTTP Server
Run: python3 convertiq-server.py
Access: http://localhost:8000
"""

import json
import sys
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

sys.path.insert(0, str(Path(__file__).parent))

from detectiq_detector_v2 import ConvertIQDetector

# Initialize detector
detector = ConvertIQDetector()


class DetectionHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            response = {
                "status": "healthy",
                "service": "ConvertIQ AI Detector",
                "endpoints": {
                    "/": "This help",
                    "/detect?text=<content>": "Detect AI content (GET)",
                    "/detect (POST)": "Detect AI content (POST with JSON body)",
                },
            }
            self.wfile.write(json.dumps(response, indent=2).encode())

        elif self.path.startswith("/detect"):
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            text = params.get("text", [""])[0]

            if text:
                result = detector.analyze(text)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                response = {
                    "ai_probability": result.ai_probability,
                    "is_ai_generated": result.is_ai_generated,
                    "verdict": result.verdict,
                    "confidence": result.confidence,
                    "method_scores": result.method_scores,
                    "recommendations": result.recommendations,
                }
                self.wfile.write(json.dumps(response, indent=2).encode())
            else:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(
                    json.dumps({"error": "Missing 'text' parameter"}).encode()
                )

        else:
            self.send_response(404)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Not found"}).encode())

    def do_POST(self):
        if self.path == "/detect":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode()

            try:
                data = json.loads(body)
                text = data.get("text", "")

                if text:
                    result = detector.analyze(text)
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    response = {
                        "ai_probability": result.ai_probability,
                        "is_ai_generated": result.is_ai_generated,
                        "verdict": result.verdict,
                        "confidence": result.confidence,
                        "method_scores": result.method_scores,
                        "recommendations": result.recommendations,
                    }
                    self.wfile.write(json.dumps(response, indent=2).encode())
                else:
                    self.send_response(400)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(
                        json.dumps({"error": "Missing 'text' in body"}).encode()
                    )

            except json.JSONDecodeError:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Invalid JSON"}).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")


def run_server(port=8000):
    server = HTTPServer(("0.0.0.0", port), DetectionHandler)
    print(f"🚀 ConvertIQ AI Detector Server")
    print(f"   Health: http://localhost:{port}/")
    print(f"   Detect: POST http://localhost:{port}/detect")
    print(
        f"   Example: curl -X POST -H 'Content-Type: application/json' -d '{{\"text\":\"Your text\"}}' http://localhost:{port}/detect"
    )
    server.serve_forever()


if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 8000))
    run_server(port)
