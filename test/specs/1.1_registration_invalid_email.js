import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';
import inputData from '../../pages/inputs.js'

describe('Registration testing', () => {
    it('Invalid email input', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login Page
        await loginPage.moveToRegister();
        //Registration form fill in
        await registerPage.register(inputData.invalidMail, inputData.validPswd);
        await registerPage.selectQuestion(inputData.secQuestion2);
        await registerPage.inputAnswer(inputData.answer2);
        //await registerPage.selectQuestion("Mother's maiden name?");
        //await registerPage.inputAnswer('Name');
        await registerPage.checkUser();
    });
})





// $x('//div[@class="error"]') - error email must be unique 