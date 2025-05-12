import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';
import { createRandomUser } from '../utils/testUser';
import fs from 'fs';

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

  test('Register new user', async ({ page }) => {
    // Accept consent and navigate to signup/login page
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    //Verify "New User Signup!" is visible
    await expect(page.locator('text=New User Signup!')).toBeVisible();

    //Make testuserdata for registartion
    const user = createRandomUser();
    console.log(user.userName)

    // Fill first form
    await homePage.name.click();
    await homePage.name.fill(user.userName);
    await homePage.email.click();
    await homePage.email.fill(user.userEmail);
    await homePage.signUpButton.click();
    //Verify "ENTER ACCOUNT INFORMATION" is visible
    await page.waitForSelector(`text=ENTER ACCOUNT INFORMATION`);
    //await page.waitForTimeout(2000); // wait for 2 seconds
    await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();

    // Fill Signup form
    await homePage.femaleGender.check();
    await homePage.userPassword.click();
    await homePage.userPassword.fill(user.password);

    await homePage.dayOfBirth.selectOption('1');
    await homePage.monthOfBirth.selectOption('1');
    await homePage.yearOfBirth.selectOption('2000');
    await homePage.newsLetter.check();
    await homePage.specialOffers.check();

    await homePage.userFirstName.click();
    await homePage.userFirstName.fill(user.userFirstName);
    await homePage.userFirstName.press('Tab');

    await homePage.userLastName.fill(user.userLastName);
    await homePage.userLastName.press('Tab');

    await homePage.userCompanyName.fill(user.userCompanyName);

    await homePage.userAddressStreet.click();
    await homePage.userAddressStreet.fill(user.userAddressStreet);
    await homePage.userAddressStreet.press('Tab');
    await homePage.userAddressStreet.click();
    await homePage.userAddressStreet.fill(user.userAddressStreet);

    await homePage.userCountry.selectOption('United States');
    await homePage.userState.click();
    await homePage.userState.fill(user.userState);
    await homePage.userState.press('Tab');

    await homePage.userCityZipCode.fill('LA');
    await homePage.userZipCode.click();
    await homePage.userZipCode.fill(user.userZipCode);

    await page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();
    await homePage.userMobileNumber.click();
    await homePage.userMobileNumber.fill(user.userMobileNumber);
    await homePage.createAccountbutton.click();

    // Verify 'Account Created' is visible
    await expect(page.locator('text=ACCOUNT CREATED')).toBeVisible();
    await homePage.confirmationButton.click();

    // Verify 'Logged in as username' is visible
    await expect(page.locator(`text=Logged in as ${user.userName}`)).toBeVisible();



    // Save the user globally to a JSON file
    fs.writeFileSync('test-user.json', JSON.stringify(user));

    });

})
