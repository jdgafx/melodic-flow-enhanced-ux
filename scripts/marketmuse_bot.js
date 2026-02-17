const { chromium } = require('playwright');
const fs = require('fs');

async function runMarketMuseAudit(email, password, contentMapPath) {
  console.log('🚀 Starting MarketMuse SEO Bot (v5 - Final Surgical Strike)...');
  
  const contentMap = JSON.parse(fs.readFileSync(contentMapPath, 'utf8'));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('🔗 Navigating to login...');
    await page.goto('https://app.marketmuse.com/login', { waitUntil: 'networkidle' });
    
    await page.waitForSelector('#identifier-field');
    await page.fill('#identifier-field', email);
    await page.click('button:has-text("Continue")');
    await page.waitForSelector('#password-field');
    await page.fill('#password-field', password);
    await page.click('button:has-text("Continue")');
    
    console.log('⏳ Waiting for dashboard...');
    await page.waitForSelector('text=Select a Workflow', { timeout: 60000 });
    console.log('✅ Logged into MarketMuse');

    const results = {};
    for (const [filePath, data] of Object.entries(contentMap)) {
      console.log(`🔍 Auditing SEO for ${filePath}...`);
      
      await page.goto('https://app.marketmuse.com/applications/optimize', { waitUntil: 'load' });
      await page.waitForTimeout(10000); 

      const textarea = await page.waitForSelector('textarea', { timeout: 30000 });
      await textarea.fill(data.full_text);
      
      const subjectInput = await page.waitForSelector('input[placeholder*="subject"], input[id*="subject"]', { timeout: 10000 });
      await subjectInput.fill(data.topic || 'General');
      
      console.log('  ⚡ Clicking Run...');
      await page.click('button:has-text("Run")');
      
      console.log('  ⏳ Waiting for content score (Max 2 mins)...');
      await page.waitForSelector('.content-score-value', { timeout: 120000 });
      
      const score = await page.innerText('.content-score-value');
      const target = await page.innerText('.target-score-value');
      
      results[filePath] = { score, target };
      console.log(`  ✅ Score Received: ${score}/${target}`);
      
      fs.writeFileSync('scripts/marketmuse_progress_report.json', JSON.stringify(results, null, 2));
    }

    fs.writeFileSync('scripts/marketmuse_final_report.json', JSON.stringify(results, null, 2));
    console.log('💾 ALL SEO SCORES SAVED to scripts/marketmuse_final_report.json');
    
  } catch (error) {
    console.error('❌ MarketMuse Bot Error:', error.message);
    await page.screenshot({ path: 'marketmuse_v5_error.png' });
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  const email = process.env.MARKETMUSE_EMAIL;
  const password = process.env.MARKETMUSE_PASSWORD;
  runMarketMuseAudit(email, password, process.argv[2] || 'scripts/content_map.json');
}
