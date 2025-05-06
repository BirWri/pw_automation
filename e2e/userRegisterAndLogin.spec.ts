import { test, expect } from '@playwright/test';

test('AutomationExerises', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    
    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com')
  });