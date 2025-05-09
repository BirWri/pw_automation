import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Sign Up user, Login User, Delete user', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage= new HomePage(page);
    // Open the URL
    await homePage.page.goto('/');
  
    // Verify that home page is visible
    await expect(homePage.page).toHaveURL('https://automationexercise.com')
  })

  test('Has main logo visible', async ({ page }) => {
    //Verify a chosen element is visible on the home page
    //const mainLogo = page.locator('a>img')
    await expect(homePage.mainLogo).toBeVisible()
  });


  test('Sign up User and Delete user', async ({ page }) => {
    
    // Accept consent and navigate to signup/login page
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    //Verify "New User Signup!" is visible
    await expect(page.locator('text=New User Signup!')).toBeVisible();
    
    // Fill first form
    await homePage.name.click();
    await homePage.name.fill('User1');
    await homePage.email.click();
    await homePage.email.fill('cawap59378@bocapies.com');
    await homePage.signUpButton.click();
    //Verify "ENTER ACCOUNT INFORMATION" is visible
    await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();

    // Fill Signup form
    await homePage.femaleGender.check();
    await homePage.userPassword.click();
    await homePage.userPassword.fill('password1234');

    await homePage.dayOfBirth.selectOption('1');
    await homePage.monthOfBirth.selectOption('1');
    await homePage.yearOfBirth.selectOption('2000');
    await homePage.newsLetter.check();
    await homePage.specialOffers.check();

    await homePage.userFirstName.click();
    await homePage.userFirstName.fill('User');
    await homePage.userFirstName.press('Tab');

    await homePage.userLastName.fill('One');
    await homePage.userLastName.press('Tab');

    await homePage.userCompanyName.fill('Freelance');

    await homePage.userAddressStreet.click();
    await homePage.userAddressStreet.fill('Street 1');
    await homePage.userAddressStreet.press('Tab');
    await homePage.userAddressStreet.click();
    await homePage.userAddressStreet.fill('Street 1, 11');

    await homePage.userCountry.selectOption('United States');
    await homePage.userState.click();
    await homePage.userState.fill('california');
    await homePage.userState.press('Tab');

    await homePage.userCityZipCode.fill('LA');
    await homePage.userZipCode.click();
    await homePage.userZipCode.fill('112');

    await page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();
    await homePage.userMobileNumber.click();
    await homePage.userMobileNumber.fill('22222222');
    await homePage.createAccountbutton.click();

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