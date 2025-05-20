import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { createRandomUser } from '../utils/testUser';

test.describe('Fill Contact Us Form and upload file', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage= new ContactPage(page);
        
        // Open the URL
        await contactPage.page.goto('/');
        await contactPage.consentButton.click();

        //Verify homepage opening
        await expect(contactPage.page).toHaveURL('https://automationexercise.com')
        await page.getByRole('link', { name: 'Contact Us' }).click();
    
        // Verify that home page is visible
        await expect(contactPage.page).toHaveURL('https://automationexercise.com/contact_us')
        await expect(page.locator('text=Get In Touch')).toBeVisible()
    })

    test('Login - successful', async ({ page }) => {
        //Make testuserdata for registartion
        const user = createRandomUser();
        console.log(user.userName)
    
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill(user.userName);
        
        await page.getByRole('textbox', { name: 'Email', exact: true }).click();
        await page.getByRole('textbox', { name: 'Email', exact: true }).fill(user.userEmail);

        await page.getByPlaceholder('Subject').click();
        await page.getByPlaceholder('Subject').fill("Bug report");

        await page.getByPlaceholder('Your Message Here').click();
        await page.getByPlaceholder('Your Message Here').fill("Go to this page and do that");
        await page.getByRole('button', { name: 'Submit' }).click();

    });


})
