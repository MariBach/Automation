//import BasePage from "../base/base.page.js";
import BaseElement from "../base/baseElement.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class LoginPage {    
//user credentials
    get emailInput() {
    return new Input($('#email'), "Input email");
    }
    get pswdInput() {
    return new Input($('#password'), "Password input");
    }
//button to login    
    get loginBtn() {
    return new Button($('#loginButton'), "Login");
    }
//notification about wrong input    
    get errMessage() {      
        return new BaseElement($('div[class="error ng-star-inserted"]'),"Notification");
    }
//link to registration form
    get registerBtn() {
        return new Button ($('a[routerlink="/register"]'), "Not yet a customer");
    }
//open home page
    async open() {
    await super.open(`http://localhost:3000/#/`);
    }
    //input login info and click to login  
    async login(email, pass) {
        await this.emailInput.setValue(email);
        await this.pswdInput.setValue(pass);
        await this.loginBtn.click();
    }
//check error message (wrong input data) in login window      
    async checkLogin() {
        await this.errMessage.isExisting();
    }
// move to registration form
    async moveToRegister() {
        await this.registerBtn.click();
    }    
}
export default new LoginPage();
