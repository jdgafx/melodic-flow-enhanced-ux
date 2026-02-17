#!/usr/bin/env node
/**
 * ConvertIQ AI Content Audit Tool
 * 
 * This script audits all pages on both Cloudflare and Netlify deployments
 * using the undetectableai.pro detector via Playwright MCP.
 * 
 * Usage: node audit_converted.js
 * 
 * Results are saved to: audit-results/audit-YYYY-MM-DD-HHMMSS.md
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  cloudflareUrl: 'https://convertiq.pages.dev',
  netlifyUrl: null, // Will be determined or set manually
  detectorUrl: 'https://undetectableai.pro/detector',
  passThreshold: 4, // 4% or less to pass
  outputDir: './audit-results',
  pages: [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/blog', name: 'Blog' },
    { path: '/services', name: 'Services Index' },
    { path: '/services/lead-funnel', name: 'Lead Funnel Service' },
    { path: '/services/email-automation', name: 'Email Automation Service' },
    { path: '/services/ai-chatbot', name: 'AI Chatbot Service' },
    { path: '/services/ai-voice', name: 'AI Voice Service' },
    { path: '/services/google-business', name: 'Google Business Service' },
    { path: '/services/review-response', name: 'Review Response Service' },
    { path: '/services/social-media', name: 'Social Media Service' },
    { path: '/services/ad-copy', name: 'Ad Copy Service' },
    { path: '/services/seo-content', name: 'SEO Content Service' },
    { path: '/services/landing-pages', name: 'Landing Pages Service' },
  ]
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Generate timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const outputFile = path.join(CONFIG.outputDir, `audit-${timestamp}.md`);

// Results storage
const results = {
  timestamp: new Date().toISOString(),
  cloudflare: {},
  netlify: {},
  summary: {
    totalPages: CONFIG.pages.length,
    cloudflarePassed: 0,
    cloudflareFailed: 0,
    netlifyPassed: 0,
    netlifyFailed: 0,
    identicalDeployments: true
  }
};

/**
 * Extract text content from a page
 * This function would be called via Playwright MCP browser_evaluate
 */
function extractPageText() {
  // Remove navigation, footer, and scripts
  const body = document.body.cloneNode(true);
  
  // Remove common non-content elements
  const selectorsToRemove = [
    'nav', 'footer', 'script', 'style', 'header',
    '[role="navigation"]', '[role="banner"]'
  ];
  
  selectorsToRemove.forEach(selector => {
    body.querySelectorAll(selector).forEach(el => el.remove());
  });
  
  // Get text content
  let text = body.innerText || body.textContent || '';
  
  // Clean up
  text = text
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n')
    .trim();
  
  // Limit to ~1500 chars for detector
  return text.slice(0, 1500);
}

/**
 * Check text with AI detector
 * This would use Playwright MCP to:
 * 1. Navigate to detector URL
 * 2. Fill textarea with text
 * 3. Click "Check for AI"
 * 4. Wait for result
 * 5. Extract score
 */
async function checkWithDetector(text) {
  // This is a placeholder - actual implementation would use Playwright MCP
  // Steps:
  // 1. browser_navigate to CONFIG.detectorUrl
  // 2. browser_fill_form with text in textarea (ref="e25")
  // 3. browser_click "Check for AI" button
  // 4. browser_wait_for 15 seconds
  // 5. browser_evaluate to extract score from page text
  // 6. Parse score with regex /([0-9]{1,2})%/
  
  return {
    score: null, // Would be actual score
    passed: null, // Would be score <= CONFIG.passThreshold
    text: text.slice(0, 100) + '...' // Preview
  };
}

/**
 * Audit a single page
 */
async function auditPage(baseUrl, pageConfig) {
  const fullUrl = `${baseUrl}${pageConfig.path}`;
  console.log(`Auditing: ${fullUrl}`);
  
  // This would use Playwright MCP:
  // 1. browser_navigate to fullUrl
  // 2. browser_evaluate to extract text
  // 3. checkWithDetector(text)
  
  return {
    url: fullUrl,
    name: pageConfig.name,
    score: null,
    passed: null,
    error: null
  };
}

/**
 * Run full audit
 */
