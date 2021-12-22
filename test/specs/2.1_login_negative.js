import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import inputData from '../../pages/inputs.js'

describe('Login testing', () => {
    it('Negative login testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        await loginPage.login(inputData.validMail, inputData.invalidPswd);        
        //After login page
        await expect(loginPage.errMessage).toBeExisting(); //error message is shown in case wrong data input
    
    });
});

