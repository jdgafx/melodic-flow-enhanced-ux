const { auditPage, auditUrls, generateReport, saveReport } = require('./auditor-skill');

const TEST_URLS = [
  'https://convertiq.pages.dev/',
  'https://convertiq.pages.dev/about',
  'https://convertiq.pages.dev/services',
  'https://convertiq.pages.dev/pricing'
];

async function runTests() {
  console.log('🧪 Testing AI Content Auditor...\n');

  console.log('Test 1: Single page audit');
  console.log('═══════════════════════════════════════');
  const singleResult = await auditPage('https://convertiq.pages.dev/');
  console.log('Result:', singleResult);
  console.log();

  console.log('Test 2: Batch audit (2 pages)');
  console.log('═══════════════════════════════════════');
  const batchResults = await auditUrls(TEST_URLS.slice(0, 2));
  console.log(`Audited ${batchResults.length} pages`);
  console.log();

  console.log('Test 3: Generate report');
  console.log('═══════════════════════════════════════');
  generateReport(batchResults);
  console.log();

  console.log('✅ All tests completed!');
}

if (require.main === module) {
  runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
  });
}

module.exports = { runTests };
