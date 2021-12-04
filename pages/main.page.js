import BasePage from '../base/base.page.js';
class MainPage extends BasePage {
    get accountMenuBtn() {
        return $('#navbarAccount');
    }
    get loginBtn() {
        return $('#navbarLoginButton');
    }
    get closePopupBtn() {
        return $('button.close-dialog');
    }
    get accCart() {
        return $('button[aria-label="Show the shopping cart"]');
    }

    async open() {
        await super.open(`http://localhost:3000/#/`);
        await this.closePopupBtn.click();
    }

    async openAccountMenu() {
        await this.accountMenuBtn.click();

    }
    async navigateToLogin() {        
        await this.loginBtn.click();
        
    }
}

export default new MainPage();