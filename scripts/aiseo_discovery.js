const { chromium } = require('playwright');
const fs = require('fs');

async function discoverAiseo(email, password) {
  console.log('🚀 Starting Discovery Bot for AISEO...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    console.log('🔗 Navigating to AISEO login...');
    await page.goto('https://app.aiseo.ai/login', { waitUntil: 'networkidle' });
    
    await page.waitForSelector('#email');
    await page.type('#email', email, { delay: 100 });
    await page.type('#password', password, { delay: 100 });
    
    console.log('📸 Screenshot before login attempt...');
    await page.screenshot({ path: 'aiseo_discovery_pre_login.png' });

    console.log('🖱️ Attempting click on login button...');
    const loginBtn = await page.waitForSelector('button[type="submit"]');
    await loginBtn.click();
    
    console.log('⏳ Waiting for redirect/loading...');
    await page.waitForTimeout(15000);
    
    await page.screenshot({ path: 'aiseo_discovery_post_login.png', fullPage: true });
    console.log('📸 Dashboard screenshot saved to aiseo_discovery_post_login.png');
    
    const elements = await page.evaluate(() => {
      const all = document.querySelectorAll('a, button, input');
      return Array.from(all).map(el => ({
        tag: el.tagName,
        text: el.innerText || el.value,
        id: el.id,
        className: el.className,
        href: el.href || null,
        type: el.type || null
      }));
    });
    
    fs.writeFileSync('scripts/aiseo_discovery_elements.json', JSON.stringify(elements, null, 2));
    console.log('💾 Elements saved to scripts/aiseo_discovery_elements.json');

  } catch (error) {
    console.error('❌ Discovery Error:', error.message);
    await page.screenshot({ path: 'aiseo_discovery_error.png' });
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  discoverAiseo("michael@primemarketingexperts.com", "Cherokee6490%%");
}
