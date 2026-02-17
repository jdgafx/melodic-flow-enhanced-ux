const { chromium } = require('playwright');
const fs = require('fs');

async function humanizeWithAISEO(email, password, contentMapPath) {
  console.log('🚀 Starting AISEO Humanizer Bot (v5 - Direct Nav)...');
  
  const contentMap = JSON.parse(fs.readFileSync(contentMapPath, 'utf8'));
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    console.log('🔗 Navigating to login...');
    await page.goto('https://app.aiseo.ai/login', { waitUntil: 'networkidle' });
    
    await page.waitForSelector('#email');
    await page.fill('#email', email);
    await page.fill('#password', password);
    
    console.log('🖱️ Clicking login button...');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(5000);
    await page.keyboard.press('Enter');
    
    console.log('⏳ Waiting for app state...');
    await page.waitForTimeout(15000);
    
    const finalResults = {};

    for (const [filePath, data] of Object.entries(contentMap)) {
      console.log(`📝 Processing ${filePath}...`);
      finalResults[filePath] = { original: [], humanized: [], scores: [] };
      
      for (const block of data.blocks) {
        if (block.length < 50) continue;

        console.log(`  🔸 Humanizing block (${block.length} chars)...`);
        await page.goto('https://app.aiseo.ai/ai-tools/humanize-ai-text', { waitUntil: 'networkidle' });
        
        await page.waitForSelector('textarea', { timeout: 30000 });
        await page.fill('textarea', block);
        
        await page.waitForTimeout(2000);
        
        const btn = await page.waitForSelector('button:has-text("Humanize"), button.bg-primary', { timeout: 10000 });
        await btn.click();
        
        console.log('    ⏳ Waiting for score...');
        await page.waitForSelector('.human-score-value, .result-text, [class*="score"]', { timeout: 120000 });
        
        const humanizedText = await page.evaluate(() => {
           return document.querySelector('.result-text')?.innerText || document.querySelector('[class*="result"]')?.innerText || '';
        });
        
        const score = await page.evaluate(() => {
           const el = document.querySelector('.human-score-value') || document.querySelector('[class*="score"]');
           return el ? parseInt(el.innerText.replace(/[^0-9]/g, '')) : 0;
        });
        
        console.log(`    ✨ Done. Score: ${score}%`);
        finalResults[filePath].original.push(block);
        finalResults[filePath].humanized.push(humanizedText || block);
        finalResults[filePath].scores.push(score);
        
        await page.waitForTimeout(3000);
      }
    }

    fs.writeFileSync('scripts/aiseo_final_report.json', JSON.stringify(finalResults, null, 2));
    console.log('💾 Report saved to scripts/aiseo_final_report.json');

  } catch (error) {
    console.error('❌ AISEO Bot Error:', error.message);
    await page.screenshot({ path: 'aiseo_v5_error.png' });
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  const email = process.env.AISEO_EMAIL;
  const password = process.env.AISEO_PASSWORD;
  const mapPath = process.argv[2] || 'scripts/content_map.json';
  humanizeWithAISEO(email, password, mapPath);
}
