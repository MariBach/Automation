import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';
import inputData from '../../pages/inputs.js'

describe('Registration testing', () => {
    it('Password meets length requirement', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login Page
        await loginPage.moveToRegister();
        //Registration form fill in
        await registerPage.register(inputData.validMail, inputData.invalidPswd);
        await registerPage.checkPassLength();
    });
})