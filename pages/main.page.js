import AllureReporter from '@wdio/allure-reporter';
import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';

class MainPage extends BasePage {
    get accountMenuBtn() {
        return new Button ($('#navbarAccount'), "Account menu");
    }
    get toLoginBtn() {
        return new Button ($('#navbarLoginButton'), "Login Page open");
    }
    get closePopupBtn() {
        return new Button ($('button.close-dialog'), "Close popup");
    }
    get accCart() {
        return  new Button ($('button[aria-label="Show the shopping cart"]'), "User's Cart");
    }
//open home page and close cop-up
    async open() {
         await super.open(`http://localhost:3000/#/`);
        await this.closePopupBtn.click();
    }
//click on user account
    async openAccountMenu() {
        await this.accountMenuBtn.click();

    }
    async navigateToLogin() {
        await allure.addStep(`Open login window`);
        await this.toLoginBtn.click();
        
    }
}

export default new MainPage();