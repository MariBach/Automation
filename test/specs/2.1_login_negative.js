import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('Login testing', () => {
    it('Negative login testing', async () => {

        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        
        //Login page
        await loginPage.login('test@mail.com', 'test124');
        
        //After login page
        //await browser.pause(1000);
        await expect(loginPage.errMessage).toBeExisting(); //error message is shown in case wrong data input
    
    });
});

