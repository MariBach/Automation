
import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';
import BaseElement from '../base/baseElement.js';
import chai from "chai";

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
        //return new BaseElement($('(//span[contains(text(), "Sold Out")])[1]'));
        return new BaseElement($('(//div[@class="mat-grid-tile-content"])[4]'));
    }
    get soldOutMsg() {
        return new BaseElement($('//span[contains(text(), "We are out of stock! Sorry for the inconvenience.")]'));
    }
//open home page and close cop-up
    async open() {
        await super.open(`http://localhost:3000/#/`);
        if (this.closePopupBtn.isClickable()) {
            await this.closePopupBtn.click();
        }
    }
//click on user account
    async openAccountMenu() {
        await allure.addStep(`Open account menu`);
        await this.accountMenuBtn.waitForClickable();
        await this.accountMenuBtn.click();

    }
    async navigateToLogin() {
        await allure.addStep(`Open login window`);
        await this.toLoginBtn.waitForClickable();
        await this.toLoginBtn.click();        
    }
    async openUserProfile() {
        await allure.addStep(`Open user profile page`);
        await this.userProfileBtn.click();
    }
    async openCart() {
        await allure.addStep(`Open cart`);
        await this.accCart.click();
    }
    async closeCockieMessage() {
        this.dismissBtn.click();
    }
    async gotoHomePage() {
        await allure.addStep(`Open login window`);
        this.logoImg.click();
    }
  //  async checkSwitchJSartwork() {
  //      await expect(this.jsArtworkSoldoutImg).toBeExisting();
  //  }
    async checkSwitchLabel() {
        //await chai.expect(this.jsArtworkSoldoutImg).to.equal(`Sold Out\nBest Juice Shop Salesman Artwork\n5000¤`)
        await allure.addStep(`Check 'Sold Out' label`);
        let text = await this.jsArtworkSoldoutImg.getText();
        let label = await text.substring(0, 8);
        //await console.log(label);
        await chai.expect(label).to.equal('Sold Out');
        // await chai.expect(label).to.equal(`Sold Out\nBest Juice Shop Salesman Artwork\n5000¤\nAdd to Basket`);
    }
    
    async checkLastItem() {
        await expect(this.soldOutMsg).toBeExisting();
    }
}

export default new MainPage();

//$('img.logo')
//$x('(//div[@class="mat-grid-tile-content"])[4]')