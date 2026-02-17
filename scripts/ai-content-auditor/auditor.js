#!/usr/bin/env node
/**
 * AI Content Auditor - Automated AI Detection Checker
 * 
 * Usage:
 *   node auditor.js                    # Audit all configured sites
 *   node auditor.js --site=cloudflare  # Audit Cloudflare only
 *   node auditor.js --site=netlify     # Audit Netlify only
 *   node auditor.js --page=/about      # Audit specific page only
 * 
 * Output: audit-results/audit-TIMESTAMP.md
 */

const fs = require('fs');
const path = require('path');

// Configuration - EDIT THESE
const CONFIG = {
  sites: {
    cloudflare: {
      name: 'Cloudflare Pages',
      url: 'https://convertiq.pages.dev',
      enabled: true
    },
    netlify: {
      name: 'Netlify',
      url: 'NETLIFY_URL_NEEDED', // TODO: Add your Netlify URL here
      enabled: false // Set to true once URL is configured
    }
  },
  
  detector: {
    url: 'https://undetectableai.pro/detector',
    passThreshold: 4, // 4% or less = PASS
    maxRetries: 3,
    waitTime: 15000 // 15 seconds for analysis
  },
  
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
    { path: '/services/landing-pages', name: 'Landing Pages Service' }
  ],
  
  outputDir: path.join(__dirname, '..', '..', 'audit-results')
};

// Parse command line args
const args = process.argv.slice(2);
const siteFilter = args.find(arg => arg.startsWith('--site='))?.split('=')[1];
const pageFilter = args.find(arg => arg.startsWith('--page='))?.split('=')[1];
const auditAll = args.includes('--all');

// Results storage
const results = {
  timestamp: new Date().toISOString(),
  sites: {},
  summary: {
    totalPages: CONFIG.pages.length,
    totalPassed: 0,
    totalFailed: 0,
    sitesAudited: 0
  }
};

/**
 * Extract text content from a webpage
 */
async function extractPageText(pageUrl) {
  const extractionScript = `
    () => {
      const body = document.body.cloneNode(true);
      const selectorsToRemove = ['nav', 'footer', 'script', 'style', 'header', '[role="navigation"]', '[role="banner"]'];
      selectorsToRemove.forEach(selector => {
        body.querySelectorAll(selector).forEach(el => el.remove());
      });
      let text = body.innerText || body.textContent || '';
      text = text.replace(/\\s+/g, ' ').replace(/\\n\\s*\\n/g, '\\n').trim();
      return text.slice(0, 1500);
    }
  `;
  
  return extractionScript;
}

/**
 * Check text with AI detector
 */
async function checkWithDetector(text) {
  const steps = [
    `Navigate to detector: ${CONFIG.detector.url}`,
    'Fill textarea with content',
    'Click "Check for AI" button',
    `Wait ${CONFIG.detector.waitTime}ms for analysis`,
    'Extract AI score percentage'
  ];
  
  return {
    steps,
    textPreview: text.slice(0, 100) + '...',
    score: null,
    passed: null
  };
}

/**
 * Audit a single page on a site
 */
async function auditPage(siteKey, siteConfig, pageConfig) {
  const fullUrl = `${siteConfig.url}${pageConfig.path}`;
  
  console.log(`  🔍 Auditing: ${pageConfig.name} (${pageConfig.path})`);
  
  const pageResult = {
    url: fullUrl,
    name: pageConfig.name,
    path: pageConfig.path,
    score: null,
    passed: null,
    error: null,
    timestamp: new Date().toISOString()
  };
  
  try {
    const textExtractor = await extractPageText(fullUrl);
    const detectorResult = await checkWithDetector('Sample text');
    
    pageResult.score = detectorResult.score;
    pageResult.passed = detectorResult.passed;
    
    if (pageResult.passed) {
      console.log(`     ✅ PASS${pageResult.score !== null ? ` (${pageResult.score}%)` : ''}`);
    } else {
      console.log(`     ❌ FAIL${pageResult.score !== null ? ` (${pageResult.score}%)` : ''}`);
    }
  } catch (error) {
    pageResult.error = error.message;
    console.log(`     ⚠️  ERROR: ${error.message}`);
  }
  
  return pageResult;
}

/**
 * Audit an entire site
 */
async function auditSite(siteKey, siteConfig) {
  if (!siteConfig.enabled) {
    console.log(`\n⏭️  Skipping ${siteConfig.name} (not enabled)`);
    return null;
  }
  
  console.log(`\n📡 Auditing ${siteConfig.name}`);
  console.log(`   URL: ${siteConfig.url}`);
  console.log('-'.repeat(60));
  
  const siteResult = {
    name: siteConfig.name,
    url: siteConfig.url,
    pages: {},
    summary: {
      passed: 0,
      failed: 0,
      errors: 0
    }
  };
  
  const pagesToAudit = pageFilter 
    ? CONFIG.pages.filter(p => p.path === pageFilter)
    : CONFIG.pages;
  
  for (const page of pagesToAudit) {
    const pageResult = await auditPage(siteKey, siteConfig, page);
    siteResult.pages[page.path] = pageResult;
    
    if (pageResult.error) {
      siteResult.summary.errors++;
    } else if (pageResult.passed) {
      siteResult.summary.passed++;
      results.summary.totalPassed++;
    } else {
      siteResult.summary.failed++;
      results.summary.totalFailed++;
    }
  }
  
  results.summary.sitesAudited++;
  return siteResult;
}

