import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";
import Input from "../elements/input.js";

class AddressInfo extends BasePage{
    get countryInfo() {
        return new Input($('input[data-placeholder*="country"]'));
    }
    get nameInfo() {
        return new Input($('input[data-placeholder*="name"]'));
    }
    get mobileInfo() {
        return new Input($('input[data-placeholder*="mobile"]'));
    }
    get zipInfo() {
        return new Input($('input[data-placeholder*="ZIP"]'));
    }
    get address() {
        return new Input($('#address'));
    }
    get cityInfo() {
        return new Input($('input[data-placeholder*="city"]'));
    }
    get submitBtn() {
        return new Button($('#submitButton'));
    }
    async addressInfoInput(country, name, mobile, ZIP, Address, city) {
        await allure.startStep(`Input address info`);
        await this.countryInfo.setValue(country);
        await this.nameInfo.setValue(name);
        await this.mobileInfo.setValue(mobile);
        await this.zipInfo.setValue(ZIP);
        await this.address.setValue(Address);
        await this.cityInfo.setValue(city);
        await allure.endStep(`passed`);
    }
    async submitAddressInfo() {
        await this.submitBtn.waitForClickable();
        await this.submitBtn.click();
    }
}
export default new AddressInfo();