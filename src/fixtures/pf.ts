

import {test as BaseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';


type pf = {
    lPage: LoginPage,
    hPage: HomePage
}; 


export let test = BaseTest.extend<pf>({

    lPage:async({page},use)=>{

        let lp = new LoginPage(page);
        use(lp);
    }

});