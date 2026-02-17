const { chromium } = require('playwright');
const fs = require('fs');

async function findApiKey(email, password) {
  console.log('🔍 Searching for hidden API Key in AISEO account...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://app.aiseo.ai/login', { waitUntil: 'networkidle' });
    await page.waitForSelector('#email');
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('button[type="submit"]');
    
    console.log('⏳ Authenticating...');
    await page.waitForTimeout(10000);

    const settingsPaths = [
      'https://app.aiseo.ai/settings/api',
      'https://app.aiseo.ai/settings/api-keys',
      'https://app.aiseo.ai/settings/integrations',
      'https://app.aiseo.ai/settings/profile'
    ];

    for (const url of settingsPaths) {
      console.log(`🌐 Checking ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(3000);
      
      const content = await page.content();
      const apiKeyMatch = content.match(/[0-9a-f]{32,}|sk-[a-zA-Z0-9]{32,}/i);
      
      if (apiKeyMatch) {
        console.log('✅ FOUND API KEY!');
        fs.writeFileSync('scripts/aiseo_key.txt', apiKeyMatch[0]);
        return;
      }
    }
    
    console.log('❌ No API Key found in settings. Sticking with Browser Automation.');

  } catch (error) {
    console.error('❌ Error during Key Hunt:', error.message);
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  const email = process.env.AISEO_EMAIL;
  const password = process.env.AISEO_PASSWORD;
  findApiKey(email, password);
}