async function runAudit() {
  console.log('='.repeat(60));
  console.log('ConvertIQ AI Content Audit');
  console.log('Timestamp:', results.timestamp);
  console.log('='.repeat(60));
  
  // Audit Cloudflare deployment
  console.log('\n📡 Auditing Cloudflare Deployment...');
  console.log('URL:', CONFIG.cloudflareUrl);
  console.log('-'.repeat(60));
  
  for (const page of CONFIG.pages) {
    const result = await auditPage(CONFIG.cloudflareUrl, page);
    results.cloudflare[page.path] = result;
    
    if (result.passed) {
      results.summary.cloudflarePassed++;
    } else {
      results.summary.cloudflareFailed++;
    }
  }
  
  // Audit Netlify deployment (if available)
  if (CONFIG.netlifyUrl) {
    console.log('\n📡 Auditing Netlify Deployment...');
    console.log('URL:', CONFIG.netlifyUrl);
    console.log('-'.repeat(60));
    
    for (const page of CONFIG.pages) {
      const result = await auditPage(CONFIG.netlifyUrl, page);
      results.netlify[page.path] = result;
      
      if (result.passed) {
        results.summary.netlifyPassed++;
      } else {
        results.summary.netlifyFailed++;
      }
    }
    
    // Compare deployments
    for (const page of CONFIG.pages) {
      const cfResult = results.cloudflare[page.path];
      const nlResult = results.netlify[page.path];
      
      if (cfResult.score !== nlResult.score) {
        results.summary.identicalDeployments = false;
      }
    }
  } else {
    console.log('\n⚠️  Netlify URL not configured - skipping Netlify audit');
    results.summary.identicalDeployments = false;
  }
  
  // Generate report
  generateReport();
  
  console.log('\n' + '='.repeat(60));
  console.log('Audit Complete!');
  console.log('Results saved to:', outputFile);
  console.log('='.repeat(60));
}

/**
 * Generate markdown report
 */
function generateReport() {
  let markdown = `# ConvertIQ AI Content Audit Report

**Generated:** ${results.timestamp}
**Pass Threshold:** ≤${CONFIG.passThreshold}%

## Summary

| Metric | Value |
|--------|-------|
| Total Pages Audited | ${CONFIG.pages.length} |
| Cloudflare Passed | ${results.summary.cloudflarePassed}/${CONFIG.pages.length} |
| Cloudflare Failed | ${results.summary.cloudflareFailed}/${CONFIG.pages.length} |
${CONFIG.netlifyUrl ? `| Netlify Passed | ${results.summary.netlifyPassed}/${CONFIG.pages.length} |
| Netlify Failed | ${results.summary.netlifyFailed}/${CONFIG.pages.length} |
| Deployments Identical | ${results.summary.identicalDeployments ? '✅ Yes' : '❌ No'} |` : '| Netlify Status | Not Configured |'}

## Cloudflare Results (${CONFIG.cloudflareUrl})

| Page | Path | Score | Status |
|------|------|-------|--------|
`;

  for (const page of CONFIG.pages) {
    const result = results.cloudflare[page.path];
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    const score = result.score !== null ? `${result.score}%` : 'N/A';
    markdown += `| ${page.name} | ${page.path} | ${score} | ${status} |\n`;
  }

  if (CONFIG.netlifyUrl) {
    markdown += `
## Netlify Results (${CONFIG.netlifyUrl})

| Page | Path | Score | Status |
|------|------|-------|--------|
`;

    for (const page of CONFIG.pages) {
      const result = results.netlify[page.path];
      const status = result.passed ? '✅ PASS' : '❌ FAIL';
      const score = result.score !== null ? `${result.score}%` : 'N/A';
      markdown += `| ${page.name} | ${page.path} | ${score} | ${status} |\n`;
    }
  }

  markdown += `
## Deployment Comparison

| Page | Cloudflare | Netlify | Match |
|------|------------|---------|-------|
`;

  for (const page of CONFIG.pages) {
    const cf = results.cloudflare[page.path];
    const nl = results.netlify[page.path];
    const match = cf.score === nl?.score ? '✅' : '❌';
    markdown += `| ${page.name} | ${cf.score !== null ? cf.score + '%' : 'N/A'} | ${nl?.score !== null ? nl.score + '%' : 'N/A'} | ${match} |\n`;
  }

  markdown += `
## Next Steps

1. **Review Failed Pages:** Any page scoring >${CONFIG.passThreshold}% needs humanization
2. **Fix Content:** Use the Professional & Direct pattern (see AI_HUMANIZATION_PROCESS.md)
3. **Re-audit:** Run this script again after fixes
4. **Deploy:** Once all pages pass, deploy to production

## Audit Log

- **Auditor:** Automated via Playwright MCP
- **Detector:** undetectableai.pro
- **Threshold:** ${CONFIG.passThreshold}%
- **Pages Checked:** ${CONFIG.pages.length}
- **Deployments:** Cloudflare${CONFIG.netlifyUrl ? ' + Netlify' : ' only'}

---
*This report was automatically generated by the ConvertIQ AI Audit Tool*
`;

  fs.writeFileSync(outputFile, markdown);
  console.log('Report saved:', outputFile);
}

// Export for use as module
module.exports = { runAudit, CONFIG, results };

// Run if called directly
if (require.main === module) {
  runAudit().catch(console.error);
}
