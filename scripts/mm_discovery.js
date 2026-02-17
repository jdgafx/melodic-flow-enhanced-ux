const { chromium } = require('playwright');
const fs = require('fs');

async function discover(email, password) {
  console.log('🚀 Starting Discovery Bot for MarketMuse...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://app.marketmuse.com/login', { waitUntil: 'networkidle' });
    await page.waitForSelector('#identifier-field');
    await page.fill('#identifier-field', email);
    await page.click('button:has-text("Continue")');
    await page.waitForSelector('#password-field');
    await page.fill('#password-field', password);
    await page.click('button:has-text("Continue")');
    
    console.log('⏳ Waiting for Dashboard...');
    await page.waitForTimeout(20000);
    
    await page.screenshot({ path: 'marketmuse_dashboard_discovery.png', fullPage: true });
    console.log('📸 Dashboard screenshot saved to marketmuse_dashboard_discovery.png');
    
    const links = await page.$$eval('a', as => as.map(a => ({ text: a.innerText, href: a.href })));
    fs.writeFileSync('scripts/mm_links.json', JSON.stringify(links, null, 2));

  } catch (error) {
    console.error('❌ Discovery Error:', error.message);
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  discover("michael@primemarketingexperts.com", "Cherokee6490%%");
}
