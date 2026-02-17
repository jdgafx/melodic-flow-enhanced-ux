const { skill_mcp } = require('../../../../../.config/opencode/skills/playwright-mcp');

/**
 * AI Content Auditor - OpenCode Skill Integration
 * 
 * Usage within OpenCode:
 *   const { auditPage, auditUrls, generateReport } = require('./auditor-skill');
 *   
 *   // Audit single page
 *   const result = await auditPage('https://example.com');
 *   
 *   // Audit multiple pages
 *   const results = await auditUrls([
 *     'https://example.com',
 *     'https://example.com/about'
 *   ]);
 *   
 *   // Generate report
 *   generateReport(results);
 */

const DETECTOR_URL = 'https://www.undetectableai.pro/detector';

async function extractPageContent(url) {
  await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_navigate',
    arguments: { url }
  });

  const extractScript = `() => {
    const body = document.body.cloneNode(true);
    ['nav','footer','script','style','header'].forEach(s => 
      body.querySelectorAll(s).forEach(e => e.remove())
    );
    return (body.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 3000);
  }`;

  const result = await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_evaluate',
    arguments: { function: extractScript }
  });

  return result.text || result;
}

async function checkAIContent(content) {
  await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_navigate',
    arguments: { url: DETECTOR_URL }
  });

  const snapshot = await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_snapshot',
    arguments: {}
  });

  const textboxMatch = snapshot.match(/textbox.*ref=(e\\d+)/);
  if (!textboxMatch) throw new Error('Text input not found');

  await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_type',
    arguments: { ref: textboxMatch[1], text: content }
  });

  const buttonMatch = snapshot.match(/button.*Check for AI.*ref=(e\\d+)/);
  if (!buttonMatch) throw new Error('Check button not found');

  await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_click',
    arguments: { ref: buttonMatch[1], element: 'Check for AI button' }
  });

  await new Promise(r => setTimeout(r, 5000));

  const resultSnapshot = await skill_mcp({
    mcp_name: 'playwright',
    tool_name: 'browser_snapshot',
    arguments: {}
  });

  const scoreMatch = resultSnapshot.match(/(\d+)%/);
  const verdictMatch = resultSnapshot.match(/human-written|likely AI-generated/);

  return {
    aiScore: scoreMatch ? parseInt(scoreMatch[1]) : null,
    verdict: verdictMatch ? verdictMatch[0] : 'unknown'
  };
}

async function auditPage(url, options = {}) {
  const startTime = Date.now();
  
  try {
    const content = await extractPageContent(url);
    const check = await checkAIContent(content);

    return {
      url,
      aiScore: check.aiScore,
      verdict: check.verdict,
      status: check.aiScore <= 4 ? 'PASS' : 'NEEDS_HUMANIZATION',
      contentLength: content.length,
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      url,
      error: error.message,
      status: 'FAILED',
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString()
    };
  }
}

async function auditUrls(urls, options = {}) {
  const results = [];
  
  for (const url of urls) {
    const result = await auditPage(url, options);
    results.push(result);
    
    if (options.delay !== false) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  return results;
}

function generateReport(results) {
  const passCount = results.filter(r => r.status === 'PASS').length;
  const failCount = results.filter(r => r.status === 'NEEDS_HUMANIZATION').length;
  const errorCount = results.filter(r => r.status === 'FAILED').length;

  const sorted = [...results].sort((a, b) => (a.aiScore || 999) - (b.aiScore || 999));

  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║        AI CONTENT AUDIT REPORT                         ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(`\n📊 Summary:`);
  console.log(`   Total: ${results.length} pages`);
  console.log(`   ✅ Pass (≤4% AI): ${passCount}`);
  console.log(`   ⚠️  Needs Humanization: ${failCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  
  console.log(`\n🏆 Ranked Results (Best → Worst):\n`);
  
  sorted.forEach((r, i) => {
    const icon = r.status === 'PASS' ? '✅' : r.status === 'FAILED' ? '❌' : '⚠️';
    const score = r.aiScore !== null ? `${r.aiScore}%`.padStart(3) : 'N/A';
    const url = r.url.replace(/^https?:\/\//, '').padEnd(45);
    console.log(`   ${(i + 1).toString().padStart(2)}. ${icon} ${url} ${score} AI`);
  });

  const needsWork = sorted.filter(r => r.status === 'NEEDS_HUMANIZATION');
  if (needsWork.length > 0) {
    console.log(`\n⚠️  Pages requiring humanization:\n`);
    needsWork.forEach(r => {
      console.log(`   • ${r.url} (${r.aiScore}% AI)`);
    });
  }

  return { summary: { total: results.length, pass: passCount, needsHumanization: failCount, failed: errorCount }, results: sorted };
}

function saveReport(results, filepath) {
  const fs = require('fs');
  const report = generateReport(results);
  fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
  console.log(`\n💾 Report saved to: ${filepath}`);
}

module.exports = {
  auditPage,
  auditUrls,
  generateReport,
  saveReport,
  extractPageContent,
  checkAIContent
};
