import BasePage from "../base/basePage.js"
import Input from "../elements/input.js"
import Button from "../elements/button.js"
import BaseElement from "../base/baseElement.js";


class ProfilePage extends BasePage {
    get userName() {
        return new Input($('#username'));
    }
    get confirmUserBtn() {
        return new Button($('#submit'));
    }
    get picture() {
        return new Input($('#picture'));
    }
    get displayName() {
        return new BaseElement($(`//p[contains(text(), "Mari")]`));
    }
    get displayDefault() {
        return new BaseElement($('img[src*="default"]'));
    }
    get displayPhoto() {
        return new BaseElement($('img[src*="21"]'));
    }
    get uploadBtn() {
        return new Button($('button[aria-label$="picture"]'));
    }
    async setUserName(user) {
        await allure.addStep(`Input user name '${user}'`);
        await this.userName.setValue(user);
        await this.confirmUserBtn.click();
    }
    async confirmChanges() {
        await expect(this.displayName).toBeExisting() &&
        await expect(this.displayDefault).toBeExisting(false);
    }
    async uploadPhoto() {
        await allure.startStep(`Upload photo`);
        //await this.picture.setValue('./avatar.png')
        await this.picture.setValue("C:/Users/User/Desktop/Coursera/Automation_Bootcamp/Automation/avatar.png")
        await this.uploadBtn.click();
        await allure.endStep(`passed`);
    }

}
export default new ProfilePage();

//$$('button[aria-label$="profile"]') - go to user profile
//$$('#username') - input username
//$$('#submit') - confirm username
//$$('#picture') -
//$$('button[aria-label$="picture"]') - upload photo
//$x('(//div[contains(text(),"Order ID")])[1]') - order history page
//$$('img[src*="default"]') - default photo
//$$('img[src*="21"]') - uploaded image
