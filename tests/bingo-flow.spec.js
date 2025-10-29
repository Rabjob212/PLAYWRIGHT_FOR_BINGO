const { test, expect } = require('@playwright/test');

test.describe('BINGO Admin and Web Flow Tests', () => {
  const ADMIN_URL = 'https://admin.dev.gamecoms.net/';
  const WEB_URL = 'https://release-layout-2.dev.gamecoms.net/';

  test('should navigate between admin and web sites', async ({ page }) => {
    // Step 1: Navigate to Admin site
    await test.step('Open Admin site', async () => {
      await page.goto(ADMIN_URL);
      await page.waitForLoadState('networkidle');
      
      // Take a screenshot of the admin page
      await page.screenshot({ path: 'test-results/admin-page.png' });
      
      // Verify we're on the admin page
      expect(page.url()).toContain('admin.dev.gamecoms.net');
    });

    // Step 2: Navigate to Web site
    await test.step('Open Web site', async () => {
      await page.goto(WEB_URL);
      await page.waitForLoadState('networkidle');
      
      // Take a screenshot of the web page
      await page.screenshot({ path: 'test-results/web-page.png' });
      
      // Verify we're on the web page
      expect(page.url()).toContain('release-layout-2.dev.gamecoms.net');
    });
  });

  test('should load admin site successfully', async ({ page }) => {
    await page.goto(ADMIN_URL);
    await page.waitForLoadState('networkidle');
    
    // Verify the page loaded
    expect(page.url()).toContain('admin.dev.gamecoms.net');
    
    // Take a screenshot
    await page.screenshot({ path: 'test-results/admin-site-loaded.png' });
  });

  test('should load web site successfully', async ({ page }) => {
    await page.goto(WEB_URL);
    await page.waitForLoadState('networkidle');
    
    // Verify the page loaded
    expect(page.url()).toContain('release-layout-2.dev.gamecoms.net');
    
    // Take a screenshot
    await page.screenshot({ path: 'test-results/web-site-loaded.png' });
  });
});