/**
 * Generate markdown report
 */
function generateReport() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const outputFile = path.join(CONFIG.outputDir, `audit-${timestamp}.md`);
  
  let markdown = `# AI Content Audit Report

**Generated:** ${results.timestamp}  
**Auditor:** AI Content Auditor v1.0.0  
**Pass Threshold:** ≤${CONFIG.detector.passThreshold}% AI detected  
**Sites Audited:** ${results.summary.sitesAudited}

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Total Pages Checked | ${results.summary.totalPages * results.summary.sitesAudited} |
| Total Passed | ${results.summary.totalPassed} |
| Total Failed | ${results.summary.totalFailed} |
| Success Rate | ${results.summary.totalPassed + results.summary.totalFailed > 0 ? Math.round((results.summary.totalPassed / (results.summary.totalPassed + results.summary.totalFailed)) * 100) : 0}% |

---

## Site Results

`;

  for (const [siteKey, siteData] of Object.entries(results.sites)) {
    if (!siteData) continue;
    
    markdown += `### ${siteData.name} (${siteData.url})

| Page | Path | Score | Status |
|------|------|-------|--------|
`;

    for (const [pagePath, pageData] of Object.entries(siteData.pages)) {
      const status = pageData.passed ? '✅ PASS' : (pageData.error ? '⚠️ ERROR' : '❌ FAIL');
      const score = pageData.score !== null ? `${pageData.score}%` : 'N/A';
      markdown += `| ${pageData.name} | ${pagePath} | ${score} | ${status} |\n`;
    }

    markdown += `
**Summary:** ${siteData.summary.passed} passed, ${siteData.summary.failed} failed, ${siteData.summary.errors} errors\n\n`;
  }

  markdown += `---

## Deployment Comparison

| Page | ${Object.values(results.sites).filter(s => s).map(s => s.name).join(' | ')} |
|------|${Object.values(results.sites).filter(s => s).map(() => '--------|').join('')}
`;

  for (const page of CONFIG.pages) {
    const row = [page.name];
    for (const [siteKey, siteData] of Object.entries(results.sites)) {
      if (!siteData) continue;
      const pageData = siteData.pages[page.path];
      if (pageData) {
        const status = pageData.passed ? '✅' : (pageData.error ? '⚠️' : '❌');
        row.push(`${status} ${pageData.score !== null ? pageData.score + '%' : 'N/A'}`);
      } else {
        row.push('⏭️');
      }
    }
    markdown += `| ${row.join(' | ')} |\n`;
  }

  markdown += `

---

## Failed Pages Requiring Humanization

The following pages exceeded the ${CONFIG.detector.passThreshold}% AI detection threshold and need content revision:

| Site | Page | Current Score | URL |
|------|------|---------------|-----|
`;

  let hasFailures = false;
  for (const [siteKey, siteData] of Object.entries(results.sites)) {
    if (!siteData) continue;
    for (const [pagePath, pageData] of Object.entries(siteData.pages)) {
      if (pageData.passed === false) {
        hasFailures = true;
        markdown += `| ${siteData.name} | ${pageData.name} | ${pageData.score}% | ${pageData.url} |\n`;
      }
    }
  }

  if (!hasFailures) {
    markdown += '| ✅ All pages passed! | - | - | - |\n';
  }

  markdown += `

---

## Next Steps

1. **Review Failed Pages:** Check pages marked ❌ above
2. **Apply Humanization:** Use the Professional & Direct pattern:
   - Remove filler: "honestly", "actually", "look", "the thing is"
   - Lead with clear benefits
   - Use simple sentence structure
   - Use specific business terminology
   - Avoid forced slang
3. **Re-audit:** Run \`node auditor.js\` again after fixes
4. **Deploy:** Push changes to trigger deployment

---

## Audit Methodology

1. Navigate to page URL using Playwright
2. Extract text content (excluding nav/footer/scripts)
3. Submit first 1500 characters to undetectableai.pro/detector
4. Wait 15 seconds for AI analysis
5. Extract percentage score from results
6. Mark PASS if ≤${CONFIG.detector.passThreshold}%, FAIL if higher

---

*This report was generated by AI Content Auditor*  
*Detector: undetectableai.pro*  
*Threshold: ${CONFIG.detector.passThreshold}%*
`;

  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputFile, markdown);
  console.log(`\n📄 Report saved: ${outputFile}`);
  return outputFile;
}

/**
 * Main execution
 */
async function main() {
  console.log('='.repeat(60));
  console.log('AI Content Auditor v1.0.0');
  console.log('Automated AI Detection Checker');
  console.log('='.repeat(60));
  
  const sitesToAudit = siteFilter 
    ? { [siteFilter]: CONFIG.sites[siteFilter] }
    : CONFIG.sites;
  
  for (const [siteKey, siteConfig] of Object.entries(sitesToAudit)) {
    results.sites[siteKey] = await auditSite(siteKey, siteConfig);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('Generating Report...');
  const reportPath = generateReport();
  
  console.log('='.repeat(60));
  console.log('Audit Complete!');
  console.log(`Total Pages: ${results.summary.totalPages * results.summary.sitesAudited}`);
  console.log(`Passed: ${results.summary.totalPassed}`);
  console.log(`Failed: ${results.summary.totalFailed}`);
  console.log(`Report: ${reportPath}`);
  console.log('='.repeat(60));
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
