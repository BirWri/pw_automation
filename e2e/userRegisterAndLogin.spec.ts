import { test, expect } from '@playwright/test';

test.describe('Sign Up user and Delete user', () => {

  test.beforeEach(async ({ page }) => {
    // Open the URL
    await page.goto('https://automationexercise.com');
  
    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com')
  })

  test('has title', async ({ page }) => {
    //Verify a chosen element is visible on the home page
    const mainLogo = page.locator('a img')
    await expect(mainLogo).toBeVisible()
  });


  test('Sign up User and Delete user', async ({ page }) => {
    
    // Accept consent and navigate to signup/login page
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    //Verify "New User Signup!" is visible
    await expect(page.locator('text=New User Signup!')).toBeVisible();
    
    // Fill first form
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('User1');
    await page.getByRole('textbox', { name: 'Name' }).press('Tab');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('cawap59378@bocapies.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    //Verify "ENTER ACCOUNT INFORMATION" is visible
    await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();

    // Fill Signup form
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

    // Verify 'Account Created' is visible
    await expect(page.locator('text=ACCOUNT CREATED')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();

    // Verify 'Logged in as username' is visible
    await expect(page.locator('text=Logged in as User1')).toBeVisible();
    await page.getByRole('link', { name: ' Delete Account' }).click();
    
    // Verify 'Account DELETED' is visible
    await expect(page.locator('text=ACCOUNT DELETED')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();

    });

})