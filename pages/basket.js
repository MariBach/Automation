import BaseElement from "../base/baseElement.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js"

class BasketPage extends BasePage {
    get applePomance() {
        return new Button($('(//button[contains(@class, "btn-basket")])[1]'));
    }
    get appleJuice() {
        return new Button($('(//button[contains(@class, "btn-basket")])[0]'));
    }
    get jsArtwork() {
        return new Button($('(//button[contains(@class, "btn-basket")])[4]'));

    }
    get trashBtn() {
        return new Button($('svg[data-icon="trash-alt"]'));
    }
    get emptyCartIdent() {
        return new Button($('//button/span/span[contains(text(),"0")]'));
    }
    get fillCartIdent() {
        return new Button($('//button/span/span[contains(text(),"1")]'));
    }

    async addApplePomace() {
        await this.applePomance.click();
    }
    async addJSartwork() {
        await allure.addStep(`Add to basket`);
        await this.jsArtwork.click();
    }
    async removeFromCart() {
        await allure.addStep(`Remove from basket`);
        await this.trashBtn.click();
    }
    async checkEmptyCart() {
        await expect(this.emptyCartIdent).toBeExisting();
    }
    async checkFillCart() {
        await expect(this.fillCartIdent).toBeExisting();
    }

}
export default new BasketPage();

//$x('//button/span/span[contains(text(),"0")]') - cart is empty identifier
//$('(//button[contains(@class, "btn-basket")])[4]' - one item left product
//$$('img.logo') - click on logo to open home page
// $$('img[src$="artwork2.jpg"]') - image when item JS Artwork sold out
//<snack-bar-container class="mat-snack-bar-container ng-tns-c70-156 ng-trigger ng-trigger-state errorBar mat-snack-bar-center ng-star-inserted" style="transform: scale(1); opacity: 1;"><div class="ng-tns-c70-156" aria-live="assertive"><div class="ng-tns-c70-156"><simple-snack-bar class="mat-simple-snackbar ng-star-inserted"><span>We are out of stock! Sorry for the inconvenience.</span><div class="mat-simple-snackbar-action ng-star-inserted"><button mat-button="" class="mat-focus-indicator mat-button mat-button-base"><span class="mat-button-wrapper">X</span><span matripple="" class="mat-ripple mat-button-ripple"></span><span class="mat-button-focus-overlay"></span></button></div><!----></simple-snack-bar><!----></div></div></snack-bar-container>
//<span>We are out of stock! Sorry for the inconvenience.</span>
//<img _ngcontent-nyl-c157="" mat-card-image="" role="button" class="mat-card-image img-responsive img-thumbnail" alt="Best Juice Shop Salesman Artwork" src="assets/public/images/products/artwork2.jpg"></img>