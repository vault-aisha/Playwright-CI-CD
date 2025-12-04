import {test, expect, Locator, Page} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {TestConfig} from '../test.config';
import { RegistrationPage } from "../pages/RegistrationPage";
test.describe.parallel('Registration Test Suite', ()=>{
    let registrationPage: RegistrationPage;
    let loginPage: LoginPage;
    let homePage: HomePage;
    const config = new TestConfig();

    test.beforeEach(async({page})=>{
        registrationPage = new RegistrationPage(page);
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await registrationPage.navigateToRegistrationPage();
    });

    test('Successful Registration Test', async({page})=>{
        await registrationPage.Register();
        // Additional assertions can be added here to verify successful registration
    });
});