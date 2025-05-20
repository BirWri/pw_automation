import {Page, Locator} from '@playwright/test';

class ContactPage {
    page: Page;
    consentButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.consentButton = page.getByRole('button', { name: 'Consent' })
    }


}
export default ContactPage;