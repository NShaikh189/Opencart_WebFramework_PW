//Repository for all the Page objects


import {test as BaseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CsvHelper } from '../utils/csvHelper';


//define the type for page fixtures:
type pageFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    testData: Record<string,string>[];
};


//extend Playwright base test: with generics for the type pageFixtures
export let test = BaseTest.extend<pageFixtures>({
    //annonumous arrow function with function expression and inbuild call back function 'use'

    loginPage: async({page}, use)=>{
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async({page},use)=>{
        let homePage = new HomePage(page);
        await use(homePage);
    },


    testData: async({},use)=>{
        let testData = CsvHelper.readCSV('src/data/logindata.csv');
        await use(testData);
    }
});

export {expect} from'@playwright/test';