import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import inputData from '../../pages/inputs.js'

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();                
        //Login page
        //User was registered with data: 'test@test.com', 'test123'
        await loginPage.login(inputData.validMail, inputData.validPswd);           
        //After login page
        await expect(mainPage.accCart).toBeExisting(); //only login users can see the shopping cart element
    });
});

