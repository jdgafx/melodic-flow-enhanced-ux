const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://app.aiseo.ai/login');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'aiseo_login.png' });
  console.log('Page Title:', await page.title());
  console.log('Page URL:', page.url());
  const inputs = await page.$$eval('input', inputs => inputs.map(i => ({ type: i.type, name: i.name, placeholder: i.placeholder, id: i.id })));
  console.log('Inputs:', JSON.stringify(inputs, null, 2));
  await browser.close();
})();
