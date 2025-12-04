import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { expect, test } from '@playwright/test';

test.beforeEach(async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

test ('Validate Home Page Elements after Login', async({page})=>{
    const homePage = new HomePage(page);
    await homePage.validateHomePage();
});