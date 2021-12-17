
import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';
import BaseElement from '../base/baseElement.js';

class MainPage extends BasePage {
    get accountMenuBtn() {
        return new Button ($('#navbarAccount'), "Account menu");
    }
    get toLoginBtn() {
        return new Button ($('#navbarLoginButton'), "Login Page open");
    }
    get userProfileBtn() {
        return new Button($('button[aria-label$="profile"]'));
    }
    get closePopupBtn() {
        return new Button ($('button.close-dialog'), "Close popup");
    }
    get accCart() {
        return  new Button ($('button[aria-label="Show the shopping cart"]'), "User's Cart");
    }
    get dismissBtn() {
        //return new Button($('a.cc-btn cc-dismiss'));
        return new Button($('div.cc-compliance'));
    }
    get logoImg() {
        return new Button($('img.logo'));
    }
    get jsArtworkSoldoutImg() {
        return new BaseElement($('img[src$="artwork2.jpg"]'));
    }
    get soldOutMsg() {
        return new BaseElement($('//span[contains(text(), "We are out of stock! Sorry for the inconvenience.")]'));
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
    async openUserProfile() {
        await this.userProfileBtn.click();
    }
    async openCart() {
        await this.accCart.click();
    }
    async closeCockieMessage() {
        this.dismissBtn.click();
    }
    async gotoHomePage() {
        this.logoImg.click();
    }
    async checkSwitchJSartwork() {
        await expect(this.jsArtworkSoldoutImg).toBeExisting();
    }
    async checkLastItem() {
        await expect(this.soldOutMsg).toBeExisting();
    }
}

export default new MainPage();

//$('img.logo')