import { test, expect } from '../src/fixtures/pagefixtures';
import { beforeEach } from 'node:test';
//import {test} from '../src/fixtures/pf';

//test.beforeEach(async({lPage, homePage})=>{
//     await loginPage.goToLoginPage();
// });


test.beforeEach(async({loginPage, homePage})=>{
    await loginPage.goToLoginPage();
});


test('Login Page title test', async ({loginPage} ) => {
     let loginPageTitle = await loginPage.getLoginPageTitle();
    expect(loginPageTitle).toBe('Account Login');

});



test('Login Page Forgotten Password Link test', async ({loginPage}) => { 
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('Login Test Nominal', async({loginPage, homePage})=>{
   // await loginPage.doLogin('pwbatchtest@open.com', 'pw123');
   await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!); 
   expect(await homePage.getHomePageTitle()).toBe('My Account');
});

/**
 * 
 * page, expect are inbuilt fixtures
 * In below test method we passed page in the async but not expect
 * test('',async({page})=>{
 * expect().toBe();
 * })
 * 
 * expect is not a fixture, is is a globally imported assertion library
 */