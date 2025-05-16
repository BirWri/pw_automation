import { test, expect } from '@playwright/test';
import fs from 'fs';
import HomePage from '../pages/home.page';

test.describe('Login user, Login with wrong email, Logout user', () => {

    //Make login a module that can be reused in other tests or how to stay logged in..?

const user = JSON.parse(fs.readFileSync('test-user.json', 'utf-8'));
let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage= new HomePage(page);
        // Open the URL
        await homePage.page.goto('/');
        await homePage.consentButton.click();
        await page.getByRole('link', { name: ' Signup / Login' }).click();
    
        // Verify that home page is visible
        await expect(homePage.page).toHaveURL('https://automationexercise.com/login')
        await expect(page.locator('text=Login to your account')).toBeVisible()
    })

    test('Login - successful', async ({ page }) => {
    
        await homePage.loginEmail.click();
        await homePage.loginEmail.fill(user.userEmail);
        await homePage.loginPassword.click();
        await homePage.loginPassword.fill(user.password);
        await homePage.loginButton.click();

        // Check that correct user is logged in
        await expect(page.locator('text=Logged in as')).toContainText(user.userName);
    });

    test('Login - wrong password', async ({ page }) => {
      
        await homePage.loginEmail.click();
        await homePage.loginEmail.fill(user.userEmail);
        await homePage.loginPassword.click();
        await homePage.loginPassword.fill('password12345');
        await homePage.loginButton.click();

        // Check that correct user is logged in
        await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
    });

    test('Login - successful and logout user', async ({ page }) => {
    
        await homePage.loginEmail.click();
        await homePage.loginEmail.fill(user.userEmail);
        await homePage.loginPassword.click();
        await homePage.loginPassword.fill(user.password);
        await homePage.loginButton.click();

        // Check that correct user is logged in
        await expect(page.locator('text=Logged in as')).toContainText(user.userName);

        await page.getByRole('link', { name: 'logout' }).click();
        await expect(homePage.page).toHaveURL('https://automationexercise.com/login');
        await expect(page.locator('text=Login to your account')).toBeVisible();


    });

});