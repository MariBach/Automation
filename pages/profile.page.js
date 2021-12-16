import BasePage from "../base/basePage.js"
import Input from "../elements/input.js"
import Button from "../elements/button.js"
import BaseElement from "../base/baseElement.js";
import chai from "chai";

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
    get uploadBtn() {
        return new Button($('button[aria-label$="picture"]'));
    }
    async setUserName(user) {
        await this.userName.setValue(user);
        await this.confirmUserBtn.click();
    }
    async confirmChanges() {
        await expect(this.displayName).toBeExisting();
    }
    async uploadPhoto() {
        await this.picture.setValue("C:/Users/User/Desktop/Coursera/Automation Bootcamp/Automation/avatar.png")
        await this.uploadBtn.click();
    }

}
export default new ProfilePage();

//$$('button[aria-label$="profile"]') - go to user profile
//$$('#username') - input username
//$$('#submit') - confirm username
//$$('#picture') - 
//$$('button[aria-label$="picture"]') - upload photo