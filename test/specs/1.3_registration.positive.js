import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';
import inputData from '../../pages/inputs.js'

describe('Registration testing', () => {
    it('User registration', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login Page
        await loginPage.moveToRegister();
        //Registration form fill in
        await registerPage.register(inputData.validMail, inputData.validPswd);
        await registerPage.selectQuestion(inputData.secQuestion2);
        await registerPage.inputAnswer(inputData.answer2);
        //await registerPage.selectQuestion("Mother's maiden name?");
        //await registerPage.inputAnswer('Somename');
        await registerPage.confirmRegister();
    
    });
})