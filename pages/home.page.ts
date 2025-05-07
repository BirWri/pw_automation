import {Page, Locator} from '@playwright/test'

class HomePage {

    page: Page;
    mainLogo: Locator;

    constructor(page:Page){
        this.page = page;
        this.mainLogo = page.locator('a img')
    }

}