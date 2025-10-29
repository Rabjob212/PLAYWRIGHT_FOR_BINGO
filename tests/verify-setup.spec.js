const { test, expect } = require('@playwright/test');

test.describe('Playwright Setup Verification', () => {
  test('should verify Playwright is working - browser launches successfully', async ({ page }) => {
    // Test that Playwright can launch a browser and navigate to a data URL
    // This proves the framework is working without requiring network access
    await page.goto('data:text/html,<html><head><title>Test Page</title></head><body><h1>Playwright Works!</h1><p>Browser launched successfully</p></body></html>');
    
    // Verify we can interact with the page
    const heading = page.locator('h1');
    await expect(heading).toContainText('Playwright Works!');
    
    // Verify we can find the paragraph
    const paragraph = page.locator('p');
    await expect(paragraph).toContainText('Browser launched successfully');
    
    console.log('✓ Playwright is working correctly!');
    console.log('✓ Browser launches and can navigate to pages');
    console.log('✓ Page interactions work as expected');
  });
  
  test('should verify page title and basic DOM operations', async ({ page }) => {
    await page.goto('data:text/html,<html><head><title>DOM Test</title></head><body><div id="content">Test Content</div><button>Click Me</button></body></html>');
    
    // Verify page title
    await expect(page).toHaveTitle('DOM Test');
    
    // Verify we can find elements
    const content = page.locator('#content');
    await expect(content).toBeVisible();
    await expect(content).toContainText('Test Content');
    
    // Verify we can interact with elements
    const button = page.locator('button');
    await expect(button).toBeVisible();
    await expect(button).toContainText('Click Me');
    
    console.log('✓ DOM operations work correctly');
    console.log('✓ Element selection and assertions work');
  });
});
