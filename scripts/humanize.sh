#!/bin/bash
# AI Content Humanizer - Rewrite content to pass AI detectors
# Uses techniques from evade-AI-detectors prompts

HUMANIZER_PROMPT="You are an expert humanizer. Rewrite the following text so it passes ALL AI content detection tools (GPTZero, CopyLeaks, etc.).

Requirements:
1. Use conversational, natural language - write like a real person
2. Vary sentence lengths - mix short punchy sentences with longer ones
3. Add contractions (don't, can't, it's, you're)
4. Use varied vocabulary - avoid repeating the same words
5. Include specific details, anecdotes, and personal touches
6. Keep the same meaning but change structure
7. Write like a human, not a robot

Rewrite this text:"

if [ -z "$1" ]; then
    echo "Usage: ./humanize.sh \"Your AI content here\""
    echo ""
    echo "Or pipe content:"
    echo "cat content.txt | ./humanize.sh"
    exit 1
fi

CONTENT="$1"

echo "Humanizing content..."
echo ""
echo "--- Humanized Output ---"
echo "$CONTENT" | python3 -c "
import sys
import json
import os

# Get API key from keys file
with open('/home/chris/dev/CUSTOMER_PROJECTS/keys_and_mcps.md', 'r') as f:
    for line in f:
        if 'ANTHROPIC_API_KEY' in line:
            api_key = line.split('=')[1].strip()
            break

# Use Claude to rewrite
import urllib.request
import urllib.error

data = json.dumps({
    'model': 'claude-sonnet-4-20250514',
    'max_tokens': 2048,
    'messages': [
        {
            'role': 'user',
            'content': f'''{os.environ.get('HUMANIZER_PROMPT', 'You are an expert humanizer. Rewrite the following text so it passes ALL AI content detection tools. Write naturally like a human, with varied sentence lengths, contractions, and conversational tone. Keep the same meaning but change structure and vocabulary significantly.\n\nText to rewrite:\n')}{sys.stdin.read()}'''
        }
    ],
    'temperature': 1.0,
    'top_p': 1.0
}).encode()

req = urllib.request.Request(
    'https://api.anthropic.com/v1/messages',
    data=data,
    headers={
        'x-api-key': api_key,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
    }
)

try:
    response = urllib.request.urlopen(req, timeout=30)
    result = json.loads(response.read().decode())
    print(result['content'][0]['text'])
except Exception as e:
    print(f'Error: {e}', file=sys.stderr)
    sys.exit(1)
"
