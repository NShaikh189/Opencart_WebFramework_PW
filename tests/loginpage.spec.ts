import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
test('Login Page test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    let loginPageTitle = await loginPage.getLoginPageTitle();
    expect(loginPageTitle).toBe('Account Login');
   // loginPage.doLogin('pwbatchtest@open.com', 'pw123');
});git 