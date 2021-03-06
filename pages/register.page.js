import Dropdown from "../elements/dropdown.js";
import Input from "../elements/input.js";
import Button from "../elements/button.js";
import BasePage from "../base/basePage.js";

class RegisterPage extends BasePage{

     //input email in registration form
    get emailReg() {
        return new Input($('#emailControl'));
    }
    //input password in registration form
    get passwordReg() {
        return new Input($('#passwordControl'));
    }
    //confirm password in registration form
    get passwordRepeat() {
        return new Input($('#repeatPasswordControl'));
    }
    //dropdown list
    get questionDrop() {
        //return new Dropdown($('#securityAnswerControl'), 'Security question');
        return new Dropdown($('[name="securityQuestion"]'), 'Security question');
    }
    //inout security answer
    get securityAnswer() {
        return new Input($('#securityAnswerControl'));
    }
    get registerConfirmBtn() {
        return new Button ($('#registerButton'));
    }
    //errors elements
    get emailNotValid() {
        return $('//mat-error[contains(text(), "Email address is not valid.")]');
    }
    get passToShort() {
        return $('//mat-error[contains(text(), "Password must be 5-40 characters long.")]');
    }
    get emailNotUnique() {
        return $('//div[@class="error"]');
    }    
    //open register form
    async register(email, password) {
        await allure.startStep(`Input info ${email} / ${password} `);
        await this.emailReg.setValue(email);
        await this.passwordReg.setValue(password);
        await this.passwordRepeat.setValue(password);
        await allure.endStep('passed');

    }
    //select question from dropdown
    async selectQuestion(text) {
        await this.questionDrop.select(text);        
    }
    //input answer
    async inputAnswer(value) {
        await this.securityAnswer.setValue(value);
    }
    //click to complete registration
    async confirmRegister() {
        await allure.addStep(`Registration confirmation`);
        await this.registerConfirmBtn.click();
    }
    //check input user's data validation
    async checkUser() {
        await expect(this.emailNotValid).toBeExisting();
    }
    //check unique user's name
    async checkUserUnique() {
        await expect(this.emailNotUnique).toBeExisting();
    }
    //check password length
    async checkPassLength() {
        await expect(this.passToShort).toBeExisting();
    }
}
export default new RegisterPage ();