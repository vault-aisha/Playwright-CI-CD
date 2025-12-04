import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.beforeEach(async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

test ('Succcessful Login Test', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.Login();
});

test('Unsuccessful Login', async({page})=>{
    const loginPage= new LoginPage(page);
    await loginPage.UnsuccessfullLogin();
});