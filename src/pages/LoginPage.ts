import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

class LoginPage extends BasePage{

    //readonly used for constants restrict the modification of the locators
    //private restrict accessibility outside class
    
    //private locators
    private readonly emailID:Locator;
    private readonly password:Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPasswordLink: Locator;
    private readonly logo:Locator;


    //initialize the locators
    constructor(page: Page ){
        super(page);
        this.emailID = page.getByRole('textbox',{name: 'E-Mail Address'});
        this.password = page.getByRole('textbox',{name: 'Password'});
        this.loginBtn = page.getByRole('button',{name: 'Login'});
        this.forgottenPasswordLink = page.getByRole('link',{name: 'Fogotten Password'}).first();
        this.logo = page.getByAltText('naveenopencart');
    }


    //public methods
    async goToLoginPage():Promise<void>
    {
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginPageTitle(): Promise<string>
    {
        return await this.page.title();
    }

    async isForgotPwdLinkExist(): Promise<boolean>
    {
        return await this.forgottenPasswordLink.isVisible();
    }

    async doLogin(username:string, password: string): Promise<void>
    {
        console.log(`user creds : ${username} : ${password}`);
        await this.emailID.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}