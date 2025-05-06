import { test, expect } from '@playwright/test';

test('AutomationExerises URl Validation', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    
    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com')
  });


test('Sign up User and delete user', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveURL('https://automationexercise.com')
  await expect(page).toHaveTitle('Automation Exercise')
  
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('User1');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('cawap59378@bocapies.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('password1234');
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('1');
  await page.locator('#years').selectOption('2000');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('User');
  await page.getByRole('textbox', { name: 'First name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('One');
  await page.getByRole('textbox', { name: 'Last name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Freelance');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Street 1');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Street 1, 11');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('california');
  await page.getByRole('textbox', { name: 'State *' }).press('Tab');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('LA');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('112');
  await page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('22222222');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});