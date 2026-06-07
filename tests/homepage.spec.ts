import {test, expect} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage'

let loginPage:LoginPage;
let homePage:HomePage;

test.beforeEach(async({page})=>{
loginPage = new LoginPage(page);
await loginPage.goToLoginPage();
await loginPage.doLogin('pwbatchtest@open.com', 'pw123');
homePage = new HomePage(page);
});


test('HomePage Title Test', async({})=>{
expect(await homePage.getHomePageTitle()).toBe('My Account');
});

test('HomePage headers exist test', async()=>{
let headersList = await homePage.getHomePageHeaders();
expect.soft(headersList).toHaveLength(4);
expect.soft(headersList).toEqual(['My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
]);
})

