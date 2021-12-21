import BaseElement from "../base/baseElement.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";

class OrderPage extends BasePage {
    get checkOutBtn() {
        return new Button($('#checkoutButton'));
    }
    get addNewAddressBtn() {
        return new Button($('button[aria-label="Add a new address"]'));
    }
    get deliveryAddress() {
        return new Button($('mat-radio-button'));
        //return new Button($('span.mat-radio-inner-circle'));
        //return new Button($('(//span[@class="mat-radio-outer-circle"][0])'));
    }
    get moveToPayInfoBtn() {
        return new Button ($('button[aria-label="Proceed to payment selection"]'));
    }
    get deliverySpeed() {
        return new Button($('(//mat-radio-button[contains(@class,"accent")])[1]'));
    }
    get proceedToDeliveryMethodBtn() {
        return new Button($('button[aria-label="Proceed to delivery method selection"]'));
    }
    get confirmationMsg() {
        return new BaseElement($('h1.confirmation'));
    }
    async checkOut() {
        await allure.addStep(`Open order page`);
        await this.checkOutBtn.waitForClickable();
        await this.checkOutBtn.click();
    }
    async NewAddressOpen() {
        await allure.addStep(`Open address info input`);
        await this.addNewAddressBtn.click();
    }
    async chooseDeliveryAddress() {
        await this.deliveryAddress.click();
    }
    async moveToPaymentInfo() {
        await allure.addStep(`Open payment info page`);
        await this.moveToPayInfoBtn.waitForClickable();
        await this.moveToPayInfoBtn.click();
    }
    async chooseDeliverySpeed() {
        await this.deliverySpeed.click();
    }
    async proccedToDeliveryMethod() {
        await this.proceedToDeliveryMethodBtn.waitForClickable();
        await this.proceedToDeliveryMethodBtn.click();
    }
    async orderConfirmation() {
        await expect(this.confirmationMsg).toBeExisting();
    }

}
export default new OrderPage();    