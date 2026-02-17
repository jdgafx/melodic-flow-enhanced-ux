# AI Content Auditor

OpenCode plugin for auditing web pages with AI content detection using undetectableai.pro.

## Features

- 🔍 **Single Page Audit** - Check any URL for AI-generated content
- 📊 **Batch Auditing** - Audit multiple pages from a file
- 📈 **Ranked Reports** - Get sorted results (best to worst)
- ⚡ **OpenCode Integration** - Works seamlessly with Playwright MCP
- 🎯 **Pass/Fail Scoring** - ≤4% AI = PASS, >4% = Needs Humanization

## Installation

### Method 1: Copy to OpenCode Plugins

```bash
# Copy plugin to OpenCode plugins directory
cp -r ai-content-auditor ~/.config/opencode/plugins/

# Or symlink for development
ln -s $(pwd)/ai-content-auditor ~/.config/opencode/plugins/
```

### Method 2: Use as Standalone Module

```bash
# Install dependencies
npm install

# Run audit
node ai-auditor.js https://example.com
```

## Usage

### CLI Usage

```bash
# Audit single page
node ai-auditor.js https://convertiq.pages.dev/

# Audit with verbose output
node ai-auditor.js https://convertiq.pages.dev/ -v

# Batch audit from file
node ai-auditor.js --batch urls.txt --output report.json

# Save report
node ai-auditor.js https://example.com -o results.json
```

### Programmatic Usage (OpenCode Skill)

```javascript
const { 
  auditPage, 
  auditUrls, 
  generateReport, 
  saveReport 
} = require('./auditor-skill');

// Audit single page
const result = await auditPage('https://example.com');
console.log(result.aiScore); // 0-100%
console.log(result.status);  // 'PASS' or 'NEEDS_HUMANIZATION'

// Audit multiple pages
const urls = [
  'https://example.com',
  'https://example.com/about',
  'https://example.com/pricing'
];
const results = await auditUrls(urls);

// Generate formatted report
generateReport(results);

// Save to file
saveReport(results, 'audit-report.json');
```

### OpenCode Chat Commands

```
/audit-page https://convertiq.pages.dev/
/audit-batch pages-to-check.txt
/audit-report
```

## Batch File Format

Create a text file with one URL per line:

```
# comments start with #
https://convertiq.pages.dev/
https://convertiq.pages.dev/about
https://convertiq.pages.dev/services
https://convertiq.pages.dev/pricing
```

## Output Format

### JSON Report Structure

```json
{
  "summary": {
    "total": 4,
    "pass": 3,
    "needsHumanization": 1,
    "failed": 0,
    "generatedAt": "2026-01-28T16:30:00.000Z"
  },
  "results": [
    {
      "url": "https://example.com",
      "aiScore": 0,
      "verdict": "human-written",
      "status": "PASS",
      "contentLength": 2847,
      "duration": 8500,
      "timestamp": "2026-01-28T16:30:00.000Z"
    }
  ]
}
```

### Console Output

```
╔════════════════════════════════════════════════════════╗
║        AI CONTENT AUDIT REPORT                         ║
╚════════════════════════════════════════════════════════╝

📊 Summary:
   Total: 4 pages
   ✅ Pass (≤4% AI): 3
   ⚠️  Needs Humanization: 1
   ❌ Failed: 0

🏆 Ranked Results (Best → Worst):

   01. ✅ example.com                       0% AI
   02. ✅ example.com/about                 1% AI
   03. ✅ example.com/services              3% AI
   04. ⚠️  example.com/pricing             59% AI

⚠️  Pages requiring humanization:

   • https://example.com/pricing (59% AI)
```

## Scoring Thresholds

| AI Score | Status | Action |
|----------|--------|--------|
| 0-4% | ✅ PASS | No action needed |
| 5-30% | ⚠️ LOW | Monitor, optional humanization |
| 31-70% | ⚠️ MEDIUM | Consider humanization |
| 71-100% | ❌ HIGH | Needs humanization |

## Testing

```bash
npm test
```

## Requirements

- Node.js 16+
- Playwright MCP skill enabled in OpenCode
- Internet connection (uses undetectableai.pro)

## License

MIT
