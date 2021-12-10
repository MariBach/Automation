import Dropdown from "../elements/dropdown.js";

class RegisterPage {

     //input email in registration form
    get emailReg() {
        return $('#emailControl');
    }
    //input password in registration form
    get passwordReg() {
        return $('#passwordControl');
    }
    //confirm password in registration form
    get passwordRepeat() {
        return $('#repeatPasswordControl');
    }
    //dropdown list
    get questionDrop() {
        //return new Dropdown($('#securityAnswerControl'), 'Security question');
        return new Dropdown($('[name="securityQuestion"]'), 'Security question');
    }
    //inout security answer
    get securityAnswer() {
        return $('#securityAnswerControl');
    }
    get registerConfirmBtn() {
        return $('#registerButton');
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
}
export default new RegisterPage ();