import { test, expect } from '@playwright/test';
import fs from 'fs';
import HomePage from '../pages/home.page';

const user = JSON.parse(fs.readFileSync('test-user.json', 'utf-8'));
let homePage: HomePage;

test('test', async ({ page }) => {
homePage= new HomePage(page);
    await page.goto('https://www.automationexercise.com/');
    await homePage.consentButton.click();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await homePage.loginEmail.click();
    await homePage.loginEmail.fill(user.userEmail);
    await homePage.loginPassword.click();
    await homePage.loginPassword.fill(user.password);
    await homePage.loginButton.click();

    // Check that correct user is logged in
    await expect(page.locator('text=Logged in as')).toContainText(user.userName);
});