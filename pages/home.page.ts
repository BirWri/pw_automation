import {Page, Locator} from '@playwright/test'

class HomePage {

    //TODO1 SignUp user data for user that will be deleted right away
    //TODO2 Login user data for existing user and correct data
    //TODO3 Login user data for existing user INCORRECT DATA
    //TODO4 Signup user data with existing email

    page: Page;
    mainLogo: Locator;
    name: Locator;
    email: Locator;
    signUpButton: Locator;
    userPassword: Locator;
    maleGender: Locator;
    femaleGender: Locator;
    dayOfBirth: Locator;
    monthOfBirth: Locator;
    yearOfBirth: Locator;
    newsLetter: Locator;
    specialOffers:Locator;
    userFirstName:Locator;
    userLastName:Locator;
    userCompanyName:Locator;
    userAddressStreet:Locator;
    userCountry:Locator;
    userState:Locator;
    userCityZipCode: Locator;
    userZipCode:Locator;
    userMobileNumber:Locator;
    createAccountbutton:Locator;
    confirmationButton: Locator;
    deleteUserButton:Locator;


    constructor(page:Page){
        this.page = page;
        this.mainLogo = page.locator('a>img')
        this.name = page.getByRole('textbox', { name: 'Name' })
        this.email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signUpButton = page.getByRole('button', { name: 'Signup' })
        this.userPassword = page.getByRole('textbox', { name: 'Password *' })
        this.maleGender = page.getByRole('radio', { name: 'Mr.' })
        this.femaleGender = page.getByRole('radio', { name: 'Mrs.' })
        this.dayOfBirth = page.locator('#days')
        this.monthOfBirth = page.locator('#months')
        this.yearOfBirth = page.locator('#years')
        this.newsLetter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })
        this.specialOffers = page.getByRole('checkbox', { name: 'Receive special offers from' })
        this.userFirstName = page.getByRole('textbox', { name: 'First name *' })
        this.userLastName = page.getByRole('textbox', { name: 'Last name *' })
        this.userCompanyName = page.getByRole('textbox', { name: 'Company', exact: true })
        this.userAddressStreet = page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.userCountry = page.getByLabel('Country *')
        this.userState = page.getByRole('textbox', { name: 'State *' })
        this.userCityZipCode = page.getByRole('textbox', { name: 'City * Zipcode *' })
        this.userZipCode = page.locator('#zipcode')
        this.userMobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' })
        this.createAccountbutton = page.getByRole('button', { name: 'Create Account' })
        this.confirmationButton = page.getByRole('link', { name: 'Continue' })
        this.deleteUserButton = page.getByRole('link', { name: ' Delete Account' })
    }

}

export default HomePage;