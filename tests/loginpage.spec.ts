import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
test('Login Page title test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();

    let loginPageTitle = await loginPage.getLoginPageTitle();
    expect(loginPageTitle).toBe('Account Login');
   // loginPage.doLogin('pwbatchtest@open.com', 'pw123');
});


test('Login Page Forgotten Password Link test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();

    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
   // loginPage.doLogin('pwbatchtest@open.com', 'pw123');
});

test('Login Test Nominal', async({page})=>{
let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('pwbatchtest@open.com', 'pw123');

})