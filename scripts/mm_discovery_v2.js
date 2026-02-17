const { chromium } = require('playwright');
const fs = require('fs');

async function discoverMm(email, password) {
  console.log('🚀 Starting Deep Discovery Bot for MarketMuse...');
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
    
    await page.screenshot({ path: 'mm_discovery_v2.png', fullPage: true });
    
    const interactiveElements = await page.evaluate(() => {
      const all = document.querySelectorAll('a, button, [role="button"], div[class*="card"]');
      return Array.from(all).map(el => ({
        tag: el.tagName,
        text: el.innerText,
        id: el.id,
        classes: el.className,
        rect: el.getBoundingClientRect(),
        attributes: Array.from(el.attributes).map(a => ({ name: a.name, value: a.value }))
      }));
    });

    fs.writeFileSync('scripts/mm_discovery_elements.json', JSON.stringify(interactiveElements, null, 2));
    console.log('💾 Interactive elements saved to scripts/mm_discovery_elements.json');

  } catch (error) {
    console.error('❌ Discovery Error:', error.message);
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  discoverMm("michael@primemarketingexperts.com", "Cherokee6490%%");
}
