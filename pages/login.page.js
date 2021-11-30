class LoginPage {    

    get emailInput() {
    return $('#email');
    }
    get pswdInput() {
    return $('#password');
    }    
    get loginBtn() {
    return $('#loginButton');
    }
    get errMessage() {
        return $('div[class="error ng-star-inserted"]');
    }
    async open() {
    await browser.url(`http://localhost:3000/#/`);
}
    async login(email, pass) {
    await this.emailInput.setValue(email);
    await this.pswdInput.setValue(pass);
    await this.loginBtn.click();
    }
    async checkLogin() {
        await this.errMessage.isExisting();
    }
}
export default new LoginPage();
