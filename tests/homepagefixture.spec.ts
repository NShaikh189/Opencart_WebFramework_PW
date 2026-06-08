import {test, expect} from '../src/fixtures/pagefixtures'

test.beforeEach(async({loginPage})=>{
await loginPage.goToLoginPage();
await loginPage.doLogin('pwbatchtest@open.com', 'pw123');
});


test('HomePage Title Test', async({homePage})=>{
expect(await homePage.getHomePageTitle()).toBe('My Account');
});

test('HomePage headers exist test', async({homePage})=>{
let headersList = await homePage.getHomePageHeaders();
expect.soft(headersList).toHaveLength(4);
expect.soft(headersList).toEqual(['My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
]);
})

