const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  console.log('Navigating to MarketMuse...');
  await page.goto('https://app.marketmuse.com/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'marketmuse_login_debug.png' });
  console.log('Title:', await page.title());
  console.log('URL:', page.url());
  const inputs = await page.$$eval('input', inputs => inputs.map(i => ({ type: i.type, name: i.name, placeholder: i.placeholder, id: i.id, outerHTML: i.outerHTML })));
  console.log('Inputs:', JSON.stringify(inputs, null, 2));
  await browser.close();
})();
