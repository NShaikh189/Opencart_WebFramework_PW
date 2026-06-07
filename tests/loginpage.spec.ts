import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { beforeEach } from 'node:test';
import { HomePage } from '../src/pages/HomePage';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage = new HomePage(page);
});


test('Login Page title test', async ( ) => {
     let loginPageTitle = await loginPage.getLoginPageTitle();
    expect(loginPageTitle).toBe('Account Login');

});



test('Login Page Forgotten Password Link test', async () => { 
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('Login Test Nominal', async()=>{
    await loginPage.doLogin('pwbatchtest@open.com', 'pw123');
    expect(await homePage.getHomePageTitle()).toBe('My Accountt');
});