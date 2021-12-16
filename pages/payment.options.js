import BasePage from "../base/basePage.js";
import Dropdown from "../elements/dropdown.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class PaymentOptions extends BasePage {
    get addNewCardDrop() {
        return new Button($('div mat-expansion-panel:first-child'));
    }
    get cardOwnerName() {
        return new Input($('(//div/input)[2]'), "Owner Name");
    }
    get cardNumber() {
        return new Input($('(//div/input)[3]'), "Card Number");
    }
    get expireMonth() {
        return new Dropdown($('(//select)[1]'), "Month");
    }
    get exprireYear() {
        return new Dropdown($('(//select)[2]'), "Year");
    }
    get submitButton() {
        return new Button($('#submitButton'));
    }
    get proceedToReviewBtn() {
        return new Button($('button[aria-label="Proceed to review"]'));
    }
    get PaymentOptions() {
        return new Button($('mat-radio-button'));
    }    
    async openCardInputInfo() {
    await this.addNewCardDrop.click();
    }
    async inputCardInfo(name, number,month, year) {
        await this.cardOwnerName.setValue(name);
        await this.cardNumber.setValue(number);
        await this.expireMonth.selectMonth(month);
        await this.exprireYear.selectYear(year);
    }
    async submitCardInfo() {
        await this.submitButton.click();
    }
    async choosePaymentMethod() {
        await this.PaymentOptions.click();
    }

    async proceedToReview() {
        await this.proceedToReviewBtn.click();
    }
}
export default new PaymentOptions();
