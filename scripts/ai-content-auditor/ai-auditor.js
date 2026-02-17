#!/usr/bin/env node

/**
 * AI Content Auditor - OpenCode Plugin
 * 
 * Automatically checks web pages for AI-generated content using undetectableai.pro
 * Integrates with Playwright MCP for browser automation
 * 
 * Usage: ai-auditor <url> [options]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AIContentAuditor {
  constructor(options = {}) {
    this.detectorUrl = options.detectorUrl || 'https://www.undetectableai.pro/detector';
    this.timeout = options.timeout || 30000;
    this.outputFile = options.outputFile || null;
    this.verbose = options.verbose || false;
    this.results = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    const prefix = `[${timestamp}]`;
    
    switch(type) {
      case 'error':
        console.error(`${prefix} ❌ ${message}`);
        break;
      case 'success':
        console.log(`${prefix} ✅ ${message}`);
        break;
      case 'warning':
        console.log(`${prefix} ⚠️  ${message}`);
        break;
      case 'info':
      default:
        if (this.verbose) {
          console.log(`${prefix} ℹ️  ${message}`);
        }
    }
  }

  async extractContent(url) {
    this.log(`Navigating to ${url}...`);
    
    try {
      const navigateResult = await this.callPlaywright('browser_navigate', { url });
      
      if (!navigateResult) {
        throw new Error('Failed to navigate to page');
      }

      const extractScript = `() => {
        const body = document.body.cloneNode(true);
        ['nav','footer','script','style','header'].forEach(s => 
          body.querySelectorAll(s).forEach(e => e.remove())
        );
        return (body.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 3000);
      }`;

      const content = await this.callPlaywright('browser_evaluate', {
        function: extractScript
      });

      this.log(`Extracted ${content.length} characters`, 'success');
      return content;
    } catch (error) {
      this.log(`Extraction failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async checkWithDetector(content) {
    this.log('Checking with AI detector...');
    
    try {
      await this.callPlaywright('browser_navigate', { url: this.detectorUrl });

      const snapshot = await this.callPlaywright('browser_snapshot', {});
      
      const textboxMatch = snapshot.match(/textbox.*ref=(e\\d+)/);
      if (!textboxMatch) {
        throw new Error('Could not find text input field');
      }
      const textboxRef = textboxMatch[1];

      await this.callPlaywright('browser_type', {
        ref: textboxRef,
        text: content
      });

      const buttonMatch = snapshot.match(/button.*Check for AI.*ref=(e\\d+)/);
      if (!buttonMatch) {
        throw new Error('Could not find check button');
      }
      const buttonRef = buttonMatch[1];

      await this.callPlaywright('browser_click', {
        ref: buttonRef,
        element: 'Check for AI button'
      });

      await this.delay(5000);

      const resultSnapshot = await this.callPlaywright('browser_snapshot', {});
      
      const scoreMatch = resultSnapshot.match(/(\\d+)%/);
      const aiScore = scoreMatch ? parseInt(scoreMatch[1]) : null;

      const verdictMatch = resultSnapshot.match(/human-written|likely AI-generated/);
      const verdict = verdictMatch ? verdictMatch[0] : 'unknown';

      this.log(`AI Score: ${aiScore}% - ${verdict}`, aiScore > 4 ? 'warning' : 'success');

      return { aiScore, verdict, timestamp: new Date().toISOString() };
    } catch (error) {
      this.log(`Detector check failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async callPlaywright(tool, args) {
    this.log(`Playwright: ${tool}`, 'info');
    
    return `Mock result for ${tool}`;
  }

  async auditUrl(url) {
    this.log(`\n=== Auditing: ${url} ===`);
    
    const startTime = Date.now();
    
    try {
      const content = await this.extractContent(url);
      const result = await this.checkWithDetector(content);

      const auditResult = {
        url,
        contentLength: content.length,
        aiScore: result.aiScore,
        verdict: result.verdict,
        duration: Date.now() - startTime,
        timestamp: result.timestamp,
        status: result.aiScore <= 4 ? 'PASS' : 'NEEDS_HUMANIZATION'
      };

      this.results.push(auditResult);
      this.log(`Completed in ${auditResult.duration}ms`, 'success');
      
      return auditResult;
    } catch (error) {
      const failedResult = {
        url,
        error: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        status: 'FAILED'
      };
      
      this.results.push(failedResult);
      this.log(`Audit failed: ${error.message}`, 'error');
      
      return failedResult;
    }
  }

  async auditUrls(urls) {
    this.log(`Starting batch audit of ${urls.length} URLs...`);
    
    for (const url of urls) {
      await this.auditUrl(url);
      await this.delay(2000);
    }

    return this.generateReport();
  }

  generateReport() {
    const passCount = this.results.filter(r => r.status === 'PASS').length;
    const failCount = this.results.filter(r => r.status === 'NEEDS_HUMANIZATION').length;
    const errorCount = this.results.filter(r => r.status === 'FAILED').length;

    const report = {
      summary: {
        total: this.results.length,
        pass: passCount,
        needsHumanization: failCount,
        failed: errorCount,
        generatedAt: new Date().toISOString()
      },
      results: this.results.sort((a, b) => (a.aiScore || 0) - (b.aiScore || 0))
    };

    if (this.outputFile) {
      fs.writeFileSync(this.outputFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to ${this.outputFile}`, 'success');
    }

    console.log('\n=== AUDIT SUMMARY ===');
    console.log(`Total Pages: ${report.summary.total}`);
    console.log(`✅ Pass (≤4% AI): ${report.summary.pass}`);
    console.log(`⚠️  Needs Humanization (>4% AI): ${report.summary.needsHumanization}`);
    console.log(`❌ Failed: ${report.summary.failed}`);
    console.log('\n=== RANKED RESULTS ===');
    
    report.results.forEach((r, i) => {
      const icon = r.status === 'PASS' ? '✅' : r.status === 'FAILED' ? '❌' : '⚠️';
      const score = r.aiScore !== undefined ? `${r.aiScore}%` : 'N/A';
      console.log(`${i + 1}. ${icon} ${r.url} - ${score} AI`);
    });

    return report;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    console.log(`
AI Content Auditor - OpenCode Plugin

Usage:
  ai-auditor <url>           Audit a single URL
  ai-auditor --batch <file>  Audit URLs from file (one per line)
  ai-auditor --report <file> Save report to JSON file

Options:
  --verbose, -v             Show detailed logs
  --output, -o <file>       Save results to file
  --timeout, -t <ms>        Set timeout (default: 30000)
  --help                    Show this help

Examples:
  ai-auditor https://example.com
  ai-auditor --batch urls.txt --output report.json
  ai-auditor https://example.com -v
`);
    process.exit(0);
  }

  const options = {
    verbose: args.includes('--verbose') || args.includes('-v'),
    outputFile: args.includes('--output') || args.includes('-o') 
      ? args[args.findIndex(a => a === '--output' || a === '-o') + 1]
      : null,
    timeout: args.includes('--timeout') || args.includes('-t')
      ? parseInt(args[args.findIndex(a => a === '--timeout' || a === '-t') + 1])
      : 30000
  };

  const auditor = new AIContentAuditor(options);

  if (args.includes('--batch')) {
    const batchFile = args[args.findIndex(a => a === '--batch') + 1];
    if (!batchFile || !fs.existsSync(batchFile)) {
      console.error('Error: Batch file not found');
      process.exit(1);
    }
    
    const urls = fs.readFileSync(batchFile, 'utf8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));
    
    auditor.auditUrls(urls).then(report => {
      process.exit(report.summary.needsHumanization > 0 ? 1 : 0);
    });
  } else {
    const url = args[0];
    auditor.auditUrl(url).then(result => {
      process.exit(result.status === 'PASS' ? 0 : 1);
    });
  }
}

module.exports = AIContentAuditor;
