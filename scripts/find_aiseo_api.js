const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://aiseo.ai/');
  
  const links = await page.$$eval('a', as => as.map(a => ({ text: a.innerText, href: a.href })));
  const apiLinks = links.filter(l => 
    l.text.toLowerCase().includes('api') || 
    l.text.toLowerCase().includes('dev') ||
    l.href.toLowerCase().includes('api') ||
    l.href.toLowerCase().includes('dev')
  );
  
  console.log('--- API/Developer Links Found ---');
  console.log(JSON.stringify(apiLinks, null, 2));
  
  const commonPaths = ['/api', '/developers', '/api-docs', '/docs/api'];
  console.log('\n--- Checking Common Paths ---');
  for (const path of commonPaths) {
    const url = `https://aiseo.ai${path}`;
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      if (response.status() === 200) {
        console.log(`✅ Found: ${url} (${await page.title()})`);
      } else {
        console.log(`❌ ${url}: Status ${response.status()}`);
      }
    } catch (e) {
      console.log(`❌ ${url}: Error ${e.message}`);
    }
  }
  
  await browser.close();
})();
