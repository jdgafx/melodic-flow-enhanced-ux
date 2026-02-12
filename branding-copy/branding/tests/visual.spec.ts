import { test, expect } from '@playwright/test';

test.describe('Visual Layout Verification', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    // Wait for the app to mount
    await page.waitForSelector('#root');
  });

  test('background canvas should be present and visible', async ({ page }) => {
    // Locate the background container
    const background = page.locator('.fixed.inset-0.w-full.h-full.z-0');
    await expect(background).toBeVisible();
    
    // Locate the canvas inside
    const canvas = background.locator('canvas');
    await expect(canvas).toBeAttached();
  });

  test('main content should be visible above background', async ({ page }) => {
    // Check Hero Headline
    const headline = page.locator('h1').first();
    await expect(headline).toBeVisible();
    
    // Check z-index stacking context
    // We expect main content to have a higher stacking context (z-10) than background (z-0)
    const mainContent = page.locator('main');
    await expect(mainContent).toHaveCSS('z-index', '10');
    
    const background = page.locator('.fixed.inset-0');
    await expect(background).toHaveCSS('z-index', '0');
  });

  test('navigation should be accessible', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveText(/AMP/);
  });
  
  test('should take a screenshot', async ({ page }) => {
    // Ensure fonts and animations are somewhat settled
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'home-page-visual.png', fullPage: true });
  });

});